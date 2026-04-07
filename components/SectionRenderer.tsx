import { PortableText } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import Hero, { type HeroData } from "@/components/sections/Hero";
import PageHero, { type PageHeroData } from "@/components/sections/PageHero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import Process, { type ProcessData } from "@/components/sections/Process";
import Industries, { type IndustriesData } from "@/components/sections/Industries";
import Why, { type WhyData } from "@/components/sections/Why";
import Pricing, { type PricingData } from "@/components/sections/Pricing";
import CTA, { type CtaData } from "@/components/sections/CTA";
import ProfileStory, { type ProfileStoryData } from "@/components/sections/ProfileStory";
import Experience, { type ExperienceData } from "@/components/sections/Experience";
import Values, { type ValuesData } from "@/components/sections/Values";
import ServicesDetail, { type ServiceDetailItem } from "@/components/sections/ServicesDetail";
import ContactForm, { type ContactFormData } from "@/components/sections/ContactForm";
import WhoIHelp, { type WhoIHelpData } from "@/components/sections/WhoIHelp";

export interface SiteSettingsForRenderer {
  email?: string;
  phone?: string;
  phoneHref?: string;
  location?: string;
  locationSubtext?: string;
  responseTime?: string;
  auditDeliveryTime?: string;
  linkedin?: string;
  twitter?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SanitySection = { _type: string; _key: string; [key: string]: any };

function RichTextSection({ data }: { data: { content?: TypedObject[] } }) {
  if (!data.content?.length) return null;
  return (
    <section className="section-padding bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-slate max-w-none">
        <PortableText value={data.content} />
      </div>
    </section>
  );
}

export default function SectionRenderer({
  sections,
  siteSettings,
}: {
  sections: SanitySection[];
  siteSettings?: SiteSettingsForRenderer | null;
}) {
  return (
    <>
      {sections.map((section) => {
        const key = section._key;

        switch (section._type) {
          case "heroSection":
            return <Hero key={key} data={section as unknown as HeroData} />;

          case "pageHeroSection":
            return <PageHero key={key} data={section as unknown as PageHeroData} />;

          case "statsSection":
            return <Stats key={key} data={section.stats ?? null} />;

          case "servicesSection":
            return <Services key={key} data={section.services ?? null} />;

          case "processSection":
            return <Process key={key} data={section as unknown as ProcessData} />;

          case "industriesSection":
            return <Industries key={key} data={section as unknown as IndustriesData} />;

          case "whySection":
            return <Why key={key} data={section as unknown as WhyData} />;

          case "pricingSection":
            return <Pricing key={key} data={section as unknown as PricingData} />;

          case "ctaSection":
            return (
              <CTA
                key={key}
                data={{
                  ...(section as unknown as CtaData),
                  email: siteSettings?.email,
                  phone: siteSettings?.phone,
                  phoneHref: siteSettings?.phoneHref,
                }}
              />
            );

          case "richTextSection":
            return <RichTextSection key={key} data={section as { content?: TypedObject[] }} />;

          case "profileStorySection":
            return <ProfileStory key={key} data={section as unknown as ProfileStoryData} />;

          case "experienceSection":
            return <Experience key={key} data={section as unknown as ExperienceData} />;

          case "valuesSection":
            return <Values key={key} data={section as unknown as ValuesData} />;

          case "servicesDetailSection":
            return <ServicesDetail key={key} data={(section.services as ServiceDetailItem[]) ?? null} />;

          case "whoIHelpSection":
            return <WhoIHelp key={key} data={section as unknown as WhoIHelpData} />;

          case "contactFormSection":
            return (
              <ContactForm
                key={key}
                data={{
                  ...(section as unknown as ContactFormData),
                  email: siteSettings?.email,
                  phone: siteSettings?.phone,
                  phoneHref: siteSettings?.phoneHref,
                  location: siteSettings?.location,
                  locationSubtext: siteSettings?.locationSubtext,
                  responseTime: siteSettings?.responseTime,
                  auditDeliveryTime: siteSettings?.auditDeliveryTime,
                  linkedin: siteSettings?.linkedin,
                }}
              />
            );

          default:
            return null;
        }
      })}
    </>
  );
}
