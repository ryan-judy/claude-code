import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";
import { codeInput } from "@sanity/code-input";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "crs7qrfh";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Singletons — only one document of each type exists
const singletons = ["siteSettings", "navigation", "homePage", "aboutPage", "servicesPage", "contactPage"];

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  name: "ryan-judy-studio",
  title: "Ryan Judy — Content Studio",
  schema: {
    types: schemaTypes,
    templates: (prev) =>
      prev.filter((template) => !singletons.includes(template.id)),
  },
  plugins: [
    codeInput(),
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // ── Global Settings ──────────────────────────
            S.listItem()
              .title("Site Settings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
                  .title("Site Settings")
              ),
            S.listItem()
              .title("Navigation")
              .child(
                S.document()
                  .schemaType("navigation")
                  .documentId("navigation")
                  .title("Navigation")
              ),

            S.divider(),

            // ── Pages ────────────────────────────────────
            S.listItem()
              .title("Pages")
              .child(
                S.list()
                  .title("Pages")
                  .items([
                    S.listItem()
                      .title("Home Page")
                      .child(
                        S.document()
                          .schemaType("homePage")
                          .documentId("homePage")
                          .title("Home Page")
                      ),
                    S.listItem()
                      .title("About Page")
                      .child(
                        S.document()
                          .schemaType("aboutPage")
                          .documentId("aboutPage")
                          .title("About Page")
                      ),
                    S.listItem()
                      .title("Services Page")
                      .child(
                        S.document()
                          .schemaType("servicesPage")
                          .documentId("servicesPage")
                          .title("Services Page")
                      ),
                    S.listItem()
                      .title("Contact Page")
                      .child(
                        S.document()
                          .schemaType("contactPage")
                          .documentId("contactPage")
                          .title("Contact Page")
                      ),
                  ])
              ),

            S.divider(),

            // ── Flexible Pages ───────────────────────────
            S.listItem()
              .title("Flexible Pages")
              .child(
                S.documentList()
                  .title("Flexible Pages")
                  .filter('_type == "flexPage"')
              ),

            S.divider(),

            // ── Blog ─────────────────────────────────────
            S.listItem()
              .title("Blog Posts")
              .child(
                S.documentList()
                  .title("Blog Posts")
                  .filter('_type == "post"')
                  .defaultOrdering([{ field: "publishedAt", direction: "desc" }])
              ),

            S.divider(),

            // ── Audit Reports ─────────────────────────────
            S.listItem()
              .title("Audit Reports")
              .child(
                S.documentList()
                  .title("Audit Reports")
                  .filter('_type == "auditReport"')
                  .defaultOrdering([{ field: "preparedAt", direction: "desc" }])
              ),
          ]),
    }),
    visionTool(),
  ],
});
