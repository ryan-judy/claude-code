import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { homePageQuery, siteSettingsQuery } from "@/lib/sanity/queries";
import SectionRenderer, { type SanitySection } from "@/components/SectionRenderer";

const fallbackSections: SanitySection[] = [
  { _type: "heroSection", _key: "hero" },
  { _type: "servicesSection", _key: "services" },
  { _type: "whoIHelpSection", _key: "whoihelp" },
  { _type: "processSection", _key: "process" },
  { _type: "whySection", _key: "why" },
  { _type: "ctaSection", _key: "cta" },
];

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch(homePageQuery);
  return {
    title:
      page?.seoTitle ??
      "Spark Street Digital | Digital Marketing for Ohio Businesses",
    description:
      page?.seoDescription ??
      "Websites, SEO & GEO/AEO, paid media, and strategy for locally owned Ohio businesses. Senior-level digital marketing without the agency overhead.",
  };
}

export default async function Home() {
  const [page, siteSettings] = await Promise.all([
    client.fetch(homePageQuery),
    client.fetch(siteSettingsQuery),
  ]);

  const sections: SanitySection[] = page?.sections ?? fallbackSections;

  return <SectionRenderer sections={sections} siteSettings={siteSettings} />;
}
