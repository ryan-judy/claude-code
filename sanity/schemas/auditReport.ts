import { defineField, defineType } from "sanity";

const richTextBlock = {
  type: "block",
  styles: [{ title: "Normal", value: "normal" }],
  lists: [{ title: "Bullet", value: "bullet" }],
  marks: {
    decorators: [
      { title: "Bold", value: "strong" },
      { title: "Italic", value: "em" },
    ],
    annotations: [],
  },
};

export default defineType({
  name: "auditReport",
  title: "Audit Report",
  type: "document",
  fields: [
    defineField({
      name: "clientName",
      title: "Business Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "clientName",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clientUrl",
      title: "Website URL",
      type: "url",
    }),
    defineField({
      name: "industry",
      title: "Industry",
      type: "string",
    }),
    defineField({
      name: "preparedAt",
      title: "Date Prepared",
      type: "date",
      initialValue: () => new Date().toISOString().split("T")[0],
    }),
    defineField({
      name: "reportVersion",
      title: "Report Version",
      type: "string",
      initialValue: "1.0",
    }),
    defineField({
      name: "overallStatus",
      title: "Overall Status",
      type: "string",
      options: {
        list: [
          { title: "Excellent", value: "excellent" },
          { title: "Good", value: "good" },
          { title: "Needs Attention", value: "needs-attention" },
          { title: "Issues Found", value: "issues-found" },
        ],
      },
    }),
    defineField({
      name: "quickWins",
      title: "Top Priority Quick Wins",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.max(3),
      description: "Up to 3 priority quick wins",
    }),
    defineField({
      name: "executiveSummary",
      title: "Executive Summary",
      type: "array",
      of: [{ ...richTextBlock }],
    }),
    defineField({
      name: "sections",
      title: "Audit Sections",
      type: "array",
      of: [{ type: "auditSection" }],
      description: "Add each of the 10 audit areas",
    }),
    defineField({
      name: "actionQuickWins",
      title: "Action Plan — Quick Wins (Do Now)",
      type: "array",
      of: [{ ...richTextBlock }],
    }),
    defineField({
      name: "actionShortTerm",
      title: "Action Plan — Short-Term (30–90 days)",
      type: "array",
      of: [{ ...richTextBlock }],
    }),
    defineField({
      name: "actionStrategic",
      title: "Action Plan — Strategic (90+ days)",
      type: "array",
      of: [{ ...richTextBlock }],
    }),
  ],
  preview: {
    select: {
      title: "clientName",
      subtitle: "preparedAt",
    },
    prepare({ title, subtitle }) {
      return {
        title,
        subtitle: subtitle ? `Prepared: ${subtitle}` : "Draft",
      };
    },
  },
  orderings: [
    {
      title: "Prepared Date, New",
      name: "preparedAtDesc",
      by: [{ field: "preparedAt", direction: "desc" }],
    },
  ],
});
