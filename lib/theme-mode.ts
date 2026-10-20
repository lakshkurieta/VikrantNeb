import { circleReveal } from "./reveal";
import { themes, type ThemeName } from "./theme";

/**
 * Theme state lives in one place: `data-theme` on <html>. CSS keys every colour off it, the WebGL
 * portrait listens for `vn:theme`, and the choice persists in localStorage.
 *
 * Light is the default; dark is opt-in and remembered.
 */
const STORAGE_KEY = "vn-theme";
const EVENT = "vn:theme";
/** Matches the `.theme-fading` duration in globals.css. */
const FADE_MS = 650;

export type ThemeChange = { theme: ThemeName; instant: boolean };

/**
 * Runs in <head> before first paint, so a returning dark-mode visitor never sees a light flash.
 * Kept tiny and dependency-free: it is inlined as a string.
 */
export const themeInitScript = `(function(){try{var t=localStorage.getItem("${STORAGE_KEY}")==="dark"?"dark":"light";var d=document.documentElement;d.dataset.theme=t;var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",t==="light"?"${themes.light.canvas}":"${themes.dark.canvas}")}catch(e){}})();`;

export const syncThemeColor = () =>
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", themes[getTheme()].canvas);

export const getTheme = (): ThemeName => (document.documentElement.dataset.theme === "dark" ? "dark" : "light");

export function onThemeChange(callback: (change: ThemeChange) => void) {
  const handler = (event: Event) => callback((event as CustomEvent<ThemeChange>).detail);
  window.addEventListener(EVENT, handler);
  return () => window.removeEventListener(EVENT, handler);
}

/** Flips the attribute, persists it and tells the WebGL layer. Synchronous, so it can run inside a view transition. */
function apply(theme: ThemeName, instant: boolean) {
  const root = document.documentElement;
  root.dataset.theme = theme;
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Private mode or storage disabled: the theme still applies for this visit.
  }
  syncThemeColor();
  window.dispatchEvent(new CustomEvent<ThemeChange>(EVENT, { detail: { theme, instant } }));
}

let busy = false;

/**
 * Switches theme with a transition.
 *
 * - View Transitions API: the new theme is revealed by a circle that grows from `origin` (the
 *   toggle; lib/reveal.ts). The portrait jumps to its new palette instantly, because the circle is
 *   already doing the transition.
 * - Otherwise: every colour eases across (`.theme-fading`) and the portrait blends to match.
 * - Reduced motion: instant.
 */
export function toggleTheme(origin?: { x: number; y: number }) {
  if (busy) return;
  const next: ThemeName = getTheme() === "dark" ? "light" : "dark";
  const root = document.documentElement;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const animated = !reducedMotion && typeof document.startViewTransition === "function";
  if (animated || reducedMotion) {
    circleReveal(() => apply(next, true), origin);
    return;
  }
  busy = true;
  root.classList.add("theme-fading");
  apply(next, false);
  window.setTimeout(() => {
    root.classList.remove("theme-fading");
    busy = false;
  }, FADE_MS);
}
