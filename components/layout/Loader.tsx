"use client";

import { gsap } from "gsap";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Signature } from "@/components/signature/Signature";
import { signatureTimeline } from "@/components/signature/timeline";
import { finishIntro, playIntro, signalSignatureDrawn, whenPortraitReady } from "@/lib/intro";
import { lockScroll, unlockScroll } from "@/lib/scroll";
import { site } from "@/content/site";

/** Hold the finished signature this long before it moves. */
const HOLD = 0.35;
/** Leave anyway if the portrait has not reported in by then (slow network, no WebGL). */
const TIMEOUT = 7;

/**
 * Opening screen: Vikrant signs his name in the middle of the screen, then the signature flies up
 * into the navigation bar's top-left corner, where it stays as the logo, while the curtain lifts and
 * the hero assembles behind it.
 *
 * The markup is server-rendered, so the curtain covers the page from the first paint and the pen
 * starts drawing before hydration. The loader leaves once the signature is complete AND the
 * particle portrait is ready, so the reveal never happens over an empty stage.
 *
 * Only a visit that starts on the home page gets it. Other pages (an article opened from a link)
 * have no portrait to wait for, so the intro is marked as played straight away; if the reader then
 * goes to the home page, the hero simply animates in.
 */
export function Loader() {
  const home = usePathname() === "/";
  // Decided once, on the first page of the visit: later client navigations never bring it back.
  const [startedHome] = useState(home);
  const [mounted, setMounted] = useState(home);
  const curtainRef = useRef<HTMLDivElement>(null);
  const signatureRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startedHome) {
      signalSignatureDrawn();
      playIntro();
      finishIntro();
      return;
    }
    const curtain = curtainRef.current;
    const signature = signatureRef.current;
    const meta = metaRef.current;
    if (!curtain || !signature || !meta) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    lockScroll();

    let drawn = false;
    let ready = false;
    let leaving = false;
    const timers: number[] = [];
    const tl = gsap.timeline();

    const done = () => {
      finishIntro();
      unlockScroll();
      setMounted(false);
    };

    const leave = () => {
      if (leaving || !drawn || !ready) return;
      leaving = true;

      const target = document.querySelector<HTMLElement>("[data-signature-target]");
      const from = signature.getBoundingClientRect();
      const to = target?.getBoundingClientRect();

      if (reducedMotion || !to || to.width === 0) {
        playIntro();
        tl.to([curtain, signature, meta], { opacity: 0, duration: reducedMotion ? 0.3 : 0.8, ease: "power2.out" });
        tl.call(done);
        return;
      }

      // Fly the signature into the navigation bar while the curtain lifts behind it.
      playIntro();
      tl.to(meta, { opacity: 0, y: 8, duration: 0.4, ease: "power2.in" }, 0)
        .to(
          signature,
          {
            x: to.left - from.left,
            y: to.top - from.top,
            scale: to.width / from.width,
            duration: 1.35,
            ease: "expo.inOut",
          },
          0,
        )
        .to(curtain, { opacity: 0, duration: 1.1, ease: "power2.inOut" }, 0.2)
        .call(done);
    };

    timers.push(
      window.setTimeout(
        () => {
          drawn = true;
          signalSignatureDrawn();
          leave();
        },
        reducedMotion ? 400 : (signatureTimeline.total + HOLD) * 1000,
      ),
    );
    timers.push(
      window.setTimeout(() => {
        ready = true;
        drawn = true;
        signalSignatureDrawn();
        leave();
      }, TIMEOUT * 1000),
    );
    const stopWaiting = whenPortraitReady(() => {
      ready = true;
      leave();
    });

    return () => {
      timers.forEach(clearTimeout);
      stopWaiting();
      tl.kill();
      unlockScroll();
    };
  }, [startedHome]);

  if (!mounted) return null;

  return (
    <div className="loader fixed inset-0 z-[100]" aria-hidden>
      <div ref={curtainRef} className="absolute inset-0 bg-canvas">
        <div className="grain absolute inset-0" />
      </div>

      <div className="absolute inset-0 grid place-items-center px-gutter">
        <div className="flex w-[min(34rem,78vw)] flex-col items-center">
          <div ref={signatureRef} className="w-full origin-top-left will-change-transform">
            <Signature id="loader-signature" draw delay={0.2} />
          </div>

          <div ref={metaRef} className="mt-10 flex w-40 flex-col items-center gap-3">
            <div className="relative h-px w-full overflow-clip bg-line">
              <div
                className="loader-progress absolute inset-0 origin-left bg-signal"
                style={{ animationDuration: `${signatureTimeline.total + 0.2}s` }}
              />
            </div>
            <p className="text-label text-muted">{site.handle}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
