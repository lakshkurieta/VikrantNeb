import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogHref } from "@/content/blogs";
import { book, site, testimonials } from "@/content/site";
import { bookGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { AmazonLogo } from "@/components/ui/AmazonLogo";
import { ArrowRight, ArrowUpRight } from "@/components/ui/icons";
import "@/components/page/page.css";
import "./book.css";

const pitch = book.back.headline;

export const metadata: Metadata = {
  title: `${book.title}: ${book.subtitle} — ${site.name}`,
  description: book.back.paragraphs[0],
  alternates: { canonical: "/book" },
  openGraph: { title: `${book.title} by ${site.name}`, description: book.back.paragraphs[0], images: [book.poster] },
};

/**
 * Execution Under Pressure: the cover in 3D beside the title and where to buy it; the back cover's
 * pitch, its five hidden reasons and the line that closes it; every reader's words; the details.
 * Server component.
 */
export default function BookPage() {
  const { title } = book.page;
  return (
    <main className="page book-page">
      <JsonLd data={bookGraph} />
      <header className="book-page__head">
        <div>
          <Link className="page-back" href="/">
            <span aria-hidden>←</span> {site.name}
          </Link>
          <p className="text-label text-signal">{book.page.eyebrow}</p>
          <h1 className="text-hero book-page__title">
            <span>{title.top}</span>
            <span>
              <em>{title.joiner}</em> {title.bottom}
            </span>
          </h1>
          <p className="book-page__subtitle">{book.subtitle}</p>
          <p className="book-page__stat">
            <strong>{book.firstPage.stat.highlight}</strong> {book.firstPage.stat.rest}
          </p>
          <div className="page-actions">
            <a className="btn btn-solid" href={book.amazon.href} target="_blank" rel="noreferrer">
              Buy on <AmazonLogo className="book-page__amazon" aria-hidden />
              <ArrowUpRight />
            </a>
            <Link className="btn" href={blogHref("why-i-wrote-execution-under-pressure")}>
              Why I wrote it
              <ArrowRight />
            </Link>
          </div>
        </div>
        <div className="book3d">
          <div className="book3d__book">
            <Image
              className="book3d__cover"
              src={book.poster}
              alt={`${book.title} by ${site.name}: the cover`}
              width={1024}
              height={1583}
              sizes="(min-width: 1024px) 380px, 70vw"
              loading="eager"
              fetchPriority="high"
            />
            <span className="book3d__pages" aria-hidden />
          </div>
        </div>
      </header>

      <section className="book-pitch" aria-label="From the back cover">
        <p>
          {pitch.lead} <em>{pitch.accent}</em> {pitch.rest}
        </p>
      </section>

      <section className="book-inside">
        <div className="book-inside__text">
          {book.back.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div>
          <h2 className="page-heading">
            The <em>hidden</em> reasons
          </h2>
          <ul className="book-reasons">
            {book.back.reasons.map((reason) => (
              <li key={reason.title}>
                <strong>{reason.title}</strong> {reason.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="book-close">
        <p className="page-lead">{book.back.closing}</p>
        <blockquote className="book-close__quote">
          <p>“{book.back.quote}”</p>
          <footer>
            <span className="text-label text-signal">{site.name}</span>
            {book.back.author.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </footer>
        </blockquote>
      </section>

      <section className="book-readers" aria-labelledby="book-readers">
        <h2 id="book-readers" className="page-heading">
          {testimonials.title.top} <em>{testimonials.title.joiner}</em> {testimonials.title.bottom}
        </h2>
        <ul>
          {testimonials.readers.map((reader) => (
            <li key={reader.name} className="book-reader">
              <p>{reader.quote}</p>
              <div className="book-reader__who">
                <Image src={reader.photo} alt="" width={44} height={44} />
                <span>
                  <strong>{reader.name}</strong>
                  {reader.role}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="book-details" aria-label="Details">
        <dl>
          <div>
            <dt className="text-label">Author</dt>
            <dd>{site.name}</dd>
          </div>
          <div>
            <dt className="text-label">ISBN</dt>
            <dd>{book.isbn}</dd>
          </div>
          <div>
            <dt className="text-label">{book.amazon.heading}</dt>
            <dd>Amazon</dd>
          </div>
        </dl>
        <a
          className="btn btn-solid"
          href={book.amazon.href}
          target="_blank"
          rel="noreferrer"
          aria-label={book.amazon.label}
        >
          Buy on <AmazonLogo className="book-page__amazon" aria-hidden />
          <ArrowUpRight />
        </a>
      </section>
    </main>
  );
}
