"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { podcast } from "@/content/site";
import { cn } from "@/lib/cn";
import { whenIntroPlays } from "@/lib/intro";
import type { BustScene } from "@/lib/webgl/BustScene";
import { frameScroll } from "@/lib/scroll";

const clamp = (value: number) => Math.max(0, Math.min(1, value));
/** Share of the cross-over by which he has finished turning to face the new page: he turns on
 *  the way down, before the low point of the dip. */
const TURN_BY = 0.55;
/** Radians of turn per pixel dragged. */
const DRAG = 0.009;
/** Spring that brings him back to rest after a drag (stiffness, damping; per second). */
const SPRING = { k: 38, c: 9 };

/**
 * Vikrant's 3D bust, shared by the podcast and Writing pages (Studio.tsx), and the driver of the
 * sideways cross-over between them.
 *
 * Cross-over: Writing's header is pinned for a stretch of scroll (`[data-studio-pin]`). Across it,
 * this writes --studio-move (0 → 1) and --studio-dip (0 → 1 → 0) on every `[data-studio-move]`
 * element. The podcast's sign-up band pops up and away over his head; the bust glides from the
 * right of the page to the left, dipping down on the way and turning from facing left to facing
 * right as he goes down; then Writing slides in from the right as he rises into place beside it.
 *
 * The bust itself:
 * - Arrival: as the studio comes in from the book's dive he turns to face the copy, in place.
 * - Drag: grab him to spin him; let go and he springs back. Horizontal drags only, so a vertical
 *   swipe on a phone still scrolls the page.
 * - Cursor: a blue rim light swings around him with the pointer.
 *
 * The 3D loads once the intro has played, at the first quiet moment after the book has loaded (no
 * scrolling for a beat), so its one-off GPU set-up never lands in the book's dive; if the reader
 * never pauses, it loads when the studio comes near. It renders only while on screen and once the
 * studio has started to arrive. Until then, and without WebGL, a still render stands in; the
 * cross-over runs regardless.
 */
export function StudioBust({ className }: { className?: string }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const host = hostRef.current;
    const studio = root?.closest<HTMLElement>("[data-studio]");
    if (!root || !host || !studio) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const head = studio.querySelector<HTMLElement>("[data-studio-pin]");
    const pin = head?.parentElement ?? null;
    const movers = [...studio.querySelectorAll<HTMLElement>("[data-studio-move]")];
    let scene: BustScene | null = null;
    let disposed = false;
    let started = false;
    let introReady = false;
    let near = false;
    let early = false;
    let quiet = 0;
    let visible = false;
    let top = 0;
    // Cross-over: scroll position where Writing's header pins, and how long it stays pinned.
    let crossStart = Number.POSITIVE_INFINITY;
    let crossLength = 0;
    let lastMove = -1;
    // Drag-to-spin state.
    let spin = 0;
    let velocity = 0;
    let dragging = false;
    let lastX = 0;
    let lastDrag = 0;
    // Reduced motion holds him still, so a frame is only needed when something changed.
    let stale = true;

    const measure = () => {
      top = studio.getBoundingClientRect().top + window.scrollY;
      if (head && pin) {
        const pinned = getComputedStyle(head).position === "sticky";
        crossStart = pin.getBoundingClientRect().top + window.scrollY - (parseFloat(getComputedStyle(head).top) || 0);
        crossLength = pinned ? Math.max(0, pin.offsetHeight - head.offsetHeight) : 0;
      }
      scene?.resize(host.clientWidth, host.clientHeight);
      lastMove = -1;
      stale = true;
    };

    const tick = (time: number, deltaMs: number) => {
      if (document.hidden) return;
      const y = frameScroll();
      // One column (no pinned header): no cross-over, everything sits in place.
      const move = crossLength > 0 ? clamp((y - crossStart) / crossLength) : 0;
      if (move !== lastMove) {
        lastMove = move;
        // Down and back up again: lowest halfway across, exactly in place at both ends.
        const dip = Math.sin(Math.PI * move).toFixed(4);
        for (const el of movers) {
          el.style.setProperty("--studio-move", move.toFixed(4));
          el.style.setProperty("--studio-dip", dip);
        }
        studio.dataset.side = move > 0.5 ? "writing" : "podcast";
        stale = true;
      }

      // Nothing to draw while the studio is still hidden under the book's dive.
      if (!scene || !visible || studio.style.getPropertyValue("--book-next-in") === "0.0000") return;
      const dt = Math.min(deltaMs / 1000, 1 / 20);
      // Studio top relative to the viewport: 0 once it has arrived over the book's last frame.
      const enter = reduced ? 1 : clamp(1 - (top - y) / (window.innerHeight * 0.36));
      if (!dragging) {
        // Spring back to rest, keeping any fling's momentum on the way.
        velocity += (-SPRING.k * spin - SPRING.c * velocity) * dt;
        spin += velocity * dt;
        if (Math.abs(spin) < 1e-4 && Math.abs(velocity) < 1e-4) spin = velocity = 0;
      }
      if (reduced && !stale && !dragging && spin === 0) return;
      stale = false;
      scene.update(dt, { enter, side: clamp(move / TURN_BY), spin, time: reduced ? 0 : time });
    };

    const start = async () => {
      if (started || !(near || early) || !introReady) return;
      started = true;
      try {
        const { BustScene } = await import("@/lib/webgl/BustScene");
        if (disposed) return;
        scene = new BustScene(host);
        await scene.load(podcast.bust.model);
        if (disposed) return;
        measure();
        root.dataset.status = "ready";
      } catch (error) {
        if (disposed) return;
        console.warn("[StudioBust] Showing the still render.", error);
        scene?.dispose();
        scene = null;
        root.dataset.status = "fallback";
      }
    };

    const onDown = (event: PointerEvent) => {
      if (!scene || (event.pointerType === "mouse" && event.button !== 0)) return;
      dragging = true;
      lastX = event.clientX;
      lastDrag = event.timeStamp;
      velocity = 0;
      host.setPointerCapture(event.pointerId);
      root.dataset.dragging = "";
      root.dataset.dragged = "";
    };
    const onMove = (event: PointerEvent) => {
      scene?.aimLight((event.clientX / window.innerWidth) * 2 - 1, (event.clientY / window.innerHeight) * 2 - 1);
      if (!dragging) return;
      const dx = event.clientX - lastX;
      const dt = Math.max((event.timeStamp - lastDrag) / 1000, 1 / 240);
      spin += dx * DRAG;
      velocity = (dx * DRAG) / dt;
      lastX = event.clientX;
      lastDrag = event.timeStamp;
    };
    const onUp = (event: PointerEvent) => {
      if (!dragging) return;
      dragging = false;
      delete root.dataset.dragging;
      if (host.hasPointerCapture(event.pointerId)) host.releasePointerCapture(event.pointerId);
      // Come back the short way round after a full spin.
      spin = Math.atan2(Math.sin(spin), Math.cos(spin));
      // A drag that stopped before release shouldn't fling.
      if (event.timeStamp - lastDrag > 80) velocity = 0;
    };

    // Early start: once the book has loaded and the page has been still for a beat.
    const settle = () => {
      window.clearTimeout(quiet);
      if (started) return;
      quiet = window.setTimeout(() => {
        if (document.getElementById("book")?.dataset.status === "loading") return settle();
        early = true;
        void start();
      }, 700);
    };
    const stopWaiting = whenIntroPlays(() => {
      introReady = true;
      settle();
      void start();
    });
    window.addEventListener("scroll", settle, { passive: true });
    const preload = new IntersectionObserver(
      ([entry]) => {
        near = entry.isIntersecting;
        void start();
      },
      { rootMargin: "800px 0px" },
    );
    preload.observe(root);
    const visibility = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    visibility.observe(root);
    const resize = new ResizeObserver(measure);
    resize.observe(studio);
    resize.observe(host);
    window.addEventListener("resize", measure);
    host.addEventListener("pointerdown", onDown);
    host.addEventListener("pointerup", onUp);
    host.addEventListener("pointercancel", onUp);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.fonts.ready.then(() => {
      if (!disposed) measure();
    });
    measure();
    gsap.ticker.add(tick);

    return () => {
      disposed = true;
      stopWaiting();
      window.clearTimeout(quiet);
      window.removeEventListener("scroll", settle);
      gsap.ticker.remove(tick);
      preload.disconnect();
      visibility.disconnect();
      resize.disconnect();
      window.removeEventListener("resize", measure);
      host.removeEventListener("pointerdown", onDown);
      host.removeEventListener("pointerup", onUp);
      host.removeEventListener("pointercancel", onUp);
      window.removeEventListener("pointermove", onMove);
      for (const el of movers) {
        el.style.removeProperty("--studio-move");
        el.style.removeProperty("--studio-dip");
      }
      scene?.dispose();
    };
  }, []);

  return (
    <div ref={rootRef} className={cn("studio-bust", className)} data-status="loading">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="studio-bust__poster" src={podcast.bust.poster} alt={podcast.bust.alt} width={900} height={1040} />
      <div ref={hostRef} className="studio-bust__canvas" />
      <span className="studio-bust__hint text-label" aria-hidden>
        Drag to turn
      </span>
    </div>
  );
}
