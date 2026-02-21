import { defineField, defineType } from "sanity";

export default defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  // @ts-ignore — Sanity experimental API, not in TS types
  __experimental_actions: ["update", "publish"],
  fields: [
    defineField({
      name: "logoText",
      title: "Logo Text",
      type: "string",
      description: "Name shown next to the logo icon",
      initialValue: "Ryan Judy",
    }),
    defineField({
      name: "navLinks",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string", validation: (Rule) => Rule.required() }),
            defineField({ name: "href", title: "Path", type: "string", description: "e.g. /services", validation: (Rule) => Rule.required() }),
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        },
      ],
      initialValue: [
        { _key: "home", label: "Home", href: "/" },
        { _key: "services", label: "Services", href: "/services" },
        { _key: "about", label: "About", href: "/about" },
        { _key: "blog", label: "Blog", href: "/blog" },
        { _key: "contact", label: "Contact", href: "/contact" },
      ],
    }),
    defineField({
      name: "ctaText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Get a Free Audit",
    }),
    defineField({
      name: "ctaHref",
      title: "CTA Button Link",
      type: "string",
      initialValue: "/contact",
    }),
  ],
  preview: {
    prepare: () => ({ title: "Navigation" }),
  },
});
