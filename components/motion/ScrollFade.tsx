"use client";

import { gsap } from "gsap";
import { useEffect, useRef, type ReactNode } from "react";
import { frameScroll } from "@/lib/scroll";

type ScrollFadeProps = {
  children: ReactNode;
  className?: string;
  /** Fraction of the scroll the content lags behind (0 = scrolls normally, 0.3 = 30% slower). */
  lag?: number;
  /** Scroll distance, as a fraction of the viewport height, over which the content fades out. */
  fadeDistance?: number;
};

/**
 * Lets first-viewport content drift and fade as the page scrolls away from the top.
 *
 * Runs on the shared GSAP ticker after Lenis, reading the frame's scroll position (`frameScroll`), and writes
 * transform/opacity only when the scroll position actually changed.
 */
export function ScrollFade({ children, className, lag = 0.25, fadeDistance = 0.6 }: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let last = -1;
    const tick = () => {
      const vh = window.innerHeight || 1;
      const y = Math.min(frameScroll(), vh * 1.5);
      if (y === last) return;
      last = y;
      el.style.transform = y > 0 ? `translate3d(0, ${(y * lag).toFixed(2)}px, 0)` : "";
      el.style.opacity = String(Math.max(1 - y / (vh * fadeDistance), 0));
    };

    gsap.ticker.add(tick);
    return () => gsap.ticker.remove(tick);
  }, [lag, fadeDistance]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
