/** Matches the theme switch's original reveal. */
const REVEAL_MS = 900;

/**
 * Applies `update` (a synchronous DOM change) as a view transition: the old page is frozen and the
 * new one is revealed by a circle growing from `origin` to the farthest corner. Shared by the theme
 * switch and the Connect form. Without the View Transitions API (or with reduced motion) the change
 * simply applies; returns false then, so a caller can add its own fallback.
 */
export function circleReveal(update: () => void, origin?: { x: number; y: number }) {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced || typeof document.startViewTransition !== "function") {
    update();
    return false;
  }
  const x = origin?.x ?? window.innerWidth / 2;
  const y = origin?.y ?? 0;
  const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
  const transition = document.startViewTransition(update);
  transition.ready
    .then(() => {
      document.documentElement.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        { duration: REVEAL_MS, easing: "cubic-bezier(0.76, 0, 0.24, 1)", pseudoElement: "::view-transition-new(root)" },
      );
    })
    .catch(() => {});
  return true;
}

/** The centre of an element, for `origin`. */
export const centreOf = (el: Element) => {
  const r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
};
