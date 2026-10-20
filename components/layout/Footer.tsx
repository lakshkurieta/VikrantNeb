import Image from "next/image";
import Link from "next/link";
import { blogHref, blogs } from "@/content/blogs";
import { resourceHref, resources } from "@/content/resources";
import { episodeHref, episodes } from "@/content/episodes";
import { book, footer, hero, nav } from "@/content/site";
import { pad } from "@/lib/format";
import { Reveal } from "@/components/motion/Reveal";
import { AmazonLogo } from "@/components/ui/AmazonLogo";
import { ConnectButton } from "@/components/connect/ConnectButton";
import { ArrowRight, ArrowUpRight, LinkedInMark, YouTubeMark } from "@/components/ui/icons";
import { BackToTop } from "./BackToTop";
import { FooterSignature } from "./FooterSignature";
import "./footer.css";

const ICONS = { youtube: YouTubeMark, linkedin: LinkedInMark } as const;

/**
 * Site footer, on every page: the hero's line as a sign-off, signed by Vikrant (his signature writes
 * itself out beside it), next to the book; then navigation, the latest of everything and the social
 * links.
 *
 * Server component; the section links, the signature and back-to-top are small client islands.
 */
export function Footer() {
  const latestEpisode = episodes[0];
  const latestNote = blogs[0];
  const latestPaper = resources[0];
  const latest = [
    {
      label: `Podcast · Ep. ${pad(latestEpisode.number)}`,
      title: latestEpisode.title,
      href: episodeHref(latestEpisode.slug),
    },
    { label: "Note", title: latestNote.title, href: blogHref(latestNote.slug) },
    { label: "White paper", title: latestPaper.title, href: resourceHref(latestPaper.slug) },
  ];

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer-lead">
          <Reveal className="footer-statement">
            <p className="footer-statement__lines">
              <span>{hero.headline.top}</span>
              <span>
                <em>{hero.headline.joiner}</em> {hero.headline.bottom}
              </span>
            </p>
            {/* His signature signs off the line, small, under the end of "is the job." */}
            <div className="footer-statement__sign-row">
              <p className="footer-statement__accent">
                {hero.counterline.lead} <em>{hero.counterline.accent}</em>
              </p>
              <FooterSignature />
            </div>
            <ConnectButton className="btn btn-ink footer-connect">
              {footer.connect.label}
              <ArrowRight />
            </ConnectButton>
          </Reveal>

          <Reveal delay={120}>
            <a
              className="footer-book"
              href={book.amazon.href}
              target="_blank"
              rel="noreferrer"
              aria-label={book.amazon.label}
            >
              <span className="footer-book__cover">
                <Image src={book.poster} alt="" width={240} height={371} sizes="140px" />
              </span>
              <span className="footer-book__text">
                <span className="text-label text-signal">{footer.book.eyebrow}</span>
                <span className="footer-book__title">{book.title}</span>
                <span className="footer-book__subtitle">{footer.book.subtitle}</span>
                <span className="footer-book__buy">
                  {footer.book.buy} <AmazonLogo className="footer-book__amazon" aria-hidden />
                  <ArrowUpRight width={13} height={13} />
                </span>
              </span>
            </a>
          </Reveal>
        </div>

        <div className="footer-cols">
          <nav aria-label="Footer">
            <p className="footer-heading text-label">{footer.headings.navigate}</p>
            <ul className="footer-nav">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-nav__link">
                    {item.label}
                    <span aria-hidden>→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="footer-heading text-label">{footer.headings.latest}</p>
            <ul className="footer-latest">
              {latest.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="footer-latest__link">
                    <span className="text-label">{item.label}</span>
                    <span className="footer-latest__title">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-heading text-label">{footer.headings.follow}</p>
            <ul className="footer-socials">
              {footer.socials.map((social) => {
                const Icon = ICONS[social.icon];
                return (
                  <li key={social.href}>
                    <a
                      className="footer-social"
                      data-brand={social.icon}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="footer-social__icon">
                        <Icon />
                      </span>
                      <span className="footer-social__text">
                        <span className="footer-social__label">{social.label}</span>
                        <span className="footer-social__handle">{social.handle}</span>
                      </span>
                      <ArrowUpRight className="footer-social__arrow" width={12} height={12} />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{footer.copyright}</p>
          <p className="footer-bottom__tagline">{footer.tagline}</p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
