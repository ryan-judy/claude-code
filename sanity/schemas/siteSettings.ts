import { defineField, defineType } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  // Singleton — prevent creating multiple documents
  // @ts-ignore — Sanity experimental API, not in TS types
  __experimental_actions: ["update", "publish"],
  groups: [
    { name: "contact", title: "Contact Info" },
    { name: "social", title: "Social Links" },
    { name: "seo", title: "Default SEO" },
  ],
  fields: [
    defineField({
      name: "siteName",
      title: "Site Name",
      type: "string",
      description: "Displayed in the browser tab and SEO titles",
      initialValue: "Ryan Judy",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      description: "Short tagline used in various places across the site",
      initialValue: "Digital Marketing for Columbus Businesses",
    }),

    // Contact Info
    defineField({
      name: "email",
      title: "Email Address",
      type: "string",
      group: "contact",
      initialValue: "ryan@ryanjudy.com",
    }),
    defineField({
      name: "phone",
      title: "Phone Number",
      type: "string",
      group: "contact",
      description: "Displayed on site (e.g. (614) 555-0100)",
      initialValue: "(614) 555-0100",
    }),
    defineField({
      name: "phoneHref",
      title: "Phone Href",
      type: "string",
      group: "contact",
      description: "Used in tel: links (e.g. +16145550100)",
      initialValue: "+16145550100",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      group: "contact",
      initialValue: "Columbus, Ohio",
    }),
    defineField({
      name: "locationSubtext",
      title: "Location Subtext",
      type: "string",
      group: "contact",
      initialValue: "Serving Columbus & beyond",
    }),
    defineField({
      name: "responseTime",
      title: "Response Time",
      type: "string",
      group: "contact",
      initialValue: "Within 1 business day",
    }),
    defineField({
      name: "auditDeliveryTime",
      title: "Audit Delivery Time",
      type: "string",
      group: "contact",
      initialValue: "Free audit: within 48 hours",
    }),

    // Social
    defineField({
      name: "linkedin",
      title: "LinkedIn URL",
      type: "url",
      group: "social",
      initialValue: "https://linkedin.com/in/rjudy",
    }),
    defineField({
      name: "twitter",
      title: "Twitter / X URL",
      type: "url",
      group: "social",
      initialValue: "https://twitter.com/ryanjudy",
    }),

    // Default SEO
    defineField({
      name: "defaultSeoTitle",
      title: "Default SEO Title",
      type: "string",
      group: "seo",
      description: "Used when a page doesn't define its own SEO title",
      initialValue: "Ryan Judy | Digital Marketing for Columbus Businesses",
      validation: (Rule) => Rule.max(70),
    }),
    defineField({
      name: "defaultSeoDescription",
      title: "Default SEO Description",
      type: "text",
      rows: 3,
      group: "seo",
      initialValue:
        "10+ years of digital marketing experience helping Columbus businesses grow online. Specializing in websites, AI integration, SEM, SEO, and full digital marketing strategy.",
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: "defaultOgImage",
      title: "Default OG Image",
      type: "image",
      group: "seo",
      description: "Fallback social sharing image (1200×630 recommended)",
      options: { hotspot: true },
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
});
