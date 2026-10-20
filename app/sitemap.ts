import type { MetadataRoute } from "next";
import { blogHref, blogs } from "@/content/blogs";
import { episodeHref, episodes } from "@/content/episodes";
import { resourceHref, resources } from "@/content/resources";
import { site } from "@/content/site";

const url = (path: string) => new URL(path, site.url).href;

/** Every page, for search engines (/sitemap.xml). Dated pages carry their date. */
export default function sitemap(): MetadataRoute.Sitemap {
  const latest = [...blogs, ...episodes]
    .map(({ date }) => date)
    .sort()
    .at(-1);
  return [
    { url: url("/"), lastModified: latest },
    { url: url("/about") },
    { url: url("/book") },
    { url: url("/podcast"), lastModified: episodes[0].date },
    { url: url("/blogs"), lastModified: blogs[0].date },
    { url: url("/resources") },
    ...blogs.map((blog) => ({ url: url(blogHref(blog.slug)), lastModified: blog.date })),
    ...episodes.map((episode) => ({ url: url(episodeHref(episode.slug)), lastModified: episode.date })),
    ...resources.map((resource) => ({ url: url(resourceHref(resource.slug)) })),
  ];
}
