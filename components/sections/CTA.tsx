import Link from "next/link";
import { ArrowRight, Phone, Mail } from "lucide-react";

export default function CTA() {
  return (
    <section className="section-padding bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-br from-[#0A1628] via-[#1a2a45] to-[#1D4ED8] rounded-3xl overflow-hidden px-8 md:px-16 py-16 md:py-20">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white opacity-5 blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#F59E0B] opacity-10 blur-3xl pointer-events-none -translate-x-1/4 translate-y-1/3" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="max-w-xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-[#F59E0B] animate-pulse" />
                Now accepting new clients
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Ready to grow your
                <br />
                <span className="text-[#F59E0B]">Ohio business online?</span>
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Start with a free website audit. No commitment, no pitch deck —
                just an honest look at where you stand and where you can go.
              </p>
            </div>

            <div className="flex flex-col gap-4 w-full lg:w-auto min-w-[280px]">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-amber-500/30 group text-base"
              >
                Get My Free Website Audit
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex items-center gap-4 justify-center">
                <a
                  href="mailto:ryan@ryanjudy.com"
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#F59E0B]" />
                  ryan@ryanjudy.com
                </a>
                <span className="text-white/30">|</span>
                <a
                  href="tel:+16145550100"
                  className="flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#F59E0B]" />
                  (614) 555-0100
                </a>
              </div>
              <p className="text-white/40 text-xs text-center">
                Free audit takes less than 48 hours to deliver.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
