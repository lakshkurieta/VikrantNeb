/**
 * Single source of truth for copy and links.
 * Components only lay this out; edit words here, not in JSX.
 */

export const site = {
  name: "Vikrant Neb",
  handle: "@executewithvik",
  url: "https://www.vikrantneb.com",
  /** The home page's <title>: his name, then what people search him for. */
  title: "Vikrant Neb — Execution Under Pressure · 3PLs & Warehousing at Scale",
  description:
    "Vikrant Neb is an operations excellence practitioner working with 3PLs and supply chain operators through the messy middle of growth. Founder & CEO of Leanafy and Kurieta, author of Execution Under Pressure, host of Execution at Scale.",
  /** Who he is, in the terms search engines and AI answers use (lib/schema.ts, app/llms.txt). */
  jobTitle: "Founder & CEO, Leanafy and Kurieta",
  education: "Industrial Engineering, Purdue University",
  alumniOf: "Purdue University",
  knowsAbout: [
    "3PL operations",
    "Warehousing",
    "Warehouse management systems (WMS)",
    "Supply chain execution",
    "Operations excellence",
    "Scaling logistics businesses",
  ],
  /** His companies, described as they describe themselves on their own sites. */
  companies: [
    {
      name: "Leanafy",
      url: "https://leanafy.com",
      description: "Warehouse and inventory management software (WMS and IMS) for 3PLs and modern warehouses.",
    },
    {
      name: "Kurieta",
      url: "https://kurieta.com",
      description:
        "Indianapolis digital marketing and technology company: website design and development, branding and custom software.",
    },
  ],
} as const;

/** Each item has its own page, and a section on the home page (marked in the menu while you're in it). */
export const nav = [
  { label: "About", href: "/about", section: "#top" },
  { label: "Book", href: "/book", section: "#book" },
  { label: "Podcast", href: "/podcast", section: "#podcast" },
  { label: "Blog", href: "/blogs", section: "#writing" },
  { label: "Resources", href: "/resources", section: "#resources" },
] as const;

export const connect = { label: "Connect", href: "https://linkedin.com/in/vikrant-neb" } as const;

export const hero = {
  /**
   * Set like every section title: EXECUTION / is the JOB., the joiner in the serif italic accent.
   * Each line is its own masked line in the intro, so the break is art-directed.
   */
  headline: { top: "Execution", joiner: "is the", bottom: "job." },
  counterline: { lead: "Everything else is", accent: "theory." },
  /** Right-hand column: the line that sounds like him (set like the podcast's "Real operators. Real
   *  answers."), then what he does, plainly. */
  intro: {
    tagline: { lead: "Industrial engineer by training.", accent: "Floor operator by instinct." },
    lead: "An operations excellence practitioner who works with 3PLs and supply chain operators navigating the messy middle of growth.",
  },
  ctas: {
    primary: { label: "Read the book", href: "https://www.amazon.com/dp/B0GTHJPYD8" },
    secondary: { label: "Listen to the podcast", href: "#podcast" },
  },
  credentials: [
    { role: "Founder & CEO", title: "Leanafy & Kurieta" },
    { role: "Author", title: "Execution Under Pressure" },
    { role: "Host", title: "Execution at Scale" },
  ],
} as const;

/** Post-hero book showcase; the printed cover (front, spine, back) on the authored hinged hardcover. */
export const book = {
  eyebrow: "The book / Execution at scale",
  /** Header lockup: the name large, then "Author of <title>" with the lead in serif italic. */
  name: "Vikrant Neb",
  byline: "Author of",
  /** Printed on the book's first page, revealed when the cover opens (lib/webgl/FirstPage.ts). */
  firstPage: {
    quote: "“This story didn’t start in a boardroom. It started where most operators start.”",
    stat: { highlight: "150 Copies", rest: "Gone in 1.5 Days!" },
  },
  amazon: {
    heading: "Exclusively available on",
    href: "https://www.amazon.com/dp/B0GTHJPYD8",
    label: "Buy Execution Under Pressure on Amazon",
  },
  title: "Execution Under Pressure",
  subtitle: "The Hidden Reasons Why 3PLs Stop Growing and How to Fix Them",
  /** From the cover's barcode. */
  isbn: "9798995393504",
  model: "/assets/book/execution-under-pressure.glb",
  poster: "/assets/book/execution-under-pressure-cover.webp",
  imageAlt:
    "Execution Under Pressure by Vikrant Neb: a hardcover book with a warehouse cover, rotating and opening as you scroll",
  /** The book's page (app/book). */
  page: {
    eyebrow: "The book",
    title: { top: "Execution", joiner: "under", bottom: "Pressure." },
    more: "Inside the book",
  },
  /** The back cover, word for word. */
  back: {
    headline: {
      lead: "Your operation isn’t failing because your team isn’t trying hard enough. It’s failing because",
      accent: "trying harder",
      rest: "is the only plan you have.",
    },
    paragraphs: [
      "Most 3PLs don’t stop growing because of bad luck or bad people. They stop growing because the habits that built them; heroic effort, personal involvement, and fast improvisation quietly become the ceiling that traps them.",
      "After years of walking in the warehouses across North America, industrial engineer and operations consultant Vikrant Neb has seen the same patterns repeat, regardless of city, size, or industry. He calls them the hidden reasons because they don’t show up on a P&L, and they don’t announce themselves until you’re already buried in them.",
    ],
    reasons: [
      { title: "The Heroics Trap:", text: "when effort masks the structural problems underneath" },
      { title: "Urgency as a Culture:", text: "how motion gets mistaken for progress" },
      { title: "The Leader as the Bottleneck:", text: "when the founder becomes the ceiling" },
      { title: "Technology layered", text: "over broken processes, making everything worse at scale" },
      { title: "The Myth of Later:", text: "why the cost of deferral is always higher than it looks" },
    ],
    closing:
      "This is not a framework book. There are no acronyms, no five-step systems. What is here is observation earned through real operations, real failures, and the kind of pattern recognition that only comes from being in the building long enough to see what leadership rarely gets to see.",
    quote:
      "The version of your operation that doesn’t run on heroics is buildable. It starts with being able to see what’s actually happening.",
    author: [
      "Industrial Engineer (Purdue University) | Operations Consultant",
      "Founder of Kurieta and Leanafy | Over a decade of working hands-on with 3PL operators across the globe.",
    ],
  },
} as const;

/** The About page (app/about): his own words from the current site's About page, then the facts. */
export const about = {
  eyebrow: "About Vikrant",
  title: { top: "Operator", joiner: "by", bottom: "instinct." },
  /** His photograph, not the 3D bust render the podcast stage uses. */
  portrait: {
    src: "/images/portrait/vikrant-neb.webp",
    alt: "Vikrant Neb",
  },
  statement:
    "Two decades of walking warehouse floors. Two companies built from what was found there. One book about what nobody wanted to admit.",
  story: [
    "The degree came from Purdue. Industrial Engineering. Frameworks, optimization models, lean theory. All of it.",
    "The education came later. On a Tuesday morning, in a warehouse that was already three hours behind by 9 AM.",
    "Two no-shows. A jammed conveyor. A client on the phone who wanted answers, not explanations. And a textbook in the car that suddenly had nothing useful to say.",
    "That morning isn’t unique. Every operator has a version of it. The detail that’s worth pausing on is what happens after, when the fires are out, the orders shipped, the day ended on a win that felt more like survival. Most people go home.",
    "The interesting work begins by asking why the day went sideways in the first place. Then asking it again the next week. And the week after that. Until the patterns start naming themselves.",
  ],
  /** From the author page of his white papers. */
  bio: [
    "Vikrant Neb is an industrial engineer who has spent his career around operations. He has run e-commerce companies, led manufacturing operations through Kurieta during his consulting years, and worked with 3PLs across the full range of volumes and transitions.",
    "He is the founder of Leanafy, a warehouse management system built specifically for 3PL operators, and Kurieta Operations Consulting. His book, Execution Under Pressure: The Hidden Reasons Why 3PLs Stop Growing and How to Fix Them, came out in 2026. He hosts the Execution at Scale podcast and splits his time between Indianapolis and Vancouver.",
  ],
  facts: [
    { label: "Based in", value: "Indianapolis & Vancouver" },
    { label: "Trained as", value: "Industrial engineer, Purdue University" },
    { label: "Founder & CEO", value: "Leanafy & Kurieta" },
    { label: "Author", value: "Execution Under Pressure (2026)" },
    { label: "Host", value: "Execution at Scale" },
    { label: "On the floor", value: "Over a decade hands-on with 3PL operators" },
  ],
  companiesTitle: "Two companies, built from the floor",
  /** His article on why he started each company. */
  stories: { Leanafy: "why-i-started-leanafy", Kurieta: "why-i-started-kurieta" },
  work: {
    title: "Work with Vikrant",
    body: "Whether you’re running a 3PL, scaling an operation, or just want to push back on something in the book, Vikrant reads every message. For speaking, advisory or media, this is the place.",
  },
  more: "More about Vikrant",
} as const;

/**
 * "Execution at Scale", the section the book's dive opens onto. The episodes themselves are in
 * content/episodes.ts.
 */
export const podcast = {
  eyebrow: "The podcast",
  /** Set on two lines, "at" in the serif italic accent: EXECUTION / at SCALE. */
  title: { top: "Execution", joiner: "at", bottom: "Scale" },
  host: { lead: "Hosted by", name: "Vikrant Neb" },
  tagline: { lead: "Real operators.", accent: "Real answers." },
  description:
    "No-nonsense conversations with 3PL and supply chain leaders across the US on how execution, decision-making and operational systems evolve as logistics businesses scale. Experience over theory, every episode.",
  all: { label: "All episodes", href: "/podcast" },
  youtube: "https://www.youtube.com/@ExecuteWithVik",
  /** The show's page (app/podcast). */
  page: { latest: "Latest episode", every: "Every episode", watch: "Watch on YouTube" },
  /** The 3D bust on the stage (`npm run bust` builds the model; the poster stands in until it loads). */
  bust: {
    model: "/assets/podcast/vikrant-neb-bust.glb",
    poster: "/assets/podcast/vikrant-neb-bust.webp",
    alt: "Vikrant Neb in 3D, arms crossed, in a black jacket and glasses",
  },
  signup: {
    title: "Don’t miss the next conversation.",
    body: "Sign up for the upcoming episode of Execution at Scale.",
    cta: { label: "Get in touch", href: "https://linkedin.com/in/vikrant-neb" },
  },
} as const;

/**
 * Writing: the page the studio pans to after the podcast. The articles themselves live in
 * content/blogs.ts and are published on this site at /blogs. "Notes from the floor" is his own
 * phrase for this writing ("Why I Wrote Execution Under Pressure").
 */
export const writing = {
  eyebrow: "Writing",
  /** Set like the podcast title: NOTES / from the FLOOR. */
  title: { top: "Notes", joiner: "from the", bottom: "Floor" },
  intro:
    "What I keep seeing inside 3PLs and warehouse operations, written down as it happens. Observations, not prescriptions.",
  all: { label: "All blogs", href: "/blogs" },
  showAll: "Show all blogs",
  /** Behind the bust once he has crossed to this page, in place of the podcast's YouTube mark. */
  ghost: "Blogs",
  readLabel: "Read the note",
} as const;

/**
 * Readers on the book, from the live site's "Kind Words From Our Readers". Quotes are as published
 * (outer quotation marks dropped: the card sets its own). `mark` is the line the highlighter sweeps
 * over as each card lands; it must appear in `quote` exactly.
 */
export const testimonials = {
  eyebrow: "Readers on the book",
  title: { top: "Kind words", joiner: "from our", bottom: "Readers" },
  intro: "Operators, owners and leaders on what Execution Under Pressure changed for them.",
  cta: { label: "Read the book", href: "https://www.amazon.com/dp/B0GTHJPYD8" },
  readers: [
    {
      name: "Aaron Hatfield",
      role: "Sales Director, Avrist",
      photo: "/assets/readers/aaron-hatfield.webp",
      quote:
        "Rounded out April by finishing Execution Under Pressure by Vikrant Neb. Really enjoyed Vikrant and the way he approached his book. Wrote very well, more like a conversation and very objective. Would definitely recommend!",
      mark: "more like a conversation and very objective",
    },
    {
      name: "Mark Hiddleson",
      role: "Author of Too of Pizza",
      photo: "/assets/readers/mark-hiddleson.webp",
      quote:
        "Just finished it. Vikrant nailed it. The observations cut deeper than any prescription would have. ‘Improvement deferral is not a character flaw. It’s a cognitive bias.’ That one stayed with me. Vikrant isn’t writing from theory. He’s writing from inside the operation.",
      mark: "He’s writing from inside the operation.",
    },
    {
      name: "Stephen Siegel",
      role: "President & COO, Freeway Logistics",
      photo: "/assets/readers/stephen-siegel.webp",
      quote:
        "I wasn’t expecting it to be so impactful. When somebody can truly identify with you, that’s when a book becomes something special. And that’s exactly what happened with me the book was excellent. When you read a story and you say, ‘Holy smokes, I’m going through that exact same thing,’ and then turn the page and think, ‘Oh my God, I’m going through this too that’s when you know the author has lived it, not just written about it",
      mark: "the author has lived it, not just written about it",
    },
    {
      name: "Joseph Gilbert",
      role: "Gilbert International",
      photo: "/assets/readers/joseph-gilbert.webp",
      quote:
        "Just wow. As an industry leader in the 3PL space, this book opened my eyes. Execution Under Pressure doesn’t feel like a textbook. The operational insights are incredibly relevant, but what stood out most was the leadership perspective. It was a real eye-opener for me. One of the best books I’ve read in a long time.",
      mark: "One of the best books I’ve read in a long time.",
    },
    {
      name: "Kelly",
      role: "Warehouse Owner, California",
      photo: "/assets/readers/kelly.webp",
      quote:
        "So far, I’ve read only three chapters of the book over a glass of wine, and I can already tell how engaging it is. It tells a simple yet powerful story that applies across different industries, not just 3PLs. In fact, I found myself reflecting on situations where I had fallen into some of the exact traps described, including one I’m currently dealing with. I truly believe I can resolve it now, having read this book.",
      mark: "I truly believe I can resolve it now",
    },
    {
      name: "Scott Willis",
      role: "Director of Business Service, Indiana Secretary of State",
      photo: "/assets/readers/scott-willis.webp",
      quote:
        "If anyone is stuck in the day-to-day chaos of running operations, this book will open your eyes. Loved reading it.",
      mark: "this book will open your eyes",
    },
  ],
} as const;

/** Footer, on every page (components/layout/Footer.tsx). No Instagram here, by request. */
export const footer = {
  connect: { label: "Connect with Vikrant", href: "https://linkedin.com/in/vikrant-neb" },
  book: { buy: "Buy on" },
  socials: [
    { label: "YouTube", href: "https://www.youtube.com/@ExecuteWithVik", icon: "youtube" },
    { label: "LinkedIn", href: "https://linkedin.com/in/vikrant-neb", icon: "linkedin" },
  ],
  copyright: "© 2026 Vikrant Neb. All rights reserved.",
  tagline: "Built for operators, not observers.",
} as const;

/** The query form behind every "Connect" and "Get in touch" button (components/connect). */
export const contact = {
  email: "me@vikrantneb.com",
  eyebrow: "Connect",
  title: { top: "Let’s", joiner: "talk", bottom: "execution." },
  intro:
    "Whether you’re running a 3PL, scaling an operation, or just want to push back on something in the book, Vikrant reads every message. For speaking, advisory or media, this is the place.",
  topics: ["Advisory", "Speaking", "Media", "Podcast", "Something else"],
  send: "Send message",
  sent: {
    title: "Your email is ready to send.",
    body: "Your email app has opened with your message to Vikrant. If it didn’t, write to",
  },
} as const;
