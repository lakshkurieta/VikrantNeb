import Image from "next/image";
import { cn } from "@/lib/cn";
import { PaperTilt } from "./PaperTilt";
import "./paper.css";

/**
 * A white paper's cover as a little stack of paper: the cover on top of two loose sheets, which
 * fan out on hover while the stack tilts toward the cursor (PaperTilt). Inside a `.reveal`, the
 * stack also settles into place when it scrolls into view.
 */
export function PaperCover({
  src,
  className,
  sizes,
  eager = false,
}: {
  src: string;
  className?: string;
  sizes: string;
  eager?: boolean;
}) {
  return (
    <PaperTilt className={cn("paper", className)}>
      <span className="paper__body">
        <span className="paper__sheet paper__sheet--back" aria-hidden />
        <span className="paper__sheet paper__sheet--mid" aria-hidden />
        <span className="paper__cover">
          <Image
            src={src}
            alt=""
            fill
            sizes={sizes}
            {...(eager && { loading: "eager" as const, fetchPriority: "high" as const })}
          />
        </span>
        <span className="paper__sheen" aria-hidden />
      </span>
    </PaperTilt>
  );
}
