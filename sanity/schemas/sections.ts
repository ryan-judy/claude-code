import { defineField, defineType } from "sanity";

// ── Shared helpers ─────────────────────────────────────────────────────────────

const iconList = [
  { title: "Map Pin", value: "MapPin" },
  { title: "Shield Check", value: "ShieldCheck" },
  { title: "Lightbulb", value: "Lightbulb" },
  { title: "Line Chart", value: "LineChart" },
  { title: "Users", value: "Users" },
  { title: "Clock", value: "Clock" },
  { title: "Globe", value: "Globe" },
  { title: "Bot", value: "Bot" },
  { title: "Search", value: "Search" },
  { title: "Trending Up", value: "TrendingUp" },
  { title: "Bar Chart", value: "BarChart2" },
  { title: "Megaphone", value: "Megaphone" },
  { title: "Building", value: "Building2" },
  { title: "Graduation Cap", value: "GraduationCap" },
  { title: "Home", value: "Home" },
  { title: "Leaf", value: "Leaf" },
  { title: "Rocket", value: "Rocket" },
  { title: "Heart", value: "Heart" },
  { title: "Award", value: "Award" },
  { title: "Check Circle", value: "CheckCircle2" },
  { title: "Mail", value: "Mail" },
  { title: "Phone", value: "Phone" },
  { title: "Message Circle", value: "MessageCircle" },
  { title: "Refresh", value: "RefreshCw" },
  { title: "Sparkles", value: "Sparkles" },
  { title: "Zap", value: "Zap" },
  { title: "Monitor", value: "Monitor" },
  { title: "Thumbs Down", value: "ThumbsDown" },
  { title: "Eye Off", value: "EyeOff" },
  { title: "Smartphone", value: "Smartphone" },
  { title: "Message Square", value: "MessageSquare" },
  { title: "Mouse Pointer", value: "MousePointerClick" },
];

// ── 1. heroSection ─────────────────────────────────────────────────────────────

export const heroSection = defineType({
  name: "heroSection",
  title: "Hero (Full)",
  type: "object",
  fields: [
    defineField({ name: "badge", title: "Badge Text", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "headlineHighlight", title: "Headline Highlight", type: "string" }),
    defineField({ name: "subheadline", title: "Subheadline", type: "text", rows: 3 }),
    defineField({ name: "primaryCtaText", title: "Primary CTA Text", type: "string" }),
    defineField({ name: "secondaryCtaText", title: "Secondary CTA Text", type: "string" }),
    defineField({
      name: "proofStats",
      title: "Proof Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "headline", subtitle: "headlineHighlight" },
    prepare: ({ title, subtitle }) => ({
      title: "Hero (Full)",
      subtitle: title ? `${title} ${subtitle ?? ""}`.trim() : "Unconfigured",
    }),
  },
});

// ── 2. pageHeroSection ─────────────────────────────────────────────────────────

export const pageHeroSection = defineType({
  name: "pageHeroSection",
  title: "Page Hero",
  type: "object",
  fields: [
    defineField({ name: "badge", title: "Badge Text", type: "string" }),
    defineField({
      name: "badgeIcon",
      title: "Badge Icon (optional)",
      type: "string",
      options: { list: iconList },
    }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "headlineHighlight", title: "Headline Highlight", type: "string" }),
    defineField({ name: "subheadline", title: "Subheadline", type: "text", rows: 3 }),
  ],
  preview: {
    select: { title: "headline", subtitle: "headlineHighlight" },
    prepare: ({ title, subtitle }) => ({
      title: "Page Hero",
      subtitle: title ? `${title} ${subtitle ?? ""}`.trim() : "Unconfigured",
    }),
  },
});

// ── 3. statsSection ────────────────────────────────────────────────────────────

export const statsSection = defineType({
  name: "statsSection",
  title: "Stats Bar",
  type: "object",
  fields: [
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "value", title: "Value", type: "string" }),
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "description", title: "Description", type: "string" }),
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Stats Bar" }),
  },
});

// ── 4. servicesSection ─────────────────────────────────────────────────────────

const iconBgList = [
  { title: "Teal", value: "bg-teal-50 text-teal-600" },
  { title: "Blue", value: "bg-blue-50 text-blue-600" },
  { title: "Indigo", value: "bg-indigo-50 text-indigo-600" },
  { title: "Purple", value: "bg-purple-50 text-purple-600" },
  { title: "Green", value: "bg-green-50 text-green-600" },
  { title: "Orange", value: "bg-orange-50 text-orange-600" },
  { title: "Yellow", value: "bg-yellow-50 text-yellow-600" },
  { title: "Pink", value: "bg-pink-50 text-pink-600" },
  { title: "Red", value: "bg-red-50 text-red-600" },
  { title: "Cyan", value: "bg-cyan-50 text-cyan-600" },
  { title: "Amber", value: "bg-amber-50 text-amber-600" },
];

export const servicesSection = defineType({
  name: "servicesSection",
  title: "Services Grid",
  type: "object",
  fields: [
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon", type: "string", options: { list: iconList } }),
            defineField({ name: "color", title: "Icon Color", type: "string", options: { list: iconBgList } }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({ name: "highlights", title: "Highlight Tags", type: "array", of: [{ type: "string" }] }),
            defineField({ name: "href", title: "Link URL", type: "string" }),
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Services Grid" }),
  },
});

// ── 5. processSection ──────────────────────────────────────────────────────────

export const processSection = defineType({
  name: "processSection",
  title: "Process Steps",
  type: "object",
  fields: [
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "headlineHighlight", title: "Headline Highlight", type: "string" }),
    defineField({ name: "subheadline", title: "Subheadline", type: "text", rows: 2 }),
    defineField({
      name: "steps",
      title: "Steps",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "number", title: "Step Number (e.g. 01)", type: "string" }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({ name: "deliverable", title: "Deliverable", type: "string" }),
          ],
          preview: { select: { title: "number", subtitle: "title" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "headline" },
    prepare: ({ title }) => ({ title: "Process Steps", subtitle: title }),
  },
});

// ── 6. industriesSection ───────────────────────────────────────────────────────

export const industriesSection = defineType({
  name: "industriesSection",
  title: "Industries",
  type: "object",
  fields: [
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "headlineHighlight", title: "Headline Highlight", type: "string" }),
    defineField({ name: "subheadline", title: "Subheadline", type: "text", rows: 2 }),
    defineField({
      name: "list",
      title: "Industries",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon", type: "string", options: { list: iconList } }),
            defineField({ name: "name", title: "Industry Name", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
            defineField({ name: "wins", title: "Key Wins", type: "array", of: [{ type: "string" }] }),
          ],
          preview: { select: { title: "name", subtitle: "description" } },
        },
      ],
    }),
    defineField({ name: "moreCardHeadline", title: "\"More\" Card Headline", type: "string" }),
    defineField({ name: "moreCardBody", title: "\"More\" Card Body", type: "text", rows: 2 }),
    defineField({ name: "moreCardCta", title: "\"More\" Card CTA Text", type: "string" }),
  ],
  preview: {
    select: { title: "headline" },
    prepare: ({ title }) => ({ title: "Industries", subtitle: title }),
  },
});

// ── 7. whySection ──────────────────────────────────────────────────────────────

export const whySection = defineType({
  name: "whySection",
  title: "Why Section",
  type: "object",
  fields: [
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "headlineHighlight", title: "Headline Highlight", type: "string" }),
    defineField({ name: "body", title: "Body Text", type: "text", rows: 3 }),
    defineField({ name: "quote", title: "Quote", type: "text", rows: 2 }),
    defineField({ name: "quoteAuthor", title: "Quote Author", type: "string" }),
    defineField({
      name: "reasons",
      title: "Reasons",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon", type: "string", options: { list: iconList } }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "headline" },
    prepare: ({ title }) => ({ title: "Why Section", subtitle: title }),
  },
});

// ── 8. pricingSection ──────────────────────────────────────────────────────────

export const pricingSection = defineType({
  name: "pricingSection",
  title: "Pricing",
  type: "object",
  fields: [
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "headlineHighlight", title: "Headline Highlight", type: "string" }),
    defineField({ name: "subheadline", title: "Subheadline", type: "text", rows: 2 }),
    defineField({
      name: "plans",
      title: "Plans",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "name", title: "Plan Name", type: "string" }),
            defineField({ name: "tagline", title: "Tagline", type: "string" }),
            defineField({ name: "price", title: "Price", type: "string" }),
            defineField({ name: "priceNote", title: "Price Note", type: "string" }),
            defineField({ name: "features", title: "Features", type: "array", of: [{ type: "string" }] }),
            defineField({ name: "ctaText", title: "CTA Text", type: "string" }),
            defineField({ name: "isPrimary", title: "Primary Plan?", type: "boolean" }),
            defineField({ name: "badge", title: "Badge (e.g. Most Popular)", type: "string" }),
          ],
          preview: { select: { title: "name", subtitle: "tagline" } },
        },
      ],
    }),
    defineField({ name: "footerNote", title: "Footer Note", type: "text", rows: 2 }),
  ],
  preview: {
    select: { title: "headline" },
    prepare: ({ title }) => ({ title: "Pricing", subtitle: title }),
  },
});

// ── 9. ctaSection ──────────────────────────────────────────────────────────────

export const ctaSection = defineType({
  name: "ctaSection",
  title: "CTA Block",
  type: "object",
  fields: [
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "headlineHighlight", title: "Headline Highlight", type: "string" }),
    defineField({ name: "body", title: "Body Text", type: "text", rows: 2 }),
    defineField({ name: "primaryCtaText", title: "CTA Button Text", type: "string" }),
    defineField({ name: "ctaFinePrint", title: "Fine Print", type: "string" }),
  ],
  preview: {
    select: { title: "headline" },
    prepare: ({ title }) => ({ title: "CTA Block", subtitle: title }),
  },
});

// ── 10. richTextSection ────────────────────────────────────────────────────────

export const richTextSection = defineType({
  name: "richTextSection",
  title: "Rich Text",
  type: "object",
  fields: [
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt Text", type: "string" }),
            defineField({ name: "caption", title: "Caption", type: "string" }),
          ],
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Rich Text Block" }),
  },
});

// ── 11. profileStorySection ────────────────────────────────────────────────────

export const profileStorySection = defineType({
  name: "profileStorySection",
  title: "Profile + Story",
  type: "object",
  fields: [
    defineField({
      name: "profileImage",
      title: "Profile Image",
      type: "image",
      options: { hotspot: true },
      fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })],
    }),
    defineField({ name: "profileBadge", title: "Profile Badge Text", type: "string" }),
    defineField({ name: "storyBadge", title: "Story Badge", type: "string" }),
    defineField({ name: "storyHeadline", title: "Story Headline", type: "string" }),
    defineField({ name: "storyHeadlineHighlight", title: "Story Headline Highlight", type: "string" }),
    defineField({ name: "storyHeadlineLine2", title: "Story Headline Line 2", type: "string" }),
    defineField({
      name: "storyBody",
      title: "Story Body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({ name: "storyCtaText", title: "CTA Button Text", type: "string" }),
    defineField({ name: "storyLinkedinText", title: "LinkedIn Link Text", type: "string" }),
    defineField({ name: "storyLinkedinUrl", title: "LinkedIn URL", type: "url" }),
  ],
  preview: {
    select: { title: "storyHeadline" },
    prepare: ({ title }) => ({ title: "Profile + Story", subtitle: title }),
  },
});

// ── 12. experienceSection ──────────────────────────────────────────────────────

export const experienceSection = defineType({
  name: "experienceSection",
  title: "Experience & Expertise",
  type: "object",
  fields: [
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "headlineHighlight", title: "Headline Highlight", type: "string" }),
    defineField({ name: "subheadline", title: "Subheadline", type: "text", rows: 2 }),
    defineField({
      name: "expertiseItems",
      title: "Expertise Grid",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon", type: "string", options: { list: iconList } }),
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "years", title: "Years (e.g. 10+)", type: "string" }),
          ],
          preview: { select: { title: "label", subtitle: "years" } },
        },
      ],
    }),
    defineField({
      name: "experienceItems",
      title: "Experience Timeline",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "period", title: "Period (e.g. 2020 — 2024)", type: "string" }),
            defineField({ name: "role", title: "Role / Title", type: "string" }),
            defineField({ name: "company", title: "Company / Industry", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
            defineField({ name: "highlight", title: "Highlight Tag", type: "string" }),
            defineField({
              name: "accentColor",
              title: "Accent Color",
              type: "string",
              options: { list: [
                { title: "Gold", value: "gold" },
                { title: "Blue", value: "blue" },
                { title: "Gray", value: "gray" },
              ]},
            }),
          ],
          preview: { select: { title: "role", subtitle: "company" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "headline" },
    prepare: ({ title }) => ({ title: "Experience & Expertise", subtitle: title }),
  },
});

// ── 13. valuesSection ──────────────────────────────────────────────────────────

export const valuesSection = defineType({
  name: "valuesSection",
  title: "Values",
  type: "object",
  fields: [
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "headlineHighlight", title: "Headline Highlight", type: "string" }),
    defineField({
      name: "items",
      title: "Values",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon", type: "string", options: { list: iconList } }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "title", subtitle: "description" } },
        },
      ],
    }),
  ],
  preview: {
    select: { title: "headline" },
    prepare: ({ title }) => ({ title: "Values", subtitle: title }),
  },
});

// ── 14. servicesDetailSection ──────────────────────────────────────────────────

export const servicesDetailSection = defineType({
  name: "servicesDetailSection",
  title: "Services (Detail View)",
  type: "object",
  fields: [
    defineField({
      name: "services",
      title: "Services",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "id", title: "Anchor ID", type: "slug", options: { source: "title" }, description: "Used for #anchor links (e.g. websites, ai, sem)" }),
            defineField({ name: "icon", title: "Icon", type: "string", options: { list: iconList } }),
            defineField({ name: "iconBg", title: "Icon Background", type: "string", options: { list: iconBgList } }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "tagline", title: "Tagline", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 4 }),
            defineField({ name: "capabilities", title: "Capabilities List", type: "array", of: [{ type: "string" }] }),
            defineField({ name: "ctaText", title: "CTA Text", type: "string", initialValue: "Get Started" }),
          ],
          preview: { select: { title: "title", subtitle: "tagline" } },
        },
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Services (Detail View)" }),
  },
});

// ── 15. contactFormSection ─────────────────────────────────────────────────────

export const contactFormSection = defineType({
  name: "contactFormSection",
  title: "Contact Form",
  type: "object",
  fields: [
    defineField({ name: "contactInfoHeadline", title: "Contact Info Headline", type: "string" }),
    defineField({ name: "contactInfoSubheadline", title: "Contact Info Subheadline", type: "text", rows: 2 }),
    defineField({ name: "formHeadline", title: "Form Headline", type: "string" }),
    defineField({ name: "formSubheadline", title: "Form Subheadline", type: "text", rows: 2 }),
    defineField({
      name: "serviceOptions",
      title: "Service Dropdown Options",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "submitText", title: "Submit Button Text", type: "string" }),
    defineField({ name: "auditCheckboxLabel", title: "Audit Checkbox Label", type: "string" }),
    defineField({ name: "auditCheckboxSub", title: "Audit Checkbox Subtext", type: "string" }),
    defineField({ name: "formFinePrint", title: "Form Fine Print", type: "string" }),
  ],
  preview: {
    prepare: () => ({ title: "Contact Form" }),
  },
});

// ── 16. whoIHelpSection ────────────────────────────────────────────────────────

export const whoIHelpSection = defineType({
  name: "whoIHelpSection",
  title: "Who I Help",
  type: "object",
  fields: [
    defineField({ name: "badge", title: "Badge", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "headlineHighlight", title: "Headline Highlight", type: "string" }),
    defineField({ name: "body", title: "Subheadline", type: "text", rows: 2 }),
    defineField({
      name: "personas",
      title: "Persona Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon", type: "string", options: { list: iconList } }),
            defineField({ name: "quote", title: "Quote", type: "string" }),
            defineField({ name: "detail", title: "Detail", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "quote" } },
        },
      ],
    }),
    defineField({ name: "ctaHeadline", title: "CTA Headline", type: "string" }),
    defineField({ name: "ctaBody", title: "CTA Body", type: "text", rows: 2 }),
    defineField({ name: "primaryCtaText", title: "CTA Button Text", type: "string" }),
  ],
  preview: {
    prepare: () => ({ title: "Who I Help" }),
  },
});

// ── Export all ─────────────────────────────────────────────────────────────────

export const sectionTypes = [
  heroSection,
  pageHeroSection,
  statsSection,
  servicesSection,
  processSection,
  industriesSection,
  whySection,
  pricingSection,
  ctaSection,
  richTextSection,
  profileStorySection,
  experienceSection,
  valuesSection,
  servicesDetailSection,
  contactFormSection,
  whoIHelpSection,
];
