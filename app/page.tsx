import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { homePageQuery, siteSettingsQuery } from "@/lib/sanity/queries";
import SectionRenderer, { type SanitySection } from "@/components/SectionRenderer";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const page = await client.fetch(homePageQuery);
    return {
      title: page?.seoTitle ?? undefined,
      description: page?.seoDescription ?? undefined,
    };
  } catch {
    return {};
  }
}

// Fallback sections — render the full homepage layout when Sanity has no content
const defaultSections: SanitySection[] = [
  { _type: "heroSection", _key: "hero" },
  { _type: "statsSection", _key: "stats" },
  { _type: "servicesSection", _key: "services" },
  { _type: "processSection", _key: "process" },
  { _type: "industriesSection", _key: "industries" },
  { _type: "whySection", _key: "why" },
  { _type: "pricingSection", _key: "pricing" },
  { _type: "ctaSection", _key: "cta" },
];

export default async function Home() {
  const [page, settings] = await Promise.all([
    client.fetch(homePageQuery).catch(() => null),
    client.fetch(siteSettingsQuery).catch(() => null),
  ]);

  const sections: SanitySection[] = page?.sections?.length ? page.sections : defaultSections;

  return <SectionRenderer sections={sections} siteSettings={settings} />;
}
