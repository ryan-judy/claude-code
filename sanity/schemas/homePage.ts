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
  name: "homePage",
  title: "Home Page",
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
        { _type: "heroSection", _key: "hero" },
        { _type: "statsSection", _key: "stats" },
        { _type: "servicesSection", _key: "services" },
        { _type: "processSection", _key: "process" },
        { _type: "industriesSection", _key: "industries" },
        { _type: "whySection", _key: "why" },
        { _type: "pricingSection", _key: "pricing" },
        { _type: "ctaSection", _key: "cta" },
      ],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      initialValue: "Ryan Judy | Digital Marketing for Columbus Businesses",
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      initialValue:
        "10+ years of digital marketing experience helping Columbus businesses grow online. Specializing in websites, AI integration, SEM, SEO, and full digital marketing strategy.",
      validation: (Rule) => Rule.max(160),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Home Page" }),
  },
});
