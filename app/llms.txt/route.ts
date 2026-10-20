import { blogHref, blogs } from "@/content/blogs";
import { episodeHref, episodes } from "@/content/episodes";
import { resourceHref, resources } from "@/content/resources";
import { about, book, contact, footer, podcast, site } from "@/content/site";

const url = (path: string) => new URL(path, site.url).href;
const show = `${podcast.title.top} ${podcast.title.joiner} ${podcast.title.bottom}`;

/**
 * /llms.txt (llmstxt.org): the site in plain Markdown for AI assistants. Who Vikrant is, then a line
 * on every page, built from the same content as the pages so it never drifts. Prerendered.
 */
const text = [
  `# ${site.name}`,
  `> ${site.description}`,
  [
    `- Role: ${site.jobTitle}`,
    `- Education: ${site.education}`,
    ...site.companies.map((company) => `- ${company.name} (${company.url}): ${company.description}`),
    `- Book: ${book.title}: ${book.subtitle} (ISBN ${book.isbn}). ${book.amazon.href}`,
    `- Podcast: ${show}. ${podcast.description} ${podcast.youtube}`,
    `- Expertise: ${site.knowsAbout.join(", ")}`,
  ].join("\n"),
  "## Pages",
  [
    `- [About ${site.name}](${url("/about")}): ${about.statement}`,
    `- [${book.title}](${url("/book")}): ${book.subtitle}. ${book.back.paragraphs[0]}`,
    `- [${show}](${url("/podcast")}): every episode, with transcripts.`,
    `- [Writing](${url("/blogs")}): his articles.`,
    `- [Resources](${url("/resources")}): his white papers, in full.`,
  ].join("\n"),
  `## ${show} episodes`,
  episodes
    .map(
      (e) => `- [Ep. ${e.number}: ${e.title}](${url(episodeHref(e.slug))}): with ${e.guest}, ${e.role}. ${e.about[0]}`,
    )
    .join("\n"),
  "## Writing",
  blogs.map((blog) => `- [${blog.title}](${url(blogHref(blog.slug))}): ${blog.excerpt}`).join("\n"),
  "## White papers",
  resources.map((paper) => `- [${paper.title}](${url(resourceHref(paper.slug))}): ${paper.summary}`).join("\n"),
  "## Contact",
  [`- Email: ${contact.email}`, ...footer.socials.map((social) => `- ${social.label}: ${social.href}`)].join("\n"),
].join("\n\n");

export function GET() {
  return new Response(`${text}\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
