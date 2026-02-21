import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { getIcon } from "@/lib/iconMap";

export interface ServiceDetailItem {
  id?: string;
  icon?: string;
  iconBg?: string;
  title: string;
  tagline?: string;
  description?: string;
  capabilities?: string[];
  ctaText?: string;
}

const defaultServices: ServiceDetailItem[] = [
  { id: "websites", icon: "Globe", iconBg: "bg-blue-50 text-blue-600", title: "Website Design & Development", tagline: "Your website should work as hard as you do.", description: "I design and build custom websites that look great, load fast, and turn visitors into customers. From strategy through design, development, and launch — I handle everything with a focus on measurable outcomes, not just aesthetics.", capabilities: ["Custom UI/UX design tailored to your brand and audience", "Mobile-first, responsive development", "Core Web Vitals optimization for speed and performance", "Headless CMS integration (Sanity, Contentful, and more)", "E-commerce and lead generation setups", "Conversion rate optimization (CRO)", "Ongoing maintenance and support"], ctaText: "Get Started" },
  { id: "ai", icon: "Bot", iconBg: "bg-purple-50 text-purple-600", title: "AI Integration & Automation", tagline: "Use AI to do more with less — intelligently.", description: "AI isn't a buzzword — it's a genuine competitive advantage when deployed correctly. I help businesses identify where AI can add the most value and then implement practical solutions that save time, improve customer experience, and drive results.", capabilities: ["AI-powered chatbot setup and training", "Content creation workflows with AI assistance", "Lead qualification and routing automation", "Customer service automation", "AI-driven personalization", "Marketing workflow automation", "AI readiness audits"], ctaText: "Get Started" },
  { id: "sem", icon: "Search", iconBg: "bg-green-50 text-green-600", title: "Search Engine Marketing (SEM)", tagline: "Be there when buyers are searching. Every time.", description: "Strategic paid search that gets your business in front of the right people at exactly the right moment. I handle strategy, setup, ongoing management, and optimization — with full transparency on what you're spending and what you're getting.", capabilities: ["Google Ads campaign strategy and setup", "Microsoft/Bing Ads management", "Keyword research and competitive analysis", "Ad copy creation and A/B testing", "Landing page optimization", "Remarketing and audience targeting", "Budget management and monthly reporting"], ctaText: "Get Started" },
  { id: "seo", icon: "TrendingUp", iconBg: "bg-orange-50 text-orange-600", title: "SEO & Content Strategy", tagline: "Rank for the terms that drive real revenue.", description: "Sustainable, long-term organic visibility through technical excellence, strategic content, and authoritative link building. No shortcuts, no tricks — just thorough, systematic work that compounds over time.", capabilities: ["Technical SEO audit and remediation", "Keyword strategy and content planning", "On-page optimization", "Blog and content creation", "Local SEO for Columbus businesses", "Link building and digital PR", "Monthly SEO reporting"], ctaText: "Get Started" },
  { id: "strategy", icon: "Megaphone", iconBg: "bg-pink-50 text-pink-600", title: "Digital Marketing Strategy", tagline: "A plan you can actually execute — and measure.", description: "Strategy without execution is just a document. I build clear, practical digital marketing roadmaps that align your channels, budget, and team to your specific business goals — then help you execute them.", capabilities: ["Full digital marketing audit", "Competitive landscape analysis", "Channel strategy and prioritization", "Budget allocation recommendations", "90-day and annual roadmaps", "KPI framework and measurement plan", "Quarterly strategy reviews"], ctaText: "Get Started" },
  { id: "analytics", icon: "BarChart2", iconBg: "bg-amber-50 text-amber-600", title: "Analytics & Reporting", tagline: "Data that tells a story and drives decisions.", description: "Great marketing decisions require great data. I set up proper tracking from day one, build clear reporting dashboards, and deliver monthly insights that go beyond vanity metrics to focus on what actually matters.", capabilities: ["Google Analytics 4 setup and configuration", "Google Tag Manager implementation", "Custom dashboard creation (Looker Studio)", "Conversion tracking and attribution", "Monthly performance reports", "Data analysis and insights", "Reporting for executive stakeholders"], ctaText: "Get Started" },
];

export default function ServicesDetail({ data }: { data?: ServiceDetailItem[] | null }) {
  const services = data?.length ? data : defaultServices;

  return (
    <div className="bg-white">
      {services.map((service, i) => {
        const Icon = getIcon(service.icon);
        const isEven = i % 2 === 0;
        return (
          <section
            key={service.id ?? i}
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
                    className={`w-14 h-14 rounded-2xl ${service.iconBg ?? "bg-blue-50 text-blue-600"} flex items-center justify-center mb-6`}
                  >
                    {Icon && <Icon className="w-7 h-7" />}
                  </div>
                  <h2 className="text-4xl font-bold text-[#0A1628] mb-2">{service.title}</h2>
                  <p className="text-[#1D4ED8] font-semibold text-lg mb-4">{service.tagline}</p>
                  <p className="text-[#475569] text-base leading-relaxed mb-8">{service.description}</p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg group"
                  >
                    {service.ctaText ?? "Get Started"}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Capabilities */}
                <div className={!isEven ? "lg:order-1" : ""}>
                  <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-gray-100">
                    <h3 className="text-[#0A1628] font-bold text-lg mb-6">What&apos;s included</h3>
                    <ul className="space-y-3">
                      {(service.capabilities ?? []).map((cap) => (
                        <li key={cap} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#16A34A] shrink-0 mt-0.5" />
                          <span className="text-[#475569] text-sm leading-relaxed">{cap}</span>
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
  );
}
