import type { CSSProperties } from "react";
import { cn } from "@/lib/cn";
import { signatureInkWidth, signatureViewBox } from "./strokes";
import { signatureTimeline } from "./timeline";

export const SIGNATURE_SRC = "/images/signature/vikrant-neb-signature.png";

type SignatureProps = {
  /** Unique per instance: it names the SVG mask. */
  id: string;
  /** Draw the signature stroke by stroke. Without it the ink is simply shown. */
  draw?: boolean;
  /** Seconds before the pen starts. */
  delay?: number;
  className?: string;
};

/**
 * Vikrant's signature. When drawing, the real ink is revealed through a mask of pen strokes traced
 * along its centreline (scripts/trace-signature.py), so it looks signed rather than wiped.
 * The stroke animation is CSS (`.signature-stroke` in globals.css) and starts at first paint.
 */
export function Signature({ id, draw = false, delay = 0, className }: SignatureProps) {
  const { width, height } = signatureViewBox;
  const inkId = `${id}-ink`;
  const penId = `${id}-pen`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={cn("block h-auto w-full overflow-visible", className)}
      role="img"
      aria-label="Vikrant Neb's signature"
    >
      <defs>
        {/* The ink is a white alpha mask; the colour comes from `currentColor`, so it follows the theme. */}
        <mask id={inkId} maskUnits="userSpaceOnUse" x={0} y={0} width={width} height={height}>
          <image href={SIGNATURE_SRC} width={width} height={height} />
        </mask>
        {draw && (
          <mask id={penId} maskUnits="userSpaceOnUse" x={0} y={0} width={width} height={height}>
            {signatureTimeline.strokes.map((stroke, i) => (
              <path
                key={i}
                d={stroke.d}
                pathLength={1}
                className="signature-stroke"
                fill="none"
                stroke="#fff"
                strokeWidth={signatureInkWidth * 2.6}
                strokeLinecap="round"
                strokeLinejoin="round"
                style={
                  {
                    "--stroke-delay": `${(delay + stroke.delay).toFixed(3)}s`,
                    "--stroke-duration": `${stroke.duration.toFixed(3)}s`,
                  } as CSSProperties
                }
              />
            ))}
          </mask>
        )}
      </defs>
      <g mask={draw ? `url(#${penId})` : undefined}>
        <rect width={width} height={height} fill="currentColor" mask={`url(#${inkId})`} />
      </g>
    </svg>
  );
}
