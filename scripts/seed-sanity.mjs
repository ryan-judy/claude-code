/**
 * Sanity content seed script
 * Populates all singleton pages with the default content from the React components.
 *
 * Usage:
 *   SANITY_TOKEN=<your-token> node scripts/seed-sanity.mjs
 *
 * Get a token at: https://sanity.io/manage → your project → API → Tokens → Add API token (Editor role)
 */

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "crs7qrfh",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

// ─── Site Settings ────────────────────────────────────────────────────────────
const siteSettings = {
  _id: "siteSettings",
  _type: "siteSettings",
  email: "ryan@ryanjudy.com",
  phone: "(614) 555-0100",
  phoneHref: "+16145550100",
  location: "Columbus, Ohio",
  locationSubtext: "Serving Columbus & beyond",
  responseTime: "Within 1 business day",
  auditDeliveryTime: "within 48 hours",
  linkedin: "https://linkedin.com/in/rjudy",
  twitter: "https://twitter.com/ryanjudy",
};

// ─── Home Page ────────────────────────────────────────────────────────────────
const homePage = {
  _id: "homePage",
  _type: "homePage",
  seoTitle: "Ryan Judy | Digital Marketing for Ohio Businesses",
  seoDescription:
    "Websites, SEO, SEM, and strategy for locally owned Ohio businesses. Senior-level digital marketing without the agency overhead.",
  sections: [
    {
      _type: "heroSection",
      _key: "hero",
      badge: "Based in Columbus, OH • Serving locally owned businesses across Ohio",
      headline: "Your Ohio Business Deserves to",
      headlineHighlight: "Dominate Online",
      subheadline:
        "Websites, SEO, SEM, and strategy — built for locally owned Ohio businesses that want their digital presence to actually work for them.",
      primaryCtaText: "Get Your Free Website Audit",
      secondaryCtaText: "Explore Services",
      proofStats: [
        { _key: "s1", value: "10+", label: "Years Experience" },
        { _key: "s2", value: "100%", label: "Senior-Level Work" },
        { _key: "s3", value: "Ohio", label: "Locally Focused" },
      ],
    },
    {
      _type: "statsSection",
      _key: "stats",
      stats: [
        { _key: "st1", value: "10+", label: "Years in Digital Marketing", description: "Across agencies, in-house, and professional roles" },
        { _key: "st2", value: "100%", label: "Senior-Level Execution", description: "You work directly with me — no junior handoffs, ever" },
        { _key: "st3", value: "Ohio", label: "Locally Focused", description: "I live here, I know these markets, I'm invested in your win" },
        { _key: "st4", value: "Any Size", label: "Any Local Business", description: "From solo operators to established Ohio businesses" },
      ],
    },
    {
      _type: "servicesSection",
      _key: "services",
      services: [
        { _key: "svc1", icon: "Globe", title: "Website Design & Development", description: "Custom websites built for performance, conversion, and beauty. From strategy and UX through development and launch — your website should be your best salesperson.", highlights: ["Custom design", "Mobile-first", "Speed optimized", "CMS-powered"], href: "/services#websites", color: "bg-blue-50 text-blue-600" },
        { _key: "svc2", icon: "Bot", title: "AI Integration & Automation", description: "Put AI to work for your business. From intelligent chatbots and content workflows to customer journey automation — leverage AI to do more with less.", highlights: ["AI chatbots", "Content automation", "Lead qualification", "Workflow AI"], href: "/services#ai", color: "bg-purple-50 text-purple-600" },
        { _key: "svc3", icon: "Search", title: "Paid Media", description: "Strategic paid search campaigns that put your business in front of buyers at exactly the right moment. Every dollar tracked, every campaign optimized.", highlights: ["Google Ads", "Bing Ads", "Remarketing", "Landing pages"], href: "/services#sem", color: "bg-green-50 text-green-600" },
        { _key: "svc4", icon: "TrendingUp", title: "SEO & Content Strategy", description: "Sustainable organic growth through technical SEO, strategic content, and authoritative link building. Rank for the terms that actually drive revenue.", highlights: ["Technical SEO", "Keyword strategy", "Content creation", "Link building"], href: "/services#seo", color: "bg-orange-50 text-orange-600" },
        { _key: "svc5", icon: "Megaphone", title: "Digital Marketing Support", description: "A clear, data-driven roadmap that aligns your marketing to your business goals. No fluff — just honest strategy and a plan you can actually execute.", highlights: ["Competitive analysis", "Channel planning", "Budget allocation", "Roadmaps"], href: "/services#strategy", color: "bg-pink-50 text-pink-600" },
        { _key: "svc6", icon: "BarChart2", title: "Analytics & Reporting", description: "Turn data into decisions. Clear dashboards and monthly reports that show exactly what's working, what isn't, and where to focus next.", highlights: ["GA4 setup", "Custom dashboards", "Monthly reports", "Attribution"], href: "/services#analytics", color: "bg-amber-50 text-amber-600" },
      ],
    },
    {
      _type: "processSection",
      _key: "process",
      badge: "How I Work",
      headline: "A process built for",
      headlineHighlight: "real results",
      subheadline: "No black boxes, no agency speak. A clear, transparent process that keeps you informed and in control at every step.",
      steps: [
        { _key: "p1", number: "01", title: "Discovery & Audit", description: "We start with a deep dive into your business, goals, competition, and current digital presence. No cookie-cutter templates — I want to understand what actually makes your business tick and where the biggest opportunities live.", deliverable: "Free audit report + opportunity map" },
        { _key: "p2", number: "02", title: "Strategy & Roadmap", description: "Based on the audit, I build a clear, prioritized roadmap. You'll know exactly what we're doing, why, and what success looks like. Strategy is worthless without execution clarity.", deliverable: "90-day roadmap + KPI framework" },
        { _key: "p3", number: "03", title: "Build & Execute", description: "Hands-on execution — whether that's designing and launching a new website, standing up ad campaigns, implementing AI tools, or producing content. I do the work, not just the advising.", deliverable: "Monthly deliverables + progress tracking" },
        { _key: "p4", number: "04", title: "Measure & Optimize", description: "Data drives everything. Monthly reporting shows exactly what's performing and what needs adjustment. I continuously test, iterate, and optimize to compound results over time.", deliverable: "Monthly reporting + optimization log" },
      ],
    },
    {
      _type: "whySection",
      _key: "why",
      badge: "Why Ryan Judy",
      headline: "Senior expertise without the",
      headlineHighlight: "agency markup",
      body: "Big agencies have big overhead — account managers, layers of approvals, junior staff executing on your account. With me, you get a seasoned digital marketing veteran working directly on your business. Period.",
      quote: "\u201cI started this business because I kept seeing locally owned businesses underserved by agencies that were too big to care and too busy to listen.\u201d",
      quoteAuthor: "Ryan Judy, Founder",
      reasons: [
        { _key: "r1", icon: "MapPin", title: "Ohio-First Mindset", description: "I'm based in Columbus and focused on Ohio. Local knowledge means better strategies, better connections, and a genuine investment in your success." },
        { _key: "r2", icon: "ShieldCheck", title: "No Fluff, Just Results", description: "I'm not selling you a retainer to run basic reports. Every hour goes toward moving your business forward with honest, transparent communication." },
        { _key: "r3", icon: "Lightbulb", title: "Strategy Meets Execution", description: "Most consultants strategize. Most agencies execute. I do both — bringing senior-level thinking and hands-on implementation without the overhead." },
        { _key: "r4", icon: "LineChart", title: "Data-Driven Everything", description: "Decisions based on data, not gut feelings or trends. I set up proper measurement from day one so you always know what's actually working." },
        { _key: "r5", icon: "Users", title: "Real Partnership", description: "You get direct access to me — not account managers or junior staff. I treat your business like I'm a member of your team, not a vendor." },
        { _key: "r6", icon: "Clock", title: "10+ Years, No Fluff", description: "A decade of experience means I've already made (and learned from) the mistakes you don't want to pay for. You get senior expertise from day one." },
      ],
    },
    {
      _type: "ctaSection",
      _key: "cta",
      badge: "Now accepting new clients",
      headline: "Ready to grow your",
      headlineHighlight: "Columbus business online?",
      body: "Start with a free website audit. No commitment, no pitch deck — just an honest look at where you stand and where you can go.",
      primaryCtaText: "Get My Free Website Audit",
      ctaFinePrint: "Free audit takes less than 48 hours to deliver.",
    },
  ],
};

// ─── About Page ───────────────────────────────────────────────────────────────
const aboutPage = {
  _id: "aboutPage",
  _type: "aboutPage",
  seoTitle: "About Ryan Judy | Digital Marketing for Ohio Businesses",
  seoDescription: "Senior-level digital marketing for locally owned Ohio businesses. Websites, SEO, SEM, and strategy — from someone who actually does the work.",
  sections: [
    {
      _type: "pageHeroSection",
      _key: "hero",
      badge: "Columbus, OH",
      badgeIcon: "MapPin",
      headline: "Hi, I\u2019m Ryan.",
      headlineHighlight: "I help Ohio businesses win online.",
      subheadline:
        "I help locally owned Ohio businesses build a stronger online presence — with real strategy, hands-on execution, and results you can actually measure.",
    },
    {
      _type: "profileStorySection",
      _key: "story",
      profileBadge: "Columbus, OH based",
      storyBadge: "My Story",
      storyHeadline: "Real expertise,",
      storyHeadlineHighlight: "focused on you,",
      storyHeadlineLine2: "not agency overhead",
      storyBody: [
        {
          _type: "block",
          _key: "b1",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s1",
              text: "I've spent over a decade in digital marketing — growing alongside every major shift in the industry: SEO, paid search, content strategy, analytics, and now AI. I've seen what works, what wastes money, and what actually moves the needle for real businesses.",
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: "block",
          _key: "b2",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s2",
              text: "My professional background gave me a front-row seat to how smart digital strategy transforms an organization. I brought that same mindset to Ryan Judy Digital Marketing — focused entirely on locally owned Ohio businesses that deserve that same level of expertise.",
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: "block",
          _key: "b3",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s3",
              text: "What I kept seeing: great local businesses with untapped potential online. Either they were invisible on search, running ads with no strategy, or paying agency prices for work done by someone who'd never heard of their town.",
              marks: [],
            },
          ],
          markDefs: [],
        },
        {
          _type: "block",
          _key: "b4",
          style: "normal",
          children: [
            {
              _type: "span",
              _key: "s4",
              text: "I started this to fix that. If you run a locally owned business anywhere in Ohio, you deserve senior-level digital marketing — and that's exactly what I provide.",
              marks: ["strong"],
            },
          ],
          markDefs: [],
        },
      ],
      storyCtaText: "Let\u2019s Work Together",
      storyLinkedinText: "View LinkedIn",
      storyLinkedinUrl: "https://linkedin.com/in/rjudy",
    },
    {
      _type: "valuesSection",
      _key: "values",
      badge: "How I Operate",
      headline: "What I believe about",
      headlineHighlight: "great marketing",
      items: [
        { _key: "v1", icon: "Heart", title: "Genuine Care", description: "I treat every client\u2019s business like it\u2019s my own. Your success is my success — this isn't just a job." },
        { _key: "v2", icon: "TrendingUp", title: "Results Over Activity", description: "I don\u2019t bill you for being busy. Every action connects to an outcome that matters to your business." },
        { _key: "v3", icon: "Users", title: "True Partnership", description: "I\u2019m not a vendor. I\u2019m an extension of your team — available, responsive, and invested." },
        { _key: "v4", icon: "Award", title: "Continuous Learning", description: "Digital marketing never stops evolving. I stay ahead of the curve so you don't have to." },
      ],
    },
    {
      _type: "ctaSection",
      _key: "cta",
      badge: "Now accepting new clients",
      headline: "Ready to grow your",
      headlineHighlight: "Columbus business online?",
      body: "Start with a free website audit. No commitment, no pitch deck — just an honest look at where you stand and where you can go.",
      primaryCtaText: "Get My Free Website Audit",
      ctaFinePrint: "Free audit takes less than 48 hours to deliver.",
    },
  ],
};

// ─── Services Page ────────────────────────────────────────────────────────────
const servicesPage = {
  _id: "servicesPage",
  _type: "servicesPage",
  seoTitle: "Services | Ryan Judy Digital Marketing — Columbus, OH",
  seoDescription:
    "Full-stack digital marketing services for Columbus businesses: websites, AI integration, SEM, SEO, content strategy, analytics, and more.",
  sections: [
    {
      _type: "pageHeroSection",
      _key: "hero",
      badge: "What I Do",
      headline: "Every service you need to",
      headlineHighlight: "dominate online",
      subheadline:
        "From your first website to a full digital marketing engine — I bring deep expertise across every channel and discipline that matters for growing Columbus businesses.",
    },
    {
      _type: "servicesDetailSection",
      _key: "servicesDetail",
      services: [
        { _key: "sd1", id: "websites", icon: "Globe", iconBg: "bg-blue-50 text-blue-600", title: "Website Design & Development", tagline: "Your website should work as hard as you do.", description: "I design and build custom websites that look great, load fast, and turn visitors into customers. From strategy through design, development, and launch — I handle everything with a focus on measurable outcomes, not just aesthetics.", capabilities: ["Custom UI/UX design tailored to your brand and audience", "Mobile-first, responsive development", "Core Web Vitals optimization for speed and performance", "Headless CMS integration (Sanity, Contentful, and more)", "E-commerce and lead generation setups", "Conversion rate optimization (CRO)", "Ongoing maintenance and support"], ctaText: "Get Started" },
        { _key: "sd2", id: "ai", icon: "Bot", iconBg: "bg-purple-50 text-purple-600", title: "AI Integration & Automation", tagline: "Use AI to do more with less — intelligently.", description: "AI isn't a buzzword — it's a genuine competitive advantage when deployed correctly. I help businesses identify where AI can add the most value and then implement practical solutions that save time, improve customer experience, and drive results.", capabilities: ["AI-powered chatbot setup and training", "Content creation workflows with AI assistance", "Lead qualification and routing automation", "Customer service automation", "AI-driven personalization", "Marketing workflow automation", "AI readiness audits"], ctaText: "Get Started" },
        { _key: "sd3", id: "sem", icon: "Search", iconBg: "bg-green-50 text-green-600", title: "Paid Media", tagline: "Be there when buyers are searching. Every time.", description: "Strategic paid search that gets your business in front of the right people at exactly the right moment. I handle strategy, setup, ongoing management, and optimization — with full transparency on what you're spending and what you're getting.", capabilities: ["Google Ads campaign strategy and setup", "Microsoft/Bing Ads management", "Keyword research and competitive analysis", "Ad copy creation and A/B testing", "Landing page optimization", "Remarketing and audience targeting", "Budget management and monthly reporting"], ctaText: "Get Started" },
        { _key: "sd4", id: "seo", icon: "TrendingUp", iconBg: "bg-orange-50 text-orange-600", title: "SEO & Content Strategy", tagline: "Rank for the terms that drive real revenue.", description: "Sustainable, long-term organic visibility through technical excellence, strategic content, and authoritative link building. No shortcuts, no tricks — just thorough, systematic work that compounds over time.", capabilities: ["Technical SEO audit and remediation", "Keyword strategy and content planning", "On-page optimization", "Blog and content creation", "Local SEO for Columbus businesses", "Link building and digital PR", "Monthly SEO reporting"], ctaText: "Get Started" },
        { _key: "sd5", id: "strategy", icon: "Megaphone", iconBg: "bg-pink-50 text-pink-600", title: "Digital Marketing Support", tagline: "A plan you can actually execute — and measure.", description: "Strategy without execution is just a document. I build clear, practical digital marketing roadmaps that align your channels, budget, and team to your specific business goals — then help you execute them.", capabilities: ["Full digital marketing audit", "Competitive landscape analysis", "Channel strategy and prioritization", "Budget allocation recommendations", "90-day and annual roadmaps", "KPI framework and measurement plan", "Quarterly strategy reviews"], ctaText: "Get Started" },
        { _key: "sd6", id: "analytics", icon: "BarChart2", iconBg: "bg-amber-50 text-amber-600", title: "Analytics & Reporting", tagline: "Data that tells a story and drives decisions.", description: "Great marketing decisions require great data. I set up proper tracking from day one, build clear reporting dashboards, and deliver monthly insights that go beyond vanity metrics to focus on what actually matters.", capabilities: ["Google Analytics 4 setup and configuration", "Google Tag Manager implementation", "Custom dashboard creation (Looker Studio)", "Conversion tracking and attribution", "Monthly performance reports", "Data analysis and insights", "Reporting for executive stakeholders"], ctaText: "Get Started" },
      ],
    },
    {
      _type: "ctaSection",
      _key: "cta",
      badge: "Now accepting new clients",
      headline: "Ready to grow your",
      headlineHighlight: "Columbus business online?",
      body: "Start with a free website audit. No commitment, no pitch deck — just an honest look at where you stand and where you can go.",
      primaryCtaText: "Get My Free Website Audit",
      ctaFinePrint: "Free audit takes less than 48 hours to deliver.",
    },
  ],
};

// ─── Contact Page ─────────────────────────────────────────────────────────────
const contactPage = {
  _id: "contactPage",
  _type: "contactPage",
  seoTitle: "Contact Ryan Judy | Free Website Audit — Columbus, Ohio",
  seoDescription:
    "Get a free website audit or start a conversation about your digital marketing. Based in Columbus, OH.",
  sections: [
    {
      _type: "pageHeroSection",
      _key: "hero",
      badge: "Let\u2019s Talk",
      badgeIcon: "MessageCircle",
      headline: "Start the conversation.",
      headlineHighlight: "No pressure, ever.",
      subheadline:
        "Whether you want a free website audit or just want to talk through your digital marketing situation — I'm happy to have an honest, no-pitch conversation.",
    },
    {
      _type: "contactFormSection",
      _key: "form",
      contactInfoHeadline: "Get in touch",
      contactInfoSubheadline:
        "I respond to all inquiries within one business day. For a free website audit, include your URL in the form and I'll deliver a detailed report within 48 hours.",
      formHeadline: "Send me a message",
      formSubheadline:
        "Tell me about your business and what you're looking to accomplish. The more context you give, the more useful my response will be.",
      serviceOptions: [
        "Website Design & Development",
        "AI Integration & Automation",
        "Paid Media",
        "SEO & Content Strategy",
        "Digital Marketing Support",
        "Analytics & Reporting",
        "General Inquiry / Not Sure Yet",
      ],
      submitText: "Send Message",
      auditCheckboxLabel: "Yes, I\u2019d like a free website audit",
      auditCheckboxSub: "I'll analyze your site and send a detailed report within 48 hours.",
      formFinePrint:
        "No spam, ever. Your information is kept private and I respond to every message personally.",
    },
  ],
};

// ─── Run ───────────────────────────────────────────────────────────────────────
async function seed() {
  if (!process.env.SANITY_TOKEN) {
    console.error(
      "\nError: SANITY_TOKEN is not set.\n\n" +
      "Get a token at: https://sanity.io/manage\n" +
      "  → Your project → API → Tokens → Add API token (Editor role)\n\n" +
      "Then run:\n" +
      "  SANITY_TOKEN=your_token_here node scripts/seed-sanity.mjs\n"
    );
    process.exit(1);
  }

  const docs = [siteSettings, homePage, aboutPage, servicesPage, contactPage];
  console.log(`\nSeeding ${docs.length} documents to Sanity...\n`);

  for (const doc of docs) {
    try {
      await client.createOrReplace(doc);
      console.log(`  ✓  ${doc._type} (${doc._id})`);
    } catch (err) {
      console.error(`  ✗  ${doc._type} — ${err.message}`);
    }
  }

  console.log("\nDone! Open /studio to see the populated content.\n");
}

seed();
