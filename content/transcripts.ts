/**
 * Episode transcripts, from the current vikrantneb.com episode pages, as speaker turns. Only the
 * episode pages import this (app/podcast/[slug]), so it never reaches the browser bundle.
 * Episodes without one here (8–10) have no transcript published yet.
 */
export type Turn = { speaker?: string; role?: "Host" | "Guest"; heading?: string; text: readonly string[] };

export const transcripts: Partial<Record<string, readonly Turn[]>> = {
  "execution-is-the-ultimate-competitive-advantage": [
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Welcome everyone to episode seven of Execution at Scale. I'm your host, Vikrant Neb, founder of Lenify and Kurieta, and also author of Execution Under Pressure. And this series exists because I believe the best conversation in the industry always happens in the hallway over coffee or a beer, but not really on the stage. So with this podcast, I'm trying to change that, free-flowing and right from the heart, basically. And today is a little bit different because every episode so far, we have talked about what breaks, what goes wrong, how to fix it, etc. But this one is unique because I have Jeremy Van Puffelen with me, president of Prism Logistics. Prism Logistics was started by Jerry Van Puffelen, who's Jeremy's dad. However, instead of traditionally taking over the business or getting handed off, Jeremy was the one who had to go through and buy it. And he had a full commitment to do it, which we will talk about, and how the operation scaled over 25 years as Jeremy worked with Prism. Right now today, there is about 2.5 million square feet across Northern California, serving some of the most demanding CPG and food and beverage brands in the country. Jeremy is also co-chair at IWLA, that's where I met Jeremy a couple of months back, and thanks to IWLA that we met. So yeah, I would kind of hand it off to Jeremy in case I missed anything, said anything incorrectly, or if you'd like to add on anything.",
      ],
    },
    {
      speaker: "Jeremy Van Puffelen",
      role: "Guest",
      text: [
        "No, nothing really to correct you on. Additions, I certainly haven't done any of this on my own. I have a brother, Zach Van Puffelen. He's also in the business with me, a partner who also had the opportunity to buy in when my dad's original partner was retiring. That was our opportunity to get in if we wanted to. We both took that opportunity at the same time. And Zach prefers not to be on camera, I think he'd prefer to be in operations and working through our IT stuff. So it's a good yin yang, we offset each other really well. But the only way we've been able to grow is through him. And then we had a partner of our own that also bought in when my dad's original partner retired in 2014. His name was Mike Mayo. He was our VP of Operations for 25 years as well as a partner, and then he retired at the end of 2025. My brother Zach and I acquired his shares at that point. So now it's down to my father, my brother, and I.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "If you don't mind, before we go into specifics of operations, etc., I want to hear your story once again. I mean, I've heard it, but I want our listeners to hear your journey from ground up, how you started, how you got involved in Prism, and where it all went from there.",
      ],
    },
    {
      speaker: "Jeremy Van Puffelen",
      role: "Guest",
      text: [
        "So my dad founded the company in 1993 with his partner, Paul Vanderover. They got their first account in September of '93, the company itself started in June of '93. When they left the company they were working with before, they set up a small office in my dad's house. At that point in time, I was going into my junior year of high school, so I wasn't ready to jump into the workforce quite yet. But they started grinding out of my dad's house. And then I joined them in '96, I graduated high school in '95 and was going to a local community college. They were getting really busy, needed some help, and it was probably the best thing for me in the long run. I was thinking about a different path, but I hopped on a forklift and was their janitor. It was a flour warehouse, 40,000 square feet of flour, nasty everywhere. I spent quite a bit of time sweeping up flour and restacking broken bags, different things. Yeah, it was fun. So started in '96, and we just continued to grow.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "There were probably multiple conversations going on in my head, and within my family, one with my wife may have been a little different than the one with my dad, about how quickly I wanted to progress and where I wanted to go. After a few years where I really started getting serious about it, I'd say I probably spent three years just treating it as a job, not thinking I was going to be there long term. But as I got more serious about wanting to get married and have kids and started thinking about it as a long-term career, there were steps I had to take, things my dad and other people couldn't do for me, whether that's about my own seriousness or focus. There were things, when I was 19, 20 years old, I wasn't as focused as I may be today. So I won't really count that '96 to '98 timeframe, I think I was just there to drive a forklift, do the things, and learn. But it did teach me a lot about timing, and it taught me a lot about what everyone on the team is going through.",
      ],
    },
    {
      speaker: "Jeremy Van Puffelen",
      role: "Guest",
      text: [
        "I was so early on, in the very beginning, there were only two or three of us in the warehouse, plus my dad and his partner, and my mom in the office trying to grow the business. So there weren't a lot of people I had to work through as far as impressing them or changing the narrative. It was a husband, his wife, and some of their family. It was easier then than as I got more developed in the business. Initially they just wanted to pour into me, they knew exactly who I was, they knew I was Jerry's son. It didn't stop Juan (that was his name) from driving down on me pretty hard. He was another good mentor, another good teacher along the way, and I think my dad was pretty honest with him and said, \"if he's not doing well, you need to get on him,\" and gave him the authority to do so. So he did a lot of coaching for me, taught me a lot. One of the hardest, best workers I've ever met in my life, and he definitely inspired me to work harder a lot of the time I was there. I appreciate him still to this day, but there wasn't anything at that point in time I'd say I had to work around.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "There's also a second scenario, especially in today's time, right? Because supply chain has evolved a lot over the last decade or so, a lot of times people are coming right out of college and becoming a warehouse manager or procurement manager and so on, who haven't had boots on the ground. So in both these scenarios, what would you say are some of the major lessons you learned in that journey, having boots on the ground, climbing from one place to another, getting into sales, and then being president all the way, from a forklift operator all the way there? What are some of the lessons you learned and the advantages of having boots on the ground?",
      ],
    },
    {
      speaker: "Jeremy Van Puffelen",
      role: "Guest",
      text: [
        "I would never want to discount somebody who went through school and took a different path than what I took. I think a lot of it has to do with timing, one might take a little longer than the other. There's a reason people go off to school and get their degrees, so they can come in. I think there are advantages to both. I think a lot of the time, not just in our company or industry, things are different on paper than they are when you're actually on the floor going through the process. So I've had a lot of benefit from learning through experience, some of those experiences were great, some were hard. I didn't always do everything right, so more often than not I learned from my first mistake and tried not to repeat it. But anybody's going to have to go through that learning process, whether they're starting from the ground up or coming out of school directly into a management role. I think you can be successful on either path. For me, it was helpful for where I'm at today, just understanding everything about our company. We're not a big corporate machine, so it's different, if I needed to go do something in the warehouse, I could go do it. Other people don't structure it that way, and that's not bad, it's just a different structure.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "You made a very good point. In my career in operations, across different types of companies, not just warehousing, that's been a common problem, the sales team promising the moon when there isn't much there. All the pressure then comes onto operations, and then you mess up, and it goes into a cycle. Even delivery timings, if you're doing manufacturing and trying to meet delivery timelines, being able to commit to what's at least as close to reality as possible is very important.",
      ],
    },
    {
      speaker: "Jeremy Van Puffelen",
      role: "Guest",
      text: ["I totally agree."],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "I'm curious how it shapes up all the experiences of being in those roles, or being close to the actual operators, how does it shape leadership differently?",
      ],
    },
    {
      speaker: "Jeremy Van Puffelen",
      role: "Guest",
      text: [
        "There are multiple paths to end up in the same spot, whether it's going through school or boots on the ground and learning through the process, I think you can be successful in both. For me, again, it helped me understand what the team's doing, how long things take. I really sell from an operations background, and I think when you're selling from an operations background, it helps with timing, pricing, understanding what the best fit is for your team internally, but also what's realistic for a customer and understanding their needs. And if those two things can come together, then you're really talking about service more than anything, hopefully, versus just a price-based conversation.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        'Two of the conversations, even at IWLA or other events, when we talk to newer 3PLs, the biggest thing is, "oh, our customer is beating us down on storage charge or receiving charge," etc. And everyone is kind of trying to compete in that race-to-the-bottom without understanding their margins, not having that problem-solving mindset, because the customer is just saying "do this or that." What are your thoughts on this scenario?',
      ],
    },
    {
      speaker: "Jeremy Van Puffelen",
      role: "Guest",
      text: [
        "Yeah, I'll probably leave that one alone for the most part. We work on building good relationships and being fair with our clients. Understanding the business well helps us get there, we know what it takes on our side to be financially successful, and we know a fair amount about the customer side and what they need to be successful. So we treat it as a relationship, we want to make sure they're happy and doing well, and we're also happy that we're doing well. It really has to be a partnership. So when there are times things aren't working for our clients, if we can give them a break somehow, or figure out efficiencies, or use our operations background to say \"we can take time out of the process here\" or \"be more efficient with the space here,\" those are things we look at.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "That's wonderful. I guess what I'm hearing is that given the operations background, you guys are naturally solving for problems, creating more efficiencies, which in the end helps your customers and yourselves as well.",
      ],
    },
    {
      speaker: "Jeremy Van Puffelen",
      role: "Guest",
      text: [
        "Well, that's the goal, isn't it? We're here as an extension of our clients. If they would be doing this in our locations for themselves, they're going to continue pushing forward to drive efficiencies and remove costs in the process. So we should be doing the same thing.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Doubling in five years is not an easy task, right? And you've done it almost twice, and again planning to do it. So what were some of the difficult decisions you had to make in that process, every time you're going from X to 2X? And what were some of the differences in how you ran the company, or processes you had to change that were totally different?",
      ],
    },
    {
      speaker: "Jeremy Van Puffelen",
      role: "Guest",
      text: [
        "Yeah, I think the biggest thing, going back to our VP of Operations, Mike Mayo, was really building the culture with the team that had been with us so long, to make sure that culture was moving forward with everyone we were growing with and new people coming in. I think that's the hardest thing to do in a company, the larger you get, or the more regions you enter, the harder it is to maintain your culture. I think you only retain clients for a long time if you're treating them well, doing a really good job, and you're price competitive. So build those relationships, make sure it's fair for everybody, and then the hurdles become easier to jump. There wasn't any one major thing where we said \"alright, it's 2X, now we've got to do this.\" We've always invested in our WMS systems, our technology, our people. So it was really just doing more, and being willing to take on a bit more risk than we maybe would have in the past, the dollars start changing on what leases look like in bigger buildings, things of that nature. So maybe taking on more risk, but it was really still just doing what we do.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "If someone was watching us, and their 100,000-square-foot warehouse started maybe three, four years back, what would be your advice to them, the most common mistakes you've seen others make, or general advice to a typical SME 3PL?",
      ],
    },
    {
      speaker: "Jeremy Van Puffelen",
      role: "Guest",
      text: [
        "'m going to go back to the partnerships, listen to your customers. If they're telling you this is what they need and where they need to be, do everything you can to get them there and help them. Push it as far as you can, as lean as you can, without sacrificing service and your ability to manage the financials of the company, but keep it as lean as you can for as long as you can. If you start adding a bunch of bodies, it gets tough to keep your pricing where it needs to be to make sure it always makes sense for the customers. So we run lean and stay efficient with both space and labor, that's what allows us to keep the cost where it needs to be for our clients.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "As I talk to a lot of different people, even at some of the IWLA events, there's a mixed set of opinions. One opinion is that you should have a little diversification, multiple revenue streams, like you mentioned. Personally, I agree with that. But then there are some people who say it should be very specific, just do pallet in, pallet out, or cross-dock, or food, or e-commerce, specialize into a very specific niche. What's your thought process on these two different approaches?",
      ],
    },
    {
      speaker: "Jeremy Van Puffelen",
      role: "Guest",
      text: [
        "They kind of overlap. For us, it depends on your path for growth and what you want to do. For us to continue growing the way we'd like to, that \"double every five years\" kind of process we're hoping to continue, I think we need to diversify a bit more, and we've been doing that over the last couple of years. But I think you can also do really well by having a very specific niche and just standing in your lane, so to speak. If that's where you want to be and that's all you want to do, but you do it the best, you can be very successful there. Everyone's on their own journey with their company and what they want that to look like, you can be successful in whatever lane you want, as long as you're really good at it. Like In-N-Out, right? They don't have a ton of different options as far as their burgers go, but I love In-N-Out, I'm a huge fan, their burgers are great, they're the same every time, but they have a very specific lane. They're not trying to be everything to everybody, they're not offering chicken nuggets and chicken sandwiches and all this other stuff. It's very specific, and they're really good at it, and they kill it. So I think across any industry, if you're really good at the thing you're doing, you can be successful.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "If someone tells me, \"okay, we're doing pallet in, pallet out, or the B2B side of a traditional 3PL, and we want to do fulfillment,\" my first comment to them is, yes, you should and you can, but these are kind of two very different processes and businesses. Same thing with packaging, if you're doing contract packaging as an added-on service, and this is my opinion, I want your thought process on it, people who don't treat these as different processes and different businesses, even within the same building, that's where the problem starts coming in. Because even pricing for a pallet-in/pallet-out operation versus fulfillment versus contract packaging is very different.",
      ],
    },
    {
      speaker: "Jeremy Van Puffelen",
      role: "Guest",
      text: [
        "It is very different. Yeah. The pricing models don't necessarily overlap, there's volume play that doesn't overlap, and there are space requirements that don't overlap, they're very different things. The investment in equipment, you have it for both, but if you're trying to run a very productive e-commerce line, you probably need some sort of automation. If you're pumping out thousands of orders a day, you can do that in a traditional model with people picking and sticking to pallets, but running it through a labeling process, is that the most efficient? There are different investments from an equipment standpoint, and the software is different too, a traditional 3PL software is really a location-based system, versus a throughput-based system where you're just trying to track information, versus \"where's the pallet, what's the lot number.\" They're very different. If anyone asks me, I say the same thing: if you're thinking about running it on the same process and same system, you should probably stick in your lane. If you really want to do it, you have to understand the differences and nuances. Even in transportation, last mile, LTL, FTL, asset-based or brokerage, or all the way into container freight, it's endless.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "One of the things I know that Jerry and you both have been really involved in is IWLA. I became part of IWLA earlier this year, and I've only been to two events, but I really see the importance and value of the different sessions, these are the exact discussions we're having at an event like IWLA. There was one around pricing, there's one coming up on fulfillment, and so on. So can you share a little bit, from the start, since you've seen your dad present in the community, and you're very much involved in the community yourself, what role does it play, both in your own group and how it can benefit others?",
      ],
    },
    {
      speaker: "Jeremy Van Puffelen",
      role: "Guest",
      text: [
        "I grew up going to the IWLA conventions, whether that was in high school or junior high, because my dad attended IWLA conventions well before he started Prism, he ran companies for other people for a long time. He was part of the IWLA, which wasn't the IWLA back then, I think it was the AWA, America's Warehousemen's Association, probably other names as well. But he's been going for a long time, I want to say since like 1973, '75. So it's been quite a while that he's been attending. One of the first things he did when he started Prism in '93 was join the IWLA. He thought, and I agree with him, that from an education standpoint, a networking standpoint, and a giving-back standpoint, those were good building blocks and foundational things for building a successful company. In my own journey, I learned a lot, I took my Essentials course, had a great time, met a lot of people. I learned a lot about setting up a warehouse and pricing. You've got guys like Bob Moran, who've been teaching people pricing for so long and have had an impact on so many people in how they approach rate and cost analysis. So you're learning how other people do things, how they operate, how they're implementing technology. It's a massive fountain of educational information when it comes to anything from setting up a warehouse, operating it, running the HR side, legal advice, the legal advice we get, the terms and conditions, and everything the IWLA provides, it's unmatched.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Absolutely. Thank you so much, Jeremy, for concluding that, and I totally agree with it. Thank you so much for your time today, I won't keep you waiting. I know we were supposed to keep it to an hour, but we'll probably do a follow-up session in a few months and see where things are.",
      ],
    },
  ],
  "the-planb-nobody-builds": [
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Welcome everyone to Execution at Scale, episode 6. Today we have Laurie LaRocco with us. And as you know, this series exists because the best conversations in this industry happen in hallways and over coffee, and not on the stage. And so that's why this series exists; to change that and have honest conversations. And today, as we started straight off; the Hormuz [Strait situation] has fully been closed, so perfect timing. And today joining me is Lori, with LaRocco Consulting, one of the sharpest voices in global trade, as we know. Lori spent years at CNBC as a senior editor for global supply chain, and also writes a Substack called Trade Alert. And she's the author of several books; one of the ones I'm reading right now is called Trade War: Containers Don't Lie. So very excited to have you on, Lori. And before we go into the fun stuff, I'd love to see if you'd like to add on anything.",
      ],
    },
    {
      speaker: "Lori Ann LaRocco",
      role: "Guest",
      text: [
        "Sure. I mean, I think what you're doing is really good in terms of promoting honest conversation. As you know, I just recently had my Supply Chain Symposium, which does the same. And, you know, you've got to put your egos aside in order to succeed in today's world of trade, because honestly, everybody has a competitor, and our competitors make us better, because it pushes us to be our best.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        'One of the things you and I talked about when we last spoke was around cancelled sailings, slow steaming. So let\'s go a little bit deeper into it; the whole "Plan B"; how a company can be better prepared, and also more aware, before things happen.',
      ],
    },
    {
      speaker: "Lori Ann LaRocco",
      role: "Guest",
      text: [
        "The biggest thing is our data; our proprietary data is what keeps us one step ahead. Unfortunately, a lot of people don't know the power of their data, or it's a very limited scope. And recently I was at a private equity event, and I asked suppliers out there, companies out there; do you know your third-tier supplier? No one raised their hand. You need to know your suppliers all the way to the seventh level, because of what's going on with the Strait of Hormuz. So when it comes to supply chain, and something like the Strait of Hormuz, it's like what I did with the trade war with China; you want to figure out what's moving out of there. And it's not just the crude, it's the molecule. The cracking of the molecule creates 70,000 different products. So we're seeing chemical constraints; the price of paint is going up, you have plastic shortages, all because of the Strait of Hormuz. So this is where it gets back to needing to know your supply chain. So it's; do you hire an expert where they do it for you, or do you dive into your own data, create an agentic AI program, to see where you're vulnerable? And once you know where you're vulnerable, that's where your Plan B, C, D, E come from.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "That's a trade-off, I guess, right? When we try to diversify some of our supply chain; have an A supplier, B supplier, C supplier, or even 10 of them, depending on the volume we're trading in; all of that trickles down, because prices; since most of our audience is warehouses; even if we look at shrink wrap, the price of shrink wrap goes up, the price of plastic pallets goes up. There are so many consumables that go into it, and at scale that becomes a very big number. And even looking at what's going on with the warehouse space; how's that looking?",
      ],
    },
    {
      speaker: "Lori Ann LaRocco",
      role: "Guest",
      text: [
        "You know, the LMI recently came out; warehouse costs are up because inventory is still there, and we're seeing peak season early, so that means more product is coming in. And so, from the warehousing standpoint, if there are any FTZs out there; what are people doing there? Do you have enough FTZ space available for the next tranche of tariffs? Because, particularly with what's going on with the Section 301, the 232, the forced labor investigations; in the end, shippers are going to pay probably what they paid for on Liberation Day, after the layering of the tariffs. So you want to get one step ahead. What are the services? And this is something that doesn't matter if you're a small business or a large business; in today's time, service is what matters. So you need to take a hard look at yourself: what sets me apart from the others? Are there additional opportunities I can provide that others can't?",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "You bring up a very important point; that some percentage of that demand, on the other side, is also temporary. So yeah, we need it today, but how much of that will be left, let's say, a year and a half from now, when things maybe settle down and the supply chain eases out? So then now you have this empty space sitting. So it's a big cycle; what are your thoughts on that?",
      ],
    },
    {
      speaker: "Lori Ann LaRocco",
      role: "Guest",
      text: [
        "There are always booms and busts and overbuilding, right? The one thing with FTZs and bonded warehouses is that it takes time, because the government has to issue it for you. So it's not like you're going to have a boom right now; it'll be whatever folks started trying in January, most likely, where they might see some expansion. You don't want to be too greedy, right; because when you buy up more space than you need, that's sitting there costing you money. And honestly, you and I both know; when it comes to bonded warehouses, when I did a documentary for CNBC, with the surprise pop-ins from customs; if you have one thing wrong, that can cost a lot of money. So you really need to keep on top of it. But at the same time, when you see all the uncertainty, if you do have that space available; FTZs are more long-term, as you know; but even with a bonded warehouse, you can go to your potential clients, or others; toys were huge for bonded warehouse in the last trade war, most likely it'll be big again. So maybe if you have some extra space, you can market it now. There are so many disruptions within the business, outside the business, that get affected",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "But as a company, as a team, all we can do is be resilient, face it, and try to find the optimum solution. And the only way you can prepare yourself as much as possible for events like these; and if there are people listening right now who didn't prepare in the past, that's fine, but this is a learning: build up secondary [supply routes], build up secondary suppliers, etc. That's something they can do for the next time it happens again.",
      ],
    },
    {
      speaker: "Lori Ann LaRocco",
      role: "Guest",
      text: [
        "Exactly. And build the relationships. You have to keep in touch with the people you have relationships with. And if you drop those, because you're caught up in whatever the headlines are, when you call them because you need something, they can be like; why am I not talking to you, you haven't called me in six months, I'm going to go help the guy I've been talking to consistently.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Right. Or introduce yourself to another secondary supply chain provider, and be like, hi, what do you have? You've got to look at the flow of where things are going. And even the opening point you made, right; sometimes we think of people, when we go to associations or events, as competitors, but they're your collaborators as well. If I'm in, let's say, Toronto, and I'm a warehouse, and I know you're a warehouse in California; when things are changing, we can collaborate, we can help our customers together. I see that as very powerful, and, at least over the last couple of years, I've seen the whole 4PL model evolving a little bit more too. What are your thoughts on that; have you seen people collaborating more lately? What are you seeing? I'm very curious to know.",
      ],
    },
    {
      speaker: "Lori Ann LaRocco",
      role: "Guest",
      text: [
        "Unfortunately, I don't see as much collaboration as I think there should be. I saw collaboration, like with the symposium; a lot of people sharing ideas; but when it comes to teaming up for the good of moving trade, a little bit, but not as much. It's like people need to realize you're only special to your mom, you know; in all honesty, because everybody has an AI platform, and I get lots of pitches on \"this is never before, best ever,\" and I'm like, no, it's not; it's the same thing I saw from five other people. You need to step back from \"oh, what I just created is special\"; really? Is it really, truly special? Is it a disruptor? Are you disrupting the industry? Chances are, you're not. What makes you special is you, and your service, your personality. Are you a winner? Are you nice? In the end, it's you; you have to believe in yourself, and no one is going to think you're special out there, except your mom.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah, no, Lori; I think that was probably the; every time you say something, this is the most powerful thing you've said. That's very interesting, but no, absolutely. And more than specialty; even if I think about it; I'm out of space, right, but I get a lead, and you're like my neighbor, and I say, hey neighbor, can you store it for me? What is that doing? I'm not turning down a customer; I'm building a relationship with the customer, and with you, the neighbor. And the same way, you need some help tomorrow, and this gives me time; maybe another six months or a year; to get another building next door or whatever. It helps you in your transition while you're building yours. And I believe so strongly in collaboration, and even capacity-sharing in some cases, especially for services businesses; because, deep down, like you were saying about disruption, I feel people who create disruption; their motivator isn't money.",
      ],
    },
    {
      speaker: "Lori Ann LaRocco",
      role: "Guest",
      text: [
        "Their motivator is problem-solving, right; they're trying to solve for something. It's the way you look at a solution. A solution is how both parties win. It's not about how much money can I squeeze out of you because of a certain situation; it's what can we do together to make things better. That is the solution, that's the service. And so if you go to somebody; hey, listen, I don't have space, but Billy Bob does, right down the street, let me give him a call, let me see what I can do; and then you have an arrangement with Billy Bob about whatever it may be, and it's twofold; Billy [Bob]'s like, hey, thanks so much, Vic, next time I owe you one. And so it builds that community. If you build a community of service and thought leadership, it'll go a lot further. And particularly with the smaller businesses, you need to combine forces, because you're getting squeezed out by the big guy. Do you have the deep pockets of a DSV? Most likely not; but where do you start trawling? Where are the big guys putting their money, where are they investing? Because when it comes to logistics; and this is good for warehousing; I always say your future is based on where the big ocean carriers are building, because they build for the long haul, and infrastructure takes time to build. So, for example, where are they building right now? MSC and Maersk are spending a ton in Africa, and a ton in India; a ton. They're building roads, they're building terminals, they're doing all this. What are they going to need? Warehouses. What's one of the biggest problems in India? The warehouses are like two hours away from the port. So what do you do? Could there be warehouse areas closer to the port? That gives you a competitive advantage, because someone's going to want their stuff closer to the city, closer to the port, to get in and out.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "That's the best point, right; and that applies in every industry too. We look at other competitors, and see, okay, there's a big fish that did X, there must be some reason for that; what's that reason? Just being curious helps you piggyback, right; they might have banked on that opportunity as a first mover, that's fine, but you can be the second mover. Don't be the last mover.",
      ],
    },
    {
      speaker: "Lori Ann LaRocco",
      role: "Guest",
      text: [
        "Exactly. Their ROI is a lot higher to achieve than yours would be; that's the whole thing. So where else can you go, be part of associations, and, like you say, talk, meet; and if you're a nice person, people will remember. If you're not nice, people really remember that too, and people root for your failure, because people like nice people to succeed.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: ["Yeah. And there's also a saying; it doesn't cost you anything to be nice, right?"],
    },
    {
      speaker: "Lori Ann LaRocco",
      role: "Guest",
      text: [
        "Exactly. Exactly. And more often than not, I've just found that to be; and I think someone can't fake it, it just comes naturally.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "That's what I feel too; what do you think? If someone, like a jerk, thinks that even after listening to us he'll get convinced he should be nice; I don't think it's possible.",
      ],
    },
    {
      speaker: "Lori Ann LaRocco",
      role: "Guest",
      text: [
        "Yeah. No, I mean, I was talking to some people last week at DC, and I said, you know, we're all \"goobers\"; we're goobers for trade. And they all looked at me like, oh my gosh, I am a goober. You know what I mean? It's that self-deprecating humor; in the world of trade and logistics, we're an odd bunch. We like numbers, we like things that aren't mainstream, and we're solutions-based. So instead of just; yeah, we all know the problems, but what are the solutions, how do we become solution providers? Where's the thought leadership in that? I think that's when the cream of the crop rises; where you have those discussions, and the people who invest in themselves are most likely listening to your podcast because they want to learn; they want that actionable information where the ROI is on themselves and their business, right?",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah, absolutely. And it goes back to the same thing; knowledge, investing in yourself. And what's interesting; and it might be a total topic switch here; people are using AI in good ways as well. What I've been seeing over the last three to four months; because I built some internal tools, this AI bot and other things, and we've built a few things for our customers; and even what customers are using it for, my clients, friends, everyone, at a small scale; even if you're not a coder, you can build a lot of smaller things using AI coding tools. And they're useful. But the problem I'm also seeing is that it's fine up to the point where you're using it for internal use; like, I built something myself, I'm not a coder, I did it just for scraping the news. The other problem I've been seeing over the last three, four months is that people are pretty much vibe-coding an enterprise system,",
      ],
    },
    {
      speaker: "Lori Ann LaRocco",
      role: "Guest",
      text: ["Oh, wow."],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "and trying to sell it to other companies, right? So they're building; you know what I mean? And it's so funny; this was just three weeks back; I was approached by someone, and this guy had bought a company, without sharing too much what it does or doesn't do, just keeping it very simple; but it was a business-enabling system, right, like a CRM, a WMS; those fall into the business-enabling system category. For $1.2 million, he bought it outright, only to find out that, yeah, it works, but it has bugs, and everything was vibe-coded, and it had about 50 or so users on it.",
      ],
    },
    {
      speaker: "Lori Ann LaRocco",
      role: "Guest",
      text: ["Oh my God."],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "And now we're working on stripping all that down, and pretty much they'll have to spend more money to restructure everything as commercial-grade software. And it's sad.",
      ],
    },
    {
      speaker: "Lori Ann LaRocco",
      role: "Guest",
      text: [
        "Oh my God. No, no. I mean, and that's also garbage in, garbage out, you know? And then I've seen, even with Gemini; I was creating a graphic for my Substack, because you can make some cute graphics with it. I loaded data from Import Genius and put it in, and it didn't look right. Got on the phone with my contact, and I was like, look at this. He's like, Lori, that's not my data. It pulled additional data; the AI, with the Import Genius data I put in; and it was wrong. So you have to be very careful. And after that, I was like, screw that, I'm never doing that again; because you're thinking it's going to [work], and I looked at it and thought, what is wrong with this? I knew this story, I knew the data. And he was like, I don't know what that is, but that's not our data. I said, okay, that's enough, I'm not doing it. And what I think the problem is, is over-reliance. People aren't seeing it as a tool, they're seeing it as an assistant. Look at the predictive writing; when you're writing an email, it's like, really? No. How many times has it used that word? It's so overused. And, I'm a journalist, so; you don't have to say \"said that,\" you can just say \"said\"; there are certain things that drive me nuts. But I think also, the younger generation; I've got three kids; some of them use it to write reports, and I'm like, it doesn't have the personality, it doesn't have the depth of knowledge, it doesn't have the emotion, and you need the people. And that's why, when you're looking specifically at data, and at trends, you need multiple sources.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "If I kind of summarize everything; and I'll hand it to you to conclude; I think one of the things I learned from this is: one, increase your knowledge, and in that process, try to work with your peers, because a lot of smaller companies can combine to be like bigger companies, or compete with them. And third, use AI as a help, not as something to fully rely on. But I'll give it to you; anything you want to add?",
      ],
    },
    {
      speaker: "Lori Ann LaRocco",
      role: "Guest",
      text: [
        "Sure. I mean, in the end, you have to know, as an entrepreneur, you have to know your worth, right? Because; why are you doing this? It's a struggle to start, and you need that belief. You need to take that into the room when you're negotiating freight rates, negotiating in general. And then there's also the power of; we find out which companies have programs for small and medium-sized businesses. Like I said, the Port of New York and New Jersey have a program; they have a program for small and medium-sized businesses, for free. A lot of people don't know that, but they have one; I know because I spoke with the CEO. So you have to arm yourself; do your Googles, or even ask; this actually worked for me; if you go on something like Gemini, you can just ask, which ocean carriers offer small and medium-sized business programs or offerings, something like that.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Absolutely. Thank you so much, Lori, for all the insights. And after this, when anyone asks me what the main learning was, I'll say; you have to listen to this to understand the power of \"V.\" I think that's the new title of the episode, not the one we'd planned.",
      ],
    },
    {
      speaker: "Lori Ann LaRocco",
      role: "Guest",
      text: [],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Awesome. So whenever we post this, we'll drop your LinkedIn in the post so anyone can reach out to you. Once again, thank you so much, Lori, for your time; have a wonderful rest of your week and day. And thank you everyone for listening in.",
      ],
    },
  ],
  "why-scaling-breaks-operations-before-it-fixes-them": [
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Welcome everyone to Execution at Scale. As you know, I'm Vikrant Naik, founder of Lenify and Curator. I started this series because in my opinion best conversations in this industry always happens over in hallways and over coffee or over a beer sometime and not exactly on the stage. And here I have John Brooks with me. Do you prefer John or Jonathan?",
      ],
    },
    {
      speaker: "Jonathan Brooks",
      role: "Guest",
      text: ["Either is fine. John's good."],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Awesome. John is CEO of Warehouse on Wheels or as called WOW and they provide on-demand mobile storage and logistics solutions for warehouses when they're running out of space. They're right now operating across 37 locations across US, Canada and Mexico with over 36,000 trailers and as I've heard in process of expanding to 100,000 trailers very soon. So very excited for that. And before building WOW, John actually spent his career in finance and operations and leadership. So I'm very excited to chat about how he started the company. I'm really excited. And anything else like John you would like to add before we start, I guess?",
      ],
    },
    {
      speaker: "Jonathan Brooks",
      role: "Guest",
      text: [
        "Well, I guess first thank you for having me. I appreciate it. I'm amazed by the businesses you've built. You're a published author as well. So maybe I should just shut up and listen today because I think you have a lot to offer as well. But I think at its core why I wanted to have these sort of conversations is because I think operators right now wish they were running their business instead of reacting to it. And so that's the conversation I hope we're going to have today and I'm excited to get after it as I like to say.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "So tell me a little bit more. So like most of the people I have talked to in my career, I would say not just this podcast, have been and who are in this logistics space and when they start, they're more on the like operator background. Like what I mean by that is that either they were working in a warehouse as like in operations or maybe sometimes in sales. But I'm trying to think but I don't think I've seen anyone from finance background, like, you know, starting the company and being the CEO. So like, tell me what that is like, how does it feel like, like, you know, and maybe also from the perspective, because now you are in operations as well. So like, in your opinion, what does that journey looks like, I guess, or what does a finance guy knows, which our operations guy does not know by starting the company or maybe vice versa, sure, sure.",
      ],
    },
    {
      speaker: "Jonathan Brooks",
      role: "Guest",
      text: [
        "I think if I had my finance hat on, I was always focused on kind of capital allocation. And as I've evolved to become more of an operator through a lot of great experiences and opportunities that people have afforded me, I often say I was kind of cosplaying as a chief operating officer, all throughout my career, walking the shop floor and trying to help out where there were gaps. But I think that shift is really that awakening to how much money is hidden in process and not just equipment. And so that's really, I think, at the heart of what we try to do, because what you'll see with many operations is they run out of time even before they run out of space when they're trying to execute operationally.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "So when you say like you are trying to transition from like finance to more focusing on operations now, so like, I guess, how was the scaling happening? And wow, like, you know, people even struggle here to get like a pallet delivered on time, you know, like, and it's not easy. It's not easy at all. So tell me a little bit more about that. Like, what was your strategy?",
      ],
    },
    {
      speaker: "Jonathan Brooks",
      role: "Guest",
      text: [
        "So my career basically started at Arthur Anderson. And I was at Arthur Anderson through the collapse. So I like to say I was rearranging the deck chairs on the Titanic, as that was all happening and unfolding. And so that was a big shock to me, because if you had asked me 25, now 30 years ago, whatever that was, what I wanted to be when I grew up, it would have been a partner at Arthur Anderson. So I was all in. And so that was a bit of a step back. And oddly enough, as fortune would have it, I was working on my MBA at Notre Dame at the time, I was doing it on weekends and nights. And it really opened my eyes to the bigger picture beyond finance. And it started really driving that curiosity for organizational development and operational excellence.",
        "And so I leaned into early in the WOW build into kind of that organizational development. And what I decided was we were going to build our group in such a way that the local markets would be run by what I literally call a local market CEO. That person, that guy or gal is going to run that market, say Louisville, Kentucky, Dallas, Texas, and 150 mile radius. And they're going to make every decision they need to make to hire, to fire, to buy and to sell in that market. Now, we'll define some parameters around the economic return and the things that we're trying to achieve. But fundamentally, don't come back and ask me; you have the power to do this.",
        "And so to do that, what I really felt was necessary was we had to have some sort of simple anchor concepts so when I tell people that they're like, oh, yeah, that sounds great. And, you know, yeah, if you turn your teenage kid loose with a credit card, God only knows what's going to happen. So what we leaned into was the concepts in the book Extreme Ownership. So we felt like the tenets in that book, as I have met Jocko and Leif early, early in their careers before they were the celebrities they are now, and they resonated with me. They're so simple. And so those were the calls, the markers that we set as we built our team and said, these are the tenets we're going to follow. And we're going to believe in the buck stops with you. It is about extreme ownership. And now go do this.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "I mean, all I can say is like, you know, I literally have no words for a couple reasons. One, that is amazing. And two, I follow a very similar process in my business. So I mean, that means like, you know, I'm on the right track, seeing your success and growth. And I have personally, I don't know about if you have met other CEOs or people who have strategized, I've never seen anyone say this thing. And this, honestly, like to me, at least it fully explains the path of growth. And because I guess like the biggest problem here is like, like you said, like, the corporate structure, etc. And I always hated it. So right after college, I had opportunity to get my dream job, like, you know, like you wanted to be a partner. In Arthur Anderson, I wanted to be one in Deloitte or KPMG. And I just didn't do it. I could not even like take my full job there.",
        "You're talking about like, you know, because obviously in this whole journey, because warehouses, including 3PLs, are your primary customers as well, and also your partners. So I'm sure you talk to a lot to them, and you're trying to solve a problem for them. So from your experience, like where in the whole process, we have seen like, you know, that whole breaking point, where do you see that they get stuck at a certain revenue point? And what does it look like operationally?",
      ],
    },
    {
      speaker: "Jonathan Brooks",
      role: "Guest",
      text: [
        "Time and time again, we see that the break point is almost always at space and dealing with space, whether the docks are backing up, or, you know, trailers are stuck in the yard, drivers are waiting. The flow breaks because there's no place to stage product. And then ultimately, the costs show up when you're paying overtime or detention fees or demurrage. And so I see operators consistently misdiagnosing that as a labor or carrier problem. So they add a shift, maybe they add another 3PL, they add a TMS, but none of it solves the constraint. It's really not physical, it's procedural. And so, you know, the right question isn't really how do I move the product; it's where is the wait happening? What is that costing me per hour? And oftentimes operators can't answer that question.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "It is so common, especially for 3PLs, that they need to expand, but they cannot take the risk either. So for instance, let's say I'm in a 100,000 square foot facility. Now I have this one client which is needing like 25,000, 30,000 square feet, let's say approximately, for pallet positions. Now, obviously, I cannot just magically add 20,000 square feet; I have to either add a warehouse, or get a bigger one. Now the question is, okay, even if I trust this deal, I cannot really get a 20,000 square foot warehouse, I'll get a 50,000, whatever the breakeven point is of the math. Tell me some more experiences around that, because you work with everyone, as you said, from renting one or two trailers, one-off, all the way to like Amazon and the big players, everyone, right? So if you see that small space need, what are some of the ways they have utilized WOW to be able to help them scale?",
      ],
    },
    {
      speaker: "Jonathan Brooks",
      role: "Guest",
      text: [
        "Yeah, absolutely. No, it's a great question. And just hearing you talk about those scenarios and ways to solve it, sub-renting space or renting a new facility, I want the world to understand that, hey, I'm here to help you not have to deal with that. I'm the guy who doesn't need a five to seven year lease. I'm a guy bringing you square footage that's, in some markets, two to four times less expensive than that warehouse square footage. And so my mission in life is to make sure that all operators know that I'm your break-glass-if guy, I got the easy button for you. And so that's what we're about.",
        "But to your specific question, I would tell you there's a couple of really great stories about how people have used us. So there's a global auto manufacturer, one that people would recognize, we literally study their manufacturing processes in graduate school, and some of us in operations, so well respected. For 30 years, they've used our trailers in their supply chain. And so that's a heck of a good housekeeping seal of approval, if those guys have trusted us for that long and haven't found a better mousetrap, it speaks volumes, I think, to what we offer.",
        "The solution is: they require their parts suppliers to send everything in reusable packaging. That's happening day in and day out flowing through the supply chain. If there's a disruption of more than four hours anywhere in their supply chain, that reusable packaging starts backing up. At that moment, we insert our trailers into their supply chain, and it starts holding and stocking that reusable packaging until the lines in the supply chain can get back into balance and back into synchronization. So I think that's a real testament to a very specific use case.",
        "In other instances, I've got another plastics manufacturer, and they make all the drinking cups for a restaurant that we all would stop at to get our kids a happy meal. And in that process, they know that over a year's time, they have to make X millions of cups. And so in the plastics game, it's really about throughput; you optimize your margins by optimizing your throughput, not by changing tooling over on production lines and so forth. So they'll try to optimize knowing what the year's requirement is, their input of raw materials, by buying resin at the right price, and then they will produce that entire year's worth of cups unprinted. They load them, palletized and shrink-wrapped, onto our trailers and park them 300 yards from their facility.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Really appreciate what you said there, most of the time when people are looking, they're focusing on equipment, etc., and space, but what about the process, and fitting into that process? Sometimes more often than not, solutions have to be a little bit out of the box. Because if we are trying to do the same thing we did two years back, yeah, it can work, but it cannot do crazy wonders for you to help you grow like 5x or 10x over the years. So I really appreciate you sharing that.",
        "So what are your thoughts around that, going a little bit deeper on it, like how we touched on different aspects, space, flow, process, cost, what do you think, like, when a business in general is getting stuck with all these things together, what is your observation there? Where do they, how do they get out of it, I guess, to solve the structure, maybe more, I guess, psychologically, if you may, not as much execution-wise, but how do they get out of that mindset?",
      ],
    },
    {
      speaker: "Jonathan Brooks",
      role: "Guest",
      text: [
        "Most operators have three departments solving the same problem in three different ways, and nobody kind of owns the gaps in between. And the gaps are where the pressure kind of compounds. So if I walk into a typical 3PL or shipper, you got the warehouse manager who owns the space, the transportation manager generally owns, call it the flow, and then the finance team owns the cost. So three people, they've got three different scorecards and three different sets of incentives. And so the warehouse manager kind of solves his number by adding racks and other infrastructure. The transportation manager solves his number by adding carriers. And then the finance team solves their numbers by trying to squeeze both of them.",
        "So nobody's paid to solve the gap. Nobody walks the yard at four o'clock on Friday and asks, what's this costing us all together? And that's the question I think that gets missed. And to your point, it's when space pressure, flow pressure, cost pressure compound, and then you get to the fourth pressure, which I think is resiliency pressure. That's the day a customer changes a delivery window, or the port shuts down, or we get some tweet from DC that throws us into some sort of chaos, and then the entire system snaps.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "I totally agree 100%. So tell me a little bit now, switching gears here again, about your company growth journey, in terms of like 4,000 to 36,000 trailers. What were some of the breaking points for you, regardless of how good we do it?",
      ],
    },
    {
      speaker: "Jonathan Brooks",
      role: "Guest",
      text: [
        "No, I've made mistakes along the way; I used to have hair when I started this. So absolutely. No, that's a great question. And I would tell you, we've had a very fortunate and blessed run, so not too many mistakes, and none have been catastrophic. So knock on wood, we're good there.",
        "The thing I think that we've learned along the way is we probably have to be quicker to fire, quite honestly. We're very thoughtful in our hiring processes, but we oftentimes struggle with taking too many chances to help someone get along and get up to speed with how we do things. Our business is extremely simple, tactically speaking, and there are just some core tenets; you can see the KPIs, is it working or is it not working. And so that's probably been one of the things as we've scaled; we've had to figure out better ways to identify the issues, give that one shot to make it right, but then otherwise we need to move on because of the trajectory and the speed of our growth.",
        "As I mentioned, we've grown through 25 add-on acquisitions. And there are oftentimes those businesses you described a few minutes ago, it's the 65-year-old founder whose children don't want the business or have other interests in life. And so they don't have an exit strategy. And that's really where we've come in and become the acquirer of choice.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Tell me a little bit around that, and this could apply to your business, or, I mean, at the end of the day operations is everywhere, so this could apply to any business, or more as a person, what you see. Earlier we talked about how there's a resilient situation, right, like there's a tweet which drives everyone crazy, or something like COVID, right?",
      ],
    },
    {
      speaker: "Jonathan Brooks",
      role: "Guest",
      text: ["Mm hmm"],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "You said that we cannot take that handbook; it's fiction. I love that statement, by the way, which is absolutely true. And in most cases, even on an average day, most of that is fiction, in my opinion. But so, like, a person, how does that person look like, you know, who is, I guess, able to problem solve in that scenario, think of it, could be a warehouse manager or operations manager, it doesn't matter, how does that person look like? I don't care about designation. How does that person look like who's ready to do that? What are the core values that go into that person?",
      ],
    },
    {
      speaker: "Jonathan Brooks",
      role: "Guest",
      text: [
        "Yeah, it really kind of gets back to what we talked a little bit about, scale looking good on paper, and flex looking good on a bad day. When I think about it, those that have built to scale mean they can do more of what they already do. And I guess if they're built to flex, they can do something different than what we planned for. And I think a lot of operators kind of confuse those two things.",
        "Because documented resiliency in a binder, okay, it has playbooks, a contact list or chart for the day the hurricane hits, or whatever the plan is. But operational resilience is like muscle memory. It's whether the dock supervisor at four o'clock on Friday actually knows what to do without reaching for the binder, that muscle memory, I'll call it. And you can tell the difference by what happens on a bad day. So for me, I've seen documented operations run to the binder, whereas resilient operations just really run the play. They react. It's like that athlete that practices and practices and practices for that one moment in time that's going to really make or break the situation.",
        "So resilient operations in our world kind of have slack on purpose, whether it's slack in space, time, or cash. I mean, some people hearing this probably think, well, slack looks like waste on a P&L. And I would say, well, it's really not waste; it's insurance for the day you need it.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah, I mean, I think that's a very simple way to put a complex scenario. I love it. But definitely, absolutely true. And I was actually trying to ask more around an individual, right? Like, let's say I'm hiring someone. I'm trying to understand, because you have very amazing core values; I'm trying to learn a little bit here. If I'm hiring someone, how do I hire that person? What do you look for in that person when you hire them? Maybe very specific",
      ],
    },
    {
      speaker: "Jonathan Brooks",
      role: "Guest",
      text: [
        "Yeah, so I would tell you that I ask two fundamental questions in every interview. The first is: describe to me a situation in the last 90 days where you went home from work and you thought to yourself, this is why I do this; this was a good day. And be specific. I want to know the situation, I want to know your role; don't sugarcoat it. It's such an off-the-wall kind of question, most people don't have a canned answer.",
        'And then I flip the lens and I say, okay, now tell me about a bad day in the last 90 days, when you went home and you said, I do not want to deal with this, this is not what I signed up for. And what I find in those situations is, if the good day is "all hell broke loose, and we fought the fight, we won the battle, and this was cool, and I was into it", that\'s great. If the bad day is "all hell broke loose, and I wanted to go hide in my office", you start to understand those people that embrace the storm, kind of the buffalo mentality. You go towards the storm instead of the cow, which walks away from the storm and has to endure the pain longer. And so for me, I want that buffalo mentality; I want that person that\'s going to run into the storm and embrace the chaos.',
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "I totally agree with you. Obviously, especially the last six, seven years have been pretty crazy. And I was just thinking that you even did the restructuring in 2021, right? So I started LeanFi in 2020; it was actually literally two months before COVID. And at that time I was re-strategizing my first company, totally pivoting it, because I was starting the second one. So I was going to focus more on that.",
      ],
    },
    {
      speaker: "Jonathan Brooks",
      role: "Guest",
      text: ["Way more valuable than any MBA you could have earned right there."],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Believe it or not, a lot of people don't know this, and I don't mind sharing this, because I do feel that there are people who are in this growth phase, especially, again, emphasizing that whole SME space, they feel like they are doing something wrong, but it is not. There are so many moments, because the ground realities, everyone looks at success, and there are 10,000 quotes about it, but there is no one out there telling you, \"oh, there was this moment where I almost went bankrupt.\" There have been nights where I literally cried as a man, and I'm not shy to even admit that, because it's a reality of it, right? When you are trying to build something which is unconventional, it is not easy. There are so many challenges, and for me, I went a very different route, I was pretty much confident that I'm not going to involve any investors, for some reasons. So that adds on a very big burden as well, because I'm definitely the last one to be paid, for sure.",
      ],
    },
    {
      speaker: "Jonathan Brooks",
      role: "Guest",
      text: ["Yes, sir."],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "And then all the people, pretty much the entire family is dependent on me, which I think, even CEOs who have investors, the good ones think like that too. But at the end of the day, my point is that it's too much pressure. But going through it, when I look back four years, it was all worth it. So just being persistent, and yeah, you sharing that reminded me a little bit about the bad times which I had.",
      ],
    },
    {
      speaker: "Jonathan Brooks",
      role: "Guest",
      text: [
        "Yeah. And please understand, we've felt this freight recession, and what I think is truly an industrial recession in this country, in the last 18, 24 months. Our services generally don't intersect with data centers, or chip building, or big pharma, it's just not what we do. And because of that, we've been weathering the storm with our friends in automotive, with our friends in the plastics space, with our friends in certain aspects of retail. And so, yeah, it's still been a challenge. There were the COVID highs, and then there were what I would call this freight-industrial-recession lows. And I believe we found the bottom of it and we're coming out of it. Now, our latest conflict in the Middle East, I think, has only complicated our lives, especially for those of us in and around transportation.",
        "So, again, it is what it is. There's still first-world problems at the end of the day, because so many other people are suffering and have so many other challenges. I have this little saying, it's written, you can't see it, but I have windows here in my office, and at the very bottom, where no one else can see it, is some letters: N-C-W-H. And so when I'm sitting in here and I'm feeling all glum, and I'm thinking, \"woe is me, why can't I get people to do what I want them to do, why aren't customers renting more trailers\", I turn and I look out the window to enjoy the landscape of this office. And I look down at that corner, and it reminds me: nobody cares, work harder.",
      ],
    },
  ],
  "why-leadership-is-the-hidden-process-problem": [
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Welcome everyone to Execution at Scale. As you know, I'm Vikrant Neb, also known as Vic or Robby to some of you, founder of Leanify and Kurieta. This series exists because the best conversation in this industry happens in hallways and over coffee and not really on stage. So, I feel like keeping that transparency, honesty and impromptu is the best way. And me and Tanya have had multiple of those conversations. So, joining me today is Tanya, a founder of Prepared Leader. Tanya is an industrial engineer who has spent her career at the intersection of operations, leadership across the supply chain, warehousing and distribution industry, helping operators build the kind of leadership that actually holds up under pressure, right? So, we are executing at scale and executing under pressure always. So, Tanya, welcome to Execution at Scale. I'm very excited about this session given we're both industrial engineers. So, before we deep dive into it, anything else you would like to add on, if I missed anything about you or in general?",
      ],
    },
    {
      speaker: "Tanya",
      role: "Guest",
      text: [
        "No, I appreciate the introduction. Thanks so much for having me and I agree, very excited about this conversation as we have a lot of passions around this industry in common.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Well, awesome. So, Tanya, tell me, let's start by knowing a little bit about your journey. I always like to do that. Some of our speakers may know about it, some of them don't. So, I would love to know how you ended up founding Prepared Leader and your journey.",
      ],
    },
    {
      speaker: "Tanya",
      role: "Guest",
      text: [
        "Yeah. So, like you said, my degree is in industrial engineering and I started straight out of college working for Target at one of their 1.2 million square foot regional distribution centers leading a team of warehouse workers. So, it's the first time I'd ever worked in a warehouse and definitely the first time I'd ever led a team. I'm very, very thankful that I started my career at Target because they had a really amazing frontline leadership development program. On my very first day, this was way back in the early 2000s, I got a binder that was about this thick with all the SOPs that I needed to learn. I was paired up with a certified trainer who had received training on how to train other leaders well. And it was just really fantastic in regards to setting me up for success in a brand new role in an industry that I hadn't worked in before because I had just started my career.",
        "And so, spent eight years at Target, both in operations, spent a little time in HR, then went to Coca-Cola and did more leadership in supply chain and also some project management. Then after those two positions, I was able to take some operations roles in small and medium sized businesses here in the Phoenix area where I live. So, it was really great for me to be able to get perspective on how a big corporate entity runs, but then also get experience on how smaller companies run as well.",
        "And in that time frame, I had found out about folks that do consulting and it just sounded so fun to me. I love solving problems and digging into challenges to do everything that I can to find solutions. And so, the idea of being able to do that on a regular basis, as well as train leaders, it just sounded like a dream job to me. And so, I decided to found this company, which started in March of 2024. So, we just hit our two-year milestone, which is so exciting. It's been such a wonderful journey and I've been able to work with just the greatest clients and leaders that just melt my heart for how much they love their people and they love their operations. And so, being able to support them and help them feel more equipped and confident with leadership tools that they can use right away to lead their teams at a very high level is just a really fulfilling thing for me and gives me a lot of meaning in the work that I do. So, I feel really grateful and blessed.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "That's wonderful. And I'm sure that is an exciting journey coming in from working with Target, where things were maybe a little bit more organized, you are trained way before you start working, and then seeing some of the SMB operations and seeing that, oh, everyone is running around. Why? So, I'm a little bit curious to talk briefly, like you mentioned, about the leadership training program and everything at Target. So, what did it look like just at a high level? I know that we can probably talk about it for hours.",
      ],
    },
    {
      speaker: "Tanya",
      role: "Guest",
      text: [
        "Yes. So, how it worked is Target's regional distribution centers at the time were all set up in a prototype format. So, every regional distribution center that you would go to, anywhere in the company, they all looked exactly the same. And that allowed them to be able to standardize SOPs that could be used through their entire DC network. It was really amazing for them to be able to roll out changes very quickly because everyone was working the same way, following the same processes.",
        "So, essentially, I learned all of these SOPs in partnership with my executive trainer, and all the SOPs were documented online. So, we would read through them. Then in our workbooks, in our binders, we would answer questions to ensure that we grasped the knowledge. Then I would go out on the floor with that trainer and then we would actually use the information that I just learned. So, it was really great at kind of this process of read the information you need to know, understand it and reinforce it through filling out these workbooks, then really apply it on the floor immediately with this trainer. So, it was really a great experience to be able to have that solid foundation.",
        "And, because this was my first job out of college, I just kind of assumed, oh, cool, this is how training and onboarding works. But then as I went farther down in my career and met other people in other companies, I realized that my experience was very much the exception rather than the norm. And so, that's really what I look to try to change is to help leaders be able to have the tools that they need to lead their teams well. Because what I found is a lot of companies promote from within, which I love and I'm definitely a huge proponent of growing your talent within the organization. But too often, we kind of assume that if someone is a really great order picker, then they'll also be really great at leading order pickers when the skill set is completely different. And so, really helping companies understand that there are specific leadership skills that are necessary just like any job. You need to learn the technical aspects of any job that you have, leadership is no exception. You need to be able to equip these individuals with the tools that they need to drive great accountability, to set expectations, to have conversations, to reinforce those expectations, to drive really positive business results. All of those are tools that need to be learned in order for them to be highly successful in their roles.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah, and like, you know, what you just said, like an order picker, if they're good at picking orders, thinking that they would be managed, like good at leading pickers. And it also reminded me that I forgot to mention the title of the series, or like the episode, before we started. So, it kind of defines it too, why leadership is the hidden process problem, right? So, that could also be like in a process. So, when I started in operations too, as you know that I'm interested in engineering as well, everything was like, okay, more operations driven, process driven. But over the career, I also realized that other things, except line balancing, time studies, six sigma, also, everything in our business, or even around us, is like a process. So, kind of like even promoting someone is kind of a process, and maybe sometimes you cannot have a step-by-step process of like, okay, this is how I would promote, but having some sort of general framework, right? So, what are your kind of thoughts on that? I guess what I'm trying to get at is that how leadership, operations and everything, they kind of work in a synergy, right? So I want to know your thoughts on that a little bit.",
      ],
    },
    {
      speaker: "Tanya",
      role: "Guest",
      text: [
        "Yeah. So, one thing that I have seen happen rather frequently in a lot of companies is, to your point, there's a lot of effort put into maybe bringing in lean or six sigma projects or new software and technology, and creating and spending all this money and time and resources on optimizing the operation. And all these great projects are done. But then when it comes to actually executing it and setting up the people for success who will actually be executing this new process every day, who will hold their teams accountable to that every day, there's kind of this disconnect.",
        "My favorite analogy, I like analogies and stories, is if you think about it as a relay race: if you're running in a relay race, when you hand the next person the baton, you don't want to toss it at them, you don't want to throw it at them, you want to make sure that their hand has a full, strong grasp on that baton, and then you let go. And that's where I think there's kind of a miss sometimes, these new process, project, software rollouts happen in one meeting or one training, and then it's just expected that everybody fully understands exactly how to do it and how it impacts their day-to-day work and how they should reinforce this with the people on the floor. And it just doesn't work that way. There needs to be constant follow-up, constant communication, constant support for these leaders, because a lot of times the company may feel these initiatives are really great and transformational, but when you're a leader and you already feel like you have 50 things on your plate and you get one more thing, it doesn't feel like a good thing. It should, but it feels like, great, now one more thing I have to pay attention to or manage, instead of really seeing how it can benefit them and the business and their work.",
        "So really making sure that when we develop these SOPs, when we use great tools like Lean and Six Sigma, that we're not just piling it on these frontline leaders as one more thing they have to do or manage, but really helping them understand, everybody wants to know, what's in it for me? We're all kind of selfish at the end of the day, right? Help them understand what's in it for you, to help you feel more confident when you lead, to drive stronger business results, to create a stronger team culture and morale and engagement. How does this tool help you do all of these things so that we actually make your job better, easier, faster, more fun? So I think that's where we can do more work, to have that synergy between projects, project management, operations and leadership and the folks that are directly on the floor doing the work.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "I totally agree with that. And, you know, as we always talk about most of the things, you and I always chat, because I've had a similar journey. So, what I'm intrigued is, when we think about overall, like you said, one more thing for a frontline leader or a founder to have to do, since you just said that it was a two-year anniversary for you, right? How are you kind of juggling that? I guess sometimes making a framework for your own self becomes a little bit more difficult than making a framework for someone else, which I realized while working on building my company. So what are your thoughts on that?",
      ],
    },
    {
      speaker: "Tanya",
      role: "Guest",
      text: [
        "Yeah, that's such a great question, because I am 100% feeling that right now. So I think it's funny, you know, the whole analogy of the cobbler's kids don't have shoes, it's very much how I feel in my business. I actually went to a conference back in February, and a woman gave a keynote talk, she's actually the CEO of a cleaning company in Australia, a seven-figure cleaning business, super successful. And I went up to her after and said, thank you so much for your message, a lot of what you said really resonated for me. I think where I am at in my business right now is I really need a \"me for me.\" What I do for clients, I need someone to help do for me. So I actually started working with her, she's now my business coach, to help me talk through some things, a fresh pair of eyes, a great experienced mind who has been there, done that. Working with her has been such a bright light and such an encouragement to me.",
        "So I think that's the thing we all have to remember, we don't have to be on these journeys on our own. There are so many people we can learn from, so many different networks we can find. I'm very grateful to be part of a couple of different associations locally where I've met amazing people I can bounce ideas off, both from an operational and entrepreneurship standpoint. I also do some professional speaking, so I've got a network of professional speakers I learn from. So it's just really important to know we don't need to feel like it has to be something we do on our own. It is important to build a community and support each other, because we're all on our own journey in different ways. And I think sometimes it's easy to look at people's LinkedIn profiles and think, oh my goodness, they're so successful, but there's a lot happening behind the scenes that we don't know about. Our own journey is our journey, and the pace at which we learn and grow is up to us.",
        "So that's something I'm actively working on now, how to find resources and great people I can work with to cover the areas of the business I'm not great at. I'm an ops girl, I love operations. So now I'm looking for people who can help me with the sales and marketing side of things. All the things, I like doing those things, they're kind of fun, but is that the best use of my skill set? No. So how do I make sure that I'm maximizing my strengths to make the most impact in my business and in the businesses of my clients?",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah, absolutely. And, you know, I think that's what I found out too, sometimes coaches need coaches. Because, as much as we know that perspective of having a fresh set of eyes, what I realized, between the time of just consulting and building my companies and businesses, is sometimes you get so involved in your day-to-day stuff that you lose a bit of your creative thinking. And also, sometimes it is about just a fresh set of eyes, I think that's the right way to put it too. When someone asks me, okay, why do you need a coach or mentorship or a consultant? That's what I say, it's not like you don't know what to do. Sometimes you do, sometimes you don't. But sometimes you know, okay, this is what I should do, but really being able to do it, it's like hiring a coach while you're going to the gym, right? If I know that my trainer is going to be there three times a week, even if I don't go to the gym five times a week, I've paid him a couple hundred bucks, I really need to go.",
      ],
    },
    {
      speaker: "Tanya",
      role: "Guest",
      text: ["Yes"],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Same thing with, I started learning golf recently, as you know. So I had to reschedule my last week's session, and he was like, I'll do it for free this time, but next time I'll charge you for the session. He's not trying to be, I see why he's doing that, it puts you in discipline, right?",
      ],
    },
    {
      speaker: "Tanya",
      role: "Guest",
      text: ["Yeah, that's also there."],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "And it's funny you said that about best use of time. So I have multiple mentors, coaches, everyone I like, different ones in different areas for different purposes. I was talking to one of them a couple weeks back, and she said, what are the two things, top two things, that you wish you got done last year, because there are some things you keep putting off. And I was like, you know, see, this is why I don't do it, because one, I don't enjoy it. It's not like I don't know how to do it, I know how to do it, I can tell you how to do it, but I don't want to do it. I don't even want to train one of my employees on how to do it, I don't like it. And you know what happened just because I shared this with her? I knew the problem, I knew the solution, just because I shared it with her and she said something, I got it done within a week, and it felt so good and refreshing. Like eat the frog in the morning kind of thing.",
      ],
    },
    {
      speaker: "Tanya",
      role: "Guest",
      text: ["Yeah, that is a book."],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "So I totally agree. So, going a little bit more into specifics now, as you said, you work with, even before the company side, you work with smaller operations, and even now you're working with leaders who need the help. So what are some of the common leadership failures you have seen? Let's say specifically on the operation side or even in general management, it could be anything. I mean, one of them, like you talked about, maybe around promoting within the company, right, an order picker becoming a supervisor or leader of the pickers, most common things that exist. So what are some of the other ones? I'm really intrigued.",
      ],
    },
    {
      speaker: "Tanya",
      role: "Guest",
      text: [
        "Yeah, I would say two of the biggest ones and most common that I see. One is a lack of clarity around performance expectations. And two, a lack of having the difficult conversation when it's needed. So first, sometimes leaders have a tendency to just kind of assume that someone knows what it means to be highly successful in their role, or what it means to really win in their role, because they feel like, okay, I hired them into this position, so they should know exactly what I need them to do, without actually specifically telling them those things. I see this, unfortunately, most often with CEOs that I work with, they hire people, and then someone isn't performing exactly how they'd expect, and they start to feel really frustrated, and instead of having the conversation, they let that frustration build and build until they start talking to me about it. A lot of times they're at the point where they feel like, that's it, I just need to let this person go and move on, when the conversations haven't even taken place in order to give that person a chance to meet expectations.",
        "And so that goes to the second thing, being able to sit down with someone and say, hey, this specifically is what I would expect you to master in your job. Here's where you're not quite meeting that mark. Here's what I need you to do better. Here's how I'll support you and follow up with you over the next whatever timeframe. And here's where I will follow up with you to let you know if I'm seeing the progress that needs to be made. Those conversations can be so uncomfortable for leaders. And what I've discovered is I don't think it's because they don't care about those folks, I actually think it's because they care too much. They don't want to feel like they're putting too much expectation on someone, or they're afraid someone may feel attacked in the conversation, or that the person won't like them anymore.",
        "And so that's why I coach leaders to have the conversation in a very fact-based way, that way we're taking the emotion out of it as much as possible. Obviously we're human, so there's going to be some emotion involved, but we're taking the emotion piece out as much as we can, and saying, here's specifically the behavior I have seen that needs to be different. Maybe these are the tasks or responsibilities that you are or aren't doing that need to change, but really sticking to the facts. That way nobody feels like it's a personal attack on them as a human, or on their personal characteristics, it's truly addressing the specifics of the behaviors or tasks, actions or responsibilities that person needs to do differently. And helping someone have the support and feedback they need to understand where the bar even is. That's one thing I tell leaders, we should let our team know where the goal is before they even step out on the field. So how do we make sure it's very clear what winning looks like in their roles?",
        "And that's why, when I work with clients, one of the first things I typically do is help them create what I call a job profile. Everybody calls it something a little different, but something very specific that lists out exactly what is expected of you in your role, both from a tasks, actions and responsibilities standpoint, and from a cultural standpoint. So if you're saying these are our company's core values, how would that core value show up every day? And help bring that home and make it more practical than just kind of a vague word on the wall that core values can sometimes be, really help them understand how they're driving business results and impacting culture, and how they do those things in their job.",
        "And sometimes people think, oh, we have job descriptions, well, that does that. But a lot of times job descriptions are pretty vague, because you're posting them on LinkedIn or Indeed and you need somebody who knows nothing about your company to understand what that job does. You need something a lot more specific, using the specific tools, software, programs, whatever your company uses in order to execute. You want that in a job profile or some kind of document that defines success in every role in your company, because that's where it starts, setting those clear expectations, the basis of accountability. So I think those are two of the main leadership challenges I've seen, from individuals, frontline leaders, all the way up to CEOs.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah, I have kind of two thoughts after that. Even when we especially talk about SMBs, job descriptions generally don't mean anything, I guess, because there are so many times you have to fill in for things you're not supposed to, even if we say, okay, we are using these five tools today, we might have to use another five. Even now, I can share a little bit about my company, we use other AI tools etc, and it was like, then there's another one coming up, and we've probably changed our subscriptions to them three times in the last one year. And I am at a point where, when it comes to having different tools, I cannot keep up with that. It's funny, I was having a conversation with my co-founder for Leanify this weekend, and he was like, okay, we use HubSpot as our CRM and everything, and we can set up this automation, that automation. And yeah, I know we can, but the thing is what we are trying to do in terms of automation is changing every four weeks, because when you are in that growing phase, in that building phase, things are so dynamic. So that's another very big challenge, the adaptability, that flexibility needs to be there, to build that resilience",
        "For example, just this last two days, I've talked to two people who are potential guests on the podcast, and they're like, okay, you should have a scheduling link. But, and this is not related to business, but again it's an activity I'm doing, like the podcast, this is the fourth episode, and this was not even going to be an ongoing thing, I don't know if you know this or not, but it was only a five-episode thing, which I thought I would do. But I started enjoying it, I started having the conversations, people were liking it, and I was like, okay, I'll do this ongoing. And that is why there was a gap of almost, I think the last one I did was almost five or six weeks back, but I was doing one every week, and I paused because I had to tweak it. It's not that straightforward. Yeah, I know I can do a Calendly link, I use it for my work, but there is a reason I don't have it here.",
        "So those are also very interesting challenges, because what I'm trying to get at with these conversations is that everything changes, right, when you are a solopreneur versus you hire your first employee, 5, 10, 20, you can do it based on number of employees, or based on revenue, but whatever the growth path is, things work very differently. And more than anything, I feel like having that agility, being able to adapt, because we live in a very fast-changing world, it's changing every second at this point. We might get out of this call, our phones are on silent, who knows what would have happened in that one hour. So it's very interesting, and COVID was probably one of the times that taught a lot of us about being flexible, agile, having systems that can quickly turn. So I guess I went a little too much with it, but you get my point. What I was trying to ask is, how do you think about building in that agility, that flexibility along with process, what's a good approach or thought process behind it? Because I think that's another thing leaders need to be trained on, and today it has become an integral part of leadership.",
      ],
    },
    {
      speaker: "Tanya",
      role: "Guest",
      text: [
        "Yeah, absolutely. Well, I think what's so important is getting the right people with that mindset. So as you're building your team, really making sure that if your business is one that is changing on a very regular basis, due to technology, due to new clients, whatever the case may be, in your interview process, in your core values, make sure it's really clear that we need people who not only are comfortable with change and flexibility, but people who actually enjoy that and thrive in environments like that. A lot of the tools that I use when working with clients come from the Entrepreneurial Operating System, or EOS. One of the things they talk about is the importance of your core values, and how your core values should attract the people who are in alignment with those core values, and even, maybe more powerfully, repel the ones who aren't. So if you're someone who wants to come and sit at your desk from 9 to 5, that's fine, but then go find a company where you can do that. Make sure that if that's not the kind of person your company needs, your company makes it very clear that we are constantly looking to do things new, better, differently, so just because we're doing something one way one week doesn't mean we'll still be doing it the same way the next week. Really making sure that people understand this is our normal business, it's the norm, not the exception, and really try to attract the kind of people who would say, that sounds cool, I don't want to be bored doing the same thing every single day.",
        "So that's why I always start with the mission and core values, because I think so many of our business decisions should be run through the lens of those things. Sometimes I think people might think it's just kind of fluff, it doesn't really do much, but they should be such powerful tools in your organization, to define what you do, why it matters, and attract the right people and repel the wrong ones.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "This reminds me of something very interesting. As you know, in my early career, from operations, consulting, everything, there was somehow an overlap between marketing and sales as well. For a very long time, what people thought about mission, vision and values was as a marketing tool, like, this is what our clients need to hear, this needs to be, whatever, and they get so technical about it, and also like, your mission is something which... whatever, I'm not going to get into technicalities, but you're so right, even if you don't write it, even if you don't put it on your website, don't talk about it on LinkedIn, whatever, it doesn't matter, it is something that drives your core values, your company's core values. You should know it, write it somewhere, put it in front of your laptop or desk, whatever, but those are the things that, as you said, drive decision-making. That is so true.",
        "So I was a guest on someone's podcast two days back, his name is Mark, by the way, tower of pizza, Mark, and he asked me, okay, how were your mentors, etc. So, I have learned something from someone, my dad once told me, when I was like 14, 15, one thing you need to do is that whatever decisions you have made throughout the day, just make sure they're ethically right as well. And that has become a very core value of not just me but the entire company, that if one of our team members' mom is, let's say, fighting through cancer or something and they need time off, we say, okay, go take one month off, because not everything is about the numbers, etc. And, like you said, we are very direct when we post our job description, but obviously we post about the bad things, they are not the good ones, right? So sometimes people get scared too, but that is fine.",
        "It's just longer to hire, and I'm totally okay with it. I want to fill a position this month, we can get it in three months, we can survive, but the whole aspect of hiring wrong, training them, it's not good for them, it's not good for us, right? So another one I believe in is under-promise, over-deliver. So I don't want you to think that we'll never sleep, but that's not the reality either. Right now in India there is a heat wave going on, it's pretty hot there, and everything, but no office closes. We made our office work from home for the next three months, everyone, they just work from home. We said no one has to come, only twice a month, and if needed we'll let everyone know, but if you really want to, because for some reason you cannot work from home, we have an office you can come to",
        "My sister saw it posted on different places, we didn't post it on... I think we did, and she was like, is this your company? I'm like, yeah, you should, I told you we should work together, come over. Because, you know, if you are working, you have to have a balance. We are not trying to hire slaves here, but the thing is, okay, you are passionate about it, when you're going through change, you have to work a lot, but when things are stable, you sometimes don't have anything to do. I've had my team members come to me and say, we've been feeling like we need more work, because I've been working maybe only 20-30 hours a week, even if we don't do 70, that's fine, but at least, you know, because they enjoy it, that's another aspect. But sometimes we put people in positions they're not a good fit for, and I'm sure you've seen something like that. And I have a very funny analogy which I'll say after you answer this, but what are your thoughts on that, putting people in wrong places, because sometimes people also don't know whether or not it is good for them or not. What are your thoughts or some experiences around that?",
      ],
    },
    {
      speaker: "Tanya",
      role: "Guest",
      text: [
        "Yeah, actually, that's one of the reasons I do like using some of those tools from EOS. EOS calls it the \"right person, right seat,\" RPRS. So how do we determine that we have the right person in the right seat? Well, one, we want to determine we have the right person, meaning does this person belong in our organization at all, and there's a tool EOS uses called the People Analyzer, where we basically put down all of our team members and all of our core values, and we evaluate: does this person consistently model our core values, yes or no, and you have a conversation around that. So that's how you determine if you even have the right person for your company.",
        "Then, once you've determined that you do, you want to determine, are they in the right seat? There's another tool EOS uses called GWC, which stands for Get it, Want it, and Capacity. One, we want to know: do they get it, do they understand what is required of them to perform at a very high level in this role? Do they want it, do they even want this job, are they enjoying and passionate about it, does it best suit their strengths? And lastly is capacity, and that's the one that can be more challenging, because this is where you might have to make the tough call that we have a great team member, they model the values, but they don't have the capacity to succeed at a high level in this role, it's just not a fit for their skills. The best example I use for this is myself: if someone were to put me in an accountant seat, I would get what I needed to do, I wouldn't really want that position because I know that's not where my strengths are, and from a capacity standpoint, my brain doesn't think that well when it comes to that, so it wouldn't be right for me or the company for me to be in a bookkeeper or accountant kind of position.",
        "But it's not only helpful for the person to have the self-awareness of what their strengths are, and to make sure their manager knows what they want to do, and to not get complacent in their role and just stay in it because they've done it for a long period of time, but really take ownership of their own career. And then from a leadership perspective, having the courage to make those decisions that might be difficult at times, but finding people the right seat within the organization that is the best use of their skill set, their passions and their energy, so that they are contributing to the best of their ability to the organization and enjoying themselves at the same time.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah, for sure. And it's funny, earlier I was telling you something I was putting off which I ended up doing, that was related to accounting and bookkeeping. But, I didn't know you went through EOS, I did it partly, I'm very familiar with EOS as well, and I generally try to convert some frameworks into a fun analogy, because sometimes our job, operations, everything, is a lot of work, everything can be too serious and boring, and I try to joke around as much as I can. So the analogy I use is: if you ask a monkey to swim and a fish to fly, it's not going to work out the same. But finding that right fit is also important, it's not that people cannot do it, I do believe you can train someone to do whatever, but the thing is, will they be good at it, so they enjoy it?",
        "So that's also part of, for example, our core values, when we are hiring someone, we say, okay, we are hiring you for this position, do you know what you're free, you want to learn why? Come in, go learn why in our company or otherwise, because one of my companies is so diverse, people can do pretty much whatever they want to do. One of my best employees joined me as a graphic design intern, and today he's a project manager, he manages a team, and he sometimes reviews legal contracts for me. So that's also the thing, when you let people be free a little bit too, but that does require a lot of patience, I would say. Sometimes you lose time and money doing that, especially as a smaller company, because we have only enough people to barely be able to do their jobs, and if you're letting them lose to learn and all that, it does create a little bit of a void in what needed to be done. But if you are able to balance it, I feel we can create a very harmonious team, working in harmony, cultivation, growth, but it's definitely not as easy as it sounds.",
      ],
    },
    {
      speaker: "Tanya",
      role: "Guest",
      text: [
        "Yeah, yeah. It's interesting, because one of the most, I would say pretty transformational, books I read, rather earlier on in my career, was Strengths Finder 2.0. And what was really kind of transformational to me about that is, you know, I'm naturally pretty perfectionistic, and so I have a tendency to think about all the things I don't do very well and try to be better at those, which I think is a good thing, but at the same time there was a sentence in the book that really struck me, it said something to the effect of: you can't be anything that you want, but you can be the best at what you already are. And I just thought that was so powerful, because the point was saying that, for example, the accounting, if I were to spend hours and hours trying to learn how to be an accountant, I would probably get incrementally better because I would be learning, but for example I really enjoy public speaking, and I think I have some innate talents and abilities in that area, so if I were to spend the exact same amount of hours on developing that ability, I would get exponentially better, because I already have those raw materials of gifts in that area.",
        "And so we want to make sure that our weaknesses are in no way becoming obstacles to our success, so we want to have some level of knowledge and capability. Like, I really do my best to make sure I understand P&Ls and budgets, so that when I'm working with my clients I can speak knowledgeably about those, but I wouldn't want to ever do their books. But then spend so much time learning and developing in the areas where you already know you have some natural gifts, talents and abilities, in order to really be the best in those things.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "I mean, that statement, I think I will end up reading that book, and I need to get you my books on the next one, you can say this is the best book. I guess it all kind of comes down to having that right guidance when you need it, someone to tell you, all right, like, and another thing, which might be a little bit off topic here but kind of related, probably parallel, is we always hear the saying, you have always been hearing, it's lonely at the top, etc. And along with that, I just feel that getting good mentorship, etc, because you can find mentors anywhere, right, you could be part of communities, like you said. Let's say I'm part of this community now, which is a community of creators, I just started, I was never going to be a creator, like, this five-series episode thing, my team has been after my life for ten years, I was like, okay, I'll do it, but I ended up enjoying it. That's probably why they were telling me, because they know me better than I know myself. So I became part of it, but it is so good, right? I'm like, okay, trying to do this, I was not planning to do this, but it's like, someone who has done something already, learning from them is the best thing you can do, it puts you years ahead. And sometimes, as you come in new, you can tell a few people a few things too, actually told someone who has been doing podcasts for three years about a couple of tools that came out new, like this one we are using, Riverside. There's a lot of people who do it on Zoom, and it's set up, it's working, but it's nothing, no pressure, but this is a little better, this is how you do it. So it helps each other. Being in that community with similarly minded people is also very, very important, I believe.",
        "But, a lot of our audience is specific to 3PL, as you know, so I just want to switch gears a little bit and use some examples of 3PL here. So some of the 3PL warehouses, and you're part of IWLA as well, not so many conversations happen around... I don't like to put it in terms of a \"top three,\" you don't have to list top three, you can do two, one, or ten, but what are some of the top pain points around leadership within operations, and what are some of the challenges they face?",
      ],
    },
    {
      speaker: "Tanya",
      role: "Guest",
      text: [
        "Yeah, I think a big one that I've seen in the 3PL space, and quite frankly I see it in a lot of small businesses, is the overwhelm, right, in this kind of startup phase, or maybe they're not even in startup phase, it's a smaller business, so you have a few people wearing a lot of hats, and really just the stress that can come from that. And that kind of goes back to what we were talking about before, really making sure everyone is clear on what their roles are and what they are owning, and if they're the right person to own those things. So I think it's important, especially for smaller-to-medium-sized 3PLs, to get really clear on their org chart, not only build what that should look like today, around who owns what functionally, but also build out where would we want our company to look like in the next year. I know this phrase can be so cliché, but we often do get so tied up working in the business that we don't raise ourselves high enough to work on the business, not allowing yourself to get so tied up in the day-to-day that you forget we actually want to grow this business and expand our clientele. So what are we doing to intentionally do that?",
        "And I think another thing that is really helpful for businesses to do is set those goals, what do you want your revenue goals to be, how many clients do you want to have, things like that. And another thing I think can be a challenge is I think it's easy for us to start to get into a kind of scarcity mindset, where we start to feel like, oh no, I need business, I need clients, I'll take anything I can get, but then you may work with clients that aren't a right fit for you or your business, you might hire people just to get a butt in a seat when they're not the right person for your company. So really trying to think of your business more from an abundance mindset, of, we will experience this growth, we just need to have a plan for it, we need to execute the plan, we need to be clear on what our priorities are, and really work through that in a more structured and methodical way, so that your day isn't governed by what fire you have to put out today, but you're being significantly more proactive in how you structure your day and your efforts, in a way that will allow you to realize the business growth that you want.",
        "So that's what I think are some of the biggest challenges I've seen from the people-aspect side of things, how to grow the team, when to grow the team, how to effectively clarify who owns what on the team, and then that way you know what your revenue coming in is, that's really the baseline, right, cash is king. We've got to have cash in order to get the right people on the team, hire the right folks, but also then find the right technology or the right equipment, whatever the case may be. So really just being planful about how and when you want to grow.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "I like, started connecting the dots, the question I asked, but it kind of relates to it in a funny way. So we were talking about mission, vision and values, and in my mind, while you were talking about this, even bringing on business, etc, one thing I strongly believe and do is, not only my team members, but anyone I work with, be it my customers, my vendors, whoever, they need to align with my personal mission, vision, values, and my company's mission, vision, values are very similar to mine as well. So we say no very often, there might be a customer who might want to pay us well, whatever, but if it doesn't align with the long-term aspect, we generally say we might not be a good fit. I've talked about this to other business owners, leaders, entrepreneurs, and they're like, oh, you might be leaving a bit on the table, and I tell them, you know what, it lets me and the rest of my team sleep good at night. That's also one of my values, which my dad taught me, because, you know, I can get a client, it might give me a headache, it is fine, but it would take away that enjoyment a little bit, even if it's for an hour a week, I don't need to let that go. I'm happy with the money I'm making, as long as it's okay that one client isn't paying for my mortgage or something, okay, we can grow a little slow, that's fine too.",
      ],
    },
    {
      speaker: "Tanya",
      role: "Guest",
      text: ["Yeah, sometimes it's hard to say, you know, the truth hits, it's hard, right."],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Having every decision aligned with those values, like we were talking about, comes in here too, because sometimes when I am sitting through things where people talk about having an ICP, etc, honestly, everyone is just talking about, okay, this is the size of the customer, this is the revenue, this is the number of orders, this is the size, I want cold storage, I want freezer storage, and generally, whenever I'm having those conversations, in my mind it's going: yeah, that's honestly, according to me, 101, you can get that done, probably at maximum in a month, if you sit down and understand what your strengths are, etc. But I think aligning with your mission, vision, values in your ICP as well is important, making sure that, because again, as I was telling you, sometimes mission, vision, values gets mistaken for marketing, so people try to put it forward in terms of what their customers would like to hear, like, we fulfill everything in 10 minutes, or you call us and we'll answer your call every time. No, I don't want you to call me. My company's value is that you never have to call me. That's what my value is. My whole process is, okay, in the beginning you might have to call me or anyone in our company, but there are sometimes clients I have not talked to in a year and I'm still close to all of them. Today I called someone I hadn't talked to in like four months, one of my really big clients, and whenever we talk we never talk about work actually, because everything is set, it's running in its own synergy, and I never get crazy calls from my client saying, oh, this is not happening. Maybe in the beginning of the relationship, when the change management is going, implementation is going, but after those first three, four months, it is like that. So, my values, first of all, I'm not going to answer your call because my phone is on silent always. Second, the reason is I don't want to waste time calling you, and why would you want to waste time calling me, but the client really wants to hear, oh, Vic is saying call me anytime, I'll answer your call, but I don't say that, because it doesn't make any sense to me.",
      ],
    },
    {
      speaker: "Tanya",
      role: "Guest",
      text: [
        "Yeah, I think we froze for a second, but yeah, I think it definitely all kind of winds down and comes together, as a full circle, if you may.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: ["Yeah, absolutely."],
    },
    {
      speaker: "Tanya",
      role: "Guest",
      text: [
        "And I think you really hit the nail on the head, in defining for yourself and for your team what your non-negotiables are, both for yourselves internally as well as your clients externally.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "100%. So, I know we are almost nearing the time, I did have a lot more questions, we probably, this calls for a follow-up episode on our discussion, but I probably want to say, if you have to leave someone thinking, someone who went through this entire hour of us chatting, if you want to tell them one or two things they can do, something very simple, they don't need anyone for this, they can do this themselves over the next couple of days, what would it be?",
      ],
    },
    {
      speaker: "Tanya",
      role: "Guest",
      text: [
        "Yeah, \"we better leader,\" I guess, I think a couple of very practical things people can do: one, make sure that when you look at the meetings your team has, make sure every single meeting has a purpose, an agenda, and a leader. I think sometimes we can get a little loosey-goosey with our meetings, where it's a little too much just reporting the news and no one really got anything out of it, no decisions were made, things like that. But I think most people don't like meetings because they don't have those things, and that's where clarity begins, that's where you set the stage for what our goals are and how we're going to accomplish them, by making sure all your meetings have very clear purposes.",
        "And then, I think a lot of operational teams have this, but if your team doesn't, I highly encourage a daily stand-up meeting at the start of the day. There are so many benefits to that, I think one very practical benefit is it makes people know they need to be on time. If your shift starts at 7 a.m. and everybody's huddled in your huddle area at 7 a.m., if you're walking in at 7:02, it's very obvious. So it's a very practical thing. But two, it's so important to let your team know, here's how I, as your leader, am going to define what a good day is today. I'm going to define that right now in this meeting, it can be a five-minute huddle, it shouldn't be a long thing, but let's set up the day in a way that the team knows, okay, if we accomplish these two, three, five things, we know we had a great day today. So everybody is on the same page in regards to what we need to accomplish. I think those are two very practical things leaders can do, even as soon as tomorrow, if they're not doing that already.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "That's wonderful, and I totally agree, setting the tone right at the start of the day, I didn't think about it. Yeah, that will make people come on time too, I think I need to start doing that, I'm repeating like 4 a.m. every day.",
      ],
    },
    {
      speaker: "Tanya",
      role: "Guest",
      text: [
        "I think I would like to add one thing too, because it kind of adds on to what you said about some meetings not having an agenda, and doing it without that. It also ties to one of the other things, sometimes we are so engrossed in our day-to-day stuff that we're not able to really see what we can do, and it also ties to one of the things I said, that sometimes we, as founders, know what to do, but we're not able to do it because we're in that box.",
        "So what I've seen working a lot in 3PL warehouses and manufacturing as well, especially possible if you have a big office, but if we generalize it for businesses too, is just keeping 30 minutes in your day as a leader, where you just walk, go on the floor with no agenda, not saying, oh, this pallet shouldn't have been here, this tape is broken, this label isn't working good, just walk, take that time. Think of it as a nature walk, in a way, because what you're walking is something you've built over years, so first, appreciate it, so you feel good about all these sleepless nights. Second, utilize that time to just chat with people, you can just hang out with your order picker, or your manager, or anyone, just, hey, what's up, how's it going. 30 minutes isn't a lot, you can do it right after lunch, so you get some steps, it could be anything, early in the morning, later in the day, it's not going to stop your operation, it's not doing anything. What it's doing is three things: one, giving you free time to observe; second, getting you some steps in; third, also giving your team members a free space to say things they might not say in a structured meeting, and give them more confidence that they'll be able to say it to you when they need to. So, being more accessible, I think it solves a lot of things, just 30 minutes can change a lot.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: ["Yeah, absolutely. Yeah, that's what I would say. But yeah, I would like to conclude with the same..."],
    },
  ],
  "what-actually-breaks-when-a-3pl-scales": [
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Welcome everyone to Execution at Scale, Episode 3. As you know, I am Vikrant Neb, founder of Lenify. So this series is because the conversations in this industry generally happen in the hallways and over coffee, not generally on the stage, so I just wanted to change that. And today, I have Michael DeFabis with me. He is a senior leader at Ideal Fulfillment, powered by DHL Supply Chain. He spent over 15 years helping Ideal grow from a $20 million regional brand to a $100 million national platform, which is commendable. And so, Mike, I would love to hand over to you if you'd like to add anything before we go into it.",
      ],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: [
        "Yeah, yeah. Mike DeFabis, excited to be here with you guys and ready for a fun discussion. I've been in the fulfillment space for about 16 years with Ideal, joining them in about 2009, it's almost 17 years now. And then taking that business from what it was way back then, through that journey, and through an initial acquisition by DHL that purchased us in May of 2025, into a new life of working for and with DHL. So, excited.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "That's awesome. And that is a very interesting journey, most of our listeners are very much into this space, so they might know a little bit about the story, but for the ones who don't, can you tell me a little bit how did Ideal start? I know your dad started it, how was that, growing up in that? Just a little bit around that before we go into the less fun stuff.",
      ],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: [
        "I like to say I grew up in warehousing a little bit. My father purchased a company called Trans City Terminal Warehouse in 1990. It was a very traditional 3PL warehousing business, pallet in, pallet out. Grew that business to be one of the largest logistics providers in the Indianapolis area, and even in Indiana, doing stuff for like Books for Dummies, if you remember that, RCA, big tube TVs, and things like that. And in high school I would spend time stacking pallets of Gatorade, we'd take the blue Gatorade, the red Gatorade, and the green Gatorade and make a mixed-variety-pack pallet, moving boxes around Gatorade, which was a good workout in high school.",
        'Ultimately he sold that company to a private equity roll-up in 2000 and was chief operating officer at the time. We had relocated the family to Nashville, Tennessee, and he spent about a year as their COO and left the business due to opposite strategic visions, private equity really focused on bottom-line growth, and my dad, more of a strategic thinker, wanting to align more on integrating these businesses, working under one operation, having a long-term vision. They were very short-sighted, and that ultimately led to dissolving that business around 2007. My father had invested a good chunk of change from that sale into roll-forward equity, and in lieu of his final payment they came back to him and said, "Instead of paying you out, what do you think about taking back this piece of the business," which later became IDS. After looking at the company and how much money they were going to leave in the bank, he took that company, rebranded it as IDS, with the vision that it was Integrated Distribution Services, bringing a full suite of transportation solutions from point of manufacturing, getting your product into the U.S. or domestically into your warehouse, and then optimizing and distributing that out using transportation services. We were looking to take that into the e-commerce industry.',
        'And then in 2009, my dad came to me, I\'d been working in banking for a while, and he said, "What do you know about marketing?" I said, "Nothing." He said, "Great, you\'re hired." Nepotism at its finest. But what that led me to do is learn every bit of the business, I worked in the warehouse, in IT, in finance, in operations, all of that, just to learn the business, all while doing the marketing and sales, which ultimately became my passion, sales and commercial, dealing with our customers, and that\'s my role today.',
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "No, that's wonderful, so essentially you've seen it all: operations, marketing, day-to-day stuff, management stuff. And what's interesting, because I've worked a lot with family businesses in my career, is that you're kind of working at the office and also working when you're home, right? That's unique.",
      ],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: [
        "Fortunately, my dad and I have something in common outside of work, we're both very passionate about golf. So that helps. But yes, fortunately for me, there was a lot of growth, a lot of good times, a few rough patches, but for the most part it was good. So those Thanksgiving dinners weren't too awkward.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "But yes, if times were bad, it could be very awkward, I'm sure. And by the way, out of context, but I took some motivation from you, I started learning golf, had my first lesson a couple days back.",
      ],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: ["Oh, nice. Next time we'll meet on the golf course."],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "That's right, get ready for the long journey of learning golf and being as frustrated as everybody else that way. So, awesome, you've worked in different departments: operations, sales, marketing, everything. You ended up choosing sales, which is your passion. What would you say about the connection and disconnect between these departments? Was there anything you felt working in one department versus another, especially in the beginning? Were they really connected together, or a little bit disconnected? What was your overall analysis?",
      ],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: [
        "To take you through that journey a little bit, I always say this: being the owner's son and in a family business, a lot of people go in with the mindset of, \"I get to be president, I get to be CEO, I'm next in line,\" and train up that way. I kind of looked at it as, \"I get to do what I'm passionate about.\" For me, that was sales. For someone else it may be a forklift driver, but you get to be the highest-paid forklift driver. That's the best thing family business gives you: the opportunity to do what you love, not what you have to do. When it comes to finance or HR, that's the worst to me, I'm not passionate about that at all, even though a CEO needs some passion for finance and HR and all aspects of the business. I pushed my career early into sales, I could show my value there, help grow the business, grow the top line. That was easy for me.",
        "To the question of how connected the business was, when I came on board we were about a $20 million company. That business was very connected; teams were talking to each other. A lot of people stayed on through the acquisition journey, there was a divestiture of a union, so we got rid of the union, but a lot of long-term employees stayed and there was still a lot of connection. IT worked closely with operations, finance worked closely with operations, there was a good understanding, a good leadership group in place. As we grew, staying connected became a bit harder, as you hire more people, the newer ones need to know who the key players are and how to navigate the organization. There was a bit of disconnect there for a time. For the most part, the team has to be working together with common goals, and we did a lot of things within the organization to help drive that.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Very good point, that makes me wonder. Essentially, when a company scales from 20 million to 100 million, there are so many milestones in that journey. Because there are certain good things that help you grow, but there are also things that break, processes, systems, people. Sometimes people underestimate the complexity; a lot see it as an overnight journey, but it's not, it's a lot of sleepless nights, and going back and forth. What are some of the things you felt you and your team might have underestimated in that growth process?",
      ],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: [
        'Some of the things we underestimated during our growth journey, the first would be investing in technology; that was probably a gap. One of the biggest things when we ended up selling to DHL was we knew we needed to invest in technology, and DHL knew that too, it was a part of that phase of the growth journey. We should have invested faster. Early on we viewed ourselves as operationally focused. I saw players coming in operationally focused, and then a huge influx of tech-forward companies came in. We always positioned ourselves as operational-forward and executing at a very high level, and we were, but the mindset shifted with buyers and brands to say, "We want visibility, we want high technology as well as a high level of operational focus." We fell behind a little there and had to invest and ramp up quickly, probably 2017 to 2020, continuing to push the limits on technology as hard as we were pushing the limits on our operational abilities. That would be the biggest gap.',
        "Investing in leadership, every book, every story, says \"invest in leadership,\" and it's 100% true. You've got to know your limitations, be humble enough to say, \"we're growing beyond what my skillset can be, or my team's skillset,\" and bring in outside hires. That juggling act between making the investment before you need it or when it's too late, sometimes we made hires too early, sometimes too late, but investing in that leadership team was really key. We made those investments in 2022, growing our leadership team pretty drastically from four of us to an eight-person leadership team, putting in HR, more IT people, all functions, not just operations, finance, sales, and ownership.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "I think a lot of that is very similar to what I've seen, it's the vicious cycle of delaying things. We know we need to do this, but then something comes up, a new customer or whatever. One great thing is I'm an operations guy, as you know, operations-first is always great, it sets a great foundation, but to scale, leadership and technology come into play a lot. And I'm curious, you said you'd share more about the leadership side, because that's a very interesting point. How did it look, and what made the current management feel that you needed to invest in leadership? What was that tipping point, and what was your strategy?",
      ],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: [
        "Yeah, mine may be a little different, and I'll tell the story. Shortly after COVID, my brother-in-law Aaron, at the time our CFO, myself as CRO, my father still CEO, and another member of the executive team and ownership group, Mike Jones, our chief operating officer, Mike and Mark were nearing the end of their careers, wanting to wind down, and expecting Aaron and myself to make more decisions. We saw that, and Aaron and I came to Mike and Mark with a strategic plan on how we'd take the company from around $60 million to $200 million. Part of that was, in order to do this we need to make decisions faster, move quicker, and we need you guys to work more and harder. And they said, which we knew the answer would be, \"we don't really want to do that.\" So the very next slide was, okay, here's what we need in order to do that: a new chief operating officer, a VP of HR, we couldn't remain at director level, we needed VPs and executive levels. And we also needed guardrails as to what decisions we could make as an executive team versus what needed board approval. So setting up those guidelines was where we saw it.",
        "Oftentimes we saw that the skill set within the organization was being outgrown, and we needed outside influence, outside ideas. We knew very much what was going on within the four walls, but when you're growing it's hard to look outward and see new technologies because you're entrenched in your own operations. So we needed to bring in outside resources, we did, we made some great hires that ultimately led to us transitioning.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "And that's very interesting, and I'd like to attach it to something you said a couple minutes back, that even leadership can outgrow the organization. So how do you go about finding people? Like, let's say I'm really good at operations, I know what needs to be done, but my ceiling is still, say, $100-million thinking. How do I go ahead and hire someone who can take me to half a billion or a billion, whatever the growth goals are? How do you go through that hiring process? I'm curious.",
      ],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: [
        "One of the key factors, especially around the chief operating officer hire, both people we narrowed it down to had a history of working with companies our size and taking them bigger, and even working within larger organizations in their past. So they could bring ideas and concepts of how a large organization operates, some of that structure and discipline. As far as HR and technology, we looked at people from larger companies in the 3PL industry, 500 million to billion-dollar companies, who were at the director level there, and we were able to give them a vice president title here. I believe they had the skill set and know-how needed at the director level within that organization, but a bump up in title and a bit more pay in our organization was attractive to them, control in decision-making and a seat at the executive table. That was very attractive to a lot of the hires we made.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "I think that's a great point, because a lot of people I work with ask me the same question, and this is exactly what I say, bringing in someone from a really large organization is also a problem. Like you said, you were looking at a half-billion-dollar organization, which is 5X, 10X your current size, not 100X. That's also a mistake some people make, because there's a big mismatch in expectations. And during this restructuring of the leadership, were there scenarios where people had to be let go?",
      ],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: [
        "There were scenarios. The initial hire we made post-COVID, a chief operating officer, we gave a very distinct goal, and he knew it: we had a lot of revenue and needed to make that revenue more profitable. We had to up our game, what we had as an organization was formerly probably a lot of A players, but as we grew, those A players became B players, and B players became C players, because expectations rose. That's one of the best things we did, we continued to push the bar on expectations. What we needed was somebody with financial acumen, a mindset to come in and transform and push profitability, and he did that extremely successfully. What came along with that was a detrimental culture. We had to let some of those C players go, upgrade talent to get more A players, that was not easy on the organization, but necessary to take the business to the next level.",
        "Once that happened, we needed a hard reset from that COO, pull back not necessarily on profitability, but on the culture, which had taken a hit; we needed to reshift and rebuild the culture. Unfortunately, he didn't have the skill set for that. We had to part ways with him and bring in another chief operating officer in 2024 who was more culturally focused, more customer-centric, and could really redirect the organization back to maintaining that profitability while shifting the culture to be a great place to work. He was able to do that very well.",
        "Through a growth journey there come times where there needs to be a cultural shift, recognizing the pulse of the organization. Sometimes it's a very difficult decision, you take a hit on culture to take one step back and two steps forward, but it was necessary for us.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah, definitely, and I think one of the challenges related to that is: let's say an employee is taking care of 10 things across any department, and now, as we're growing, we need to get more molecular about what everyone does. Whether that person gets promoted, or we need someone from outside, there's a lot of friction around, \"why didn't the person from the internal team get upgraded?\" I kind of call it helicopter landing, someone just comes in and leads a team of 10, and their would-be leader feels, \"why didn't I get promoted?\"",
      ],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: [
        "Yeah, that happened specifically on our IT side, as we were growing that group and made that VP hire. We had an internal candidate who was probably qualified, could have done it, but when you have an internal candidate, you know their strengths and also their weaknesses, so it's hard for them to hide those. We felt we needed an outside viewpoint, somebody to come in and look at the organization objectively. The internal candidate didn't get the position, and we hired outside, but he did stay on, and he's still with us today. The VP we hired moved on post-acquisition; he didn't want to stick around. It was strategic in nature, we needed that outside viewpoint, but also needed them to understand there's a lot this team brings, that we have a strong team, and just needed to elevate it to the next level, building on the framework and foundation already there.",
        "'d say that was around 2012-14-ish, and around 2016 we really knew we needed to focus our ICP. We'd learned which companies and customers were profitable, which we'd take chances on, and when you're dealing with companies in the small-to-middle market segment, often they have a great product, great offering, great team, but their go-to-market strategy isn't right, and they'll go belly-up for whatever reason. Understanding who those companies are, not saying yes to everything, aligning your growth to an ICP, and going to market with a solution that resonates for the right customers and companies you can deliver and execute for profitably, that's key. There were numerous times we brought in customers who were unprofitable, or mispriced, and that set us back in our growth journey.",
        "The last thing I'll say is one of the key metrics we look at for customer churn is revenue per square foot, how much revenue a customer brings in versus how much square footage they use. We operate multi-client facilities in numerous locations, seven or eight markets today, and we look at that metric to know when to open a new facility: are there customers not operating at a target revenue per square foot where I could backfill with a higher-revenue, higher-margin customer, and grow into another location with an anchor customer. That's kind of been our growth journey, and trust me, I've brought in unprofitable customers, and the worst, I've liquidated product before, which is not fun.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "This reminded me of something we talked about a bit when we met in Long Beach, that you guys had a very specific ICP, which I felt was very unique. In my opinion it goes beyond ICP, really thinking, \"okay, I'm getting this brand on board, they're doing 500 orders a day, it doesn't matter, but what is their go-to-market, will they scale to 2,000 orders a day in a year or two?\" I've never seen companies think about their clients that way, that's been one of my mantras too, even when I was doing consulting: as much as it's important to know about your business, you need to know about your customer's business too, because at the end of the day it's all related. So tell me a bit more, how did that strategy come up? You said 2012, you'd say yes to everything, how did the thought process shift to looking at their go-to-market strategy, whether they can grow a lot? Because that is very unique, more companies don't think like that.",
      ],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: [
        "You know, specifically how we narrowed down our ICP, it was nothing earth-shattering. We looked at our customer base and asked: which ones are profitable, what do they do, what do we do well for them, which are unprofitable and why, and is this the type of business we don't want? We didn't necessarily segment our ICP down to industry-specific, although looking back maybe I could have been a bit more industry-specific. But the way we looked at it: whether I'm shipping an apparel t-shirt, kitchen knives, vitamins, supplements, or cosmetics, I'm still ship-picking, packing, and shipping, though there are different regulations around food and beverage, which was a bit of a differentiator for us.",
        "What we looked at as our ICP was fast-growing companies early in their growth journey, small to medium size. We didn't want to be entry-level, though we did take chances on some entry-level customers, very selectively. Some of my biggest customers today, I shipped their first order, we shipped the first order for Beauty Counter (no longer around), for Chubbies at the time. We took chances on a few of those. But mostly we looked at the next-level fulfillment company, an established brand with good e-comm, and wanted to be the next level: omni-channel, helping you get into Target, into Nordstrom, push more products into Amazon, doing that value-added service retailers require while doing e-commerce. We focused on our parcel strategy, benefiting from our parcel and shipping accounts, benefiting from our location (we were in Indianapolis and Salt Lake City), was that part of the value prop for them? We also looked at value-added services, did they have kitting? That was a huge piece in how we leveraged labor within our facility.",
        "So we came up with, call it eight to ten boxes, if you check five or six of them, we have a high percentage to win, because we believe our strategy and value prop will resonate. And on go-to-market, I laugh, because some companies are so focused and narrowed on their customer base that even if you cornered that market, and every person's birthday was on May 6th, how big is that market really? You've got to look at that and the growth potential, their go-to-market strategy, who's backing that company, their financial history, are they in Series A, Series B? Talking through all that. One of the biggest things is talking to your customers, understanding that partnership, it's not just picking and packing orders, but what is their strategic plan, their growth journey? Is it cost-driven, improving the bottom line or the top line? Getting closer to the consumer, more repeat business? What is their strategic plan, and how can we help as a partner?",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah, I think that's pretty much the key of the entire thing, narrowing ICP too much, like you said, the May 6th birthday analogy. You have to have the right balance, that's where people find the most difficulty, what to say no to and what to say yes to. I was actually having this conversation just a couple weeks back with someone I'm helping on the operations side, they don't have any appointment scheduling system for containers coming in, it's more first-in-first-out, and they're a decent 10-plus-million-dollar revenue company, and their customers are somewhat okay with it, trucks are waiting. I'm trying to understand how this is working, and it goes back to what you said, what their processes look like, what it looks like to support their growth. If they're not organized overall, that's a problem too. And it adds to your earlier point, will they be able to grow from X orders a day to 10X in three or four years? Those are important when onboarding a customer, because you're looking at it as a partnership, not what they are today, but what they'll be in five years, because that determines where you'll be. A 3PL isn't a SaaS company with 2,000 customers, you might have some at scale, but it's really 30-40 key customers driving growth at the end of the day. So, switching gears a little, outside your exact sales domain, what was the point in the growth path, from that whole journey to a hundred-plus million, where you felt things were a little out of control? Like, at 40 million we felt this, at 60 million we felt that, do you recall any of that?",
      ],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: [
        "Yeah, I asked a similar question to somebody a couple years ago, and there's not really an exact answer of \"at 50 or 60 million, I need to reinvest in this.\" I think you need to humble yourself, know your capabilities and where you excel, and hire people around you to fill the rest, knowing what you're good at. And generally it's probably always late for people, they think they can do more, don't want to say no, delay making that hire because they don't want to make the investment. Some of the bumps we hit: WMS switchovers, we underestimated the time, effort, and resources needed to implement new technology and get it up to speed and fully functional. Other things were startups, there was a year we onboarded, I'd say, five to ten-million-dollar startups that were very complex, high school apparel companies, a food and beverage company, and wanting to say yes to all those opportunities led to hiccups during startup. Fortunately we got those customers to the right place, and they're still customers today, but those startups were rough and hurt the financials. The time from go-live to profitability was much longer than anticipated when we were spread so thin, a lot of hours. And then ultimately, through the sale of the business, that was like landing a plane during a hurricane. A wild ride.",
        "Knowing your capabilities, not spreading yourself too thin, as we started to get multiple locations, added Atlanta, added other facilities in Indianapolis, added Salt Lake City, it came down to how we got those operations to operate with the same culture, mindset, know-how as our headquarters, hundreds or even a thousand miles away. That was very difficult. You've got to make the right hires and be willing to jump on a plane at the spur of the moment to go help out.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah, I thought \"living out of a suitcase\" was just a term, but I realize it's a reality, that's kind of what I live now. But how many facilities did you have before you sold to DHL?",
      ],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: [
        "Before we sold to DHL, we had three facilities in Indianapolis, one in Atlanta, Georgia, and one in Salt Lake City, Utah, so five facilities.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah, that comes out to five, I was adding it up wrong. So, growing from one facility and adding another, especially in a different city, because you have to find a totally different team, did you get some team members from your Indianapolis facility to go there and set things up? How did that look?",
      ],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: [
        "Part of it is knowing when is the right time to open another facility, and how, especially when you're multi-client, it's chicken-or-egg: you need the customer before the facility, and the facility before the customer. Specifically, it was a lot of travel, a ton of it. There were a couple of months where the travel expense budget was $100,000. A lot of nights. We had to get the team down there, and it was also that other facility's team coming to ours, learning the culture, the processes, working the accounts, not just us going to them.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "What I haven't heard a lot is people sending their current employees to the new site, most people only think of it going the other way. That's a great takeaway, it should be a two-way approach, not one-way, because the building you've run for 10-plus years speaks to culture, and people coming in and learning there is a great idea. Usually it's more like, \"let's send one or two people to the new building, they'll set it up and come back.\"",
      ],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: [
        "Specifically how we opened facilities: Salt Lake City was an acquisition, a customer was pushing us to be on the West Coast, around 2014, when Amazon was really pushing two-day delivery and customers were all-in on that. That allowed us to open the operation in Salt Lake City by purchasing a company, they weren't necessarily doing fulfillment, but had a viable, somewhat profitable business with a warehouse full of product. We brought in some of our current customer base, churned out old customers that weren't core, and trained the team up on fulfillment.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah, 100%. Those are all great points. I want to use a couple more minutes, maybe you can share, at a high level, for someone thinking about getting into the fulfillment side of the business, or someone primarily in B2B thinking about moving into fulfillment, what are some things you'd tell them? I ask because in a few weeks I'd like to do another session with you just on fulfillment operationally. So, what are some takeaways for people around that?",
      ],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: [
        "The easiest way for companies to get into fulfillment: I wouldn't go in with a brand-new customer, look at an existing customer who's maybe looking to get into e-commerce, or leverage a B2B relationship where you're doing a great job to gain an understanding first. It's not overly complex, it's just a different unit of nature, boxing things up. The biggest thing is getting your pricing right. If you take a chance on a smaller company doing 150-200 orders a day, if you miss a little, it's not going to crush your business, you're investing to learn, setting it up right, making sure you have the technology, the unit of measure (picking eaches rather than cases and pallets, which is different), the systems and processes in place to be as efficient as possible. And then just learn, ultimately I probably wasted over a million dollars in my career just learning things. Sometimes you've got to invest in learning, even if you low-ball pricing to gain the knowledge and expertise to go get that next customer or next piece of business. It's hard to demonstrate you're capable of handling fulfillment and direct-to-consumer if you're not doing it already, and can't show it that day.",
        "We were fortunate, we landed a couple of small fulfillment relationships early on, focused on direct marketing and multi-level marketing, working with people doing Tupperware-style parties, picking, packing and shipping beauty products. That wasn't very big, but then we landed a large apparel company, and that's what took us from talking about fulfillment to showcasing on a large scale that we could actually do it, and they're still a customer today. From there, it just kind of snowballed.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Absolutely, and I think what you said about systems and technology is the highlight, because operationally, in pallet-in-pallet-out and building pallets for B2B, everyone's used to single-order picks, which you can get away with until you're at 50-60 orders even for e-comm while starting out. But having the fulfillment line, forward-pick areas, all that, that's a very different operational side. So we're nearing the time, I'd like to give you the next two or three minutes to conclude the whole growth-phase conversation. What are some takeaways you'd want someone to leave with, if they only heard the last two minutes because they think you and I are being boring?",
      ],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: [
        "I don't know, I think we covered a lot. I appreciate the time. As you grow companies, it's not an easy journey, but it's a fun one. Our journey ultimately came to a close with the acquisition by DHL, which was a huge strategic play for them, they needed a multi-client, multi-site network to reach small-to-medium-sized markets, and we brought that value to them; the acquisition has been great, and we're finalizing our go-to-market strategy there. When you're in the trenches, it's easy to lose sight of all the cool things that happened, we closed that chapter and started a new one. Looking back, I think about what fulfillment even meant when I started, people didn't know what fulfillment was, then Amazon pushing two-day delivery, early adoption of automation, the influx of tech-forward fulfillment companies (still out there today), ROIs on automation, COVID and its implementation impact, and now automation plus AI, and customers looking at that. I learned at IWLA, I was talking with guys about AEO and had no idea what it was, completely shocked, that's AI SEO, SEO for AI, and it's crazy how fast the journey and the landscape are changing for these companies. Just having the vision to not be so siloed, talk to a lot of people, grow your network, I think the 3PL industry is insanely open and willing to share and help people, mainly because there's more than enough business to go around, and everybody's not the right fit for everything. It's not a right way or wrong way to do it, but at the end of the day, we're in it to make money, and to build a good business. Make money together, and build the community.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: ["Right, and if you want to know anything about AEO, let me know, I can help."],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: [
        "Yeah, yeah, yeah, I need to maybe do a little one-on-one session, or just go ask AI what AEO is.",
        "We were fortunate, we landed a couple of small fulfillment relationships early on, focused on direct marketing and multi-level marketing, working with people doing Tupperware-style parties, picking, packing and shipping beauty products. That wasn't very big, but then we landed a large apparel company, and that's what took us from talking about fulfillment to showcasing on a large scale that we could actually do it, and they're still a customer today. From there, it just kind of snowballed.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: ["Yeah, ask Claude that."],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: ['Oh, like, "how do I rank on you?" Which I think is the answer, right?'],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "No, no, that's awesome. Thank you so much, Mike. Really appreciate your time and all your knowledge, and offering to help everyone, that means a lot, and I know your time is valuable. I really, really appreciate you coming on and having this wonderful conversation. And thank you all, everyone, for joining in, with this, we'll see you next time.",
      ],
    },
    {
      speaker: "Mike DeFabis",
      role: "Guest",
      text: ["All right, sounds good. See ya."],
    },
  ],
  "pricing-that-destroys-margins-before-you-notice": [
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Welcome everyone to Execution at Scale. Thank you for joining in. As you know, this is episode two: pricing that destroys margin before you actually even notice it. So essentially, this series I started because I felt like most conversations in this industry happen in hallways and over coffee, and not actually on the stage. So essentially just trying to change that a little bit. And today I have Bob with me. And me and Bob have had multiple Conversations about pricing. Bob has over 15 years of experience building and refining pricing structures across Kenco, Rider, Stord; all the big names you have heard about. To give back to the community, he also teaches a course at IWLA called the Economics of Warehousing Course, which is actually coming up; we'll share details at the end too; which I believe... I got a glimpse of that back in January, just a two-hour summary, and it was definitely the best two hours I ever spent learning about pricing for warehousing and 3PL. So I hope you guys will learn something and enjoy it. And Bob, welcome. Thanks again for volunteering to come on this. As you know, I'm a new host, so I might mess up, but I appreciate you volunteering for it.",
      ],
    },
    {
      speaker: "Bob Byrnes",
      role: "Guest",
      text: [
        "Yeah, I don't believe it exists either. And that's actually; we find that a lot of the people who come to the class every year (we get about 50 people to the three-day class, about 80 people to the Essentials where I have a three-hour segment; they are looking for a model they can just take home and plug in. And the reality is, one doesn't exist. There's a couple of reasons for that, and it probably could be solved easily by someone business-minded who could make something marketable. What I've found is that each of us has developed a tool that serves our own needs and has grown to serve the changing needs of our business on a case-by-case basis. And sometimes it's really hacked together in kind of an amateur way; it's almost like a handbuilt race car, and your neighbor wants to take it for a spin, but he doesn't know all the nuances and intricacies; doesn't know that to turn it on, it's a key switch, or you have to hold the gas down and pull this wire. They just expect to get in and go. And I haven't seen models that let you just get in and go. What you can do relatively easily is take your current profit-and- loss; your income statement; and look at your expenses for, say, the trailing 12 months.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Andjust, we do this in the class, but just ask yourself: which of these costs that I pay for every month are fixed, and which ones are truly variable? That also brings me to; this is kind of an out-ofthe-blue question I thought about; are there certain resources, like, let's say I'm a 3PL, or I want to open my business, or I'm an existing 3PL; you mentioned looking at the P&L, right? So I have my P&L in front of me. If I want to know how I compare to a standard, is there any way I can know that? Is there any publishing around that, or no?",
      ],
    },
    {
      speaker: "Bob Byrnes",
      role: "Guest",
      text: [
        "Yeah, you know, I don't think there is. And what it comes down to, I think, is you have to look at the situation from a top-down approach. What will the market bear for the services I want to sell? And let's just use the standard warehousing example; 100,000 square feet. If I charge, sounds like everyone charges $20 a pallet, just making up a number; if I charge $20 a pallet and I rent the building available to me today at $9 a foot a year, how many pallet positions do I need to create in this building, and what percent of them have to be occupied until I've broken even? And ask yourself; do you have the tolerance for that timeline until break-even occurs, or when profitability occurs? So again, you might rent a building at the top of the market; it doesn't change the fact that customers are only willing to pay $20. The same way you might decide to buy Lamborghini forklifts, and to cover your cost you need to charge $99 a pallet in, pallet out; no one's going to buy it.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: ["Yeah, right?"],
    },
    {
      speaker: "Bob Byrnes",
      role: "Guest",
      text: [
        "Socost and price, again; they're cousins, they're not married. So the game becomes: if the price will be X, what can I do to my costs so that my margin is acceptable by my standards?",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Imean, I can have so many examples around it. There was a customer doing LED lights, right; so they would store all the tubes together, all the different types, one type of SKU with different variations together; same thing, example, all bells together and all that. But the reality is no one is trying to order a brown shoe and a black shoe at the same time. I mean, it also depends; if it's B2B or B2C, there's definitely a lot of variability there.",
      ],
    },
    {
      speaker: "Bob Byrnes",
      role: "Guest",
      text: ["Yeah."],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "At the same time, a lot of people want to combine everything as a client, right; one client stays in this location, the other one stays here. And sometimes you ask them, why are you doing it? Because that's important, right; if it's a B2B customer, you're building pallets, that makes sense to a certain extent. But for the most part, if it's general storage for e-commerce, you already have forward pick areas — so a lot of people are bypassing good processes because they don't have systems to accommodate those processes, and they just adapt as they go.",
        "And I think one thing you mentioned earlier; I didn't want to cut you off, but I was laughing at the time — I call it the \"problem of yesterday and tomorrow,\" right? And this applies to every business, not just 3PL, but to use 3PL as an example: in November, December, I get a crazy volume of orders, and I'm like, \"screw this, I need to...\" and we can use this language, you people are from our industry, and maybe our editor can bleep it, but I'll say, okay, I need to change my system, I need a process, I need to do this, I want to train my people on safety because a safety incident happened, whatever; it could be 10 or 20 different things. But now you go on a break, December 31st, January comes back, you're a little slow, you're like, okay, let me start identifying things. I start identifying; boom, a new customer comes in in February. \"Oh, let's just focus on that first.\" Then March, then April, right? And now, oh, I'm mid-year, let me look at it again. But then, one thing after another; I think it all comes down to priorities, like you said. And as much as anything, what I hear the most is, \"oh, I don't have time to look at processes right now, I need to look at this or that.\" There are like a hundred things as a business owner that come in, especially in this mid-size space, because we're trying to do so much. But finding that time is the key. And honestly, I became a member of IWLA this January, and since then I just feel; why did I not do this before? Because honestly, for me, I'm more like a vendor partner, right; for me it was like, okay, it's one organization, I joined it, we showcase our product and all that. But honestly, that feeling of community; I did not know. I wish I knew it four years back, or even ten years back, even before I got into the WMS space.",
      ],
    },
    {
      speaker: "Bob Byrnes",
      role: "Guest",
      text: [
        "We all want trusted advisors that are experts in their own field without being sold. And that's what you get in IWLA.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah. And that is why I loved it; because I don't need to, say, send someone from my sales team there, because that's how most organizations are. But IWLA is definitely unique; and without this being a commercial for IWLA; I was at Manifest, and I referred like seven people to the IWLA booth, because I truly believe it is a community. It's not something someone is trying to sell or buy. It's about building this community of people who are in the same space, know what they're doing, and are trying to help their peers without thinking of them as competition. So that is very valuable, I feel, and I would always recommend IWLA to anyone in the 3PL space for sure; and even customers of 3PLs, honestly. Maybe IWLA should promote that a bit more too, because it's important to educate them as well.",
        "Anyway, we're kind of deviating from costing and pricing; but yeah, one of the analogies you said, \"costing and pricing are cousins,\" has been going on in my mind, and I think you used it before too. So I just want to use another minute or two; tell me a little bit more about it. I know you've shared a lot around those aspects in different scenarios, but as a standalone; when you think of costing and pricing, which is the agenda of this episode; let's say I'm a 3PL owner, I hear this today live or later on: what is one thing I can do as an action point, let's say this week, to get better?",
      ],
    },
    {
      heading: "The Closing Takeaway",
      text: [],
    },
    {
      speaker: "Bob Byrnes",
      role: "Guest",
      text: [
        "Yeah. So, in my opinion, we tend to win business less often on price. The price has to be right, but there has to be another motivator for the customer to pick you. And to me, I say: find out what that is, and create processes that make you the best or the most efficient at something; that you can provide at a reasonable margin if the price doesn't change.",
      ],
    },
  ],
  "what-hundreds-of-warehouse-conversations-reveal-about-scale": [
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "We have Kevin today with us, and thanks a lot, Kevin, again for joining me and being the volunteer for my first one; and making me feel better. So just a quick intro about the series: Execution at Scale is pretty much built for 3PL operators specifically. With a little over a decade I've spent in the 3PL space, I've seen some patterns, and always thought there was a limitation of content around real-life scenarios. Most of the time when we're at trade events, we're passing by each other, having lunch, having a coffee; real-life conversations; but most of what's on stage is more scripted, going toward the ABCs, not as much the real-life issues. So this is my initiative to see if it brings value to our community. A lot of you might already know Kevin; for those who don't; he's worked up from the floor, he's been in operations in real days, real time, real problems. He now runs the New Warehouse Podcast, started in 2019, has a little over a thousand episodes; right, Kevin?",
      ],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: ["Not quite at a thousand yet; we're somewhere between 750 and 800."],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: ["Almostthere, almost there; this could be episode you can add to yours, right?"],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: ["Yeah, yeah; let's get us to 799"],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "He's also a professor; I call him Professor Kevin; he did a supply chain course, so he has a very broad spectrum of understanding of the supply chain space, along with the 3PL space specifically. So, over to you, Kevin; what made you start the New Warehouse Podcast, and what kept you going? Because, as I see behind you, warehouses are sexy, but most people think they're boring; so I'd love to know, who thinks they're boring? Challenge that.",
      ],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: [
        "No, thanks so much for having me on, Vic, and happy to be your first guest. I love that you're doing this, I love to see other people tackling things like this, joining the podcasting world and making more of these discussions happen. Very honored to be the first guest, so thank you. Yeah, so where did this idea come from, and why talk so much about warehouses? Really, as you said; I started in warehousing kind of unexpectedly, actually as a temp in the inventory control department for a book publisher, and that's really where I first learned everything that happens within a warehouse. That wasn't my formal education, or what I went to school for; not even supply chain in the broad sense, which is interesting, because now, being a professor, I teach supply chain at the same school I graduated from. Odd turn of events. So I started there, needed a job, that's what I found; and from there I just kept growing and got interested in operations and warehousing. I think looking back, what was attracting me to it, besides just the job, was the ongoing, constant problem-solving of it. It wasn't the same thing every day; different issues to deal with, different ways to improve operations, dive into the data and really figure out, \"why does this happen?\", like, why does this physically happen, but the system says something different, and how do we resolve that, how do we find the root causes. I think that's what hooked me in.",
        'A couple years in, I thought, "maybe this is going to be my career for a while," so I need to learn more about the industry, grow within it, know what other people are doing. I was searching for something easily digestible to learn from and couldn\'t find it, everything was, "go get a certification" or "go back to school," and I didn\'t have the time or the mindset for that. I\'d done some creative projects on the side, I actually had a radio show about real estate at my alma mater, so I had some experience on the microphone before this podcast, and I\'d done some freelance writing too. My initial thought was, "I\'ll write about warehouses, do a blog", but quickly realized I had no time to sit down and write, edit, and figure out how to get it out into the world.',
        'Luckily, I had a boss who hired me three times, we got pretty close. He\'d leave the company, then call me a month later and say, "I want to bring you over here." He really pulled me into the warehouse and gave me a lot of that experience; he was actually guest number two on the podcast, if anybody wants to listen. He was the one who said, "I hear podcasts are becoming a thing; what about a podcast?" I\'d never even listened to a podcast before, but I thought, "sounds easier, just sit down and talk", so I committed to it.',
        "It was really for selfish reasons, I wanted to learn more, and figured this was a way to talk to other people and have them teach me things. Over time it resonated with other people, I'd meet people at conferences, or they'd reach out and say, \"this is so helpful to learn about this industry, because I'm trying to figure it out too.\" I realized there were a lot of other people wondering what's possible inside their four walls, and that kept motivating me to keep going. Back then, did I think I'd be doing this podcast seven years later? Absolutely not, there was no future vision of it. It was just a creative outlet that would also help me grow and network a bit more. It's been a blessing that it's grown to where it is, and helped and educated so many people. Whenever I'm interviewing somebody, I think about it in the \"Kevin mindset of 2018\", what is possible inside my four walls, what am I not aware of, what other solutions can I do, and I think that resonates with people. I've been lucky to be doing it full-time for the last three years. So that's really why it started, and what kept the momentum going",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Amazing. It's funny, quite a few things you said resonate with me right now, because I started this series, and this is our first episode. I did it for a similar purpose, \"let's make a five-episode series and see where it goes.\" I wanted to write a lot too, which I did four or five years back, and one thing I told you when we spoke a few days back is that I'm about to launch a book, so you talked about being in publishing and everything, but yeah, it's wonderful having these conversations. The biggest thing about possibility that you talked about, that's what I see the most too, because a lot of operators, especially in the small-to-mid-size 3PL space, are operators-turned-entrepreneurs. They could be a warehouse supervisor who now started a 3PL, juggling all the business problems along with operational efficiency, hiring, etc., those are real-life challenges.",
        "So switching gears to our topic, you've talked to so many people: smaller warehouses, bigger warehouses, enterprises, software companies, technology providers, automation providers. If you combine all your conversations, what would you say are the top three things that become a problem when a 3PL is scaling, say, going from a two-million-dollar revenue mark toward 20 million? What happens in that ecosystem, and what challenges do they face?",
      ],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: [
        "Yeah, absolutely, and to your point, talking to small, large, all different sizes, I think that's one of the fantastic things about this industry: such a wide spectrum of 3PL providers, but also such a massive offering of solution providers, and uniqueness in between that allows a place for everybody.",
        "So, when do things start to break, and what are the causes? I think oftentimes the underlying factor is a lack of really documented and structured processes. It's like, \"we're getting this thing going, let's just figure it out\", and then all of a sudden, there's a ton of 3PLs like this, a client just grows, explodes, or they get lucky and land a larger client, and it pushes them into a whole other world. In the 3PL world, it's like, \"I can't stop shipping\", you can't shut off for two days to figure out your processes.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: ["Yeah,the brand's like, \"why aren't we shipping? We hired you as the expert.\""],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: [
        "Exactly, so there's pressure to keep going. But underlying it, it's the lack of documented or structured processes that would help you scale. It's one thing when you've got a couple people in the operation who've been with you early and just know things, but as volume gets added, you need more people to pick, pack, process, and if you can't bring them in with processes in place that they can mirror and follow, that's where things start to fall through the cracks.",
        "That leads to the second thing, maintaining quality as you scale. The more touch points, the more opportunities for things to go wrong. You could have the fanciest technology out there, but if your processes and controls foundationally aren't right, technology isn't going to fix that.",
        "And then a third thing, maybe a tie for two, one is people, the leadership. Do you have people with the experience, ready to take on that scale? Going from smaller to larger volume, you've got to be a strong operator to maintain consistency day-to-day. Sometimes I see it, a 3PL starts because a friend had a brand and needed help, then another friend needed work, so they brought them in, but are we really ops people, or did we just find ourselves in this position? Some people are geared that way and can figure it out as it scales, but at a certain point you need to bring in someone to be a warehouse manager or ops manager. Making sure you have experience on the team that's operated at a higher volume level is key.",
        "The other thing I've heard a lot is when you get to the size where you're expanding into multisite, going into another building, another state or region, that's where a lot of 3PLs struggle. It's a totally different market from a labor perspective, different regulations, different local laws you may not be familiar with, and that can be hard to ramp up. It ties into the people thing too, say I'm in New Jersey, and now I'm getting clients who want West Coast presence, so I'm opening a building in California or Nevada, do I have people in New Jersey I can send out to stand that up, or do I need to find somebody else, and can I trust them to do that? So there are a lot of challenges there. But foundationally, process, control, standardization, for any operation, 3PL or retailer shipping themselves, that's going to get you through those moments to scale. If my New Jersey site is solid on process and standardization, I can take those processes and put them in my California building, and we have a great baseline to start from.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah, no, I totally agree, I was about to say the same thing about multi-site tying back directly to your first point about processes. I can't appreciate that more, because I'm all about processes, coming more from a manufacturing background where it's even more important to have the right processes in place. I loved what you said about people thinking, \"we have this problem, we're getting errors, let's add a technology, maybe something basic like barcode scanning\", obviously barcode scanning helps with elimination, but if you don't have standard processes... it's surprising to see the variability in our industry, sometimes we don't know what our customer's going to ask. As a 3PL, a brand could say, \"we have a sale coming up before Christmas, we're expecting 20,000 orders in three days\" when normally they ship 500 a day, and by the way, you're also putting a thank-you card in each one. So what technology does is not fix your process, it amplifies the problem, same with automation, robotics, all of that, most technology is built around processes, so if you don't follow processes, you'll feel it even bigger. One other thing I'd comment on, what you said about few people in the company knowing the process, it's not documented, I'd call it the \"unicorn employee\": \"oh, the supervisor knows everything.\" What happens when he's sick, or wakes up tomorrow and decides warehouses aren't sexy anymore?",
      ],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: ["Oh,thatsounds like a nightmare."],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Idon't know, it actually happened, I was talking to a client a couple days back, and he had an employee working for 15 years, and randomly one day the guy comes in and says, \"I'm tired, I don't want to do this anymore,\" and quit on the spot. 15 years is a long time, not because he didn't like the company, not because he got another job, he was just overwhelmed, or whatever, could be a hundred different reasons, life changes. But most businesses aren't prepared for that, and I think it applies to pretty much every business.",
      ],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: ["Forsure, I 100% agree with that."],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Solet's say these are some of the challenges, what do you feel stops operators from understanding these challenges? Is it because the knowledge isn't out there, is it because they're not involved, what are your thoughts?",
      ],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: [
        "Yeah, I think there's a couple of things. Some of it is, and I've heard a lot of these stories from 3PLs, some of this stuff moves so fast. You get a client that's relatively small, and all of a sudden they blow up, and it's like, \"whoa, we've gotta keep up with them or we're gonna lose them\", or you get the opportunity at a larger client, bigger than anybody you've had before, and now you've gotta move quickly, because this could be a huge catalyst for the next phase of the business, a game changer. So a lot of times it's an \"all of a sudden, we need to move very quickly,\" and because we move so quickly, we forget some things in between. I also think a lot of 3PL owners start out doing some of the shipping themselves, and as they scale, like any business owner, it's, \"when do I step back and focus more on growth versus the day-to-day?\" It ties back to hiring the right people to help with that scale, or am I so in the weeds that I can't see the greater picture and the actual strategic problems happening, and not address them? That's hard to do, especially when things move quickly. But I also think you can find great, thoughtful growth by making sure you've defined your uniqueness in the market and stick to your specialty. I think that's one of the challenges too, companies say, \"this is our specialty,\" but then a client comes along doing a large amount of volume that's totally out of scope of what you'd normally take, but the volume's tasty, so you bring them on, and it doesn't work out because you're not geared for that type of product or customer.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Absolutely, I can think of a thousand examples of those scenarios, where people go outside their ICP, which isn't necessarily bad, to expand, you have to do it sometimes, but at the end it goes back to your first point: processes and a plan are very necessary. A classic example is someone in B2B fulfillment moving toward e-commerce fulfillment, totally different processes and scenarios. With a B2B order, if it's delayed by an hour, it's fine, the LTL carrier can wait. But if you're doing 500 orders a day for e-commerce, you can't delay even 10 minutes past the FedEx or UPS cutoff, otherwise it's delayed by a day, which a brand would not like. That's just one challenge. And I'd say, that point you mentioned is also very critical: the problem of \"yesterday and tomorrow.\" We think, \"we'll set up processes, change things,\" but Q1 comes and we think, \"we'll do it in Q2,\" then we get a new client in Q2, \"we'll do it in Q3,\" and Q4 is busy season again, it just keeps looping. From the shoes of a business owner or operator, how can they work toward getting that balance or strategy?",
      ],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: [
        "Yeah, I think it's about going about it with that thoughtful growth. It's very easy, especially when you're trying to grow, to say yes a lot to volume. Sometimes that works, you drink from the fire hose, figure it out later, and it smooths out. But oftentimes it doesn't quite work, because you're overloading and haven't scaled labor properly, and clients suffer because quality dips, SLAs dip, and you lose clients or get churn. So the key is having that thoughtful growth, can we actually feasibly take on more volume right now, or do we need to do this improvement project first to open up capacity? It goes into strategic long-term planning too, where do I want to be from a revenue and volume perspective, and what do I need to do in between to get there? A lot of it comes down to data, understanding, \"right now my average units per hour picking, packing, if I add this amount of volume, what does that mean for headcount? I have five pack stations, which means I can output this many orders a day, if I need more, do I need to add pack stations, and do I have space for that?\" Sales and marketing's job is to go get customers, but logistics operations has to deliver on the promise that sales and marketing put out there. Making sure you're thinking about the whole picture holistically, being thoughtful about that growth, that's the best way. I've seen a lot of 3PLs face that challenge, revamp, rethink how they're going to do it, and come out the other side successful. And also, just learn to say no more often, which is hard when you're trying to grow the business, when you're seeing volume and dollars, \"oh, this much revenue\", but at the end of the day, can we sustain it?",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah, and I think one of the really good points you mentioned about capacity, sometimes people underestimate that, \"okay, we're adding this volume, maybe we can manage it,\" but what about the capital investment that will also be needed? Maybe they don't have the cash flow to invest in extra stations or equipment. Obviously it depends on the volume, adding one pack station won't break someone, but as an example, that planning part. And I'm curious, one of the things you mentioned, which I also feel strongly about, is knowing your cost per client. As you mentioned, billing for a 3PL is already complex. Right before this podcast I was reading a LinkedIn post by someone about billing, saying they're using AI to do cost work, there are so many new AI tools people can be creative with, but at the same time, billing is already complex for every 3PL client, charging by picks, UOMs, value-added stuff, how long things have been stored, and so on. Getting a true P&L per client is difficult for a 3PL not using the right tools. What are your thoughts, what have you seen people do to tackle that, any recommendations?",
      ],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: [
        "Yeah, absolutely. I think at the end of the day, data is king. You have to be able to capture that data, you can't manage what you can't measure. I had a recent conversation with somebody at a 3PL, it's halfway through the month and they don't even know if they're on budget or not. That's a huge mess from a business perspective. If you look at how larger 3PLs that have been around a long time do their data analysis, we did a really interesting livestream with Barrett Distribution Centers, I think the end of last year, on how 3PL pricing works. They're very adamant that there's no rate card, no standard rate — each client goes through the analysis to see their actual costs. Because you can have a standard rate card, but that means with this product from this customer you'll make this much, and with another one, a little less, how do you have a consistent margin? It's easier and feels faster to market, typically a brand looking for a 3PL has a bunch of 3PLs hitting them up, like a feeding frenzy, you've seen it on LinkedIn, \"I'm looking for a 3PL,\" 180 comments later, \"oh my God, my inbox.\" But thinking about it thoughtfully comes down to data, ask for samples, how long does it actually take to pack, to pick, how much space does it take to store, take that data and translate it into what's the actuality of our costs. You could have somebody doing amazing volume, and when you break it down, you're shipping 30,000 units a month for this customer but making pennies, doesn't make sense. So harnessing that data, understanding your metrics, how much does it cost to do a pick, to pack, what does packaging cost, activity-based costing to understand per order, per unit, what this is going to cost and what you're going to make.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "For sure, and interesting enough, my second episode is on costing, next week, Bob Byrnes was kind enough to come on, talks about all that, from IWLA, I'm sure you know him. But I think the key takeaway here is what you said about not having a standard rate card, every customer being unique, that's a very important point from your conversation with Barrett Distribution. I'll give you a live example: one of my clients onboarded a new client three months back. They gave order volume based on shipments, \"these are the number of orders we process\", quoted them a fee, everything good, they're in the warehouse doing it, going well. They invoice the customer, turns out the customer was counting a \"kit,\" a combination of two to three items, as one item, the 3PL didn't ask, the brand didn't say, now there's a dispute: \"this should be charged $2 when it should be $6.\" They're about 150K in deficit. Now they have this big customer, don't want to argue, but they added more manpower and did everything. So another important aspect: how much space items take in your warehouse, how heavy they are, special packing needs, how many line items per order, whether you have to control lot numbers or batches that add time to the process. Having a customized pricing approach per customer, and a detailed analysis, sets both you and your customer up for success, because if I'm hiring a vendor, and they don't know their cost, I might get a good deal, but that's good for a transactional relationship. For a long-term relationship, if there's a warehouse in New Jersey and one quotes $10 for storage, another 20, another 16, there's a reason for that variability. It's as important for brands and manufacturers to understand this cost as it is for 3PLs, because it helps them make that decision",
      ],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: [
        "Yeah, absolutely, and it's interesting, like you said, they thought it was $2 and it was $6, I was thinking, it's like going to the store, grabbing a candy bar, the shelf says $1, you walk up to the counter and it's actually $5, \"wait, what?\" That creates tension, because either the 3PL didn't explain to the client how these costs work, or the brand, often, if it's their first 3PL, or even their second, they're new to this. You don't see many brands that come from actual supply chain operations backgrounds, so they don't understand how all of it works, and now there are so many different variables in pricing. There's unfortunately a reputation in the industry of 3PLs having hidden costs and additional things tacked on. But for the 3PL, it's about education, you've got to educate the client on where costs are coming from. I see a lot of 3PLs work with clients and say, \"as it is right now, this is the cost, but we did this thing with packaging for another client, we could do that with you too, and it would save you cost.\" There's no standard of pricing in the industry, everybody prices differently, some do an all-in price, some do itemized pricing which gets complicated. To your point, New Jersey, somebody's at 10, somebody's at 16, somebody's at 20, the client's probably thinking, \"what's the difference, it's all four walls of concrete\", but yeah, that's a great point",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah, that's what intrigued me, because before I got into the 3PL space I was on the other side, helping my consulting clients get 3PLs. I'd be talking to three warehouses literally next door to each other, ten minutes apart, and their pricing was off by 25-30%. That was early on, and I didn't spend much time understanding why, but as I spent more time, I realized it's hard to even articulate their exact cost sometimes. And like you said, some 3PLs assume the brand already knows everything, but most brands don't come from a supply chain or warehousing background. I remember, five or six years back, talking to a lady who worked as a front desk associate, because she couldn't find a cat toothbrush for her cat, she started a cat toothbrush brand, doing about a million dollars a year, and now she's looking for software, looking for a 3PL, and doesn't know what to do. Apparently no one was selling cat toothbrushes at the time, but it's interesting how a lot of these brands are made. Sometimes they don't start any differently than you starting the podcast, \"I think there's a need, let's do something\", and now something happens, and they don't know anything, don't have anyone to help them. I feel that if 3PLs take the effort to educate the brand, especially newer brands, since they have potential to grow, that could be a big value-add to the community.",
      ],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: [
        "Yeah, absolutely, I never thought about brushing a cat's teeth before, but it's interesting, obviously there's demand there. I think there's an education piece, somebody has a random idea that pops into their head, and something that doesn't get talked about often is: does the idea have legs or not? Sometimes inventory gets sent to a 3PL and it doesn't work out, and that inventory gets stuck, and the 3PL has to deal with it. So there's education that needs to happen for brands and clients on how to really work with a 3PL, and how the 3PL can help support their growth from an infrastructure and logistics perspective. But I also think there's a gap in the market from the brand side, I've had brands reach out asking if there's a 3PL I'd recommend, and I think the brand tends to think they have the upper hand in the relationship, doing 50 orders a month, which is great for somebody starting their own little business, but in the grand scheme of things, that's a lot of 3PLs' \"I don't want that.\"",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: ["Yeah,yeah, yeah."],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: [
        "But they think, \"I have business, so any 3PL would be lucky to have me\", and I think that's skewed, not really talked about in the industry. Obviously 3PLs don't want to market as, \"we don't want you if you've got a tiny company knitting something in your room and selling 20 a month.\" But on the brand side, you've got to understand where you're at, in some ways, the 3PL is also taking a risk on you, because they want the brand to grow, the more the brand grows with them, the more the 3PL grows. They're allocating space, holding your inventory, communicating with you, and early brands often have a lot of questions, a lot of back-and- forth even though there's not a lot of volume tied to it. So there should be more awareness on the brand side that a 3PL isn't necessarily going to be chomping at the bit to take on something with no volume yet, or that they should be okay paying more cost for that.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Right, it's functional, there could be different scenarios, like maybe it's someone's second brand and they know it will grow, so 3PLs might charge a premium at least to good bonds, or at scale, charge a minimum plus a premium. So as a brand, you should be ready for that trade-off. No, I absolutely agree, and just before I move to the closing point, if you were amazed about the cat toothbrush, I'll send you this, there was a company that made a cat DNA testing kit, got sold for something like 100 million in a few months, they were on Shark Tank. I'll send you that episode after this.",
      ],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: [
        "That was wow. Yeah, I guess that makes sense, I've heard of it on the dog side, like, \"I've got a dog that's a mix of all these things, trying to figure out exactly what it is\", but that's pretty incredible. People love their pets.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: ["Yeah, they love their pets, it's pretty wild what people spend money on for their pets."],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: ["Yeah, I have more beds for my dog than I have in my entire home."],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah, so we're nearing time, but I just want to ask you two last things, and then if anyone in the audience, we have about eight people watching us, wants to ask anything. What would you say are some early signs a 3PL operator should be aware of that they're about to hit a breaking point as they're scaling, how can they know the signals? And any key takeaway or action point they can do this week or next week?",
      ],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: [
        "Yeah, absolutely. I think there's a few signs things are about to break. One is you start to notice the warehouse getting disorganized, or less organized than usual; things piling up, more of a mess than usual, not as clean as typical. That means capacity is getting up, maybe starting to exceed capacity, and people don't have time to properly clean up, throw things away, clean out locations. When you see that piling up, that's an indicator something's bubbling toward a breaking point; a very visual thing you can notice. You also might hear it from your workers; them vocalizing that they're getting pushed to the limits. That could be a potential breaking point, because; to your earlier point; that person of 15 years suddenly says, \"I'm tired, I'm done.\" You don't want to get to that point with your employees, especially while trying to scale, because now not only do you need more people for the new volume, you also have to replace that person. So those are some signs of breaking points. And the takeaway I'd say, like I said earlier, data is king in everything. If you're going to scale, want to be profitable, want to understand if this is a good client or not, you need visibility into that data; what are the actual numbers, is this sustainable, am I making money or losing money, is this a client I need to fire because they don't make sense on paper? So my key takeaway is data, data, data.",
      ],
    },
    {
      heading: "Closing Thoughts",
      text: [],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah, 100%, and your point about listening to your employees on the floor is key, if someone wants one takeaway from this hour-long conversation, that's it. And an extension of that, when you start seeing the floor go quiet, and in morning meetings everyone says \"yeah, everything's good\", it can never be everything good in a business, doesn't matter what. If your team members aren't speaking up, you're about to fall off, is what I'd say. And overall, which I'm guilty of too, I'd been thinking about joining IWLA for about four years, joined this year, and I feel there's so much potential in the community, IWLA is one of many resources. My conversations with most 3PL owners, they're so involved and busy in day-to-day stuff that they don't feel being part of the community will be valuable. I'd say nine out of ten people I know aren't part of communities like IWLA. I feel that's something most people should do, get to know like-minded people, people in similar businesses, people they can find help through, consultants they can turn to for things they don't know, there are so many resources out there. I feel that's also very critical.",
      ],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: [
        "Yeah, absolutely, I agree 100%. That's certainly one thing I've found in the 3PL space, there's a very small percentage of 3PL people not willing to help other 3PLs, network with them, learn from each other, share leads even, in some cases. IWLA is certainly one of them, but there's also some great Slack groups and WhatsApp groups too, where I see people all the time asking, \"has anybody had this issue, how do we deal with this?\" So it's a very strong community overall, and really worth investing in, trying to learn from others too.",
      ],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Awesome, great. Well, nearing the time, if anyone wants to ask anything to Kevin, drop a message in the chat. After this webinar, I'll send out my information, Kevin's information. If you want to connect with Kevin; is it okay if they connect with you on LinkedIn or email?",
      ],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: ["Yeah, absolutely, connect with me on LinkedIn; that's the best way for sure."],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "100%.Well, great, and Sarit, I just saw your message again, as you know, this was my first webinar, so I was juggling between the chat and talking to Kevin, so I couldn't see it, just saw it now; thank you for the congratulations, and I appreciate you joining, and appreciate everyone joining. Thanks a lot, Kevin, I really appreciate your time, this wasn't how I imagined it, I was a little nervous, but you made it comfortable for me. I appreciate that a lot.",
      ],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: ["You were great, you were great; great first time, I will say, definitely."],
    },
    {
      speaker: "Vikrant",
      role: "Host",
      text: [
        "Yeah, I appreciate that a lot. So, one thing I forgot to say, Kevin, the webinar will end now, I guess, but you'll see an uploading thing on top, so whenever it goes to 100%, you can close the browser. But we can pretty much end the live streaming now, which I'm going to do. So thanks a lot, everyone, again, and appreciate you all joining in; stay tuned, we'll probably see you all next Wednesday.",
      ],
    },
    {
      speaker: "Kevin Lawton",
      role: "Guest",
      text: ["Allright, thank you, everybody...."],
    },
  ],
};
