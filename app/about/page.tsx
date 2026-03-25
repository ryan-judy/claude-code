import type { Metadata } from "next";
import SectionRenderer, { type SanitySection } from "@/components/SectionRenderer";

export const metadata: Metadata = {
  title: "About Ryan Judy | Spark Street Digital — Ohio Businesses",
  description:
    "Senior-level digital marketing for locally owned Ohio businesses. Websites, SEO & GEO/AEO, paid media, and strategy — from someone who actually does the work.",
};

const sections: SanitySection[] = [
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

export default function AboutPage() {
  return <SectionRenderer sections={sections} />;
}
