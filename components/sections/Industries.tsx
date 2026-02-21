import { CheckCircle2 } from "lucide-react";
import { getIcon } from "@/lib/iconMap";

export interface Industry {
  icon?: string;
  name: string;
  description: string;
  wins: string[];
}

export interface IndustriesData {
  badge?: string;
  headline?: string;
  headlineHighlight?: string;
  subheadline?: string;
  list?: Industry[];
  moreCardHeadline?: string;
  moreCardBody?: string;
  moreCardCta?: string;
}

const defaultIndustries: Industry[] = [
  { icon: "Building2", name: "Financial Services", description: "Banks, credit unions, mortgage companies, and fintech startups. I understand compliance-sensitive marketing and trust-based conversion.", wins: ["Lead generation systems", "Compliance-friendly content", "Multi-location SEO"] },
  { icon: "GraduationCap", name: "Higher Education", description: "Universities, community colleges, and professional training programs. Enrollment marketing, student journey optimization, and brand strategy.", wins: ["Enrollment funnel optimization", "Student recruitment campaigns", "Academic content strategy"] },
  { icon: "Home", name: "Real Estate", description: "Agents, brokers, developers, and property management companies. High-intent SEM, local SEO, and lead nurturing that actually closes deals.", wins: ["Local SEO dominance", "High-intent PPC", "CRM integration"] },
  { icon: "Leaf", name: "Clean Tech", description: "Solar, EV, sustainability-focused companies. Mission-driven storytelling paired with demand generation for complex, considered purchases.", wins: ["B2B demand generation", "Thought leadership content", "LinkedIn campaigns"] },
  { icon: "Rocket", name: "Startups", description: "Early-stage and growth-stage startups that need to move fast and prove traction. Lean, high-impact strategy without enterprise overhead.", wins: ["MVP launch marketing", "Growth hacking", "Investor-ready metrics"] },
];

export default function Industries({ data }: { data?: IndustriesData | null }) {
  const badge = data?.badge ?? "Industry Experience";
  const headline = data?.headline ?? "Deep experience across";
  const headlineHighlight = data?.headlineHighlight ?? "industries that matter";
  const subheadline =
    data?.subheadline ??
    "Every industry has its nuances. I\u2019ve spent over a decade learning the marketing dynamics across multiple verticals \u2014 so I bring relevant context from day one.";
  const industries = data?.list?.length ? data.list : defaultIndustries;
  const moreCardHeadline = data?.moreCardHeadline ?? "Don\u2019t see your vertical?";
  const moreCardBody =
    data?.moreCardBody ??
    "The fundamentals of great digital marketing apply across all industries. Let\u2019s talk about what\u2019s possible for your specific business.";
  const moreCardCta = data?.moreCardCta ?? "Let\u2019s Talk";

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] text-sm font-semibold px-4 py-2 rounded-full mb-4">
            {badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-4">
            {headline}{" "}
            <span className="text-[#1D4ED8]">{headlineHighlight}</span>
          </h2>
          <p className="text-[#475569] text-lg leading-relaxed">{subheadline}</p>
        </div>

        {/* Industry grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => {
            const Icon = getIcon(industry.icon);
            return (
              <div
                key={i}
                className="bg-[#F8FAFC] hover:bg-white border border-transparent hover:border-[#E2E8F0] hover:shadow-lg rounded-2xl p-6 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center group-hover:bg-[#1D4ED8] transition-colors duration-300">
                    {Icon && (
                      <Icon className="w-5 h-5 text-[#1D4ED8] group-hover:text-white transition-colors duration-300" />
                    )}
                  </div>
                  <h3 className="text-[#0A1628] font-bold text-lg">{industry.name}</h3>
                </div>

                <p className="text-[#475569] text-sm leading-relaxed mb-4">{industry.description}</p>

                <div className="space-y-1.5">
                  {industry.wins.map((win) => (
                    <div key={win} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                      <span className="text-[#475569] text-sm">{win}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* More card */}
          <div className="bg-gradient-to-br from-[#1D4ED8] to-[#3B82F6] rounded-2xl p-6 flex flex-col justify-between text-white">
            <div>
              <p className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-2">
                Your Industry
              </p>
              <h3 className="text-2xl font-bold mb-3">{moreCardHeadline}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{moreCardBody}</p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-[#1D4ED8] font-bold text-sm px-5 py-2.5 rounded-lg mt-6 hover:bg-[#F59E0B] hover:text-[#0A1628] transition-all duration-200 self-start"
            >
              {moreCardCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
