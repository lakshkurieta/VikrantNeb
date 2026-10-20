import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { episodeHref, episodes, findEpisode } from "@/content/episodes";
import { podcast } from "@/content/site";
import { transcripts } from "@/content/transcripts";
import { episodeGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { formatDate, pad } from "@/lib/format";
import { LiteYouTube } from "@/components/podcast/LiteYouTube";
import { ArrowUpRight } from "@/components/ui/icons";
import "../../blogs/blog.css";
import "../episode.css";

/** Every episode is prerendered at build time. */
export function generateStaticParams() {
  return episodes.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/podcast/[slug]">): Promise<Metadata> {
  const episode = findEpisode((await params).slug);
  if (!episode) return {};
  const title = `Ep. ${pad(episode.number)} · ${episode.title} — ${podcast.title.top} ${podcast.title.joiner} ${podcast.title.bottom}`;
  return {
    title,
    description: episode.about[0],
    alternates: { canonical: episodeHref(episode.slug) },
    openGraph: { title, description: episode.about[0], images: [episode.cover] },
  };
}

/**
 * One episode of Execution at Scale: the video, what it covers, the guest, then the full transcript
 * where there is one. Shares the article layout (app/blogs/blog.css). Server component; the slug is
 * read inside Suspense (Next's instant-navigation rule, as for articles).
 */
export default function EpisodePage({ params }: PageProps<"/podcast/[slug]">) {
  return (
    <main className="blog episode">
      <div className="blog-progress" aria-hidden />
      <Suspense fallback={<div className="blog-head blog-head--pending" aria-busy />}>
        <Episode params={params} />
      </Suspense>
    </main>
  );
}

async function Episode({ params }: { params: PageProps<"/podcast/[slug]">["params"] }) {
  const episode = findEpisode((await params).slug);
  if (!episode) notFound();
  const transcript = transcripts[episode.slug];
  const index = episodes.indexOf(episode);
  const neighbours = [episodes[index + 1], episodes[index - 1]].filter((other) => other !== undefined);
  const show = `${podcast.title.top} ${podcast.title.joiner} ${podcast.title.bottom}`;

  return (
    <>
      <JsonLd data={episodeGraph(episode)} />
      <article>
        <header className="blog-head">
          <Link className="blog-back" href="/#latest-episode">
            <span aria-hidden>←</span> {show}
          </Link>
          <p className="blog-meta text-label">
            <span className="text-signal">Episode {pad(episode.number)}</span> · {episode.duration} ·{" "}
            <time dateTime={episode.date}>{formatDate(episode.date)}</time>
          </p>
          <h1 className="blog-title">{episode.title}</h1>
          <p className="blog-byline">
            <em>with</em> {episode.guest}, {episode.role}
          </p>
        </header>

        <div className="episode-video">
          <LiteYouTube
            id={episode.youtube}
            title={`Episode ${episode.number}: ${episode.title}`}
            cover={episode.cover}
            sizes="(min-width: 1200px) 1100px, 92vw"
            eager
          />
          <div className="episode-listen">
            <a
              className="btn btn-sm"
              href={`https://www.youtube.com/watch?v=${episode.youtube}`}
              target="_blank"
              rel="noreferrer"
            >
              Watch on YouTube
              <ArrowUpRight />
            </a>
            {episode.spotify && (
              <a className="btn btn-sm" href={episode.spotify} target="_blank" rel="noreferrer">
                Listen on Spotify
                <ArrowUpRight />
              </a>
            )}
          </div>
        </div>

        <div className="episode-about">
          <div className="blog-body">
            <h2 className="episode-h2">About this episode</h2>
            {episode.about.map((paragraph, i) => (
              <p key={i} className={i === 0 ? "blog-lead" : undefined}>
                {paragraph}
              </p>
            ))}
            {episode.learn.length > 0 && (
              <>
                <h2 className="episode-h2">What you’ll learn</h2>
                <ul className="episode-learn">
                  {episode.learn.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          <aside className="episode-guest">
            <p className="text-label text-signal">The guest</p>
            <p className="episode-guest__name">{episode.guest}</p>
            <p className="episode-guest__role">{episode.role}</p>
            <p className="episode-guest__bio">{episode.bio}</p>
          </aside>
        </div>

        {transcript && (
          <section className="episode-transcript" aria-labelledby="transcript-title">
            <h2 id="transcript-title" className="episode-h2">
              Transcript
            </h2>
            {transcript.map((turn, i) =>
              turn.heading ? (
                <h3 key={i} className="episode-transcript__heading">
                  {turn.heading}
                </h3>
              ) : (
                <div key={i} className="episode-turn" data-role={turn.role}>
                  <p className="episode-turn__speaker text-label">
                    {turn.speaker} <span>{turn.role}</span>
                  </p>
                  {turn.text.map((paragraph, j) => (
                    <p key={j}>{paragraph}</p>
                  ))}
                </div>
              ),
            )}
          </section>
        )}
      </article>

      <nav className="blog-more" aria-label="More episodes">
        <div className="blog-more__head">
          <p className="text-label text-signal">More episodes</p>
          <Link className="blog-more__all" href="/#latest-episode">
            All episodes <span aria-hidden>→</span>
          </Link>
        </div>
        <ul className="blog-more__grid">
          {neighbours.map((other) => (
            <li key={other.slug}>
              <Link className="blog-card" href={episodeHref(other.slug)}>
                <span className="blog-card__cover">
                  <Image src={other.cover} alt="" fill sizes="(min-width: 1024px) 40vw, 92vw" />
                </span>
                <span className="blog-card__meta text-label">
                  <span className="text-signal">Episode {pad(other.number)}</span> · {other.duration} · {other.guest}
                </span>
                <span className="blog-card__title">{other.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
