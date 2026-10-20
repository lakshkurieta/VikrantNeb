/**
 * The white papers as reading pages, converted from their PDFs (public/assets/resources): headings,
 * paragraphs, his quotes, callout panels, numbered items and checklists as text; charts and
 * diagrams as images (public/assets/resources/figures). Only the resource pages import this.
 */
export type PaperBlock =
  | { t: "h2" | "h3" | "h4" | "p" | "quote" | "by"; text: string }
  | { t: "callout"; title: string; text: readonly string[] }
  | { t: "item"; n: string; title: string; text: string }
  | { t: "list"; items: readonly string[] }
  | { t: "figure"; src: string; alt: string; w: number; h: number };

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
};
