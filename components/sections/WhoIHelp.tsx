import Link from "next/link";
import { ArrowRight, Monitor, Clock, ThumbsDown, EyeOff } from "lucide-react";

const personas = [
  {
    icon: Monitor,
    quote: "My website is embarrassing to share.",
    detail:
      "It was built years ago, looks broken on phones, and loads like it's on dial-up. You've been meaning to fix it — let's actually do it.",
  },
  {
    icon: Clock,
    quote: "I know I should be doing more online, but I don't have time.",
    detail:
      "You post occasionally and maybe run a few ads, but there's no real strategy behind it. You're busy running your business — let someone else handle the marketing.",
  },
  {
    icon: ThumbsDown,
    quote: "I tried an agency and felt like just another account.",
    detail:
      "You paid a retainer, got handed off to junior staff, and never quite understood what you were paying for. That's not how I work.",
  },
  {
    icon: EyeOff,
    quote: "My competitors show up on Google and I don't.",
    detail:
      "You search for your own services and they come up first. You know it's costing you customers — you just don't know where to start.",
  },
];

export default function WhoIHelp() {
  return (
    <section className="py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] text-sm font-semibold px-4 py-2 rounded-full mb-6">
            Built for businesses like yours
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] leading-tight mb-4">
            Does any of this{" "}
            <span className="text-[#1D4ED8]">sound familiar?</span>
          </h2>
          <p className="text-[#475569] text-lg leading-relaxed">
            I work with Ohio business owners who are tired of feeling behind
            online. If one of these sounds like you, we should talk.
          </p>
        </div>

        {/* Persona cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
          {personas.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="bg-white border border-gray-100 rounded-2xl p-7 hover:border-[#BFDBFE] hover:shadow-lg transition-all duration-300 flex gap-5"
              >
                <div className="shrink-0 w-11 h-11 rounded-xl bg-[#EFF6FF] flex items-center justify-center mt-0.5">
                  <Icon className="w-5 h-5 text-[#1D4ED8]" />
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
            <p className="text-white font-bold text-lg">
              Not sure where to start?
            </p>
            <p className="text-white/60 text-sm mt-1">
              A free website audit takes less than 48 hours and tells you exactly
              what&apos;s holding your business back online.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-bold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 group"
          >
            Get a Free Audit
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
