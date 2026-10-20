"use client";

import { gsap } from "gsap";
import { useEffect, useRef, type ReactNode } from "react";

type MagneticProps = {
  children: ReactNode;
  /** How far the element follows the cursor, as a fraction of the cursor's offset. */
  strength?: number;
  className?: string;
};

/** Pulls its child toward the cursor while hovered, then springs back. Fine pointers only. */
export function Magnetic({ children, strength = 0.3, className }: MagneticProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    const toX = gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" });
    const toY = gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" });

    const onMove = (event: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      toX((event.clientX - (rect.left + rect.width / 2)) * strength);
      toY((event.clientY - (rect.top + rect.height / 2)) * strength);
    };
    const onLeave = () => {
      toX(0);
      toY(0);
    };

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      gsap.killTweensOf(el);
    };
  }, [strength]);

  return (
    <span ref={ref} className={className ?? "inline-block"}>
      {children}
    </span>
  );
}
