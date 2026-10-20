#!/usr/bin/env node
/**
 * Builds the portrait the particle hero samples from.
 *
 *   npm run portrait                         # uses assets/source/vikrant-neb.png
 *   npm run portrait -- path/to/photo.svg    # any PNG/JPG/WebP, or an SVG wrapping one
 *
 * Steps:
 *   1. If the input is an SVG export (Figma wraps rasters as base64 <image>), pull the PNG out.
 *   2. Find the head from the alpha channel and centre a square crop on it.
 *   3. Write a 720px WebP with alpha. The browser downsamples it again to the particle grid,
 *      so this only needs enough detail for the densest (desktop) grid.
 *
 * The source must have a transparent background: the shader keeps a particle only where alpha > 0.
 */
import { readFile, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const input = path.resolve(process.argv[2] ?? path.join(ROOT, "assets/source/vikrant-neb.png"));
const outDir = path.join(ROOT, "public/images/portrait");
const OUT_SIZE = 720;

async function loadRaster(file) {
  if (!file.toLowerCase().endsWith(".svg")) return readFile(file);
  const svg = await readFile(file, "utf8");
  const match = svg.match(/data:image\/(?:png|jpe?g|webp);base64,([^"']+)/);
  if (!match) throw new Error(`No embedded raster found in ${file}`);
  return Buffer.from(match[1], "base64");
}

const raster = await loadRaster(input);
const { data, info } = await sharp(raster).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const alphaAt = (x, y) => data[(y * width + x) * channels + 3];

// Vertical extent of the subject.
let top = height;
let bottom = 0;
for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x += 4) {
    if (alphaAt(x, y) > 128) {
      top = Math.min(top, y);
      bottom = Math.max(bottom, y);
      break;
    }
  }
}

// Horizontal centre of the head: the subject's widest point in its top quarter.
const headBand = [top + Math.round((bottom - top) * 0.08), top + Math.round((bottom - top) * 0.25)];
let left = width;
let right = 0;
for (let y = headBand[0]; y < headBand[1]; y += 2) {
  for (let x = 0; x < width; x++) {
    if (alphaAt(x, y) > 128) {
      left = Math.min(left, x);
      break;
    }
  }
  for (let x = width - 1; x >= 0; x--) {
    if (alphaAt(x, y) > 128) {
      right = Math.max(right, x);
      break;
    }
  }
}
const headCenterX = Math.round((left + right) / 2);

// Square crop: as tall as the frame allows, with a little headroom above the hair.
const side = Math.min(height, width);
const cropTop = Math.max(0, Math.min(height - side, top - Math.round(side * 0.04)));
const cropLeft = Math.max(0, Math.min(width - side, headCenterX - Math.round(side / 2)));

await mkdir(outDir, { recursive: true });
const outFile = path.join(outDir, "vikrant-neb.webp");
const result = await sharp(raster)
  .extract({ left: cropLeft, top: cropTop, width: side, height: side })
  .resize(OUT_SIZE, OUT_SIZE, { kernel: "lanczos3" })
  .webp({ quality: 90, alphaQuality: 100, effort: 6 })
  .toFile(outFile);

console.log(
  `source ${width}x${height}, head centre x=${headCenterX}, crop ${side}px @ (${cropLeft}, ${cropTop})\n` +
    `→ ${path.relative(ROOT, outFile)} ${result.width}x${result.height}, ${(result.size / 1024).toFixed(1)} KB`,
);
