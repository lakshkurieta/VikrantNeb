/**
 * Vikrant's free resources, hosted on this site: the home page's Resources section and a page each
 * at /resources/[slug] as a reading page with a download (app/resources). Titles, descriptions and
 * "What you'll learn" are from the current vikrantneb.com /resources pages; quotes are from the
 * papers themselves, whose full text is in content/papers.ts. The PDFs and their covers are in public/assets/resources.
 *
 * Newest first. The papers are a series: the fulfillment roadmap came first, the pricing paper builds on it,
 * and two web papers go underneath the pricing one: what goes on the invoice, then the minutes behind it.
 * The web papers' cards and "about" are from their own pages (their hero and "The Short Version").
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
  /** The papers the home page shows (the first two); /resources shows every one. */
  home: ["the-hidden-cost-of-getting-pricing-wrong", "the-execution-gap"],
  more: {
    title: "Looking for something that isn’t here?",
    body: "Tell us what would help.",
    cta: { label: "Get in touch", href: "https://linkedin.com/in/vikrant-neb" },
  },
} as const;

export const resources: readonly Resource[] = [
  {
    slug: "every-minute-on-the-floor",
    title: "Every Minute on the Floor",
    kicker: "What Each Client Actually Costs to Serve",
    summary:
      "How to record who did what, and when, in a building where people move between clients all day. How to set the standard behind every handling rate. And how to check the floor against the quote, client by client, before the renewal does it for you.",
    about:
      "A quote is a hypothesis. It assumes how long each activity takes, what each client’s orders look like, and how much volume will come. The floor tests that hypothesis every day, but in a multi-client building nobody reads the result, because labor is recorded for the building and not for the client. Record who did what, when and for whom. Assign the time between tasks by a rule. Compare each client’s minutes with the minutes you priced. The gap tells you whether the problem is volume, mix, productivity or work you never billed, and each one has a different fix.",
    quote:
      "Every rate on a rate card is a guess about minutes. The floor keeps the real count. Most operators never put the two side by side.",
    pages: 32,
    file: "/assets/resources/every-minute-on-the-floor.pdf",
    cover: "/assets/resources/floor-cover.webp",
  },
  {
    slug: "every-line-on-the-invoice",
    title: "Every Line on the Invoice",
    kicker: "What 3PLs Charge For, and Why Each Charge Exists",
    summary:
      "The charges you will find across B2B warehousing, cross-dock and e-commerce fulfillment, the different ways operators package them, and whether the cost behind your rates is one you can actually prove.",
    about:
      "Every charge on a 3PL invoice exists to recover one of five things: space, touches, systems, materials, or exceptions. Pricing models differ in how they package those five, not in whether they recover them. A model that looks cheaper has usually moved a cost into a line you are not looking at. A rate is only as good as the cost behind it, and that cost has to be recorded, attributed and earned by an efficient operation. And the best rate card in the world only earns what the operation actually records.",
    quote:
      "A rate card is a list of prices. An invoice is a list of events. The margin lives in the gap between the two.",
    pages: 40,
    file: "/assets/resources/every-line-on-the-invoice.pdf",
    cover: "/assets/resources/invoice-cover.webp",
  },
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
