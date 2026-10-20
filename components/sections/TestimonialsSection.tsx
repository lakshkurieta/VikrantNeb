import Image from "next/image";
import type { CSSProperties } from "react";
import { testimonials } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "@/components/ui/icons";
import { DeckMotion } from "./DeckMotion";
import "./testimonials-section.css";

/** Card colours, in turn: paper, ink (inverted), a wash of signal. */
const TONES = ["paper", "ink", "signal"] as const;
/** Size the quote to its length, so long and short ones both fill a card of one fixed height. */

/**
 * "Kind words from our readers": readers on Execution Under Pressure.
 *
 * Left, pinned: the title and the readers' faces. Right: a deck. Each testimonial is a
 * card that scrolls up and lands on the one before (CSS sticky), the cards beneath easing back
 * into a tilted stack; as each lands, a highlighter sweeps its key line and its reader's face
 * lifts on the left. DeckMotion drives the per-card values; testimonials-section.css styles them.
 *
 * Server component.
 */
export function TestimonialsSection() {
  const { title, readers } = testimonials;
  return (
    <section id="testimonials" className="readers" aria-labelledby="readers-title" data-deck>
      <div className="readers__inner">
        <div className="readers-aside">
          <div className="readers-aside__sticky">
            <Reveal>
              <p className="text-label text-signal">{testimonials.eyebrow}</p>
              <h2 id="readers-title" className="readers-title">
                <span>{title.top}</span>
                <span>
                  <em>{title.joiner}</em> {title.bottom}
                </span>
              </h2>
              <p className="readers-intro">{testimonials.intro}</p>
            </Reveal>
            <Reveal delay={140}>
              <div className="readers-faces" aria-hidden>
                {readers.map((reader, i) => (
                  <span key={reader.name} className="readers-face" data-deck-face={i}>
                    <Image src={reader.photo} alt="" width={120} height={120} />
                  </span>
                ))}
              </div>
              <a className="btn btn-solid readers-cta" href={testimonials.cta.href} target="_blank" rel="noreferrer">
                {testimonials.cta.label}
                <ArrowUpRight />
              </a>
            </Reveal>
          </div>
        </div>

        <ol className="readers-deck">
          {readers.map((reader, i) => {
            const at = reader.quote.indexOf(reader.mark);
            return (
              <li
                key={reader.name}
                className="readers-card"
                data-deck-card
                data-tone={TONES[i % TONES.length]}
                style={{ "--i": i, "--tilt": `${i % 2 ? 1.6 : -1.4}deg` } as CSSProperties}
              >
                <figure className="readers-card__figure">
                  <span className="readers-card__glyph" aria-hidden>
                    “
                  </span>
                  <blockquote className="readers-card__quote">
                    <p>
                      {reader.quote.slice(0, at)}
                      <mark className="readers-card__mark">{reader.mark}</mark>
                      {reader.quote.slice(at + reader.mark.length)}
                    </p>
                  </blockquote>
                  <figcaption className="readers-card__who">
                    <Image src={reader.photo} alt="" width={120} height={120} />
                    <span>
                      <span className="readers-card__name">{reader.name}</span>
                      <span className="readers-card__role">{reader.role}</span>
                    </span>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ol>
      </div>
      <DeckMotion />
    </section>
  );
}
