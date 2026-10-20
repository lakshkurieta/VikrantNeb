"use client";

import { useEffect, useRef, type ReactNode } from "react";

/** Most a cover tilts toward the cursor, in degrees. */
const MAX = 7;

/**
 * Tilts its paper stack gently toward the cursor while hovered (fine pointers only), and moves the
 * sheen with it. Writes --rx / --ry (degrees) and --gx / --gy (sheen position, %) on itself; the
 * easing is a CSS transition (paper.css), so pointer events only set targets.
 */
export function PaperTilt({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let box = el.getBoundingClientRect();
    const onEnter = () => (box = el.getBoundingClientRect());
    const onMove = (event: PointerEvent) => {
      const x = (event.clientX - box.left) / box.width;
      const y = (event.clientY - box.top) / box.height;
      el.style.setProperty("--ry", `${((x - 0.5) * 2 * MAX).toFixed(2)}deg`);
      el.style.setProperty("--rx", `${((0.5 - y) * 2 * MAX).toFixed(2)}deg`);
      el.style.setProperty("--gx", `${(x * 100).toFixed(1)}%`);
      el.style.setProperty("--gy", `${(y * 100).toFixed(1)}%`);
    };
    const onLeave = () => {
      for (const name of ["--rx", "--ry", "--gx", "--gy"]) el.style.removeProperty(name);
    };
    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <span ref={ref} className={className}>
      {children}
    </span>
  );
}
