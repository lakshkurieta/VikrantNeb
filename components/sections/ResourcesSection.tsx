import Image from "next/image";
import Link from "next/link";
import { resourceHref, resources, resourcesIntro } from "@/content/resources";
import { Reveal } from "@/components/motion/Reveal";
import { ConnectButton } from "@/components/connect/ConnectButton";
import { ArrowRight } from "@/components/ui/icons";
import "@/components/resources/more.css";
import "./resources-section.css";

/**
 * Resources: "Tools for operators, not observers." Two of Vikrant's free white papers
 * (`resourcesIntro.home`) as an editorial index: big rows that wipe in as they scroll into
 * view, each showing its cover beside it on hover (inline on phones) and opening the paper's own page
 * (app/resources/[slug]); then a link to all of them on /resources.
 *
 * Server component.
 */
const shown = resources.filter((resource) => (resourcesIntro.home as readonly string[]).includes(resource.slug));

export function ResourcesSection() {
  const { title } = resourcesIntro;
  return (
    <section id="resources" className="resources" aria-labelledby="resources-title">
      <div className="resources__inner">
        <header className="resources-head">
          <Reveal>
            <p className="text-label text-signal">{resourcesIntro.eyebrow}</p>
            <h2 id="resources-title" className="resources-title">
              <span>{title.top}</span>
              <span>{title.bottom}</span>
              <em>{title.accent}</em>
            </h2>
          </Reveal>
          <Reveal className="resources-head__aside" delay={120}>
            <p className="resources-intro">{resourcesIntro.intro}</p>
            <p className="resources-promise">{resourcesIntro.promise}</p>
            <Link className="btn btn-sm resources-all" href={resourcesIntro.all.href}>
              {resourcesIntro.all.label}
              <ArrowRight />
            </Link>
          </Reveal>
        </header>

        <ol className="resources-index">
          {shown.map((resource) => (
            <li key={resource.slug}>
              <Link className="resources-index__row" href={resourceHref(resource.slug)}>
                <span className="resources-index__cover">
                  <Image
                    src={resource.cover}
                    alt=""
                    width={900}
                    height={1042}
                    sizes="(min-width: 1024px) 240px, 96px"
                  />
                </span>
                <span className="resources-index__text">
                  <span className="resources-index__title">{resource.title}</span>
                  <span className="resources-index__kicker">{resource.kicker}</span>
                  <span className="resources-index__summary">{resource.summary}</span>
                  <span className="resources-index__meta text-label">{resource.pages} pages · Free PDF</span>
                </span>
                <span className="resources-index__arrow" aria-hidden>
                  <ArrowRight />
                </span>
              </Link>
            </li>
          ))}
        </ol>
        <Link className="btn btn-sm resources-show-all" href={resourcesIntro.all.href}>
          Show all {resources.length} white papers
          <ArrowRight />
        </Link>

        <Reveal>
          <aside className="resources-more">
            <p>
              <span className="resources-more__title">{resourcesIntro.more.title}</span>{" "}
              <em>{resourcesIntro.more.body}</em>
            </p>
            <ConnectButton className="btn btn-solid">
              {resourcesIntro.more.cta.label}
              <ArrowRight />
            </ConnectButton>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
