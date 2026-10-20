import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { blogHref, blogs, findBlog, readingTime } from "@/content/blogs";
import { articleGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { formatDate } from "@/lib/format";
import { book, connect, hero, site, writing } from "@/content/site";
import { BlogCard } from "@/components/blog/BlogCard";
import { ConnectButton } from "@/components/connect/ConnectButton";
import { Signature } from "@/components/signature/Signature";
import { ArrowUpRight } from "@/components/ui/icons";
import "../blog.css";

/** Every article is prerendered at build time. */
export function generateStaticParams() {
  return blogs.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/blogs/[slug]">): Promise<Metadata> {
  const blog = findBlog((await params).slug);
  if (!blog) return {};
  const title = `${blog.title} — ${site.name}`;
  return {
    title,
    description: blog.excerpt,
    alternates: { canonical: blogHref(blog.slug) },
    openGraph: { title, description: blog.excerpt, type: "article", publishedTime: blog.date, images: [blog.cover] },
  };
}

/** Short standalone lines are his punchlines ("Same conversation."): set a touch heavier. */
const isBeat = (paragraph: string) => paragraph.length <= 48;

/**
 * One of Vikrant's articles, in full: header, cover, the text in a reading column, an author card,
 * then the neighbouring articles. Server component.
 *
 * The slug is read inside a Suspense boundary, so a navigation here can show the page shell at once
 * (Next's instant-navigation rule). Every article is prerendered, so the fallback is a formality.
 */
export default function BlogPage({ params }: PageProps<"/blogs/[slug]">) {
  return (
    <main className="blog">
      <div className="blog-progress" aria-hidden />
      <Suspense fallback={<div className="blog-head blog-head--pending" aria-busy />}>
        <Article params={params} />
      </Suspense>
    </main>
  );
}

async function Article({ params }: { params: PageProps<"/blogs/[slug]">["params"] }) {
  const blog = findBlog((await params).slug);
  if (!blog) notFound();
  const index = blogs.indexOf(blog);
  const more = [blogs[index + 1] ?? blogs[0], blogs[index - 1] ?? blogs[blogs.length - 1]].filter(
    (other, i, list) => other.slug !== blog.slug && list.indexOf(other) === i,
  );

  return (
    <>
      <JsonLd data={articleGraph(blog)} />
      <article>
        <header className="blog-head">
          <Link className="blog-back" href="/#writing">
            <span aria-hidden>←</span> {writing.title.top} {writing.title.joiner} {writing.title.bottom}
          </Link>
          <p className="blog-meta text-label">
            <span className="text-signal">{blog.category}</span> ·{" "}
            <time dateTime={blog.date}>{formatDate(blog.date)}</time> · {readingTime(blog)} min read
          </p>
          <h1 className="blog-title">{blog.title}</h1>
          <p className="blog-byline">
            <em>By</em> {site.name}
          </p>
        </header>

        <figure className="blog-cover">
          <Image
            src={blog.cover}
            alt=""
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 1200px) 1100px, 92vw"
          />
        </figure>

        <div className="blog-body">
          {blog.body.map((paragraph, i) => (
            <p key={i} className={i === 0 ? "blog-lead" : isBeat(paragraph) ? "blog-beat" : undefined}>
              {paragraph}
            </p>
          ))}
        </div>

        <footer className="blog-author">
          <div className="blog-author__sign">
            <Signature id="blog-author-signature" />
          </div>
          <div className="blog-author__text">
            <p className="blog-author__name">{site.name}</p>
            <ul className="blog-author__roles">
              {hero.credentials.map((item) => (
                <li key={item.role}>
                  <span className="text-label text-signal">{item.role}</span> {item.title}
                </li>
              ))}
            </ul>
            <div className="blog-author__links">
              <a className="btn btn-solid btn-sm" href={book.amazon.href} target="_blank" rel="noreferrer">
                {hero.ctas.primary.label}
                <ArrowUpRight />
              </a>
              <Link className="btn btn-sm" href="/#podcast">
                {hero.ctas.secondary.label}
              </Link>
              <ConnectButton className="btn btn-sm">{connect.label}</ConnectButton>
            </div>
          </div>
        </footer>
      </article>

      <nav className="blog-more" aria-label="Keep reading">
        <div className="blog-more__head">
          <p className="text-label text-signal">Keep reading</p>
          <Link className="blog-more__all" href={writing.all.href}>
            {writing.all.label} <span aria-hidden>→</span>
          </Link>
        </div>
        <ul className="blog-more__grid">
          {more.map((other) => (
            <li key={other.slug}>
              <BlogCard blog={other} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
