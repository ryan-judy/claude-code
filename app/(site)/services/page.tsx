import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { servicesPageQuery, siteSettingsQuery } from "@/lib/sanity/queries";
import SectionRenderer, { type SanitySection } from "@/components/SectionRenderer";

const fallbackSections: SanitySection[] = [
  {
    _type: "pageHeroSection",
    _key: "hero",
    badge: "What I Do",
    headline: "Every service you need to",
    headlineHighlight: "dominate online",
    subheadline:
      "From your first website to a full digital marketing engine \u2014 built specifically for locally owned Ohio businesses that want results, not reports.",
  },
  { _type: "servicesDetailSection", _key: "servicesDetail" },
  { _type: "ctaSection", _key: "cta" },
];

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch(servicesPageQuery);
  return {
    title:
      page?.seoTitle ?? "Services | Spark Street Digital \u2014 Ohio",
    description:
      page?.seoDescription ??
      "Full-stack digital marketing services for locally owned Ohio businesses: websites, AI integration, paid media, SEO & GEO/AEO, content strategy, analytics, and more.",
  };
}

export default async function ServicesPage() {
  const [page, siteSettings] = await Promise.all([
    client.fetch(servicesPageQuery),
    client.fetch(siteSettingsQuery),
  ]);

  const sections: SanitySection[] = page?.sections ?? fallbackSections;

  return <SectionRenderer sections={sections} siteSettings={siteSettings} />;
}
