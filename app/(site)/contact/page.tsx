import type { Metadata } from "next";
import SectionRenderer, { type SanitySection } from "@/components/SectionRenderer";

export const metadata: Metadata = {
  title: "Contact | Spark Street Digital — Free Website Audit — Ohio",
  description:
    "Get a free website audit or start a conversation about your digital marketing. Based in Columbus, serving Ohio businesses.",
};

const sections: SanitySection[] = [
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

export default function ContactPage() {
  return <SectionRenderer sections={sections} />;
}
