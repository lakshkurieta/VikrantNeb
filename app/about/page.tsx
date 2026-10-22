import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogHref } from "@/content/blogs";
import { about, footer, site } from "@/content/site";
import { aboutGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { ConnectButton } from "@/components/connect/ConnectButton";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";
import "@/components/page/page.css";
import "./about.css";

export const metadata: Metadata = {
  title: `About ${site.name} — Founder of Leanafy & Kurieta, Author, 3PL Operator`,
  description: about.bio[0],
  alternates: { canonical: "/about" },
  openGraph: { title: `About ${site.name}`, description: about.bio[0], type: "profile", images: [about.portrait.src] },
};

/**
 * Who Vikrant is, at length: his statement beside him on the site's blue, his story in his own
 * words, the facts, his two companies, and how to work with him. Server component.
 */
export default function AboutPage() {
  const { title } = about;
  return (
    <main className="page about">
      <JsonLd data={aboutGraph} />
      <header className="about-head">
        <div className="about-head__text">
          <Link className="page-back" href="/">
            <span aria-hidden>←</span> {site.name}
          </Link>
          <p className="text-label text-signal">{about.eyebrow}</p>
          <h1 className="text-hero about-title">
            <span>{title.top}</span> <em>{title.joiner}</em> <span>{title.bottom}</span>
          </h1>
          <p className="about-statement">{about.statement}</p>
        </div>
        <figure className="about-portrait">
          <Image
            src={about.portrait.src}
            alt={about.portrait.alt}
            width={720}
            height={720}
            sizes="(min-width: 1024px) 40vw, 90vw"
            loading="eager"
            fetchPriority="high"
          />
        </figure>
      </header>

      <section className="about-story" aria-labelledby="about-story">
        <p id="about-story" className="text-label text-signal about-story__label">
          The story
        </p>
        <div className="about-story__text">
          {about.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="about-facts" aria-label="At a glance">
        <dl>
          {about.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="text-label">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        <div className="about-facts__bio">
          {about.bio.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="about-companies" aria-labelledby="about-companies">
        <h2 id="about-companies" className="page-heading">
          {about.companiesTitle}
        </h2>
        <ul>
          {site.companies.map((company) => (
            <li key={company.name} className="about-company">
              <p className="about-company__name">{company.name}</p>
              <p className="about-company__text">{company.description}</p>
              <div className="page-actions">
                <Link className="btn btn-ink btn-sm" href={blogHref(about.stories[company.name])}>
                  Why I started {company.name}
                  <ArrowRight />
                </Link>
                <a className="btn btn-sm" href={company.url} target="_blank" rel="noreferrer">
                  {company.url.replace("https://", "")}
                  <ArrowUpRight />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-work" aria-labelledby="about-work">
        <h2 id="about-work" className="page-heading">
          {about.work.title}
        </h2>
        <p className="page-lead">{about.work.body}</p>
        <div className="page-actions">
          <ConnectButton className="btn btn-solid">
            Connect
            <ArrowRight />
          </ConnectButton>
          {footer.socials.map((social) => (
            <a key={social.href} className="btn" href={social.href} target="_blank" rel="noreferrer">
              {social.label}
              <ArrowUpRight />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
