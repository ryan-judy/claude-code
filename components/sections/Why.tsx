import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getIcon } from "@/lib/iconMap";

export interface WhyReason {
  icon?: string;
  title: string;
  description: string;
}

export interface WhyData {
  badge?: string;
  headline?: string;
  headlineHighlight?: string;
  body?: string;
  quote?: string;
  quoteAuthor?: string;
  reasons?: WhyReason[];
}

const defaultReasons: WhyReason[] = [
  { icon: "MapPin", title: "Ohio-First Mindset", description: "We live and work in Ohio. Local knowledge means better strategies, better connections, and a genuine investment in your success." },
  { icon: "ShieldCheck", title: "No Fluff, Just Results", description: "We're not selling you a retainer to run basic reports. Every hour goes toward moving your business forward with honest, transparent communication." },
  { icon: "Lightbulb", title: "Strategy Meets Execution", description: "Most consultants strategize. Most agencies execute. We do both — bringing senior-level thinking and hands-on implementation without the overhead." },
  { icon: "LineChart", title: "Data-Driven Everything", description: "Decisions based on data, not gut feelings or trends. We set up proper measurement from day one so you always know what's actually working." },
  { icon: "Users", title: "Real Partnership", description: "You get direct access to us — not account managers or junior staff. We treat your business like we're a member of your team, not a vendor." },
  { icon: "Clock", title: "10+ Years, No Fluff", description: "A decade of experience means we've already made (and learned from) the mistakes you don't want to pay for. You get senior expertise from day one." },
];

export default function Why({ data }: { data?: WhyData | null }) {
  const badge = data?.badge ?? "Why Spark Street Digital";
  const headline = data?.headline ?? "Senior expertise without the";
  const headlineHighlight = data?.headlineHighlight ?? "agency markup";
  const body =
    data?.body ??
    "Big agencies have big overhead — account managers, layers of approvals, junior staff executing on your account. With us, you get seasoned digital marketing veterans working directly on your business. Period.";
  const quote =
    data?.quote ??
    "\u201cI started Spark Street Digital because I believe local and small businesses should take advantage of digital services to sustain and grow their company.\u201d";
  const quoteAuthor = data?.quoteAuthor ?? "Ryan Judy, Founder";
  const reasons = data?.reasons?.length ? data.reasons : defaultReasons;

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              {badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] mb-6 leading-tight">
              {headline}
              <br />
              <span className="text-[#1D4ED8]">{headlineHighlight}</span>
            </h2>
            <p className="text-[#475569] text-lg leading-relaxed mb-8">{body}</p>
            <blockquote className="border-l-4 border-[#F59E0B] pl-5 py-2 mb-8">
              <p className="text-[#0A1628] font-medium italic text-lg">{quote}</p>
              <footer className="text-[#475569] text-sm mt-2">— {quoteAuthor}</footer>
            </blockquote>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#1D4ED8] font-semibold hover:gap-3 transition-all duration-200"
            >
              Meet the team
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right: Reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => {
              const Icon = getIcon(reason.icon);
              return (
                <div
                  key={i}
                  className="bg-[#F8FAFC] hover:bg-[#EFF6FF] border border-gray-100 hover:border-[#BFDBFE] rounded-xl p-5 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {Icon && (
                      <Icon className="w-5 h-5 text-[#1D4ED8] group-hover:scale-110 transition-transform duration-200 shrink-0" />
                    )}
                    <h3 className="text-[#0A1628] font-semibold text-sm">{reason.title}</h3>
                  </div>
                  <p className="text-[#475569] text-xs leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
