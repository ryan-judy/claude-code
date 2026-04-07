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
  { type: "whoIHelpSection" },
];

export default defineType({
  name: "servicesPage",
  title: "Services Page",
  type: "document",
  // @ts-ignore — Sanity experimental API, not in TS types
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "sections",
      title: "Page Sections",
      type: "array",
      of: allSectionTypes,
      description: "Add, reorder, and configure sections to build the page layout.",
      initialValue: [
        { _type: "pageHeroSection", _key: "hero" },
        { _type: "servicesDetailSection", _key: "servicesDetail" },
        { _type: "ctaSection", _key: "cta" },
      ],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      initialValue: "Services | Ryan Judy Digital Marketing — Columbus, OH",
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      initialValue:
        "Full-stack digital marketing services for Columbus businesses: websites, AI integration, SEM, SEO, content strategy, analytics, and more.",
      validation: (Rule) => Rule.max(160),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Services Page" }),
  },
});
