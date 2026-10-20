import Link from "next/link";
import { resourceHref, resources, resourcesIntro } from "@/content/resources";
import { Reveal } from "@/components/motion/Reveal";
import { PaperCover } from "@/components/resources/PaperCover";
import { ConnectButton } from "@/components/connect/ConnectButton";
import { ArrowRight, ArrowUp } from "@/components/ui/icons";
import "./resources-section.css";

/**
 * Resources: "Tools for operators, not observers." Vikrant's free white papers, each as a paper
 * stack beside its summary, alternating sides. Each opens its own page on this site
 * (app/resources/[slug]) with a reader, or downloads straight away.
 *
 * Server component.
 */
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

        <ol className="resources-list">
          {resources.map((resource) => (
            <li key={resource.slug}>
              <Reveal className="resource-row">
                <Link className="resource-row__cover" href={resourceHref(resource.slug)} tabIndex={-1} aria-hidden>
                  <PaperCover src={resource.cover} sizes="(min-width: 1024px) 30vw, 80vw" />
                </Link>
                <div className="resource-row__text">
                  <h3 className="resource-row__title">
                    <Link href={resourceHref(resource.slug)}>{resource.title}</Link>
                  </h3>
                  <p className="resource-row__kicker">{resource.kicker}</p>
                  <p className="resource-row__summary">{resource.summary}</p>
                  <div className="resource-row__actions">
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
              </Reveal>
            </li>
          ))}
        </ol>

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
