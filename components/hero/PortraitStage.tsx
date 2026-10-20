"use client";

import { gsap } from "gsap";
import { useEffect, useRef, useState } from "react";
import type { ParticlePortrait } from "@/lib/webgl/ParticlePortrait";
import { signalPortraitReady, whenIntroPlays, whenSignatureDrawn } from "@/lib/intro";
import { delay, portraitPalettes } from "@/lib/theme";
import { getTheme, onThemeChange } from "@/lib/theme-mode";
import { cn } from "@/lib/cn";
import { frameScroll } from "@/lib/scroll";

type Status = "loading" | "ready" | "fallback";

type PortraitStageProps = {
  src: string;
  alt: string;
  /** Classes for the stage itself; it should cover the section (e.g. `absolute inset-0`). */
  className?: string;
  /** Positions and sizes the portrait. The particles fill this box, so art-direct it with CSS. */
  frameClassName: string;
};

const clamp01 = (v: number) => Math.min(Math.max(v, 0), 1);

/**
 * Mounts the particle portrait and keeps it in sync with the DOM.
 *
 * - The canvas covers the stage; the portrait fills `frame`, which CSS lays out per breakpoint.
 * - three.js loads as a separate chunk after hydration, so the headline paints without waiting.
 * - Scroll position is the frame's (`frameScroll`, read once after Lenis) on the shared GSAP ticker.
 * - Rendering pauses whenever the stage is off screen.
 */
export function PortraitStage({ src, alt, className, frameClassName }: PortraitStageProps) {
  const stageRef = useRef<HTMLDivElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    const stage = stageRef.current;
    const host = hostRef.current;
    const frame = frameRef.current;
    if (!stage || !host || !frame) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;

    let portrait: ParticlePortrait | null = null;
    let disposed = false;
    let visible = true;
    // Stage position in document coordinates, cached so the per-frame path never reads layout.
    const metrics = { left: 0, top: 0, width: 1, height: 1 };
    const frameBox = { x: 0, y: 0, width: 1, height: 1 };

    const measure = () => {
      const s = stage.getBoundingClientRect();
      const f = frame.getBoundingClientRect();
      metrics.left = s.left;
      metrics.top = s.top + window.scrollY;
      metrics.width = s.width;
      metrics.height = s.height;
      frameBox.x = f.left - s.left;
      frameBox.y = f.top - s.top;
      frameBox.width = f.width;
      frameBox.height = f.height;
      portrait?.setViewport(s.width, s.height);
      portrait?.setFrame(frameBox);
    };

    const tick = (_time: number, deltaMs: number) => {
      if (!portrait || !visible) return;
      const scrolled = Math.max(frameScroll() - metrics.top, 0);
      const progress = clamp01(scrolled / metrics.height);
      portrait.scatter = clamp01((progress - 0.04) / 0.8);
      // The hero is pinned during the horizontal hand-off, so the portrait stays put vertically.
      portrait.drift = 0;
      portrait.tick(deltaMs / 1000);
    };

    let stopWaiting = () => {};
    const stopTheme = onThemeChange(({ theme, instant }) => portrait?.setTheme(theme, instant));
    let hintDismissed = false;
    const onPointerMove = (event: PointerEvent) => {
      if (!portrait) return;
      // Read live: the hero is pinned and slides sideways, so its scroll offset can't be derived.
      const rect = stage.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      if (x < 0 || y < 0 || x > metrics.width || y > metrics.height) {
        portrait.pointerLeave();
        return;
      }
      portrait.pointerMove(x, y);

      const overFrame =
        x > frameBox.x && x < frameBox.x + frameBox.width && y > frameBox.y && y < frameBox.y + frameBox.height;
      if (overFrame && !hintDismissed && hintRef.current) {
        hintDismissed = true;
        hintRef.current.dataset.dismissed = "";
      }
    };
    const onPointerLeave = () => portrait?.pointerLeave();
    // A lifted finger is gone; a released mouse button is not.
    const onPointerEnd = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") onPointerLeave();
    };

    (async () => {
      try {
        // Network work starts now; main-thread work (context, geometry, shaders) waits for the
        // loader's pen to stop, so it cannot stutter the signature.
        const preload = new Image();
        preload.src = src;
        const [{ ParticlePortrait }] = await Promise.all([
          import("@/lib/webgl/ParticlePortrait"),
          preload.decode(),
          new Promise<void>((resolve) => {
            stopWaiting = whenSignatureDrawn(resolve);
          }),
        ]);
        if (disposed) return;

        portrait = new ParticlePortrait({
          palettes: portraitPalettes,
          theme: getTheme(),
          reducedMotion,
          spacing: coarsePointer ? 2.8 : 2.7,
          maxColumns: coarsePointer ? 230 : 340,
        });
        portrait.canvas.className = "absolute inset-0 size-full";
        host.appendChild(portrait.canvas);
        measure();

        await portrait.load(src);
        if (disposed) return;
        measure();
        setStatus("ready");
        signalPortraitReady();

        // Assemble only once the loader lifts, so the reveal is seen rather than spent behind it.
        stopWaiting = whenIntroPlays(() => {
          if (!portrait) return;
          gsap.ticker.add(tick);
          if (reducedMotion) portrait.reveal = 1;
          else gsap.to(portrait, { reveal: 1, duration: 2.8, delay: 0.15, ease: "none" });
        });
      } catch (error) {
        if (disposed) return;
        console.warn("[PortraitStage] WebGL unavailable, showing the still portrait.", error);
        portrait?.dispose();
        portrait = null;
        setStatus("fallback");
        signalPortraitReady();
      }
    })();

    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(stage);
    resizeObserver.observe(frame);

    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    visibilityObserver.observe(stage);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerEnd, { passive: true });
    window.addEventListener("pointercancel", onPointerEnd, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);

    return () => {
      disposed = true;
      stopWaiting();
      stopTheme();
      gsap.ticker.remove(tick);
      if (portrait) gsap.killTweensOf(portrait);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerEnd);
      window.removeEventListener("pointercancel", onPointerEnd);
      document.documentElement.removeEventListener("pointerleave", onPointerLeave);
      portrait?.dispose();
    };
  }, [src]);

  return (
    <div ref={stageRef} className={cn("pointer-events-none", className)} data-status={status}>
      <div ref={hostRef} className="absolute inset-0" />

      <div
        ref={frameRef}
        className={cn("absolute", frameClassName)}
        role={status === "fallback" ? undefined : "img"}
        aria-label={status === "fallback" ? undefined : alt}
      >
        {status === "fallback" && (
          // eslint-disable-next-line @next/next/no-img-element -- plain fallback; the WebGL path reads the same file
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 size-full object-contain opacity-80 grayscale [mask-image:linear-gradient(to_top,transparent,black_35%)]"
          />
        )}

        {/* Outer element owns the dismiss fade; the inner one owns the intro (an animation's filled
            end state would otherwise override the dismiss opacity). */}
        <div
          ref={hintRef}
          className="absolute top-[30%] left-[2%] hidden transition-opacity duration-700 data-[dismissed]:opacity-0 xl:[@media(pointer:fine)]:block"
        >
          {status === "ready" && (
            <div
              className="text-label intro-fade flex items-start gap-2 leading-relaxed text-muted"
              style={delay(1800)}
            >
              <span className="mt-[0.45em] size-1.5 shrink-0 rounded-full bg-signal" />
              <span>
                Hover to
                <br />
                scatter
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
