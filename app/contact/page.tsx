import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { contactPageQuery, siteSettingsQuery } from "@/lib/sanity/queries";
import SectionRenderer, { type SanitySection } from "@/components/SectionRenderer";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const page = await client.fetch(contactPageQuery);
    return {
      title: page?.seoTitle ?? undefined,
      description: page?.seoDescription ?? undefined,
    };
  } catch {
    return {
      title: "Contact Ryan Judy | Free Website Audit — Columbus, Ohio",
      description:
        "Get a free website audit or start a conversation about your digital marketing. Based in Columbus, OH.",
    };
  }
}

const defaultSections: SanitySection[] = [
  {
    _type: "pageHeroSection",
    _key: "hero",
    badge: "Let\u2019s Talk",
    badgeIcon: "MessageCircle",
    headline: "Start the conversation.",
    headlineHighlight: "No pressure, ever.",
    subheadline:
      "Whether you want a free website audit or just want to talk through your digital marketing situation \u2014 I\u2019m happy to have an honest, no-pitch conversation.",
  },
  { _type: "contactFormSection", _key: "form" },
];

export default async function ContactPage() {
  const [page, settings] = await Promise.all([
    client.fetch(contactPageQuery).catch(() => null),
    client.fetch(siteSettingsQuery).catch(() => null),
  ]);

  const sections: SanitySection[] = page?.sections?.length ? page.sections : defaultSections;

  return <SectionRenderer sections={sections} siteSettings={settings} />;
}
