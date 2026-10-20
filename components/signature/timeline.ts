import { signatureStrokes } from "./strokes";

/** Pen speed in viewBox units per second. The underline is a flourish, so it moves faster. */
const PEN_SPEED = 3000;
const FLOURISH_SPEED = 4200;
/** Pause when the pen lifts between strokes. */
const PEN_LIFT = 0.025;
const MIN_STROKE = 0.06;

export type StrokeTiming = { d: string; delay: number; duration: number };

/** When each stroke starts and how long it takes, in seconds. Shared by the SVG and the loader. */
export const signatureTimeline = (() => {
  const longest = Math.max(...signatureStrokes.map((s) => s.length));
  let t = 0;
  const strokes: StrokeTiming[] = signatureStrokes.map((stroke) => {
    const speed = stroke.length === longest ? FLOURISH_SPEED : PEN_SPEED;
    const duration = Math.max(stroke.length / speed, MIN_STROKE);
    const timing = { d: stroke.d, delay: t, duration };
    t += duration + PEN_LIFT;
    return timing;
  });
  return { strokes, total: t };
})();
