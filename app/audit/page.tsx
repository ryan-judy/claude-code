import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight, CheckCircle2, Zap, Globe, Smartphone, Search, TrendingUp,
  MapPin, MessageSquare, MousePointerClick, BarChart2, Users, Clock,
  FileText, Shield, ChevronDown,
} from "lucide-react";
import AuditForm from "@/components/AuditForm";

export const metadata: Metadata = {
  title: "Free Website Audit | Spark Street Digital — Ohio",
  description:
    "Get a free, no-fluff website audit covering 10 key areas: performance, SEO, GEO/AEO, mobile, content, conversions, and more. Delivered within 48 hours.",
};

const auditAreas = [
  {
    icon: Zap,
    color: "bg-amber-50 text-amber-600",
    title: "Website Performance & Speed",
    desc: "Core Web Vitals, load times, hosting quality, and what's slowing you down. Slow sites lose visitors before they even read a word.",
  },
  {
    icon: Smartphone,
    color: "bg-blue-50 text-blue-600",
    title: "Mobile Experience",
    desc: "How your site looks, feels, and functions on phones and tablets. Over 60% of local searches happen on mobile — this one matters.",
  },
  {
    icon: Search,
    color: "bg-orange-50 text-orange-600",
    title: "Technical SEO",
    desc: "Crawlability, indexing, site structure, meta tags, schema markup, and the under-the-hood issues that keep you off Google's radar.",
  },
  {
    icon: TrendingUp,
    color: "bg-green-50 text-green-600",
    title: "On-Page SEO & Content",
    desc: "Keyword targeting, heading structure, internal linking, and whether your content is actually optimized for what your customers are searching for.",
  },
  {
    icon: Globe,
    color: "bg-purple-50 text-purple-600",
    title: "GEO & AEO — AI Search Visibility",
    desc: "How your business shows up in AI-powered search results (ChatGPT, Google AI Overviews, Perplexity). A growing source of traffic most businesses ignore.",
  },
  {
    icon: MapPin,
    color: "bg-red-50 text-red-600",
    title: "Local Search & Google Business Profile",
    desc: "Your GBP completeness, review profile, local citation consistency, and how you're showing up in map results and local pack rankings.",
  },
  {
    icon: MessageSquare,
    color: "bg-teal-50 text-teal-600",
    title: "Content & Messaging",
    desc: "Whether your site clearly communicates who you are, what you do, who you serve, and why someone should choose you over everyone else.",
  },
  {
    icon: MousePointerClick,
    color: "bg-pink-50 text-pink-600",
    title: "Conversion Optimization",
    desc: "Your calls-to-action, contact forms, user flow, and whether your site is actually designed to turn visitors into leads — or just look nice.",
  },
  {
    icon: BarChart2,
    color: "bg-indigo-50 text-indigo-600",
    title: "Analytics & Tracking",
    desc: "Whether GA4 is set up correctly, key events are being tracked, and you actually have the data needed to make good decisions.",
  },
  {
    icon: Users,
    color: "bg-cyan-50 text-cyan-600",
    title: "Competitor Snapshot",
    desc: "A quick look at how your top local competitors are showing up online — so you can see exactly where the gap is and what's worth closing.",
  },
];

const deliverables = [
  "A written report covering all 10 audit areas",
  "Specific findings — not vague suggestions",
  "A prioritized list of what to fix first",
  "Quick wins you can act on immediately",
  "Bigger opportunities worth investing in",
  "A plain-English summary you can actually use",
];

const steps = [
  {
    number: "01",
    title: "Submit your URL",
    desc: "Fill out the form below with your website URL and a little context about your business. The more you share, the more useful the audit.",
  },
  {
    number: "02",
    title: "I do the work",
    desc: "I personally review your site across all 10 areas — no automated tool, no junior staff. You get a real analysis from someone who knows what they're looking at.",
  },
  {
    number: "03",
    title: "You get your report",
    desc: "Within 48 hours, I send you a detailed written report with findings and prioritized recommendations. No sales pitch attached — just honest insight.",
  },
];

const faqs = [
  {
    q: "Is the audit really free?",
    a: "Yes, completely. There's no catch, no hidden fee, and no obligation to hire me afterward. I offer it because it's a useful way for business owners to understand where they stand — and for me to show you what I actually know.",
  },
  {
    q: "How is this different from an automated audit tool?",
    a: "Automated tools flag technical issues — they can't tell you whether your messaging makes sense, whether your CTAs are in the right place, or why your competitor is outranking you. This is a manual review done by a real person.",
  },
  {
    q: "What do you need from me?",
    a: "Just your website URL and a brief description of your business and goals. If you want, you can share access to GA4 for a deeper analytics review — but it's not required.",
  },
  {
    q: "How long does it take?",
    a: "I deliver most audits within 48 hours of receiving your request. If I need more time, I'll let you know upfront.",
  },
  {
    q: "Do I need to be an Ohio business?",
    a: "I focus on locally owned Ohio businesses, but I'm happy to help any small business owner who wants an honest look at their digital presence.",
  },
];

export default function AuditPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
              Free — No obligation — Delivered within 48 hours
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Find out exactly what&apos;s holding your{" "}
              <span className="gradient-text">website back.</span>
            </h1>
            <p className="text-white text-xl leading-relaxed mb-10 max-w-2xl">
              A free, hands-on audit of your website across 10 key areas —
              performance, SEO, GEO/AEO, mobile, content, conversions, and more.
              Written by a real person, not a robot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#request"
                className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/30 group"
              >
                <Zap className="w-5 h-5 fill-current" />
                Get My Free Audit
              </a>
              <a
                href="#whats-included"
                className="inline-flex items-center justify-center gap-2 text-white font-semibold text-base px-4 py-4 border-b border-white/20 hover:border-white/60 transition-colors"
              >
                See what&apos;s included
                <ChevronDown className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section id="whats-included" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              What&apos;s covered
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A1628] leading-tight mb-4">
              10 areas. One honest report.{" "}
              <span className="text-[#1D4ED8]">No fluff.</span>
            </h2>
            <p className="text-[#475569] text-lg leading-relaxed">
              Most website audits are automated reports full of technical jargon.
              This is a manual review — I look at every dimension of your online
              presence and tell you what&apos;s actually going on.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {auditAreas.map((area, i) => {
              const Icon = area.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-[#BFDBFE] hover:shadow-lg transition-all duration-300"
                >
                  <div className={`w-10 h-10 rounded-xl ${area.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-[#0A1628] font-bold mb-2">{area.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{area.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What you receive */}
      <section className="py-20 bg-[#0A1628]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
                The deliverable
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                A report you can actually{" "}
                <span className="text-[#F59E0B]">do something with.</span>
              </h2>
              <p className="text-white text-lg leading-relaxed mb-8">
                You won&apos;t get a 40-page PDF full of screenshots and technical
                scores. You&apos;ll get a clear, written report that tells you what
                matters, what to fix first, and what to invest in next.
              </p>
              <ul className="space-y-3">
                {deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#F59E0B] shrink-0 mt-0.5" />
                    <span className="text-white text-sm">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#1D4ED8] flex items-center justify-center">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold">Website Audit Report</div>
                  <div className="text-white/50 text-sm">Your Business — sparkstreet.digital</div>
                </div>
              </div>
              {[
                { area: "Performance & Speed", status: "Issues found", color: "text-red-400" },
                { area: "Mobile Experience", status: "Needs attention", color: "text-amber-400" },
                { area: "Technical SEO", status: "Issues found", color: "text-red-400" },
                { area: "On-Page SEO", status: "Opportunities", color: "text-amber-400" },
                { area: "GEO & AEO", status: "Not optimized", color: "text-red-400" },
                { area: "Google Business Profile", status: "Incomplete", color: "text-amber-400" },
                { area: "Content & Messaging", status: "Needs work", color: "text-amber-400" },
                { area: "Conversion Optimization", status: "Issues found", color: "text-red-400" },
                { area: "Analytics & Tracking", status: "Not set up", color: "text-red-400" },
                { area: "Competitor Snapshot", status: "3 gaps identified", color: "text-amber-400" },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between py-2.5 border-b border-white/5 last:border-0">
                  <span className="text-white text-sm">{row.area}</span>
                  <span className={`text-xs font-semibold ${row.color}`}>{row.status}</span>
                </div>
              ))}
              <div className="mt-6 bg-[#1D4ED8]/20 border border-[#1D4ED8]/30 rounded-xl p-4">
                <p className="text-white text-xs leading-relaxed">
                  <strong className="text-white">Note:</strong> This is a sample illustration. Your actual report will include specific findings, recommendations, and a prioritized action plan based on your site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              How it works
            </div>
            <h2 className="text-4xl font-bold text-[#0A1628] mb-4">
              Simple, fast, and{" "}
              <span className="text-[#1D4ED8]">genuinely useful.</span>
            </h2>
            <p className="text-[#475569] text-lg">
              Three steps. No hoops to jump through. No sales call required.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] right-[-calc(50%-2rem)] h-px bg-gray-200" />
                )}
                <div className="bg-[#F8FAFC] rounded-2xl p-8 text-center relative">
                  <div className="text-5xl font-bold text-[#1D4ED8]/10 mb-4">{step.number}</div>
                  <h3 className="text-[#0A1628] font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-[#475569] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-[#475569]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#1D4ED8]" />
              Delivered within 48 hours
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#1D4ED8]" />
              No obligation, ever
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#1D4ED8]" />
              Done by a real person
            </div>
          </div>
        </div>
      </section>

      {/* Request form */}
      <section id="request" className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Request your audit
              </div>
              <h2 className="text-4xl font-bold text-[#0A1628] leading-tight mb-4">
                Let&apos;s see what your site is{" "}
                <span className="text-[#1D4ED8]">actually doing.</span>
              </h2>
              <p className="text-[#475569] text-lg leading-relaxed mb-8">
                Fill out the form and I&apos;ll get started within one business day.
                The more context you give me about your business, the more useful
                the audit will be.
              </p>
              <div className="space-y-4">
                {[
                  "Completely free — no credit card, no commitment",
                  "Delivered as a written report within 48 hours",
                  "Covers all 10 areas listed above",
                  "Specific to your site — not a generic checklist",
                  "I respond to every request personally",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1D4ED8] shrink-0 mt-0.5" />
                    <span className="text-[#475569]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <AuditForm />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1628] mb-3">Common questions</h2>
            <p className="text-[#475569]">Straight answers, no runaround.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-6">
                <h3 className="text-[#0A1628] font-bold mb-2">{faq.q}</h3>
                <p className="text-[#475569] text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-[#475569] mb-4">Still have a question?</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[#1D4ED8] font-semibold hover:underline"
            >
              Reach out directly
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
