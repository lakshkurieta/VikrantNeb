import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { FirstPage, type FirstPageContent } from "./FirstPage";

const clamp01 = (value: number) => THREE.MathUtils.clamp(value, 0, 1);
const easeInOutCubic = (value: number) => {
  const t = clamp01(value);
  return t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2;
};

const FOV = 32;
const TAN_HALF_FOV = Math.tan(THREE.MathUtils.degToRad(FOV / 2));
/** Share of the viewport the closed book fills at rest. */
const FILL = 0.6;
/** Share of the viewport the open first page fills while it is being read. */
const READ_FILL = 0.86;
/** How far the cover swings open, in radians (~160°: open, not quite flat). */
const COVER_OPEN = 2.8;
/** Camera distance from the page at the end of the dive; well inside "page fills the screen". */
const DIVE_END = 0.12;
/** The inside of the book is white paper in either site theme (lit, so a touch below the page's white). */
const ENDPAPER = "#f4f4f4";

/**
 * Scroll choreography (progress 0 → 1 across the pinned section):
 *
 *   0.04 – 0.46  turn over: a full 360°, from the front cover round past the back to the front again
 *                (on twice the scroll of the rest of this timeline, so at a half-turn's old pace: see
 *                lib/bookTimeline.ts)
 *   0.46 – 0.50  hold on the front cover
 *   0.50 – 0.66  the cover swings open in place
 *   0.56 – 0.98  one continuous camera move, never stopping: in to reading distance (0.70), a slow
 *                push while the first page is read (to 0.82), then a smooth rush into the page's open
 *                middle until paper fills the screen
 *
 * There is deliberately no hold: a camera that stops dead while the page keeps scrolling reads as
 * scroll jank, so the reading stretch is slow, not still.
 *
 * The book never leaves the centre of the frame: it only rotates and opens, and every camera move
 * is along its own axis. The pages are white paper in both themes; the section's exit fade then
 * carries the dive from that paper into the next section's background, as if through the page.
 *
 * Shares the GSAP/Lenis clock and renders only when the scroll position changes.
 */
export class BookScene {
  readonly renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(FOV, 1, 0.02, 60);
  private turntable = new THREE.Group();
  private model: THREE.Group | null = null;
  private hinge: THREE.Object3D | null = null;
  /** First page centre in turntable space (closed, front-facing pose); the dive ends on its plane. */
  private page = new THREE.Vector3();
  private restDistance = 10;
  /** Pixels the resting book sits below the screen's centre (phones: centred between heading and buttons). */
  private restShift = 0;
  private viewSize = new THREE.Vector2(1, 1);
  private readDistance = 6;
  /** Reading distance as a share of the log-distance from rest to the dive's end (see render). */
  private readDepth = 0.1;
  /** World size of the first page, measured once after load. */
  private pageSize = new THREE.Vector2(2, 3);
  private firstPage: FirstPage | null = null;
  private environment: THREE.WebGLRenderTarget;
  private disposed = false;

  constructor(host: HTMLElement) {
    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.1;
    this.renderer.domElement.setAttribute("aria-hidden", "true");
    host.appendChild(this.renderer.domElement);

    // Local studio reflections give the jacket and bevels depth without an external HDR download.
    const room = new RoomEnvironment();
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.environment = pmrem.fromScene(room, 0.04);
    this.scene.environment = this.environment.texture;
    this.scene.environmentIntensity = 0.45;
    room.dispose();
    pmrem.dispose();

    this.scene.add(this.turntable, new THREE.HemisphereLight(0xfff7ed, 0x302820, 0.65));
    const key = new THREE.DirectionalLight(0xfff6eb, 2.4);
    key.position.set(-3, 5, 5);
    const rim = new THREE.DirectionalLight(0xffc390, 1.5);
    rim.position.set(4, 2, -3);
    const fill = new THREE.DirectionalLight(0xe2eaff, 0.65);
    fill.position.set(3, 0, 5);
    this.scene.add(key, rim, fill);
  }

  async load(url: string, firstPage?: FirstPageContent) {
    const { scene: model } = await new GLTFLoader().loadAsync(url);
    if (this.disposed) {
      this.release(model);
      return;
    }
    this.model = model;
    this.hinge = model.getObjectByName("FrontCoverHinge") ?? null;
    const replacements = new Map<THREE.MeshStandardMaterial, THREE.MeshPhysicalMaterial>();
    model.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      if (!object.geometry.attributes.normal) object.geometry.computeVertexNormals();
      const dress = (material: THREE.Material) => {
        if (!(material instanceof THREE.MeshStandardMaterial)) return material;
        if (!material.map) {
          // The file leaves metallicFactor unset, and glTF's default is fully metallic: cloth,
          // paper and the charcoal endpapers would mirror the studio environment as grey steel.
          material.metalness = 0;
          material.roughness = Math.max(material.roughness, 0.85);
          return material;
        }
        let jacket = replacements.get(material);
        if (!jacket) {
          jacket = new THREE.MeshPhysicalMaterial({
            name: material.name,
            color: material.color,
            map: material.map,
            side: material.side,
            metalness: 0,
            roughness: 0.49,
            clearcoat: 0.16,
            clearcoatRoughness: 0.38,
            sheen: 0.15,
            sheenRoughness: 0.8,
            sheenColor: new THREE.Color("#aaa193"),
          });
          jacket.map!.anisotropy = Math.min(8, this.renderer.capabilities.getMaxAnisotropy());
          replacements.set(material, jacket);
        }
        return jacket;
      };
      object.material = Array.isArray(object.material) ? object.material.map(dress) : dress(object.material);
    });
    replacements.forEach((_replacement, original) => original.dispose());

    // The authored model is in book-scale units; normalize its CLOSED pose once, before opening.
    model.updateMatrixWorld(true);
    const bounds = new THREE.Box3().setFromObject(model);
    const center = bounds.getCenter(new THREE.Vector3());
    const scale = 3.2 / bounds.getSize(new THREE.Vector3()).y;
    model.position.sub(center);
    const normalized = new THREE.Group();
    normalized.add(model);
    normalized.scale.setScalar(scale);
    this.turntable.add(normalized);

    // The first page and the inside of the cover are what the camera dives into: white paper.
    const endpaperMaterial = new THREE.MeshStandardMaterial({
      name: "endpaper",
      color: ENDPAPER,
      roughness: 0.95,
      metalness: 0,
      envMapIntensity: 0.2,
    });
    for (const name of ["FrontEndpaper", "InsideCoverLining"]) {
      const mesh = model.getObjectByName(name);
      if (mesh instanceof THREE.Mesh) mesh.material = endpaperMaterial;
    }
    frameThePages(model);

    // Landmarks for the open-and-dive: measured once, with the turntable at rest.
    this.turntable.updateMatrixWorld(true);
    const endpaper = model.getObjectByName("FrontEndpaper");
    if (endpaper) {
      const box = new THREE.Box3().setFromObject(endpaper);
      box.getCenter(this.page);
      const size = box.getSize(new THREE.Vector3());
      this.pageSize.set(size.x, size.y);
    }

    // Print the first page. The mesh ships without UVs, so project them flat from its positions.
    if (firstPage && endpaper instanceof THREE.Mesh) {
      planarUVs(endpaper.geometry);
      await document.fonts.ready;
      if (this.disposed) return;
      this.firstPage = new FirstPage(
        firstPage,
        this.pageSize.x / this.pageSize.y,
        Math.min(8, this.renderer.capabilities.getMaxAnisotropy()),
      );
      this.firstPage.draw();
      // Unlit and outside tone mapping: printed colours stay exact (the blue stays that blue) and
      // the paper stays white, whatever the studio lighting does to the rest of the book.
      endpaper.material = new THREE.MeshBasicMaterial({
        name: "first_page",
        map: this.firstPage.texture,
        toneMapped: false,
      });
    }
  }

  /**
   * `band` is the stretch of the canvas (px, top and bottom) the resting book must keep to, so it never
   * meets the text around it: on phones, between the heading and the buttons. It returns to the centre
   * as the camera dives, so the page still fills the screen.
   */
  resize(width: number, height: number, band: [top: number, bottom: number] = [0, height]) {
    this.renderer.setSize(width, height);
    this.viewSize.set(width, height);
    this.camera.aspect = width / Math.max(height, 1);
    // Fit the closed book (3.2 tall, ~2.3 wide while turning) by height, or by width on narrow screens,
    // and to 90% of the band.
    const byHeight = 3.2 / (FILL * 2 * TAN_HALF_FOV);
    const byWidth = 2.3 / (FILL * 2 * TAN_HALF_FOV * this.camera.aspect);
    const byBand = 3.2 / ((0.9 * (band[1] - band[0])) / Math.max(height, 1)) / (2 * TAN_HALF_FOV);
    this.restDistance = Math.max(byHeight, byWidth, byBand);
    this.restShift = (band[0] + band[1]) / 2 - height / 2;
    // Close enough to read the first page, never further than the resting view.
    const readByHeight = this.pageSize.y / (READ_FILL * 2 * TAN_HALF_FOV);
    const readByWidth = this.pageSize.x / (READ_FILL * 2 * TAN_HALF_FOV * this.camera.aspect);
    this.readDistance = Math.min(Math.max(readByHeight, readByWidth), this.restDistance);
    this.readDepth = Math.log(this.readDistance / this.restDistance) / Math.log(DIVE_END / this.restDistance);
    this.camera.updateProjectionMatrix();
  }

  render(progress: number, turnProgress: number) {
    const turn = easeInOutCubic(turnProgress);
    const open = easeInOutCubic((progress - 0.5) / 0.16);
    // Camera depth, 0 = resting view, 1 = at the paper. Keyframes on a monotone curve: smooth,
    // never reversing and, apart from leaving rest, never stopping.
    const depth = monotone(progress, [
      [0.56, 0],
      [0.7, this.readDepth],
      [0.82, this.readDepth + 0.04],
      [0.98, 1],
    ]);

    // One full turn about the spine axis, front to front, with a slight lean that settles before opening.
    this.turntable.rotation.set(
      0.1 * Math.sin(turn * Math.PI),
      2 * Math.PI * (1 - turn),
      -0.03 * Math.sin(turn * Math.PI),
    );
    if (this.hinge) this.hinge.rotation.y = -open * COVER_OPEN;

    // Straight down the camera's axis. Depth is measured in log-distance, so equal steps of scroll
    // feel like equal steps of zoom rather than braking into the paper.
    const distance = this.restDistance * (DIVE_END / this.restDistance) ** depth;
    this.camera.position.set(0, 0, this.page.z + distance);
    this.camera.lookAt(0, 0, this.page.z);
    // Off-centre at rest (the band), back on centre by the time the page fills the screen.
    const shift = this.restShift * (1 - depth);
    if (shift) this.camera.setViewOffset(this.viewSize.x, this.viewSize.y, 0, -shift, this.viewSize.x, this.viewSize.y);
    else this.camera.clearViewOffset();

    this.renderer.render(this.scene, this.camera);
  }

  private release(root: THREE.Object3D) {
    const textures = new Set<THREE.Texture>();
    const materials = new Set<THREE.Material>();
    root.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) return;
      object.geometry.dispose();
      (Array.isArray(object.material) ? object.material : [object.material]).forEach((material: THREE.Material) => {
        materials.add(material);
        Object.values(material).forEach((value) => {
          if (value instanceof THREE.Texture) textures.add(value);
        });
      });
    });
    textures.forEach((texture) => texture.dispose());
    materials.forEach((material) => material.dispose());
  }

  dispose() {
    this.disposed = true;
    this.firstPage?.dispose();
    if (this.model) this.release(this.model);
    this.scene.environment = null;
    this.environment.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}

/** Flat UVs across a plane's X/Y extent (u → +x, v → +y), for meshes exported without them. */
function planarUVs(geometry: THREE.BufferGeometry) {
  geometry.computeBoundingBox();
  const { min, max } = geometry.boundingBox!;
  const position = geometry.attributes.position;
  const uv = new Float32Array(position.count * 2);
  for (let i = 0; i < position.count; i++) {
    uv[i * 2] = (position.getX(i) - min.x) / (max.x - min.x || 1);
    uv[i * 2 + 1] = (position.getY(i) - min.y) / (max.y - min.y || 1);
  }
  geometry.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
}

/**
 * Real hardcover boards overhang the pages on three sides (head, tail and fore-edge). This model
 * only overhangs at head and tail, so the open right page had no edge on the right. Pull the page
 * block in at the fore-edge by the same overhang, pivoting on the spine, then fit the first page
 * exactly over the block's top face (no stretching past it, so the board frames it all round).
 * All edits are in each mesh's local space; the nodes carry translations only.
 */
function frameThePages(model: THREE.Object3D) {
  const get = (name: string) => {
    const object = model.getObjectByName(name);
    return object instanceof THREE.Mesh ? object : null;
  };
  const block = get("PageBlock");
  const edges = get("PageEdgeDetails");
  const board = get("BackCover");
  const page = get("FrontEndpaper");
  if (!block || !board || !page) return;

  const boxOf = (mesh: THREE.Mesh) => {
    mesh.geometry.computeBoundingBox();
    return mesh.geometry.boundingBox!.clone().translate(mesh.position);
  };
  const blockBox = boxOf(block);
  const boardBox = boxOf(board);
  const square = boardBox.max.y - blockBox.max.y;
  const foreEdge = boardBox.max.x - square;
  const squeeze = (foreEdge - blockBox.min.x) / (blockBox.max.x - blockBox.min.x);

  for (const mesh of [block, edges]) {
    if (!mesh) continue;
    const pivot = blockBox.min.x - mesh.position.x;
    mesh.geometry.translate(-pivot, 0, 0).scale(squeeze, 1, 1).translate(pivot, 0, 0);
    mesh.geometry.computeBoundingBox();
  }

  const pageBox = boxOf(page);
  const sx = (foreEdge - blockBox.min.x) / (pageBox.max.x - pageBox.min.x);
  const sy = (blockBox.max.y - blockBox.min.y) / (pageBox.max.y - pageBox.min.y);
  page.geometry
    .translate(-pageBox.min.x + page.position.x, -pageBox.min.y + page.position.y, 0)
    .scale(sx, sy, 1)
    .translate(blockBox.min.x - page.position.x, blockBox.min.y - page.position.y, 0);
  page.geometry.computeBoundingBox();
  // Just proud of the block's top face, so the two never z-fight.
  page.position.z += 0.0008;
}

/**
 * Monotone cubic interpolation through `points` (sorted by x), clamped at both ends.
 * Interior tangents are harmonic means of the neighbouring slopes (Fritsch–Butland), so the curve
 * never overshoots or runs backwards. It leaves the first point at rest and arrives at the last
 * still moving.
 */
function monotone(x: number, points: [number, number][]) {
  const n = points.length;
  if (x <= points[0][0]) return points[0][1];
  if (x >= points[n - 1][0]) return points[n - 1][1];
  const slopes = points.slice(1).map(([x1, y1], i) => (y1 - points[i][1]) / (x1 - points[i][0]));
  const tangent = (i: number) => {
    if (i === 0) return 0;
    if (i === n - 1) return slopes[n - 2];
    const a = slopes[i - 1];
    const b = slopes[i];
    return a * b <= 0 ? 0 : (2 * a * b) / (a + b);
  };
  let k = 0;
  while (x > points[k + 1][0]) k++;
  const [x0, y0] = points[k];
  const [x1, y1] = points[k + 1];
  const h = x1 - x0;
  const t = (x - x0) / h;
  const t2 = t * t;
  const t3 = t2 * t;
  return (
    (2 * t3 - 3 * t2 + 1) * y0 +
    (t3 - 2 * t2 + t) * h * tangent(k) +
    (-2 * t3 + 3 * t2) * y1 +
    (t3 - t2) * h * tangent(k + 1)
  );
}
