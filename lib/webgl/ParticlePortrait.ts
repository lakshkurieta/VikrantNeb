import {
  BufferAttribute,
  Group,
  InstancedBufferAttribute,
  InstancedBufferGeometry,
  Mesh,
  PerspectiveCamera,
  Scene,
  ShaderMaterial,
  Vector2,
  Vector3,
  WebGLRenderer,
} from "three";
import { TouchTexture } from "./TouchTexture";
import { particleFragmentShader, particleVertexShader } from "./shaders/particles";

export type Rect = { x: number; y: number; width: number; height: number };

export type PortraitPalette = {
  /** Colour of the darkest pixels (hair, beard). Keep it above the page background or they vanish. */
  shadow: string;
  /** Colour of the brightest pixels. */
  highlight: string;
  /** Colour particles flare to when the cursor pushes them. */
  accent: string;
};

export type PortraitTheme = "dark" | "light";

export type ParticlePortraitOptions = {
  /** Dark mode glows (bright pixels → big particles); light mode prints (dark pixels → big dots). */
  palettes: Record<PortraitTheme, PortraitPalette>;
  theme?: PortraitTheme;
  /** Target distance between particles in CSS px. Lower is denser. */
  spacing?: number;
  minColumns?: number;
  maxColumns?: number;
  reducedMotion?: boolean;
};

const FOV = 35;
const DPR_CAP = 2;
/** Pixels with less coverage than this (0–255) are background and get no particle. */
const ALPHA_CUTOFF = 90;
/** Re-sample the photo only when the grid would change by more than this. */
const REBUILD_THRESHOLD = 0.2;

const hexToVec3 = (hex: string) => {
  const n = parseInt(hex.replace("#", ""), 16);
  return new Vector3(((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255);
};

/**
 * Renders a photo as a field of interactive particles.
 *
 * Layout is owned by the DOM: call `setViewport` with the canvas size and `setFrame` with the
 * rectangle the portrait should fill (CSS px, relative to the canvas). The camera is placed so one
 * world unit is one CSS pixel on the z = 0 plane, so DOM rects map straight onto the scene.
 *
 * The instance does not run its own loop; call `tick(dt)` from the app's single ticker.
 */
export class ParticlePortrait {
  /** 0 → scattered dust, 1 → assembled portrait. Tween it for the intro. */
  reveal = 0;
  /** 0 → 1 as the hero scrolls away. */
  scatter = 0;
  /** Downward offset in CSS px for scroll parallax. Applied as-is: the scroll is already smoothed. */
  drift = 0;

  readonly canvas: HTMLCanvasElement;

  private readonly renderer: WebGLRenderer;
  private readonly scene = new Scene();
  private readonly camera = new PerspectiveCamera(FOV, 1, 1, 10_000);
  private readonly group = new Group();
  private readonly material: ShaderMaterial;
  private readonly touch = new TouchTexture();
  private readonly options: Required<ParticlePortraitOptions>;

  private mesh?: Mesh<InstancedBufferGeometry, ShaderMaterial>;
  private image?: HTMLImageElement;
  private grid = { cols: 0, rows: 0 };
  private viewport = { width: 1, height: 1 };
  private frame: Rect = { x: 0, y: 0, width: 1, height: 1 };
  private baseY = 0;

  private time = 0;
  private pointer = { x: 0, y: 0, inside: false };
  private lastUv: { x: number; y: number } | null = null;
  /** 0 = dark, 1 = light; eased toward `themeTarget` unless a switch is instant. */
  private themeMix = 0;
  private themeTarget = 0;
  private readonly palettes: Record<PortraitTheme, { shadow: Vector3; highlight: Vector3; accent: Vector3 }>;

  constructor(options: ParticlePortraitOptions) {
    this.options = {
      spacing: 2.4,
      minColumns: 120,
      maxColumns: 360,
      reducedMotion: false,
      theme: "dark",
      ...options,
    };

    const toVectors = (p: PortraitPalette) => ({
      shadow: hexToVec3(p.shadow),
      highlight: hexToVec3(p.highlight),
      accent: hexToVec3(p.accent),
    });
    this.palettes = { dark: toVectors(this.options.palettes.dark), light: toVectors(this.options.palettes.light) };
    this.themeMix = this.themeTarget = this.options.theme === "light" ? 1 : 0;

    this.renderer = new WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, DPR_CAP));
    this.canvas = this.renderer.domElement;

    this.material = new ShaderMaterial({
      vertexShader: particleVertexShader,
      fragmentShader: particleFragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 1.45 },
        uScale: { value: 1 },
        uDepth: { value: 5 },
        uRandom: { value: 1.6 },
        uReveal: { value: 0 },
        uScatter: { value: 0 },
        uTouchForce: { value: 0 },
        uInvert: { value: this.themeMix },
        uGrid: { value: new Vector2(1, 1) },
        uTouch: { value: this.touch.texture },
        uShadow: { value: new Vector3() },
        uHighlight: { value: new Vector3() },
        uAccent: { value: new Vector3() },
      },
      transparent: true,
      depthTest: false,
      depthWrite: false,
    });

    this.scene.add(this.group);
    this.applyTheme();
  }

  /** Fetches and decodes the photo, then builds the particle grid for the current frame size. */
  async load(src: string) {
    const image = new Image();
    image.decoding = "async";
    image.src = src;
    await image.decode();
    this.image = image;
    this.build();
    // Compile the shaders off the main thread where the browser allows it
    // (KHR_parallel_shader_compile), so the first visible frame does not stall.
    await this.renderer.compileAsync(this.scene, this.camera);
  }

  setViewport(width: number, height: number) {
    this.viewport = { width: Math.max(width, 1), height: Math.max(height, 1) };
    this.renderer.setSize(this.viewport.width, this.viewport.height, false);
    this.layout();
  }

  setFrame(rect: Rect) {
    this.frame = rect;
    const cols = this.columnsFor(rect.width);
    if (this.image && Math.abs(cols - this.grid.cols) / Math.max(this.grid.cols, 1) > REBUILD_THRESHOLD) {
      this.build();
    }
    this.layout();
  }

  /** Pointer position in CSS px relative to the canvas. */
  pointerMove(x: number, y: number) {
    this.pointer.x = x;
    this.pointer.y = y;
    this.pointer.inside = true;
  }

  /**
   * `instant` jumps straight to the new palette — used when a view transition is already animating
   * the switch. Otherwise the particles blend across over ~0.6s, matching the CSS colour fade.
   */
  setTheme(theme: PortraitTheme, instant = false) {
    this.themeTarget = theme === "light" ? 1 : 0;
    if (instant) {
      this.themeMix = this.themeTarget;
      this.applyTheme();
    }
  }

  pointerLeave() {
    this.pointer.inside = false;
    this.lastUv = null;
  }

  tick(dt: number) {
    // A long frame (tab switch, debugger) must not fling the trail.
    const step = Math.min(dt, 1 / 20);
    this.time += step;

    // The portrait itself never follows the cursor; only the particles under it scatter.
    this.feedPointer(step);
    this.touch.update(step);
    this.group.position.y = this.baseY - this.drift;

    if (this.themeMix !== this.themeTarget) {
      const k = 1 - Math.exp(-step * 7);
      this.themeMix += (this.themeTarget - this.themeMix) * k;
      if (Math.abs(this.themeTarget - this.themeMix) < 0.002) this.themeMix = this.themeTarget;
      this.applyTheme();
    }

    const u = this.material.uniforms;
    u.uTime.value = this.time * (this.options.reducedMotion ? 0.3 : 1);
    u.uReveal.value = this.reveal;
    u.uScatter.value = this.scatter;

    this.renderer.render(this.scene, this.camera);
  }

  dispose() {
    this.mesh?.geometry.dispose();
    this.material.dispose();
    this.touch.dispose();
    this.renderer.dispose();
    this.canvas.remove();
  }

  // ---------------------------------------------------------------------------------------------

  private applyTheme() {
    const { dark, light } = this.palettes;
    const t = this.themeMix;
    const u = this.material.uniforms;
    u.uInvert.value = t;
    (u.uShadow.value as Vector3).lerpVectors(dark.shadow, light.shadow, t);
    (u.uHighlight.value as Vector3).lerpVectors(dark.highlight, light.highlight, t);
    (u.uAccent.value as Vector3).lerpVectors(dark.accent, light.accent, t);
  }

  private columnsFor(width: number) {
    const { spacing, minColumns, maxColumns } = this.options;
    return Math.round(Math.min(Math.max(width / spacing, minColumns), maxColumns));
  }

  /** Samples the photo down to one pixel per particle and uploads the instance attributes. */
  private build() {
    const image = this.image;
    if (!image) return;

    const cols = this.columnsFor(this.frame.width);
    const rows = Math.max(1, Math.round((cols * image.naturalHeight) / image.naturalWidth));

    const sampler = document.createElement("canvas");
    sampler.width = cols;
    sampler.height = rows;
    const ctx = sampler.getContext("2d", { willReadFrequently: true })!;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(image, 0, 0, cols, rows);
    const { data } = ctx.getImageData(0, 0, cols, rows);

    let count = 0;
    for (let i = 3; i < data.length; i += 4) if (data[i] > ALPHA_CUTOFF) count++;

    const offsets = new Float32Array(count * 2);
    const tones = new Float32Array(count * 2);
    const seeds = new Float32Array(count * 4);

    for (let y = 0, j = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        const i = (y * cols + x) * 4;
        if (data[i + 3] <= ALPHA_CUTOFF) continue;

        offsets[j * 2] = x;
        offsets[j * 2 + 1] = rows - 1 - y; // canvas rows run top-down; the grid runs bottom-up
        tones[j * 2] = (data[i] * 0.21 + data[i + 1] * 0.71 + data[i + 2] * 0.07) / 255;
        tones[j * 2 + 1] = data[i + 3] / 255;
        seeds[j * 4] = Math.random();
        seeds[j * 4 + 1] = Math.random();
        seeds[j * 4 + 2] = Math.random();
        seeds[j * 4 + 3] = Math.random() * Math.PI * 2;
        j++;
      }
    }

    const geometry = new InstancedBufferGeometry();
    geometry.setAttribute(
      "position",
      new BufferAttribute(new Float32Array([-0.5, 0.5, 0, 0.5, 0.5, 0, -0.5, -0.5, 0, 0.5, -0.5, 0]), 3),
    );
    geometry.setAttribute("uv", new BufferAttribute(new Float32Array([0, 0, 1, 0, 0, 1, 1, 1]), 2));
    geometry.setIndex([0, 2, 1, 2, 3, 1]);
    geometry.setAttribute("aOffset", new InstancedBufferAttribute(offsets, 2));
    geometry.setAttribute("aTone", new InstancedBufferAttribute(tones, 2));
    geometry.setAttribute("aSeed", new InstancedBufferAttribute(seeds, 4));
    geometry.instanceCount = count;

    if (this.mesh) {
      this.mesh.geometry.dispose();
      this.mesh.geometry = geometry;
    } else {
      this.mesh = new Mesh(geometry, this.material);
      // The geometry is a single quad; its bounds say nothing about where the instances are.
      this.mesh.frustumCulled = false;
      this.group.add(this.mesh);
    }

    this.grid = { cols, rows };
    const u = this.material.uniforms;
    (u.uGrid.value as Vector2).set(cols, rows);
    // Cursor push scales with the grid so it reads the same at every density.
    u.uTouchForce.value = rows * 0.11;
    this.layout();
  }

  private layout() {
    const { width, height } = this.viewport;
    this.camera.aspect = width / height;
    this.camera.position.z = height / 2 / Math.tan((FOV * Math.PI) / 360);
    this.camera.far = this.camera.position.z * 4;
    this.camera.updateProjectionMatrix();

    const f = this.frame;
    this.baseY = -(f.y + f.height / 2 - height / 2);
    this.group.position.set(f.x + f.width / 2 - width / 2, this.baseY - this.drift, 0);

    if (this.mesh && this.grid.cols > 0) {
      const scale = Math.min(f.width / this.grid.cols, f.height / this.grid.rows);
      this.mesh.scale.setScalar(scale);
      this.material.uniforms.uScale.value = scale;
    }
  }

  /** Pointer position as UV inside the portrait frame (origin bottom-left). */
  private pointerUv() {
    const f = this.frame;
    return {
      x: (this.pointer.x - f.x) / f.width,
      y: 1 - (this.pointer.y - (f.y + this.drift)) / f.height,
    };
  }

  /**
   * Turns pointer motion into touch stamps. Runs once per frame rather than per event, so a page
   * scrolling under a still cursor disturbs the particles too. Force follows speed, as in the
   * original demo, but measured per second so it does not depend on the refresh rate.
   */
  private feedPointer(dt: number) {
    if (!this.pointer.inside || this.reveal < 0.6) {
      this.lastUv = null;
      return;
    }

    const uv = this.pointerUv();
    const last = this.lastUv;
    this.lastUv = uv;
    if (!last) return;

    const inside = (p: { x: number; y: number }) => p.x > -0.05 && p.x < 1.05 && p.y > -0.05 && p.y < 1.05;
    if (!inside(uv) && !inside(last)) return;

    const dist = Math.hypot(uv.x - last.x, uv.y - last.y);
    if (dist < 1e-4) return;
    const force = Math.min((dist / dt / 0.6) ** 2, 1);

    // Fill gaps on fast strokes so the trail stays continuous.
    const steps = Math.min(Math.ceil(dist / 0.02), 6);
    for (let s = 1; s <= steps; s++) {
      const t = s / steps;
      this.touch.add(last.x + (uv.x - last.x) * t, last.y + (uv.y - last.y) * t, force);
    }
  }
}
