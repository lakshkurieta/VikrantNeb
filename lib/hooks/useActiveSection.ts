"use client";

import { useEffect, useState } from "react";

/**
 * The in-page link (`#id`) whose section the reader is in, or null above the first one.
 *
 * A section counts from where its anchor lands, honouring `scroll-margin-top` (the book's anchor
 * lands after its hand-off), and becomes current once that point passes 40% down the viewport.
 * Sections that don't exist yet are skipped.
 *
 * Section positions are measured only on mount, resize and layout changes. The scroll path just
 * compares `scrollY` against those cached numbers: reading layout or computed styles there would
 * force a style recalc every frame on top of the WebGL scenes' own per-frame style writes.
 */
export function useActiveSection(hrefs: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    let starts: { href: string; start: number }[] = [];
    let frame = 0;

    const measure = () => {
      starts = hrefs
        .map((href) => {
          const el = document.getElementById(href.slice(1));
          if (!el) return null;
          const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
          return { href, start: el.getBoundingClientRect().top + window.scrollY - margin };
        })
        .filter((entry): entry is { href: string; start: number } => entry !== null)
        .sort((a, b) => a.start - b.start);
      update();
    };

    const update = () => {
      frame = 0;
      const probe = window.scrollY + window.innerHeight * 0.4;
      let current: string | null = null;
      for (const { href, start } of starts) if (start <= probe) current = href;
      setActive(current);
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    const layout = new ResizeObserver(() => requestAnimationFrame(measure));
    layout.observe(document.documentElement);
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      layout.disconnect();
      window.removeEventListener("scroll", schedule);
    };
  }, [hrefs]);

  return active;
}
