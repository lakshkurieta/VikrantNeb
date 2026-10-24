import Link from "next/link";
import type { CSSProperties } from "react";
import { podcast } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { ConnectButton } from "@/components/connect/ConnectButton";
import { ArrowRight } from "@/components/ui/icons";
import { Episodes } from "./Episodes";
import "./podcast-section.css";

/** Order in the arrival cascade (podcast-section.css, `[data-arrive]`). */
const arrive = (step: number) => ({ "--stagger": step }) as CSSProperties;

/**
 * The podcast, "Execution at Scale", first page of the studio (Studio.tsx). It opens straight out
 * of the book: the camera dives into the first page and the studio arrives on that paper.
 *
 * Two columns. Left: the title, then the episodes, the latest open with its video straight away,
 * and the show's pitch, scrolling as normal. Right: empty, for Vikrant's portrait on the studio's
 * rail, locked in place while the episodes scroll up past him. Last, the sign-up band pops up over
 * him, full width. Then the studio pans sideways to Writing: everything marked `data-studio-move`
 * slides out to the left.
 *
 * Server component. The portrait, the episodes and the reveals are client islands.
 */
export function PodcastSection() {
  const { title, tagline, host, signup } = podcast;
  return (
    <section id="podcast" className="podcast" aria-labelledby="podcast-title">
      <div className="podcast__inner">
        <div className="podcast-layout">
          <header className="podcast-heading" data-studio-move>
            <p className="text-label text-signal" data-arrive style={arrive(0)}>
              {podcast.eyebrow}
            </p>
            <h2 id="podcast-title" className="podcast-title">
              <span className="podcast-title__line" style={arrive(1)}>
                <span>{title.top}</span>
              </span>
              <span className="podcast-title__line" style={arrive(1.6)}>
                <span>
                  <em>{title.joiner}</em> {title.bottom}
                </span>
              </span>
            </h2>
          </header>

          <div className="podcast-body" data-studio-move>
            <Episodes />

            <Reveal className="podcast-pitch">
              <p className="podcast-tagline">
                {tagline.lead} <em>{tagline.accent}</em>
              </p>
              <p className="podcast-description">{podcast.description}</p>
              <div className="podcast-meta">
                <p className="podcast-host">
                  <em>{host.lead}</em> {host.name}
                </p>
                <Link className="podcast-link" href={podcast.all.href}>
                  {podcast.all.label}
                  <ArrowRight width={12} height={12} />
                </Link>
              </div>
            </Reveal>
          </div>

          <Reveal className="podcast-signup-row reveal--pop">
            <aside className="podcast-signup" aria-label="Upcoming episodes" data-studio-move>
              <div>
                <p className="podcast-signup__title">{signup.title}</p>
                <p className="podcast-signup__body">{signup.body}</p>
              </div>
              <ConnectButton className="btn btn-solid">
                {signup.cta.label}
                <ArrowRight />
              </ConnectButton>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
