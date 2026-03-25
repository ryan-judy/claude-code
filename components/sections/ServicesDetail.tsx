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
  { id: "modernization", icon: "RefreshCw", iconBg: "bg-teal-50 text-teal-600", title: "Website Modernization", tagline: "Your website is your first impression — let's make it count.", description: "If your website is more than a few years old, it's probably costing you customers. Slow load times, broken mobile layouts, outdated content, no clear calls to action — these things add up. I'll assess what you have, fix what's hurting you, and bring it up to modern standards. You might not need a full rebuild — sometimes a focused modernization gets you 80% of the impact at a fraction of the cost.", capabilities: ["Full site audit — speed, mobile, SEO, UX, and conversion", "Design refresh or full custom rebuild depending on needs", "Mobile responsiveness fixes", "Page speed and Core Web Vitals improvements", "Content and copy updates", "Google Business Profile setup and optimization", "Basic on-page SEO foundation", "Contact forms, calls-to-action, and lead capture setup"], ctaText: "Get a Free Site Audit" },
  { id: "websites", icon: "Globe", iconBg: "bg-blue-50 text-blue-600", title: "Website Design & Development", tagline: "Your website should work as hard as you do.", description: "I design and build custom websites that look great, load fast, and turn visitors into customers. From strategy through design, development, and launch — I handle everything with a focus on measurable outcomes, not just aesthetics.", capabilities: ["Custom UI/UX design tailored to your brand and audience", "Mobile-first, responsive development", "Core Web Vitals optimization for speed and performance", "Headless CMS integration (Sanity, Contentful, and more)", "E-commerce and lead generation setups", "Conversion rate optimization (CRO)", "Ongoing maintenance and support"], ctaText: "Get Started" },
  { id: "ai", icon: "Sparkles", iconBg: "bg-purple-50 text-purple-600", title: "AI for Business", tagline: "AI is changing how businesses operate. Let's make sure you're not falling behind.", description: "AI isn't just a marketing tool — it's transforming how businesses run across every department. I help Ohio business owners understand where AI can have the biggest impact for them specifically, then implement the right tools and workflows. Whether that's content, customer service, operations, or marketing, the goal is the same: do more with less, faster.", capabilities: ["AI opportunity assessment across your business", "AI tool selection and setup (ChatGPT, Claude, and more)", "AI-assisted content creation workflows", "Customer-facing AI chatbots and assistants", "AI for internal operations and admin tasks", "AI-powered marketing and campaign support", "Ongoing AI strategy as the landscape evolves"], ctaText: "Get Started" },
{ id: "automation", icon: "Zap", iconBg: "bg-indigo-50 text-indigo-600", title: "Integrations & Automation", tagline: "Connect your tools. Eliminate the busywork.", description: "Most businesses are running on a patchwork of tools that don't talk to each other — and wasting hours on manual work that could be automated. I map your existing systems, identify the friction points, and build the connections and workflows that make everything run smoother. No coding required on your end.", capabilities: ["Business systems and workflow audit", "Third-party app integrations (CRMs, email, scheduling, payments, and more)", "Zapier, Make, and native integration setup", "Automated lead and inquiry routing", "Recurring task and process automation", "Data syncing between platforms", "Hands-on setup and documentation"], ctaText: "Get Started" },
  { id: "sem", icon: "Search", iconBg: "bg-green-50 text-green-600", title: "Paid Media", tagline: "Be there when buyers are searching. Every time.", description: "Strategic paid search that gets your business in front of the right people at exactly the right moment. I handle strategy, setup, ongoing management, and optimization — with full transparency on what you're spending and what you're getting.", capabilities: ["Google Ads campaign strategy and setup", "Microsoft/Bing Ads management", "Keyword research and competitive analysis", "Ad copy creation and A/B testing", "Landing page optimization", "Remarketing and audience targeting", "Budget management and monthly reporting"], ctaText: "Get Started" },
  { id: "seo", icon: "TrendingUp", iconBg: "bg-orange-50 text-orange-600", title: "SEO, GEO & AEO", tagline: "Rank everywhere your customers are searching — and asking.", description: "Sustainable, long-term visibility across traditional search, AI-generated answers, and generative engines. I handle the technical foundation, ongoing optimization, and the emerging GEO/AEO layer that determines whether your business shows up in AI-powered results — no shortcuts, just systematic work that compounds over time.", capabilities: ["Technical SEO audit and remediation", "Keyword research and strategy", "On-page optimization", "GEO & AEO optimization for AI search visibility", "Local SEO for Ohio businesses", "Link building and digital PR", "Monthly SEO/GEO reporting"], ctaText: "Get Started" },
  { id: "content", icon: "Megaphone", iconBg: "bg-yellow-50 text-yellow-600", title: "Content Strategy", tagline: "Content that earns attention — and trust.", description: "Good content doesn't happen by accident. I build content strategies rooted in what your customers are actually searching for, what questions they're asking, and what would make them choose you over a competitor. From blog posts to full editorial calendars, every piece has a purpose.", capabilities: ["Content audit — what you have and what's working", "Editorial calendar development", "Blog and long-form content creation", "Topic and keyword-driven content planning", "Content for AI search and featured snippets", "Landing page and service page copy", "Email and nurture content"], ctaText: "Get Started" },
  { id: "strategy", icon: "Lightbulb", iconBg: "bg-pink-50 text-pink-600", title: "Digital Marketing Support", tagline: "A plan you can actually execute — and measure.", description: "Strategy without execution is just a document. I build clear, practical digital marketing roadmaps that align your channels, budget, and team to your specific business goals — then help you execute them.", capabilities: ["Full digital marketing audit", "Competitive landscape analysis", "Channel strategy and prioritization", "Budget allocation recommendations", "90-day and annual roadmaps", "KPI framework and measurement plan", "Quarterly strategy reviews"], ctaText: "Get Started" },
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
