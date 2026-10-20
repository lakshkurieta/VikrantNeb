import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { episodeHref, episodes } from "@/content/episodes";
import { podcast, site } from "@/content/site";
import { formatDate, pad } from "@/lib/format";
import { podcastGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConnectButton } from "@/components/connect/ConnectButton";
import { LiteYouTube } from "@/components/podcast/LiteYouTube";
import { ArrowRight, ArrowUpRight, YouTubeMark } from "@/components/ui/icons";
import "@/components/page/page.css";
import "./show.css";

const show = `${podcast.title.top} ${podcast.title.joiner} ${podcast.title.bottom}`;
const [latest, ...earlier] = episodes;

export const metadata: Metadata = {
  title: `${show} — the 3PL and supply chain podcast hosted by ${site.name}`,
  description: podcast.description,
  alternates: { canonical: "/podcast" },
  openGraph: { title: show, description: podcast.description, images: [latest.cover] },
};

/**
 * The show: what it is and where to watch, the newest episode playing in place, then every earlier
 * episode as a card leading to its page and transcript. Server component.
 */
export default function PodcastPage() {
  const { title, tagline } = podcast;
  return (
    <main className="page show">
      <JsonLd data={podcastGraph} />
      <header className="show-head">
        <Link className="page-back" href="/">
          <span aria-hidden>←</span> {site.name}
        </Link>
        <p className="text-label text-signal">{podcast.eyebrow}</p>
        <h1 className="text-hero show-title">
          {title.top} <em>{title.joiner}</em> {title.bottom}
        </h1>
        <div className="show-head__about">
          <p className="show-tagline">
            {tagline.lead} <em>{tagline.accent}</em>
          </p>
          <p className="page-lead">{podcast.description}</p>
          <div className="page-actions">
            <a className="btn btn-solid" href={podcast.youtube} target="_blank" rel="noreferrer">
              <YouTubeMark width={18} height={18} />
              {podcast.page.watch}
              <ArrowUpRight />
            </a>
          </div>
        </div>
      </header>

      <section className="show-latest" aria-labelledby="show-latest">
        <LiteYouTube
          id={latest.youtube}
          title={`Episode ${latest.number}: ${latest.title}`}
          cover={latest.cover}
          sizes="(min-width: 1024px) 60vw, 92vw"
          eager
        />
        <div className="show-latest__text">
          <p id="show-latest" className="text-label text-signal">
            {podcast.page.latest} · Ep. {pad(latest.number)} · {latest.duration}
          </p>
          <h2 className="show-latest__title">{latest.title}</h2>
          <p className="show-latest__guest">
            <em>with</em> {latest.guest}, {latest.role}
          </p>
          <p className="show-latest__about">{latest.about[0]}</p>
          <Link className="btn btn-ink btn-sm" href={episodeHref(latest.slug)}>
            Episode & transcript
            <ArrowRight />
          </Link>
        </div>
      </section>

      <section className="show-all" aria-labelledby="show-all">
        <h2 id="show-all" className="page-heading">
          {podcast.page.every}
        </h2>
        <ol>
          {earlier.map((episode) => (
            <li key={episode.slug}>
              <Link className="show-card" href={episodeHref(episode.slug)}>
                <span className="show-card__cover">
                  <Image
                    src={episode.cover}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw"
                  />
                </span>
                <span className="show-card__meta text-label">
                  <span className="text-signal">Ep. {pad(episode.number)}</span> · {episode.duration} ·{" "}
                  {formatDate(episode.date)}
                </span>
                <span className="show-card__title">{episode.title}</span>
                <span className="show-card__guest">with {episode.guest}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="show-signup">
        <div>
          <p className="show-signup__title">{podcast.signup.title}</p>
          <p className="show-signup__body">{podcast.signup.body}</p>
        </div>
        <ConnectButton className="btn btn-solid">
          {podcast.signup.cta.label}
          <ArrowRight />
        </ConnectButton>
      </section>
    </main>
  );
}
