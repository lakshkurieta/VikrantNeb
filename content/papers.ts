import type { ExhibitId } from "@/components/resources/Exhibits";

/**
 * The white papers as reading pages. The first two are converted from their PDFs (public/assets/resources):
 * headings, paragraphs, his quotes, callout panels, numbered items and checklists as text; charts and
 * diagrams as images (public/assets/resources/figures). The two web papers (“Every Line on the Invoice”,
 * “Every Minute on the Floor”) are converted from their HTML: tables as tables, flows as steps, and each
 * interactive exhibit as a live component (components/resources/Exhibits.tsx). Text may carry **bold**,
 * [links](href) and line breaks. Only the resource pages import this.
 */
export type PaperBlock =
  | { t: "h2" | "h3" | "h4" | "p" | "note" | "quote" | "by"; text: string }
  | { t: "callout"; title: string; text: readonly string[] }
  | { t: "item"; n: string; title: string; text: string }
  | { t: "list" | "ul"; items: readonly string[] }
  | { t: "steps"; items: readonly { n: string; title: string; text: string }[] }
  | { t: "table"; title?: string; head?: readonly string[]; rows: readonly (readonly string[])[] }
  | { t: "figure"; src: string; alt: string; w: number; h: number }
  | { t: "exhibit"; id: ExhibitId };

export const papers: Partial<Record<string, readonly PaperBlock[]>> = {
  "the-hidden-cost-of-getting-pricing-wrong": [
    {
      t: "callout",
      title: "White Paper",
      text: [
        "Pricing What Actually Got Picked",
        "A 3PL’s Guide to Margin That Disappears Before You Notice",
        "Every missed scan, manual process, and unbilled service chips away at your profits. Learn where margins are lost and how leading 3PLs protect them.",
        "Authored By: Vikrant Neb · Author - Execution Under Pressure | Founder & CEO - Leanafy & Kurieta",
      ],
    },
    {
      t: "h2",
      text: "Why This Paper.",
    },
    {
      t: "quote",
      text: "“You can be busy and unprofitable at the same time. That is the part most operators do not believe until it happens to them.”",
    },
    {
      t: "by",
      text: "Vikrant Neb",
    },
    {
      t: "p",
      text: "In the last paper I wrote about the operational transformation from B2B to fulfillment, five stages from fifty orders a day to ten thousand. This paper goes into the layer underneath all five stages: what you actually charge for, and why the gap between what you charge and what it costs quietly widens the whole time you think business is good.",
    },
    {
      t: "p",
      text: "Pricing in a 3PL is not one decision made once. It is a hundred small decisions made every day, most of them invisible, most of them made by someone other than the person who set the rate card.",
    },
    {
      t: "p",
      text: "I wrote this paper for the operator who has looked at a healthy P&L and still felt like something was off. The reader I have in mind knows their revenue. They are less sure they know their cost.",
    },
    {
      t: "callout",
      title: "The Short Version",
      text: [
        "Cost and price are related the way cousins are related. They come from the same family, but they do not answer to each other. Price is what the market will pay. Cost is what your operation actually spends to deliver. The 3PLs that confuse the two, that assume a good price means a good margin, are the ones who find out otherwise a year later, usually from a customer audit rather than their own books.",
      ],
    },
    {
      t: "h2",
      text: "The Averages Problem",
    },
    {
      t: "p",
      text: "Here is a pattern I have seen more times than I can count. A 3PL has twenty customers. Sixteen of them are genuinely profitable. Four of them are quietly losing money.",
    },
    {
      t: "figure",
      src: "/assets/resources/figures/the-hidden-cost-of-getting-pricing-wrong-figure-01.webp",
      alt: "Per-account margin across twenty customers: sixteen profitable accounts and four quietly losing money",
      w: 1384,
      h: 663,
    },
    {
      t: "p",
      text: "Nobody notices, because the P&L only shows the average. Leadership looks at the year-end number and says we made a million dollars, we had a good year. What that number does not show is that four accounts are eating margin that the other sixteen are generating, and if those four were repriced or let go, the business could make significantly more money without adding a single new customer.",
    },
    {
      t: "p",
      text: "This does not look like failure. It looks like success that could have been slightly better. And because the average looks fine, nobody feels urgency to dig into any one account.",
    },
    {
      t: "p",
      text: "The unprofitable accounts are rarely the obvious troublemakers. They are not late payers. They are not difficult people. Often they are long-standing relationships, comfortable ones, with consistent volume and a customer who is pleasant to deal with. Everything about the relationship feels right except the economics, and the economics are invisible because nobody has ever isolated what it actually costs to serve that one account.",
    },
    {
      t: "p",
      text: "Revenue is not profitability. A customer generating two hundred thousand dollars a year that costs two hundred and twenty thousand to serve is not one of your biggest accounts. It is a subsidy, funded by the other sixteen. And every hour spent managing that account is an hour not spent on the accounts actually carrying the business.",
    },
    {
      t: "h2",
      text: "Cost and Price Are Cousins",
    },
    {
      t: "p",
      text: "I had this conversation on the podcast with Bob Byrnes, who has spent over fifteen years building pricing structures at Kenco, Ryder, and Stord, and now teaches the Economics of Warehousing course at IWLA. He put something to me that has stuck with me since:",
    },
    {
      t: "quote",
      text: "Cost and price are cousins. They are not married.",
    },
    {
      t: "p",
      text: "It sounds like a small distinction, but it changes how you think about a rate card. The instinct is to build price out of cost. Take what it costs to deliver a service, add the margin you want, and that becomes your number. Bob’s point is that the market does not care what your cost is. Price is what a customer is willing to pay. Cost is the separate number that determines whether that price is any good to you.",
    },
    {
      t: "p",
      text: "Those two numbers can drift apart in either direction, and most operators only notice when they have drifted apart in the wrong one.",
    },
    {
      t: "p",
      text: "There is a second layer to this Bob named directly: customers over-consume whatever they believe you have underpriced. If a customer believes your storage is cheap, they will store more with you than they need to. If they believe your handling is cheap, they will hand you every special project that comes up. The price you set does not just determine your margin on paper. It shapes how the customer behaves, and that behavior either protects your margin or quietly erodes it.",
    },
    {
      t: "h2",
      text: "Scope Creep Nobody Notices",
    },
    {
      t: "p",
      text: "The most common reason 3PLs do not know their real cost to serve a customer is not a lack of intelligence. It is a lack of a mechanism. Nobody built a process to catch the moment a customer’s actual usage drifted away from what was priced.",
    },
    {
      t: "p",
      text: "Bob calls this attribute drift. You price a contract based on a set of assumptions: this volume, this SKU mix, this level of complexity. A year passes. The customer’s business has changed, sometimes without them realizing it themselves, and what you are actually doing for them looks nothing like what you priced. Nobody revisited the contract, because nobody was looking for the drift. It is not usually dishonesty. It is usually growth on the customer’s side that quietly became cost on yours.",
    },
    {
      t: "h3",
      text: "The pen example, expanded",
    },
    {
      t: "p",
      text: "I have used this example before to make batch picking concrete: a hundred orders, one pen each, pens ten to a case. Pickers grab ten cases, walk them back, sort a hundred pens into a hundred shipments. The work is identical to picking each pen individually. Price it as a case pick at four dollars, you bill forty dollars for the wave. Price it as an each-pick at one dollar, you bill a hundred. Same labor. Different revenue, depending entirely on how the rate card was built.",
    },
    {
      t: "figure",
      src: "/assets/resources/figures/the-hidden-cost-of-getting-pricing-wrong-figure-02.webp",
      alt: "The pen example: ten cases billed at $40, a hundred single pens billed at $100. Same wave, same labor, different bill",
      w: 1357,
      h: 755,
    },
    {
      t: "p",
      text: "The drift shows up when you expand this across SKU classes rather than one product. Say the same client also ships apparel, some of it single-unit, some of it multi-pack.",
    },
    {
      t: "p",
      text: "The pickand-pack complexity is different for every class, but many rate cards apply one blended per-pick rate across all of them because that is what was quoted at onboarding. The eachpick rate that was fair for the pen becomes a giveaway on the apparel multi-pack, and a loss on anything requiring special handling. Nobody repriced it, because nobody built the mechanism to notice that the SKU mix, not just the volume, had changed.",
    },
    {
      t: "h3",
      text: "What Is Acceptable At This Stage",
    },
    {
      t: "p",
      text: "One client I worked with sold LED lighting. Their instinct, a reasonable one on paper, was to slot inventory by product family: all the tube variants together, all the bulb variants together, grouped the way a catalog groups them.",
    },
    {
      t: "p",
      text: "The problem is that nobody orders that way. A customer buying a specific tube wattage does not also want three adjacent wattages in the same order, the same way nobody orders a brown shoe and a black shoe together just because they sit on the same shelf. The physical slotting was optimized for how the product looked in a catalog, not for how orders actually arrived. Pickers walked further than the layout implied they should, because the SKU density that looked efficient by product family was not the density that mattered, which was order density.",
    },
    {
      t: "p",
      text: "None of that showed up in the original pricing. The pick time assumed a layout logic that made sense to a merchandiser and none to an order profile. The fix was not a pricing conversation at all. It was a re-slotting exercise, moving inventory to reflect actual co-order patterns rather than catalog logic. But the business had been quietly absorbing that cost for months before anyone connected the dots between how the floor was laid out and why picks were taking longer than the rate card assumed.",
    },
    {
      t: "h2",
      text: "The Expansion Trap",
    },
    {
      t: "p",
      text: "Bob gave me a second example that deserves its own section, because it is less about individual accounts and more about a decision leadership makes without realizing it is a pricing decision.",
    },
    {
      t: "p",
      text: "Picture a hundred-thousand-square-foot building running at ninety percent capacity. A prospect comes along needing twenty thousand feet. You only have room for ten thousand. The instinct is to say yes and go find a second building.",
    },
    {
      t: "p",
      text: "Here is the math nobody runs before signing. If the second building is roughly the same size as the first, winning this one customer means you now operate one building near full and a second building running at ten percent utilization. Rent on that second building does not scale down because only one customer is in it. The revenue from that one account is not going to cover the fixed cost of an entire additional facility, not for a long time, possibly not ever if growth stalls.",
    },
    {
      t: "figure",
      src: "/assets/resources/figures/the-hidden-cost-of-getting-pricing-wrong-figure-03.webp",
      alt: "One new customer, two buildings: building 1 is 80% existing customers, 10% the new customer and 10% empty; building 2, a new lease, is 10% used and 90% empty",
      w: 1358,
      h: 837,
    },
    {
      t: "p",
      text: "This is not a mistake in operations. It is a mistake in the pricing conversation nobody had. The real question was never can we win this account. It was: is revenue our goal here, or is margin our goal here. If margin, the better move might be a smaller footprint, a subleased corner of the new space, or simply declining the account until the timing is better.",
    },
    {
      t: "p",
      text: "If revenue and growth are genuinely the priority, that is a legitimate answer too, but it should be a conscious one, not something the business discovers eighteen months later when the second building still is not profitable.",
    },
    {
      t: "p",
      text: "Pricing is a management decision shaped by what the market will pay. It is also a management decision shaped by what the company is actually trying to do. Confusing growth with health is how expansion quietly becomes the thing that breaks the margin the original business was generating.",
    },
    {
      t: "h2",
      text: "Billing Discipline, Revisited",
    },
    {
      t: "p",
      text: "The first paper in this series covered the mechanics of fulfillment billing: treating every activity as a billable event, passing through accessorials and integration costs instead of absorbing them, reconciling every shipment against contract. That discipline does not change here. What changes is the lens.",
    },
    {
      t: "p",
      text: "Averages hide the four unprofitable accounts. Attribute drift hides the SKU mix that outgrew the rate card. The expansion trap hides the fixed cost that a new account cannot actually cover. All three are the same failure wearing different clothes: a business that priced for one set of assumptions and never built the mechanism to check, months or years later, whether those assumptions still held.",
    },
    {
      t: "p",
      text: "A billing engine built into the WMS, generating invoices from actual floor data rather than a spreadsheet at month-end, is the tool that catches this. But the tool only works if someone is also asking the harder question behind it: not just did we bill correctly for what we did, but is what we are doing still the thing we priced.",
    },
    {
      t: "h2",
      text: "What To Do This Week",
    },
    {
      t: "p",
      text: "Bob’s closing advice on the podcast was not a five-step framework. It was simpler than that, and worth repeating close to verbatim: most 3PLs do not win business on price alone. Price has to be right, but there has to be another reason a customer picks you. Find what that is, and build the process that makes you genuinely the best or the most efficient at it, at a margin that holds even if the price never moves.",
    },
    {
      t: "quote",
      text: "Most 3PLs do not win business on price alone. Price has to be right, but there has to be another reason a customer picks you.",
    },
    {
      t: "p",
      text: "That is a good long-term answer. Here is a shorter one for this week specifically.",
    },
    {
      t: "h3",
      text: "A five-point pricing gut check",
    },
    {
      t: "item",
      n: "01",
      title: "",
      text: "Pull your customer list and rank accounts by revenue. Now estimate, even roughly, what each one actually costs to serve. If you cannot do this at all, that is the finding.",
    },
    {
      t: "item",
      n: "02",
      title: "",
      text: "For your ten largest accounts, ask when the contract was last compared against what you are actually doing today, not what was quoted at onboarding.",
    },
    {
      t: "item",
      n: "03",
      title: "",
      text: "Look at your rate card and identify anywhere a single blended rate covers activities with meaningfully different labor profiles. That is where the pen-and-apparel drift lives.",
    },
    {
      t: "item",
      n: "04",
      title: "",
      text: "If you are considering an expansion, run the utilization math before the sales conversation, not after the lease is signed.",
    },
    {
      t: "item",
      n: "05",
      title: "",
      text: "Ask which costs on your P&L are labeled fixed that are actually being covered by someone’s unpaid extra hours. That labor is not free just because it is not on an invoice.",
    },
    {
      t: "p",
      text: "None of these fix the whole problem in a week. What they do is tell you, honestly, whether you are the operator who knows their real cost or the one who is about to find out the hard way.",
    },
    {
      t: "h2",
      text: "Closing Thoughts",
    },
    {
      t: "p",
      text: "Fulfillment rewards operators who price with discipline and punishes the ones who price once and never look again. The margin that disappears rarely disappears all at once. It thins one unexamined account, one drifted contract, one well-intentioned expansion at a time, until a P&L that looked healthy for years quietly is not.",
    },
    {
      t: "p",
      text: "Cost and price are cousins. Keep checking that they are still speaking to each other.",
    },
    {
      t: "quote",
      text: "I am always glad to compare notes with operators working through this. On any part of the pricing conversation.",
    },
    {
      t: "h2",
      text: "Where This Series Goes Next",
    },
    {
      t: "p",
      text: "This is the second paper in a series of operator-focused field guides for 3PLs scaling into fulfillment.",
    },
    {
      t: "item",
      n: "04",
      title: "The Integration Moat",
      text: "API and EDI architecture as a competitive advantage. How leading 3PLs onboard brands in a week, what the right integration stack looks like at each volume stage, and why integration breadth beats integration depth for most operators.",
    },
    {
      t: "item",
      n: "05",
      title: "Labor That Survives a 5x Swing",
      text: "Cross-training, temp-staffing partnerships, peak-season planning, and the operational design choices that make labor interchangeable. How to build a workforce that can scale in days, not weeks.",
    },
    {
      t: "item",
      n: "06",
      title: "Why the WMS Always Goes First",
      text: "Picking, switching, and surviving a WMS transition. Vendor evaluation criteria, implementation pitfalls, the emotional math of leaving a system you have invested in, and the playbook for changing platforms without losing clients.",
    },
    {
      t: "item",
      n: "07",
      title: "Returns Are Reverse Manufacturing",
      text: "Designing a returns operation at scale. SOP libraries, brand-specific disposition rules, when to run returns in a separate building, and the technology that makes high-volume returns profitable.",
    },
    {
      t: "item",
      n: "08",
      title: "Reading the Brand-Side Signals",
      text: "How to detect a quiet exit before it happens. Early warning indicators, the conversations brands are having that you are not in, and the account-management practices that keep small-to-mid brands from leaving silently.",
    },
    {
      t: "item",
      n: "08",
      title: "The Fulfillment-Native 3PL",
      text: "Synthesis. What the 3PL of the next decade looks like, how to build toward it from a B2B base, and the leadership shifts that make the operational shifts possible.",
    },
    {
      t: "p",
      text: "If you would like to be notified as future papers are released, follow vikrantneb.com or connect on LinkedIn.",
    },
    {
      t: "h2",
      text: "About the Author",
    },
    {
      t: "p",
      text: "Vikrant Neb is an industrial engineer who has spent his career around operations. He has run e-commerce companies, led manufacturing operations through Kurieta during his consulting years, and worked with 3PLs across the full range of volumes and transitions covered in this paper.",
    },
    {
      t: "p",
      text: "He is the founder of Leanafy, a warehouse management system built specifically for 3PL operators, and Kurieta Operations Consulting. His book, Execution Under Pressure: The Hidden Reasons Why 3PLs Stop Growing and How to Fix Them, came out in 2026. He hosts the Execution at Scale podcast and splits his time between Indianapolis and Vancouver.",
    },
    {
      t: "p",
      text: "This paper covers one slice of his work, the move from B2B into fulfillment. He is always glad to compare notes with operators making this move, and on the other things that come up around it.",
    },
    {
      t: "p",
      text: "vikrantneb.com · linkedin.com/in/vikrant-neb",
    },
  ],
  "the-execution-gap": [
    {
      t: "callout",
      title: "White Paper",
      text: [
        "From Pallet In, Pallet Out to 10,000 Orders a Day",
        "A 3PL's Journey Into Fulfillment",
        "How established B2B warehouses can scale from 50 to 10,000 orders per day without breaking their operation, their margins, or their clients' trust.",
        "Authored By: Vikrant Neb · Author - Execution Under Pressure | Founder & CEO - Leanafy & Kurieta",
      ],
    },
    {
      t: "h2",
      text: "Why This Paper.",
    },
    {
      t: "quote",
      text: '“If you run a traditional B2B 3PL, you\'ve likely felt the pull. Your clients are asking about direct-to-consumer. Your sales calls include the word "fulfillment" more than they used to. Your peers at IWLA are adding parcel carriers and buying pick-to-light. The opportunity is real.”',
    },
    {
      t: "by",
      text: "Vikrant Neb",
    },
    {
      t: "p",
      text: "The opportunity is real. So is the part most operators do not hear in those conversations. Fulfillment is a great move for a B2B 3PL, and it is also a different sport. Your buildings are an advantage. Your processes are mostly not. Your technology, in most cases, is not either.",
    },
    {
      t: "p",
      text: "This paper is a practical roadmap. It walks the journey from 50 orders a day to 10,000 a day, stage by stage. At each stage I describe what tends to break, what the operation should look like, and what the technology has to do.",
    },
    {
      t: "p",
      text: "I wrote it for the operator who wants a map before taking the next step. The reader I have in mind has run pallets and cases for years, has earned the right to be confident, and wants to approach fulfillment with eyes open.",
    },
    {
      t: "callout",
      title: "The Short Version",
      text: [
        "Fulfillment from a B2B base is not a new service line you bolt on. It is a transformation that compounds across five volume stages. Get the process, the physical layout, and the technology to move together, and scale is predictable. Let any one lag, and you will hit the wall at 2,000 orders a day and spend eighteen months getting off of it.",
      ],
    },
    {
      t: "h3",
      text: "A note on the series",
    },
    {
      t: "p",
      text: "I covered the leadership and mindset side of 3PL growth in Execution Under Pressure. This paper is the first in a series on the operational and technical side, written to stand alone and to function together as a complete field guide. The other papers are previewed at the end.",
    },
    {
      t: "h2",
      text: "The Shift: Why B2B 3PLs Are Moving Into Fulfillment",
    },
    {
      t: "p",
      text: "Three forces are pushing B2B 3PLs toward fulfillment, and none of them are temporary.",
    },
    {
      t: "h3",
      text: "01. Brands Want One Partner.",
    },
    {
      t: "p",
      text: "A consumer brand selling into Target and into Shopify wants the same 3PL to do both. So does a manufacturer that's shipped to distributors for years and is now launching a branded line for ecom. They do not want one warehouse for retail replenishment and a separate operation for DTC. Consolidation is cheaper for them and stickier for you. The 3PL that can run both sides of the house becomes the primary partner.",
    },
    {
      t: "h3",
      text: "02. Margin Gravity Has Shifted.",
    },
    {
      t: "p",
      text: "Storage and pallet-in, pallet-out handling are commodity services with commodity margins. A well-run fulfillment operation generates several times more revenue per cubic foot, and the stickiness of integration work raises switching costs. Fulfillment is harder, and that is exactly why the margin is there.",
    },
    {
      t: "h3",
      text: "03. E-commerce is Not a Channel Anymore.",
    },
    {
      t: "p",
      text: "Every brand is now an omnichannel brand. A 3PL that cannot ship a parcel to a consumer is a 3PL that cannot fully serve its existing retail clients when those clients add DTC. Fulfillment capability is becoming table stakes for keeping accounts, not just winning new ones.",
    },
    {
      t: "h3",
      text: "Why The Move is Hard?",
    },
    {
      t: "p",
      text: "The instinct, understandably, is to treat fulfillment as another workflow under the same roof. It is not.",
    },
    {
      t: "p",
      text: "Every row in table below is a process change, a layout change, a labor change, or a technology change. Usually all four. That is why the move is hard, not because fulfillment is technically complex, but because every assumption from the B2B world has to be re-examined.",
    },
    {
      t: "figure",
      src: "/assets/resources/figures/the-execution-gap-figure-01.webp",
      alt: "B2B pallet-in, pallet-out compared with B2C fulfillment: order profile, SLA, inventory unit, carriers, labor model, error tolerance, billing and integrations",
      w: 1359,
      h: 1400,
    },
    {
      t: "p",
      text: "Every row in that table is a process change, a layout change, a labor change, or a technology change. Usually all four.",
    },
    {
      t: "p",
      text: "The move is hard not because fulfillment is technically complex, but because every assumption from the B2B world has to be reexamined.",
    },
    {
      t: "h2",
      text: "The Journey: Five Stages From 50 to 10,000 Orders a Day",
    },
    {
      t: "p",
      text: "The stages below are not defined by a calendar. Some 3PLs move from Stage 1 to Stage 3 in a year. Others take five. What matters is recognizing which stage you are in, because the process, physical, and technology moves required are specific to that stage. Skipping a stage is how operations break.",
    },
    {
      t: "figure",
      src: "/assets/resources/figures/the-execution-gap-figure-02.webp",
      alt: "The five-stage climb: 50, 500, 2,000, 5,000 and 10,000+ orders a day, each a complete operating model",
      w: 1358,
      h: 1135,
    },
    {
      t: "h3",
      text: "Stage 01: 50 Orders a Day (The Experiment)",
    },
    {
      t: "p",
      text: 'This is the "let\'s try it" phase. Usually an existing B2B client has asked whether you can ship their online orders while you store their retail inventory. You agree, set up a corner of the warehouse, and start.',
    },
    {
      t: "h3",
      text: "What The Operation Looks Like",
    },
    {
      t: "p",
      text: "Orders arrive through a shared spreadsheet, a client portal, or a basic integration with one shopping cart. A handful of staff pick one order at a time. Inventory lives in the same bulk locations as B2B stock. Labels print one at a time from the carrier site. Packing happens at a folding table.",
    },
    {
      t: "h3",
      text: "What Is Acceptable At This Stage",
    },
    {
      t: "p",
      text: "Paper pick tickets, as long as there is some barcode verification at pack. Manual labels. A single carrier. End-of-day reconciliation. None of these are scalable, but at this volume they can work.",
    },
    {
      t: "h3",
      text: "What Will Start To Hurt",
    },
    {
      t: "p",
      text: "Mispicks, because without scan-to-validate they are inevitable, and every one hurts the consumer brand. Inventory drift, because orders decrement on paper rather than in the system, and cycle counts catch the gap too late.",
    },
    {
      t: "p",
      text: "Stockouts discovered at pick time rather than at order time.",
    },
    {
      t: "p",
      text: "And almost always, the moment a second client signs up and the corner of the warehouse stops being enough.",
    },
    {
      t: "h3",
      text: "A real Stage 1 collapse",
    },
    {
      t: "p",
      text: "One operator I worked with had a building of about 200,000 square feet, mostly pallet-in pallet-out. One of their existing B2B clients started selling on Amazon FBM. A few orders a week at first, then more, then a few dozen a day. Around the same time, a second brand came on doing about 50 orders a day with 70 SKUs.",
    },
    {
      t: "p",
      text: "Still small numbers on paper. But the operation started cracking, and the cracks were not where leadership was looking.",
    },
    {
      t: "p",
      text: "The WMS was B2B. Pallet tags scanned fine. Below the pallet, nothing. So pickers did what pickers do when the system does not help them. They improvised.",
    },
    {
      t: "p",
      text: "Someone would grab a case off a pallet, walk it to a pack station, pull a few pieces, walk the case back. Sometimes to the right spot. Sometimes not. None of it captured. Within a few weeks the system thought inventory was in location A and it was actually sitting open on a shelf in location C. Mis-shipments followed. Then more mis-shipments.",
    },
    {
      t: "h3",
      text: "What this stage actually needs",
    },
    {
      t: "p",
      text: "A basic WMS that supports order management and inventory at the piece level, not just pallet or case. Scan-to-validate on picking, even for single-order picks. The habit matters more than the volume. One carrier integration with automated label generation. A real connection to the client’s e-commerce platform that pulls orders and pushes tracking.",
    },
    {
      t: "callout",
      title: "Stage 01: Key Takeaway",
      text: [
        "Start the scanning habit now. Every operational muscle you do not build in the experiment stage becomes a crisis at scale. Scanning at pick, accurate piece-level inventory, and a real order-management feed are cheap to build today and expensive to retrofit later.",
      ],
    },
    {
      t: "h3",
      text: "Stage 02: 500 Orders a Day (The Line of Business)",
    },
    {
      t: "p",
      text: "Something has worked. Word has traveled. You are onboarding your second, third, and fifth fulfillment client. The operation now has its own rhythm and its own problems.",
    },
    {
      t: "h3",
      text: "What The Operation Looks Like",
    },
    {
      t: "p",
      text: "A dedicated pick area, no longer a shared corner. Usually separated from B2B by aisle and process. First forward-pick slots for fast-moving SKUs. Replenishment from reserve is a defined task. Batch picking is introduced. Pickers take 6–10 orders at a time on a cart with tote positions. Dedicated pack stations with label printers, packing slip printers, and scales. Scheduled carrier pickups from two or three parcel carriers. Returns start to arrive and have no clear home yet.",
    },
    {
      t: "h3",
      text: "What hurts at this volume",
    },
    {
      t: "p",
      text: "Single-order picking becomes brutally inefficient. Pickers walk the same aisles five times in an hour. Pack stations congest. Labels print to the wrong printer, documents get mixed between orders. Inventory drift without real cycle counting. One off-count creates cascading mispicks. Each new client wants their own shopping cart, their own packing slip, their own inserts. Onboarding takes weeks. Returns pile up because there is no process and no location for them.",
    },
    {
      t: "h3",
      text: "Back to that 200,000 square foot operator",
    },
    {
      t: "p",
      text: "By the time their primary client added Shopify on top of Amazon, volume was running 20 to 25 orders a day on that one account, with a second brand layering on. They tried to absorb it with the same people, the same process, and the same WMS. Cost per order quietly went above what they were charging. Leadership told themselves it was an economies-of-scale problem. Get a few more customers and the math will work.",
    },
    {
      t: "quote",
      text: "It was not a scale problem. It was a process problem wearing economies of scale as a costume.",
    },
    {
      t: "p",
      text: "The mispicks did not trigger major Amazon performance penalties, but the reshipments piled up. They were buying the product a second time, paying to ship it again, and in some cases paying return shipping to recover the original unit and put it back on the shelf at their own expense. None of that was in the rate card. All of it came out of margin. By the time we crossed paths, leadership was ready to shut the e-commerce side down. The conversation on the table was not how do we scale this. It was how do we kill it cleanly. We did not kill it. We optimized what we could inside the existing WMS, built a wrapper around it for what the WMS could not do, and eventually moved them to a platform built for both sides of the house. They are still operating today, doing both B2B and fulfillment.",
    },
    {
      t: "quote",
      text: "The volume that breaks you is smaller than you think, and the WMS that got you here is usually the thing holding you hostage on the way out.",
    },
    {
      t: "h3",
      text: "What this stage actually needs",
    },
    {
      t: "h4",
      text: "Physical setup",
    },
    {
      t: "p",
      text: "Flow rack or carton flow shelving for top-moving small SKUs. A first designated pack line with a dimensional-weight scale, because dim-weight is the largest hidden cost in early fulfillment. Clear demarcation between B2B and B2C zones. Mixing them is a short-term convenience and a long-term expense.",
    },
    {
      t: "h3",
      text: "Technology",
    },
    {
      t: "p",
      text: "A real WMS with batch-picking logic and scan verification on every pick. Pick-to-tote, with inventory decrementing in real time. Rate shopping across three to four carriers. Multi-client architecture, so each brand’s orders, inventory, and reporting stay separate but manageable from one view. API-based integrations to e-commerce platforms. A basic returns process with a scan-based receiving step and client-specific disposition rules.",
    },
    {
      t: "callout",
      title: "Stage 02: Key Takeaway",
      text: [
        "B2B accepts a 48-hour turnaround. B2C is measured in hours. Floor plan, batch-pick logic, and carrier strategy all have to reflect that compression. Operators that treat fulfillment as an add-on at Stage 2 cannot afford Stage 3.",
      ],
    },
    {
      t: "h3",
      text: "Stage 03: 2000 Orders a Day (Systemization)",
    },
    {
      t: "p",
      text: "Fulfillment is now a real line of business. You have dedicated supervisors. You may have 8–15 brands on the platform. Clients are asking about peak season planning, SLA dashboards, and cost per order. This is the stage where 3PLs either professionalize or start to lose money.",
    },
    {
      t: "h3",
      text: "What The Operation Looks Like",
    },
    {
      t: "p",
      text: "Waves are planned through the day and released against carrier cutoffs, not on an ad-hoc basis. Pick paths are optimized: pickers walk a sequence designed to minimize travel, not just to find the next item. Zone picking is introduced. Pickers specialize in areas and orders are consolidated downstream. A dedicated e-commerce receiving lane handles smaller, more frequent inbounds separately from B2B. Pack stations auto-print labels, packing slips, and inserts based on brand rules. Cycle counting runs on a schedule, and accuracy is a metric reported to clients. SLA dashboards by brand are visible to operations and to the client.",
    },
    {
      t: "h3",
      text: "What Breaks At This Volume",
    },
    {
      t: "p",
      text: "Wave planning by spreadsheet or tribal knowledge cannot keep up. Waves miss cutoffs, pack stations starve then flood. Pickers spend 30% or more of their time walking. Units per hour plateau and overtime creeps in. Labor cost per order creeps up without being clearly visible until the monthly P&L lands. Onboarding a new brand takes four to six weeks because every integration is custom. Carrier rate negotiations are on the table but require data you cannot easily produce.",
    },
    {
      t: "h3",
      text: "Physical Setup Moves",
    },
    {
      t: "p",
      text: "Expand the forward-pick area with a defined velocity slotting policy (A, B, C) movers mapped to specific zones. Add more flow rack. Top movers should never be stored in a standard shelf bay at this volume. Split pack stations: small parcel versus multi-item or larger cartons. One pack line for everything does not work past 1,500 orders a day. Consider first conveyor: a simple take-away belt from pack to shipping lanes saves 20–30 steps per order.",
    },
    {
      t: "h3",
      text: "Technology That Must Scale Now",
    },
    {
      t: "p",
      text: "Wave planning that knows about carrier cutoffs, current labor on the floor, and downstream packout capacity. Pick-path optimization that is carton-aware and zone-aware, not just nearest-next-location. Rate shopping that factors in packaging, zones, client-specific rate cards, and accessorials. Integration architecture that is API-first or EDI-templated, so onboarding takes hours instead of weeks. EDI capability for larger clients, with 940, 945, 856, and 997 flows mapped per retail partner. A billing engine that can invoice accurately per SKU, pick, pallet, storage day, and accessorial against each client’s contract. A client reporting portal.",
    },
    {
      t: "callout",
      title: "Stage 03: Key Takeaway",
      text: [
        "Wave planning is where 3PLs going from 500 to 2,000 break. It is a process problem, a math problem, and a technology problem at the same time. Solve it manually and you cap your growth here. Solve it in the system and you unlock the next stage.",
      ],
    },
    {
      t: "h3",
      text: "Stage 04: 5000 Orders a Day (Optimization & Flow)",
    },
    {
      t: "p",
      text: "You are a real fulfillment operation. Twenty to forty brands. A peak season that looks nothing like Q1. Error rate, units per hour, and cost per order are board-level conversations. You are competing for clients against national fulfillment players and winning some of them. This stage is about optimizing every link of the chain.",
    },
    {
      t: "h3",
      text: "What The Operation Looks Like",
    },
    {
      t: "p",
      text: "Continuous wave release balanced against carrier cutoffs and available labor. Zone picking with conveyor or cart-based consolidation between zones. Pick-to-tote with scan verification on every line. Totes are routed to the correct pack lane based on order contents. Pack-by-scan: the system identifies the right box size, prints the label and documents, and guides the packer. Slotting reviewed weekly. Fast movers rotate to prime slots based on the last 30 days of velocity.",
    },
    {
      t: "p",
      text: "Returns processed in a dedicated area with brand-specific disposition rules resell, repair, discard. Labor hours tracked against engineered standards per task.",
    },
    {
      t: "h3",
      text: "What Breaks At This Volume",
    },
    {
      t: "p",
      text: "Floor congestion. People, totes, carts, and conveyors compete for the same space unless the layout has been re-planned for throughput, not just for storage. Integration debt catches up. Every legacy custom connection is slightly different, and a single cart API change can take a brand offline. Carrier rate files change monthly, and someone missing an update erodes margin silently. Seasonal labor onboarding is a fire drill unless labor standards and pick-direction tools let new hires ramp in days, not weeks.",
    },
    {
      t: "h3",
      text: "Physical Setup Moves",
    },
    {
      t: "p",
      text: "A formal forward-pick area with automated replenishment triggers. When a forward slot drops below a threshold, replen is issued from reserve. Pick-to-light in the densest fast-mover zones. For zones with very high SKU count and very high velocity, light-directed picking cuts pick time by 30–50% and error rate dramatically. Put-to-light in batch-pick consolidation. A picker batch-picks 20 orders worth of items into one tote, then places them into a put-wall where lights indicate the correct cubby for each order. Dedicated packout lines per class of order: standard parcel, oversized, fragile, subscription-box.",
    },
    {
      t: "h3",
      text: "Technology That Must Now Scale",
    },
    {
      t: "p",
      text: "Fully optimized pick-path logic that considers cubic, weight, pack-station routing, and congestion in real time. Pick-to-tote with consolidation logic that respects order completeness and routes completed orders directly to the correct pack station. Advanced rate shopping: brand-specific carriers, account-level rates, accessorial calculations, dimensional weight factoring, zone-skipping consideration, regional carriers where applicable. Label creation fully automated: compliance labels (for example FNSKU for Amazon), carrier labels, packing slips, and branded inserts, all printed in the right sequence at the right station. Deep EDI and API breadth: five to ten shopping carts, ten or more carriers, marketplace integrations (Amazon MCF, Walmart WFS / DSV where applicable), and BI feeds. Labor management with engineered standards by task, real-time tracking, and dashboards that show variance.",
    },
    {
      t: "callout",
      title: "Stage 04: Key Takeaway",
      text: [
        "At 5,000 orders a day, pick-to-light and put-to-light stop being luxuries. Payback at this volume usually closes inside 18 months, and the operation that delays them loses the margin to the operator who installed them last year.",
      ],
    },
    {
      t: "h3",
      text: "Stage 05: 10,000+ Orders a Day (Orchestration)",
    },
    {
      t: "p",
      text: "You are now in the top tier of independent 3PLs. At this volume, no single process or tool carries the operation. Success is about orchestration, every piece of the floor, every integration, every piece of labor has to be choreographed in real time.",
    },
    {
      t: "h3",
      text: "What The Operation Looks Like",
    },
    {
      t: "p",
      text: "Real-time wave orchestration. The system balances inventory availability, carrier cutoffs, labor on the floor, and brand SLAs simultaneously. Multi-modal picking. Batch, cluster, and zone strategies are applied per wave based on the order profile of that wave. Put walls, or in some cases automated sortation, for multi-line orders. Continuous slotting adjustment based on the last seven and thirty days of velocity. Predictive labor planning tied to inbound wave forecasts. Staffing is scheduled against expected order volume, not last week's reality. A full BI suite: cost per order, cost per pick, units per hour per zone, perfect order rate, cost per carton, carrier mix analysis. Returns automation with scan-to-disposition, photo capture, and brand-specific logic.",
    },
    {
      t: "h3",
      text: "What Still Breaks If Technology Lags",
    },
    {
      t: "p",
      text: "A single cart API deprecation can take a brand offline for days if the integration was custom. Carrier rate or surcharge changes not reflected in the rate-shop engine silently erode margin every shipment. Onboarding a new brand still takes weeks instead of days, which caps growth even when sales is landing accounts. A single hardware failure: a pick-to-light controller, a conveyor section, a printer drops wave throughput unless the system can re-route in real time.",
    },
    {
      t: "h3",
      text: "Physical setup moves",
    },
    {
      t: "p",
      text: "Pick-to-light zones covering the top ten percent of SKUs by velocity. Put-to-light walls for multi-order consolidation after batch pick: the single most effective manual-to-semi-automated transition at this volume. Dedicated replenishment team running forklift replen from reserve into flow rack on a continuous schedule. Manifest-aware pack zones. Each pack station knows which carrier is next, which box sizes to pull, and which documents to print. A dedicated returns center with a scan-based workflow and photo disposition.",
    },
    {
      t: "h3",
      text: "Technology That Must Scale Now",
    },
    {
      t: "p",
      text: 'A multi-tenant WMS purpose-built for fulfillment scale. A B2B WMS with a fulfillment module stapled on will not survive this volume. Open API architecture for fast onboarding. "We will build you a custom connector" is not a scalable answer; pre-built integrations and standardized EDI maps are. An EDI library pre-built for retail compliance (Amazon Vendor / Seller, Walmart, Target) major grocery and specialty retailers. Rate shopping that is live, not nightly. Every shipment evaluated against current rates, with dim-weight, accessorials, SurePost/SmartPost logic, and zone skips considered. Wave planning that optimizes for labor and cutoffs jointly, not sequentially. Full pick-path optimization aware of put-walls, pick-to-light zones, put-to-light zones, travel time, and congestion. A deep client portal and API. Brands at this scale want programmatic access to their own data. Hardware-agnostic integrations with material-handling equipment, conveyor, sorters, scale-in-motion, and cubing systems.',
    },
    {
      t: "callout",
      title: "Stage 05: Key Takeaway",
      text: [
        "At 10,000 orders a day, your technology is the operating system of the business. It coordinates every piece of labor, every piece of inventory, every piece of equipment, and every client integration. Without it, you do not scale. You bottleneck.",
      ],
    },
    {
      t: "h2",
      text: "Operational Infrastructure: A Closer Look",
    },
    {
      t: "p",
      text: "A few elements of physical setup come up at every client conversation and deserve more than a line in a table. The right combination is what separates a Stage 3 operation from a Stage 5 one.",
    },
    {
      t: "figure",
      src: "/assets/resources/figures/the-execution-gap-figure-03.webp",
      alt: "How the floor plan changes at stages 1, 3 and 5: same square footage, restructured three times",
      w: 1423,
      h: 1091,
    },
    {
      t: "h3",
      text: "Flow Rack and Carton Flow",
    },
    {
      t: "p",
      text: "Flow rack uses gravity-fed lanes that let product slide to the pick face as the front carton empties. It is the cheapest infrastructure upgrade in fulfillment. Compresses the pick face, keeps fast movers dense, reduces walk. For SKUs that move more than a few times a day, flow rack is almost always the right answer over standard shelving. The common mistake is slotting flow rack by what feels fast rather than by velocity data. Every 3PL at Stage 3 or above should be re-slotting at least monthly.",
    },
    {
      t: "h3",
      text: "Forward Pick Areas and Reserve",
    },
    {
      t: "p",
      text: "A well-designed fulfillment operation separates forward pick (the dense, walkable area where pickers actually work) from reserve (where bulk inventory sits). Forward holds a day or two of velocity per SKU. Reserve holds the rest and replenishes forward on trigger. Pickers should not walk into a bulk aisle. Forklifts should not drive into a pick aisle. The two flows do not mix without losing safety and productivity. 3PLs moving from B2B often skip this step because the B2B floor allowed free mixing. Fulfillment does not.",
    },
    {
      t: "h3",
      text: "Pick-to-Light",
    },
    {
      t: "p",
      text: "Pick-to-light uses lights and digit displays at each pick slot. The picker scans a tote or order, lights illuminate at the slots where picks are required, and the picker confirms each pick with a button press. P2L works well in dense, high-velocity zones with small SKUs and many picks per hour per picker. It pays back through labor productivity (often a 30 to 50 percent reduction in pick time) and through error rate, which drops dramatically. For operations above 3,000 orders a day with concentrated velocity, the case usually closes in 12 to 18 months.",
    },
    {
      t: "h3",
      text: "Put-to-light and put walls",
    },
    {
      t: "p",
      text: "Put-to-light is the complement to batch picking. A picker batch-picks 15 or 20 orders’ worth of items into a single consolidation tote, then stands at a put wall with labeled cubbies, one per order. The system lights up the cubby where each item belongs. When a cubby’s light shows complete, the order is ready to pack. PTL is the highest-leverage semi-automation move for a 3PL going into heavy fulfillment. It converts a batch pick (highly productive per picker) into complete orders without a sorter. Cost is a fraction of full automation. Payback is fast. Flexibility is high.",
    },
    {
      t: "figure",
      src: "/assets/resources/figures/the-execution-gap-figure-04.webp",
      alt: "How picking evolves: one picker per order, batch picking into totes, zone picking, then batch picks consolidated at put walls",
      w: 1439,
      h: 797,
    },
    {
      t: "figure",
      src: "/assets/resources/figures/the-execution-gap-figure-05.webp",
      alt: "Cart-mounted put-to-light: lights on the cart show which order each picked item belongs to",
      w: 1438,
      h: 984,
    },
    {
      t: "h3",
      text: "A real put-to-light story, on a budget",
    },
    {
      t: "p",
      text: "The most useful pick-to-light story I can tell is actually a put-to-light story. The operation was running about 2,500 orders a day. A lot of operators hear light-directed picking and picture a quarter-million-dollar install. That is one version of it. The version this client did cost about $14,000. Four carts, lights mounted on the totes, no fixed infrastructure. Pickers scanned items off the shelf the normal way, then the cart told them which order each item belonged to. Press the light, drop it in, move on. The point is not the dollar figure. The point is that automation in fulfillment does not have to be all or nothing. Find the place where the manual process is hurting you most, and put the technology there. Leave the rest alone. Payback was about five months. Not because the technology was magic, but because we picked the right place to spend.",
    },
    {
      t: "quote",
      text: "Which 30 feet of your floor is bleeding the most labor? That is the question. Usually nobody is asking it that way.",
    },
    {
      t: "h3",
      text: "Pack Stations and Pack Lines",
    },
    {
      t: "p",
      text: "Pack is where small operations lose a surprising amount of money. Packers choosing the wrong box and paying dim-weight penalties. Inserts missed because they were not visible at pack time. Documents printing to the wrong station. By Stage 3 and beyond, pack stations should be system-directed. The tote arrives with an order. The scan pulls up the right box size. The label and documents print at the station. The packer’s only judgment call is quality.",
    },
    {
      t: "h2",
      text: "The Technology Stack That Scales",
    },
    {
      t: "p",
      text: "Every capability below starts as optional at Stage 01 and becomes mandatory by Stage 04. The 3PLs that plan their technology path against the stages they expect to hit, rather than against their current volume, arrive at scale without a rebuild. The 3PLs that buy for today rebuild twice on the way to 10,000.",
    },
    {
      t: "figure",
      src: "/assets/resources/figures/the-execution-gap-figure-06.webp",
      alt: "The five stages at a glance: how picking, inventory, carriers, pack and the tech backbone change at each volume tier",
      w: 1439,
      h: 1151,
    },
    {
      t: "p",
      text: "The matrix above is the field reference. Find your row, find your stage, see what is overdue. The notes below add only what the matrix cannot show.",
    },
    {
      t: "h3",
      text: "What deserves a closer look",
    },
    {
      t: "h3",
      text: "Order Management",
    },
    {
      t: "p",
      text: "A real OMS pulls orders from every channel into one queue, normalizes them, and applies business rules. Order hold for fraud checks. Consolidation for the same address. Splitting by carrier or inventory location. Backorder and pre-order handling. Without it, exceptions live in email.",
    },
    {
      t: "h3",
      text: "Batch and Wave Picking",
    },
    {
      t: "p",
      text: "Batch picking groups multiple orders into one pick walk, assigning each order to a tote position or a put-wall slot. Wave picking groups batches into coordinated releases timed against carrier cutoffs, pack capacity, and labor. Done right, batch and wave together raise units per hour by two to three times versus single-order picking.",
    },
    {
      t: "h3",
      text: "Pick Path Optimization",
    },
    {
      t: "p",
      text: "A good pick-path engine looks at the pick list, the warehouse map, the picker’s current position, and the downstream flow, and sequences picks to minimize total travel. It is more than nearest-next-item. It is routing that considers zones, put-wall slots, carton dimensions, and congestion. At 2,000 orders a day, the difference between naive routing and optimized routing is often two full-time equivalents of labor.",
    },
    {
      t: "h3",
      text: "Pick-to-Tote with Scan Verification",
    },
    {
      t: "p",
      text: "Every pick scanned against expected SKU, quantity, and tote position. Errors caught at the shelf, not at the pack station. Inventory decremented in real time. This is the foundation of any real fulfillment operation.",
    },
    {
      t: "h3",
      text: "Rate Shopping and Label Creation",
    },
    {
      t: "p",
      text: "Rate shopping decides, for every shipment, which carrier and service will deliver on time at the lowest real cost. Real cost means after accessorials, after dim-weight, against the 3PL’s or the client’s specific rate card, with surcharges current. A nightly rate update is not enough at Stage 4 and above. Once rate shopping has chosen, label creation prints the carrier label, any compliance labels, the packing slip per the brand’s template, and any inserts in the right order at the right station. If your packers are choosing which document to print, you have not yet automated this layer.",
    },
    {
      t: "h3",
      text: "Integration architecture",
    },
    {
      t: "p",
      text: "This is where B2B 3PLs most often underinvest. In B2B, a few EDI trading partners is enough. In fulfillment, you will touch five to ten shopping carts, ten or more carriers, several marketplaces, and at least one BI or client portal. The right architecture is integration-first. A platform with pre-built connectors, an EDI library for retail compliance, and an open API so unusual cases get handled in days instead of months.",
    },
    {
      t: "quote",
      text: "Integration breadth is what lets a 3PL onboard a new brand in a week instead of a quarter, and it is visible to prospects on the call.",
    },
    {
      t: "h3",
      text: "Multi-Client and Multi-Brand Architecture",
    },
    {
      t: "p",
      text: "Each brand’s orders, inventory, reporting, rate cards, and branded documents have to be distinct. The operator sees one floor and one set of waves. Each brand sees only their own data. If this is bolted on rather than designed in, every new client becomes a configuration tax.",
    },
    {
      t: "h3",
      text: "Real-Time Inventory",
    },
    {
      t: "p",
      text: "Inventory has to decrement at the scan, not at the end of the shift. Cycle counts run on exception and on schedule. The system has to support lots, serials, and expiry where relevant, because the moment you onboard a food, supplement, cosmetic, or regulated-goods brand, those become mandatory.",
    },
    {
      t: "h3",
      text: "Labor Management and Standards",
    },
    {
      t: "p",
      text: "Engineered standards per task. Picks per hour by zone. Packs per hour by line. Real-time tracking against standard. Dashboards that show variance. This is how a Stage 4 or 5 operation stays profitable. Without it, the P&L tells you about a problem 30 days after it started.",
    },
    {
      t: "h3",
      text: "Reporting and Client Portal",
    },
    {
      t: "p",
      text: "Brands at scale want visibility. A real client portal shows order status, inventory on hand and on order, SLA performance, returns, billing, and trends. Self-serve, real-time, branded. Brands that are not given transparency will ask for it constantly. Brands that are given it stay longer.",
    },
    {
      t: "h2",
      text: "Billing & Pricing: The Hidden Discipline",
    },
    {
      t: "p",
      text: "Billing is the heart of the whole 3PL world, B2B or fulfillment. The difference is that in B2B, billing is simple. In fulfillment, billing is where you either keep your margin or quietly hand it back.",
    },
    {
      t: "h3",
      text: "How B2B billing actually works",
    },
    {
      t: "p",
      text: "B2B has maybe four buckets. Receive a pallet, store it, ship it out, occasionally do something value-added like relabeling or de-stuffing a container. Storage might tier by duration. Pallet-out might flex depending on whether you ship as received or build a mixed pallet. Most operators have a rate card that fits on a page, and most clients are fine with that, because there is not enough variability to bill for.",
    },
    {
      t: "h3",
      text: "How fulfillment billing actually works",
    },
    {
      t: "p",
      text: "Fulfillment is the opposite. Every shrug becomes a line item, and the operators who do not see that lose money on shrugs.",
    },
    {
      t: "quote",
      text: "Every activity on the floor should map to a billable event. Every billable event should reconcile to contract.",
    },
    {
      t: "h3",
      text: "The pen example",
    },
    {
      t: "p",
      text: "Here is the example I use to make this concrete. Say you are picking pens. A hundred orders, one pen each. The pens come ten to a case. Your WMS does batch picking. Pickers grab ten cases, walk them back to the pack station, and sort the pens into a hundred individual shipments. The work is the same as if they had picked each pen individually. Now look at the billing. If you priced this as a case pick at four dollars, you bill forty dollars for the wave. If you priced it as an each-pick at one dollar, you bill a hundred. Same work. Different revenue. The pricing decision determined whether you captured your revenue or gave away 60 percent of it. Batch picking is an operations decision. Billing for what actually got picked is a business decision. People conflate the two and bill for the operational shortcut instead of the work performed.",
    },
    {
      t: "h3",
      text: "Everything else fulfillment quietly adds",
    },
    {
      t: "p",
      text: "Returns processing with quality checks. Branded inserts. Can you add this holiday flyer to every shipment? Sure. That flyer adds three or four seconds per order. It takes up space at the pack station. Someone has to keep enough of them stocked. None of that is free, and almost none of it gets billed. Run that math at a hundred orders a day across a month and the number is real.",
    },
    {
      t: "h3",
      text: "The integration myth",
    },
    {
      t: "p",
      text: "The other thing 3PLs miss is integration cost. I talk to operators all the time who tell me we have to pay $50 a month for the Shopify integration on our WMS, it is eating our margin. Fifty dollars a month is not eating your margin. It is a pass-through. Charge the client for it. That is standard. The fact that you are absorbing it tells me you have not thought of integrations as billable, and if you have not thought of integrations as billable, what else are you absorbing?",
    },
    {
      t: "h3",
      text: "The accessorial trap",
    },
    {
      t: "p",
      text: "Address corrections. Residential surcharges. Saturday delivery. Fuel adjustments. Peak surcharges. These show up on the carrier invoice every shipment, and most B2B-trained 3PLs let them sit on their own P&L instead of passing them through. Treat carrier accessorials as pass-through by default. The exceptions should be the small set you absorb intentionally as part of a competitive rate, not the entire list because the rate card never accounted for them.",
    },
    {
      t: "h3",
      text: "The right approach",
    },
    {
      t: "p",
      text: "Design the rate card with the same care as the operation. Price every activity. Reconcile every shipment. Pass through what should be passed through. Build the billing engine into the WMS so invoices are generated from actual floor data rather than rebuilt in a spreadsheet at month-end.",
    },
    {
      t: "quote",
      text: "A 3PL that bills accurately keeps its margin. A 3PL that bills approximately donates it.",
    },
    {
      t: "h2",
      text: "Labor At Scale",
    },
    {
      t: "p",
      text: "Labor is the topic most operators underestimate when they come from a B2B base. The reality is that e-commerce sees swings B2B never does.",
    },
    {
      t: "p",
      text: "Holiday season hits and you need another 20 people for six weeks. They work with you for that stretch and you may never see them again. One client runs a nationwide sale and an operation processing 2,000 orders a day suddenly has to process 10,000 in a day, or 10,000 across two days. I have seen this happen often. It is normal in fulfillment. It barely happens in B2B.",
    },
    {
      t: "p",
      text: "That changes how you think about staffing. You need reliable temp staffing partners, because sometimes you need 50 workers next week and sometimes you need them tomorrow. You need cross-training that is not optional. The institutional knowledge of which packer knows which client should not exist. And you need processes simple enough that you can pull someone off the street, walk them to a station, and have them picking orders inside an hour.",
    },
    {
      t: "p",
      text: "That last part is where technology earns its keep on the labor side. If your pick process requires a week of training, your peak season will be a fire drill every year. If the system directs the picker, lights tell them where to put it, and the scan catches errors before they leave the station, training collapses to a couple of hours.",
    },
    {
      t: "quote",
      text: "The technology is not replacing labor. It is making labor interchangeable, which is the only way you survive a 5x volume swing on two weeks of notice.",
    },
    {
      t: "h2",
      text: "Returns Are An Operation, Not An Afterthought",
    },
    {
      t: "p",
      text: "Returns are 15 to 30 percent of fulfillment volume in many categories. At low volume you can muscle through. At higher volume, returns stop being an afterthought and start being an operation.",
    },
    {
      t: "p",
      text: "The reason is what returns actually involve. A unit comes back. Someone has to inspect it. Depending on the product and the condition, the inspection has steps. Visual check. Functional check. Repackaging if the original is damaged. Relabeling if the product was opened. Restocking if it passes. Disposition routing if it does not. At scale, this is reverse manufacturing more than warehouse work. You are rebuilding sellable units.",
    },
    {
      t: "p",
      text: "That is why some brands run returns in a different building than fulfillment. The flow is different, the labor profile is different, the SOPs are different. Trying to do both above a certain volume creates more problems than it solves. Not every 3PL needs a separate facility. But at higher volumes, treating returns as a corner of the fulfillment floor is the same mistake as treating fulfillment as a corner of the B2B floor.",
    },
    {
      t: "p",
      text: "Plan for it early. A returns process designed after the fact is expensive to build and ugly to run. Plan for returns at Stage 2, not Stage 4. The build is much cheaper before you have ten brands with ten different return policies than after.",
    },
    {
      t: "h2",
      text: "Reading The Brand-Side Signals",
    },
    {
      t: "p",
      text: "Brands know they are outgrowing their 3PL before the 3PL knows. That is the part most operators miss.",
    },
    {
      t: "p",
      text: "The signs from the brand’s side are obvious to them. SLAs slipping. Support that used to be responsive going slower. They ask about running a sale and do not get the answer they need. They ask about an integration the 3PL does not have. They ask about EDI compliance for a retailer they just landed and the 3PL says we will figure it out. Each of those moments is a deposit in a jar marked find a new 3PL.",
    },
    {
      t: "p",
      text: "Here is the part that should keep operators up at night. I have worked on the brand side. Brands in the small-to-mid space, think e-commerce brands under $10 million in revenue, often do not tell their 3PL they are leaving. They cannot afford to. Their entire business depends on inventory sitting in that warehouse, and they do not want to spook the operator into deprioritizing them during the transition. So they shop quietly, line up a new partner, and move when they are ready.",
    },
    {
      t: "quote",
      text: "The 3PL finds out the customer is leaving on the day the customer is leaving.",
    },
    {
      t: "p",
      text: "Bigger brands behave differently. Their contracts and volumes give them more leverage, and the transition itself is harder to hide. But under $10 million, the silent exit is normal.",
    },
    {
      t: "p",
      text: "If you are losing brands at this size, the question is not why didn’t they tell us. The question is what were we missing two months ago that they were already noticing. The answer is usually some combination of the things in this paper. Integrations they needed.",
    },
    {
      t: "p",
      text: "EDI capability that was not ready. An SLA conversation that did not go well. Brands are not quiet because they do not care. They are quiet because they are protecting themselves. That is a healthy instinct on their side, and an early-warning system you have to build on yours.",
    },
    {
      t: "h2",
      text: "Picking & Switching A WMS",
    },
    {
      t: "p",
      text: "Changing your WMS is horrifying. There is no nice way to say it.",
    },
    {
      t: "p",
      text: "The first implementation probably took a year, and that is an understatement for some operators. I have seen companies that tried to build their own, spent a quarter million or half a million dollars on it, slowly came to realize they were turning into a technology company instead of a 3PL, and then had to switch anyway. After all that.",
    },
    {
      t: "p",
      text: "The mid-tier operators are the ones I feel for the most. You have spent two or three hundred thousand dollars on whatever you are running, plus a year or two getting it to a place where you can live with it. You do not love it. You live with it. And now someone is telling you to start over.",
    },
    {
      t: "quote",
      text: "The cost of staying shows up on the floor every day. The cost of switching shows up once.",
    },
    {
      t: "p",
      text: "It is like being in a relationship for five years and realizing it is not working. You do not leave. You put in another year trying to make it work. Then another. At some point, if it is not going to work, it is not going to work, and the years you spend in denial are years you do not get back.",
    },
    {
      t: "p",
      text: "Most 3PLs I talk to have also been burned at least once. False promises in the sales cycle, features that were not really features, implementations that ran double the timeline. By the time someone is on their second WMS conversation they have stopped believing demos. Which is rational. But it also keeps them stuck on a system that is actively costing them clients.",
    },
    {
      t: "p",
      text: "The honest answer to when is it time to switch is this: you already know. The operators who ask me know the answer before they ask. What they want is permission, or a roadmap, or someone to tell them it will not be as bad as last time. I cannot always tell them it will not be as bad. Sometimes it is. What I can tell them is to pull the band-aid off and stop fighting it.",
    },
    {
      t: "h3",
      text: "Everything else fulfillment quietly adds",
    },
    {
      t: "p",
      text: "Most 3PLs evaluate WMS for the stage they are in today. They are doing 200 orders a day, so they evaluate platforms against 200-orders-a-day requirements. Two years later they are at 2,000 orders a day and the system cannot carry them. So they switch. That is the story I keep hearing. The fix is to shop for where you are going. If your ambition is 10,000 orders a day across multiple facilities in three years, your evaluation criteria need to reflect that. There is a catch though. If you only shop for your future state, you will find platforms you cannot afford right now. So the real skill is balance. Find the system that handles where you are, can carry you to where you are going, and is itself on a growth path that matches yours. The WMS company that is stagnant today will not have built the features you need by the time you need them.",
    },
    {
      t: "quote",
      text: "Most 3PLs evaluate a WMS like they are buying a tool. You should evaluate it like you are picking a partner for the next decade.",
    },
    {
      t: "h2",
      text: "Common Pitfalls When Moving From B2B to Fulfillment",
    },
    {
      t: "p",
      text: "These are the mistakes I have seen most often in operations moving from a B2B base into fulfillment. Each one is preventable if recognized early.",
    },
    {
      t: "h3",
      text: '01. Using the B2B WMS for Fulfillment "Temporarily"',
    },
    {
      t: "p",
      text: "Temporary becomes eighteen months. A B2B WMS generally lacks piece-level picking, batch and wave logic, rate shopping, and the integration breadth fulfillment requires. By the time the team admits it, you have thousands of orders configured, clients depending on reports, and a conversion project that takes a year. Make the platform decision before Stage 2, not after.",
    },
    {
      t: "h3",
      text: "02. Mixing B2B and B2C Inventory in The Same Locations",
    },
    {
      t: "p",
      text: "In the short term, it saves space. In the medium term, it creates inventory drift, safety-stock confusion, and pick-error cascades. The moment fulfillment is a line of business, fulfillment inventory needs its own locations, its own replenishment triggers, and its own cycle-count schedule.",
    },
    {
      t: "h3",
      text: "03. Treating Pack Station Complexity As Tribal Knowledge",
    },
    {
      t: "p",
      text: "Every packer knows which carrier gets which insert. Until they do not, or one of them quits. Packer decisions should be system-directed by Stage 03. Every insert rule, every carrier rule, every box-size rule should be captured in configuration, not in the packer's head.",
    },
    {
      t: "h3",
      text: "04. Under-Investing in Integrations",
    },
    {
      t: "p",
      text: "Every custom connector is a future maintenance cost. Every missed API deprecation is a client outage. 3PLs that treat integration as a one-time cost find themselves with twenty fragile pipelines at Stage 04; 3PLs that treat it as a platform capability onboard brands in days.",
    },
    {
      t: "h3",
      text: "05. Rate Shopping As An Afterthought",
    },
    {
      t: "p",
      text: "A consistent 10 to 20 percent savings per shipment is available through real rate shopping. Without it, margin disappears invisibly. With it, margin becomes a competitive advantage that is hard to see from the outside and hard to replicate without the technology.",
    },
    {
      t: "h3",
      text: "06. Ignoring Returns Until They Become a Problem",
    },
    {
      t: "p",
      text: "Returns are 15 to 30 percent of fulfillment volume in many categories. A returns process designed after the fact is expensive to build and ugly to run. Plan for returns at Stage 2, not at Stage 4.",
    },
    {
      t: "h3",
      text: "07. Hiring Fulfillment Leaders Into a B2B-Shaped Organization",
    },
    {
      t: "p",
      text: "A dedicated fulfillment leader is essential from Stage 02 onward. Trying to run B2C out of B2B operations leadership, with B2B-trained supervisors, and B2B-trained labor, produces a B2B-shaped fulfillment operation, which is not a fulfillment operation.",
    },
    {
      t: "h3",
      text: "08. Underestimating How Long The Transition Will Take",
    },
    {
      t: "p",
      text: "This one is on me, from earlier in my career. I was leading a transition at a half-million square foot facility with about 50 clients on the floor. We planned it carefully. Two to three weeks of prep, then a transition window of about three and a half months. The plan was solid. I was confident. Three months in, the warehouse manager quit. A few weeks later, a third key employee left. Both of them, I think, did not want to live through the transition. Some people do not. Change is exciting if you are leading it. It is exhausting if you are being asked to do your normal job while everything around you is being rebuilt. That is when I learned how dependent the whole project was on people I had not planned to lose. We did not have cross-trained backups. The institutional knowledge walked out with them. The project went on hold while we hired and rebuilt. What was supposed to be three and a half months became roughly eleven. The lesson was not really about project planning. It was about buy-in. Management can pull a transition through on willpower for a while, but if the people doing the actual work have not bought into the vision, you are one resignation away from a stalled project. Get buy-in from every level. Cross-train before you think you need to. Assume that at least one key person will leave during the transition, because in a long enough project, one of them usually does.",
    },
    {
      t: "callout",
      title: "What the lesson costs you if you skip it",
      text: [
        "I scope projects differently now. The plan accounts for human variability the same way it accounts for technical risk, because in my experience the human variability is what actually breaks timelines.",
      ],
    },
    {
      t: "h2",
      text: "Readiness Checklist",
    },
    {
      t: "p",
      text: "A short self-assessment. Read the list for the stage you are about to move into not the stage you are in today.",
    },
    {
      t: "h3",
      text: "Moving Into Stage 02 (500 Orders/Day)",
    },
    {
      t: "list",
      items: [
        "Dedicated pick area separated from B2B.",
        "Batch-picking logic in the WMS, with scan verification.",
        "Pick-to-tote discipline: every pick is scanned, every tote is traceable.",
        "Rate shopping across at least three carriers.",
        "Multi-client architecture with separate orders, inventory, and reporting per brand.",
        "Flow rack or carton flow installed for top movers.",
        "A real returns workflow, even if small.",
      ],
    },
    {
      t: "h3",
      text: "Moving Into Stage 03 (2,000 Orders/Day)",
    },
    {
      t: "list",
      items: [
        "Wave planning tied to carrier cutoffs.",
        'Pick-path optimization, not just "nearest next location."',
        "Zone picking introduced where density supports it.",
        "Split pack lines by order class.",
        "API-first or EDI-templated integration: no more bespoke connectors.",
        "EDI flows for at least one retail-facing client.",
        "A billing engine that reconciles to contract per brand.",
        "Client portal with SLA visibility.",
      ],
    },
    {
      t: "h3",
      text: "Moving Into Stage 04 (5,000 Orders/Day)",
    },
    {
      t: "list",
      items: [
        "Continuous wave release with labor awareness.",
        "Pick-to-tote with downstream routing to the correct pack lane.",
        "Pack-by-scan with system-directed box and document selection.",
        "Weekly slotting review driven by velocity data.",
        "Labor management with engineered standards tracked in real time.",
        "Pick-to-light in the densest zones, put-to-light for batch consolidation.",
        "Rate shopping with accessorials, dim-weight, and account-level rates.",
        "Deep API and EDI breadth: five or more carts, ten or more carriers.",
      ],
    },
    {
      t: "h3",
      text: "Moving Into Stage 5 (10,000+ orders / day)",
    },
    {
      t: "list",
      items: [
        "Multi-tenant, fulfillment-native WMS.",
        "Real-time wave orchestration balancing inventory, labor, cutoffs, and SLAs.",
        "Put-walls or sortation for multi-line orders.",
        "Predictive labor planning tied to inbound forecasts.",
        "Full BI suite: cost per order, cost per pick, UPH by zone, perfect order rate.",
        "Open API for hours-not-weeks brand onboarding.",
        "Retail-compliance EDI library pre-built.",
        "Live rate shopping, not nightly.",
        "Hardware-agnostic integrations to MHE, conveyor, sortation, scale-in-motion.",
      ],
    },
    {
      t: "h2",
      text: "Closing Thoughts",
    },
    {
      t: "p",
      text: "The 3PLs that move well from a B2B base into fulfillment will own the next decade of third-party logistics. They have the buildings, the client relationships, the labor network, and the operational discipline.",
    },
    {
      t: "p",
      text: "What they have to build is the fulfillment-shaped version of themselves.",
    },
    {
      t: "p",
      text: "That build is a transformation, not a project. Process, people, physical setup, and technology have to move together.",
    },
    {
      t: "p",
      text: "A new WMS without a new floor plan fails. A new floor plan without a new labor model fails. New labor standards without new technology fail. The stages in this paper are a way of thinking about which piece has to move when.",
    },
    {
      t: "quote",
      text: "Stop treating fulfillment as a new service. Start treating it as a new company inside your company.",
    },
    {
      t: "quote",
      text: "Give it its own leadership, its own floor, its own processes, and its own technology. The economics reward that discipline, and the clients reward it more. I am always glad to compare notes with operators making this move. On any part of the journey.",
    },
    {
      t: "h2",
      text: "Where This Series Goes Next",
    },
    {
      t: "p",
      text: "This paper is the first in a series of operator-focused field guides for 3PLs scaling into fulfillment. Each future paper goes deeper on a topic introduced here. They are written to stand alone, and to function together as a complete operational reference.",
    },
    {
      t: "item",
      n: "02",
      title: "Pricing What Actually Got Picked",
      text: "The fulfillment billing and pricing playbook. Activity-based rate cards, accessorial pass-through, the pen example expanded across SKU classes, contract reconciliation against floor data, and the pricing mistakes that cost 3PLs the most margin.",
    },
    {
      t: "item",
      n: "03",
      title: "The Integration Moat",
      text: "API and EDI architecture as a competitive advantage. How leading 3PLs onboard brands in a week, what the right integration stack looks like at each volume stage, and why integration breadth beats integration depth for most operators.",
    },
    {
      t: "item",
      n: "04",
      title: "Labor That Survives a 5x Swing",
      text: "Cross-training, temp-staffing partnerships, peak-season planning, and the operational design choices that make labor interchangeable. How to build a workforce that can scale in days, not weeks.",
    },
    {
      t: "item",
      n: "05",
      title: "Why the WMS Always Goes First",
      text: "Picking, switching, and surviving a WMS transition. Vendor evaluation criteria, implementation pitfalls, the emotional math of leaving a system you have invested in, and the playbook for changing platforms without losing clients.",
    },
    {
      t: "item",
      n: "06",
      title: "Returns Are Reverse Manufacturing",
      text: "Designing a returns operation at scale. SOP libraries, brand-specific disposition rules, when to run returns in a separate building, and the technology that makes high-volume returns profitable.",
    },
    {
      t: "item",
      n: "07",
      title: "Reading the Brand-Side Signals",
      text: "How to detect a quiet exit before it happens. Early warning indicators, the conversations brands are having that you are not in, and the account-management practices that keep small-to-mid brands from leaving silently.",
    },
    {
      t: "item",
      n: "08",
      title: "The Fulfillment-Native 3PL",
      text: "Synthesis. What the 3PL of the next decade looks like, how to build toward it from a B2B base, and the leadership shifts that make the operational shifts possible.",
    },
    {
      t: "p",
      text: "If you would like to be notified as future papers are released, follow vikrantneb.com or connect on LinkedIn.",
    },
    {
      t: "h2",
      text: "About the Author",
    },
    {
      t: "p",
      text: "Vikrant Neb is an industrial engineer who has spent his career around operations. He has run e-commerce companies, led manufacturing operations through Kurieta during his consulting years, and worked with 3PLs across the full range of volumes and transitions covered in this paper.",
    },
    {
      t: "p",
      text: "He is the founder of Leanafy, a warehouse management system built specifically for 3PL operators, and Kurieta Operations Consulting. His book, Execution Under Pressure: The Hidden Reasons Why 3PLs Stop Growing and How to Fix Them, came out in 2026. He hosts the Execution at Scale podcast and splits his time between Indianapolis and Vancouver.",
    },
    {
      t: "p",
      text: "This paper covers one slice of his work, the move from B2B into fulfillment. He is always glad to compare notes with operators making this move, and on the other things that come up around it.",
    },
    {
      t: "p",
      text: "vikrantneb.com · linkedin.com/in/vikrant-neb",
    },
  ],
  "every-line-on-the-invoice": [
    {
      t: "callout",
      title: "White Paper",
      text: [
        "Every Line on the Invoice",
        "What 3PLs Charge For, and Why Each Charge Exists",
        "The charges you will find across B2B warehousing, cross-dock and e-commerce fulfillment, the different ways operators package them, and whether the cost behind your rates is one you can actually prove.",
        "Authored By: Vikrant Neb · Author — Execution Under Pressure | Founder & CEO — Leanafy & Kurieta",
        "Companion to Paper 02 · 25 min read",
      ],
    },
    {
      t: "table",
      title: "Invoice · Month-end · illustrative",
      rows: [
        ["Inbound receipt, 4 ASNs", "Touches", "$62.00"],
        ["Pallet storage, 42 positions", "Space", "$840.00"],
        ["Order fee, 1,282 orders", "Touches", "$3,525.50"],
        ["Additional units picked", "Touches", "$1,546.90"],
        ["Store integration, monthly", "Systems", "$150.00"],
        ["Mailers and dunnage", "Materials", "$769.20"],
        ["Parcel postage, cost plus", "Materials", "$9,412.18"],
        ["Receiving without ASN", "Exceptions", "$50.00"],
        ["**Total due**", "", "**$16,355.78**"],
      ],
    },
    { t: "note", text: "Illustrative figures. Not any operator’s rates." },
    {
      t: "ul",
      items: [
        "**Space** Rent and racking. The footprint a client occupies or reserves.",
        "**Touches** Labor every time a person or machine handles the product.",
        "**Systems** Software, integrations, support, account management, billing itself.",
        "**Materials** What the 3PL buys on the client’s behalf, from boxes to postage.",
        "**Exceptions** Work caused by something not going to plan.",
      ],
    },
    { t: "h2", text: "Why This Paper" },
    {
      t: "quote",
      text: "“A rate card is a list of prices. An invoice is a list of events. The margin lives in the gap between the two.”",
    },
    { t: "by", text: "Vikrant Neb" },
    {
      t: "p",
      text: "In the last paper I argued that you should price the work you actually do, not the work you assumed at onboarding. The most common question I got back was a simpler one: what should the work actually be priced as? What do other operators put on the invoice, and why?",
    },
    {
      t: "p",
      text: "This paper is the reference that goes underneath that argument. It lays out the charges you will find across B2B warehousing, cross-dock and e-commerce fulfillment, the different ways operators package them, and the reason each charge exists in the first place. Then it asks the harder question underneath every rate: is the cost behind it one you can actually prove?",
    },
    {
      t: "p",
      text: "I built it from real rate cards, proposals and monthly invoices from several 3PLs in the United States and Canada, shared with me for this purpose. No operator or client is named, and no real rate is quoted as theirs. Where I show numbers, they are illustrative ranges to make the math readable, not a price list.",
    },
    {
      t: "p",
      text: "I wrote it for two readers. The operator building or revisiting a rate card, and the brand trying to read one.",
    },
    {
      t: "callout",
      title: "The Short Version",
      text: [
        "Every charge on a 3PL invoice exists to recover one of five things: space, touches, systems, materials, or exceptions. Pricing models differ in how they package those five, not in whether they recover them. A model that looks cheaper has usually moved a cost into a line you are not looking at. A rate is only as good as the cost behind it, and that cost has to be recorded, attributed and earned by an efficient operation. And the best rate card in the world only earns what the operation actually records.",
      ],
    },
    { t: "h2", text: "The Five Things Every Charge Recovers" },
    {
      t: "p",
      text: "Strip away the labels and every line on every invoice I looked at is trying to recover one of five costs. Operators name them differently, split them differently and bundle them differently. The five underneath do not change.",
    },
    {
      t: "table",
      head: ["What it recovers", "What drives the cost", "Where it shows up on the invoice"],
      rows: [
        [
          "Space",
          "Rent, racking, the footprint a client occupies or reserves",
          "Pallet, bin, shelf, square-foot or cubic-foot storage; dedicated space; pick-face fees",
        ],
        [
          "Touches",
          "Labor every time a person or machine handles the product",
          "Receiving, put-away, picking, packing, pallet handling in and out, labeling, returns",
        ],
        [
          "Systems and admin",
          "Software, integrations, customer service, account management, billing itself",
          "Setup, monthly platform or portal fees, per-integration fees, EDI, hourly CSR and account management",
        ],
        [
          "Materials",
          "What the 3PL buys on the client’s behalf",
          "Boxes, dunnage, pallets, shrink wrap, parcel postage, freight",
        ],
        [
          "Exceptions",
          "Work caused by something not going to plan",
          "Non-compliant receipts, rework, special projects, aging inventory, late payment, missed appointments",
        ],
      ],
    },
    {
      t: "p",
      text: "The first two are where most operators focus. The last three are where most margin quietly leaks, because they are the ones most often absorbed instead of billed.",
    },
    {
      t: "p",
      text: "Keep this table in mind for the rest of the paper. Every model that follows is a different answer to the same question: which of these five do we show as separate lines, and which do we fold into something else?",
    },
    { t: "h2", text: "Anatomy of a Real Quote" },
    {
      t: "p",
      text: "One of the proposals I reviewed still had the 3PL’s working notes sitting in the margin beside the rates. The client never saw them. They are the most honest part of the document.",
    },
    {
      t: "p",
      text: "Next to the rate card were four numbers: annual rent, annual salaries, annual transport cost, and a staffing plan. One full-time person in the slow months. Three during the four-month peak. Every rate on the page had been backed out of those numbers.",
    },
    {
      t: "p",
      text: "That is what a quote really is underneath. It has three layers, and they produce the fourth thing, the one the client signs.",
    },
    {
      t: "steps",
      items: [
        {
          n: "Layer 1",
          title: "Cost base",
          text: "What the building, the people and the systems cost to run for this client.",
        },
        {
          n: "Layer 2",
          title: "Volume model",
          text: "Unit × assumed annual quantity × rate, rolled up to one annual figure.",
        },
        {
          n: "Layer 3",
          title: "Assumptions",
          text: "SKU count, inventory range, order mix, peak, cutoff, an expiry date.",
        },
        { n: "Result", title: "Rate card", text: "What the client signs, and all they ever see." },
      ],
    },
    {
      t: "p",
      text: "The proposal stated its assumptions plainly: the SKU count, an inventory range from low season to peak, the split between B2B and B2C orders, a same-day cutoff, a note that inventory could vary by fifteen percent, and a date the pricing expired.",
    },
    {
      t: "p",
      text: "The third layer is the one that matters later. A rate card is only fair for as long as its assumptions hold. When the SKU count doubles, when the peak moves, when the order split flips from wholesale to direct-to-consumer, the rates are still on the page but the math underneath them is gone. That is attribute drift, from the last paper, seen from the quoting side.",
    },
    {
      t: "quote",
      text: "If your quote does not write down its assumptions, you have nothing to reopen when they stop being true.",
    },
    {
      t: "p",
      text: "Two habits separate the operators who handle this well. They write the assumptions into the proposal where the client signs, not in an internal spreadsheet. And they put an expiry date on the pricing, so a review is scheduled rather than negotiated.",
    },
    { t: "h2", text: "Can You Stand Behind Your Quote?" },
    {
      t: "p",
      text: "A quote you can defend is built on a cost you can prove. Most 3PLs cannot prove theirs, and it is rarely because they are careless.",
    },
    {
      t: "p",
      text: "There is no standard costing model for warehousing. Almost every operator has built their own, usually in a spreadsheet, shaped by whoever built it and by the assumptions they made at the time. It works for the person who built it. Anyone else inherits assumptions they cannot see. So before asking whether your price is right, it is worth asking whether the cost model underneath it is.",
    },
    {
      t: "p",
      text: "The starting point needs no software. Take the last twelve months of your income statement and ask, line by line, which of these costs are fixed and which are truly variable.",
    },
    { t: "h3", text: "Fixed, variable, and the costs in between" },
    {
      t: "table",
      head: ["Type", "How it behaves", "Examples", "How it reaches a rate"],
      rows: [
        [
          "Fixed",
          "Stays the same whether the building is busy or quiet",
          "Rent, property tax, racking, WMS license, salaried management",
          "Spread across pallet positions, square feet or clients",
        ],
        [
          "Variable",
          "Rises and falls with every unit of work",
          "Hourly labor, temp labor, packaging, per-transaction software fees",
          "Priced per touch: per receipt, pick, order, pallet",
        ],
        [
          "Step",
          "Flat until a threshold, then jumps",
          "A supervisor per crew, a second shift, more square footage, a new WMS, automation, rented equipment for peak",
          "Usually missed, because it only appears when volume crosses a line",
        ],
      ],
    },
    {
      t: "p",
      text: "Fixed cost has one property that catches operators out: its cost per unit depends on how full the building is. Take an illustrative building costing $900,000 a year to run, with 10,000 pallet positions. Move the slider.",
    },
    { t: "exhibit", id: "invoice-a" },
    {
      t: "p",
      text: "The pallet did not change. The building got emptier, and every remaining pallet carries more of the rent. That is the expansion trap from the last paper, expressed as a unit cost.",
    },
    { t: "h3", text: "Cost climbs in steps. Volume climbs in a line." },
    {
      t: "p",
      text: "Volume grows more or less smoothly, a few hundred orders more each month. Fixed cost does not. It sits flat while the current setup absorbs the growth, then jumps when something has to be added to keep up. Some steps are operating costs: a second shift, another supervisor, more square footage. Some are capital: a new WMS when the old one cannot keep up, put-to-light or conveyor when manual picking hits its ceiling, racking for the new space. Capital steps tend to be the steepest, because the whole investment lands before the volume that justifies it.",
    },
    { t: "exhibit", id: "invoice-b" },
    {
      t: "p",
      text: "The second chart is the one that matters for pricing. Fixed cost per order falls while volume fills the current step. Then the next step arrives and it jumps back up. More volume lowers your unit cost only while it is filling the step you already paid for.",
    },
    {
      t: "p",
      text: "That changes the answer to the most common request in a renewal: we are growing, so give us a better rate. Growth does not automatically earn a discount. It depends on where the client’s volume lands. Growth that fills existing capacity can fund a lower rate. Growth that forces the next step, a new shift, more space, a system or automation built for this client, has to pay for that step first. Two practical habits follow:",
    },
    {
      t: "ul",
      items: [
        "**Know where the next step is before you price the growth.** If a client’s forecast pushes you past it, price the step into the rate, or into a separate charge, before you agree to it.",
        "**Match capital recovery to the contract.** An investment made for one client should be recovered over that client’s contract term, with an early-exit clause that covers what is left if they leave before payback. Otherwise the step stays on your books after the volume that justified it has gone.",
      ],
    },
    { t: "h3", text: "Four questions before you trust the number" },
    {
      t: "item",
      n: "01",
      title: "Is the cost recorded?",
      text: "Labor hours coded to the client and the activity, not just to the building. Exceptions logged when they happen. And the hours nobody is paid for, which the book put at over $20,000 a year for an owner spending three hours a day covering gaps at thirty dollars an hour. If it is not recorded, it is not in the cost, and the price built on it is too low.",
    },
    {
      t: "item",
      n: "02",
      title: "Is it attributed to the right place?",
      text: "Shared costs should follow the activity that causes them, not revenue. Allocating overhead by revenue share makes large, simple accounts look expensive and small, complicated accounts look cheap, which is the averages problem from the last paper in another form. Most cost models assume an average travel distance across the building. For the building as a whole, that average holds. But if the only open space for your newest client is at the far end from receiving, every put-away and pick for that client takes far longer than the model assumed, and the rate card never knows.",
    },
    {
      t: "item",
      n: "03",
      title: "Is the operation efficient enough to justify it?",
      text: "A cost can be recorded perfectly and still be the wrong cost to price from. Small gaps compound with volume. A few extra seconds per order that nobody notices at a hundred orders a day become real money at a thousand. If your pickers do sixty picks an hour where a well-slotted operation does ninety, building the quote from your cost hands your inefficiency to the client. They will find a 3PL who does not. The LED client in the last paper was exactly this: the cost was real, but it came from a layout problem, not the work.",
    },
    {
      t: "item",
      n: "04",
      title: "Does it hold at the volume you quoted?",
      text: "Step costs arrive at thresholds. Utilization moves with every client who arrives or leaves. A cost that was true at 70 percent full is not true at 95 or at 50.",
    },
    { t: "exhibit", id: "invoice-c" },
    {
      t: "p",
      text: "The exhibit shows why the third question matters. At an illustrative $26 an hour fully loaded, a picker doing 30 picks an hour costs more per pick than the top of the market range. At 90 an hour, the same picker costs less than the bottom of it. The rate card is the same in both buildings. The margin is not.",
    },
    { t: "h3", text: "Cost plus, or market rate? Market first, then prove your cost fits under it" },
    {
      t: "p",
      text: "So is a quote really cost plus profit? For most standard services, the market sets the price far more than your cost does. So work top-down. Take what the market pays for a pallet position in your area and what your building actually costs you. Work out how many positions you need, and how full they must be, before you break even. Then ask whether you can tolerate how long it takes to get there.",
    },
    {
      t: "p",
      text: "Your cost does not change what clients will pay. A building rented at the top of the market, or equipment far beyond what the work needs, raises your cost without raising the price anyone will accept. The real question becomes: if the price is X, what has to be true about my cost for the margin to be acceptable?",
    },
    {
      t: "p",
      text: "The market is not one number either. When I shopped 3PLs as a brand, I saw neighbors in the same area charging eight, twelve and eighteen dollars for the same storage. Some of that spread is service and location. A lot of it is operators who do not know their true cost.",
    },
    {
      t: "p",
      text: "So the market sets the ceiling, and your true cost, run through the four questions above, sets the floor. Your price lives between the two, and where you are in that gap tells you what to do.",
    },
    {
      t: "ul",
      items: [
        "**The market is well above your cost.** Price to the market, not to cost plus a margin. Pure cost-plus pricing here leaves money on the table for no reason.",
        "**The market is close to your cost.** You will not win on price alone. There has to be another reason the client picks you: speed, accuracy, a capability, a relationship.",
        "**The market is below your cost.** First ask the third question. If your cost is high because the operation is inefficient, fix the operation. If the operation is genuinely efficient and the market still pays less, redesign the service or walk away from the account.",
        "**There is no market reference.** Custom projects, kitting, unusual compliance work. Here cost plus margin is the honest method, as long as the cost passed the four questions.",
      ],
    },
    {
      t: "quote",
      text: "A quote you can stand behind is one you would be comfortable walking the client through, line by line, if they asked to audit it.",
    },
    {
      t: "p",
      text: "That is the real test. Not whether the price wins the deal, but whether you can explain what drives every rate on it, show that the cost behind it was recorded and attributed honestly, and show that your operation earns it.",
    },
    { t: "h2", text: "B2B Warehousing: Pallets In, Pallets Out" },
    {
      t: "p",
      text: "B2B warehousing has the oldest and simplest pricing in the industry, and it has survived because it maps cleanly onto the work. Product arrives on pallets, sits on pallets, and leaves on pallets or cases. The rate card follows the pallet.",
    },
    { t: "p", text: "One Midwest account I reviewed was billed on exactly six lines:" },
    {
      t: "table",
      head: ["Charge", "Unit", "What it recovers", "Bucket"],
      rows: [
        [
          "Inbound order charge",
          "Per receipt",
          "Dock appointment, paperwork, system entry, the first touch",
          "Systems",
        ],
        ["Inbound pallet handling", "Per pallet in", "Unload, verify, label, put away", "Touches"],
        [
          "Initial storage",
          "Per pallet, on arrival",
          "The first storage period, charged the moment the pallet lands",
          "Space",
        ],
        [
          "Recurring storage",
          "Per pallet, per month",
          "Rent for everything still in the building on the billing date",
          "Space",
        ],
        ["Outbound pallet handling", "Per pallet out", "Retrieve, stage, load", "Touches"],
        ["Outbound order charge", "Per order", "Order entry, bill of lading, carrier coordination", "Systems"],
      ],
    },
    {
      t: "p",
      text: "The inbound and outbound rates were identical. That is common and deliberate. Handling in and handling out are priced as mirror images, so the client pays for the round trip whether the pallet stays a week or a year.",
    },
    { t: "h3", text: "Initial and recurring storage" },
    {
      t: "p",
      text: "The split between initial and recurring storage is the part most brands do not understand, and it matters more than the rate itself. Initial storage is charged when the pallet arrives. Recurring storage is charged on everything in the building at the start of each new period.",
    },
    {
      t: "p",
      text: "Most operators soften the initial charge with a split-month rule. A pallet received before the 15th pays a full month. A pallet received on or after the 15th pays half. The account above ran exactly that rule, and so did the billing setup behind it.",
    },
    {
      t: "p",
      text: "Here is what that does to a fast-moving account. In one month, that same client received roughly 540 pallets and shipped roughly 510. The initial storage charge on the pallets that arrived brought in more revenue than the recurring charge on the pallets that stayed. On freight that turns quickly, the storage money is earned at the dock, not in the rack.",
    },
    { t: "quote", text: "On fast-turning freight, the storage revenue is in the arrival, not the stay." },
    { t: "h3", text: "Dedicated space" },
    {
      t: "p",
      text: "The other B2B model is dedicated space. The client reserves a block of pallet positions or square feet, sized for their peak, and pays a flat monthly amount whether it is full or empty. One public warehousing agreement I reviewed billed storage as a single fixed monthly figure for a set block of square footage, with handling priced per case and per pallet on top. The proposal I described earlier did the same, sizing space for a peak of roughly three and a half times the low-season inventory. The client pays for the peak all year. In exchange, the space is guaranteed to be there when the peak arrives.",
    },
    { t: "h3", text: "Retail compliance" },
    {
      t: "p",
      text: "Once B2B orders go to large retailers, a new layer appears: EDI connections for purchase orders, advance ship notices and invoices, carrier-specific labeling, pallet builds to a routing guide, and delivery appointments. These are billed as setup fees per trading partner, monthly EDI fees, per-label fees and a flat retail order fee. The reason they exist is the retailer’s chargeback program. Every mislabeled carton or late ASN comes back to the brand as a deduction, and the 3PL is paid to prevent that.",
    },
    {
      t: "note",
      text: "Illustrative ranges only, not a quote, and highly dependent on market and volume: pallet storage from roughly $15 to $40 per pallet per month; pallet handling from roughly $4 to $12 per pallet each way; case picks from roughly $1 to $3.50 per case; EDI setup from roughly $500 to $2,500 per trading partner. Coastal and port markets sit at the high end. Inland markets sit at the low end.",
    },
    { t: "h2", text: "Cross-Dock and Transload: Pricing Speed" },
    {
      t: "p",
      text: "Cross-dock is the one service where the client is paying you not to store anything. Freight comes in one door and leaves by another, ideally the same day. So the pricing drops the space bucket almost entirely and charges for touches and dock time.",
    },
    { t: "p", text: "Operators price it in one of four units:" },
    {
      t: "ul",
      items: [
        "**Per pallet**, for clean, palletized freight that only needs to be moved from one trailer to another.",
        "**Per load or per container**, a flat fee for the whole unload and reload, when the freight profile is predictable.",
        "**Per hour**, when the work is sorting, re-palletizing or building mixed loads and the effort varies with every shipment.",
        "**Per carton**, for small or mixed freight that has to be broken down.",
      ],
    },
    { t: "p", text: "Two terms decide whether a cross-dock account makes money." },
    {
      t: "p",
      text: "**Free time.** Most cross-dock pricing includes a window, often a day or two, during which freight can sit on the floor at no extra charge. After that, staging is charged per pallet per day. Transload, which involves consolidating or re-sorting before the freight leaves, usually sits between cross-dock and storage: a per-container fee plus daily staging once free time runs out. Free time is where cross-dock quietly becomes warehousing without anyone repricing it.",
    },
    {
      t: "p",
      text: "**Floor-loaded versus palletized.** A floor-loaded container is unloaded by hand, carton by carton, and it ties up a door and a crew for hours. One rate card I reviewed charged a flat fee per floor-loaded container, by container length, on top of the hourly receiving labor, specifically to cover the dock time and the pallets needed to build the freight up. A palletized trailer can be cleared in a fraction of that time. If both are quoted at the same per-pallet rate, one of them is losing money.",
    },
    {
      t: "note",
      text: "Illustrative ranges only: same-day cross-dock at roughly $250 to $450 per standard container; transload with a few days of staging at roughly $350 to $650 per container, plus roughly $2 to $6 per pallet per day after free time; per-pallet cross-dock from roughly $5 to $30 depending on labor and market.",
    },
    { t: "h3", text: "When cross-dock quietly becomes storage" },
    {
      t: "p",
      text: "Picture a cross-dock account priced per pallet with two days of free time. For the first few months it runs as designed. Freight lands in the morning and leaves the same afternoon. Then the client’s outbound pickups start slipping. A day here, two days there. Pallets begin sitting four and five days, then a week before a full load is ready.",
    },
    {
      t: "p",
      text: "Nobody changes the pricing, because nothing in the operation was tracking how long each pallet sat on the floor. The dock doors reserved for same-day turns become a staging area. Inbound freight for other clients waits for space. The operator is now running a storage account, in the most expensive square footage in the building, at a cross-dock rate.",
    },
    {
      t: "p",
      text: "The fix is not a new rate. It is a clock. Every cross-dock pallet timestamped in and out, and staging billed from the first hour after free time ends. The rate card already allowed for it. The operation just never recorded it.",
    },
    { t: "h2", text: "E-Commerce: Five Ways to Charge" },
    {
      t: "p",
      text: "E-commerce is where pricing models multiply, because the work is small, repetitive and highly variable from one order to the next. The same five buckets are still underneath. What changes is how many lines the client sees.",
    },
    { t: "h3", text: "A typical e-commerce rate card, line by line" },
    {
      t: "p",
      text: "Pulling together the e-commerce rate cards and invoices I reviewed, a full a la carte rate card usually carries most of these lines. The last column is the part nobody puts on the rate card: where each line tends to lose money.",
    },
    {
      t: "table",
      head: ["Charge", "Unit", "What it recovers", "Where it goes wrong"],
      rows: [
        [
          "Setup and onboarding\nSystems",
          "One time",
          "Account setup, SKU load, integration testing, training",
          "Discounted to win the deal; the real onboarding hours are never recovered",
        ],
        [
          "Store or marketplace integration\nSystems",
          "Monthly, per connection",
          "Keeping each sales channel connected",
          "The client adds a new channel and the fee never follows",
        ],
        [
          "Platform or portal fee\nSystems",
          "Monthly or weekly",
          "Software, client visibility, support",
          "Extra users, reports and custom requests creep in at no charge",
        ],
        [
          "Receiving\nTouches",
          "Per receipt, plus per carton or unit",
          "Count, verify, label, put away",
          "Loose cartons, mixed SKUs and missing ASNs take hours that a per-receipt fee never covers",
        ],
        [
          "Storage\nSpace",
          "Per bin, shelf, pallet or cubic foot",
          "Space",
          "Slow SKUs sit in prime pick locations at the same rate as fast ones",
        ],
        [
          "Order fee\nTouches",
          "Per order",
          "Order release, packing slip, label, first carton",
          "Treated as all-in, so extra cartons and special packing ride along free",
        ],
        [
          "Pick fee\nTouches",
          "Per additional unit or line",
          "Each extra walk and reach",
          "Bundles and promotions push units per order up while the quote assumed one",
        ],
        [
          "Packaging and materials\nMaterials",
          "Per box, or cost plus a markup",
          "Boxes, mailers, dunnage",
          "Vendor prices rise and the rate card does not",
        ],
        [
          "Inserts and custom packing\nTouches",
          "Per order or per unit",
          "Extra touches at the pack station",
          "Marketing adds them after go-live and nobody adds a line",
        ],
        [
          "Returns\nTouches",
          "Per return, plus per unit restocked",
          "Receive, inspect, restock or dispose",
          "Priced as a token fee when a real inspection takes minutes",
        ],
        [
          "Postage\nMaterials",
          "Carrier cost plus a markup",
          "Parcel shipping",
          "Address corrections and carrier surcharges absorbed instead of passed on",
        ],
        [
          "Peak or rush\nExceptions",
          "Per order surcharge, or a seasonal rate",
          "Overtime, temp labor, extended shifts",
          "Not written into the contract before Q4, so it cannot be charged in Q4",
        ],
        [
          "Monthly minimum\nSpace",
          "Per month",
          "The fixed cost of carrying a small account",
          "Waived to win the client and never reinstated",
        ],
      ],
    },
    {
      t: "p",
      text: "Every line maps back to one of the five buckets. And notice where the right-hand column concentrates: almost none of the leakage is in the order fee everyone negotiates. It is in receiving, returns, materials, inserts and the lines that were waived to close the deal.",
    },
    { t: "h3", text: "One order, priced a la carte" },
    {
      t: "p",
      text: "To see how the lines stack, build an order. The default is three units of two SKUs, shipped in a mailer with a marketing insert.",
    },
    { t: "exhibit", id: "invoice-d" },
    {
      t: "p",
      text: "On an all-inclusive rate of $3.50, the default order collects a dollar less for the same work. A single-unit order with no insert comes to $3.35 a la carte, so the all-inclusive rate collects fifteen cents more. That is the whole trade between the first two models below, in one order.",
    },
    { t: "h3", text: "1. A la carte" },
    {
      t: "p",
      text: "Every activity is its own line. This is the most common model and the one that tracks the work most closely. The fulfillment fee alone is usually built in layers, and every rate card I reviewed layered it slightly differently:",
    },
    {
      t: "ul",
      items: [
        "a fee **per order**, for the order record, the packing slip, the label and the carton;",
        "a fee **per line or distinct SKU**, because every additional location is another walk;",
        "a fee **per unit**, because every additional piece is another reach;",
        "sometimes a fee **per box or master pack**, when one order ships in several cartons.",
      ],
    },
    {
      t: "p",
      text: "One operator went a step further and priced the unit by its unit of measure: one rate for an each, a higher rate for an inner pack, another for a case. Another priced **unaltered** cases and pallets separately, meaning sealed cases or full pallets that leave untouched. That single definition matters more than it looks, and I will come back to it in the section on where invoices break.",
    },
    { t: "h3", text: "2. All-inclusive per order" },
    {
      t: "p",
      text: "One rate per order covers pick, pack and standard materials, sometimes more. The client gets a number they can budget. The operator carries the risk that orders get bigger, heavier or more complicated. Published comparisons put all-inclusive pricing roughly 15 to 25 percent above the equivalent a la carte bill, which is the price of that risk.",
    },
    { t: "h3", text: "3. Two fees" },
    {
      t: "p",
      text: "A fulfillment fee per order and a storage fee by cubic foot, and nothing else. Some network fulfillment models have run this way. It is simple for the brand and forces the operator to price materials, labor and systems into one number.",
    },
    { t: "h3", text: "4. Flat fee, storage free while it turns" },
    {
      t: "p",
      text: "A single per-order fee, no storage charge at all, on one condition: the inventory keeps moving. Once product sits past a set age, it starts paying storage, and the charge steps up the longer it stays. The largest marketplace fulfillment networks run a version of this logic, with aging surcharges that start around six months and climb from there. For the operator, the model only works if the aging penalty is real and enforced. Without it, free storage becomes a warehouse full of someone else’s dead stock.",
    },
    { t: "h3", text: "5. Flat monthly fee" },
    {
      t: "p",
      text: "A fixed monthly amount for an agreed scope, sometimes with a volume band and an overage rate above it. It is common with smaller brands and with brands whose volume is steady. The operator is selling capacity, not transactions. It works until the scope drifts and nobody reopens the band.",
    },
    { t: "h3", text: "When the model does not match how the client moves" },
    {
      t: "p",
      text: "Each of these models is built around an assumption about how inventory will behave. The margin depends on the client behaving that way.",
    },
    {
      t: "p",
      text: "In the book I described a 3PL doing about two million dollars a year that took on two early-stage e-commerce clients. The pricing was built on high storage and low activity charges, the right structure for slow, steady inventory. These clients turned inventory fast. They generated pick fees, pallet-in fees and labor the contract did not cover, and the two accounts lost about five thousand dollars a month.",
    },
    {
      t: "p",
      text: "The repricing conversation kept getting put off, because they were growing clients. Then Q4 arrived, both scaled, and those two accounts lost twelve and a half thousand dollars in a single quarter. A business that should have made around one hundred and fifty thousand dollars that year on its other accounts barely broke even. Nothing about the rate card was wrong on paper. It was the wrong model for how those clients moved.",
    },
    {
      t: "p",
      text: "The flat monthly fee fails the same way in the other direction. Picture a brand signed at a flat monthly amount for a band of around two thousand orders. A year later it ships four thousand, with more SKUs and heavier multi-unit orders. The fee is unchanged, because the overage clause was written but never triggered. The client feels they have a fair deal. The operator is doing double the work for the same fee.",
    },
    {
      t: "p",
      text: "The free-storage model has its own version: a catalog that moved fast at signing slows down, the aging threshold is written in the contract, and nobody enforces it because the client is otherwise easy to work with. Twelve months later, the fastest pick zone in the building is holding someone else’s slow stock for free.",
    },
    {
      t: "note",
      text: "Illustrative ranges only: a la carte fulfillment commonly lands around $2 to $3.50 for the first item in an order plus roughly $0.30 to $0.75 per additional item; one industry survey put the average B2C pick-and-pack fee near $3.20 per order before storage and materials.",
    },
    { t: "h2", text: "Storage Is Not One Charge" },
    {
      t: "p",
      text: "Storage looks like the simplest line on the invoice. It is actually two decisions: what unit you charge by, and how you count it. Two operators can quote the same rate and send very different invoices because they made those two decisions differently.",
    },
    { t: "h3", text: "What you charge by" },
    {
      t: "p",
      text: "Across the rate cards and invoices I reviewed, I found at least five storage units in use, sometimes three of them on the same client’s invoice:",
    },
    {
      t: "table",
      head: ["Unit", "Best fit", "Watch out for"],
      rows: [
        ["Per pallet position", "Uniform, palletized B2B inventory", "Half-empty pallets billed as full ones"],
        ["Per bin or shelf, by size", "Small, high-velocity e-commerce SKUs", "Who decides which size a SKU needs"],
        [
          "Per square or cubic foot",
          "Mixed sizes, oversized items, high SKU counts",
          "Measuring it consistently month to month",
        ],
        [
          "Pick face versus backstock",
          "Operations with a forward pick area fed from reserve",
          "Whether moving stock between them is billed",
        ],
        ["Dedicated space", "Seasonal peaks the client needs guaranteed", "Paying for peak capacity all year"],
      ],
    },
    {
      t: "p",
      text: "One of those invoices charged the client for the order preparation area itself, by the square foot, as a separate storage line. It is a fair charge. That space is reserved for one client’s packing and it is rent the operator pays.",
    },
    {
      t: "p",
      text: "The billing period varies too. Most operators bill monthly. One rate card I reviewed billed every storage type weekly: small, medium and large bins, pickable pallets and backstock pallets, each at its own weekly rate. Weekly billing tracks real usage more closely and makes most of the next argument disappear.",
    },
    { t: "h3", text: "How you count it" },
    { t: "p", text: "There are three common ways to turn a storage rate into a monthly charge:" },
    {
      t: "ul",
      items: [
        "**Snapshot.** Count what is in the building on one day and bill the whole month on that count.",
        "**Anniversary.** Each pallet gets its own clock from the day it arrives and pays a full period regardless of when it leaves.",
        "**Daily proration.** Each pallet pays for the days it actually occupied space.",
      ],
    },
    {
      t: "p",
      text: "One operator published a worked example that shows why this matters. Same rate, same month, same inventory movements. Depending only on which day the snapshot was taken, the storage bill ranged from $875 to $1,500.",
    },
    { t: "exhibit", id: "invoice-e" },
    {
      t: "quote",
      text: "Two operators can quote the same rate and send invoices that differ by half. The rate card shows the rate. It does not show the counting rule.",
    },
    {
      t: "p",
      text: "None of these methods is dishonest. Each one fits a different operation. Snapshot is simple to administer. Anniversary protects the operator on fast-turning inventory. Daily proration tracks real use most closely but needs a system that knows where every pallet was every day. The mistake is not choosing one. The mistake is not writing down which one you use.",
    },
    { t: "h2", text: "The Hourly Layer" },
    {
      t: "p",
      text: "Every rate card I reviewed had a section of hourly rates. It is where operators put the work that is real but too irregular to price per unit.",
    },
    { t: "p", text: "The hourly layer was usually tiered by who does the work:" },
    {
      t: "ul",
      items: [
        "warehouse labor for special projects, rework and returns processing;",
        "consolidation and replenishment;",
        "inventory counts requested by the client;",
        "customer service time;",
        "supervision, account management and project management;",
        "IT and custom development.",
      ],
    },
    {
      t: "p",
      text: "Each tier carried its own rate, rising from floor labor to IT. The logic is straightforward. A client who needs weekly calls, custom reports and proforma invoices is consuming management time, and that time costs more than a picker’s.",
    },
    { t: "h3", text: "Two operators, one activity, opposite answers" },
    { t: "p", text: "Replenishment is the clearest example of how differently operators think about the same work." },
    {
      t: "callout",
      title: "Operator A",
      text: [
        "**Bill it by the hour**",
        "Replenishment and consolidation billed hourly. On one client’s invoice, those hours were among the largest labor lines on the page. Many SKUs in small pick locations, fed from bulk pallets, forced constant moves, and the operator billed every one.",
      ],
    },
    {
      t: "callout",
      title: "Operator B",
      text: [
        "**Build it into storage**",
        "The rate card stated plainly that pick face replenishment had no cost to the client. The labor was recovered through two storage rates: a higher weekly rate for a pickable pallet on the floor, a lower one for backstock in the racks.",
      ],
    },
    {
      t: "p",
      text: "Both approaches are defensible. The first puts the cost exactly where it is caused and lets the client see what their SKU profile does to the floor. The second gives the client a simpler, more predictable bill and protects the operator as long as the storage rates were set with replenishment in mind. The dangerous version is a third one: replenishment is neither billed nor built into anything else. It simply disappears into overhead.",
    },
    {
      t: "p",
      text: "The same pattern showed up with inventory counts. One operator performed routine monthly cycle counts at no charge and billed full counts by the hour only when the client asked for one. Routine work is built into the rates. Work done on request is billed separately. That is a clean line, and it is worth copying.",
    },
    { t: "h2", text: "Pass-Throughs: Where Revenue and Margin Part Ways" },
    {
      t: "p",
      text: "On several of the monthly invoices I reviewed, freight was the largest line on the page. On some, it was larger than every warehouse charge combined. That is the first thing to understand about pass-throughs: they make a 3PL’s revenue look much bigger than the business it actually runs.",
    },
    {
      t: "p",
      text: "Three things get passed through most often: parcel postage, LTL and truckload freight, and packaging materials. Operators recover their cost, and sometimes a margin, in different ways:",
    },
    {
      t: "table",
      head: ["Approach", "How it works", "What it tells you"],
      rows: [
        [
          "Cost plus a markup",
          "Carrier or vendor cost plus a fixed percentage, commonly around 10 to 15 percent",
          "Margin scales with spend, visible to the client",
        ],
        [
          "Cost plus a service fee",
          "Freight billed at cost, with a flat fee per booking",
          "Margin moves from the markup into a service line",
        ],
        [
          "Price list by item",
          "Each box size or material priced as its own line",
          "Easy to audit, needs updating when vendor prices move",
        ],
        [
          "Management fee",
          "A percentage added as a separate line on top of materials",
          "Honest about the margin, invites negotiation",
        ],
        [
          "Credits",
          "Carrier rebates or negotiated discounts shown as negative lines",
          "Shows the client the operator is sharing savings",
        ],
      ],
    },
    {
      t: "p",
      text: "One rate card I reviewed did something subtle. It billed parcel at cost plus ten percent and materials at the operator’s own vendor pricing plus ten percent, but billed LTL and truckload freight at straight cost, with a flat fee every time the operator booked a load. The margin did not disappear. It changed form, from a percentage that grows with the freight bill into a fixed fee for the work of booking it.",
    },
    { t: "quote", text: "Pass-through revenue is not margin. Know what your business looks like with it taken out." },
    {
      t: "p",
      text: "Two cautions. First, if pass-throughs are a large share of revenue, a rising top line can hide a flat or shrinking warehouse business. Report both. Second, packaging is often priced once and never updated. Box prices rise, the per-box line on the rate card does not, and a pass-through quietly becomes a subsidy. On two invoices from the same operator, the same box size was priced differently for different clients, which is fine if it is a decision and a problem if it is an accident.",
    },
    { t: "h2", text: "Terms, Discounts and Fees That Shape Behavior" },
    { t: "p", text: "Some of the most important pricing on a 3PL rate card is not a rate at all." },
    { t: "h3", text: "What gets discounted, and what does not" },
    {
      t: "p",
      text: "One rate card I reviewed printed three columns for every line: the standard rate, the negotiated discount, and the rate after discount. Reading down the discount column tells you exactly how that operator thinks about margin.",
    },
    {
      t: "ul",
      items: [
        "**Discounted, some by as much as half:** the per-order fee, the per-item fee and the storage rates. These scale with volume, so they are where the operator competes.",
        "**Held at zero discount:** receiving, labeling, bagging, pallet prep, freight prep, returns and every penalty fee. These pay for specific extra work, so the operator will not trade them away.",
        "**Marked not negotiable:** setup, the platform fee, user logins, EDI, custom development, and the markups on parcel and materials.",
      ],
    },
    {
      t: "p",
      text: "That is a margin policy, written into the rate card. Printing the standard rate next to the discount does something else as well. It keeps the list price visible on every invoice, so when the contract is renewed, the conversation starts from the real rate and not from the discounted one.",
    },
    {
      t: "p",
      text: "Volume discounts deserve one more check before they go on any rate card. As the cost section showed, cost rises in steps. A tiered discount that drops the rate at every volume band assumes cost per unit keeps falling. It does not, at least not right after each step. Set the tiers where the volume actually fills capacity you already have, not at round numbers.",
    },
    { t: "h3", text: "Fees that exist to change behavior" },
    { t: "p", text: "Several charges I found were not really there to earn money:" },
    {
      t: "ul",
      items: [
        "a penalty for a delivery that arrives without a scheduled appointment;",
        "a fee when the 3PL has to enter a receipt the client should have entered;",
        "a charge for receiving without an advance ship notice;",
        "a zero-dollar line for freight that arrives with no receipt in the system, whose only purpose is to state that the receiving service level no longer applies.",
      ],
    },
    {
      t: "p",
      text: "The receiving fee on that same rate card was designed the same way. The per-receipt fee covered the first hour of labor. Additional hours were billed only when the shipment broke the receiving guidelines. A client who ships clean freight never sees the hourly line. A client who does not, pays for it. The price is teaching the client how to ship.",
    },
    { t: "quote", text: "A good penalty fee is one the client never pays, because it changed what they did." },
    { t: "h3", text: "Technology: three different models" },
    {
      t: "p",
      text: "The three operators priced technology three different ways. One charged a one-time integration fee plus a flat monthly portal and support fee. One charged a monthly fee per integration, plus a monthly WMS fee, and passed through the EDI network and shipping-label software as separate lines. The third charged a weekly platform fee, a monthly fee per additional user login, a per-user fee for its customer messaging channel, EDI connections sold in bundles of five, and custom work by the hour. All three are reasonable. What matters is that the systems bucket is recovered somewhere, and that it grows when the client adds integrations.",
    },
    { t: "h3", text: "Commercial terms are pricing too" },
    {
      t: "p",
      text: "The invoices and proposals also carried terms that move real money: setup fees, monthly minimums, net payment terms, a credit limit, a surcharge on card payments, a higher fee on late invoices, a pricing expiry date, and, for one operator with a second facility across the border, rates adjusted for the exchange rate. None of these appear in a per-order comparison. All of them show up in cash flow.",
    },
    { t: "h2", text: "Where the Invoice Breaks" },
    {
      t: "p",
      text: "A rate card is a list of prices. An invoice is a list of events. Between the two sits the thing that actually decides what you earn: how each charge gets triggered.",
    },
    { t: "p", text: "Every charge, in any billing system, from a WMS to a spreadsheet, has the same anatomy:" },
    {
      t: "steps",
      items: [
        { n: "1", title: "Trigger", text: "What fires it" },
        { n: "2", title: "Condition", text: "Pallet or bin, B2B or B2C, before or after the 15th" },
        { n: "3", title: "Unit", text: "Per pallet, order, line, each" },
        { n: "4", title: "Rate", text: "The number everyone negotiates" },
        { n: "5", title: "Billing period", text: "When it lands on the invoice" },
      ],
    },
    {
      t: "p",
      text: "The rate is the part everyone negotiates. The trigger is the part that decides whether the rate is ever collected. In practice there are three kinds of trigger, and each one fails in its own way.",
    },
    {
      t: "table",
      head: ["Trigger", "Examples", "How it fails", "The safeguard"],
      rows: [
        [
          "Fires from a warehouse event",
          "Pallet received, order shipped, unit picked",
          "Bills what was scanned, not the work that was done",
          "Clear unit definitions, and a review of unusual volumes before invoicing",
        ],
        [
          "Entered by a person",
          "Labels applied, pallets shipped, boxes used, project hours",
          "If nobody enters it, it is never billed",
          "A checklist tied to the work order, closed before the job is",
        ],
        [
          "Fixed and recurring",
          "Platform fee, integration fee, monthly minimum",
          "Forgotten, or never updated when scope grows",
          "A scheduled review of every recurring line against current scope",
        ],
      ],
    },
    { t: "h3", text: "The correction log" },
    {
      t: "p",
      text: "One Midwest operator sent me several months of billing files, and each came with a tab of manual corrections, every one with a written reason. Every correction on that tab came from the same problem: what the system recorded was not the work that was actually done.",
    },
    {
      t: "table",
      rows: [
        [
          "**Over-billed**",
          "More than 7,000 unit picks billed on an order that was really full pallets shipped untouched, corrected by roughly $1,800.",
          "Event",
        ],
        [
          "**Nearly never billed**",
          "Over 1,600 label fees and 1,250 case picks for a marketplace shipment, added back more than a month later.",
          "Entered by a person",
        ],
        [
          "**Under-billed**",
          "Nearly fifty pallets for an outbound marketplace shipment staged on the floor into the next month, outside any storage location, so the system never charged storage until they were billed by hand.",
          "Event",
        ],
        [
          "**Over-billed**",
          "A receipt billed as 42 pallets that was really 42 cases, inflating handling and storage.",
          "Event",
        ],
        ["**Over-billed**", "Internal replenishment transfers charged to the client as customer orders.", "Event"],
      ],
    },
    {
      t: "p",
      text: "Two things stand out. The first is that the errors ran in both directions. A billing system that over-charges is a customer audit waiting to happen. One that under-charges is margin you earned and never collected.",
    },
    {
      t: "p",
      text: "The second is who fixed them. Every one of those corrections was made by a person, weeks after the month closed. That is the hidden labor I wrote about in the book: cost that sits on nobody’s P&L line because it is absorbed by someone’s extra hours.",
    },
    { t: "h3", text: "The definition that would have prevented the biggest one" },
    {
      t: "p",
      text: "The full-pallet correction is the pen example from the last paper in reverse. There, the same labor produced two different bills depending on how the rate card was written. Here, a pallet that left the building untouched was billed as though every unit had been picked by hand. The rate card I described earlier, with a separate rate for unaltered cases and pallets, would have billed that order correctly the first time. One definition on the rate card, and the correction never happens.",
    },
    { t: "quote", text: "The rate card only earns what the system actually records." },
    { t: "h3", text: "Drift, seen from the billing side" },
    {
      t: "p",
      text: "The billing setup behind that operator’s invoices showed one more thing. One client carried seventeen separate charge lines, and their start dates were spread across more than a year. The order fee came first. Then boxes and outbound pallets. Then storage, receiving, returns and the store integration. Then a labeling service specific to that client. The shipping-label software fee arrived a year into the relationship. The same setup charged B2B and B2C orders the identical order fee, even though the work behind them is different.",
    },
    {
      t: "p",
      text: "Nothing about that is wrong. It is how accounts grow. But it means the pricing on a mature account was never designed as a whole. It was assembled one line at a time, and nobody has looked at all seventeen lines together since. That is attribute drift from the last paper, visible in the billing setup itself.",
    },
    { t: "h2", text: "What Each Model Rewards and Punishes" },
    {
      t: "p",
      text: "There is no correct pricing model. There is only a model that fits a particular operation and a particular client, and one that quietly does not. The table below is how I would read any rate card before signing it, from either side of the table.",
    },
    {
      t: "table",
      head: ["Model", "Rewards", "Punishes", "Where the margin leaks"],
      rows: [
        [
          "Pallet in, pallet out with initial and recurring storage",
          "Predictable B2B freight, clean receipts",
          "Brands that turn inventory quickly and feel they pay storage twice",
          "Floor-staged or unlocated pallets that never trigger storage",
        ],
        [
          "Dedicated space",
          "Clients who need peak capacity guaranteed",
          "Clients whose peak shrinks after signing",
          "Space sized for a peak that no longer comes",
        ],
        [
          "A la carte fulfillment",
          "Accurate cost recovery, activity-level visibility",
          "Clients who want one number to budget",
          "Charges nobody enters, units that are defined loosely",
        ],
        [
          "All-inclusive per order",
          "Brands with stable, simple orders",
          "The operator, when order size or complexity grows",
          "Rising units per order, heavier items, extra materials",
        ],
        [
          "Flat fee, storage free while it turns",
          "Fast-moving catalogs",
          "Slow or seasonal inventory",
          "Aging penalties that are written down but never enforced",
        ],
        [
          "Flat monthly fee",
          "Steady-volume clients, simple billing",
          "Clients with seasonal swings",
          "A volume band nobody reopens as the account grows",
        ],
        [
          "Replenishment billed hourly",
          "Operators whose clients have complex SKU profiles",
          "Clients who cannot predict the bill",
          "Hours that are worked but never logged",
        ],
        [
          "Replenishment built into storage",
          "Clients who value a predictable bill",
          "The operator, if storage rates ignored it",
          "A SKU profile that changes after the rate was set",
        ],
      ],
    },
    {
      t: "p",
      text: "Notice that every row has a leak, and nearly every leak is the same shape as the ones in the last paper: an assumption made at signing that nobody checks again.",
    },
    { t: "h2", text: "What To Do This Week" },
    {
      t: "p",
      text: "The last paper ended with a five-point pricing gut check. This one ends with a rate card gut check. It takes an afternoon, and it works whether you run the warehouse or buy from one.",
    },
    {
      t: "item",
      n: "01",
      title: "Sort every line into the five buckets.",
      text: "Space, touches, systems, materials, exceptions. Any bucket with no lines in it is being absorbed somewhere. Find out where.",
    },
    {
      t: "item",
      n: "02",
      title: "Write down the counting rules.",
      text: "For storage: snapshot, anniversary or daily, and what happens mid-month. For picks: what counts as an each, a case and an unaltered pallet. If it is not written down, it is not agreed.",
    },
    {
      t: "item",
      n: "03",
      title: "Check the trigger on your ten largest charges.",
      text: "Does it fire from a scan, depend on someone entering it, or recur on a schedule? For each one, name the safeguard.",
    },
    {
      t: "item",
      n: "04",
      title: "Open last month’s corrections.",
      text: "Count them, sort them by direction and by trigger, and estimate the hours spent making them. That number is the cost of your billing process, and it is probably not on anyone’s P&L.",
    },
    {
      t: "item",
      n: "05",
      title: "Pull your oldest account’s rate card and read every line together.",
      text: "When was each one added? Does the whole still describe the work you do for that client today?",
    },
    {
      t: "item",
      n: "06",
      title: "Rebuild one rate from scratch.",
      text: "Pick your most common charge, usually the pick or the order fee. Work out its true cost from recorded hours, attributed overhead and today’s utilization. Then compare it to what you charge and to what the market pays. If you cannot build it, that is the finding.",
    },
    {
      t: "p",
      text: "None of this changes a single rate. It tells you whether the rates you already have are being collected, and whether they still describe the work.",
    },
    { t: "h2", text: "Closing Thoughts" },
    {
      t: "p",
      text: "Every 3PL invoice is an argument about five things: space, touches, systems, materials and exceptions. The models differ in how they package that argument. Some show every line. Some fold everything into one number. Some give storage away and charge for time instead. None of them is wrong, and none of them is safe on its own.",
    },
    {
      t: "p",
      text: "What decides the margin is rarely the rate. It is whether the rate card writes down its assumptions and its counting rules, whether every charge has a trigger someone trusts, and whether anyone reads the whole thing again after the account has grown.",
    },
    { t: "p", text: "**Price the work. Then make sure the work is what gets recorded.**" },
    { t: "quote", text: "I am always glad to compare notes on rate cards, from either side of the table." },
    { t: "h2", text: "Where This Series Goes Next" },
    {
      t: "p",
      text: "This is a companion to the second paper in a series of operator-focused field guides for 3PLs scaling into fulfillment.",
    },
    {
      t: "item",
      n: "03",
      title: "The Integration Moat",
      text: "API and EDI architecture as a competitive advantage. How leading 3PLs onboard brands in a week, what the right integration stack looks like at each volume stage, and why integration breadth beats integration depth for most operators.",
    },
    {
      t: "item",
      n: "04",
      title: "Labor That Survives a 5x Swing",
      text: "Cross-training, temp-staffing partnerships, peak-season planning, and the design choices that make labor interchangeable.",
    },
    {
      t: "item",
      n: "05",
      title: "Why the WMS Always Goes First",
      text: "Vendor evaluation, implementation pitfalls, and surviving a WMS transition without losing clients.",
    },
    {
      t: "item",
      n: "06",
      title: "Returns Are Reverse Manufacturing",
      text: "Designing a returns operation at scale, and the technology that makes high-volume returns profitable.",
    },
    {
      t: "item",
      n: "07",
      title: "Reading the Brand-Side Signals",
      text: "How to detect a quiet exit before it happens.",
    },
    {
      t: "item",
      n: "08",
      title: "The Fulfillment-Native 3PL",
      text: "Synthesis. What the 3PL of the next decade looks like.",
    },
    { t: "h2", text: "About the Author" },
    {
      t: "p",
      text: "Vikrant Neb is an industrial engineer who has spent his career around operations. He has run e-commerce companies, led manufacturing operations through Kurieta during his consulting years, and worked with 3PLs across the full range of volumes and transitions covered in this series.",
    },
    {
      t: "p",
      text: "He is the founder of Leanafy, a warehouse management system built specifically for 3PL operators, and Kurieta Operations Consulting. His book, Execution Under Pressure: The Hidden Reasons Why 3PLs Stop Growing and How to Fix Them, came out in 2026. He hosts the Execution at Scale podcast and splits his time between Indianapolis and Vancouver.",
    },
    {
      t: "p",
      text: "This paper covers one slice of his work, what 3PLs charge for and why. He is always glad to compare notes with operators and brands working through a rate card.",
    },
    {
      t: "p",
      text: "[vikrantneb.com](https://vikrantneb.com) · [linkedin.com/in/vikrant-neb](https://www.linkedin.com/in/vikrant-neb)",
    },
    {
      t: "p",
      text: "Want a copy to keep or forward? [Download the paper](/assets/resources/every-line-on-the-invoice.pdf).",
    },
    { t: "h3", text: "Sources for illustrative figures" },
    {
      t: "p",
      text: "Real rate cards, proposals and invoices were shared privately and are not cited. Public figures used for illustration came from these pages, accessed September 2026:",
    },
    {
      t: "ul",
      items: [
        "[Warehouse storage and handling benchmarks](https://www.buske.com/blog/how-3pl-pricing-works-a-complete-guide)",
        "[3PL fee benchmarks and survey averages](https://www.fulfill.com/3pl-pricing)",
        "[B2B and retail compliance pricing](https://www.fulfill.com/3pl/specialty/b2b-retail)",
        "[Cross-dock and transload costs](https://www.freightfigures.com/articles/transload-cross-dock-port-of-charleston)",
        "[All-inclusive versus transactional pricing](https://rushorder.com/blog/how-much-does-a-3pl-cost)",
        "[Storage billing methods compared](https://thrive3pl.com/blog/3pl-billing-methodology-comparison/)",
        "[Marketplace aged inventory surcharge](https://www.inventoryhero.ai/guides/amazon-aged-inventory-surcharge-2026)",
        "[Initial and recurring storage, split-month billing](https://www.browndistribution.com/blog/how-does-storage-pricing-work-in-a-3pl-warehouse)",
      ],
    },
  ],
  "every-minute-on-the-floor": [
    {
      t: "callout",
      title: "White Paper",
      text: [
        "Every Minute on the Floor",
        "What Each Client Actually Costs to Serve",
        "How to record who did what, and when, in a building where people move between clients all day. How to set the standard behind every handling rate. And how to check the floor against the quote, client by client, before the renewal does it for you.",
        "Authored By: Vikrant Neb · Author — Execution Under Pressure | Founder & CEO — Leanafy & Kurieta",
        "Companion to Paper 02 · 25 min read",
      ],
    },
    {
      t: "table",
      title: "Shift log · One picker · first 90 min · illustrative",
      rows: [
        ["07:00", "Start-up meeting", "Shared", "Indirect", "12 min"],
        ["07:12", "Build cart, 6 totes", "Beauty brand", "Setup", "7 min"],
        ["07:19", "Pick 6 orders, 14 units", "Beauty brand", "Direct", "22 min"],
        ["07:41", "Drop totes at pack", "Beauty brand", "Wrap-up", "4 min"],
        ["07:45", "No scan recorded", "Nobody, yet", "Filler", "8 min"],
        ["07:53", "Pallet jack and empty pallet", "Candy brand", "Setup", "4 min"],
        ["07:57", "Pick 1 order, 40 cases", "Candy brand", "Direct", "19 min"],
        ["08:16", "Wrap, label, stage at door", "Candy brand", "Wrap-up", "5 min"],
        ["08:21", "Clean spill, aisle 4", "Shared", "Indirect", "9 min"],
        ["**Paid minutes**", "", "", "", "**90 min**"],
      ],
    },
    { t: "note", text: "Beauty 33 · Candy 28 · Shared 21 · Unexplained 8. Illustrative, not any operator’s data." },
    {
      t: "ul",
      items: [
        "**Direct** Hands on the client’s product. The work the rate card describes.",
        "**Setup** Getting ready for the next task. Belongs to the client you are about to work for.",
        "**Wrap-up** Finishing the last task. Belongs to the client you just worked for.",
        "**Indirect** Meetings, cleaning, breaks, training. Shared, and spread by a rule you write down.",
        "**Filler** Paid time with nothing recorded. Not a cost to allocate. A question to answer.",
      ],
    },
    { t: "h2", text: "Why This Paper" },
    {
      t: "quote",
      text: "“Every rate on a rate card is a guess about minutes. The floor keeps the real count. Most operators never put the two side by side.”",
    },
    { t: "by", text: "Vikrant Neb" },
    {
      t: "p",
      text: "The pricing gut check at the end of Paper 02 started with a simple ask: rank your accounts by revenue, then estimate what each one actually costs to serve. If you cannot do it at all, that is the finding. The companion paper asked the same thing a different way: is the cost behind your rate recorded, coded to the client and the activity, not just to the building?",
    },
    {
      t: "p",
      text: "Both papers pointed at the same gap and stopped there. Paper 02 called it a lack of a mechanism. This paper is the mechanism.",
    },
    {
      t: "p",
      text: "It covers four things. Where the standard behind a handling rate comes from. How to record who did what, and when, in a building where the same person works for three clients before lunch. How to compare what the floor actually did with what the quote assumed. And what to do with the gap once you can see it, during the contract and at renewal.",
    },
    {
      t: "p",
      text: "I wrote it for operators running more than one kind of work under one roof: e-commerce, pallet in and pallet out, cross-dock, kitting and contract packing. The method is the same for all of them. The unit of work changes.",
    },
    {
      t: "p",
      text: "One caveat before we start. This is a framework, not a checklist. A 3PL in its first year in a hundred-thousand-square-foot building and an operator doing a hundred million in revenue will not apply it the same way. The larger operator may have engineers, a labor system and contracts with review clauses. The smaller one may have a spreadsheet and a supervisor with a good memory. Both can start. They will start in different places.",
    },
    {
      t: "callout",
      title: "The Short Version",
      text: [
        "A quote is a hypothesis. It assumes how long each activity takes, what each client’s orders look like, and how much volume will come. The floor tests that hypothesis every day, but in a multi-client building nobody reads the result, because labor is recorded for the building and not for the client. Record who did what, when and for whom. Assign the time between tasks by a rule. Compare each client’s minutes with the minutes you priced. The gap tells you whether the problem is volume, mix, productivity or work you never billed, and each one has a different fix.",
      ],
    },
    { t: "h2", text: "The Quote Is a Hypothesis" },
    {
      t: "p",
      text: "The companion paper took a quote apart into three layers: a cost base, a volume model and a set of assumptions. Every handling rate sits on all three, and underneath it is one more number nobody prints on the proposal. Minutes.",
    },
    {
      t: "p",
      text: "A pick fee of fifty cents is really a statement like this: a unit takes about this many seconds to pick, a fully loaded hour costs about this much, and the order profile will look the way the client described it. Change any of those three and the fifty cents means something else.",
    },
    {
      t: "steps",
      items: [
        {
          n: "Input 1",
          title: "Minutes per unit",
          text: "The standard. How long the work should take, with an allowance.",
        },
        { n: "Input 2", title: "Cost per hour", text: "Fully loaded labor, on the same hour basis as the standard." },
        {
          n: "Input 3",
          title: "The profile",
          text: "Units and lines per order, case weight, volume. What the client said.",
        },
        { n: "Result", title: "The rate", text: "A cost per unit, plus margin. Only true while all three hold." },
      ],
    },
    {
      t: "p",
      text: "The first thing to settle is the unit of work, because it changes by business type. Orders per hour means something for a skincare brand. It means very little for a client shipping forty-case pallets to a grocery chain.",
    },
    {
      t: "table",
      head: ["Business type", "Unit of work", "What drives the minutes"],
      rows: [
        [
          "E-commerce",
          "Orders, lines and units",
          "Lines per order (each line is a walk), units per order (each unit is a reach), packaging and inserts",
        ],
        [
          "B2B, pallet in and out",
          "Pallets in and out, cases picked",
          "Floor-loaded versus palletized, case weight, mixed versus single-SKU pallets, retail labeling",
        ],
        [
          "Cross-dock",
          "Pallets or cartons touched, time on the floor",
          "Breakdown and sort, how long freight sits before it leaves",
        ],
        [
          "Kitting and co-pack",
          "Kits or units built, by work order type",
          "Components per kit, setup per run, run length",
        ],
      ],
    },
    { t: "h3", text: "Two clients, one building" },
    {
      t: "p",
      text: "To keep this concrete, the rest of the paper follows two illustrative clients through the same building. Neither is real. The numbers are rounded to make the math readable.",
    },
    {
      t: "table",
      head: ["As quoted", "The beauty brand", "The candy brand"],
      rows: [
        ["Channel", "E-commerce, direct to consumer", "B2B, cases to regional retailers"],
        ["Volume", "About 12,000 orders a month", "About 30,000 cases a month, roughly 750 orders"],
        [
          "Profile",
          "2 lines and 3 units per order, small items, one mailer",
          "8 lines and 40 cases per order, one pallet out, best-before tracked",
        ],
        ["Unit of work", "Orders", "Cases"],
        ["Labor", "$26 an hour fully loaded, for both. Same people, same building, same shift."],
      ],
    },
    {
      t: "p",
      text: "Same building, same people, same hourly cost. Two completely different kinds of work. If the only number you track is total labor hours against total volume, these two clients are invisible inside each other.",
    },
    { t: "h2", text: "Where the Standard Comes From" },
    {
      t: "p",
      text: "A standard is the time an activity should take, done the agreed way, by a trained person, with an allowance for the things that happen to every person on every shift. There are three ways to get one, and most operators only use the last.",
    },
    {
      t: "table",
      head: ["Method", "How it works", "Strength", "Watch out for"],
      rows: [
        [
          "Engineered",
          "Break the task into small motions and add up published times for each. Industrial engineers use systems such as MTM and MOST for this.",
          "Holds up when someone asks you to explain the number. Can be built before the client ever ships.",
          "Takes skill and time. Assumes the job is done the designed way.",
        ],
        [
          "Your own history",
          "Units done divided by hours spent, from your own floor, on similar work.",
          "Real. Your building, your people.",
          "Includes every bad habit and badly slotted aisle you already have.",
        ],
        [
          "Estimate",
          "Someone experienced says what it should take.",
          "Fast. Often close for familiar work.",
          "Nobody can say where it came from a year later.",
        ],
      ],
    },
    {
      t: "p",
      text: "You do not need a motion study for every activity. You need to know which of the three your number came from, and write it down next to the number. A standard you cannot explain is an opinion.",
    },
    { t: "h3", text: "The allowance" },
    {
      t: "p",
      text: "No one works at the pace of a stopwatch for eight hours. Every standard adds an allowance on top of the task time, for personal needs, fatigue and small unavoidable delays. Fifteen percent is a common starting point. Heavier work, colder rooms and longer reaches get more. The allowance is part of the hypothesis too, and later in this paper we will measure it by client.",
    },
    { t: "h3", text: "Building the beauty brand’s standard" },
    {
      t: "p",
      text: "Here is the quoted standard for one beauty order, built from rounded seconds per step. It is not a science project. It is five or six steps per activity, each with a number someone can argue with. Move the sliders to see what happens when the order profile changes after signing.",
    },
    { t: "exhibit", id: "floor-a" },
    {
      t: "p",
      text: "At the quoted profile, an order takes about 107 seconds of pick and pack time, or roughly 34 orders per productive hour. Push the profile to the kind of bundled orders a brand starts sending after a promotion, and the same rate card is describing a very different amount of work.",
    },
    { t: "h3", text: "Building the candy brand’s standard" },
    {
      t: "p",
      text: "The candy brand is built the same way, in cases instead of orders. Two things change. The unit of work is the case, because a forty-case order and a twelve-case order are not the same work. And the allowance is higher, because lifting cases all shift is more tiring than picking lipsticks.",
    },
    { t: "exhibit", id: "floor-b" },
    {
      t: "p",
      text: "Every row in both tables is an assumption. Twenty-five seconds of travel per line assumes the candy sits where the quote assumed it would sit. Four seconds per beauty unit assumes the shades are slotted so pickers are not squinting at near-identical labels. When those assumptions break, the floor will tell you. The question is whether anyone is listening.",
    },
    { t: "h3", text: "The hour basis trap" },
    {
      t: "p",
      text: "One mistake is common enough to call out on its own. A standard is measured in productive time, the minutes someone is actually on a task. Labor cost is paid by the hour, and paid hours include meetings, breaks, cleaning and everything else that is not a task. If you divide a paid-hour cost by a productive-hour standard, you underprice every unit.",
    },
    {
      t: "table",
      head: ["Beauty order, at quote", "Labor per order"],
      rows: [
        ["$26 a paid hour ÷ 33.7 orders per productive hour", "$0.77"],
        ["Same, with only 85% of paid hours on measured work", "$0.91"],
        ["**Underpriced on every order**", "**15%**"],
      ],
    },
    {
      t: "p",
      text: "Pick one basis and state it next to every standard. Productive hours with the non-task share loaded into the cost, or paid hours with it loaded into the standard. Either works. Mixing them does not.",
    },
    { t: "h2", text: "Why the Floor Never Matches" },
    {
      t: "p",
      text: "The day a client goes live, the standard and the floor start to separate. Not because anyone did anything wrong. Because a warehouse with more than one client does not work the way a standard imagines.",
    },
    {
      t: "ul",
      items: [
        "**People move between clients.** A picker finishes a beauty batch, helps load a candy truck, then cleans an aisle. Each switch carries a few minutes nobody priced.",
        "**Tasks interleave.** A forklift driver puts away for one client and picks for another on the same trip. Good for the building. Hard to split.",
        "**Setup and wrap-up are real work.** Building a cart, finding a pallet jack, dropping totes at pack. They rarely appear in a standard and always appear on the floor.",
        "**The profile drifts.** Units per order climb with bundles and promotions. Case weights change with a new product line. SKU counts grow.",
        "**The process changes.** A client adds a sample, a thank-you card or a new label. Each one is a new step at the pack station.",
        "**Volume moves.** Up with a sale, down when a retailer drops the line. In Execution Under Pressure I described a 3PL that onboarded an e-commerce client with a backlog of about thirty thousand orders, against a normal pace of five to six hundred a day. No standard survives that intact.",
      ],
    },
    {
      t: "p",
      text: "Picture the beauty brand three months in. Marketing starts adding a sample sachet to every order. The account manager says yes on a call. Nobody updates the standard and nobody adds a line to the rate card. It is three seconds an order. At twelve thousand orders a month, it is ten hours of labor a month that the quote never saw, and it will not show up anywhere unless the pack step is timed.",
    },
    {
      t: "quote",
      text: "A standard does not tell you what happened. It tells you what you assumed would happen. You need both numbers.",
    },
    { t: "h2", text: "Who Did What, and When" },
    {
      t: "p",
      text: "Everything in this paper depends on one habit: every task records who did it, for which client, when it started and when it ended.",
    },
    {
      t: "p",
      text: "Most of this can come from scans the floor already makes. A picker scans an order to start and a location to finish. A receiver opens and closes a receipt. The timestamps are already there. What is usually missing is the work between scans, and the rules for whose time it is.",
    },
    { t: "h3", text: "What to record" },
    {
      t: "p",
      text: "Start with the activities that carry most of your hours. For most operators that is receiving, put-away, picking and packing. Add the rest as you go.",
    },
    {
      t: "table",
      head: ["Group", "Activity", "Timer starts", "Timer stops", "Unit"],
      rows: [
        ["Inbound", "Unload", "Door assigned", "Last pallet or carton off", "Pallet, carton, container"],
        ["", "Receive and count", "First scan on the receipt", "Receipt closed", "Line, carton, unit"],
        ["", "Label and prep", "First label", "Last label", "Unit, carton"],
        ["", "Put-away", "Pallet or tote picked up", "Location scanned", "Pallet, tote"],
        ["Storage", "Replenish", "Task opened", "Pick face scanned", "Pallet, case"],
        ["", "Cycle count", "Count started", "Count submitted", "Location"],
        ["Outbound", "Pick", "Batch or order started", "Last pick scanned", "Order, line, unit, case"],
        ["", "Pack", "Tote scanned", "Label applied", "Order, carton"],
        ["", "Pallet build and wrap", "Pallet started", "Pallet label applied", "Pallet"],
        ["", "Load", "Door scanned", "Trailer closed", "Pallet, carton"],
        ["Other direct", "Kitting and VAS", "Work order started", "Work order completed", "Kit, unit"],
        ["", "Returns", "Return scanned", "Disposition recorded", "Return, unit"],
        [
          "Indirect",
          "Meetings, training, cleaning, breaks, waiting, looking for equipment",
          "Logged by type, with a start and an end",
          "Minutes",
        ],
      ],
    },
    {
      t: "p",
      text: "Two notes on that table. First, a timer is not a standard. Many operators track some activities, often receiving, only in hours. That tells you how long it took. It cannot tell you whether that was good, because there is nothing to compare it to. Every timed activity needs a target next to it, even a provisional one from history. Second, define every unit in writing. A line, a unit, an SKU and a case are four different counts. A target in “SKUs per hour” means nothing until everyone agrees what was counted.",
    },
    { t: "h3", text: "The rules for time between tasks" },
    {
      t: "p",
      text: "Scans capture the task. The minutes between tasks are where a multi-client building loses track. These rules settle most of them.",
    },
    {
      t: "table",
      head: ["Situation", "Whose time it is", "Why"],
      rows: [
        [
          "Finishing a task: dropping totes at pack, staging a pallet, wrapping",
          "The client you just finished",
          "The task is not done until it is handed off",
        ],
        [
          "Getting ready for the next task: building a cart, loading totes, getting a forklift, finding a pallet",
          "The client you are about to work for",
          "The work would not exist without the next task",
        ],
        [
          "Paid time with nothing recorded",
          "Nobody yet. It goes into a filler bucket",
          "Allocating it hides it. Investigate it first",
        ],
        ["Travel inside a batch, between two picks for the same client", "That client", "It is their walk"],
        [
          "Travel inside a batch, between picks for two different clients",
          "Split equally between those two",
          "Both caused the leg",
        ],
        [
          "Setting up a cart or batch that serves several clients",
          "Split by totes or orders assigned",
          "Forty orders for one client and two for another is not a fifty-fifty cart",
        ],
        [
          "Meetings, cleaning, breaks, training",
          "A shared pool, spread by each client’s share of direct hours",
          "Or another rule, as long as it is written down and kept",
        ],
        [
          "Returns",
          "The client whose product came back",
          "Logging returns as the building’s work makes that client look cheaper than it is",
        ],
      ],
    },
    {
      t: "p",
      text: "Notice that none of these rules needs anyone to clock in and out of the bathroom. People are working from the start of the shift to the end. The rules only decide whose work it was. The one thing they ask of the floor is that setup and indirect work get a scan or a tap too, because a cart built without a scan is just filler with a better excuse.",
    },
    {
      t: "p",
      text: "Here is the same ninety minutes from the shift log at the top of this paper, extended to the full morning. First as the building sees it, then as the rules see it.",
    },
    { t: "exhibit", id: "floor-c" },
    {
      t: "p",
      text: "The building view says one hundred and fifty minutes went into fifteen orders, ten minutes an order. That number is true and useless. One of those orders was forty cases. The client view says the beauty brand used seventy-one minutes, the candy brand thirty-five, the building thirty-six, and eight minutes are unexplained. Now there is something to compare with a quote, and something to go and ask about.",
    },
    {
      t: "p",
      text: "One more point on batching. If a batch saves walking, the saving belongs to you. The beauty brand pays per order whether you pick its orders one at a time or twelve at a time. Paper 01 and Paper 02 made the billing side of this point with the pen example. Here is the cost side: attribute what the batch actually took, and the client that benefits from your batching will look more profitable. It should. You earned it.",
    },
    { t: "h2", text: "One Charge, Many Activities" },
    {
      t: "p",
      text: "The companion paper mapped every charge to its trigger: what fires it, under what condition, at what unit. This section maps it the other way, to the activities underneath it and the minutes each one takes.",
    },
    {
      t: "p",
      text: "Take the most ordinary charge on a B2B rate card: inbound pallet handling, priced per pallet. The quote imagines one smooth motion. Unload, receive, put away. Picture the candy brand’s containers arriving late in the afternoon. The crew unloads and counts against the paperwork, stages the pallets by the door and goes home. The next morning someone receives them in the system, labels them and puts them away.",
    },
    {
      t: "steps",
      items: [
        { n: "Day 1", title: "Unload and count", text: "1.5 min a pallet. In the quote." },
        { n: "Day 1", title: "Stage at the door", text: "0.5 min a pallet. Not in the quote." },
        { n: "Day 2", title: "Receive and label", text: "1.5 min a pallet, including a second move." },
        { n: "Day 2", title: "Put away", text: "2.5 min a pallet. In the quote." },
        { n: "One charge", title: "Per pallet in", text: "Quoted at 4 minutes. Floor spends 6." },
      ],
    },
    {
      t: "p",
      text: "Same pallet, same rate, fifty percent more minutes, spread across two days and probably two different people. If the charge is checked against one timer, the receiving timer, nothing looks wrong. Only by adding up every activity that serves that charge do you see that the charge is underwater.",
    },
    {
      t: "p",
      text: "The fix starts with a map. For each client, list every activity you record and the charge that recovers it. Most will map cleanly. A few will map to nothing: the staging move, the sample sachet, the relabel nobody wrote a work order for. That short list is your unbilled work, and it is usually where the leak is.",
    },
    {
      t: "quote",
      text: "Every activity on the floor should point to a line on the rate card. The ones that point nowhere are free.",
    },
    { t: "h2", text: "The Allowance, Client by Client" },
    {
      t: "p",
      text: "Once tasks are timed, you can measure the allowance instead of assuming it. Take the task time the standard predicted for the work actually done. Compare it with the time the floor actually recorded. The difference, as a percentage, is the allowance that client really ran at.",
    },
    {
      t: "p",
      text: "Do this for the whole building and you will probably land close to what you assumed. Do it client by client and the spread is the interesting part.",
    },
    {
      t: "p",
      text: "Picture the beauty brand coming in at eighteen percent against a fifteen percent assumption, while the candy brand runs under its eighteen. Three points does not sound like much. It is the gap between a standard and a floor, and it is a list of things to go look at:",
    },
    {
      t: "ul",
      items: [
        "Shades of the same product slotted side by side, so pickers slow down to read labels.",
        "Mispicks caught at pack and walked back, which count as pick time.",
        "Pickers waiting for empty totes because pack is backed up.",
        "New hires on the account who have not learned the slotting yet.",
      ],
    },
    {
      t: "p",
      text: "None of those is a pricing problem. Each one is a floor problem with a cost attached, and the measured allowance is how you find it. The LED client in Paper 02 was the same pattern: the cost was real, but it came from a layout decision, not the work. This is how you catch that pattern in month two instead of month twelve.",
    },
    {
      t: "p",
      text: "Measuring by client also tells you when the assumption itself was wrong. If the candy brand’s cases really are heavy and its allowance keeps running at twenty-two percent after the floor issues are fixed, the standard was optimistic. That is a quoting lesson for the next candy client, and maybe a conversation at this one’s renewal.",
    },
    { t: "h2", text: "Three Comparisons" },
    {
      t: "p",
      text: "With timestamps and attribution in place, three comparisons become possible. Most operators start with the first and add the others as they get comfortable.",
    },
    {
      t: "table",
      head: ["Comparison", "The question it answers", "Who uses it"],
      rows: [
        [
          "Target versus actual",
          "Did the floor run at the standard we priced, for this client, this month?",
          "Operations, weekly and monthly",
        ],
        [
          "Actual versus past months",
          "Is this client getting better or worse? Compare like months: a peak month against last year’s peak, not against a quiet one.",
          "Operations and account management",
        ],
        [
          "Engineered standard versus your target",
          "Was the number in the quote right in the first place? Useful when the target came from history or an estimate.",
          "Whoever quotes, at renewal and for the next similar client",
        ],
      ],
    },
    {
      t: "p",
      text: "The third comparison is optional, and it is the hardest. It is also the only one that tells you whether your quotes are systematically generous. If your history-based targets keep coming in well below what an engineered standard says the work should take, you are pricing your own inefficiency into every new client. The companion paper made that point about cost. This is where you measure it.",
    },
    { t: "h2", text: "Reading the Gap" },
    {
      t: "p",
      text: "When a client’s actual minutes run over its quoted minutes, the first instinct is to blame the floor. Sometimes that is right. Often it is not. The gap usually comes from one of five places, and each needs a different fix.",
    },
    {
      t: "table",
      head: ["Cause", "What it looks like", "The fix"],
      rows: [
        [
          "Volume",
          "Fewer or more units than quoted. Labor flexes, but the fixed cost carried for the client does not.",
          "Minimums, volume bands, a price for the next step",
        ],
        [
          "Mix",
          "Units or lines per order, case weight or SKU count moved away from the quote",
          "Reset the standard, reprice at the agreed band",
        ],
        [
          "Productivity",
          "Same work, more time. Allowance creeping up, slotting, training, congestion",
          "Fix the floor, not the price",
        ],
        [
          "Unbilled work",
          "Activities with no charge behind them: inserts, staging, relabels, extra moves",
          "Add the charge, or a change order before the work starts",
        ],
        [
          "Outside costs",
          "Consumables, cartons, shrink wrap, pallets rising in price",
          "Pass-through or a materials line, as the companion paper covered",
        ],
      ],
    },
    {
      t: "p",
      text: "The order matters. Separate mix from productivity before you talk to anyone. If the beauty brand’s orders went from three units to four and a half, the floor did not get slower. The work got bigger. Coach the pickers for that and you will lose a good team for nothing.",
    },
    { t: "p", text: "Here is the beauty brand’s gap at month three, taken apart." },
    { t: "exhibit", id: "floor-d" },
    {
      t: "p",
      text: "Most of the gap is mix. The client is sending bigger orders than it described, which the rate card partly recovers through the per-unit fee, but not at the standard the quote assumed. A smaller part is productivity, which is the floor’s to fix. And a sliver is the sachet, which is nobody’s fault and everybody’s cost until it becomes a line on the invoice.",
    },
    {
      t: "p",
      text: "The candy brand shows a different cause entirely. Its minutes per case are better than quoted. Its problem is volume: one of its retailers dropped the line, and it is shipping about twenty-one thousand cases a month against the thirty thousand it described. Labor shrinks with the volume. The dedicated space sized for it, the account time and the share of supervision do not. Same building, same month, two clients, two different gaps.",
    },
    { t: "h2", text: "The Numbers to Watch" },
    {
      t: "p",
      text: "Here is a working set. Not every operator needs all of them on day one. Start with the activity and client rows, and add drift and floor health once the timestamps are trusted.",
    },
    {
      t: "table",
      head: ["Level", "Measure", "What it tells you"],
      rows: [
        [
          "Per activity",
          "Units per productive hour, by activity, against target",
          "Whether each piece of work runs at the standard behind its charge",
        ],
        ["", "Measured allowance", "How much of the gap is the floor, client by client"],
        [
          "Per client",
          "Labor cost per order, per line, per unit or per case",
          "The number the quote assumed, now measured",
        ],
        [
          "",
          "Attainment: quoted minutes ÷ actual minutes",
          "One figure per client per month. Under 100% means the quote was generous to the client",
        ],
        ["", "Handling revenue per labor hour", "What an hour on this client earns, compared with what it costs"],
        ["", "Unbilled minutes", "Time on activities that map to no charge"],
        [
          "Profile drift",
          "Units per order, lines per order, case weight, SKU count, against the quote",
          "The early warning. Drift shows up here months before it shows up in margin",
        ],
        ["Floor health", "Share of paid hours on measured work", "Whether the hour basis in your quotes still holds"],
        ["", "Filler minutes, indirect share, overtime share", "Where paid time goes when it is not on a task"],
      ],
    },
    {
      t: "p",
      text: "Two cautions. A measure without its unit definition is a rumor, so write the definitions next to the numbers. And orders per hour, on its own, cannot compare two clients or two months. Always show it next to the profile it was measured on. A team that drops from thirty-four orders an hour to twenty-six while units per order went from three to four and a half did not get worse.",
    },
    { t: "h2", text: "One Building, Two Clients" },
    {
      t: "p",
      text: "Put the two clients together at month three. The building’s payroll budget was set from the quotes: twelve thousand beauty orders and thirty thousand candy cases at their quoted standards. Then look at what actually happened, first the way most operators see it, then client by client.",
    },
    { t: "exhibit", id: "floor-e" },
    {
      t: "p",
      text: "In the building view, payroll landed within one percent of budget. Nobody calls a meeting about that. In the client view, the beauty brand is costing thirty percent more labor per order than quoted, about three thousand dollars a month on its current volume, and the candy brand is shipping thirty percent fewer cases than it described. The two problems cancel out on the payroll report. They do not cancel out in the margin.",
    },
    {
      t: "p",
      text: "This is the averages problem from Paper 02, one level down. That paper showed four accounts out of twenty hiding inside a healthy P&L. This shows the same thing happening inside a healthy labor report, which is the report most operators actually look at every week.",
    },
    { t: "quote", text: "On the payroll report, the two problems cancelled out. In the margin, they added up." },
    { t: "h2", text: "Acting on What You Find" },
    {
      t: "p",
      text: "Knowing the gap is half the work. What you can do about it depends on where you are in the contract.",
    },
    { t: "h3", text: "During the contract" },
    {
      t: "p",
      text: "If you signed a rate for a year and your quote was wrong, that is mostly your loss to carry until the renewal. The data still matters. It lets you have an honest conversation now instead of a surprising one later: here is what you told us your orders would look like, here is what they look like, here is what that does to the work. Most clients do not know their own profile drifted. Showing them is not a threat. It is information they need too.",
    },
    {
      t: "p",
      text: "And the floor-side causes, productivity and unbilled work, are yours to fix today, whatever the contract says.",
    },
    { t: "h3", text: "At renewal" },
    {
      t: "p",
      text: "At renewal the data is your evidence. A renewal built on twelve months of attributed minutes per client is a different conversation from one built on a feeling that the account is hard. The companion paper covered why growth does not automatically earn a discount. Attributed minutes are how you show where the client’s growth actually landed.",
    },
    { t: "h3", text: "Write the triggers in before you need them" },
    {
      t: "p",
      text: "The best time to agree what happens when the profile changes is before it changes, in the proposal the client signs. These examples are a starting point, not a complete list, and the right terms depend on your stage, your market and the client.",
    },
    {
      t: "table",
      head: ["Trigger", "Example", "What the contract can say"],
      rows: [
        [
          "Volume well below quote",
          "Quoted at about a thousand orders a day, running at two hundred",
          "A monthly minimum, or rates that step up below an agreed floor",
        ],
        [
          "A short spike",
          "A sale takes one day from a thousand orders to three thousand",
          "Treated as a special project: notice period, overtime or project rate",
        ],
        [
          "Sustained growth",
          "Volume doubles and stays there for a quarter",
          "A capacity review. If it needs another pack station, equipment or space, that step is priced before it is added",
        ],
        [
          "Profile drift",
          "Units or lines per order move outside an agreed band",
          "Standards and rates reset at the next scheduled review",
        ],
        [
          "Process change",
          "A new insert, label, kit or inspection step",
          "A change order, priced from a new standard before the change goes live",
        ],
      ],
    },
    { t: "h3", text: "When growth costs more than it earns" },
    {
      t: "p",
      text: "Growth deserves its own note, because it is the one clients expect to be rewarded for. Picture the beauty brand doubling from a thousand orders a day to two thousand. Today its packing fits on about one and a half pack stations. At two thousand, it needs another one and a half, plus the space around them, plus maybe another lift for replenishment. Some of that is fixed cost the quote spread across the old volume. Some of it is new. And if the space for those stations comes out of another client’s area, the cost lands somewhere you were not looking.",
    },
    {
      t: "p",
      text: "Before you build for one client’s growth, it is worth asking whether you have to. A neighbor with space and the same kind of work can sometimes take overflow for a season. That keeps the client served and buys time before you commit to a step you cannot undo.",
    },
    { t: "h2", text: "What To Do This Week" },
    {
      t: "p",
      text: "Paper 02 ended with a pricing gut check and the companion with a rate card gut check. This one is a minutes gut check. Pick one client, ideally your largest or the one that feels hardest, and do these for that client only.",
    },
    {
      t: "item",
      n: "01",
      title: "Write down the standard behind its handling rates.",
      text: "Minutes per unit, the allowance, the hour basis, the profile it assumed, and where each number came from. If you cannot, that is the finding.",
    },
    {
      t: "item",
      n: "02",
      title: "Define the units.",
      text: "What counts as an order, a line, a unit and a case for this client. Write it where the floor and billing can both see it.",
    },
    {
      t: "item",
      n: "03",
      title: "Turn one timer into a standard.",
      text: "Find an activity you track only in hours. Set a provisional target from three months of history, so next month has something to be compared with.",
    },
    {
      t: "item",
      n: "04",
      title: "Attribute one week.",
      text: "Code a week of labor by client and activity, using the rules in section 05. Put unrecorded time in a filler bucket and measure how big it is.",
    },
    {
      t: "item",
      n: "05",
      title: "Compare the profile.",
      text: "Units per order, lines per order, case weight and volume this month, against the quote. Mark anything that moved.",
    },
    {
      t: "item",
      n: "06",
      title: "Map activities to charges.",
      text: "List every activity you did for this client last month and the charge that recovers it. Circle the ones that map to nothing.",
    },
    {
      t: "p",
      text: "None of this changes a rate. It tells you whether the rate still describes the work, and where to look first if it does not.",
    },
    { t: "h2", text: "Closing Thoughts" },
    {
      t: "p",
      text: "A 3PL sells minutes and bills for events. The rate card turns one into the other through a set of assumptions: how long the work takes, what the client’s orders look like, how much will come. On the day the quote is signed, those assumptions are the best information anyone has. By month three they are a hypothesis the floor has been testing every day.",
    },
    {
      t: "p",
      text: "In a building with one client, you would see the result without trying. In a building with twenty, you only see it if you record who did what, for whom and when, and decide in advance whose time the in-between minutes are. Do that, and the payroll report stops being one number. It becomes twenty, and each one can be checked against the quote that produced it.",
    },
    { t: "p", text: "**Price the minutes. Record the minutes. Then compare the two, one client at a time.**" },
    { t: "quote", text: "I am always glad to compare notes on standards, timestamps and the minutes in between." },
    { t: "h2", text: "Where This Series Goes Next" },
    {
      t: "p",
      text: "This is a companion to the second paper in a series of operator-focused field guides for 3PLs scaling into fulfillment.",
    },
    {
      t: "item",
      n: "03",
      title: "The Integration Moat",
      text: "API and EDI architecture as a competitive advantage. How leading 3PLs onboard brands in a week, what the right integration stack looks like at each volume stage, and why integration breadth beats integration depth for most operators.",
    },
    {
      t: "item",
      n: "04",
      title: "Labor That Survives a 5x Swing",
      text: "Cross-training, temp-staffing partnerships, peak-season planning, and the design choices that make labor interchangeable.",
    },
    {
      t: "item",
      n: "05",
      title: "Why the WMS Always Goes First",
      text: "Vendor evaluation, implementation pitfalls, and surviving a WMS transition without losing clients.",
    },
    {
      t: "item",
      n: "06",
      title: "Returns Are Reverse Manufacturing",
      text: "Designing a returns operation at scale, and the technology that makes high-volume returns profitable.",
    },
    {
      t: "item",
      n: "07",
      title: "Reading the Brand-Side Signals",
      text: "How to detect a quiet exit before it happens.",
    },
    {
      t: "item",
      n: "08",
      title: "The Fulfillment-Native 3PL",
      text: "Synthesis. What the 3PL of the next decade looks like.",
    },
    { t: "h2", text: "About the Author" },
    {
      t: "p",
      text: "Vikrant Neb is an industrial engineer who has spent his career around operations. He has run e-commerce companies, led manufacturing operations through Kurieta during his consulting years, and worked with 3PLs across the full range of volumes and transitions covered in this series.",
    },
    {
      t: "p",
      text: "He is the founder of Leanafy, a warehouse management system built specifically for 3PL operators, and Kurieta Operations Consulting. His book, Execution Under Pressure: The Hidden Reasons Why 3PLs Stop Growing and How to Fix Them, came out in 2026. He hosts the Execution at Scale podcast and splits his time between Indianapolis and Vancouver.",
    },
    {
      t: "p",
      text: "This paper covers one slice of his work, what a client actually costs to serve. He is always glad to compare notes with operators working through their own numbers.",
    },
    {
      t: "p",
      text: "[vikrantneb.com](https://vikrantneb.com) · [linkedin.com/in/vikrant-neb](https://www.linkedin.com/in/vikrant-neb)",
    },
    {
      t: "p",
      text: "Want a copy to keep or forward? [Download the paper](/assets/resources/every-minute-on-the-floor.pdf).",
    },
    { t: "h3", text: "A note on the numbers" },
    {
      t: "p",
      text: "Every figure in this paper is illustrative. The two clients are invented, and the step times, allowances and labor rate are rounded to make the math readable. They are not benchmarks and not any operator’s standards. Engineered standards are built with predetermined motion time systems such as MTM and MOST; anyone setting standards for a contract should use a trained practitioner or a time study on their own floor.",
    },
  ],
};
