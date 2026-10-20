"use client";

import { gsap } from "gsap";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { book, hero } from "@/content/site";
import { whenIntroPlays } from "@/lib/intro";
import { AmazonLogo } from "@/components/ui/AmazonLogo";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";
import type { BookScene } from "@/lib/webgl/BookScene";
import "./book-section.css";
import { frameScroll } from "@/lib/scroll";

const clamp = (value: number) => Math.max(0, Math.min(1, value));
/** Smoothstep: eases each hand-off phase in and out, so the stages overlap without seams. */
const smooth = (value: number) => {
  const t = clamp(value);
  return t * t * (3 - 2 * t);
};

export function BookSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const host = hostRef.current;
    if (!section || !stage || !host) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let scene: BookScene | null = null;
    let disposed = false;
    let visible = false;
    let started = false;
    let introReady = false;
    let near = false;
    let scrubbed = false;
    let last = -1;
    let lastProgress = -1;
    let lastEnter = -1;
    let top = 0;
    let distance = 1;
    // The hero's pin track (app/page.tsx). Its extra height is the hand-off distance.
    const pin = document.querySelector<HTMLElement>("[data-handoff]");
    const hero = pin?.querySelector<HTMLElement>("[data-handoff-from]") ?? null;
    // The section the dive opens onto (app/page.tsx): it arrives on the page the camera dives into.
    const next = document.querySelector<HTMLElement>("[data-book-next]");
    let handoff = 0;
    const marquee = stage.querySelector<HTMLElement>(".book-marquee");
    let marqueeSpeed = 0;
    let lastScrolled = Number.NaN;
    const measure = () => {
      top = section.getBoundingClientRect().top + window.scrollY;
      scrubbed = !motion.matches && section.dataset.status !== "fallback";
      handoff = scrubbed && pin && hero ? Math.max(0, pin.offsetHeight - hero.offsetHeight) : 0;
      distance = Math.max(1, section.offsetHeight - stage.offsetHeight - handoff);
      // Background title: travels 105% of its own width over the book's scroll, at one constant
      // speed that also carries it in from the right during the hand-off.
      marqueeSpeed = handoff > 0 && marquee ? (1.05 * marquee.offsetWidth) / distance : 0;
      scene?.resize(host.clientWidth, host.clientHeight);
      last = -1;
      lastEnter = -1;
      lastProgress = -1;
      lastScrolled = Number.NaN;
    };
    const tick = () => {
      if (document.hidden) return;
      const scrolled = frameScroll() - top;

      if (scrolled !== lastScrolled) {
        lastScrolled = scrolled;
        // Right to left only: one straight line through the hand-off and the book's own scroll.
        const travel = Math.min(Math.max(scrolled, 0), handoff + distance);
        stage.style.setProperty("--book-marquee-x", `${(marqueeSpeed * (handoff - travel)).toFixed(1)}px`);
      }

      // Hand-off, staged across one scroll track (see book-section.css):
      //   hero fades out → black backdrop → background title glides in → book rises → UI settles.
      // Runs before the book has loaded, so the transition never waits on WebGL.
      const enter = handoff > 0 ? clamp(scrolled / handoff) : 1;
      if (enter !== lastEnter) {
        lastEnter = enter;
        const phase = (from: number, to: number) => smooth((enter - from) / (to - from));
        const heroOut = phase(0, 0.42);
        stage.style.setProperty("--book-bg", phase(0.04, 0.46).toFixed(4));
        stage.style.setProperty("--book-text-in", phase(0.32, 0.72).toFixed(4));
        const bookIn = phase(0.52, 0.94);
        stage.style.setProperty("--book-in", bookIn.toFixed(4));
        stage.style.setProperty("--book-ui-in", phase(0.7, 1).toFixed(4));
        stage.toggleAttribute("data-entered", bookIn > 0.5);
        if (hero) {
          if (handoff === 0 || heroOut <= 0) {
            hero.style.opacity = "";
            hero.style.transform = "";
          } else if (heroOut >= 1) {
            // Fully faded: park it off-screen so its IntersectionObserver pauses the particles.
            hero.style.opacity = "0";
            hero.style.transform = "translate3d(-100%, 0, 0)";
          } else {
            hero.style.opacity = (1 - heroOut).toFixed(4);
            hero.style.transform = `scale(${(1 - 0.04 * heroOut).toFixed(4)})`;
          }
        }
      }

      // Book progress, from the scroll alone: like the hand-off, the page around the book never
      // waits on WebGL. Reduced motion and the fallback don't scrub; they show the front cover.
      const progress = scrubbed ? clamp((scrolled - handoff) / distance) : 0.52;
      if (progress !== lastProgress) {
        lastProgress = progress;
        // Timings mirror the choreography in BookScene: the chrome leaves as the cover opens.
        stage.style.setProperty("--book-progress", String(progress));
        // Header, title and CTA clear away as the cover opens, leaving the first page to be read.
        stage.style.setProperty("--book-chrome", String(1 - clamp((progress - 0.5) / 0.12)));
        // Longer than the dive's last stretch, so in dark mode the white page eases into the dark
        // section rather than flashing.
        stage.style.setProperty("--book-exit", String(clamp((progress - 0.88) / 0.1)));
        if (next) {
          // The next section is pulled up over the stage's last screen (studio.css), so it
          // arrives on the paper as the dive lands, and sits in place exactly as the stage unpins.
          const arrive = scrubbed ? smooth((progress - 0.9) / 0.1) : 1;
          next.style.setProperty("--book-next-in", arrive.toFixed(4));
          next.toggleAttribute("data-arrived", arrive > 0.5);
          // How far below its resting place the section still is (px). Lets it hold pieces at their
          // final spot while it rises; capped, so it is only rewritten during the last stretch.
          const lift = scrubbed ? Math.min(1 - progress, 0.15) * distance : 0;
          next.style.setProperty("--book-next-lift", `${lift.toFixed(1)}px`);
        }
      }

      if (!scene || !visible || progress === last) return;
      last = progress;
      scene.render(progress);
    };
    const contextLost = (event: Event) => {
      event.preventDefault();
      section.dataset.status = "fallback";
      measure();
      tick(); // hand-off off: puts the hero back in place
      gsap.ticker.remove(tick);
    };
    const start = async () => {
      if (started || !near || !introReady) return;
      started = true;
      try {
        const { BookScene } = await import("@/lib/webgl/BookScene");
        if (disposed) return;
        scene = new BookScene(host);
        scene.renderer.domElement.addEventListener("webglcontextlost", contextLost);
        await scene.load(book.model, book.firstPage);
        if (disposed) return;
        section.dataset.status = "ready";
        measure();
        tick();
      } catch (error) {
        if (disposed) return;
        console.warn("[BookSection] Showing the book cover fallback.", error);
        scene?.dispose();
        scene = null;
        section.dataset.status = "fallback";
        measure();
        tick();
        gsap.ticker.remove(tick);
      }
    };
    const stopWaiting = whenIntroPlays(() => {
      introReady = true;
      void start();
    });
    const preload = new IntersectionObserver(
      ([entry]) => {
        near = entry.isIntersecting;
        void start();
      },
      { rootMargin: "300px" },
    );
    preload.observe(section);
    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) {
        last = -1;
        tick();
      }
    });
    visibility.observe(section);
    const resize = new ResizeObserver(measure);
    resize.observe(section);
    resize.observe(host);
    motion.addEventListener("change", measure);
    window.addEventListener("resize", measure);
    document.fonts.ready.then(() => {
      if (!disposed) measure();
    });
    measure();
    // One loop for the hand-off and the book; it does no work unless the scroll position changed.
    gsap.ticker.add(tick);
    tick();
    return () => {
      disposed = true;
      stopWaiting();
      gsap.ticker.remove(tick);
      if (hero) {
        hero.style.opacity = "";
        hero.style.transform = "";
      }
      next?.style.removeProperty("--book-next-in");
      next?.style.removeProperty("--book-next-lift");
      next?.removeAttribute("data-arrived");
      preload.disconnect();
      visibility.disconnect();
      resize.disconnect();
      motion.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
      scene?.renderer.domElement.removeEventListener("webglcontextlost", contextLost);
      scene?.dispose();
    };
  }, []);

  return (
    <section id="book" ref={sectionRef} className="book-section" aria-labelledby="book-title" data-status="loading">
      <div ref={stageRef} className="book-stage">
        <div className="book-marquee" aria-hidden>
          {book.title}
        </div>
        <header className="book-header">
          <p className="text-label text-signal">{book.eyebrow}</p>
          <h2 id="book-title">
            <span className="book-name">{book.name}</span>
            <span className="book-byline">
              <em>{book.byline}</em> {book.title}
            </span>
          </h2>
        </header>
        <AmazonBadge className="book-amazon--corner" />
        <div className="book-visual" role="img" aria-label={book.imageAlt}>
          {/* The extracted cover also works without JavaScript or WebGL. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="book-poster" src={book.poster} alt="" width={1024} height={1583} loading="lazy" />
          <div ref={hostRef} className="book-canvas" />
        </div>
        <footer className="book-footer">
          {/* Phones: the header has no room beside the book, so the badge moves down here. */}
          <AmazonBadge className="book-amazon--footer" />
          <Link className="btn book-footer__more" href="/book">
            {book.page.more}
            <ArrowRight />
          </Link>
          <a className="btn btn-solid" href={hero.ctas.primary.href} target="_blank" rel="noreferrer">
            {hero.ctas.primary.label}
            <ArrowUpRight />
          </a>
        </footer>
        <div className="book-track" aria-hidden>
          <span />
        </div>
        <div className="book-exit" aria-hidden />
      </div>
    </section>
  );
}

/** "Exclusively available on" over the Amazon wordmark, linking to the book's listing. */
function AmazonBadge({ className }: { className: string }) {
  return (
    <a
      className={`book-amazon ${className}`}
      href={book.amazon.href}
      target="_blank"
      rel="noreferrer"
      aria-label={book.amazon.label}
    >
      <span className="book-amazon__heading text-label">{book.amazon.heading}</span>
      <span className="book-amazon__mark">
        <AmazonLogo className="book-amazon__logo" aria-hidden />
      </span>
    </a>
  );
}
