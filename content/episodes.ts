/**
 * Every episode of Execution at Scale, newest first. Episodes 1–7 are from the current
 * vikrantneb.com episode pages; 8–10 from their YouTube pages. Covers are the YouTube thumbnails
 * (public/assets/podcast). Transcripts are separate (transcripts.ts), so this list stays small
 * enough for the player on the home page.
 */
export type Episode = {
  number: number;
  slug: string;
  title: string;
  guest: string;
  role: string;
  bio: string;
  duration: string;
  /** ISO date. */
  date: string;
  about: readonly string[];
  learn: readonly string[];
  youtube: string;
  cover: string;
};

export const episodes: readonly Episode[] = [
  {
    number: 10,
    slug: "from-garage-to-800-retail-stores",
    title: "From Garage to 800+ Retail Stores: Scaling Villager Puzzles",
    guest: "Kelly Striemer",
    role: "Founder, Villager Puzzles",
    bio: "Kelly Striemer is the Founder of Villager Puzzles, a Canadian puzzle brand launched in 2023. Inspired by her search for thoughtfully designed jigsaw puzzles, Kelly built a business that celebrates artwork by Canadian women artists, who earn uncapped royalties on every puzzle sold. In just over two years, Villager Puzzles has sold more than 200,000 puzzles and expanded into over 800 retail locations across Canada. Kelly's journey includes building an engaged customer community, scaling wholesale and direct-to-consumer sales, and transitioning from hands-on garage fulfillment to a 3PL partnership. She has also appeared on Dragons' Den.",
    duration: "29 min",
    date: "2026-10-12",
    about: [
      "What happens when a passion project sells out in two months, and suddenly becomes a business you can no longer run from your garage?",
      "In Episode 10 of Execution at Scale, host Vikrant Neb sits down with Kelly Striemer, Founder of Villager Puzzles, to explore the realities of scaling a product-based business.",
      "This episode is a practical look at what scaling really takes — from getting your first customers to building the operational foundation for the next stage of growth.",
    ],
    learn: [
      "From idea to business: Turning a personal need into a growing consumer brand.",
      "Building a community: How early customer feedback helped shape Villager Puzzles.",
      "Knowing when to outsource: The moment Kelly realized garage fulfillment was no longer sustainable.",
      "Choosing the right 3PL: Comparing fulfillment fees, storage, shipping rates, and long-term scalability.",
      "Wholesale vs. e-commerce: Managing different customer expectations and fulfillment priorities.",
      "Demand planning and inventory: Navigating seasonality, long manufacturing lead times, and unexpected sellouts.",
      "Hiring vs. improving processes: Deciding when to bring in people and when to bring in expertise.",
      "Advice for new founders: Why asking your community for feedback can be one of your biggest advantages.",
    ],
    youtube: "MIAIyNkFSoE",
    cover: "/assets/podcast/ep-10.webp",
  },
  {
    number: 9,
    slug: "50-years-of-supply-chain-one-honest-reflection",
    title: "50 Years of Supply Chain. One Honest Reflection.",
    guest: "Dr. Jim Tompkins",
    role: "Founder, Tompkins Ventures",
    bio: "Dr. Jim Tompkins is an international authority in supply chain and end-to-end supply chain solutions. Over 50 years, he has founded 15 businesses generating over $2 billion in combined revenue, authored 31 books, written more than 2,000 articles, and delivered more than 2,000 speaking engagements worldwide. His latest venture, Tompkins Ventures, was founded in 2020. He holds a bachelor's, master's, and PhD in Industrial Engineering from Purdue University, the same institution where Vikrant studied, and has been honored with the Gilbreth Award, one of the most prestigious recognitions in industrial engineering.",
    duration: "26 min",
    date: "2026-10-02",
    about: [
      "Most industry conversations are about what's coming next.",
      "This one is about what 50 years of actually doing it taught one of the sharpest minds in supply chain.",
      "In Episode 9 of Execution at Scale, Part 2 of a three-part series, Vikrant Neb sits down with Dr Jim Tompkins, founder of 16 businesses, author of over 30 books, and one of the most respected voices in global supply chain and logistics.",
      "This episode is different. Vikrant asks the questions most people are too polite to ask. Jim answers with the kind of honesty that only comes from 50 years of being early, being wrong, being right, and building through it all.",
    ],
    learn: [
      'The through line across 16 businesses, why Jim never builds a "me too" company and what he looks for before starting anything new',
      "Why being early means getting rocks thrown at you, and why that's actually the signal you're onto something",
      "Supply chain as a strategic discipline, not an operational function, and why that distinction changes everything",
      "The decision early in his career that shaped everything that came after",
      "Why AI doesn't change the physics of supply chain, it just puts it on steroids",
      "The one word most operators leave out of supply chain, and why it's the most important one",
      "What Jim would do differently if he were starting Tompkins International today instead of 1975",
      "Why leadership is no longer about being the smartest person in the room — and what it actually is",
      "The wolf pack theory Vikrant shares that stops Jim mid-sentence",
      "What Tompkins Logistics is, and why Jim believes this chapter might be the most important one yet",
    ],
    youtube: "-W9bJr0k-cg",
    cover: "/assets/podcast/ep-09.webp",
  },
  {
    number: 8,
    slug: "15-companies-2b-in-revenue-the-leadership-behind-scale",
    title: "15 Companies. $2B in Revenue. The Leadership Behind Scale.",
    guest: "Dr. Jim Tompkins",
    role: "Founder, Tompkins Ventures",
    bio: "Dr. Jim Tompkins is an international authority in supply chain and end-to-end supply chain solutions. Over 50 years, he has founded 15 businesses generating over $2 billion in combined revenue, authored 31 books, written more than 2,000 articles, and delivered more than 2,000 speaking engagements worldwide. His latest venture, Tompkins Ventures, was founded in 2020. He holds a bachelor's, master's, and PhD in Industrial Engineering from Purdue University, the same institution where Vikrant studied, and has been honored with the Gilbreth Award, one of the most prestigious recognitions in industrial engineering.",
    duration: "26 min",
    date: "2026-08-28",
    about: [
      "Some guests bring perspective. Jim Tompkins brings 50 years of it.",
      "In Episode 8 of Execution at Scale, Vikrant Neb sits down with Dr. Jim Tompkins, international authority in supply chain, founder of 15 companies generating over $2 billion in revenue, author of 31 books, and one of the most respected voices in industrial engineering and logistics globally.",
      "This is Part 1 of a three-part series. And it does not hold back.",
    ],
    learn: [
      "Resilience vs. efficiency, why it's not a trade-off and why most companies get it completely wrong",
      "Just-in-time vs. just-in-case, what COVID exposed about 40 years of supply chain thinking",
      "Why brittle supply chains break, and what building for optionality actually looks like",
      "The leadership gap, the critical difference between operators who solve problems and leaders who build people who solve problems",
      "Why leadership is absolutely teachable, but the desire to lead is not",
      "Speed without alignment creates chaos, the mistake Jim made early in his career and how he turned it into a strength",
      "The first crack that shows up when companies scale fast, and why most leaders never see it coming",
      "The surfboard analogy that closes the episode, and why insight, positioning, and timing are everything",
    ],
    youtube: "W4Z0yQz1Mgw",
    cover: "/assets/podcast/ep-08.webp",
  },
  {
    number: 7,
    slug: "execution-is-the-ultimate-competitive-advantage",
    title: "Execution Is the Ultimate Competitive Advantage",
    guest: "Jeremy Van Puffelen",
    role: "President of Prism Logistics",
    bio: "A supply chain leader and Co-Chair at IWLA, recognized for driving operational excellence, warehouse leadership, and business growth.",
    duration: "26 min",
    date: "2026-06-26",
    about: [
      "Technology is easier to buy than ever before, but it's no longer what sets great businesses apart. In this episode of Execution at Scale, Vikrant Neb sits down with Jeremy Van Puffelen to discuss why lasting success in logistics is built on people, relationships, and execution. Together, they explore how curiosity, collaboration, and a willingness to learn create stronger businesses than technology alone ever can. Whether you're leading a 3PL, managing warehouse operations, or building a supply chain business, this conversation offers practical insights on creating a competitive advantage that can't be copied.",
    ],
    learn: [
      "Why technology alone won't keep you ahead of the competition",
      "How strong relationships create long-term business opportunities",
      "The role of curiosity in driving better leadership and innovation",
      "Why collaboration often beats competition in logistics",
      "How to build a business that creates lasting value beyond its services",
    ],
    youtube: "KvkdSc5IGWk",
    cover: "/assets/podcast/ep-07.webp",
  },
  {
    number: 6,
    slug: "the-planb-nobody-builds",
    title: "The PlanB Nobody Builds",
    guest: "Lori Ann LaRocco",
    role: "President of LaRocco Consulting and Former CNBC Global Supply Chain reporter",
    bio: "An award-winning journalist, bestselling author, and CNBC's Senior Editor of Guests, specializing in global trade and supply chain reporting.",
    duration: "59 min",
    date: "2026-06-11",
    about: [
      "Canceled sailings. Slow steaming. Dropped ports. The ocean freight playbook has quietly rewritten itself, and most small and mid-sized operators are still running on the old one.",
      "In this episode of Execution at Scale, Vikrant sits down with Lori Ann LaRocco (CNBC’s Senior Editor of Guests and Global Supply Chain Reporter, FreightWaves maritime columnist, and author of six books including Trade War: Containers Don’t Lie and Dynasties of the Sea) for a no-fluff conversation on what’s actually breaking in sea freight, what the headlines miss, and why the operators who survive the next disruption are the ones who built their backup relationships before they needed them.",
      "If you move freight, plan freight, or pay for freight, this one’s for you.",
    ],
    learn: [
      "What blank sailings, slow steaming, and dropped ports really mean for your lead times, costs, and customer commitments",
      "Why “Plan B” can’t be a phone call placed the day the disruption hits",
      "How smaller operators can build leverage and optionality without enterprise-scale spend",
      "The signals Lori watches at CNBC and FreightWaves; and what they tell you about the next 90 days on the water",
      "A practical framework for backup carrier, forwarder, and port relationships that hold under pressure",
    ],
    youtube: "U9k0ssLMS-4",
    cover: "/assets/podcast/ep-06.webp",
  },
  {
    number: 5,
    slug: "why-scaling-breaks-operations-before-it-fixes-them",
    title: "Why Scaling Breaks Operations Before It Fixes Them",
    guest: "Jonathan Brooks",
    role: "CEO of Warehouse on Wheels",
    bio: "John brings decades of experience scaling logistics businesses through operational excellence and customer-focused innovation.",
    duration: "56 min",
    date: "2026-05-21",
    about: [
      "Growth is supposed to solve problems. More revenue, more capacity, more options. But for most warehouse and logistics operations, growth does not solve the problems that exist. It exposes them.",
    ],
    learn: [
      "Why space pressure is almost never a square footage problem",
      "How flow pressure hides behind hard working teams",
      "The cost structure mistake that makes every peak period worse",
      "What separates paper resilience from operational resilience",
    ],
    youtube: "v15DY2RRINk",
    cover: "/assets/podcast/ep-05.webp",
  },
  {
    number: 4,
    slug: "why-leadership-is-the-hidden-process-problem",
    title: "Why Leadership is the Hidden Process Problem",
    guest: "Tania Will Jeppesen",
    role: "Founder, The Prepared Leader",
    bio: "Industrial engineer and founder of Prepared Leader, helping warehouse organizations build stronger leaders through practical leadership development.",
    duration: "65 min",
    date: "2026-05-13",
    about: [
      "Most 3PLs invest heavily in systems, reporting structures, warehouse optimization, and process improvements. Yet many continue running into the same execution problems repeatedly. Because the real bottleneck is often not on the warehouse floor. It is in how leadership operates.",
    ],
    learn: [
      "Why operational bottlenecks often originate above the warehouse floor",
      "The hidden cost of reactive leadership inside fast-growing 3PLs",
      "How unclear communication creates downstream execution failures",
      "Why process improvements fail without leadership alignment",
      "What scalable operational leadership actually looks like",
      "How growing organizations can build stronger accountability and execution culture",
    ],
    youtube: "IKiY9-IlDmE",
    cover: "/assets/podcast/ep-04.webp",
  },
  {
    number: 3,
    slug: "what-actually-breaks-when-a-3pl-scales",
    title: "What Actually Breaks When a 3PL Scales",
    guest: "Michael DeFabis",
    role: "Senior Leader, IDS Fulfillment powered by DHL Supply Chain",
    bio: "Senior Leader at IDS Fulfillment, powered by DHL Supply Chain, with expertise in fulfillment operations, business scaling, and supply chain execution.",
    duration: "57 min",
    date: "2026-04-10",
    about: [
      "Growth is often celebrated. The operational strain it introduces is rarely discussed openly. This conversation explores the real inflection points where execution begins to fail as a 3PL grows, which systems tend to break first, and what leaders consistently underestimate as complexity increases.",
    ],
    learn: [
      "Where execution typically breaks during growth",
      "Why heroics replace systems as volume increases",
      "What early decisions compound into larger problems later",
      "How to recognize the warning signs before the damage is done",
    ],
    youtube: "r4-cchQ3EgA",
    cover: "/assets/podcast/ep-03.webp",
  },
  {
    number: 2,
    slug: "pricing-that-destroys-margins-before-you-notice",
    title: "Pricing That Destroys Margins Before You Notice",
    guest: "Bob Byrnes",
    role: "Global Pricing Director, Flash Global",
    bio: "A logistics and 3PL leader known for helping businesses improve profitability through smarter pricing, stronger processes, and operational discipline.",
    duration: "62 min",
    date: "2026-03-25",
    about: [
      "Many 3PLs believe they understand their cost structure until margins erode unexpectedly. This conversation examines why pricing decisions made at small volume quietly collapse under complexity, where hidden cost leakage occurs, and why growth can mask profitability problems until the damage is already done.",
    ],
    learn: [
      "Where hidden cost leakage occurs in growing 3PL operations",
      "Why growth can mask profitability issues for longer than expected",
      "When simple pricing approaches stop reflecting operational reality",
      "The signals that your pricing model needs to be rebuilt",
    ],
    youtube: "SVC60gXdTd8",
    cover: "/assets/podcast/ep-02.webp",
  },
  {
    number: 1,
    slug: "what-hundreds-of-warehouse-conversations-reveal-about-scale",
    title: "What Hundreds of Warehouse Conversations Reveal About Scale",
    guest: "Kevin Lawton",
    role: "CLTD - Founder, The New Warehouse Podcast",
    bio: "Host of The New Warehouse Podcast, Kevin has spent years in conversation with warehouse operators, founders, and executives across the industry; giving him a rare pattern-level view of how operations actually scale.",
    duration: "59 min",
    date: "2026-03-20",
    about: [
      "After years of conversations with warehouse operators, founders, and executives, certain patterns emerge. This episode surfaces those patterns; the beliefs that feel true but consistently lead operations into trouble, the questions leaders stop asking as they grow, and what the most effective operators think about differently.",
    ],
    learn: [
      "The most common patterns in how 3PLs get stuck",
      "What effective operators think about that others do not",
      "The questions worth asking at every growth stage",
      "How the conversation around execution has shifted in recent years",
    ],
    youtube: "dGFww-6aKrE",
    cover: "/assets/podcast/ep-01.webp",
  },
];

export const episodeHref = (slug: string) => `/podcast/${slug}`;

/** The guest's headshot: from the old site's episode page, or cropped from the episode's thumbnail. Add one per new episode. */
export const guestPhoto = (episode: Episode) => `/assets/podcast/guests/${episode.slug}.webp`;

export const findEpisode = (slug: string) => episodes.find((episode) => episode.slug === slug);
