import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { aboutPageQuery, siteSettingsQuery } from "@/lib/sanity/queries";
import SectionRenderer, { type SanitySection } from "@/components/SectionRenderer";

const fallbackSections: SanitySection[] = [
  {
    _type: "pageHeroSection",
    _key: "hero",
    badge: "Columbus, OH",
    badgeIcon: "MapPin",
    headline: "Hi, I\u2019m Ryan.",
    headlineHighlight: "I help Ohio businesses win online.",
    subheadline:
      "I help locally owned Ohio businesses build a stronger online presence \u2014 with real strategy, hands-on execution, and results you can actually measure.",
  },
  { _type: "profileStorySection", _key: "story" },
  { _type: "valuesSection", _key: "values" },
  { _type: "ctaSection", _key: "cta" },
];

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch(aboutPageQuery);
  return {
    title:
      page?.seoTitle ??
      "About Ryan Judy | Spark Street Digital \u2014 Ohio Businesses",
    description:
      page?.seoDescription ??
      "Senior-level digital marketing for locally owned Ohio businesses. Websites, SEO & GEO/AEO, paid media, and strategy \u2014 from someone who actually does the work.",
  };
}

export default async function AboutPage() {
  const [page, siteSettings] = await Promise.all([
    client.fetch(aboutPageQuery),
    client.fetch(siteSettingsQuery),
  ]);

  const sections: SanitySection[] = page?.sections ?? fallbackSections;

  return <SectionRenderer sections={sections} siteSettings={siteSettings} />;
}
