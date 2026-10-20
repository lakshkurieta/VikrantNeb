import { CanvasTexture, SRGBColorSpace } from "three";

export type FirstPageContent = {
  quote: string;
  stat: { highlight: string; rest: string };
};

/** A book page is white paper in either site theme: the light theme's page colour, dark ink. */
const INK = { paper: "#ffffff", quote: "#2e2b27", highlight: "#2563eb", stat: "#141210" } as const;

const WIDTH = 1200;

/**
 * The book's first page, printed onto a canvas texture: the quote at the head of the page and the
 * launch line at its foot, both centred. The middle is left as open paper on purpose, because
 * that's where the camera dives in, so the dive lands on clean paper rather than a giant letter.
 *
 * Uses the site's own font (Manrope via next/font), read from the body's computed style.
 */
export class FirstPage {
  readonly texture: CanvasTexture;
  private readonly canvas = document.createElement("canvas");
  private readonly ctx: CanvasRenderingContext2D;
  private readonly family: string;

  constructor(
    private readonly content: FirstPageContent,
    /** Page width / height. */
    aspect: number,
    anisotropy: number,
  ) {
    this.canvas.width = WIDTH;
    this.canvas.height = Math.round(WIDTH / aspect);
    this.ctx = this.canvas.getContext("2d")!;
    this.family = getComputedStyle(document.body).fontFamily || "sans-serif";
    this.texture = new CanvasTexture(this.canvas);
    this.texture.colorSpace = SRGBColorSpace;
    this.texture.anisotropy = anisotropy;
  }

  draw() {
    const { ctx, canvas, content } = this;
    const ink = INK;
    const W = canvas.width;
    const H = canvas.height;
    const measure = W * 0.84;

    ctx.fillStyle = ink.paper;
    ctx.fillRect(0, 0, W, H);
    ctx.textAlign = "center";
    ctx.textBaseline = "alphabetic";

    // Head of the page: the quote.
    const quoteSize = Math.round(W * 0.058);
    this.setFont(700, quoteSize, -0.02);
    ctx.fillStyle = ink.quote;
    const quoteLines = this.wrap(content.quote, measure);
    quoteLines.forEach((line, i) => ctx.fillText(line, W / 2, H * 0.15 + quoteSize + i * quoteSize * 1.2));

    // Foot of the page: "150 Copies" in blue over "Gone in 1.5 Days!".
    const statSize = Math.round(W * 0.088);
    this.setFont(800, statSize, -0.03);
    const statTop = H * 0.7;
    ctx.fillStyle = ink.highlight;
    ctx.fillText(content.stat.highlight, W / 2, statTop + statSize);
    ctx.fillStyle = ink.stat;
    this.wrap(content.stat.rest, measure).forEach((line, i) =>
      ctx.fillText(line, W / 2, statTop + statSize * (2.1 + i * 1.1)),
    );

    this.texture.needsUpdate = true;
  }

  dispose() {
    this.texture.dispose();
  }

  private setFont(weight: number, size: number, tracking: number) {
    this.ctx.font = `${weight} ${size}px ${this.family}`;
    // Canvas letter-spacing is newer; skip it quietly where unsupported.
    if ("letterSpacing" in this.ctx) this.ctx.letterSpacing = `${(tracking * size).toFixed(1)}px`;
  }

  private wrap(text: string, maxWidth: number) {
    const lines: string[] = [];
    let line = "";
    for (const word of text.split(/\s+/)) {
      const next = line ? `${line} ${word}` : word;
      if (line && this.ctx.measureText(next).width > maxWidth) {
        lines.push(line);
        line = word;
      } else {
        line = next;
      }
    }
    if (line) lines.push(line);
    return lines;
  }
}
