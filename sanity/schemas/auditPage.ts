import { defineField, defineType } from "sanity";

const iconList = [
  { title: "Smartphone", value: "Smartphone" },
  { title: "Zap", value: "Zap" },
  { title: "Search", value: "Search" },
  { title: "Trending Up", value: "TrendingUp" },
  { title: "Globe", value: "Globe" },
  { title: "Map Pin", value: "MapPin" },
  { title: "Message Square", value: "MessageSquare" },
  { title: "Mouse Pointer", value: "MousePointerClick" },
  { title: "Bar Chart", value: "BarChart2" },
  { title: "Users", value: "Users" },
  { title: "Lightbulb", value: "Lightbulb" },
  { title: "Shield Check", value: "ShieldCheck" },
  { title: "Check Circle", value: "CheckCircle2" },
  { title: "Clock", value: "Clock" },
];

const colorList = [
  { title: "Blue", value: "bg-blue-50 text-blue-600" },
  { title: "Amber", value: "bg-amber-50 text-amber-600" },
  { title: "Orange", value: "bg-orange-50 text-orange-600" },
  { title: "Green", value: "bg-green-50 text-green-600" },
  { title: "Purple", value: "bg-purple-50 text-purple-600" },
  { title: "Red", value: "bg-red-50 text-red-600" },
  { title: "Teal", value: "bg-teal-50 text-teal-600" },
  { title: "Pink", value: "bg-pink-50 text-pink-600" },
  { title: "Indigo", value: "bg-indigo-50 text-indigo-600" },
  { title: "Cyan", value: "bg-cyan-50 text-cyan-600" },
];

export default defineType({
  name: "auditPage",
  title: "Audit Page",
  type: "document",
  // @ts-ignore — Sanity experimental API, not in TS types
  __experimental_actions: ["update", "publish"],
  groups: [
    { name: "seo", title: "SEO" },
    { name: "hero", title: "Hero" },
    { name: "included", title: "What's Included" },
    { name: "deliverable", title: "What You Receive" },
    { name: "steps", title: "How It Works" },
    { name: "request", title: "Request Form" },
    { name: "faq", title: "FAQ" },
  ],
  fields: [
    // ── SEO ──────────────────────────────────────────────────────────────
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      group: "seo",
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 2,
      group: "seo",
      validation: (Rule) => Rule.max(160),
    }),

    // ── Hero ─────────────────────────────────────────────────────────────
    defineField({ name: "heroBadge", title: "Badge", type: "string", group: "hero" }),
    defineField({ name: "heroHeadline", title: "Headline", type: "string", group: "hero" }),
    defineField({ name: "heroHeadlineHighlight", title: "Headline Highlight", type: "string", group: "hero" }),
    defineField({ name: "heroSubheadline", title: "Subheadline", type: "text", rows: 2, group: "hero" }),
    defineField({ name: "heroPrimaryCtaText", title: "Primary CTA Text", type: "string", group: "hero" }),
    defineField({ name: "heroSecondaryCtaText", title: "Secondary CTA Text", type: "string", group: "hero" }),

    // ── What's included ───────────────────────────────────────────────────
    defineField({ name: "includedBadge", title: "Badge", type: "string", group: "included" }),
    defineField({ name: "includedHeadline", title: "Headline", type: "string", group: "included" }),
    defineField({ name: "includedHeadlineHighlight", title: "Headline Highlight", type: "string", group: "included" }),
    defineField({ name: "includedSubheadline", title: "Subheadline", type: "text", rows: 2, group: "included" }),
    defineField({
      name: "auditAreas",
      title: "Audit Areas",
      type: "array",
      group: "included",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "icon", title: "Icon", type: "string", options: { list: iconList } }),
          defineField({ name: "color", title: "Color", type: "string", options: { list: colorList } }),
          defineField({ name: "title", title: "Title", type: "string" }),
          defineField({ name: "desc", title: "Description", type: "text", rows: 2 }),
        ],
        preview: { select: { title: "title", subtitle: "desc" } },
      }],
    }),

    // ── What you receive ──────────────────────────────────────────────────
    defineField({ name: "deliverableBadge", title: "Badge", type: "string", group: "deliverable" }),
    defineField({ name: "deliverableHeadline", title: "Headline", type: "string", group: "deliverable" }),
    defineField({ name: "deliverableHeadlineHighlight", title: "Headline Highlight", type: "string", group: "deliverable" }),
    defineField({ name: "deliverableBody", title: "Body", type: "text", rows: 3, group: "deliverable" }),
    defineField({
      name: "deliverables",
      title: "Deliverable Bullet Points",
      type: "array",
      group: "deliverable",
      of: [{ type: "string" }],
    }),

    // ── How it works ──────────────────────────────────────────────────────
    defineField({ name: "stepsBadge", title: "Badge", type: "string", group: "steps" }),
    defineField({ name: "stepsHeadline", title: "Headline", type: "string", group: "steps" }),
    defineField({ name: "stepsHeadlineHighlight", title: "Headline Highlight", type: "string", group: "steps" }),
    defineField({ name: "stepsSubheadline", title: "Subheadline", type: "text", rows: 2, group: "steps" }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      group: "steps",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "number", title: "Number (e.g. 01)", type: "string" }),
          defineField({ name: "title", title: "Title", type: "string" }),
          defineField({ name: "desc", title: "Description", type: "text", rows: 2 }),
        ],
        preview: { select: { title: "number", subtitle: "title" } },
      }],
    }),

    // ── Request form section ──────────────────────────────────────────────
    defineField({ name: "requestBadge", title: "Badge", type: "string", group: "request" }),
    defineField({ name: "requestHeadline", title: "Headline", type: "string", group: "request" }),
    defineField({ name: "requestHeadlineHighlight", title: "Headline Highlight", type: "string", group: "request" }),
    defineField({ name: "requestBody", title: "Body", type: "text", rows: 2, group: "request" }),
    defineField({
      name: "requestBullets",
      title: "Bullet Points",
      type: "array",
      group: "request",
      of: [{ type: "string" }],
    }),

    // ── FAQ ───────────────────────────────────────────────────────────────
    defineField({ name: "faqHeadline", title: "Headline", type: "string", group: "faq" }),
    defineField({ name: "faqSubheadline", title: "Subheadline", type: "string", group: "faq" }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      group: "faq",
      of: [{
        type: "object",
        fields: [
          defineField({ name: "q", title: "Question", type: "string" }),
          defineField({ name: "a", title: "Answer", type: "text", rows: 3 }),
        ],
        preview: { select: { title: "q" } },
      }],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Audit Page" }),
  },
});
