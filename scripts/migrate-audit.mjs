/**
 * Migrate Audit page content to Sanity CMS.
 *
 * Run with:
 *   SANITY_TOKEN=<write-token> node scripts/migrate-audit.mjs
 */

import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "crs7qrfh",
  dataset: "production",
  apiVersion: "2024-01-01",
  token: process.env.SANITY_TOKEN,
  useCdn: false,
});

let _keyIdx = 0;
function key(prefix = "k") {
  return `${prefix}${++_keyIdx}`;
}

const auditPage = {
  _id: "auditPage",
  _type: "auditPage",

  seoTitle: "Free Website Audit | Spark Street Digital \u2014 Ohio",
  seoDescription:
    "Get a free, no-fluff website audit covering 10 key areas: performance, SEO, GEO/AEO, mobile, content, conversions, and more. Delivered within 48 hours.",

  // Hero
  heroBadge: "Free \u2014 No obligation \u2014 Delivered within 48 hours",
  heroHeadline: "Find out exactly what\u2019s holding your",
  heroHeadlineHighlight: "website back.",
  heroSubheadline:
    "A free, hands-on audit of your website across 10 key areas \u2014 performance, SEO, GEO/AEO, mobile, content, conversions, and more. Written by a real person, not a robot.",
  heroPrimaryCtaText: "Get My Free Audit",
  heroSecondaryCtaText: "See what\u2019s included",

  // What's included
  includedBadge: "What\u2019s covered",
  includedHeadline: "10 areas. One honest report.",
  includedHeadlineHighlight: "No fluff.",
  includedSubheadline:
    "Most website audits are automated reports full of technical jargon. This is a manual review \u2014 I look at every dimension of your online presence and tell you what\u2019s actually going on.",
  auditAreas: [
    { _key: key("aa"), icon: "Smartphone",        color: "bg-blue-50 text-blue-600",   title: "User Experience",                         desc: "How your site looks, feels, and functions \u2014 overall design quality, layout, readability, and mobile responsiveness. First impressions matter, and this is where most visitors decide to stay or leave." },
    { _key: key("aa"), icon: "Zap",               color: "bg-amber-50 text-amber-600", title: "Website Performance & Speed",              desc: "Core Web Vitals, load times, hosting quality, and what\u2019s slowing you down. Slow sites lose visitors before they even read a word." },
    { _key: key("aa"), icon: "Search",            color: "bg-orange-50 text-orange-600", title: "Technical SEO",                          desc: "Crawlability, indexing, site structure, meta tags, schema markup, and the under-the-hood issues that keep you off Google\u2019s radar." },
    { _key: key("aa"), icon: "TrendingUp",        color: "bg-green-50 text-green-600", title: "On-Page SEO & Content",                    desc: "Keyword targeting, heading structure, internal linking, and whether your content is actually optimized for what your customers are searching for." },
    { _key: key("aa"), icon: "Globe",             color: "bg-purple-50 text-purple-600", title: "GEO & AEO \u2014 AI Search Visibility",  desc: "How your business shows up in AI-powered search results (ChatGPT, Google AI Overviews, Perplexity). A growing source of traffic most businesses ignore." },
    { _key: key("aa"), icon: "MapPin",            color: "bg-red-50 text-red-600",     title: "Local Search & Google Business Profile",   desc: "Your GBP completeness, review profile, local citation consistency, and how you\u2019re showing up in map results and local pack rankings." },
    { _key: key("aa"), icon: "MessageSquare",     color: "bg-teal-50 text-teal-600",   title: "Content & Site Structure",                 desc: "Whether your site clearly communicates who you are, what you do, and who you serve \u2014 and whether it\u2019s organized in a way that makes sense to both visitors and search engines." },
    { _key: key("aa"), icon: "MousePointerClick", color: "bg-pink-50 text-pink-600",   title: "Conversion Optimization",                  desc: "Your calls-to-action, contact forms, user flow, and whether your site is actually designed to turn visitors into leads \u2014 or just look nice." },
    { _key: key("aa"), icon: "BarChart2",         color: "bg-indigo-50 text-indigo-600", title: "Tech Stack",                             desc: "What your site is built on, how it\u2019s hosted, and whether the underlying tools are serving you well \u2014 or creating hidden limitations on performance, flexibility, and growth." },
    { _key: key("aa"), icon: "Users",             color: "bg-cyan-50 text-cyan-600",   title: "Competitor Snapshot",                      desc: "A quick look at how your top local competitors are showing up online \u2014 so you can see exactly where the gap is and what\u2019s worth closing." },
  ],

  // What you receive
  deliverableBadge: "The deliverable",
  deliverableHeadline: "A report you can actually",
  deliverableHeadlineHighlight: "do something with.",
  deliverableBody:
    "You won\u2019t get a 40-page PDF full of screenshots and technical scores. You\u2019ll get a clear, written report that tells you what matters, what to fix first, and what to invest in next.",
  deliverables: [
    "A written report covering all 10 audit areas",
    "Specific findings \u2014 not vague suggestions",
    "A prioritized list of what to fix first",
    "Quick wins you can act on immediately",
    "Bigger opportunities worth investing in",
    "A plain-English summary you can actually use",
  ],

  // How it works
  stepsBadge: "How it works",
  stepsHeadline: "Simple, fast, and",
  stepsHeadlineHighlight: "genuinely useful.",
  stepsSubheadline: "Three steps. No hoops to jump through. No sales call required.",
  steps: [
    { _key: key("st"), number: "01", title: "Submit your URL", desc: "Fill out the form below with your website URL and a little context about your business. The more you share, the more useful the audit." },
    { _key: key("st"), number: "02", title: "We do the work", desc: "We personally review your site across all 10 areas \u2014 no automated tool, no junior staff. You get a real analysis from someone who knows what they\u2019re looking at." },
    { _key: key("st"), number: "03", title: "You get your report", desc: "Within 48 hours, we send you a detailed written report with findings and prioritized recommendations. No sales pitch attached \u2014 just honest insight." },
  ],

  // Request form
  requestBadge: "Request your audit",
  requestHeadline: "Let\u2019s see what your site is",
  requestHeadlineHighlight: "actually doing.",
  requestBody:
    "Fill out the form and we\u2019ll get started within one business day. The more context you give us about your business, the more useful the audit will be.",
  requestBullets: [
    "Completely free \u2014 no credit card, no commitment",
    "Delivered as a written report within 48 hours",
    "Covers all 10 areas listed above",
    "Specific to your site \u2014 not a generic checklist",
    "We respond to every request personally",
  ],

  // FAQ
  faqHeadline: "Common questions",
  faqSubheadline: "Straight answers, no runaround.",
  faqs: [
    { _key: key("fq"), q: "Is the audit really free?", a: "Yes, completely. There\u2019s no catch, no hidden fee, and no obligation to hire us afterward. We offer it because it\u2019s a useful way for business owners to understand where they stand \u2014 and for us to show you what we actually know." },
    { _key: key("fq"), q: "How is this different from an automated audit tool?", a: "Automated tools flag technical issues \u2014 they can\u2019t tell you whether your messaging makes sense, whether your CTAs are in the right place, or why your competitor is outranking you. This is a manual review done by a real person." },
    { _key: key("fq"), q: "What do you need from me?", a: "Just your website URL and a brief description of your business and goals. If you want, you can share access to GA4 for a deeper analytics review \u2014 but it\u2019s not required." },
    { _key: key("fq"), q: "How long does it take?", a: "We deliver most audits within 48 hours of receiving your request. If we need more time, we\u2019ll let you know upfront." },
    { _key: key("fq"), q: "Do I need to be an Ohio business?", a: "We focus on locally owned Ohio businesses, but we\u2019re happy to help any small business owner who wants an honest look at their digital presence." },
  ],
};

console.log("Migrating Audit page to Sanity...\n");

try {
  // Remove stale draft first
  try { await client.delete("drafts.auditPage"); } catch { /* no draft, that's fine */ }

  const result = await client.createOrReplace(auditPage);
  console.log(`✓ auditPage — _id: ${result._id}`);
} catch (err) {
  console.error("✗ auditPage:", err.message);
}

console.log("\nDone. Open Studio and publish the Audit Page to make it live.");
