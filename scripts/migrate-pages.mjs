/**
 * Migrate hardcoded page content to Sanity CMS.
 *
 * Run with:
 *   SANITY_TOKEN=<write-token> node scripts/migrate-pages.mjs
 *
 * Creates/replaces these documents (published, not drafts):
 *   - siteSettings
 *   - homePage
 *   - aboutPage
 *   - servicesPage
 *   - contactPage
 */

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "crs7qrfh",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

// ── Portable Text helpers ─────────────────────────────────────────────────────

let _keyIdx = 0;
function key(prefix = "k") {
  return `${prefix}${++_keyIdx}`;
}

function p(text) {
  return {
    _type: "block",
    _key: key("p"),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: key("s"), text, marks: [] }],
  };
}

function strongP(text) {
  return {
    _type: "block",
    _key: key("p"),
    style: "normal",
    markDefs: [],
    children: [{ _type: "span", _key: key("s"), text, marks: ["strong"] }],
  };
}

// ── Documents ─────────────────────────────────────────────────────────────────

const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  siteName: "Spark Street Digital",
  tagline: "Digital Marketing for Ohio Businesses",
  email: "ryan@sparkstreet.digital",
  location: "Columbus, Ohio",
  locationSubtext: "Serving locally owned Ohio businesses",
  responseTime: "Within 1 business day",
  auditDeliveryTime: "within 48 hours",
  linkedin: "https://linkedin.com/in/rjudy",
  defaultSeoTitle: "Spark Street Digital | Digital Marketing for Ohio Businesses",
  defaultSeoDescription:
    "Websites, SEO & GEO/AEO, paid media, and strategy for locally owned Ohio businesses. Senior-level digital marketing without the agency overhead.",
};

const homePage = {
  _id: "homePage",
  _type: "homePage",
  seoTitle: "Spark Street Digital | Digital Marketing for Ohio Businesses",
  seoDescription:
    "Websites, SEO & GEO/AEO, paid media, and strategy for locally owned Ohio businesses. Senior-level digital marketing without the agency overhead.",
  sections: [
    {
      _type: "heroSection",
      _key: "hero",
      badge: "Based in Columbus, OH \u2022 Serving businesses across the region",
      headline: "Your Business Deserves to",
      headlineHighlight: "Dominate Online",
      subheadline:
        "Helping locally owned Ohio businesses get found online, attract more customers, and grow \u2014 through websites, SEO, paid media, and hands-on digital support.",
      primaryCtaText: "Get Your Free Website Audit",
      secondaryCtaText: "Explore Services",
      proofStats: [
        { _key: key("ps"), value: "10+", label: "Years Experience" },
        { _key: key("ps"), value: "Ohio", label: "Locally Focused" },
      ],
    },
    {
      _type: "servicesSection",
      _key: "services",
      services: [
        { _key: key("sv"), icon: "RefreshCw", color: "bg-teal-50 text-teal-600", title: "Website Modernization", description: "If your site is years old and painful to share, let\u2019s fix that. I\u2019ll assess what you have, update what matters, and get you a site that works for your business \u2014 not against it.", highlights: ["Site audit", "Design refresh", "Bug fixes", "Speed improvements"], href: "/services#modernization" },
        { _key: key("sv"), icon: "Globe", color: "bg-blue-50 text-blue-600", title: "Website Design & Development", description: "Custom websites built for performance, conversion, and beauty. From strategy and UX through development and launch \u2014 your website should be your best salesperson.", highlights: ["Custom design", "Mobile-first", "Performance optimized", "CMS-powered"], href: "/services#websites" },
        { _key: key("sv"), icon: "Sparkles", color: "bg-purple-50 text-purple-600", title: "AI for Business", description: "AI is changing how businesses operate across every department. I help you identify where it has the biggest impact and get the right tools in place.", highlights: ["AI opportunity audit", "Tool setup", "Content workflows", "AI assistants"], href: "/services#ai" },
        { _key: key("sv"), icon: "Zap", color: "bg-indigo-50 text-indigo-600", title: "Integrations & Automation", description: "Connect your tools, eliminate manual work, and build workflows that run without you. Less friction, more time back.", highlights: ["App integrations", "Workflow automation", "CRM setup", "Process design"], href: "/services#automation" },
        { _key: key("sv"), icon: "Search", color: "bg-green-50 text-green-600", title: "Paid Media", description: "Strategic paid search campaigns that put your business in front of buyers at exactly the right moment. Every dollar tracked, every campaign optimized.", highlights: ["Google Ads", "Bing Ads", "Remarketing", "Landing pages"], href: "/services#sem" },
        { _key: key("sv"), icon: "TrendingUp", color: "bg-orange-50 text-orange-600", title: "SEO, GEO & AEO", description: "Sustainable organic visibility across traditional search and AI-generated answers. Rank where your customers are searching \u2014 and asking.", highlights: ["Technical SEO", "GEO & AEO", "Local SEO", "Link building"], href: "/services#seo" },
        { _key: key("sv"), icon: "Megaphone", color: "bg-yellow-50 text-yellow-600", title: "Content Strategy", description: "Content rooted in what your customers are actually searching for and asking. Every piece has a purpose \u2014 attract, educate, and convert.", highlights: ["Editorial calendar", "Blog content", "Landing page copy", "AI search content"], href: "/services#content" },
        { _key: key("sv"), icon: "Lightbulb", color: "bg-pink-50 text-pink-600", title: "Digital Marketing Support", description: "A clear, data-driven roadmap that aligns your marketing to your business goals. No fluff \u2014 just honest strategy and a plan you can actually execute.", highlights: ["Competitive analysis", "Channel planning", "Budget allocation", "Roadmaps"], href: "/services#strategy" },
        { _key: key("sv"), icon: "BarChart2", color: "bg-amber-50 text-amber-600", title: "Analytics & Reporting", description: "Turn data into decisions. Clear dashboards and monthly reports that show exactly what\u2019s working, what isn\u2019t, and where to focus next.", highlights: ["GA4 setup", "Custom dashboards", "Monthly reports", "Attribution"], href: "/services#analytics" },
      ],
    },
    {
      _type: "whoIHelpSection",
      _key: "whoihelp",
      badge: "Built for businesses like yours",
      headline: "Does any of this",
      headlineHighlight: "sound familiar?",
      body: "I work with Ohio business owners who are tired of feeling behind online. If one of these sounds like you, we should talk.",
      personas: [
        { _key: key("pe"), icon: "Monitor", quote: "My website is embarrassing to share.", detail: "It was built years ago, looks broken on phones, and loads like it\u2019s on dial-up. You\u2019ve been meaning to fix it \u2014 let\u2019s actually do it." },
        { _key: key("pe"), icon: "Clock", quote: "I know I should be doing more online, but I don\u2019t have time.", detail: "You post occasionally and maybe run a few ads, but there\u2019s no real strategy behind it. You\u2019re busy running your business \u2014 let someone else handle the marketing." },
        { _key: key("pe"), icon: "ThumbsDown", quote: "I tried an agency and felt like just another account.", detail: "You paid a retainer, got handed off to junior staff, and never quite understood what you were paying for. That\u2019s not how I work." },
        { _key: key("pe"), icon: "EyeOff", quote: "My competitors show up on Google and I don\u2019t.", detail: "You search for your own services and they come up first. You know it\u2019s costing you customers \u2014 you just don\u2019t know where to start." },
      ],
      ctaHeadline: "Not sure where to start?",
      ctaBody: "A free website audit takes less than 48 hours and tells you exactly what\u2019s holding your business back online.",
      primaryCtaText: "Get a Free Audit",
    },
    {
      _type: "processSection",
      _key: "process",
      badge: "How I Work",
      headline: "A process built for",
      headlineHighlight: "real results",
      subheadline:
        "No black boxes, no agency speak. A clear, transparent process that keeps you informed and in control at every step.",
      steps: [
        { _key: key("st"), number: "01", title: "Discovery & Audit", description: "We start with a deep dive into your business, goals, competition, and current digital presence. No cookie-cutter templates \u2014 I want to understand what actually makes your business tick and where the biggest opportunities live.", deliverable: "Free audit report + opportunity map" },
        { _key: key("st"), number: "02", title: "Strategy & Roadmap", description: "Based on the audit, I build a clear, prioritized roadmap. You\u2019ll know exactly what we\u2019re doing, why, and what success looks like. Strategy is worthless without execution clarity.", deliverable: "90-day roadmap + KPI framework" },
        { _key: key("st"), number: "03", title: "Build & Execute", description: "Hands-on execution \u2014 whether that\u2019s designing and launching a new website, standing up ad campaigns, implementing AI tools, or producing content. I do the work, not just the advising.", deliverable: "Monthly deliverables + progress tracking" },
        { _key: key("st"), number: "04", title: "Measure & Optimize", description: "Data drives everything. Monthly reporting shows exactly what\u2019s performing and what needs adjustment. I continuously test, iterate, and optimize to compound results over time.", deliverable: "Monthly reporting + optimization log" },
      ],
    },
    {
      _type: "whySection",
      _key: "why",
      badge: "Why Spark Street Digital",
      headline: "Senior expertise without the",
      headlineHighlight: "agency markup",
      body: "Big agencies have big overhead \u2014 account managers, layers of approvals, junior staff executing on your account. With us, you get seasoned digital marketing veterans working directly on your business. Period.",
      quote: "\u201cI started Spark Street Digital because I believe local and small businesses should take advantage of digital services to sustain and grow their company.\u201d",
      quoteAuthor: "Ryan Judy, Founder",
      reasons: [
        { _key: key("r"), icon: "MapPin", title: "Ohio-First Mindset", description: "We live and work in Ohio. Local knowledge means better strategies, better connections, and a genuine investment in your success." },
        { _key: key("r"), icon: "ShieldCheck", title: "No Fluff, Just Results", description: "We\u2019re not selling you a retainer to run basic reports. Every hour goes toward moving your business forward with honest, transparent communication." },
        { _key: key("r"), icon: "Lightbulb", title: "Strategy Meets Execution", description: "Most consultants strategize. Most agencies execute. We do both \u2014 bringing senior-level thinking and hands-on implementation without the overhead." },
        { _key: key("r"), icon: "LineChart", title: "Data-Driven Everything", description: "Decisions based on data, not gut feelings or trends. We set up proper measurement from day one so you always know what\u2019s actually working." },
        { _key: key("r"), icon: "Users", title: "Real Partnership", description: "You get direct access to us \u2014 not account managers or junior staff. We treat your business like we\u2019re a member of your team, not a vendor." },
        { _key: key("r"), icon: "Clock", title: "10+ Years, No Fluff", description: "A decade of experience means we\u2019ve already made (and learned from) the mistakes you don\u2019t want to pay for. You get senior expertise from day one." },
      ],
    },
    {
      _type: "ctaSection",
      _key: "cta",
      badge: "Now accepting new clients",
      headline: "Ready to grow your",
      headlineHighlight: "Columbus business online?",
      body: "Start with a free website audit. No commitment, no pitch deck \u2014 just an honest look at where you stand and where you can go.",
      primaryCtaText: "Get My Free Website Audit",
      ctaFinePrint: "Free audit takes less than 48 hours to deliver.",
    },
  ],
};

const aboutPage = {
  _id: "aboutPage",
  _type: "aboutPage",
  seoTitle: "About Ryan Judy | Spark Street Digital \u2014 Ohio Businesses",
  seoDescription:
    "Senior-level digital marketing for locally owned Ohio businesses. Websites, SEO & GEO/AEO, paid media, and strategy \u2014 from someone who actually does the work.",
  sections: [
    {
      _type: "pageHeroSection",
      _key: "hero",
      badge: "Columbus, OH",
      badgeIcon: "MapPin",
      headline: "Hi, I\u2019m Ryan.",
      headlineHighlight: "I help Ohio businesses win online.",
      subheadline:
        "I help locally owned Ohio businesses build a stronger online presence \u2014 with real strategy, hands-on execution, and results you can actually measure.",
    },
    {
      _type: "profileStorySection",
      _key: "story",
      profileBadge: "Columbus, OH based",
      storyBadge: "My Story",
      storyHeadline: "Real expertise,",
      storyHeadlineHighlight: "focused on you,",
      storyHeadlineLine2: "not agency overhead",
      storyCtaText: "Let\u2019s Work Together",
      storyLinkedinText: "View LinkedIn",
      storyLinkedinUrl: "https://linkedin.com/in/rjudy",
      storyBody: [
        p("I\u2019ve spent over a decade in digital marketing \u2014 growing alongside every major shift in the industry: SEO, paid search, content strategy, analytics, and now AI. I\u2019ve seen what works, what wastes money, and what actually moves the needle for real businesses."),
        p("My professional background gave me a front-row seat to how smart digital strategy transforms an organization. I brought that same mindset to Spark Street Digital \u2014 focused entirely on locally owned Ohio businesses that deserve that same level of expertise."),
        p("What I kept seeing: great local businesses with untapped potential online. Either they were invisible on search, running ads with no strategy, or paying agency prices for work done by someone who\u2019d never heard of their town."),
        strongP("I started this to fix that. If you run a locally owned business anywhere in Ohio, you deserve senior-level digital marketing \u2014 and that\u2019s exactly what I provide."),
      ],
    },
    {
      _type: "valuesSection",
      _key: "values",
      badge: "How We Operate",
      headline: "What we believe about",
      headlineHighlight: "great marketing",
      items: [
        { _key: key("v"), icon: "Heart", title: "Genuine Care", description: "We treat every client\u2019s business like it\u2019s our own. Your success is our success \u2014 this isn\u2019t just a job." },
        { _key: key("v"), icon: "TrendingUp", title: "Results Over Activity", description: "We don\u2019t bill you for being busy. Every action connects to an outcome that matters to your business." },
        { _key: key("v"), icon: "Users", title: "True Partnership", description: "We\u2019re not a vendor. We\u2019re an extension of your team \u2014 available, responsive, and invested." },
        { _key: key("v"), icon: "Award", title: "Continuous Learning", description: "Digital marketing never stops evolving. We stay ahead of the curve so you don\u2019t have to." },
      ],
    },
    {
      _type: "ctaSection",
      _key: "cta",
      badge: "Now accepting new clients",
      headline: "Ready to grow your",
      headlineHighlight: "Columbus business online?",
      body: "Start with a free website audit. No commitment, no pitch deck \u2014 just an honest look at where you stand and where you can go.",
      primaryCtaText: "Get My Free Website Audit",
      ctaFinePrint: "Free audit takes less than 48 hours to deliver.",
    },
  ],
};

const servicesPage = {
  _id: "servicesPage",
  _type: "servicesPage",
  seoTitle: "Services | Spark Street Digital \u2014 Ohio",
  seoDescription:
    "Full-stack digital marketing services for locally owned Ohio businesses: websites, AI integration, paid media, SEO & GEO/AEO, content strategy, analytics, and more.",
  sections: [
    {
      _type: "pageHeroSection",
      _key: "hero",
      badge: "What I Do",
      headline: "Every service you need to",
      headlineHighlight: "dominate online",
      subheadline:
        "From your first website to a full digital marketing engine \u2014 built specifically for locally owned Ohio businesses that want results, not reports.",
    },
    {
      _type: "servicesDetailSection",
      _key: "servicesDetail",
      services: [
        {
          _key: key("sd"),
          id: { _type: "slug", current: "modernization" },
          icon: "RefreshCw",
          iconBg: "bg-teal-50 text-teal-600",
          title: "Website Modernization",
          tagline: "Your website is your first impression \u2014 let\u2019s make it count.",
          description: "If your website is more than a few years old, it\u2019s probably costing you customers. Slow load times, broken mobile layouts, outdated content, no clear calls to action \u2014 these things add up. I\u2019ll assess what you have, fix what\u2019s hurting you, and bring it up to modern standards. You might not need a full rebuild \u2014 sometimes a focused modernization gets you 80% of the impact at a fraction of the cost.",
          capabilities: ["Full site audit \u2014 speed, mobile, SEO, UX, and conversion", "Design refresh or full custom rebuild depending on needs", "Mobile responsiveness fixes", "Page speed and Core Web Vitals improvements", "Content and copy updates", "Google Business Profile setup and optimization", "Basic on-page SEO foundation", "Contact forms, calls-to-action, and lead capture setup"],
          ctaText: "Get a Free Site Audit",
        },
        {
          _key: key("sd"),
          id: { _type: "slug", current: "websites" },
          icon: "Globe",
          iconBg: "bg-blue-50 text-blue-600",
          title: "Website Design & Development",
          tagline: "Your website should work as hard as you do.",
          description: "I design and build custom websites that look great, load fast, and turn visitors into customers. From strategy through design, development, and launch \u2014 I handle everything with a focus on measurable outcomes, not just aesthetics.",
          capabilities: ["Custom UI/UX design tailored to your brand and audience", "Mobile-first, responsive development", "Core Web Vitals optimization for speed and performance", "Headless CMS integration (Sanity, Contentful, and more)", "E-commerce and lead generation setups", "Conversion rate optimization (CRO)", "Ongoing maintenance and support"],
          ctaText: "Get Started",
        },
        {
          _key: key("sd"),
          id: { _type: "slug", current: "ai" },
          icon: "Sparkles",
          iconBg: "bg-purple-50 text-purple-600",
          title: "AI for Business",
          tagline: "AI is changing how businesses operate. Let\u2019s make sure you\u2019re not falling behind.",
          description: "AI isn\u2019t just a marketing tool \u2014 it\u2019s transforming how businesses run across every department. I help Ohio business owners understand where AI can have the biggest impact for them specifically, then implement the right tools and workflows. Whether that\u2019s content, customer service, operations, or marketing, the goal is the same: do more with less, faster.",
          capabilities: ["AI opportunity assessment across your business", "AI tool selection and setup (ChatGPT, Claude, and more)", "AI-assisted content creation workflows", "Customer-facing AI chatbots and assistants", "AI for internal operations and admin tasks", "AI-powered marketing and campaign support", "Ongoing AI strategy as the landscape evolves"],
          ctaText: "Get Started",
        },
        {
          _key: key("sd"),
          id: { _type: "slug", current: "automation" },
          icon: "Zap",
          iconBg: "bg-indigo-50 text-indigo-600",
          title: "Integrations & Automation",
          tagline: "Connect your tools. Eliminate the busywork.",
          description: "Most businesses are running on a patchwork of tools that don\u2019t talk to each other \u2014 and wasting hours on manual work that could be automated. I map your existing systems, identify the friction points, and build the connections and workflows that make everything run smoother. No coding required on your end.",
          capabilities: ["Business systems and workflow audit", "Third-party app integrations (CRMs, email, scheduling, payments, and more)", "Zapier, Make, and native integration setup", "Automated lead and inquiry routing", "Recurring task and process automation", "Data syncing between platforms", "Hands-on setup and documentation"],
          ctaText: "Get Started",
        },
        {
          _key: key("sd"),
          id: { _type: "slug", current: "sem" },
          icon: "Search",
          iconBg: "bg-green-50 text-green-600",
          title: "Paid Media",
          tagline: "Be there when buyers are searching. Every time.",
          description: "Strategic paid search that gets your business in front of the right people at exactly the right moment. I handle strategy, setup, ongoing management, and optimization \u2014 with full transparency on what you\u2019re spending and what you\u2019re getting.",
          capabilities: ["Google Ads campaign strategy and setup", "Microsoft/Bing Ads management", "Keyword research and competitive analysis", "Ad copy creation and A/B testing", "Landing page optimization", "Remarketing and audience targeting", "Budget management and monthly reporting"],
          ctaText: "Get Started",
        },
        {
          _key: key("sd"),
          id: { _type: "slug", current: "seo" },
          icon: "TrendingUp",
          iconBg: "bg-orange-50 text-orange-600",
          title: "SEO, GEO & AEO",
          tagline: "Rank everywhere your customers are searching \u2014 and asking.",
          description: "Sustainable, long-term visibility across traditional search, AI-generated answers, and generative engines. I handle the technical foundation, ongoing optimization, and the emerging GEO/AEO layer that determines whether your business shows up in AI-powered results \u2014 no shortcuts, just systematic work that compounds over time.",
          capabilities: ["Technical SEO audit and remediation", "Keyword research and strategy", "On-page optimization", "GEO & AEO optimization for AI search visibility", "Local SEO for Ohio businesses", "Link building and digital PR", "Monthly SEO/GEO reporting"],
          ctaText: "Get Started",
        },
        {
          _key: key("sd"),
          id: { _type: "slug", current: "content" },
          icon: "Megaphone",
          iconBg: "bg-yellow-50 text-yellow-600",
          title: "Content Strategy",
          tagline: "Content that earns attention \u2014 and trust.",
          description: "Good content doesn\u2019t happen by accident. I build content strategies rooted in what your customers are actually searching for, what questions they\u2019re asking, and what would make them choose you over a competitor. From blog posts to full editorial calendars, every piece has a purpose.",
          capabilities: ["Content audit \u2014 what you have and what\u2019s working", "Editorial calendar development", "Blog and long-form content creation", "Topic and keyword-driven content planning", "Content for AI search and featured snippets", "Landing page and service page copy", "Email and nurture content"],
          ctaText: "Get Started",
        },
        {
          _key: key("sd"),
          id: { _type: "slug", current: "strategy" },
          icon: "Lightbulb",
          iconBg: "bg-pink-50 text-pink-600",
          title: "Digital Marketing Support",
          tagline: "A plan you can actually execute \u2014 and measure.",
          description: "Strategy without execution is just a document. I build clear, practical digital marketing roadmaps that align your channels, budget, and team to your specific business goals \u2014 then help you execute them.",
          capabilities: ["Full digital marketing audit", "Competitive landscape analysis", "Channel strategy and prioritization", "Budget allocation recommendations", "90-day and annual roadmaps", "KPI framework and measurement plan", "Quarterly strategy reviews"],
          ctaText: "Get Started",
        },
        {
          _key: key("sd"),
          id: { _type: "slug", current: "analytics" },
          icon: "BarChart2",
          iconBg: "bg-amber-50 text-amber-600",
          title: "Analytics & Reporting",
          tagline: "Data that tells a story and drives decisions.",
          description: "Great marketing decisions require great data. I set up proper tracking from day one, build clear reporting dashboards, and deliver monthly insights that go beyond vanity metrics to focus on what actually matters.",
          capabilities: ["Google Analytics 4 setup and configuration", "Google Tag Manager implementation", "Custom dashboard creation (Looker Studio)", "Conversion tracking and attribution", "Monthly performance reports", "Data analysis and insights", "Reporting for executive stakeholders"],
          ctaText: "Get Started",
        },
      ],
    },
    {
      _type: "ctaSection",
      _key: "cta",
      badge: "Now accepting new clients",
      headline: "Ready to grow your",
      headlineHighlight: "Columbus business online?",
      body: "Start with a free website audit. No commitment, no pitch deck \u2014 just an honest look at where you stand and where you can go.",
      primaryCtaText: "Get My Free Website Audit",
      ctaFinePrint: "Free audit takes less than 48 hours to deliver.",
    },
  ],
};

const contactPage = {
  _id: "contactPage",
  _type: "contactPage",
  seoTitle: "Contact | Spark Street Digital \u2014 Free Website Audit \u2014 Ohio",
  seoDescription:
    "Get a free website audit or start a conversation about your digital marketing. Based in Columbus, serving Ohio businesses.",
  sections: [
    {
      _type: "pageHeroSection",
      _key: "hero",
      badge: "Let\u2019s Talk",
      badgeIcon: "MessageCircle",
      headline: "Start the conversation.",
      headlineHighlight: "No pressure, ever.",
      subheadline:
        "Whether you want a free website audit or just want to talk through your digital marketing situation \u2014 I\u2019m happy to have an honest, no-pitch conversation.",
    },
    {
      _type: "contactFormSection",
      _key: "form",
      contactInfoHeadline: "Get in touch",
      contactInfoSubheadline:
        "We respond to all inquiries within one business day. For a free website audit, include your URL in the form and we\u2019ll deliver a detailed report within 48 hours.",
      formHeadline: "Send us a message",
      formSubheadline:
        "Tell us about your business and what you\u2019re looking to accomplish. The more context you give, the more useful our response will be.",
      serviceOptions: [
        "Website Modernization",
        "Website Design & Development",
        "AI for Business",
        "Integrations & Automation",
        "Paid Media",
        "SEO, GEO & AEO",
        "Content Strategy",
        "Digital Marketing Support",
        "Analytics & Reporting",
        "General Inquiry / Not Sure Yet",
      ],
      submitText: "Send Message",
      auditCheckboxLabel: "Yes, I\u2019d like a free website audit",
      auditCheckboxSub: "We\u2019ll analyze your site and send a detailed report within 48 hours.",
      formFinePrint:
        "No spam, ever. Your information is kept private and we respond to every message personally.",
    },
  ],
};

// ── Run ───────────────────────────────────────────────────────────────────────

const docs = [
  { label: "siteSettings", doc: siteSettings },
  { label: "homePage", doc: homePage },
  { label: "aboutPage", doc: aboutPage },
  { label: "servicesPage", doc: servicesPage },
  { label: "contactPage", doc: contactPage },
];

console.log("Migrating page documents to Sanity...\n");

for (const { label, doc } of docs) {
  try {
    // Delete any stale draft so Studio shows the freshly migrated published version
    const draftId = `drafts.${doc._id}`;
    try {
      await client.delete(draftId);
    } catch {
      // Draft didn't exist — that's fine
    }

    const result = await client.createOrReplace(doc);
    console.log(`✓ ${label} — _id: ${result._id}`);
  } catch (err) {
    console.error(`✗ ${label}:`, err.message);
  }
}

console.log("\nDone. Open Studio and publish each page to make changes live.");
