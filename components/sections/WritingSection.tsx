import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { blogHref, blogs, readingTime } from "@/content/blogs";
import { formatDate, pad } from "@/lib/format";
import { writing } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { ArrowUpRight } from "@/components/ui/icons";
import "./writing-section.css";

/**
 * Writing, "Notes from the floor": the second page of the studio (Studio.tsx), reached by a
 * sideways pan from the podcast.
 *
 * Its header (title, intro and the latest article) is pinned for the pan (`data-studio-pin`) and
 * slides in from the right as Vikrant's bust glides across to the left; then it scrolls on as
 * normal and the other articles follow in the right-hand column, beside him. Every article opens
 * on its own page on this site (app/blogs/[slug]).
 *
 * Server component.
 */
export function WritingSection() {
  const [latest, ...rest] = blogs;
  const { title } = writing;
  return (
    <section id="writing" className="writing" aria-labelledby="writing-title">
      <div className="writing-pin">
        <div className="writing-pin__head" data-studio-pin data-studio-move>
          <div className="writing-grid">
            <div className="writing-head">
              <div className="writing-head__top">
                <p className="text-label text-signal">{writing.eyebrow}</p>
                <Link className="writing-link" href={writing.all.href}>
                  {writing.all.label}
                  <ArrowUpRight width={12} height={12} />
                </Link>
              </div>
              <h2 id="writing-title" className="writing-title">
                <span>{title.top}</span>
                <span>
                  <em>{title.joiner}</em> {title.bottom}
                </span>
              </h2>
              <p className="writing-intro">{writing.intro}</p>

              <Link className="writing-feature group" href={blogHref(latest.slug)}>
                <span className="writing-feature__cover">
                  <Image src={latest.cover} alt="" fill sizes="(min-width: 1024px) 22vw, 90vw" />
                </span>
                <span className="writing-feature__text">
                  <span className="writing-meta text-label">
                    <span className="text-signal">{latest.category}</span> · {formatDate(latest.date)} ·{" "}
                    {readingTime(latest)} min read
                  </span>
                  <span className="writing-feature__title">{latest.title}</span>
                  <span className="writing-feature__excerpt">{latest.excerpt}</span>
                  <span className="writing-read">
                    {writing.readLabel} <ArrowUpRight width={12} height={12} />
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/* The stretch of scroll the pan takes, while the header above stays pinned. */}
        <div className="writing-pin__track" aria-hidden />
      </div>

      <div className="writing-grid">
        <Reveal className="writing-list-reveal">
          <ol className="writing-list">
            {rest.map((article, i) => (
              <li key={article.slug} className="reveal-item" style={{ "--i": i } as CSSProperties}>
                <Link className="writing-row group" href={blogHref(article.slug)}>
                  <span className="writing-row__number">{pad(i + 2)}</span>
                  <span className="writing-row__cover">
                    <Image src={article.cover} alt="" fill sizes="160px" />
                  </span>
                  <span className="writing-row__text">
                    <span className="writing-meta text-label">
                      <span className="text-signal">{article.category}</span> · {formatDate(article.date)}
                    </span>
                    <span className="writing-row__title">{article.title}</span>
                    <span className="writing-row__excerpt">{article.excerpt}</span>
                  </span>
                  <ArrowUpRight className="writing-row__arrow" width={14} height={14} />
                </Link>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
