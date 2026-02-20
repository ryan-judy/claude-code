import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  name: "ryan-judy-studio",
  title: "Ryan Judy — Content Studio",
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Blog Posts")
              .child(
                S.documentList()
                  .title("Blog Posts")
                  .filter('_type == "post"')
                  .defaultOrdering([
                    { field: "publishedAt", direction: "desc" },
                  ])
              ),
            S.divider(),
            ...S.documentTypeListItems().filter(
              (item) => !["post"].includes(item.getId() ?? "")
            ),
          ]),
    }),
    visionTool(),
  ],
});
