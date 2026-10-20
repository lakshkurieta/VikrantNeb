import type { MetadataRoute } from "next";
import { site } from "@/content/site";

/** Open to every crawler, search engines and AI assistants alike, and pointed at the sitemap (/robots.txt). */
export default function robots(): MetadataRoute.Robots {
  return { rules: { userAgent: "*", allow: "/" }, sitemap: new URL("/sitemap.xml", site.url).href };
}
