import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  Bot,
  Search,
  TrendingUp,
  BarChart2,
  Megaphone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Services | Ryan Judy Digital Marketing — Columbus, OH",
  description:
    "Full-stack digital marketing services for Columbus businesses: websites, AI integration, SEM, SEO, content strategy, analytics, and more.",
};

const services = [
  {
    id: "websites",
    icon: Globe,
    title: "Website Design & Development",
    tagline: "Your website should work as hard as you do.",
    description:
      "I design and build custom websites that look great, load fast, and turn visitors into customers. From strategy through design, development, and launch — I handle everything with a focus on measurable outcomes, not just aesthetics.",
    capabilities: [
      "Custom UI/UX design tailored to your brand and audience",
      "Mobile-first, responsive development",
      "Core Web Vitals optimization for speed and performance",
      "Headless CMS integration (Sanity, Contentful, and more)",
      "E-commerce and lead generation setups",
      "Conversion rate optimization (CRO)",
      "Ongoing maintenance and support",
    ],
    accent: "from-blue-600 to-blue-800",
    iconBg: "bg-blue-50 text-blue-600",
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI Integration & Automation",
    tagline: "Use AI to do more with less — intelligently.",
    description:
      "AI isn't a buzzword — it's a genuine competitive advantage when deployed correctly. I help businesses identify where AI can add the most value and then implement practical solutions that save time, improve customer experience, and drive results.",
    capabilities: [
      "AI-powered chatbot setup and training",
      "Content creation workflows with AI assistance",
      "Lead qualification and routing automation",
      "Customer service automation",
      "AI-driven personalization",
      "Marketing workflow automation",
      "AI readiness audits",
    ],
    accent: "from-purple-600 to-purple-800",
    iconBg: "bg-purple-50 text-purple-600",
  },
  {
    id: "sem",
    icon: Search,
    title: "Search Engine Marketing (SEM)",
    tagline: "Be there when buyers are searching. Every time.",
    description:
      "Strategic paid search that gets your business in front of the right people at exactly the right moment. I handle strategy, setup, ongoing management, and optimization — with full transparency on what you're spending and what you're getting.",
    capabilities: [
      "Google Ads campaign strategy and setup",
      "Microsoft/Bing Ads management",
      "Keyword research and competitive analysis",
      "Ad copy creation and A/B testing",
      "Landing page optimization",
      "Remarketing and audience targeting",
      "Budget management and monthly reporting",
    ],
    accent: "from-green-600 to-green-800",
    iconBg: "bg-green-50 text-green-600",
  },
  {
    id: "seo",
    icon: TrendingUp,
    title: "SEO & Content Strategy",
    tagline: "Rank for the terms that drive real revenue.",
    description:
      "Sustainable, long-term organic visibility through technical excellence, strategic content, and authoritative link building. No shortcuts, no tricks — just thorough, systematic work that compounds over time.",
    capabilities: [
      "Technical SEO audit and remediation",
      "Keyword strategy and content planning",
      "On-page optimization",
      "Blog and content creation",
      "Local SEO for Columbus businesses",
      "Link building and digital PR",
      "Monthly SEO reporting",
    ],
    accent: "from-orange-600 to-orange-800",
    iconBg: "bg-orange-50 text-orange-600",
  },
  {
    id: "strategy",
    icon: Megaphone,
    title: "Digital Marketing Strategy",
    tagline: "A plan you can actually execute — and measure.",
    description:
      "Strategy without execution is just a document. I build clear, practical digital marketing roadmaps that align your channels, budget, and team to your specific business goals — then help you execute them.",
    capabilities: [
      "Full digital marketing audit",
      "Competitive landscape analysis",
      "Channel strategy and prioritization",
      "Budget allocation recommendations",
      "90-day and annual roadmaps",
      "KPI framework and measurement plan",
      "Quarterly strategy reviews",
    ],
    accent: "from-pink-600 to-pink-800",
    iconBg: "bg-pink-50 text-pink-600",
  },
  {
    id: "analytics",
    icon: BarChart2,
    title: "Analytics & Reporting",
    tagline: "Data that tells a story and drives decisions.",
    description:
      "Great marketing decisions require great data. I set up proper tracking from day one, build clear reporting dashboards, and deliver monthly insights that go beyond vanity metrics to focus on what actually matters.",
    capabilities: [
      "Google Analytics 4 setup and configuration",
      "Google Tag Manager implementation",
      "Custom dashboard creation (Looker Studio)",
      "Conversion tracking and attribution",
      "Monthly performance reports",
      "Data analysis and insights",
      "Reporting for executive stakeholders",
    ],
    accent: "from-amber-600 to-amber-800",
    iconBg: "bg-amber-50 text-amber-600",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-8">
              What I Do
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Every service you need
              <br />
              to{" "}
              <span className="text-[#D4AF37]">dominate online</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-10">
              From your first website to a full digital marketing engine — I
              bring deep expertise across every channel and discipline that
              matters for growing Columbus businesses.
            </p>
            {/* Quick nav */}
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors duration-200"
                >
                  {s.title.split(" ")[0]} {s.title.split(" ")[1]}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <div className="bg-white">
        {services.map((service, i) => {
          const Icon = service.icon;
          const isEven = i % 2 === 0;
          return (
            <section
              key={service.id}
              id={service.id}
              className={`py-20 ${isEven ? "bg-white" : "bg-[#F8FAFC]"}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Text */}
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div
                      className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                    <h2 className="text-4xl font-bold text-[#0A1628] mb-2">
                      {service.title}
                    </h2>
                    <p className="text-[#1D4ED8] font-semibold text-lg mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-[#475569] text-base leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg group"
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Capabilities */}
                  <div className={!isEven ? "lg:order-1" : ""}>
                    <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100">
                      <h3 className="text-[#0A1628] font-bold text-lg mb-6">
                        What&apos;s included
                      </h3>
                      <ul className="space-y-3">
                        {service.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                            <span className="text-[#475569] text-sm leading-relaxed">
                              {cap}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <CTA />
    </>
  );
}
