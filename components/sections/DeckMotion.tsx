"use client";

import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { frameScroll } from "@/lib/scroll";

const clamp = (value: number) => Math.max(0, Math.min(1, value));

/**
 * Drives the testimonials deck (TestimonialsSection). Per card it writes:
 *
 *   --arrive  0 → 1 as the card scrolls up into its place on the stack
 *   --land    0 → 1 just after it lands: the highlighter sweeps its key line
 *   --depth   how many cards have landed on top of it (fractional): it eases back and tilts
 *
 * and it lifts the newest card's reader out of the row of faces on the left.
 *
 * The cards are sticky and all one height, so where each one pins is known from layout alone: it
 * is measured on resize, and the scroll path only does arithmetic. Without the sticky deck (one
 * column on reduced motion, no script) every card is shown settled.
 */
export function DeckMotion() {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const section = ref.current?.closest<HTMLElement>("[data-deck]");
    if (!section) return;
    const cards = [...section.querySelectorAll<HTMLElement>("[data-deck-card]")];
    const faces = [...section.querySelectorAll<HTMLElement>("[data-deck-face]")];
    const list = cards[0]?.parentElement;
    if (!list || cards.length === 0) return;

    let stacked = false;
    // Scroll position at which each card pins, and the scroll it takes one card to come up.
    let pins: number[] = [];
    let step = 1;
    let lastY = Number.NaN;
    let current = -1;
    let visible = false;
    let disposed = false;
    const written = cards.map(() => "");

    const write = (i: number, arrive: number, land: number, depth: number) => {
      const key = `${arrive.toFixed(3)}|${land.toFixed(3)}|${depth.toFixed(3)}`;
      if (written[i] === key) return;
      written[i] = key;
      const style = cards[i].style;
      style.setProperty("--arrive", arrive.toFixed(3));
      style.setProperty("--land", land.toFixed(3));
      style.setProperty("--depth", depth.toFixed(3));
    };

    const show = (index: number) => {
      if (index === current) return;
      current = index;
      faces.forEach((face, i) => face.toggleAttribute("data-active", i === index));
    };

    const measure = () => {
      stacked = getComputedStyle(cards[0]).position === "sticky";
      lastY = Number.NaN;
      if (!stacked) {
        cards.forEach((_, i) => write(i, 1, 1, 0));
        show(cards.length - 1);
        return;
      }
      const top = list.getBoundingClientRect().top + window.scrollY;
      step = Math.max(1, cards[0].offsetHeight + (parseFloat(getComputedStyle(list).rowGap) || 0));
      pins = cards.map((card, i) => top + i * step - (parseFloat(getComputedStyle(card).top) || 0));
      tick();
    };

    const tick = () => {
      if (!stacked || !visible) return;
      const y = frameScroll();
      if (y === lastY) return;
      lastY = y;
      const arrive = pins.map((pin) => clamp((y - (pin - step)) / step));
      let newest = 0;
      for (let i = 0; i < cards.length; i++) {
        const land = clamp((y - pins[i]) / (step * 0.4));
        let depth = 0;
        for (let j = i + 1; j < cards.length; j++) depth += arrive[j];
        write(i, arrive[i], land, depth);
        if (arrive[i] >= 0.6) newest = i;
      }
      show(newest);
    };

    const visibility = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      tick();
    });
    visibility.observe(section);
    const resize = new ResizeObserver(measure);
    resize.observe(section);
    window.addEventListener("resize", measure);
    document.fonts.ready.then(() => {
      if (!disposed) measure();
    });
    measure();
    gsap.ticker.add(tick);

    return () => {
      disposed = true;
      gsap.ticker.remove(tick);
      visibility.disconnect();
      resize.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return <span ref={ref} hidden />;
}
