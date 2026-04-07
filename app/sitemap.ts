import { MetadataRoute } from "next";
import { client } from "@/lib/sanity/client";
import { postSitemapQuery } from "@/lib/sanity/queries";

export const dynamic = "force-static";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://sparkstreet.digital";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts: { slug: string; publishedAt?: string }[] = await client.fetch(postSitemapQuery);

  const blogRoutes = posts.map((post) => ({
    url: `${BASE_URL}/resources/${post.slug}/`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: `${BASE_URL}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/services/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/about/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/audit/`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/resources/`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE_URL}/contact/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/privacy/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE_URL}/terms/`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
    ...blogRoutes,
  ];
}
