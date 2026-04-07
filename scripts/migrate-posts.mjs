/**
 * One-time migration: creates the 6 blog posts in Sanity CMS.
 * Run with: SANITY_TOKEN=your_token node scripts/migrate-posts.mjs
 */

import { createClient } from "@sanity/client";

const token = process.env.SANITY_TOKEN;
if (!token) {
  console.error("Error: SANITY_TOKEN environment variable is required.");
  console.error("Get a token from manage.sanity.io → API → Tokens (Editor permission).");
  process.exit(1);
}

const client = createClient({
  projectId: "crs7qrfh",
  dataset: "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

// ── Portable text helpers ─────────────────────────────────────────────────────

let _k = 0;
const k = () => `k${++_k}`;

const span = (text, marks = []) => ({ _type: "span", _key: k(), text, marks });
const s = (text) => span(text, []);
const bold = (text) => span(text, ["strong"]);
const italic = (text) => span(text, ["em"]);

const block = (style, children) => ({
  _type: "block", _key: k(), style, markDefs: [], children,
});

const p = (...children) => block("normal", children.map((c) => typeof c === "string" ? s(c) : c));
const h2 = (text) => block("h2", [s(text)]);
const h3 = (text) => block("h3", [s(text)]);
const li = (...children) => ({
  _type: "block", _key: k(), style: "normal", listItem: "bullet", level: 1,
  markDefs: [], children: children.map((c) => typeof c === "string" ? s(c) : c),
});

// ── Posts ─────────────────────────────────────────────────────────────────────

const posts = [
  {
    _type: "post",
    _id: "post-website-costing-you-customers",
    title: "Why Your Ohio Business Website Might Be Costing You Customers",
    slug: { _type: "slug", current: "website-costing-you-customers" },
    excerpt: "Most small business websites are built to look good at launch — not to convert visitors into customers. Here's what to audit first and what to fix.",
    publishedAt: "2025-01-15T00:00:00.000Z",
    category: "websites",
    readTime: 7,
    featured: true,
    body: [
      p("Your website is often the first real impression a potential customer gets of your business. Not the sign on your building, not a referral from a neighbor — your website. And for most small businesses in Ohio, that first impression is quietly costing them customers every single week. Not because the site looks terrible, but because it was never designed to convert."),
      h2("The Silent Cost of a Bad Website"),
      p("A bad website doesn't announce itself. Nobody calls you to say \"I was on your site and left because it loaded too slowly.\" They just leave. They go to your competitor down the road, or the national chain, or whoever showed up next in the search results. You never know it happened."),
      p("This is what makes a poor-performing website so dangerous for a local business — the damage is invisible. You don't see a line item on your P&L that says \"lost leads due to bad UX.\" You just notice that the phone isn't ringing like it should, and it's hard to know why."),
      h2("5 Warning Signs Your Site Is Working Against You"),
      h3("1. It Loads Slowly"),
      p(bold("53% of mobile users abandon a site that takes more than 3 seconds to load."), " If your site takes 6–8 seconds, you're losing more than half your visitors before they even see your content. Use Google's free PageSpeed Insights tool (pagespeed.web.dev) and enter your homepage URL. If your mobile score is below 50, you have a real problem. Common culprits are oversized images, too many plugins (especially on WordPress), and slow hosting."),
      h3("2. It Isn't Mobile-Friendly"),
      p("More than 60% of local business searches happen on a phone. If your site requires pinching and zooming, has buttons too small to tap, or text that runs off the edge of the screen, visitors will leave within seconds. This isn't an aesthetic issue — it's a functional one. Pull up your own site on your phone right now. Would you stay on it if you were a stranger looking for what you offer?"),
      h3("3. There's No Clear Call to Action"),
      p("A visitor lands on your homepage and wants to hire you. What do they do? If the answer isn't immediately obvious, you're losing them. Every page of your site should have one primary action you want visitors to take — call, book, get a quote, whatever fits your business. That action should be visible above the fold without scrolling. If someone has to hunt for your phone number, they'll give up."),
      h3("4. The Information Is Outdated"),
      p("This one sounds obvious but it's incredibly common. Hours that haven't been updated since COVID. A \"team\" page featuring someone who left three years ago. A blog with the last post dated 2019. Services you no longer offer. Outdated information erodes trust faster than almost anything else — it signals to visitors that nobody's home, and it makes them wonder what else might be wrong."),
      h3("5. No Trust Signals"),
      p("When a new customer lands on your site, they're asking themselves one question: ", italic("Can I trust these people?"), " Trust signals are the elements that answer \"yes.\" These include Google reviews (with star ratings visible on your site), testimonials with real names and businesses, photos of your actual team or work, professional certifications or licenses, and a physical address. If your site has none of these, you're asking visitors to trust you on faith alone — and most won't."),
      h2("What Each Fix Actually Involves"),
      p("Speed: Compress your images before uploading (tools like TinyPNG are free), consider upgrading your hosting, and if you're on WordPress, a caching plugin like WP Rocket can make a significant difference. In stubborn cases, a site rebuild on a faster platform may be the right call."),
      p("Mobile: If your site was built more than five years ago without a responsive redesign, a proper mobile fix often means rebuilding the templates. Patching over an old desktop-first design rarely works well. If you're on a modern platform and it still looks bad on phones, your theme or template likely needs to be replaced."),
      p("CTAs: This is often the fastest fix. Add a sticky phone number in the header. Put a \"Get a Free Quote\" button above the fold on your homepage. Make sure your contact page is one click away from anywhere on the site. These changes can sometimes be made in an afternoon."),
      p("Outdated content: Set a quarterly reminder to do a site audit. Check your hours, your team page, your services, and any time-sensitive content. Update your Google Business Profile at the same time."),
      p("Trust signals: Embed your Google reviews on your homepage using a free widget. Add a \"Why Choose Us\" section with real specifics — years in business, number of clients served, specific credentials. Add photos of your actual space or work. These changes build credibility every day."),
      h2("How to Prioritize"),
      p("If you're overwhelmed, start here: fix the mobile experience and add a clear CTA first. These two changes alone can meaningfully lift your conversion rate with minimal investment. Then tackle speed. Then trust signals. Outdated content is an ongoing maintenance task, not a one-time fix."),
      p("The goal isn't a perfect website — it's a website that works. One that loads fast, looks right on a phone, tells visitors what you do and why they should choose you, and makes it easy to contact you. That's the bar. A lot of Ohio small businesses are well below it."),
      h2("Ready to See Where You Stand?"),
      p("If you're not sure how your site is performing, I offer a free website audit for Ohio small businesses. I'll look at speed, mobile, CTAs, trust signals, and SEO basics, and give you a plain-language report on what's working, what isn't, and what to tackle first. No sales pitch — just a useful document you can act on yourself or hand to a developer. Reach out to get started."),
    ],
  },
  {
    _type: "post",
    _id: "post-ohio-google-ads-guide-2025",
    title: "The Ohio Business Owner's Guide to Google Ads in 2025",
    slug: { _type: "slug", current: "ohio-google-ads-guide-2025" },
    excerpt: "Google Ads can be a gold mine or a money pit depending on how they're set up. Here's what to know before you spend a single dollar.",
    publishedAt: "2025-01-08T00:00:00.000Z",
    category: "sem",
    readTime: 9,
    body: [
      p("Every week I talk to Ohio business owners who have tried Google Ads, spent a few hundred or a few thousand dollars, gotten little or nothing back, and concluded that Google Ads \"doesn't work.\" In most of these cases, it isn't that the platform failed them — it's that the campaigns were set up in ways that almost guaranteed poor results. Google Ads works. But it requires specific knowledge to set up correctly, and Google's defaults are not your friend."),
      h2("How Google Ads Actually Works for Local Businesses"),
      p("Google Ads is a pay-per-click auction. You bid on search terms (keywords), and when someone in your target area searches for those terms, your ad competes with others for placement. You pay only when someone clicks. The cost per click varies enormously by industry — a personal injury lawyer in Cincinnati might pay $80+ per click, while a local landscaper in Akron might pay $3–5."),
      p("For local businesses, the most relevant campaign type is a Search campaign targeting your geographic area. When someone in Columbus searches \"emergency plumber near me,\" a well-run Search campaign gets your ad in front of them at exactly the right moment. That's the value proposition — intent-based advertising. You're reaching people who are actively searching for what you offer."),
      h2("What You Need Before You Run Ads"),
      p("Before spending a dollar, make sure you have these in place:"),
      li(bold("A conversion-ready landing page."), " If you're sending ad traffic to your homepage, you're wasting money. Your landing page should match the ad's message, load fast, and have one clear action (call, book, form fill)."),
      li(bold("Conversion tracking."), " You need to know which clicks are turning into calls, form fills, or purchases. Without this, you're flying blind. Set up Google Ads conversion tracking before the campaign goes live — not after."),
      li(bold("A realistic budget."), " In competitive Ohio markets, you typically need at least $500–$1,000/month to gather meaningful data. Less than that and you may not get enough clicks to optimize."),
      li(bold("A clear offer."), " What do you want people to do when they click? What makes your business the right choice? Vague offers get vague results."),
      h2("Campaign Structure Basics"),
      p("A Google Ads account has three levels: account, campaigns, and ad groups. For most small local businesses, a single Search campaign with 2–4 tightly themed ad groups is the right starting point. Each ad group should have a tight cluster of related keywords and ads that speak directly to those keywords."),
      p("For example, a Cleveland HVAC company might have one ad group for \"AC repair,\" one for \"furnace installation,\" and one for \"HVAC maintenance.\" Each ad group has its own ads with messaging relevant to that specific service, and ideally its own landing page. This structure improves Quality Score, which lowers your cost per click."),
      h2("The Most Common Mistakes Ohio Small Businesses Make"),
      h3("Using Broad Match Keywords Without Guardrails"),
      p("Google's broad match keyword type shows your ads for searches that are \"related\" to your keyword — and Google interprets this very liberally. A plumber bidding on broad match \"plumbing\" might get their ad shown for \"plumbing school\" or \"plumbing supply wholesale.\" You pay for those clicks. Start with phrase match or exact match keywords, and only expand to broad match once you have solid negative keyword lists in place."),
      h3("No Negative Keywords"),
      p("Negative keywords tell Google when ", italic("not"), " to show your ad. If you're a residential roofer, you should add negatives like \"commercial,\" \"DIY,\" \"how to,\" and \"jobs.\" If you're a personal trainer, exclude \"free,\" \"certification,\" \"YouTube.\" Without negatives, you'll waste a significant portion of your budget on irrelevant traffic. Review your Search Terms report weekly when a campaign is new."),
      h3("Sending Traffic to the Homepage"),
      p("Your homepage is for browsers. Your ad landing page is for buyers. Someone who clicked an ad for \"Toledo emergency roof repair\" should land on a page about emergency roof repair in Toledo — not your general homepage where they have to figure out where to click next. This single change can double your conversion rate in many cases."),
      h3("No Conversion Tracking"),
      p("Running Google Ads without conversion tracking is like doing a direct mail campaign and never checking if the phone rang. You have no idea what's working. Google's smart bidding strategies (which you'll eventually want to use) also require conversion data to function — without it, you're locked into manual bidding and can't benefit from Google's optimization algorithms."),
      h2("How to Measure Success"),
      p("The metrics that matter for most local businesses: ", bold("cost per conversion"), " (what does it cost you to generate a lead or sale), ", bold("conversion rate"), " (what percentage of clicks become leads), and ", bold("search impression share"), " (what percentage of eligible searches you're appearing for). Click-through rate (CTR) and cost per click matter too, but they're means to an end."),
      p("A cost per conversion of $30 for a service where the average customer is worth $500 is excellent. A cost per conversion of $200 for the same service is a problem. Know your customer lifetime value and set a realistic target cost per lead before you start."),
      h2("Start Right or Not at All"),
      p("Google Ads rewards precision. A sloppy campaign doesn't just underperform — it actively costs you money while teaching you nothing. If you want to run ads yourself, spend real time learning the platform before you touch the budget settings. If you'd rather have someone set it up correctly from the start, that's a reasonable choice too."),
      p("If you're curious whether Google Ads makes sense for your Ohio business and what a realistic budget and structure might look like, I'm happy to take a look. Reach out for a free audit and we'll talk through your specific situation."),
    ],
  },
  {
    _type: "post",
    _id: "post-ai-tools-small-business-marketing",
    title: "AI Tools That Are Actually Useful for Small Business Marketing",
    slug: { _type: "slug", current: "ai-tools-small-business-marketing" },
    excerpt: "Beyond the hype — these are the AI tools delivering real value for small businesses right now, and how to start using them without getting overwhelmed.",
    publishedAt: "2024-12-20T00:00:00.000Z",
    category: "ai",
    readTime: 8,
    body: [
      p("The AI conversation in marketing has been dominated by hype for the last two years. Vendors promise that AI will replace your entire marketing team, automate everything, and 10x your revenue overnight. The reality is quieter and more useful: there are a handful of AI tools that genuinely save time and improve output for small businesses right now, and they don't require any technical expertise to use. Here's an honest breakdown of what's worth your attention."),
      h2("ChatGPT and Claude: Your Content Thinking Partners"),
      p("These large language model tools (ChatGPT from OpenAI, Claude from Anthropic) are the most immediately useful AI tools for most small business owners. The key is understanding what they're good at and what they're not."),
      p(bold("What they're good at:"), " Drafting first versions of content (social posts, email newsletters, blog outlines, website copy), brainstorming ideas, summarizing documents, writing and improving ad copy, answering questions about marketing strategy, and helping you think through a problem by asking it questions."),
      p(bold("What they're not:"), " A replacement for your judgment. The output needs editing. Facts need verification. The voice needs humanizing. Use them as a starting point, not a finished product."),
      p("A practical example: a plumber in Dayton uses ChatGPT to draft the first version of a monthly email newsletter in about 10 minutes, then spends another 10 editing it to sound like himself. What used to take 90 minutes now takes 20. That's a real time saving."),
      h2("Canva AI: Design Without a Designer"),
      p("Canva was already the go-to design tool for non-designers. Their AI features have made it substantially more useful. Magic Write generates copy inside your designs. Magic Design turns a text prompt or uploaded image into a full design template. Background Remover (AI-powered) eliminates the need for Photoshop for product photos."),
      p("For a local retail shop or restaurant, this means professional-looking social media graphics, promotional flyers, and email headers without hiring a designer for routine work. The subscription is $15–$20/month and pays for itself quickly if you're currently outsourcing this work."),
      h2("Google's AI Features in GA4 and Google Ads"),
      p("Google has embedded AI throughout its marketing tools, and some of it is genuinely useful. In ", bold("Google Analytics 4"), ", the \"Insights\" feature surfaces anomalies and trends in your data automatically — it'll flag things like \"traffic from organic search is up 40% this week\" or \"your contact page conversion rate dropped significantly.\" You don't have to go hunting for problems; GA4 surfaces them."),
      p("In ", bold("Google Ads"), ", Smart Bidding uses machine learning to optimize your bids for conversions in real time — adjusting based on device, time of day, location, and dozens of other signals. For campaigns with enough conversion data, Smart Bidding consistently outperforms manual bidding. The caveat: it requires solid conversion tracking and enough volume (ideally 30+ conversions per month) to work well."),
      h2("AI Chatbots for Customer Inquiries"),
      p("If you regularly get the same questions from customers — hours, pricing, services, booking — a basic AI chatbot can handle these 24/7 without your involvement. Tools like Tidio or Intercom have AI chatbot features that can be trained on your FAQ content and integrated into your website in a few hours."),
      p("This isn't about replacing human interaction — it's about handling the routine so you can focus on the complex. A customer asking \"are you open on Sundays?\" at 10 PM doesn't need to wait until Monday morning for an answer. A chatbot that handles that inquiry and books an appointment saves you time and captures leads you'd otherwise lose."),
      h2("Zapier for AI-Powered Automation"),
      p("Zapier connects your apps and automates repetitive tasks. Their AI features (Zaps with AI steps) can now do things like: automatically summarize a new form submission and send it to you as a Slack message, take a new Google review and draft a personalized response for your approval, or route inbound leads to the right person based on what they said in their message."),
      p("If you're doing repetitive data entry between platforms — copying leads from a form into a CRM, for example — Zapier is worth exploring. The free tier handles basic automations; paid plans start around $20/month."),
      h2("Start With One Tool, Not Five"),
      p("The biggest mistake I see business owners make with AI tools is trying to adopt everything at once, getting overwhelmed, and abandoning all of it. Pick one tool that addresses your biggest time drain right now. If writing content takes forever, start with ChatGPT. If design is the bottleneck, start with Canva. If you're drowning in repetitive admin work, look at Zapier."),
      p("Give yourself 30 days to actually learn that one tool. Use it for real work. Figure out where it helps and where it doesn't. Then, and only then, consider adding a second tool. The businesses getting real value from AI aren't the ones who installed 12 tools — they're the ones who got genuinely good at two or three."),
      p("If you want help thinking through which AI tools make the most sense for your specific business and marketing workflow, I offer free strategy conversations for Ohio businesses. No obligation — just a useful conversation."),
    ],
  },
  {
    _type: "post",
    _id: "post-local-seo-ohio-businesses-2025",
    title: "Local SEO for Ohio Businesses: A Practical 2025 Playbook",
    slug: { _type: "slug", current: "local-seo-ohio-businesses-2025" },
    excerpt: "Ohio's local markets are competitive. Here's exactly how to optimize your local SEO presence to show up when customers nearby are searching for what you offer.",
    publishedAt: "2024-12-10T00:00:00.000Z",
    category: "seo",
    readTime: 11,
    body: [
      p("When someone in your city searches for \"best electrician near me\" or \"Italian restaurant downtown,\" Google is making a series of complex decisions about which businesses to show. The businesses that show up — in the map pack and in organic results — aren't there by accident. They've done specific things to signal to Google that they're relevant, trustworthy, and local. This playbook covers those things in the order I'd prioritize them."),
      h2("Why Local SEO Differs From Regular SEO"),
      p("Traditional SEO is about ranking for keywords nationally or globally. Local SEO is about ranking for searches with geographic intent — \"near me,\" specific city names, or searches Google infers are local based on the user's location. The ranking factors overlap, but local SEO adds a distinct layer: ", bold("proximity, relevance, and prominence"), " as Google defines them in their local ranking documentation."),
      p("The most visible result of good local SEO is appearing in the \"map pack\" — the three local business listings that appear at the top of Google's search results page for local queries. These three spots generate the vast majority of clicks, and getting into the map pack requires specific optimization of your Google Business Profile above all else."),
      h2("Step 1: Claim and Fully Optimize Your Google Business Profile"),
      p("Your Google Business Profile (GBP) is the single most important asset in local SEO. If you haven't claimed yours at business.google.com, do it today. If you have claimed it but haven't fully optimized it, that's your first priority."),
      p("Every field matters. Fill in:"),
      li(bold("Business name"), " (exactly as it appears in the real world — don't stuff keywords here)"),
      li(bold("Primary and secondary categories"), " — choose the most specific category that accurately describes your business, then add relevant secondary categories"),
      li(bold("Address and service area"), " — if you serve customers at their location, add your service area cities or regions"),
      li(bold("Phone number and website URL")),
      li(bold("Hours"), " — including special hours for holidays"),
      li(bold("Business description"), " — 750 characters, naturally including your primary service keywords and location"),
      li(bold("Services and products"), " — list them individually with descriptions"),
      li(bold("Photos"), " — upload at least 10 real photos of your business, team, and work. Businesses with photos receive significantly more direction requests and website clicks."),
      li(bold("Q&A section"), " — proactively add common questions and answer them yourself"),
      p("Post to your GBP at least twice a month using the Posts feature. Treat it like a social media account that directly impacts your local search rankings."),
      h2("Step 2: NAP Consistency Across the Web"),
      p("NAP stands for Name, Address, Phone number. Google uses consistency of this information across the web as a trust signal. If your business is listed as \"Ryan's Plumbing\" in one place, \"Ryan's Plumbing LLC\" in another, and \"Ryans Plumbing\" in a third, that inconsistency undermines your local ranking signals."),
      p("Do a search for your business name and audit how you appear across Yelp, Facebook, the Better Business Bureau, Yellow Pages, Bing Places, Apple Maps, and any industry directories. Correct any inconsistencies. Your NAP on your website should match your GBP exactly, including formatting."),
      h2("Step 3: Get More Reviews (And Respond to Them)"),
      p("Reviews are one of the most significant local ranking factors, and they're also the most visible trust signal for potential customers. The goal is a steady stream of new reviews, not just a one-time burst."),
      p("The most effective way to get reviews: ask for them directly, immediately after a positive experience. Send a follow-up text or email with a direct link to your Google review page. Make it one click — if customers have to find your business and navigate to reviews themselves, most won't bother."),
      p("Respond to every review — positive and negative. Responding to positive reviews shows appreciation and reinforces keywords in your responses. Responding to negative reviews professionally demonstrates customer service quality to future customers reading the reviews. Never argue with a reviewer publicly; acknowledge the concern and offer to resolve it offline."),
      h2("Step 4: Local Landing Pages for Multiple Ohio Markets"),
      p("If your business serves multiple Ohio cities — say you're a landscaper covering Columbus, Dublin, Westerville, and Gahanna — you should have a dedicated landing page for each city on your website. Each page should include the city name in the title tag, H1, and naturally throughout the content, along with genuinely localized content (not just \"we serve Dublin\" copy-pasted from the Columbus page with the city name swapped)."),
      p("Include local landmarks, neighborhood references, and city-specific details where they're genuine. Google is increasingly good at detecting thin, templated location pages and discounting them. The pages that perform are the ones that actually provide useful local information."),
      h2("Step 5: Local Backlinks"),
      p("Backlinks (other websites linking to yours) remain one of Google's strongest ranking signals. For local SEO, links from other Ohio-based sites carry particular weight. Focus on:"),
      li("Your local chamber of commerce website (most offer member directory listings with links)"),
      li("Local newspaper or media mentions — pitch a story about your business or offer expertise as a local source"),
      li("Industry associations with Ohio chapters"),
      li("Local business directories and neighborhood websites"),
      li("Sponsorships of local events, teams, or nonprofits (most include a website link)"),
      li("Partnerships with complementary local businesses who can link to you and vice versa"),
      h2("Step 6: Citations"),
      p("Citations are online mentions of your business name, address, and phone number — even without a link. They serve as local relevance signals. The major citation sources are already covered in Step 2 (Yelp, Bing Places, Apple Maps, BBB, etc.), but you should also pursue industry-specific directories. A dentist should be listed on Healthgrades and Zocdoc. A restaurant should be on OpenTable and TripAdvisor. A contractor should be on Angi and HomeAdvisor."),
      p("Tools like BrightLocal or Whitespark can help you audit your citation profile and find gaps to fill. This isn't glamorous work, but it's foundational — especially in competitive Ohio markets."),
      h2("Putting It Together"),
      p("Local SEO isn't a one-time project — it's an ongoing practice. The businesses that dominate local search results in Ohio's cities are the ones that consistently maintain their GBP, regularly earn new reviews, build local content, and acquire local links over time. It compounds. A business that's been doing these things consistently for two years will outrank a newer competitor who does everything perfectly at launch."),
      p("If you want a free audit of your current local SEO footprint in your Ohio market, reach out. I'll tell you exactly where you stand and what's worth prioritizing first."),
    ],
  },
  {
    _type: "post",
    _id: "post-digital-marketing-that-actually-gets-done",
    title: "How to Get Your Digital Marketing Actually Done (Not Just Planned)",
    slug: { _type: "slug", current: "digital-marketing-that-actually-gets-done" },
    excerpt: "The problem with most marketing plans isn't the strategy — it's that they never get executed. Here's how to build a simple system that actually runs.",
    publishedAt: "2024-11-25T00:00:00.000Z",
    category: "strategy",
    readTime: 6,
    body: [
      p("Most small business owners I work with don't have a strategy problem. They know they should be posting on social media, sending emails, keeping their Google Business Profile fresh, and maybe running some ads. The problem is that Monday comes, the day gets swallowed by operations, and none of it happens. Two months later, they have another planning session, write another list of marketing goals, and the same cycle repeats. If this sounds familiar, the solution isn't a better strategy — it's a better execution system."),
      h2("Why Most Plans Fail"),
      p("Marketing plans fail for three predictable reasons. First, they try to do too many things at once. Someone reads that they should be on Instagram, LinkedIn, TikTok, and YouTube, while also sending a weekly email, maintaining their blog, running ads, and managing their Google reviews. That's a full-time job. For a business owner with 15 other things to do, it's a guarantee of failure."),
      p("Second, there's no clear owner. \"We\" are going to do marketing is a death sentence for a marketing plan. Somebody specific needs to own each task, or it will fall into the gap between everyone's job descriptions."),
      p("Third, there's no system. A list of things to do is not a system. A calendar reminder with a clear task, a template to work from, and a habit that triggers the work — that's a system."),
      h2("Pick One or Two Channels and Go Deep"),
      p("The most effective small business marketers I've seen are not the ones with the most channels — they're the ones who do fewer things consistently and well. A local HVAC company in Cincinnati that sends a monthly email to 800 customers, keeps their Google Business Profile updated, and asks for reviews after every job will outperform a competitor who has a Facebook, Instagram, YouTube, and LinkedIn presence that's all six months out of date."),
      p("The right channels depend on your business. Ask yourself: where are your current customers spending their time online, and how do new customers find businesses like yours? For most Ohio service businesses, the answer is Google (meaning local SEO and Google Ads) and email (for repeat customers). For retail or food, social media and Google both matter. Pick your two best channels and ignore the rest — at least for now."),
      h2("Build a Repeatable Weekly and Monthly Cadence"),
      p("The businesses that actually execute their marketing have reduced it to a routine. Not a creative endeavor that requires inspiration — a routine like taking out the trash. Here's what a sustainable cadence might look like for a small Ohio service business:"),
      li(bold("Weekly (30 minutes):"), " Check and respond to Google reviews. Post one update to Google Business Profile. Reply to any social media comments or messages."),
      li(bold("Monthly (2 hours):"), " Send one email to your customer list. Review your website analytics for anything worth noting. Run one ad campaign or refresh the existing one. Write or update one page of website content."),
      li(bold("Quarterly (half day):"), " Review what's working and what isn't. Update your website for any new services, seasonal changes, or outdated information. Plan the next quarter's content themes."),
      p("That's it. That's a marketing program that will actually move the needle for most small businesses, and it takes less than four hours per month."),
      h2("What \"Done\" Actually Looks Like"),
      p("Done doesn't mean perfect. A monthly email that goes out on the 15th with a useful tip and a clear offer is infinitely more valuable than a brilliant email that's still being edited in June. A Google Business Profile post with one good photo and two sentences of copy is done. A blog post that covers one topic thoroughly and is published is done."),
      p("Lower your standard for \"good enough to publish\" and raise your standard for \"actually gets published.\" Consistency over perfection, every time. Your competitors who are showing up consistently in search results and in their customers' inboxes aren't producing award-winning content — they're producing decent content reliably."),
      h2("When to Bring in Help vs. DIY"),
      p("DIY marketing makes sense when: you have the time, you enjoy it, and the channel is forgiving (social media, email to your existing list). Bring in help when: the channel is technical and easy to get wrong (Google Ads, SEO), the upfront investment is high (website rebuild), or your time is worth more than the cost of outsourcing."),
      p("The calculation isn't just money — it's time and opportunity cost. If you're spending 10 hours a month on Google Ads that aren't working, that's 10 hours not spent on your core business plus money being wasted on ineffective campaigns."),
      h2("The One Metric to Track First"),
      p("Before you worry about follower counts, click-through rates, or impressions, track one thing: ", bold("how many new leads came in this month and where did they come from?"), " Ask every new customer how they found you. Keep a simple tally. This single data point will tell you more about where to invest your marketing time and money than any dashboard."),
      p("Once you know that 70% of your leads come from Google search and 20% from referrals, you know exactly where to focus. Everything else is secondary."),
      p("If you'd like help building a marketing system that fits your business and will actually get executed, reach out for a free strategy conversation. I work with Ohio small businesses to build practical, sustainable marketing programs — not elaborate plans that gather dust."),
    ],
  },
  {
    _type: "post",
    _id: "post-ga4-reports-ohio-business-owners",
    title: "5 GA4 Reports Every Ohio Business Owner Should Check Monthly",
    slug: { _type: "slug", current: "ga4-reports-ohio-business-owners" },
    excerpt: "Google Analytics 4 is powerful — but only if you know what to look at. Here are the five reports that matter most for understanding your website's performance.",
    publishedAt: "2024-11-12T00:00:00.000Z",
    category: "analytics",
    readTime: 5,
    body: [
      p("Google Analytics 4 replaced Universal Analytics in 2023, and most business owners have either not set it up or set it up and have no idea what they're looking at. GA4's interface is more powerful than its predecessor but significantly less intuitive. The good news is that you don't need to understand all of it — you just need to know which five reports to check monthly and what to look for. Here's the short version."),
      h2("Why GA4 Matters Even for Small Businesses"),
      p("Even if you're a small operation, understanding how people find and use your website is directly tied to making better marketing decisions. Without data, you're guessing. With data, you know whether your SEO efforts are driving traffic, whether your homepage is doing its job, and whether people who land on your site are actually contacting you — or disappearing. GA4 gives you this visibility for free."),
      h2("Report 1: Traffic Acquisition"),
      p(bold("Where to find it:"), " Reports → Acquisition → Traffic Acquisition"),
      p("This report tells you where your visitors are coming from: organic search (Google/Bing), direct (typed your URL), referral (another site linked to you), paid search (Google Ads), email, or social media. For most local businesses, organic search should be your top or second channel."),
      p("What to look for month-over-month: Is your organic search traffic growing, flat, or declining? If organic is falling, you may have an SEO issue or a technical problem on your site. If paid search is driving traffic but you're not seeing conversions, your landing pages need work."),
      h2("Report 2: Pages and Screens"),
      p(bold("Where to find it:"), " Reports → Engagement → Pages and Screens"),
      p("This shows you which pages on your site are getting the most views and how long people are spending on them. Your homepage should appear near the top. Your key service pages and contact page should also show meaningful traffic."),
      p("Red flags: If your contact page barely shows up, people aren't finding their way to it — check your navigation and CTAs. If your service pages have very low average engagement time (under 30 seconds), visitors aren't reading them — your content may not be relevant to the searches bringing people to those pages."),
      h2("Report 3: Conversions and Key Events"),
      p(bold("Where to find it:"), " Reports → Engagement → Conversions (or Key Events, depending on your GA4 version)"),
      p("This is the most important report — it shows you how many times visitors completed the actions you care about: form submissions, phone link clicks, booking completions, etc. If you haven't configured key events in GA4 yet, this is your first priority. Without conversion tracking, you have no idea whether your website is actually generating business."),
      p("Once configured, track: total conversions per month, which pages are driving the most conversions, and which traffic sources have the best conversion rate. This tells you where to invest more and where to cut."),
      h2("Report 4: User Demographics and Device"),
      p(bold("Where to find it:"), " Reports → User → User Attributes → Overview"),
      p("This report shows you who your visitors are — age ranges, geographic location, and what devices they're using. The device breakdown is particularly important for small businesses. If 70% of your visitors are on mobile and your site isn't optimized for mobile, you know exactly where to invest. The geographic data confirms whether you're reaching your actual target market or attracting traffic from outside your service area."),
      h2("Report 5: Landing Pages"),
      p(bold("Where to find it:"), " Reports → Engagement → Landing Page"),
      p("Landing pages are the first pages people see when they arrive at your site. This report shows you which pages are serving as entry points and how those visitors behave. High bounce rates on landing pages (people leaving immediately) suggest a mismatch between what they expected to find and what they found — which is usually a keyword targeting problem if they came from search."),
      p("If your homepage has a high bounce rate, look at your load speed and your above-the-fold content. If a specific service page is the entry point but has poor engagement, the page content may not be answering the question that brought people there."),
      h2("What to Do With What You Find"),
      p("Monthly, spend 20–30 minutes in these five reports and note: anything that's significantly up or down compared to last month, any pages with very low engagement or high bounce rates, and whether conversions are tracking in the right direction. You don't need to investigate everything — just flag the outliers and address the most significant ones each quarter."),
      h2("When Data Tells You Something Is Broken"),
      p("Sometimes GA4 reveals a clear problem: traffic dropped 40% in one month, conversion tracking suddenly shows zero events, or a specific page has a 90% bounce rate. These are worth investigating immediately rather than waiting for a monthly review. Sudden drops in organic traffic often signal a technical issue (broken page, blocked by robots.txt, Google penalty) that compounds the longer it goes unaddressed."),
      p("If you'd like help getting GA4 set up correctly, configuring conversion tracking, or understanding what your data is telling you, reach out for a free audit. Getting the basics right makes every other marketing decision easier."),
    ],
  },
];

// ── Run migration ─────────────────────────────────────────────────────────────

console.log(`Migrating ${posts.length} posts to Sanity...`);

for (const post of posts) {
  try {
    await client.createOrReplace(post);
    console.log(`✓ ${post.title}`);
  } catch (err) {
    console.error(`✗ ${post.title}:`, err.message);
  }
}

console.log("\nDone. Publish the posts in Sanity Studio to make them live.");
console.log("Note: Cover images were not migrated — add them in Studio.");
