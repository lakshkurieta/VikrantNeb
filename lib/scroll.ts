import type Lenis from "lenis";

/**
 * Scroll lock that works whether or not Lenis exists yet (the loader may mount first) and whether
 * or not it exists at all (reduced motion skips it). Counted, so overlapping locks (the menu handing
 * over to the Connect form) only release when the last one does.
 */
let lenis: Lenis | null = null;
let locks = 0;
let frameY = 0;

/**
 * This frame's scroll position, for the per-frame scroll effects on GSAP's ticker. It is read once,
 * at the top of the frame (SmoothScroll), before any effect writes a style: in Chrome, reading
 * `window.scrollY` after a style change makes the browser recalculate styles there and then, and with
 * several effects reading after the book's writes, that cost ~10ms a frame in the dive.
 */
export const frameScroll = () => frameY;
export const readFrameScroll = () => {
  frameY = window.scrollY;
};

export function registerLenis(instance: Lenis | null) {
  lenis = instance;
  if (locks) lenis?.stop();
}

export function lockScroll() {
  locks += 1;
  lenis?.stop();
  document.documentElement.style.overflow = "hidden";
}

export function unlockScroll() {
  locks = Math.max(0, locks - 1);
  if (locks) return;
  lenis?.start();
  document.documentElement.style.overflow = "";
}

/** Smoothly back to the top of the page: through Lenis when it runs, natively otherwise. */
export function scrollToTop() {
  if (lenis) lenis.scrollTo(0);
  else
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
}
