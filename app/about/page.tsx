import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { aboutPageQuery, siteSettingsQuery } from "@/lib/sanity/queries";
import SectionRenderer, { type SanitySection } from "@/components/SectionRenderer";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const page = await client.fetch(aboutPageQuery);
    return {
      title: page?.seoTitle ?? undefined,
      description: page?.seoDescription ?? undefined,
    };
  } catch {
    return {
      title: "About Ryan Judy | Digital Marketing Strategist, Columbus OH",
      description: "10+ years of digital marketing experience. Based in Columbus, OH.",
    };
  }
}

const defaultSections: SanitySection[] = [
  {
    _type: "pageHeroSection",
    _key: "hero",
    badge: "Columbus, OH",
    badgeIcon: "MapPin",
    headline: "Hi, I\u2019m Ryan.",
    headlineHighlight: "I help Columbus businesses win online.",
    subheadline:
      "Digital strategist and marketing technologist with 10+ years building programs that actually move the needle \u2014 across industries, channels, and organization sizes.",
  },
  { _type: "profileStorySection", _key: "story" },
  { _type: "experienceSection", _key: "experience" },
  { _type: "valuesSection", _key: "values" },
  { _type: "ctaSection", _key: "cta" },
];

export default async function AboutPage() {
  const [page, settings] = await Promise.all([
    client.fetch(aboutPageQuery).catch(() => null),
    client.fetch(siteSettingsQuery).catch(() => null),
  ]);

  const sections: SanitySection[] = page?.sections?.length ? page.sections : defaultSections;

  return <SectionRenderer sections={sections} siteSettings={settings} />;
}
