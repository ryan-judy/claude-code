import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  MapPin,
  Award,
  Users,
  TrendingUp,
  Heart,
  BarChart2,
  Globe,
  Bot,
  Search,
} from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "About Ryan Judy | Digital Marketing Strategist, Columbus OH",
  description:
    "10+ years of digital marketing experience across financial services, higher education, real estate, and startups. Based in Columbus, OH.",
};

const experience = [
  {
    period: "2024 — Present",
    role: "Founder",
    company: "Ryan Judy Digital Marketing",
    description:
      "Launched my own consultancy to bring senior-level digital strategy and execution directly to Columbus businesses — cutting out the agency overhead without cutting corners.",
    highlight: "Active consulting",
    color: "border-[#D4AF37] bg-[#D4AF37]/5",
    dot: "bg-[#D4AF37]",
  },
  {
    period: "2020 — 2024",
    role: "Senior Digital Marketing Strategist",
    company: "Financial Services",
    description:
      "Led cross-channel digital marketing strategy for mid-market and enterprise clients. Managed $2M+ in annual ad spend across paid search, display, and social — driving measurable pipeline growth.",
    highlight: "$2M+ ad spend managed",
    color: "border-[#1D4ED8] bg-[#EFF6FF]",
    dot: "bg-[#1D4ED8]",
  },
  {
    period: "2017 — 2020",
    role: "Digital Marketing Manager",
    company: "Higher Education",
    description:
      "Oversaw digital marketing strategy for enrollment and advancement at a major Ohio university. Built data-driven campaigns that delivered measurable increases in prospective student engagement.",
    highlight: "Enrollment & brand campaigns",
    color: "border-gray-200 bg-[#F8FAFC]",
    dot: "bg-[#475569]",
  },
  {
    period: "2014 — 2017",
    role: "Digital Marketing Specialist",
    company: "Real Estate",
    description:
      "Developed and executed digital campaigns for a growing real estate firm — specializing in local SEO, paid search, and social media to build the brand's online presence from the ground up.",
    highlight: "Local SEO & paid search",
    color: "border-gray-200 bg-[#F8FAFC]",
    dot: "bg-[#475569]",
  },
];

const expertise = [
  { icon: Globe, label: "Web Design & Dev", years: "10+" },
  { icon: Search, label: "SEO & Paid Search", years: "10+" },
  { icon: BarChart2, label: "Analytics & GA4", years: "8+" },
  { icon: Bot, label: "AI & Automation", years: "4+" },
  { icon: TrendingUp, label: "Growth Strategy", years: "10+" },
  { icon: Users, label: "Brand & Content", years: "8+" },
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
      <section className="hero-gradient pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-8">
              <MapPin className="w-4 h-4 text-[#D4AF37]" />
              Columbus, OH
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Hi, I&apos;m Ryan.{" "}
              <br />
              <span className="text-[#D4AF37]">I help Columbus</span>
              <br />
              businesses win online.
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Digital strategist and marketing technologist with 10+ years
              building programs that actually move the needle — across
              industries, channels, and organization sizes.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Professional illustration */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <svg
                  viewBox="0 0 400 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                  aria-label="Ryan Judy - Digital Marketing Strategist"
                >
                  <defs>
                    <linearGradient id="bgGrad" x1="0" y1="0" x2="400" y2="500" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#0A1628" />
                      <stop offset="70%" stopColor="#1a2a45" />
                      <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.6" />
                    </linearGradient>
                    <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#D4956A" />
                      <stop offset="100%" stopColor="#C07A50" />
                    </linearGradient>
                    <pattern id="dotPat" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" fill="white" fillOpacity="0.04" />
                    </pattern>
                  </defs>

                  {/* Background */}
                  <rect width="400" height="500" fill="url(#bgGrad)" />
                  <rect width="400" height="500" fill="url(#dotPat)" />

                  {/* Decorative blobs */}
                  <circle cx="370" cy="40" r="110" fill="#1D4ED8" fillOpacity="0.15" />
                  <circle cx="30" cy="470" r="130" fill="#D4AF37" fillOpacity="0.07" />

                  {/* Corner accents */}
                  <path d="M 12 12 L 44 12 L 44 16 L 16 16 L 16 44 L 12 44 Z" fill="#D4AF37" fillOpacity="0.7" />
                  <path d="M 388 12 L 356 12 L 356 16 L 384 16 L 384 44 L 388 44 Z" fill="#D4AF37" fillOpacity="0.7" />

                  {/* Info card overlay at bottom */}
                  <rect x="20" y="420" width="360" height="64" rx="12" fill="white" fillOpacity="0.1" />
                  <rect x="20" y="420" width="360" height="64" rx="12" stroke="white" strokeOpacity="0.15" strokeWidth="1" />
                  <text x="40" y="448" fill="white" fontSize="13" fontWeight="700" fontFamily="system-ui, sans-serif">Ryan Judy</text>
                  <text x="40" y="466" fill="white" fontSize="11" fillOpacity="0.6" fontFamily="system-ui, sans-serif">Digital Strategist &amp; Marketing Technologist</text>
                  <circle cx="356" cy="452" r="16" fill="#D4AF37" fillOpacity="0.2" />
                  <text x="356" y="456" fill="#D4AF37" fontSize="16" textAnchor="middle" fontWeight="700" fontFamily="system-ui, sans-serif">✦</text>
                </svg>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-4 -right-4 bg-[#D4AF37] text-[#0A1628] font-bold text-sm px-5 py-3 rounded-xl shadow-lg">
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
              <div className="space-y-4 text-[#475569] leading-relaxed">
                <p>
                  I started my career in digital marketing over a decade ago —
                  back when &quot;digital marketing&quot; was mostly just email
                  blasts and basic SEO. I&apos;ve grown with the industry through
                  every major shift: social media, mobile-first, content
                  marketing, programmatic advertising, and now AI.
                </p>
                <p>
                  Over the years I&apos;ve worked across financial services,
                  higher education, real estate, and startups — managing
                  multi-million dollar ad budgets, leading digital strategy, and
                  seeing what actually works for real businesses.
                </p>
                <p>
                  What I noticed over and over again: Columbus businesses were
                  getting underserved. Either they couldn&apos;t afford agency
                  prices, or they were paying for strategy they never saw
                  executed, or they were handed off to junior staff who didn&apos;t
                  know their market.
                </p>
                <p className="font-semibold text-[#0A1628]">
                  So I started Ryan Judy Digital Marketing to fix that.
                  Columbus businesses deserve access to senior-level digital
                  marketing expertise — and that&apos;s exactly what I provide.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg group"
                >
                  Let&apos;s Work Together
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="https://linkedin.com/in/rjudy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#1D4ED8] font-semibold text-sm hover:underline"
                >
                  View LinkedIn
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left: Headline + expertise grid */}
            <div className="lg:w-2/5">
              <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] text-sm font-semibold px-4 py-2 rounded-full mb-6">
                Experience
              </div>
              <h2 className="text-4xl font-bold text-[#0A1628] mb-4 leading-tight">
                A decade of{" "}
                <span className="text-[#1D4ED8]">getting it done</span>
              </h2>
              <p className="text-[#475569] leading-relaxed mb-10">
                Hands-on expertise across every major digital channel — built
                over 10+ years working with organizations from scrappy startups
                to major institutions.
              </p>

              {/* Expertise grid */}
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="bg-white rounded-xl p-4 border border-gray-100 hover:border-[#BFDBFE] hover:shadow-sm transition-all duration-200 group"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="w-4 h-4 text-[#1D4ED8]" />
                        <span className="text-[#92400E] text-xs font-bold">{item.years} yrs</span>
                      </div>
                      <p className="text-[#0A1628] font-semibold text-sm">{item.label}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Experience cards */}
            <div className="lg:w-3/5 space-y-4">
              {experience.map((item, i) => (
                <div
                  key={i}
                  className={`rounded-2xl p-6 border-2 ${item.color} transition-all duration-300 hover:shadow-md`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-3 h-3 rounded-full ${item.dot} mt-1.5 shrink-0`} />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <span className="text-[#1D4ED8] text-xs font-bold uppercase tracking-wider">
                          {item.period}
                        </span>
                        <span className="inline-flex items-center bg-white/70 text-[#475569] text-xs font-medium px-2.5 py-0.5 rounded-full border border-gray-200">
                          {item.highlight}
                        </span>
                      </div>
                      <h3 className="text-[#0A1628] font-bold text-lg mb-0.5">
                        {item.role}
                      </h3>
                      <p className="text-[#475569] text-sm font-medium mb-2">
                        {item.company}
                      </p>
                      <p className="text-[#475569] text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
              <span className="text-[#D4AF37]">great marketing</span>
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
                    <Icon className="w-6 h-6 text-[#D4AF37]" />
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
