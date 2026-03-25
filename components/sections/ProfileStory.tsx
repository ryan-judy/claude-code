import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PortableText } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";

export interface ProfileStoryData {
  profileImage?: { asset?: { url?: string }; alt?: string };
  profileBadge?: string;
  storyBadge?: string;
  storyHeadline?: string;
  storyHeadlineHighlight?: string;
  storyHeadlineLine2?: string;
  storyBody?: TypedObject[];
  storyCtaText?: string;
  storyLinkedinText?: string;
  storyLinkedinUrl?: string;
}

export default function ProfileStory({ data }: { data?: ProfileStoryData | null }) {
  const profileBadge = data?.profileBadge ?? "Columbus, OH based";
  const storyBadge = data?.storyBadge ?? "My Story";
  const storyHeadline = data?.storyHeadline ?? "Real expertise,";
  const storyHeadlineHighlight = data?.storyHeadlineHighlight ?? "focused on you,";
  const storyHeadlineLine2 = data?.storyHeadlineLine2 ?? "not agency overhead";
  const storyCtaText = data?.storyCtaText ?? "Let\u2019s Work Together";
  const storyLinkedinText = data?.storyLinkedinText ?? "View LinkedIn";
  const storyLinkedinUrl = data?.storyLinkedinUrl ?? "https://linkedin.com/in/rjudy";

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile image or SVG fallback */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
              {/* Background */}
              <svg viewBox="0 0 400 500" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 w-full h-full">
                <defs>
                  <linearGradient id="bgGrad" x1="0" y1="0" x2="400" y2="500" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#0A1628" />
                    <stop offset="70%" stopColor="#1a2a45" />
                    <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.6" />
                  </linearGradient>
                  <pattern id="dotPat" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1" fill="white" fillOpacity="0.04" />
                  </pattern>
                </defs>
                <rect width="400" height="500" fill="url(#bgGrad)" />
                <rect width="400" height="500" fill="url(#dotPat)" />
                <circle cx="370" cy="40" r="110" fill="#1D4ED8" fillOpacity="0.15" />
                <circle cx="30" cy="470" r="130" fill="#F59E0B" fillOpacity="0.07" />
                <path d="M 12 12 L 44 12 L 44 16 L 16 16 L 16 44 L 12 44 Z" fill="#F59E0B" fillOpacity="0.7" />
                <path d="M 388 12 L 356 12 L 356 16 L 384 16 L 384 44 L 388 44 Z" fill="#F59E0B" fillOpacity="0.7" />
              </svg>
              {/* Headshot overlaid on background */}
              <img
                src="/headshot.png"
                alt="Ryan Judy — Founder, Spark Street Digital"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -top-4 -right-4 bg-[#F59E0B] text-[#0A1628] font-bold text-sm px-5 py-3 rounded-xl shadow-lg">
              {profileBadge}
            </div>
          </div>

          {/* Story text */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#EFF6FF] text-[#1D4ED8] text-sm font-semibold px-4 py-2 rounded-full mb-6">
              {storyBadge}
            </div>
            <h2 className="text-4xl font-bold text-[#0A1628] mb-6 leading-tight">
              {storyHeadline}{" "}
              <span className="text-[#1D4ED8]">{storyHeadlineHighlight}</span>
              <br />
              {storyHeadlineLine2}
            </h2>
            <div className="space-y-4 text-[#475569] leading-relaxed">
              {data?.storyBody?.length ? (
                <PortableText value={data.storyBody} />
              ) : (
                <>
                  <p>
                    I&apos;ve spent over a decade in digital marketing —
                    growing alongside every major shift in the industry:
                    SEO, paid search, content strategy, analytics, and now AI.
                    I&apos;ve seen what works, what wastes money, and what
                    actually moves the needle for real businesses.
                  </p>
                  <p>
                    My professional background gave me a front-row seat to
                    how smart digital strategy transforms an organization.
                    I brought that same mindset to Spark Street Digital —
                    focused entirely on locally owned Ohio businesses that deserve
                    that same level of expertise.
                  </p>
                  <p>
                    What I kept seeing: great local businesses with untapped
                    potential online. Either they were invisible on search,
                    running ads with no strategy, or paying agency prices for
                    work done by someone who&apos;d never heard of their town.
                  </p>
                  <p className="font-semibold text-[#0A1628]">
                    I started this to fix that. If you run a locally owned
                    business anywhere in Ohio, you deserve senior-level
                    digital marketing — and that&apos;s exactly what I provide.
                  </p>
                </>
              )}
            </div>
            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#1D4ED8] hover:bg-[#1e40af] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg group"
              >
                {storyCtaText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href={storyLinkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#1D4ED8] font-semibold text-sm hover:underline"
              >
                {storyLinkedinText}
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
