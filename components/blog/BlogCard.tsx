import Image from "next/image";
import Link from "next/link";
import { blogHref, readingTime, type Blog } from "@/content/blogs";
import { formatDate } from "@/lib/format";

/** An article as a card: cover, category and date, title. Used on the articles index and under each article (app/blogs/blog.css). */
export function BlogCard({ blog, excerpt = false, eager = false }: { blog: Blog; excerpt?: boolean; eager?: boolean }) {
  return (
    <Link className="blog-card group" href={blogHref(blog.slug)}>
      <span className="blog-card__cover">
        <Image
          src={blog.cover}
          alt=""
          fill
          sizes="(min-width: 1024px) 40vw, 92vw"
          {...(eager && { loading: "eager", fetchPriority: "high" })}
        />
      </span>
      <span className="blog-card__meta text-label">
        <span className="text-signal">{blog.category}</span> · {formatDate(blog.date)} · {readingTime(blog)} min
      </span>
      <span className="blog-card__title">{blog.title}</span>
      {excerpt && <span className="blog-card__excerpt">{blog.excerpt}</span>}
    </Link>
  );
}
