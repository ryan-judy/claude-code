import Link from "next/link";
import { Zap, MapPin, Mail, Linkedin, Twitter, ArrowRight } from "lucide-react";

const services = [
  { label: "Website Design & Development", href: "/services#websites" },
  { label: "AI Integration", href: "/services#ai" },
  { label: "Search Engine Marketing", href: "/services#sem" },
  { label: "SEO & Content Strategy", href: "/services#seo" },
  { label: "Digital Marketing Strategy", href: "/services#strategy" },
  { label: "Analytics & Reporting", href: "/services#analytics" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Ryan", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Free Website Audit", href: "/contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A1628] text-white">
      {/* CTA Strip */}
      <div className="border-b border-white/10 bg-[#1D4ED8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-lg font-bold text-white">
                Ready to grow your Ohio business online?
              </p>
              <p className="text-blue-200 text-sm mt-1">
                Let&apos;s talk — no pressure, no fluff, just honest strategy.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-bold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25 whitespace-nowrap"
            >
              Get Your Free Audit
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-[#1D4ED8] flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Ryan Judy<span className="text-[#F59E0B]">.</span>
              </span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Digital marketing strategist helping Ohio businesses build powerful
              online presences — from websites to AI and everything in between.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-sm mb-3">
              <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0" />
              <span>Columbus, Ohio &bull; Serving all of Ohio</span>
            </div>
            <div className="flex items-center gap-2 text-white/60 text-sm">
              <Mail className="w-4 h-4 text-[#F59E0B] shrink-0" />
              <a
                href="mailto:ryan@ryanjudy.com"
                className="hover:text-white transition-colors"
              >
                ryan@ryanjudy.com
              </a>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://linkedin.com/in/ryanjudy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1D4ED8] flex items-center justify-center transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com/ryanjudy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#1D4ED8] flex items-center justify-center transition-colors duration-200"
                aria-label="Twitter / X"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-white/60 hover:text-[#F59E0B] text-sm transition-colors duration-200"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-white/60 hover:text-[#F59E0B] text-sm transition-colors duration-200"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Stay in the Loop
            </h3>
            <p className="text-white/60 text-sm mb-4">
              Monthly insights on digital marketing, AI, and what&apos;s working
              for Ohio businesses.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm px-4 py-2.5 rounded-lg focus:outline-none focus:border-[#3B82F6] transition-colors"
              />
              <button
                type="submit"
                className="bg-[#1D4ED8] hover:bg-[#3B82F6] text-white font-semibold text-sm px-4 py-2.5 rounded-lg transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            &copy; {year} Ryan Judy Digital Marketing. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-white/40 hover:text-white/70 text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-white/40 hover:text-white/70 text-sm transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
