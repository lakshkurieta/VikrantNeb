/**
 * Vikrant's articles, published on this site at /blogs/[slug] (app/blogs). Full text as written on
 * the current vikrantneb.com /blogs pages, one string per paragraph; covers are its illustrations
 * (public/assets/writing). Newest first: the first one is featured on the home page.
 *
 * To add an article: add an entry at the top with its paragraphs and a cover beside the others.
 */
export type Blog = {
  slug: string;
  title: string;
  category: string;
  /** ISO date; formatted for display by `formatDate`. */
  date: string;
  /** One or two lines for cards and link previews. */
  excerpt: string;
  cover: string;
  body: readonly string[];
};

export const blogs: readonly Blog[] = [
  {
    slug: "the-question-i-wish-more-3pl-owners-asked-themselves",
    title: "The Question I Wish More 3PL Owners Asked Themselves",
    category: "3PL & Logistics",
    date: "2026-05-12",
    excerpt:
      "If I disappeared for sixty days, what would break? Sit with it honestly for an hour and it will tell you more about your operation than most consulting engagements.",
    cover: "/assets/writing/question.webp",
    body: [
      "I want to give you one question. If you sit with it honestly for an hour, it will tell you more about your operation than most consulting engagements will.",
      "Here it is.",
      "If I disappeared for sixty days, what would break?",
      "Not vacation. Not the hands-off owner who still checks email from a beach. Disappeared. Phone off. No calls returned, no decisions made, no fires put out by you.",
      "Walk through it slowly.",
      "Who does the team turn to, and is that person ready. Do they have the authority to act, or only the title. Which customer feels it first. What invoices stop going out. What process does the floor improvise around because nobody documented it. Which vendor stops being managed. What slips quietly.",
      "Now sit with the answers.",
      "The reason I keep coming back to this question is that it strips away the comforting story most owners tell themselves about their business. Most owners describe their operation as a company. The sixty-day test reveals whether it actually is one.",
      "Because if everything depends on you, if the operation cannot function for two months without your voice in the room, then you are not running a business.",
      "You have created a job for yourself.",
      "A very demanding one. A job that pays better than the one you left. A job that comes with the title of owner. But still a job.",
      "It has no enterprise value because nothing about it transfers. It does not scale, because the only thing scaling it would mean is more of you, and there is only one of you. It pays for as long as you keep showing up, and the moment you stop showing up, it stops paying.",
      "A business is different. A business runs because the systems run, because the people are trained, because the decisions have been pushed down to the level closest to the work, because the owner has done the harder work of making themselves replaceable on the things that should not require them.",
      "The honest answer to the sixty-day question is almost always uncomfortable. Most owners I have asked it of, including the ones running operations I admire, find that more would break than they expected.",
      "That is not a failure. It is information. The gap between what would break and what should break is the size of the work ahead.",
      "I am not suggesting anyone actually disappear for sixty days. I am suggesting you live inside the question for an hour. Map the breakage. Then start designing the operation backward from what you saw. What has to be true for the answer to change.",
      "That is the work that turns a job into a business. It is also the work that creates an operation worth selling, worth handing off one day, worth stepping away from without it collapsing. And it gives you back the one thing every owner says they want and almost none of them have.",
      "Time.",
      "If you only ask yourself one question this year, ask that one.",
    ],
  },
  {
    slug: "the-conversation-i-have-most-often-with-3pl-owners",
    title: "The Conversation I Have Most Often with 3PL Owners",
    category: "Supply Chain Management",
    date: "2026-05-07",
    excerpt: "Different cities, different sizes, different services. Same conversation.",
    cover: "/assets/writing/conversation.webp",
    body: [
      "If you sat in on the conversations I have with 3PL owners; at IWLA, after webinars, on consulting calls, in their warehouses; you'd hear the same few things come up again and again. Different cities, different sizes, different services.",
      "Same conversation.",
      "The first thing that comes up, almost without fail, is cost.",
      "Owners feel nickel-and-dimed by their customers. Storage rates pushed down. Receiving fees argued over. Outbound charges questioned line by line. The frustration is real and I understand it. I have made the case publicly, including on Bob Byrnes' podcast, that brands also need to understand the cost structure on the other side of the invoice. There are real reasons a per-pallet rate is what it is.",
      "But that is only half the conversation.",
      "The other half is this. If the market rate for storage, receiving, and shipping is fifteen, fifteen, and fifteen, and you are pricing at ten, ten, and ten, somebody is always going to undercut you. They might have free space they're trying to fill. They might be a former warehouse supervisor who just started a 3PL and doesn't yet know what it actually costs to run one. Both happen often in this industry.",
      "You cannot control that. Trying to win on price against people who do not know what their own numbers look like is a losing fight.",
      'So the deeper question, the one I try to move every owner toward, is not "how do I justify my rate to a customer who wants to argue about ten cents." The deeper question is "how do I build something my customer cannot get from a price comparison."',
      "One client of mine, a 3PL based in the US, was stuck in exactly that loop. I asked him a different question. Who are your customers, and where do you find them? He told me. All domestic. All chasing the same brands every other 3PL in the region was chasing.",
      "I asked him why he wasn't looking outside the US.",
      "He didn't follow. So I walked him through it.",
      "There are brands and businesses all over the world doing well in their home markets that want to enter the US and don't know how. Freight forwarding, customs, company setup, CPA, banking, warehousing, last-mile; they need all of it. A 3PL inside the US is already the natural base for that customer. The warehouse becomes the anchor, but the offering becomes a platform.",
      "He tried it.",
      "Over the next two years, the business tripled. Same operation. Same team. Different customer, different value, different conversation about price. Those customers do not nickel-and-dime, because they aren't shopping a rate sheet. They're buying access to a market.",
      "That is the kind of mindset shift I keep pushing on. Not a new pricing model. Not a new service line bolted onto the old one. A different way of thinking about who the operation is actually for.",
      "The second thing that comes up almost as often is people.",
      "We cannot find good team members. We cannot get the floor to follow the process. We cannot streamline operations. I hear it everywhere.",
      "And underneath most of it is a smaller problem that is harder to say out loud. The owner is not thinking far enough ahead.",
      "Some operators only live in today. Every decision is a reaction. Every hire is a fire to put out. Every system is a patch.",
      "Some operators only think about the future. Big plans, no execution, the present neglected.",
      "Neither works.",
      "The job is to hold both at once. What can I do today, what can I afford today, what hire makes sense today, what system can I put in place today; and at the same time, what am I building toward, what does the operation need to look like in two years, what decisions today will make that version possible or impossible.",
      "The people problem is rarely a people problem. It is usually a planning problem wearing a people problem's clothes.",
      "So those are the two recurring conversations. Cost, and the future. And the version of the conversation I find myself having most often is some combination of both. The owner who feels squeezed on price and can't find good people is usually the same owner who hasn't taken a step back to ask whether the operation they're running today is the operation that will still work two years from now.",
      "That step back is the work.",
    ],
  },
  {
    slug: "why-i-wrote-execution-under-pressure",
    title: "Why I Wrote Execution Under Pressure",
    category: "Strategic Consulting",
    date: "2026-05-05",
    excerpt: "I didn’t set out to write a book. For about two years, I had been writing down what I saw.",
    cover: "/assets/writing/why-i-wrote.webp",
    body: [
      "I didn't set out to write a book.",
      "For about two years, I had been writing down what I saw. Notes from the floor. Observations from consulting engagements. Patterns I kept noticing across very different operations. None of it was headed anywhere. I was writing because most people I tried to talk to about these patterns either didn't understand what I was naming, or didn't want to.",
      "That was the honest reason I started writing. Not for a book. Because I needed somewhere to put what I was seeing.",
      "Earlier this year I went to an IWLA event. Sixty or seventy operators in a room, most of them running 3PLs, most of them dealing with versions of the same problems. I had been a little away from the floor for a stretch, not doing as much hands-on work, not at as many events. That conference put me back inside the conversation.",
      "The patterns I had been writing about for two years were sitting at every table. The people in that room were living them.",
      "Something shifted for me that week.",
      "I had been doing this work for five years through Kurieta and Leanafy. When I sat across from an operator directly, the message landed. They recognized themselves in it. They wanted to keep talking.",
      "The problem was reach.",
      "I was only getting through to the operators I happened to be in the room with. The ones I wasn't sitting across from didn't know any of this existed, and the reason was simple. I didn't have the marketing budget to be heard by them. I wasn't going to pretend I did.",
      "A book is a different kind of channel.",
      "It reaches operators who would never click on an ad I paid to put in front of them. It travels without me. Someone hands it across a desk, leaves it on a shelf, picks it up on a flight.",
      "I knew going in it wasn't going to make money. My mentor was clear about that part. Books don't make money anymore, he told me. I told him that wasn't the reason. He understood.",
      "The reason was the message.",
      "The book started as a broader business book. I narrowed it into a 3PL book deliberately.",
      "The patterns inside it, the heroics trap, urgency becoming culture, the leader as bottleneck, the floor going quiet, technology layered over broken process; are not really 3PL patterns. They are business patterns. They show up in any operation that scales under pressure.",
      "But 3PL is the lens I know best. It is where I stood for years, where I built two companies, where I watched these patterns play out close enough to name them honestly. So I wrote it for owners and operators of 3PLs, with the understanding that anyone running an operation under pressure would find themselves in it.",
      "It is not a framework book. No acronym. No five-step systems. I have never believed operations could be reduced to a method, and I wasn't going to pretend otherwise to sell more copies. What is in the book is pattern observation, drawn from years of watching operations work and fail.",
      "If there is a single thesis, it is this. Most 3PLs do not stop growing because of bad luck. They stop growing because the habits that built them become the ceiling that traps them.",
      "The book is an attempt to make those habits visible, so they can be named and addressed before they become permanent.",
      "I wrote it because the message needed a form that did not require my voice in the room to land. Execution Under Pressure is the same conversation I have been having inside operations for years.",
      "Just in a form that can keep traveling after I leave the room.",
    ],
  },
  {
    slug: "why-i-started-leanafy",
    title: "Why I Started Leanafy",
    category: "Self Discovery",
    date: "2026-05-03",
    excerpt: "Kurieta was working. I had no plan to build software. The plan was to keep consulting.",
    cover: "/assets/writing/leanafy.webp",
    body: [
      "Kurieta was working. I had no plan to build software. The plan was to keep consulting.",
      "But the deeper I got into consulting, the more I saw something I couldn't unsee.",
      "A large part of the work ended in software. Cost optimization, line balancing, warehouse design; the engagements often closed with an ERP or WMS implementation. I was inside those implementations on behalf of my clients. And the more of them I did, the more I started looking at the software the same way I looked at a manufacturing line or a warehouse floor.",
      "As an industrial engineer.",
      "Most of it didn't hold up.",
      "There was fluff in the sales pitch. Features that weren't real, or weren't planned. Workflows that forced humans to bend around the software instead of being shaped to how operations actually run.",
      "On one major ERP implementation, we had to hire people who already knew the software just to operate it. That stopped me. Why should running an operation require knowing a specific piece of software? You can break almost any operation into smaller steps and train people on the steps. Software should be built to support that. Most software isn't.",
      "That was the trigger. I started thinking about building something different.",
      "Around the same time, in 2019, I had gone back to Purdue for my masters. I was on a thesis track, with the idea that I might continue into a PhD. One of my professors asked me what I was doing outside of school. I told him about the company, about the early thinking on the software. He said something I didn't want to hear at the time. Someone running a decently successful company, while thinking about starting another company, does not do a PhD. He suggested I put that time and energy into the business instead.",
      "I finished the masters without the thesis. He was right. That was the moment I realized I was already doing the thing. I just hadn't admitted it to myself yet.",
      "The original plan was to build a full ERP. That was the first instinct. Build the whole thing.",
      "In 2020 I met my mentor, who helped me see clearly what I had been avoiding. Building an ERP without investor money was effectively impossible. And I wasn't going to take investor money. I needed a narrower starting point.",
      "I did the research. The most fragmented piece of the stack, the one without a clear winner serving 3PLs the right way, was the WMS layer. It was also more buildable than a full ERP. That became the wedge.",
      "Leanafy would start as a WMS.",
      "The first attempt did not go well. I built a team. The team couldn't align with the vision. A year of work and a lot of money went into something that wasn't going to work.",
      "Then I met Ankush.",
      "It was a LinkedIn post. Not mine. Someone else's. He had left a comment, I had commented on his comment, and something in what he said made me reach out. We spoke. He told me what he was doing, I told him what I was doing, and we clicked fast. A couple of months of pilot work and the decision was obvious. He came on as cofounder and built the tech team.",
      "I trust him with my life. The product Leanafy is becoming, neither of us could have built alone.",
      "We bootstrapped. Five years in, that decision still shapes everything. We've built features into the product that companies who've raised millions are still trying to build one piece of. Most people don't know that yet because we haven't put real money into marketing. That's fine. The product is there. The customers we've earned, we've earned by being the version of a WMS that an operator would design if an operator were building software, which is the version I wished existed when I was implementing somebody else's.",
      "That is what Leanafy is. Built by people who have stood on the floor and watched the gap between what the software promises and what it actually does. Built to fit the operation, not the other way around.",
      "Every decision we make in the product traces back to that. Saying no to investors came from it. So did the discipline of not building everything at once. So did the choice to keep serving the smallest customers at a loss, because somewhere in there is the operator who reminds us why we started.",
    ],
  },
  {
    slug: "why-i-started-kurieta",
    title: "Why I Started Kurieta",
    category: "Self Discovery",
    date: "2026-05-01",
    excerpt: "An old friend asked me recently why I do what I do. It was a fair question.",
    cover: "/assets/writing/kurieta.webp",
    body: [
      "An old friend asked me recently why I do what I do. It was a fair question. We were talking late, and I had been working until four in the morning the night before. It was a Saturday. The day of the week doesn't really matter to me anymore, and he wanted to know why.",
      "To answer that honestly, I have to go further back than Kurieta.",
      "I was born in India, in a middle-class family. Nobody in my family, immediate or extended, had ever left the country to study. That wasn't the path. The path was IIT, and I was preparing for it the way every kid around me was preparing for it.",
      "Then one of my professors pulled me aside. He told me I was a practical person, a hands-on person, and that the education system I was in might not give me what I needed. He suggested I talk to a former student of his who had gone to Georgia Tech. That student lived ten minutes from me. I walked over the same day.",
      "Twenty-four hours later, at sixteen years old, I had made the decision. I told my father. He said he trusted my judgment, and that was enough.",
      "I came to Purdue for mechanical engineering. I thought I would eventually do a PhD in nanotechnology. That isn't what happened.",
      "I changed majors three times. I tried mechanical, then electrical, then computer engineering because I loved coding. Sophomore year I realized I didn't love any of it the way I needed to. Junior year I realized I couldn't do something I didn't enjoy, and I didn't know what to do about that. I was too young, too far from home, and didn't have the guidance to figure it out cleanly.",
      "I got dropped out of Purdue.",
      "I went to India for six months without telling my family the full picture. I was still trying to handle everything myself, which is, looking back, the same instinct that drives most of what I do now. Eventually I found industrial engineering. Supply chain. Operations.",
      "For the first time, something fit. I came back, finished with a 4.0, got into grad school on a full scholarship, and had a Deloitte offer waiting for me. For an industrial engineer right out of college, that is the dream job. I turned it down. I went back to India to set up a manufacturing unit for a company I had interned with the previous two summers.",
      "My monthly expenses were more than what I was earning. My parents could not understand the decision. I told them it wasn't about the money. It was about learning something I couldn't learn on the inside of a consulting firm. That decision is where Kurieta started, even though I didn't know it at the time. Working inside that company, and a few others alongside it, I started to recognize something. Small and mid-sized companies were in the same position I had been in at sixteen. Smart people, real problems, no map. The information they needed existed somewhere, but it wasn't reaching them.",
      "The people who could have helped were chasing Big Four fees instead. I used to tell young people that network is net worth. Nobody had told me that when I needed it. Nobody was telling these companies either.",
      "That is what Kurieta was built for.",
      "Not to become a billion-dollar company. Not to raise money. Not to be a startup story. To help the people no one else was helping.",
      "Two years ago I took on a client, a husband and wife who ran a catering service for fraternities and sororities in Indiana. She was the chef. He was working a day job as a warehouse manager. They came to Kurieta and asked us to build them an app. Their competitors had apps, they said, and they were losing customers. I asked them a few questions. They didn't have a website. Their business email was a Gmail address. They were asking for an app. I told them they didn't need an app. They needed a basic brand first. Then a website. Then a web portal. And only then, if there was budget left, an app. That was the progression. Building the app first would not have solved anything. I wasn't charging them for the conversation.",
      "Most consulting firms in that situation would have quoted the app and taken the work. He listened. He made the call in twenty-four hours, the same way I had at sixteen, and they executed. In one year their company went from four hundred thousand dollars in revenue to one point two million. That mattered more to me than a two hundred thousand dollar check from a company I had saved ten million for.",
      "It still does. That is why Kurieta exists, and that is why I am still up at four in the morning on a Saturday.",
    ],
  },
];

export const blogHref = (slug: string) => `/blogs/${slug}`;

export const findBlog = (slug: string) => blogs.find((blog) => blog.slug === slug);

/** Minutes to read, at about 230 words a minute. */
export const readingTime = (blog: Blog) => Math.max(1, Math.round(blog.body.join(" ").split(/\s+/).length / 230));
