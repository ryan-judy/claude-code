"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu, X, ChevronDown,
  RefreshCw, Globe, Sparkles, Zap, Search, TrendingUp, Megaphone, Lightbulb, BarChart2, ArrowRight,
} from "lucide-react";
import { clsx } from "clsx";

export interface NavData {
  logoText?: string;
  ctaText?: string;
  ctaHref?: string;
}

const megaMenuServices = [
  { icon: RefreshCw,  label: "Website Modernization",        desc: "Bring your aging site up to modern standards.",  href: "/services#modernization", color: "text-teal-500" },
  { icon: Globe,      label: "Website Design & Development",  desc: "Custom sites built to convert visitors.",        href: "/services#websites",      color: "text-blue-500" },
  { icon: Sparkles,   label: "AI for Business",               desc: "AI tools and strategy across your business.",   href: "/services#ai",            color: "text-purple-500" },
  { icon: Zap,        label: "Integrations & Automation",     desc: "Connect your tools. Eliminate the busywork.",   href: "/services#automation",    color: "text-indigo-500" },
  { icon: Search,     label: "Paid Media",                    desc: "Strategic ads with full transparency.",          href: "/services#sem",           color: "text-green-500" },
  { icon: TrendingUp, label: "SEO, GEO & AEO",               desc: "Rank in search and AI-generated results.",      href: "/services#seo",           color: "text-orange-500" },
  { icon: Megaphone,  label: "Content Strategy",              desc: "Content with a purpose behind every piece.",    href: "/services#content",       color: "text-yellow-500" },
  { icon: Lightbulb,  label: "Digital Marketing Support",     desc: "Hands-on support across all your channels.",   href: "/services#strategy",      color: "text-pink-500" },
  { icon: BarChart2,  label: "Analytics & Reporting",         desc: "Data that tells a story and drives decisions.", href: "/services#analytics",     color: "text-amber-500" },
];

const topLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation({ data }: { data?: NavData | null }) {
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isMenuOpen, setIsMenuOpen]       = useState(false);
  const [megaOpen, setMegaOpen]           = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const logoText = data?.logoText ?? "Spark Street Digital";
  const ctaText  = data?.ctaText  ?? "Get a Free Audit";
  const ctaHref  = data?.ctaHref  ?? "/audit";

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setMegaOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const isServices = pathname.startsWith("/services");

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !isHome || isMenuOpen || megaOpen
          ? "bg-[#0A1628] shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <img src="/logo.png" alt="Spark Street Digital" className="h-9 w-auto" />
            <span className="text-white font-bold text-lg tracking-tight">
              {logoText}<span className="text-[#F59E0B] ml-0.5">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8" ref={megaRef}>
            {/* Home */}
            <Link
              href="/"
              className={clsx(
                "animated-underline text-sm font-medium transition-colors duration-200",
                pathname === "/" ? "text-[#F59E0B]" : "text-white/80 hover:text-white"
              )}
            >
              Home
            </Link>

            {/* Services trigger */}
            <div
              className="relative"
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
            >
              <button
                className={clsx(
                  "flex items-center gap-1 text-sm font-medium transition-colors duration-200",
                  isServices || megaOpen ? "text-[#F59E0B]" : "text-white/80 hover:text-white"
                )}
                aria-expanded={megaOpen}
              >
                Services
                <ChevronDown className={clsx("w-3.5 h-3.5 transition-transform duration-200", megaOpen && "rotate-180")} />
              </button>

              {/* Mega menu panel */}
              <div
                className={clsx(
                  "absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200",
                  megaOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-1 pointer-events-none"
                )}
              >
                <div className="bg-white rounded-2xl shadow-2xl shadow-black/20 border border-gray-100 overflow-hidden w-[780px]">
                  {/* Grid of services */}
                  <div className="grid grid-cols-3 gap-px bg-gray-100">
                    {megaMenuServices.map((svc) => {
                      const Icon = svc.icon;
                      return (
                        <Link
                          key={svc.href}
                          href={svc.href}
                          className="bg-white hover:bg-[#F8FAFC] p-4 flex items-start gap-3 group transition-colors duration-150"
                        >
                          <div className="shrink-0 w-8 h-8 rounded-lg bg-gray-50 group-hover:bg-white flex items-center justify-center mt-0.5 transition-colors">
                            <Icon className={clsx("w-4 h-4", svc.color)} />
                          </div>
                          <div>
                            <p className="text-[#0A1628] font-semibold text-sm leading-tight group-hover:text-[#1D4ED8] transition-colors">
                              {svc.label}
                            </p>
                            <p className="text-[#64748B] text-xs mt-0.5 leading-snug">{svc.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Footer strip */}
                  <div className="bg-[#F8FAFC] border-t border-gray-100 px-5 py-3 flex items-center justify-between">
                    <p className="text-xs text-[#64748B]">Not sure which service fits? Start with a free audit.</p>
                    <Link
                      href="/services"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#1D4ED8] hover:text-[#0A1628] transition-colors group"
                    >
                      View all services
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Remaining links */}
            {topLinks.filter(l => l.href !== "/").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "animated-underline text-sm font-medium transition-colors duration-200",
                  pathname === link.href ? "text-[#F59E0B]" : "text-white/80 hover:text-white"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block shrink-0">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/25"
            >
              {ctaText}
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white/80 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={clsx(
            "md:hidden overflow-hidden transition-all duration-300",
            isMenuOpen ? "max-h-[600px] pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-1 pt-2">
            <Link
              href="/"
              className={clsx(
                "px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200",
                pathname === "/" ? "text-[#F59E0B] bg-white/5" : "text-white/80 hover:text-white hover:bg-white/5"
              )}
            >
              Home
            </Link>

            {/* Mobile Services accordion */}
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={clsx(
                "flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 w-full text-left",
                isServices ? "text-[#F59E0B] bg-white/5" : "text-white/80 hover:text-white hover:bg-white/5"
              )}
            >
              Services
              <ChevronDown className={clsx("w-4 h-4 transition-transform duration-200", mobileServicesOpen && "rotate-180")} />
            </button>

            {/* Mobile services list */}
            <div className={clsx("overflow-hidden transition-all duration-300", mobileServicesOpen ? "max-h-[400px]" : "max-h-0")}>
              <div className="mx-4 mb-2 rounded-xl bg-white/5 overflow-hidden">
                {megaMenuServices.map((svc) => {
                  const Icon = svc.icon;
                  return (
                    <Link
                      key={svc.href}
                      href={svc.href}
                      className="flex items-center gap-3 px-4 py-2.5 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                    >
                      <Icon className={clsx("w-4 h-4 shrink-0", svc.color)} />
                      <span className="text-white/80 text-sm">{svc.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {topLinks.filter(l => l.href !== "/").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200",
                  pathname === link.href ? "text-[#F59E0B] bg-white/5" : "text-white/80 hover:text-white hover:bg-white/5"
                )}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href={ctaHref}
              className="mt-3 mx-4 text-center bg-[#F59E0B] hover:bg-[#D97706] text-[#0A1628] font-semibold text-sm px-5 py-3 rounded-lg transition-colors duration-200"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
