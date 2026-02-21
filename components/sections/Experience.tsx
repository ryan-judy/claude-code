import { getIcon } from "@/lib/iconMap";

export interface ExpertiseItem {
  icon?: string;
  label: string;
  years: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
  highlight: string;
  accentColor?: string;
}

export interface ExperienceData {
  badge?: string;
  headline?: string;
  headlineHighlight?: string;
  subheadline?: string;
  expertiseItems?: ExpertiseItem[];
  experienceItems?: ExperienceItem[];
}

const accentMap: Record<string, { border: string; dot: string }> = {
  gold: { border: "border-[#D4AF37] bg-[#D4AF37]/5", dot: "bg-[#D4AF37]" },
  blue: { border: "border-[#1D4ED8] bg-[#EFF6FF]", dot: "bg-[#1D4ED8]" },
  gray: { border: "border-gray-200 bg-[#F8FAFC]", dot: "bg-[#64748B]" },
};

const defaultExpertiseItems: ExpertiseItem[] = [
  { icon: "Globe", label: "Web Design & Dev", years: "10+" },
  { icon: "Search", label: "SEO & Paid Search", years: "10+" },
  { icon: "BarChart2", label: "Analytics & GA4", years: "8+" },
  { icon: "Bot", label: "AI & Automation", years: "4+" },
  { icon: "TrendingUp", label: "Growth Strategy", years: "10+" },
  { icon: "Users", label: "Brand & Content", years: "8+" },
];

const defaultExperienceItems: ExperienceItem[] = [
  { period: "2024 \u2014 Present", role: "Founder", company: "Ryan Judy Digital Marketing", description: "Launched my own consultancy to bring senior-level digital strategy and execution directly to Columbus businesses \u2014 cutting out the agency overhead without cutting corners.", highlight: "Active consulting", accentColor: "gold" },
  { period: "2020 \u2014 2024", role: "Senior Digital Marketing Strategist", company: "Financial Services", description: "Led cross-channel digital marketing strategy for mid-market and enterprise clients. Managed $2M+ in annual ad spend across paid search, display, and social \u2014 driving measurable pipeline growth.", highlight: "$2M+ ad spend managed", accentColor: "blue" },
  { period: "2017 \u2014 2020", role: "Digital Marketing Manager", company: "Higher Education", description: "Oversaw digital marketing strategy for enrollment and advancement at a major Ohio university. Built data-driven campaigns that delivered measurable increases in prospective student engagement.", highlight: "Enrollment & brand campaigns", accentColor: "gray" },
  { period: "2014 \u2014 2017", role: "Digital Marketing Specialist", company: "Real Estate", description: "Developed and executed digital campaigns for a growing real estate firm \u2014 specializing in local SEO, paid search, and social media to build the brand's online presence from the ground up.", highlight: "Local SEO & paid search", accentColor: "gray" },
];

export default function Experience({ data }: { data?: ExperienceData | null }) {
  const badge = data?.badge ?? "Experience";
  const headline = data?.headline ?? "A decade of";
  const headlineHighlight = data?.headlineHighlight ?? "getting it done";
  const subheadline =
    data?.subheadline ??
    "Hands-on expertise across every major digital channel \u2014 built over 10+ years working with organizations from scrappy startups to major institutions.";
  const expertiseItems = data?.expertiseItems?.length ? data.expertiseItems : defaultExpertiseItems;
  const experienceItems = data?.experienceItems?.length ? data.experienceItems : defaultExperienceItems;

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left: headline + expertise grid */}
          <div className="lg:w-2/5">
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              {badge}
            </div>
            <h2 className="text-4xl font-bold text-[#0A1628] mb-4 leading-tight">
              {headline}{" "}
              <span className="text-[#1D4ED8]">{headlineHighlight}</span>
            </h2>
            <p className="text-[#475569] leading-relaxed mb-10">{subheadline}</p>

            <div className="grid grid-cols-2 gap-3">
              {expertiseItems.map((item) => {
                const Icon = getIcon(item.icon);
                return (
                  <div
                    key={item.label}
                    className="bg-white rounded-xl p-4 border border-gray-100 hover:border-[#BFDBFE] hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-center gap-2 mb-1">
                      {Icon && <Icon className="w-4 h-4 text-[#1D4ED8]" />}
                      <span className="text-[#92400E] text-xs font-bold">{item.years} yrs</span>
                    </div>
                    <p className="text-[#0A1628] font-semibold text-sm">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: experience cards */}
          <div className="lg:w-3/5 space-y-4">
            {experienceItems.map((item, i) => {
              const accent = accentMap[item.accentColor ?? "gray"] ?? accentMap.gray;
              return (
                <div
                  key={i}
                  className={`rounded-2xl p-6 border-2 ${accent.border} transition-all duration-300 hover:shadow-md`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-3 h-3 rounded-full ${accent.dot} mt-1.5 shrink-0`} />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <span className="text-[#1D4ED8] text-xs font-bold uppercase tracking-wider">
                          {item.period}
                        </span>
                        <span className="inline-flex items-center bg-white/70 text-[#475569] text-xs font-medium px-2.5 py-0.5 rounded-full border border-gray-200">
                          {item.highlight}
                        </span>
                      </div>
                      <h3 className="text-[#0A1628] font-bold text-lg mb-0.5">{item.role}</h3>
                      <p className="text-[#475569] text-sm font-medium mb-2">{item.company}</p>
                      <p className="text-[#475569] text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
