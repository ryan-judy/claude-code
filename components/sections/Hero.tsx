"use client";

import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-[#1D4ED8] opacity-10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-[#D4AF37] opacity-5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            Based in Columbus, OH &bull; Serving businesses across the region
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
            Your Columbus Business{" "}
            <br className="hidden sm:block" />
            Deserves to{" "}
            <span className="gradient-text">Dominate</span>
            <br className="hidden sm:block" />
            Online
          </h1>

          {/* Subheadline */}
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl">
            10+ years of digital marketing expertise — websites, AI, SEM, SEO,
            and strategy — helping Columbus businesses at every stage turn their
            digital presence into a genuine competitive advantage.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-bold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/30 group"
            >
              Get Your Free Website Audit
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-white font-semibold text-base px-4 py-4 transition-colors duration-200 border-b border-white/20 hover:border-white/60"
            >
              Explore Services
            </Link>
          </div>

          {/* Stats proof */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex items-center gap-6">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "$2M+", label: "Ad Spend Managed" },
                { value: "Columbus", label: "OH Based" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-white font-bold text-lg leading-none">
                    {stat.value}
                  </div>
                  <div className="text-white/60 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </button>
    </section>
  );
}
