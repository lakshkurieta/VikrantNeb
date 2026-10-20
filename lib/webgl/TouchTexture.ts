import { CanvasTexture, LinearFilter } from "three";

type TouchPoint = { x: number; y: number; age: number; force: number };

const easeOutSine = (t: number) => Math.sin((t * Math.PI) / 2);

/**
 * A small greyscale canvas the particle shader samples as "how hard was this spot pushed".
 * Pointer samples are stamped as soft radial blobs that swell, then fade over `maxAge`.
 *
 * Ageing is in seconds rather than frames, so the trail is the same length at 60Hz and 120Hz.
 */
export class TouchTexture {
  readonly texture: CanvasTexture;
  private readonly size = 96;
  private readonly maxAge = 1.8;
  private readonly radius = 0.13;
  private readonly ctx: CanvasRenderingContext2D;
  private trail: TouchPoint[] = [];
  private dirty = false;

  constructor() {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = this.size;
    this.ctx = canvas.getContext("2d")!;
    this.clear();

    this.texture = new CanvasTexture(canvas);
    this.texture.minFilter = LinearFilter;
    this.texture.magFilter = LinearFilter;
    this.texture.generateMipmaps = false;
  }

  /** `x`, `y` in UV space (origin bottom-left); `force` in [0, 1]. */
  add(x: number, y: number, force: number) {
    if (force <= 0.002) return;
    this.trail.push({ x, y, age: 0, force: Math.min(force, 1) });
  }

  update(dt: number) {
    if (this.trail.length === 0) {
      // One last upload of the cleared canvas, then go quiet.
      if (this.dirty) {
        this.clear();
        this.texture.needsUpdate = true;
        this.dirty = false;
      }
      return;
    }

    this.trail = this.trail.filter((point) => (point.age += dt) <= this.maxAge);

    this.clear();
    for (const point of this.trail) this.stamp(point);
    this.texture.needsUpdate = true;
    this.dirty = true;
  }

  dispose() {
    this.texture.dispose();
  }

  private clear() {
    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(0, 0, this.size, this.size);
  }

  private stamp(point: TouchPoint) {
    const rise = this.maxAge * 0.3;
    const intensity =
      (point.age < rise ? easeOutSine(point.age / rise) : easeOutSine(1 - (point.age - rise) / (this.maxAge - rise))) *
      point.force;

    const x = point.x * this.size;
    const y = (1 - point.y) * this.size;
    const radius = Math.max(this.size * this.radius * intensity, 0.5);

    const gradient = this.ctx.createRadialGradient(x, y, radius * 0.25, x, y, radius);
    gradient.addColorStop(0, "rgba(255, 255, 255, 0.2)");
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    this.ctx.beginPath();
    this.ctx.fillStyle = gradient;
    this.ctx.arc(x, y, radius, 0, Math.PI * 2);
    this.ctx.fill();
  }
}
