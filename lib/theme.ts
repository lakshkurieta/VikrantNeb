import type { CSSProperties } from "react";
import type { PortraitPalette } from "@/lib/webgl/ParticlePortrait";

export type ThemeName = "dark" | "light";

/**
 * Colours the WebGL layer and the browser chrome need as values (CSS can't hand them to a shader).
 * Mirrors the tokens in app/globals.css — change both together.
 */
export const themes = {
  dark: { canvas: "#0b0a09", fg: "#efe9df", signal: "#3a78ee" },
  light: { canvas: "#ffffff", fg: "#15130f", signal: "#1a60e0" },
} as const satisfies Record<ThemeName, Record<string, string>>;

/**
 * Dark: bright skin and shirt become large bone-coloured particles, like a photo lit from within.
 * Light: the mapping inverts into a halftone print — dark hair and beard become large press-black
 * dots and the bright shirt all but vanishes into the paper.
 */
export const portraitPalettes: Record<ThemeName, PortraitPalette> = {
  // Pushed particles flare metallic gold (a deeper gold on white, to show against the ink); the rest of the site is blue.
  dark: { shadow: "#4a453f", highlight: themes.dark.fg, accent: "#f0c23b" },
  light: { shadow: "#cdc4b6", highlight: themes.light.fg, accent: "#c9961a" },
};

/** Inline style helper for the CSS intro choreography (see `.intro-*` in globals.css). */
export const delay = (ms: number) => ({ "--delay": ms }) as CSSProperties;
