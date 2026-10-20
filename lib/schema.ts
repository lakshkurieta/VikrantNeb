import { blogHref, blogs, type Blog } from "@/content/blogs";
import { episodeHref, episodes, type Episode } from "@/content/episodes";
import { resourceHref, resources, resourcesIntro, type Resource } from "@/content/resources";
import { book, footer, podcast, site, testimonials, writing } from "@/content/site";

/**
 * Structured data (schema.org JSON-LD) for search engines and AI answer engines: who Vikrant is,
 * his companies, the book, the show, and what each page is. Rendered by <JsonLd> (components/seo).
 * Entities keep stable @ids, so every page points at the same Vikrant Neb.
 */
const url = (path: string) => new URL(path, site.url).href;
const show = `${podcast.title.top} ${podcast.title.joiner} ${podcast.title.bottom}`;
const id = { person: url("/#person"), website: url("/#website"), book: url("/#book"), podcast: url("/#podcast") };

/** Him, by reference: enough for any page to name its author. */
const author = { "@type": "Person", "@id": id.person, name: site.name, url: site.url };

const companies = site.companies.map((company) => ({
  "@type": "Organization",
  "@id": url(`/#${company.name.toLowerCase()}`),
  ...company,
  founder: author,
}));

const breadcrumbs = (...trail: [name: string, path: string][]) => ({
  "@type": "BreadcrumbList",
  itemListElement: trail.map(([name, path], i) => ({ "@type": "ListItem", position: i + 1, name, item: url(path) })),
});

const graph = (...nodes: object[]) => ({ "@context": "https://schema.org", "@graph": nodes });

const person = {
  "@type": "Person",
  "@id": id.person,
  name: site.name,
  url: site.url,
  image: url("/images/portrait/vikrant-neb.webp"),
  description: site.description,
  jobTitle: site.jobTitle,
  worksFor: companies.map((company) => ({ "@id": company["@id"] })),
  alumniOf: { "@type": "CollegeOrUniversity", name: site.alumniOf },
  knowsAbout: site.knowsAbout,
  sameAs: footer.socials.map((social) => social.href),
};

const bookNode = {
  "@type": "Book",
  "@id": id.book,
  name: book.title,
  alternativeHeadline: book.subtitle,
  author: { "@id": id.person },
  isbn: book.isbn,
  image: url(book.poster),
  url: url("/book"),
  sameAs: book.amazon.href,
  inLanguage: "en",
};

const series = {
  "@type": "PodcastSeries",
  "@id": id.podcast,
  name: show,
  description: podcast.description,
  url: url("/podcast"),
  sameAs: podcast.youtube,
  author: { "@id": id.person },
};

/** The home page: the site, the person, his companies, the book and the show. */
export const homeGraph = graph(
  {
    "@type": "WebSite",
    "@id": id.website,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": id.person },
  },
  person,
  ...companies,
  bookNode,
  series,
);

/** The About page: a profile of him. */
export const aboutGraph = graph(
  { "@type": "ProfilePage", url: url("/about"), mainEntity: { "@id": id.person } },
  person,
  ...companies,
  breadcrumbs([site.name, "/"], ["About", "/about"]),
);

/** The book's page, with what its readers said. */
export const bookGraph = graph(
  {
    ...bookNode,
    description: book.back.paragraphs[0],
    review: testimonials.readers.map((reader) => ({
      "@type": "Review",
      author: { "@type": "Person", name: reader.name },
      reviewBody: reader.quote,
    })),
  },
  breadcrumbs([site.name, "/"], [book.title, "/book"]),
);

/** The show's page, listing every episode. */
export const podcastGraph = graph(
  {
    ...series,
    episode: episodes.map((episode) => ({
      "@type": "PodcastEpisode",
      name: episode.title,
      episodeNumber: episode.number,
      datePublished: episode.date,
      url: url(episodeHref(episode.slug)),
    })),
  },
  breadcrumbs([site.name, "/"], [show, "/podcast"]),
);

/** The library page. */
export const resourcesGraph = graph(
  {
    "@type": "CollectionPage",
    name: resourcesIntro.eyebrow,
    description: resourcesIntro.intro,
    url: url("/resources"),
    hasPart: resources.map((resource) => ({
      "@type": "Report",
      headline: resource.title,
      url: url(resourceHref(resource.slug)),
    })),
  },
  breadcrumbs([site.name, "/"], [resourcesIntro.eyebrow, "/resources"]),
);

/** The articles index. */
export const blogGraph = graph({
  "@type": "Blog",
  name: `${writing.title.top} ${writing.title.joiner} ${writing.title.bottom}`,
  description: writing.intro,
  url: url("/blogs"),
  author,
  blogPost: blogs.map((blog) => ({
    "@type": "BlogPosting",
    headline: blog.title,
    url: url(blogHref(blog.slug)),
    datePublished: blog.date,
  })),
});

export const articleGraph = (blog: Blog) =>
  graph(
    {
      "@type": "BlogPosting",
      headline: blog.title,
      description: blog.excerpt,
      articleSection: blog.category,
      datePublished: blog.date,
      image: url(blog.cover),
      url: url(blogHref(blog.slug)),
      mainEntityOfPage: url(blogHref(blog.slug)),
      author,
      publisher: author,
      inLanguage: "en",
    },
    breadcrumbs([site.name, "/"], ["Writing", "/blogs"], [blog.title, blogHref(blog.slug)]),
  );

export const episodeGraph = (episode: Episode) =>
  graph(
    {
      "@type": "PodcastEpisode",
      name: episode.title,
      episodeNumber: episode.number,
      datePublished: episode.date,
      description: episode.about[0],
      url: url(episodeHref(episode.slug)),
      image: url(episode.cover),
      partOfSeries: { "@type": "PodcastSeries", "@id": id.podcast, name: show, url: url("/podcast") },
      author,
      actor: { "@type": "Person", name: episode.guest, jobTitle: episode.role },
      video: {
        "@type": "VideoObject",
        name: episode.title,
        description: episode.about[0],
        thumbnailUrl: url(episode.cover),
        uploadDate: episode.date,
        duration: `PT${parseInt(episode.duration)}M`,
        embedUrl: `https://www.youtube.com/embed/${episode.youtube}`,
        url: `https://www.youtube.com/watch?v=${episode.youtube}`,
      },
    },
    breadcrumbs([site.name, "/"], [show, "/podcast"], [episode.title, episodeHref(episode.slug)]),
  );

export const paperGraph = (resource: Resource) =>
  graph(
    {
      "@type": "Report",
      headline: resource.title,
      alternativeHeadline: resource.kicker,
      description: resource.summary,
      url: url(resourceHref(resource.slug)),
      image: url(resource.cover),
      author,
      publisher: author,
      isAccessibleForFree: true,
      inLanguage: "en",
      encoding: { "@type": "MediaObject", contentUrl: url(resource.file), encodingFormat: "application/pdf" },
    },
    breadcrumbs(
      [site.name, "/"],
      [resourcesIntro.eyebrow, "/resources"],
      [resource.title, resourceHref(resource.slug)],
    ),
  );
