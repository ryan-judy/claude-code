import type { Metadata } from "next";
import SectionRenderer, { type SanitySection } from "@/components/SectionRenderer";

export const metadata: Metadata = {
  title: "Services | Spark Street Digital — Ohio",
  description:
    "Full-stack digital marketing services for locally owned Ohio businesses: websites, AI integration, paid media, SEO & GEO/AEO, content strategy, analytics, and more.",
};

const sections: SanitySection[] = [
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

export default function ServicesPage() {
  return <SectionRenderer sections={sections} />;
}
