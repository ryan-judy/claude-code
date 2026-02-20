import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Award,
  Users,
  TrendingUp,
  Heart,
  Coffee,
  Briefcase,
} from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Ryan Judy | Digital Marketing Strategist, Columbus Ohio",
  description:
    "10+ years of digital marketing experience across financial services, higher education, real estate, clean tech, and startups. Based in Columbus, serving all of Ohio.",
};

const timeline = [
  {
    period: "2024 — Present",
    role: "Founder, Ryan Judy Digital Marketing",
    description:
      "Launched my own consultancy to help Ohio businesses build powerful digital presences. Bringing senior-level strategy and hands-on execution directly to businesses that deserve better than they've been getting.",
  },
  {
    period: "2020 — 2024",
    role: "Senior Digital Marketing Strategist",
    description:
      "Led digital marketing strategy for mid-market and enterprise clients across financial services and clean tech. Managed $2M+ in annual ad spend and built high-performing cross-channel programs.",
  },
  {
    period: "2017 — 2020",
    role: "Digital Marketing Manager — Higher Education",
    description:
      "Oversaw digital marketing for enrollment and advancement at a major Ohio university. Built data-driven campaigns that drove measurable increases in prospective student engagement.",
  },
  {
    period: "2014 — 2017",
    role: "Digital Marketing Specialist — Real Estate",
    description:
      "Developed and executed digital campaigns for a growing real estate firm. Specialized in local SEO, paid search, and social media — building the brand's online presence from the ground up.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Genuine Care",
    description:
      "I treat every client's business like it's my own. Your success is my success — this isn't just a job.",
  },
  {
    icon: TrendingUp,
    title: "Results Over Activity",
    description:
      "I don't bill you for being busy. Every action connects to an outcome that matters to your business.",
  },
  {
    icon: Users,
    title: "True Partnership",
    description:
      "I'm not a vendor. I'm an extension of your team — available, responsive, and invested.",
  },
  {
    icon: Award,
    title: "Continuous Learning",
    description:
      "Digital marketing never stops evolving. I stay ahead of the curve so you don't have to.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient dot-pattern pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-8">
              <MapPin className="w-4 h-4 text-[#F59E0B]" />
              Columbus, Ohio
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Hi, I&apos;m Ryan.{" "}
              <br />
              <span className="text-[#F59E0B]">I love helping</span>
              <br />
              Ohio businesses win online.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Over 10 years building digital marketing programs that actually
              move the needle — across industries, organization sizes, and
              channels. Now I&apos;m focused entirely on helping Ohio businesses get
              the digital presence they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual placeholder */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-[#0A1628] overflow-hidden flex items-end">
                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-24 h-24 rounded-full bg-[#F59E0B]/20 blur-xl" />
                <div className="absolute bottom-20 left-8 w-32 h-32 rounded-full bg-white/5 blur-xl" />

                <div className="relative z-10 p-8 w-full">
                  <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 mb-4">
                    <Coffee className="w-8 h-8 text-[#F59E0B]" />
                    <div>
                      <div className="text-white font-bold">Ryan Judy</div>
                      <div className="text-white/60 text-sm">Digital Marketing Strategist</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { value: "10+", label: "Years" },
                      { value: "5", label: "Verticals" },
                      { value: "Ohio", label: "Home" },
                    ].map((s) => (
                      <div key={s.label} className="bg-white/10 rounded-lg p-3 text-center border border-white/10">
                        <div className="text-white font-bold text-lg">{s.value}</div>
                        <div className="text-white/50 text-xs">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-6 -right-6 bg-[#F59E0B] text-[#0A1628] font-bold text-sm px-5 py-3 rounded-xl shadow-lg">
                Columbus, OH based
              </div>
            </div>

            {/* Story text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                My Story
              </div>
              <h2 className="text-4xl font-bold text-[#0A1628] mb-6 leading-tight">
                Built from{" "}
                <span className="text-[#1D4ED8]">real experience,</span>
                <br />
                not theory
              </h2>
              <div className="space-y-4 text-[#64748B] leading-relaxed">
                <p>
                  I started my career in digital marketing over a decade ago —
                  back when &quot;digital marketing&quot; was mostly just email
                  blasts and basic SEO. I&apos;ve grown with the industry through
                  every major shift: social media, mobile-first, content
                  marketing, programmatic advertising, and now AI.
                </p>
                <p>
                  Over the years I&apos;ve worked with organizations of all sizes —
                  from scrappy startups to major universities and large financial
                  institutions. I&apos;ve built marketing programs, managed
                  significant ad budgets, led teams, and had the privilege of
                  seeing real results for real businesses.
                </p>
                <p>
                  What I noticed over and over again was this: small and
                  medium-sized Ohio businesses were getting underserved. Either
                  they couldn&apos;t afford agency prices, or they were paying for
                  strategy they never saw executed, or they were handed off to
                  junior staff.
                </p>
                <p className="font-semibold text-[#0A1628]">
                  So I started Ryan Judy Digital Marketing to fix that. Ohio
                  businesses deserve access to senior digital marketing
                  expertise — and that&apos;s exactly what I provide.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg group"
                >
                  Let&apos;s Work Together
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <Briefcase className="w-4 h-4" />
              Experience
            </div>
            <h2 className="text-4xl font-bold text-[#0A1628] mb-4">
              A decade of getting it done
            </h2>
            <p className="text-[#64748B] text-lg">
              Every role made me better. Here&apos;s the journey.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-gradient-to-b from-[#1D4ED8] to-[#F59E0B]" />

              <div className="space-y-8">
                {timeline.map((item, i) => (
                  <div key={i} className="relative flex gap-6 pl-14">
                    {/* Dot */}
                    <div className="absolute left-0 top-1 w-12 h-12 rounded-full bg-white border-2 border-[#1D4ED8] flex items-center justify-center shadow-sm">
                      <div className={`w-3 h-3 rounded-full ${i === 0 ? "bg-[#F59E0B]" : "bg-[#1D4ED8]"}`} />
                    </div>

                    <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-[#BFDBFE] hover:shadow-md transition-all duration-300 flex-1">
                      <div className="text-[#1D4ED8] text-xs font-bold uppercase tracking-wider mb-1">
                        {item.period}
                      </div>
                      <div className="text-[#0A1628] font-bold text-lg mb-2">
                        {item.role}
                      </div>
                      <p className="text-[#64748B] text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-4">
              How I Operate
            </div>
            <h2 className="text-4xl font-bold text-white mb-4">
              What I believe about{" "}
              <span className="text-[#F59E0B]">great marketing</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={i}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#1D4ED8]/40 rounded-xl p-6 text-center transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1D4ED8]/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#F59E0B]" />
                  </div>
                  <h3 className="text-white font-bold mb-2">{value.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
