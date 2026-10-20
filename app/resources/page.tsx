import type { Metadata } from "next";
import Link from "next/link";
import { resourceHref, resources, resourcesIntro } from "@/content/resources";
import { site } from "@/content/site";
import { resourcesGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConnectButton } from "@/components/connect/ConnectButton";
import { PaperCover } from "@/components/resources/PaperCover";
import { ArrowRight, ArrowUp } from "@/components/ui/icons";
import "@/components/page/page.css";
import "./library.css";

export const metadata: Metadata = {
  title: `Resources: white papers for 3PL operators — ${site.name}`,
  description: resourcesIntro.intro,
  alternates: { canonical: "/resources" },
};

/**
 * The library: every white paper side by side, each with what it's about and what you'll learn,
 * to read on the site or download. Server component.
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

      <ol className="library-papers">
        {resources.map((resource, i) => (
          <li key={resource.slug} className="library-paper">
            <Link className="library-paper__cover" href={resourceHref(resource.slug)} tabIndex={-1} aria-hidden>
              <PaperCover src={resource.cover} sizes="(min-width: 1024px) 26vw, 70vw" eager={i === 0} />
            </Link>
            <h2 className="library-paper__title">
              <Link href={resourceHref(resource.slug)}>{resource.title}</Link>
            </h2>
            <p className="library-paper__kicker">{resource.kicker}</p>
            <p className="library-paper__summary">{resource.summary}</p>
            {resource.learn && (
              <ul className="library-paper__learn">
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
