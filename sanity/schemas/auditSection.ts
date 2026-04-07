import { defineField, defineType } from "sanity";

export default defineType({
  name: "auditSection",
  title: "Audit Section",
  type: "object",
  fields: [
    defineField({
      name: "sectionKey",
      title: "Section",
      type: "string",
      options: {
        list: [
          { title: "1. User Experience", value: "user-experience" },
          { title: "2. Website Performance & Speed", value: "performance" },
          { title: "3. Technical SEO", value: "technical-seo" },
          { title: "4. On-Page SEO & Content", value: "onpage-seo" },
          { title: "5. GEO & AEO — AI Search Visibility", value: "geo-aeo" },
          { title: "6. Local Search & Google Business Profile", value: "local-search" },
          { title: "7. Content & Site Structure", value: "content-structure" },
          { title: "8. Conversion Optimization", value: "conversion" },
          { title: "9. Tech Stack", value: "tech-stack" },
          { title: "10. Competitor Snapshot", value: "competitor" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "✅ Excellent", value: "excellent" },
          { title: "🟢 Good", value: "good" },
          { title: "🟡 Needs Attention", value: "needs-attention" },
          { title: "🔴 Issues Found", value: "issues-found" },
          { title: "⚫ N/A", value: "na" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "priority",
      title: "Priority",
      type: "string",
      options: {
        list: [
          { title: "High", value: "high" },
          { title: "Medium", value: "medium" },
          { title: "Low", value: "low" },
        ],
      },
    }),
    defineField({
      name: "findings",
      title: "Key Findings",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
          },
        },
      ],
    }),
    defineField({
      name: "recommendations",
      title: "Recommendations",
      type: "array",
      of: [
        {
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [{ title: "Bullet", value: "bullet" }],
          marks: {
            decorators: [
              { title: "Bold", value: "strong" },
              { title: "Italic", value: "em" },
            ],
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "sectionKey",
      subtitle: "status",
    },
    prepare({ title, subtitle }) {
      const sectionLabels: Record<string, string> = {
        "user-experience": "User Experience",
        performance: "Performance & Speed",
        "technical-seo": "Technical SEO",
        "onpage-seo": "On-Page SEO & Content",
        "geo-aeo": "GEO & AEO",
        "local-search": "Local Search & GBP",
        "content-structure": "Content & Site Structure",
        conversion: "Conversion Optimization",
        "tech-stack": "Tech Stack",
        competitor: "Competitor Snapshot",
      };
      const statusLabels: Record<string, string> = {
        excellent: "✅ Excellent",
        good: "🟢 Good",
        "needs-attention": "🟡 Needs Attention",
        "issues-found": "🔴 Issues Found",
        na: "⚫ N/A",
      };
      return {
        title: sectionLabels[title] ?? title,
        subtitle: statusLabels[subtitle] ?? subtitle,
      };
    },
  },
});
