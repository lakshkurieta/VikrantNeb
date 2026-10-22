"use client";

import { gsap } from "gsap";
import Lenis from "lenis";
import { useEffect } from "react";
import { readFrameScroll, registerLenis } from "@/lib/scroll";

/**
 * Site-wide smooth scrolling.
 *
 * Lenis is stepped from GSAP's ticker so the whole page runs on one requestAnimationFrame. It is
 * added with `prioritize`, so every other ticker callback (the particle portrait, scroll effects)
 * reads this frame's scroll position, not the last one. Nothing downstream smooths scroll again:
 * a second filter on an already-eased value makes pinned and moving layers drift apart. The same
 * step reads the frame's scroll position once for every effect (`frameScroll`, lib/scroll.ts); with
 * reduced motion there is no Lenis, but the read still runs.
 */
export function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lenis = reduced
      ? null
      : new Lenis({
          autoRaf: false,
          lerp: 0.09,
          anchors: true,
          // A pinned panel that has to scroll by itself (an episode's details on a short screen,
          // `data-scroll-own`) gets the wheel; anywhere else, and when it fits, Lenis scrolls the page.
          prevent: (node) => node.hasAttribute("data-scroll-own") && node.scrollHeight > node.clientHeight,
        });
    const step = (time: number) => {
      lenis?.raf(time * 1000);
      readFrameScroll();
    };

    gsap.ticker.add(step, false, true);
    if (lenis) {
      gsap.ticker.lagSmoothing(0);
      registerLenis(lenis);
    }

    return () => {
      registerLenis(null);
      gsap.ticker.remove(step);
      lenis?.destroy();
    };
  }, []);

  return null;
}
