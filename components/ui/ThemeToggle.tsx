"use client";

import { useEffect, useId, type MouseEvent } from "react";
import { cn } from "@/lib/cn";
import { syncThemeColor, toggleTheme } from "@/lib/theme-mode";

const RAYS = Array.from({ length: 8 }, (_, i) => i * 45);

/**
 * Sun/moon switch. The icon is driven purely by `:root[data-theme]` in CSS (`.theme-toggle` in
 * globals.css), so it is right from the first paint and never mismatches on hydration: in dark
 * mode the bite slides over the disc to make a crescent; in light mode it slides off, the disc
 * shrinks and the rays spin out.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const maskId = `${useId().replace(/:/g, "")}-moon`;

  // The head script may run before Next has rendered <meta name="theme-color">.
  useEffect(syncThemeColor, []);

  const onClick = (event: MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
  };

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Switch between light and dark theme"
      title="Switch theme"
      className={cn(
        "theme-toggle group grid size-10 place-items-center rounded-[3px] border-[1.5px] border-fg/25 text-fg transition-colors duration-300 hover:border-fg",
        className,
      )}
    >
      <svg viewBox="0 0 24 24" className="size-[18px] overflow-visible" aria-hidden>
        <mask id={maskId}>
          <rect width="24" height="24" fill="#fff" />
          <circle className="theme-toggle__bite" cx="17" cy="7" r="6.5" fill="#000" />
        </mask>
        <circle className="theme-toggle__disc" cx="12" cy="12" r="5" fill="currentColor" mask={`url(#${maskId})`} />
        <g className="theme-toggle__rays" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
          {RAYS.map((angle) => (
            <line key={angle} x1="12" y1="1.8" x2="12" y2="3.6" transform={`rotate(${angle} 12 12)`} />
          ))}
        </g>
      </svg>
    </button>
  );
}
