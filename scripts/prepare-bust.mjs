#!/usr/bin/env node
/**
 * Builds the 3D bust the podcast stage shows, from the 29 MB source scan.
 *
 *   npm run bust                          # uses assets/source/vikrant-neb-bust.glb
 *   npm run bust -- path/to/model.glb     # any single-material glTF binary
 *
 * Steps:
 *   1. Drop the emissive map: it's black (max 8/255), but with emissiveFactor 1 it would still
 *      tint the whole model and cost a texture download.
 *   2. Weld and simplify the mesh (~593k → ~90k triangles). At the size it's shown, the textures
 *      carry the detail; the extra triangles were only download and upload time.
 *   3. Re-encode the textures as WebP: colour at 2048px (the face is a small island of the
 *      atlas), normal and metal/roughness at 1024px.
 *   4. Meshopt-compress the geometry (the site's loader registers the decoder).
 *
 * Writes public/assets/podcast/vikrant-neb-bust.glb.
 */
import { mkdir } from "node:fs/promises";
import { statSync } from "node:fs";
import path from "node:path";
import { NodeIO } from "@gltf-transform/core";
import { ALL_EXTENSIONS } from "@gltf-transform/extensions";
import { dedup, meshopt, prune, simplify, textureCompress, weld } from "@gltf-transform/functions";
import { MeshoptEncoder, MeshoptSimplifier } from "meshoptimizer";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const input = path.resolve(process.argv[2] ?? path.join(ROOT, "assets/source/vikrant-neb-bust.glb"));
const output = path.join(ROOT, "public/assets/podcast/vikrant-neb-bust.glb");
/** Fraction of triangles kept, and the largest error allowed (relative to the model's size). */
const SIMPLIFY = { ratio: 0.15, error: 0.0004 };

await MeshoptEncoder.ready;
await MeshoptSimplifier.ready;

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({
  "meshopt.encoder": MeshoptEncoder,
});
const document = await io.read(input);
const triangles = () =>
  document
    .getRoot()
    .listMeshes()
    .flatMap((mesh) => mesh.listPrimitives())
    .reduce((sum, prim) => sum + (prim.getIndices()?.getCount() ?? 0) / 3, 0);
const before = triangles();

for (const material of document.getRoot().listMaterials()) {
  material.setEmissiveTexture(null).setEmissiveFactor([0, 0, 0]);
}

await document.transform(
  dedup(),
  weld(),
  simplify({ simplifier: MeshoptSimplifier, ...SIMPLIFY }),
  prune(),
  textureCompress({ encoder: sharp, targetFormat: "webp", slots: /^baseColor/, resize: [2048, 2048], quality: 86 }),
  textureCompress({ encoder: sharp, targetFormat: "webp", slots: /^(normal|metallicRoughness)/, resize: [1024, 1024] }),
  meshopt({ encoder: MeshoptEncoder, level: "medium" }),
);

await mkdir(path.dirname(output), { recursive: true });
await io.write(output, document);
const mb = (file) => (statSync(file).size / 1e6).toFixed(1);
console.log(
  `${path.relative(ROOT, output)}: ${Math.round(before)} → ${Math.round(triangles())} triangles, ${mb(input)} MB → ${mb(output)} MB`,
);
