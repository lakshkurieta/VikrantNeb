import type { Metadata } from "next";
import Link from "next/link";
import { blogs } from "@/content/blogs";
import { site, writing } from "@/content/site";
import { blogGraph } from "@/lib/schema";
import { JsonLd } from "@/components/seo/JsonLd";
import { BlogCard } from "@/components/blog/BlogCard";
import "./blog.css";

export const metadata: Metadata = {
  title: `${writing.title.top} ${writing.title.joiner} ${writing.title.bottom} — ${site.name}`,
  description: writing.intro,
  alternates: { canonical: "/blogs" },
};

/** All of Vikrant's articles, newest first. Server component. */
export default function BlogsPage() {
  const { title } = writing;
  return (
    <main className="blog blogs">
      <JsonLd data={blogGraph} />
      <header className="blogs-head">
        <Link className="blog-back" href="/#writing">
          <span aria-hidden>←</span> {site.name}
        </Link>
        <p className="text-label text-signal">{writing.eyebrow}</p>
        <h1 className="blogs-title">
          <span>{title.top}</span>
          <span>
            <em>{title.joiner}</em> {title.bottom}
          </span>
        </h1>
        <p className="blogs-intro">{writing.intro}</p>
      </header>
      <ol className="blogs-grid">
        {blogs.map((blog, i) => (
          <li key={blog.slug}>
            {/* The newest runs full width at the top: it's the page's largest image. */}
            <BlogCard blog={blog} excerpt eager={i === 0} />
          </li>
        ))}
      </ol>
    </main>
  );
}
