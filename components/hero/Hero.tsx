import Link from "next/link";
import type { CSSProperties } from "react";
import { about, footer, hero } from "@/content/site";
import { delay } from "@/lib/theme";
import { ScrollFade } from "@/components/motion/ScrollFade";
import { Magnetic } from "@/components/ui/Magnetic";
import { ArrowUpRight, LinkedInMark, Play, YouTubeMark } from "@/components/ui/icons";
import { PortraitStage } from "./PortraitStage";

const PORTRAIT_SRC = "/images/portrait/vikrant-neb.webp";
const SOCIAL_ICONS = { youtube: YouTubeMark, linkedin: LinkedInMark } as const;
const SOCIAL_BRANDS = { youtube: "#ff0033", linkedin: "#0a66c2" } as const;

/**
 * Hero: Vikrant's particle portrait, centred, with the copy either side of it.
 *
 * Server component. Client islands: the WebGL stage, the scroll fades and the magnetic button. The
 * intro choreography is CSS (`.intro-*` in globals.css) and waits for the loader to lift.
 *
 * Layering inside the isolated section: backdrop (-z-10) → particles (z-0) → scrim (z-1) → copy (z-10).
 */
export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate h-svh min-h-[640px] touch-pan-y overflow-clip"
    >
      <Backdrop />

      <PortraitStage
        src={PORTRAIT_SRC}
        alt="Vikrant Neb, drawn in particles that scatter under the cursor"
        className="absolute inset-0"
        frameClassName={[
          "left-1/2 aspect-square -translate-x-1/2",
          // Phones and tablets: from under the menu right down to the bottom, the copy over it.
          "top-[10svh] bottom-0 w-auto",
          // Desktop: centred and anchored to the bottom, the bust dissolving into the page.
          "lg:top-auto lg:bottom-0 lg:h-[min(94%,74vw)] lg:w-auto",
        ].join(" ")}
      />

      {/* Phones: a light veil under the copy, so it reads over the particles without hiding them.
          Desktop: hides the section's bottom edge, where scattering particles would otherwise be cut
          off in a hard line. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[56%] bg-linear-to-t from-canvas/85 via-canvas/60 to-transparent lg:h-[12%] lg:from-canvas lg:via-canvas/60"
      />

      <div className="relative z-10 flex h-full flex-col px-gutter pt-24 pb-5 lg:pb-7">
        <div className="mt-auto grid items-end gap-x-8 lg:grid-cols-12">
          <ScrollFade className="lg:col-span-5" lag={0} fadeDistance={0.55}>
            <Headline />
            <div className="lg:hidden">
              <Actions />
            </div>
          </ScrollFade>

          <ScrollFade
            className="hidden lg:col-span-4 lg:col-start-9 lg:block 2xl:col-span-3 2xl:col-start-10"
            lag={0}
            fadeDistance={0.55}
          >
            <Bio />
          </ScrollFade>
        </div>

        <ScrollFade lag={0} fadeDistance={0.35}>
          <Footer />
        </ScrollFade>
      </div>
    </section>
  );
}

function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      {/* A blue bloom behind the head on the dark theme; the white theme stays pure white. */}
      <div className="absolute top-[-4%] left-1/2 size-[120vw] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_srgb,var(--color-signal)_9%,transparent),color-mix(in_srgb,var(--color-signal)_3%,transparent)_45%,transparent)] lg:top-[-22%] lg:size-[78vw] lg:max-w-[1300px] [:root[data-theme=light]_&]:hidden" />
      <div className="grain absolute inset-0" />
    </div>
  );
}

/** Set like every section title: EXECUTION / is the JOB., then the counterline. */
function Headline() {
  const { headline, counterline } = hero;
  return (
    <>
      <h1 id="hero-title" className="text-hero">
        <span className="sr-only">Vikrant Neb. </span>
        <span className="intro-line">
          <span style={delay(220)}>{headline.top}</span>
        </span>
        <span className="intro-line">
          <span style={delay(330)}>
            <em>{headline.joiner}</em> {headline.bottom}
          </span>
        </span>
      </h1>
      <p className="intro-line text-counter mt-4 lg:mt-5">
        <span style={delay(480)}>
          {counterline.lead} <em>{counterline.accent}</em>
        </span>
      </p>
    </>
  );
}

function Bio() {
  const { tagline, lead } = hero.intro;
  return (
    <div>
      {/* Small laptops: the words would climb into the face, so the column starts at the list. */}
      <div className="mb-8 hidden xl:block">
        {/* His line, set like the podcast's "Real operators. Real answers.": bold, then the serif. */}
        <p
          className="intro-fade text-[clamp(1.3rem,1.6vw,1.65rem)] leading-[1.18] font-bold tracking-[-0.02em] text-fg"
          style={delay(560)}
        >
          {tagline.lead} {/* A couplet: one sentence a line. */}
          <em className="block font-serif text-[1.12em] font-normal tracking-normal italic">{tagline.accent}</em>
        </p>
        <p className="intro-fade mt-4 text-[16px] leading-[1.6] text-muted" style={delay(620)}>
          {lead}
        </p>
      </div>

      {/* Role → title, aligned like a spec sheet: small signal labels, bold titles. */}
      <dl className="intro-fade grid grid-cols-[auto_1fr] items-baseline gap-x-6 gap-y-2.5" style={delay(700)}>
        {hero.credentials.map((item) => (
          <div key={item.role} className="contents">
            <dt className="text-label text-signal">{item.role}</dt>
            <dd className="text-[16px] font-bold tracking-[-0.015em] text-fg">{item.title}</dd>
          </div>
        ))}
      </dl>
      <Link
        href="/about"
        className="intro-fade mt-4 inline-flex text-[14px] font-semibold text-muted transition-colors hover:text-fg"
        style={delay(720)}
      >
        {about.more} <span aria-hidden>&nbsp;→</span>
      </Link>
      <Actions />
    </div>
  );
}

function Actions() {
  const { primary, secondary } = hero.ctas;
  return (
    <div className="hero-actions intro-fade mt-8 flex flex-wrap items-center gap-3" style={delay(860)}>
      <Magnetic>
        <a href={primary.href} target="_blank" rel="noreferrer" className="btn btn-solid">
          {primary.label}
          <ArrowUpRight />
        </a>
      </Magnetic>
      <a href={secondary.href} className="btn">
        <Play />
        {secondary.label}
      </a>
    </div>
  );
}

/** YouTube and LinkedIn as icon discs (as in the site footer), and the scroll cue. */
function Footer() {
  return (
    <div className="mt-8 lg:mt-10">
      <div className="intro-fade flex items-center justify-between gap-8" style={delay(1100)}>
        <ul className="flex gap-2.5">
          {footer.socials.map((social) => {
            const Icon = SOCIAL_ICONS[social.icon];
            return (
              <li key={social.href}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="grid size-10 place-items-center rounded-[3px] bg-raised text-fg transition-[background-color,color,translate] duration-300 hover:-translate-y-0.5 hover:bg-(--brand) hover:text-white"
                  style={{ "--brand": SOCIAL_BRANDS[social.icon] } as CSSProperties}
                >
                  <Icon className="h-auto w-[18px]" />
                </a>
              </li>
            );
          })}
        </ul>
        <a href="#book" className="text-label flex items-center gap-3 text-muted transition-colors hover:text-fg">
          Scroll
          <span className="scroll-cue relative block h-8 w-px overflow-clip bg-line" />
        </a>
      </div>
    </div>
  );
}
