/**
 * Vikrant's free resources, hosted on this site: the home page's Resources section and a page each
 * at /resources/[slug] as a reading page with a download (app/resources). Titles, descriptions and
 * "What you'll learn" are from the current vikrantneb.com /resources pages; quotes are from the
 * papers themselves, whose full text is in content/papers.ts. The PDFs and their covers are in public/assets/resources.
 *
 * The two papers are a series: the fulfillment roadmap came first, the pricing paper builds on it.
 */
export type Resource = {
  slug: string;
  title: string;
  /** The paper's own subtitle, from its cover. */
  kicker: string;
  /** For cards: what the paper is about, in a sentence or two. */
  summary: string;
  /** For its own page: a fuller "About this paper". */
  about: string;
  quote: string;
  learn?: readonly string[];
  pages: number;
  file: string;
  cover: string;
};

export const resourcesIntro = {
  eyebrow: "Resources",
  title: { top: "Tools for", bottom: "operators,", accent: "not observers." },
  intro:
    "Everything here comes from real warehouse floors: white papers, frameworks, templates and field notes built for 3PL owners and operations leaders navigating the messy middle of growth.",
  promise: "Free to read. Built to use.",
  all: { label: "All resources", href: "/resources" },
  more: {
    title: "Looking for something that isn’t here?",
    body: "Tell us what would help.",
    cta: { label: "Get in touch", href: "https://linkedin.com/in/vikrant-neb" },
  },
} as const;

export const resources: readonly Resource[] = [
  {
    slug: "the-hidden-cost-of-getting-pricing-wrong",
    title: "The Hidden Cost of Getting Pricing Wrong",
    kicker: "A 3PL’s Guide to Margin That Disappears Before You Notice",
    summary:
      "How unnoticed scope creep, changing customer behavior and operational complexity quietly eat away at your margins, even when business appears healthy.",
    about:
      "Every missed scan, manual process, and unbilled service chips away at your profits. Learn where margins are lost and how leading 3PLs protect them.",
    quote:
      "You can be busy and unprofitable at the same time. That is the part most operators do not believe until it happens to them.",
    pages: 13,
    file: "/assets/resources/the-hidden-cost-of-getting-pricing-wrong.pdf",
    cover: "/assets/resources/pricing-cover.webp",
  },
  {
    slug: "the-execution-gap",
    title: "The Execution Gap: Why 3PLs Between $5M–$75M Stop Growing",
    kicker: "A 3PL’s Journey Into Fulfillment",
    summary:
      "A deep look at the inflection points where complexity outpaces clarity, drawn from hundreds of operator conversations, consulting engagements and the research behind Execution Under Pressure.",
    about:
      "A practical roadmap for B2B 3PLs moving into fulfillment, walking the journey from 50 orders a day to 10,000, stage by stage. At each stage: what tends to break, what the operation should look like, and what the technology has to do. Written for the operator who wants a map before taking the next step.",
    quote:
      "Fulfillment is a great move for a B2B 3PL, and it is also a different sport. Your buildings are an advantage. Your processes are mostly not.",
    learn: [
      "The five volume stages, and the process, physical and technology moves specific to each one",
      "Real collapse-and-recovery stories from operations Vikrant has worked with",
      "The technology stack matrix: what’s optional at Stage 1 and mandatory by Stage 4",
      "Billing, labor, returns and WMS switching: the disciplines that decide margin",
      "A stage-by-stage readiness checklist to self-assess before the next move",
    ],
    pages: 35,
    file: "/assets/resources/the-execution-gap.pdf",
    cover: "/assets/resources/execution-gap-cover.webp",
  },
];

export const resourceHref = (slug: string) => `/resources/${slug}`;

export const findResource = (slug: string) => resources.find((resource) => resource.slug === slug);
