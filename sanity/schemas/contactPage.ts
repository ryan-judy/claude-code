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
  name: "contactPage",
  title: "Contact Page",
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
        { _type: "contactFormSection", _key: "form" },
      ],
    }),
    defineField({
      name: "seoTitle",
      title: "SEO Title",
      type: "string",
      initialValue: "Contact Ryan Judy | Free Website Audit — Columbus, Ohio",
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: "seoDescription",
      title: "SEO Description",
      type: "text",
      rows: 3,
      initialValue:
        "Get a free website audit or start a conversation about your digital marketing. Based in Columbus, OH.",
      validation: (Rule) => Rule.max(160),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Contact Page" }),
  },
});
