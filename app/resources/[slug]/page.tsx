import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { findResource, resourceHref, resources, resourcesIntro } from "@/content/resources";
import { papers, type PaperBlock } from "@/content/papers";
import { site } from "@/content/site";
import { paperGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { pad } from "@/lib/format";
import { ConnectButton } from "@/components/connect/ConnectButton";
import { PaperCover } from "@/components/resources/PaperCover";
import { PaperExhibit } from "@/components/resources/Exhibits";
import { ArrowRight, ArrowUp } from "@/components/ui/icons";
import "../resource.css";

/** Every paper is prerendered at build time. */
export function generateStaticParams() {
  return resources.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/resources/[slug]">): Promise<Metadata> {
  const resource = findResource((await params).slug);
  if (!resource) return {};
  const title = `${resource.title} — ${site.name}`;
  return {
    title,
    description: resource.summary,
    alternates: { canonical: resourceHref(resource.slug) },
    openGraph: { title, description: resource.summary, images: [resource.cover] },
  };
}

/**
 * One of Vikrant's white papers: what it is, his line from it, then the paper itself as a reading
 * page (content/papers.ts) with its contents pinned beside it, and a download that needs no
 * sign-up. Server component.
 *
 * The slug is read inside a Suspense boundary (Next's instant-navigation rule, as for articles).
 */
export default function ResourcePage({ params }: PageProps<"/resources/[slug]">) {
  return (
    <main className="resource">
      <Suspense fallback={<div className="resource-hero" aria-busy />}>
        <Paper params={params} />
      </Suspense>
    </main>
  );
}

async function Paper({ params }: { params: PageProps<"/resources/[slug]">["params"] }) {
  const resource = findResource((await params).slug);
  if (!resource) notFound();
  const others = resources.filter((other) => other.slug !== resource.slug);
  const body = papers[resource.slug] ?? [];
  const headings = body.flatMap((block) => (block.t === "h2" ? [block.text] : []));

  return (
    <>
      <JsonLd data={paperGraph(resource)} />
      <header className="resource-hero">
        <div className="resource-hero__text">
          <Link className="resource-back" href="/#resources">
            <span aria-hidden>←</span> All resources
          </Link>
          <h1 className="resource-title">{resource.title}</h1>
          <p className="resource-kicker">{resource.kicker}</p>
          <p className="resource-summary">{resource.summary}</p>
          <p className="resource-author">
            <em>By</em> {site.name} · Author, Execution Under Pressure · Founder & CEO, Leanafy & Kurieta
          </p>
          <div className="resource-actions">
            <a className="btn btn-solid" href="#read">
              Read the paper
              <ArrowUp className="rotate-180" />
            </a>
            <a className="btn" href={resource.file} download>
              Download PDF
              <ArrowUp className="rotate-180" />
            </a>
          </div>
        </div>
        <div className="resource-hero__paper">
          <PaperCover src={resource.cover} sizes="(min-width: 1024px) 34vw, 80vw" eager />
        </div>
      </header>

      <section className="resource-about" aria-label="About this paper">
        <div className="resource-about__main">
          <p className="text-label text-signal">About this paper</p>
          <p className="resource-about__text">{resource.about}</p>
          <blockquote className="resource-quote">
            <p>{resource.quote}</p>
            <footer>— {site.name}</footer>
          </blockquote>
          {resource.learn && (
            <>
              <p className="text-label text-signal resource-about__label">What you’ll learn</p>
              <ul className="resource-learn">
                {resource.learn.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      {/* The paper itself, with its contents pinned beside it. */}
      <section id="read" className="resource-read" aria-label={resource.title}>
        <nav className="resource-contents" aria-label="Contents">
          <p className="text-label">Inside · {resource.pages} pages</p>
          <ol>
            {headings.map((heading, i) => (
              <li key={heading}>
                <a href={`#${anchor(heading)}`}>
                  <span className="resource-contents__n">{pad(i + 1)}</span>
                  {heading}
                </a>
              </li>
            ))}
          </ol>
        </nav>
        <div className="paper">{body.map(renderBlock)}</div>
      </section>

      {others.length > 0 && (
        <nav className="resource-next" aria-label="More resources">
          <p className="text-label text-signal">Also in the series</p>
          {others.map((other) => (
            <Link key={other.slug} className="resource-next__card group" href={resourceHref(other.slug)}>
              <span className="resource-next__paper">
                <PaperCover src={other.cover} sizes="160px" />
              </span>
              <span className="resource-next__text">
                <span className="resource-next__title">{other.title}</span>
                <span className="resource-next__kicker">{other.kicker}</span>
              </span>
              <span className="resource-next__arrow" aria-hidden>
                →
              </span>
            </Link>
          ))}
        </nav>
      )}

      <aside className="resources-more resource-more">
        <p>
          <span className="resources-more__title">{resourcesIntro.more.title}</span> <em>{resourcesIntro.more.body}</em>
        </p>
        <ConnectButton className="btn btn-solid">
          {resourcesIntro.more.cta.label}
          <ArrowRight />
        </ConnectButton>
      </aside>
    </>
  );
}

/** A heading's id, for the contents links. */
const anchor = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** A paper's inline marks: **bold**, [label](href) (outside links open in a new tab) and line breaks. */
function rich(text: string) {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|\n)/).map((part, i) => {
    if (part === "\n") return <br key={i} />;
    if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    const link = part.match(/^\[(.+)\]\((.+)\)$/);
    if (!link) return part;
    const away = link[2].startsWith("http");
    return (
      <a key={i} href={link[2]} {...(away && { target: "_blank", rel: "noreferrer" })}>
        {link[1]}
      </a>
    );
  });
}

/** One block of a paper (content/papers.ts) as reading markup. */
function renderBlock(block: PaperBlock, i: number, all: readonly PaperBlock[]) {
  switch (block.t) {
    case "h2":
      return (
        <h2 key={i} id={anchor(block.text)}>
          {block.text}
        </h2>
      );
    case "h3":
      return <h3 key={i}>{block.text}</h3>;
    case "h4":
      return <h4 key={i}>{block.text}</h4>;
    case "p":
      return <p key={i}>{rich(block.text)}</p>;
    case "note":
      return (
        <p key={i} className="paper-note">
          {rich(block.text)}
        </p>
      );
    case "by":
      return null;
    case "quote":
      return (
        <blockquote key={i} className="paper-quote">
          <p>{block.text}</p>
          {all[i + 1]?.t === "by" && <footer>— {(all[i + 1] as { text: string }).text}</footer>}
        </blockquote>
      );
    case "callout":
      return (
        <aside key={i} className="paper-callout">
          {block.title && <p className="paper-callout__title text-label">{block.title}</p>}
          {block.text.map((text, j) => (
            <p key={j}>{rich(text)}</p>
          ))}
        </aside>
      );
    case "item":
      return (
        <div key={i} className="paper-item">
          <span className="paper-item__n">{block.n}</span>
          <div>
            {block.title && <p className="paper-item__title">{block.title}</p>}
            <p>{rich(block.text)}</p>
          </div>
        </div>
      );
    case "list":
    case "ul":
      return (
        <ul key={i} className={block.t === "list" ? "paper-checklist" : "paper-list"}>
          {block.items.map((item) => (
            <li key={item}>{rich(item)}</li>
          ))}
        </ul>
      );
    case "steps":
      return (
        <ol key={i} className="paper-steps">
          {block.items.map((step, j) => (
            <li key={j}>
              <span className="text-label text-signal">{step.n}</span>
              <strong>{step.title}</strong>
              {step.text}
            </li>
          ))}
        </ol>
      );
    case "table":
      return (
        <div key={i} className="paper-table">
          {block.title && <p className="text-label text-signal">{block.title}</p>}
          <table>
            {block.head && (
              <thead>
                <tr>
                  {block.head.map((cell, c) => (
                    <th key={c}>{cell}</th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {block.rows.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => (
                    <td key={c}>{rich(cell)}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "exhibit":
      return <PaperExhibit key={i} id={block.id} />;
    case "figure":
      return (
        <figure key={i} className="paper-figure">
          <Image
            src={block.src}
            alt={block.alt}
            width={block.w}
            height={block.h}
            sizes="(min-width: 1024px) 760px, 92vw"
          />
        </figure>
      );
  }
}
