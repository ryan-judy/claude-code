import type { Metadata } from "next";
import SectionRenderer, { type SanitySection } from "@/components/SectionRenderer";

export const metadata: Metadata = {
  title: "Spark Street Digital | Digital Marketing for Ohio Businesses",
  description:
    "Websites, SEO & GEO/AEO, paid media, and strategy for locally owned Ohio businesses. Senior-level digital marketing without the agency overhead.",
};

const sections: SanitySection[] = [
  { _type: "heroSection", _key: "hero" },
  { _type: "servicesSection", _key: "services" },
  { _type: "whoIHelpSection", _key: "whoihelp" },
  { _type: "processSection", _key: "process" },
  { _type: "whySection", _key: "why" },
  { _type: "ctaSection", _key: "cta" },
];

export default function Home() {
  return <SectionRenderer sections={sections} />;
}
