import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { servicesPageQuery, siteSettingsQuery } from "@/lib/sanity/queries";
import SectionRenderer, { type SanitySection } from "@/components/SectionRenderer";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const page = await client.fetch(servicesPageQuery);
    return {
      title: page?.seoTitle ?? undefined,
      description: page?.seoDescription ?? undefined,
    };
  } catch {
    return {
      title: "Services | Ryan Judy Digital Marketing — Columbus, OH",
      description:
        "Full-stack digital marketing services for Columbus businesses: websites, AI integration, SEM, SEO, content strategy, analytics, and more.",
    };
  }
}

const defaultSections: SanitySection[] = [
  {
    _type: "pageHeroSection",
    _key: "hero",
    badge: "What I Do",
    headline: "Every service you need to",
    headlineHighlight: "dominate online",
    subheadline:
      "From your first website to a full digital marketing engine — I bring deep expertise across every channel and discipline that matters for growing Columbus businesses.",
  },
  { _type: "servicesDetailSection", _key: "servicesDetail" },
  { _type: "ctaSection", _key: "cta" },
];

export default async function ServicesPage() {
  const [page, settings] = await Promise.all([
    client.fetch(servicesPageQuery).catch(() => null),
    client.fetch(siteSettingsQuery).catch(() => null),
  ]);

  const sections: SanitySection[] = page?.sections?.length ? page.sections : defaultSections;

  return <SectionRenderer sections={sections} siteSettings={settings} />;
}
