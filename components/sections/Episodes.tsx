"use client";

import Link from "next/link";
import { useState, type CSSProperties } from "react";
import { episodeHref, episodes } from "@/content/episodes";
import { podcast } from "@/content/site";
import { formatDate, pad } from "@/lib/format";
import { Reveal } from "@/components/motion/Reveal";
import { LiteYouTube } from "@/components/podcast/LiteYouTube";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";

/** Episodes listed here; "Show all" opens the podcast page with every one. */
const FIRST = 3;

/**
 * The newest three episodes as pills, then "Show all", which opens the podcast page. One is open at a time,
 * showing its video, guest, summary and links, including its own page with the full transcript
 * (app/podcast/[slug]). The newest starts open, so its video is the first thing here.
 *
 * Each video is a still cover until pressed (LiteYouTube), mounted once its episode is first
 * opened, so nothing loads for the rest up front. Closing an episode remounts it as its cover,
 * which stops it playing.
 */
export function Episodes() {
  const [active, setActive] = useState(0);
  const [seen, setSeen] = useState<readonly number[]>([0]);

  const choose = (index: number) => {
    setActive(index);
    setSeen((list) => (list.includes(index) ? list : [...list, index]));
  };

  return (
    <div id="latest-episode" data-arrive style={{ "--stagger": 2.4 } as CSSProperties}>
      <Reveal>
        <ol className="podcast-list">
          {episodes.slice(0, FIRST).map((item, i) => {
            const open = i === active;
            return (
              <li
                key={item.youtube}
                className="podcast-item reveal-item"
                data-open={open || undefined}
                style={{ "--i": i + 1 } as CSSProperties}
              >
                <button
                  type="button"
                  className="podcast-item__head"
                  aria-expanded={open}
                  aria-controls={`episode-${item.number}`}
                  onClick={() => choose(i)}
                >
                  <span className="podcast-item__number">{pad(item.number)}</span>
                  <span className="podcast-item__text">
                    <span className="podcast-item__title">{item.title}</span>
                    <span className="podcast-item__guest">
                      with {item.guest} · {item.duration}
                    </span>
                  </span>
                </button>

                <div id={`episode-${item.number}`} className="podcast-item__body" inert={!open}>
                  <div className="podcast-item__clip">
                    {seen.includes(i) && (
                      <LiteYouTube
                        key={String(open)}
                        id={item.youtube}
                        title={`Episode ${item.number}: ${item.title}`}
                        cover={item.cover}
                        sizes="(min-width: 1024px) 50vw, 100vw"
                      />
                    )}
                    <p className="podcast-item__role text-label">
                      {item.role} · {formatDate(item.date)}
                    </p>
                    <p className="podcast-item__summary">{item.about[0]}</p>
                    <div className="podcast-item__links">
                      <Link className="btn btn-ink btn-sm" href={episodeHref(item.slug)}>
                        Episode & transcript
                        <ArrowRight />
                      </Link>
                      <a
                        className="btn btn-sm"
                        href={`https://www.youtube.com/watch?v=${item.youtube}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        YouTube
                        <ArrowUpRight />
                      </a>
                      {item.spotify && (
                        <a className="btn btn-sm" href={item.spotify} target="_blank" rel="noreferrer">
                          Spotify
                          <ArrowUpRight />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <Link className="btn btn-sm podcast-more" href={podcast.all.href}>
          Show all {episodes.length} episodes
          <ArrowRight />
        </Link>
      </Reveal>
    </div>
  );
}
