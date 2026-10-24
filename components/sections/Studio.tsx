import type { CSSProperties, ReactNode } from "react";
import { StudioPortrait } from "./StudioPortrait";
import "./studio.css";

/**
 * The podcast and Writing pages, sharing Vikrant's portrait (two cut-out photographs, StudioPortrait).
 *
 * The portrait rides a rail that spans both pages: pinned on the right beside the podcast, then, as
 * Writing pans in sideways, gliding across to the left, where it stays pinned beside the articles.
 * StudioPortrait drives that cross-over; studio.css lays it out.
 *
 * The whole studio is what arrives out of the book's dive (`data-book-next`, BookSection).
 */
export function Studio({ children }: { children: ReactNode }) {
  return (
    <div data-studio data-book-next data-side="podcast" className="studio">
      <div className="studio__rail">
        <div className="studio__rail-grid">
          <div className="studio__photo" data-arrive data-studio-move style={{ "--stagger": 0.6 } as CSSProperties}>
            <span className="studio__glow" aria-hidden />
            <StudioPortrait className="studio__model" />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
