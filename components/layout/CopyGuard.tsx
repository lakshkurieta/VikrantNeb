"use client";

import { useEffect } from "react";

/**
 * Copy deterrent, with the CSS in globals.css (`body`): no copying, cutting, dragging images out or
 * right-clicking the content. Form fields keep copy and paste; links keep their menu ("Copy link",
 * "Open in new tab"). Crawlers read the HTML itself, so search engines and AI answers are unaffected.
 */
export function CopyGuard() {
  useEffect(() => {
    const within = (event: Event, selector: string) =>
      event.target instanceof Element && event.target.closest(selector) !== null;
    const guard = (selector: string) => (event: Event) => {
      if (!within(event, selector)) event.preventDefault();
    };
    const copy = guard("input, textarea");
    const menu = guard("a, input, textarea");
    const drag = (event: Event) => event.preventDefault();
    document.addEventListener("copy", copy);
    document.addEventListener("cut", copy);
    document.addEventListener("contextmenu", menu);
    document.addEventListener("dragstart", drag);
    return () => {
      document.removeEventListener("copy", copy);
      document.removeEventListener("cut", copy);
      document.removeEventListener("contextmenu", menu);
      document.removeEventListener("dragstart", drag);
    };
  }, []);
  return null;
}
