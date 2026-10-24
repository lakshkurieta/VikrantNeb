"use client";

import { gsap } from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { podcast } from "@/content/site";
import { cn } from "@/lib/cn";
import { frameScroll } from "@/lib/scroll";

const clamp = (value: number) => Math.max(0, Math.min(1, value));

/**
 * Vikrant's portrait, shared by the podcast and Writing pages (Studio.tsx), and the driver of the
 * sideways cross-over between them. Two photographs per theme (`podcast.portraits`), framed alike (the
 * same canvas, his head the same size and height): looking left toward
 * the podcast, then looking right toward Writing, crossfading as he crosses (studio.css).
 *
 * Cross-over: Writing's header is pinned for a stretch of scroll (`[data-studio-pin]`). Across it,
 * this writes --studio-move (0 → 1) and --studio-dip (0 → 1 → 0) on every `[data-studio-move]`
 * element: the podcast's sign-up band pops up and away, the portrait glides from the right of the
 * page to the left, dipping on the way, then Writing slides in from the right. In one column there
 * is no pinned header, so no cross-over: everything sits in place.
 */
export function StudioPortrait({ className }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const studio = rootRef.current?.closest<HTMLElement>("[data-studio]");
    if (!studio) return;
    const head = studio.querySelector<HTMLElement>("[data-studio-pin]");
    const pin = head?.parentElement ?? null;
    const movers = [...studio.querySelectorAll<HTMLElement>("[data-studio-move]")];
    let disposed = false;
    let crossStart = Number.POSITIVE_INFINITY;
    let crossLength = 0;
    let lastMove = -1;

    const measure = () => {
      if (head && pin) {
        const pinned = getComputedStyle(head).position === "sticky";
        crossStart = pin.getBoundingClientRect().top + window.scrollY - (parseFloat(getComputedStyle(head).top) || 0);
        crossLength = pinned ? Math.max(0, pin.offsetHeight - head.offsetHeight) : 0;
      }
      lastMove = -1;
    };
    const tick = () => {
      if (document.hidden) return;
      const move = crossLength > 0 ? clamp((frameScroll() - crossStart) / crossLength) : 0;
      if (move === lastMove) return;
      lastMove = move;
      // Down and back up again: lowest halfway across, exactly in place at both ends.
      const dip = Math.sin(Math.PI * move).toFixed(4);
      for (const el of movers) {
        el.style.setProperty("--studio-move", move.toFixed(4));
        el.style.setProperty("--studio-dip", dip);
      }
      studio.dataset.side = move > 0.5 ? "writing" : "podcast";
    };

    const resize = new ResizeObserver(measure);
    resize.observe(studio);
    window.addEventListener("resize", measure);
    document.fonts.ready.then(() => {
      if (!disposed) measure();
    });
    measure();
    gsap.ticker.add(tick);

    return () => {
      disposed = true;
      gsap.ticker.remove(tick);
      resize.disconnect();
      window.removeEventListener("resize", measure);
      for (const el of movers) {
        el.style.removeProperty("--studio-move");
        el.style.removeProperty("--studio-dip");
      }
    };
  }, []);

  return (
    <div ref={rootRef} className={cn("studio-portrait", className)}>
      {(["podcast", "writing"] as const).flatMap((side) =>
        (["dark", "light"] as const).map((tone) => (
          <Image
            key={side + tone}
            className={`studio-portrait__${side}`}
            data-tone={tone}
            src={podcast.portraits[side][tone]}
            alt={side === "podcast" ? podcast.portraits.alt : ""}
            width={960}
            height={1040}
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
        )),
      )}
    </div>
  );
}
