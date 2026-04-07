import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getIcon } from "@/lib/iconMap";

export interface WhoIHelpPersona {
  icon?: string;
  quote: string;
  detail: string;
}

export interface WhoIHelpData {
  badge?: string;
  headline?: string;
  headlineHighlight?: string;
  body?: string;
  personas?: WhoIHelpPersona[];
  ctaHeadline?: string;
  ctaBody?: string;
  primaryCtaText?: string;
}

const defaultPersonas: WhoIHelpPersona[] = [
  {
    icon: "Monitor",
    quote: "My website is embarrassing to share.",
    detail:
      "It was built years ago, looks broken on phones, and loads like it\u2019s on dial-up. You\u2019ve been meaning to fix it \u2014 let\u2019s actually do it.",
  },
  {
    icon: "Clock",
    quote: "I know I should be doing more online, but I don\u2019t have time.",
    detail:
      "You post occasionally and maybe run a few ads, but there\u2019s no real strategy behind it. You\u2019re busy running your business \u2014 let someone else handle the marketing.",
  },
  {
    icon: "ThumbsDown",
    quote: "I tried an agency and felt like just another account.",
    detail:
      "You paid a retainer, got handed off to junior staff, and never quite understood what you were paying for. That\u2019s not how I work.",
  },
  {
    icon: "EyeOff",
    quote: "My competitors show up on Google and I don\u2019t.",
    detail:
      "You search for your own services and they come up first. You know it\u2019s costing you customers \u2014 you just don\u2019t know where to start.",
  },
];

export default function WhoIHelp({ data }: { data?: WhoIHelpData | null }) {
  const badge = data?.badge ?? "Built for businesses like yours";
  const headline = data?.headline ?? "Does any of this";
  const headlineHighlight = data?.headlineHighlight ?? "sound familiar?";
  const body =
    data?.body ??
    "I work with Ohio business owners who are tired of feeling behind online. If one of these sounds like you, we should talk.";
  const personas = data?.personas?.length ? data.personas : defaultPersonas;
  const ctaHeadline = data?.ctaHeadline ?? "Not sure where to start?";
  const ctaBody =
    data?.ctaBody ??
    "A free website audit takes less than 48 hours and tells you exactly what\u2019s holding your business back online.";
  const primaryCtaText = data?.primaryCtaText ?? "Get a Free Audit";

  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            {badge}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] leading-tight mb-4">
            {headline}{" "}
            <span className="text-[#1D4ED8]">{headlineHighlight}</span>
          </h2>
          <p className="text-[#475569] text-lg leading-relaxed">{body}</p>
        </div>

        {/* Persona cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {personas.map((p, i) => {
            const Icon = getIcon(p.icon);
            return (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#BFDBFE] hover:shadow-lg transition-all duration-300 flex gap-5"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center mt-0.5">
                  {Icon && <Icon className="w-5 h-5 text-[#1D4ED8]" />}
                </div>
                <div>
                  <p className="text-[#0A1628] font-bold text-lg leading-snug mb-2">
                    &ldquo;{p.quote}&rdquo;
                  </p>
                  <p className="text-[#475569] text-sm leading-relaxed">
                    {p.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div className="bg-[#0A1628] rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="text-white font-bold text-lg">{ctaHeadline}</p>
            <p className="text-white/60 text-sm mt-1">{ctaBody}</p>
          </div>
          <Link
            href="/audit"
            className="shrink-0 inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-bold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 group"
          >
            {primaryCtaText}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
