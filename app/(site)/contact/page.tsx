import type { Metadata } from "next";
import { client } from "@/lib/sanity/client";
import { contactPageQuery, siteSettingsQuery } from "@/lib/sanity/queries";
import SectionRenderer, { type SanitySection } from "@/components/SectionRenderer";

const fallbackSections: SanitySection[] = [
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

export async function generateMetadata(): Promise<Metadata> {
  const page = await client.fetch(contactPageQuery);
  return {
    title:
      page?.seoTitle ??
      "Contact | Spark Street Digital \u2014 Free Website Audit \u2014 Ohio",
    description:
      page?.seoDescription ??
      "Get a free website audit or start a conversation about your digital marketing. Based in Columbus, serving Ohio businesses.",
  };
}

export default async function ContactPage() {
  const [page, siteSettings] = await Promise.all([
    client.fetch(contactPageQuery),
    client.fetch(siteSettingsQuery),
  ]);

  const sections: SanitySection[] = page?.sections ?? fallbackSections;

  return <SectionRenderer sections={sections} siteSettings={siteSettings} />;
}
