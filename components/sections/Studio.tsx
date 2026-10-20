import type { CSSProperties, ReactNode } from "react";
import { writing } from "@/content/site";
import { YouTubeMark } from "@/components/ui/icons";
import { StudioBust } from "./StudioBust";
import "./studio.css";

/**
 * The podcast and Writing pages, sharing Vikrant's 3D bust.
 *
 * The bust rides a rail that spans both pages: pinned on the right beside the podcast, then, as
 * Writing pans in sideways, gliding across to the left, where it stays pinned beside the articles.
 * StudioBust drives that cross-over; studio.css lays it out.
 *
 * The whole studio is what arrives out of the book's dive (`data-book-next`, BookSection).
 */
export function Studio({ children }: { children: ReactNode }) {
  return (
    <div data-studio data-book-next data-side="podcast" className="studio">
      <div className="studio__rail">
        <div className="studio__rail-grid">
          <div className="studio__bust" data-arrive data-studio-move style={{ "--stagger": 0.6 } as CSSProperties}>
            {/* Where each page lives, huge and ghosted behind him; they swap as he crosses. */}
            <span className="studio__ghost studio__ghost--podcast" aria-hidden>
              <YouTubeMark />
              <span>YouTube</span>
            </span>
            <span className="studio__ghost studio__ghost--writing" aria-hidden>
              <span>{writing.ghost}</span>
            </span>
            <span className="studio__glow" aria-hidden />
            <StudioBust className="studio__model" />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}
