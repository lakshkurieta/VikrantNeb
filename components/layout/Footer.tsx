import Image from "next/image";
import Link from "next/link";
import { book, contact, footer, hero, nav } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";
import { AmazonLogo } from "@/components/ui/AmazonLogo";
import { ConnectButton } from "@/components/connect/ConnectButton";
import { ArrowRight, ArrowUpRight, LinkedInMark, MailMark, YouTubeMark } from "@/components/ui/icons";
import { BackToTop } from "./BackToTop";
import { FooterSignature } from "./FooterSignature";
import "./footer.css";

const ICONS = { youtube: YouTubeMark, linkedin: LinkedInMark, mail: MailMark } as const;

/**
 * Site footer, on every page, kept small: the hero's line as a sign-off, signed by Vikrant (his
 * signature writes itself out), beside the pages, Connect, where to follow him and the book; then
 * the last line.
 *
 * Server component; the signature and back-to-top are small client islands.
 */
export function Footer() {
  const follow = [...footer.socials, { label: "Email", href: `mailto:${contact.email}`, icon: "mail" as const }];

  return (
    <footer className="footer">
      <div className="footer__panel">
        <Reveal className="footer-signoff">
          <p className="footer-signoff__line">
            <span>{hero.headline.top}</span>
            <span>
              <em>{hero.headline.joiner}</em> {hero.headline.bottom}
            </span>
          </p>
          <div className="footer-signoff__row">
            <p className="footer-signoff__counter">
              {hero.counterline.lead} <em>{hero.counterline.accent}</em>
            </p>
            <FooterSignature />
          </div>
        </Reveal>

        <div className="footer__links">
          <nav aria-label="Footer">
            <ul className="footer-nav">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="footer__actions">
            <ConnectButton className="btn btn-ink">
              {footer.connect.label}
              <ArrowRight />
            </ConnectButton>
            <ul className="footer-follow">
              {follow.map(({ label, href, icon }) => {
                const Icon = ICONS[icon];
                return (
                  <li key={href}>
                    <a
                      href={href}
                      aria-label={label}
                      data-brand={icon}
                      {...(icon !== "mail" && { target: "_blank", rel: "noreferrer" })}
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <a
            className="footer-book"
            href={book.amazon.href}
            target="_blank"
            rel="noreferrer"
            aria-label={book.amazon.label}
          >
            <Image src={book.poster} alt="" width={240} height={371} sizes="48px" />
            <span className="footer-book__title">{book.title}</span>
            <span className="footer-book__buy">
              {footer.book.buy} <AmazonLogo className="footer-book__amazon" aria-hidden />
              <ArrowUpRight width={12} height={12} />
            </span>
          </a>
        </div>

        <div className="footer__bottom">
          <p>{footer.copyright}</p>
          <p className="footer__tagline">{footer.tagline}</p>
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
