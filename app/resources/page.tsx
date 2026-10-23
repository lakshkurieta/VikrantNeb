import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { resourceHref, resources, resourcesIntro } from "@/content/resources";
import { site } from "@/content/site";
import { resourcesGraph } from "@/lib/schema";
import { pad } from "@/lib/format";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConnectButton } from "@/components/connect/ConnectButton";
import { ArrowRight, ArrowUp } from "@/components/ui/icons";
import "@/components/page/page.css";
import "@/components/resources/more.css";
import "./library.css";

export const metadata: Metadata = {
  title: `Resources: white papers for 3PL operators — ${site.name}`,
  description: resourcesIntro.intro,
  alternates: { canonical: "/resources" },
};

/**
 * The library as a bookshelf: every white paper as a 3D booklet (its cover and page edges) on its own
 * lit stage, the newest featured large beside its details, the rest in a grid; each with what it's
 * about (and what you'll learn, where the paper says), to read on the site or download. Server component.
 */
export default function ResourcesPage() {
  const { title } = resourcesIntro;
  return (
    <main className="page library">
      <JsonLd data={resourcesGraph} />
      <header className="library-head">
        <Link className="page-back" href="/">
          <span aria-hidden>←</span> {site.name}
        </Link>
        <p className="text-label text-signal">{resourcesIntro.eyebrow}</p>
        <h1 className="text-hero library-title">
          {title.top} {title.bottom} <em>{title.accent}</em>
        </h1>
        <div className="library-head__about">
          <p className="page-lead">{resourcesIntro.intro}</p>
          <p className="library-promise">{resourcesIntro.promise}</p>
        </div>
      </header>

      <ol className="shelf">
        {resources.map((resource, i) => (
          <li key={resource.slug} className="shelf-item">
            <Link className="shelf-item__stage" href={resourceHref(resource.slug)} tabIndex={-1} aria-hidden>
              <span className="booklet-in">
                <span className="booklet">
                  <Image
                    className="booklet__cover"
                    src={resource.cover}
                    alt=""
                    width={900}
                    height={1042}
                    sizes={i === 0 ? "(min-width: 1024px) 28vw, 60vw" : "(min-width: 1024px) 18vw, 60vw"}
                    {...(i === 0 && { loading: "eager" as const, fetchPriority: "high" as const })}
                  />
                  <span className="booklet__pages" />
                </span>
              </span>
            </Link>
            <div className="shelf-item__text">
              <p className="text-label text-signal">
                {pad(i + 1)} · {resource.pages} pages
              </p>
              <h2 className="shelf-item__title">
                <Link href={resourceHref(resource.slug)}>{resource.title}</Link>
              </h2>
              <p className="shelf-item__kicker">{resource.kicker}</p>
              <p className="shelf-item__summary">{resource.summary}</p>
              {resource.learn && (
                <ul className="shelf-item__learn">
                  {resource.learn.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              <div className="page-actions">
                <Link className="btn btn-ink" href={resourceHref(resource.slug)}>
                  Read the paper
                  <ArrowRight />
                </Link>
                <a className="btn" href={resource.file} download>
                  Download PDF
                  <ArrowUp className="rotate-180" />
                </a>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <aside className="resources-more">
        <p>
          <span className="resources-more__title">{resourcesIntro.more.title}</span> <em>{resourcesIntro.more.body}</em>
        </p>
        <ConnectButton className="btn btn-solid">
          {resourcesIntro.more.cta.label}
          <ArrowRight />
        </ConnectButton>
      </aside>
    </main>
  );
}
