import { defineField, defineType } from "sanity";

const allSectionTypes = [
  { type: "heroSection" },
  { type: "pageHeroSection" },
  { type: "statsSection" },
  { type: "servicesSection" },
  { type: "processSection" },
  { type: "industriesSection" },
  { type: "whySection" },
  { type: "pricingSection" },
  { type: "ctaSection" },
  { type: "richTextSection" },
  { type: "profileStorySection" },
  { type: "experienceSection" },
  { type: "valuesSection" },
  { type: "servicesDetailSection" },
  { type: "contactFormSection" },
];

export default defineType({
  name: "flexPage",
  title: "Flexible Page",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Page Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
      description: "The URL path for this page (e.g. 'landing-page' → /landing-page)",
    }),
    defineField({
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: allSectionTypes,
      description: "Add, reorder, and configure sections to build the page layout.",
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(160),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "slug.current" },
    prepare: ({ title, subtitle }) => ({
      title: title ?? "Untitled Page",
      subtitle: subtitle ? `/${subtitle}` : "No slug",
    }),
  },
});
