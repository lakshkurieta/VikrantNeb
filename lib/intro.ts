/**
 * Page-intro handshake between the loader, the CSS choreography and the WebGL portrait.
 *
 *   signature drawn → the portrait may do its main-thread setup (the pen has stopped, so a hitch
 *                     during the hold is invisible; during the stroke animation it would show)
 *   portrait ready  → the loader may leave
 *   intro "play"    → hero copy animates in (CSS keys off :root[data-intro]) and particles assemble
 *   intro "done"    → loader gone, the navigation bar's own signature takes over from the flying one
 *
 * State lives on <html> as data attributes as well as events, so a listener that attaches late
 * still sees what already happened.
 */
const root = () => document.documentElement;

const once = (flag: () => boolean, event: string, callback: () => void) => {
  if (flag()) {
    callback();
    return () => {};
  }
  const handler = () => callback();
  window.addEventListener(event, handler, { once: true });
  return () => window.removeEventListener(event, handler);
};

export function signalSignatureDrawn() {
  root().dataset.signature = "drawn";
  window.dispatchEvent(new Event("vn:signature-drawn"));
}

export const whenSignatureDrawn = (callback: () => void) =>
  once(() => root().dataset.signature === "drawn", "vn:signature-drawn", callback);

export function signalPortraitReady() {
  root().dataset.portrait = "ready";
  window.dispatchEvent(new Event("vn:portrait-ready"));
}

export const whenPortraitReady = (callback: () => void) =>
  once(() => root().dataset.portrait === "ready", "vn:portrait-ready", callback);

export function playIntro() {
  if (root().dataset.intro) return;
  root().dataset.intro = "play";
  window.dispatchEvent(new Event("vn:intro-play"));
}

export const whenIntroPlays = (callback: () => void) =>
  once(() => Boolean(root().dataset.intro), "vn:intro-play", callback);

export function finishIntro() {
  root().dataset.intro = "done";
}
