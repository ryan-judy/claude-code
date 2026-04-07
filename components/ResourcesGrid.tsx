"use client";

import { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import type { SanityPost } from "@/lib/sanity/queries";

const categoryColors: Record<string, string> = {
  websites: "bg-blue-100 text-blue-700",
  seo:      "bg-orange-100 text-orange-700",
  sem:      "bg-green-100 text-green-700",
  ai:       "bg-purple-100 text-purple-700",
  strategy: "bg-pink-100 text-pink-700",
  analytics:"bg-amber-100 text-amber-700",
  ohio:     "bg-red-100 text-red-700",
};

const categoryLabels: Record<string, string> = {
  websites: "Websites",
  seo:      "SEO",
  sem:      "Paid Media",
  ai:       "AI & Automation",
  strategy: "Digital Strategy",
  analytics:"Analytics",
  ohio:     "Ohio Business",
};

const tabs = [
  { value: "all",      label: "All" },
  { value: "websites", label: "Websites" },
  { value: "ai",       label: "AI & Automation" },
  { value: "seo",      label: "SEO" },
  { value: "sem",      label: "Paid Media" },
  { value: "strategy", label: "Digital Strategy" },
  { value: "analytics",label: "Analytics" },
];

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default function ResourcesGrid({ posts }: { posts: SanityPost[] }) {
  const [active, setActive] = useState("all");

  const featured = active === "all" ? posts.find((p) => p.featured) : null;
  const grid =
    active === "all"
      ? posts.filter((p) => p._id !== featured?._id)
      : posts.filter((p) => p.category === active);

  return (
    <>
      {/* Category tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActive(tab.value)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              active === tab.value
                ? "bg-[#1D4ED8] text-white shadow-sm"
                : "bg-white text-[#475569] border border-gray-200 hover:border-[#1D4ED8] hover:text-[#1D4ED8]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Featured post — only in "All" view */}
      {featured && (
        <div className="mb-12">
          <div className="text-[#1D4ED8] text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-8 h-0.5 bg-[#1D4ED8]" />
            Featured
          </div>
          <Link
            href={`/resources/${featured.slug.current}`}
            className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#BFDBFE] hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[16/9] lg:aspect-auto bg-gradient-to-br from-[#1D4ED8] to-[#0A1628] min-h-[240px] overflow-hidden">
              {featured.coverImage?.asset?.url ? (
                <img
                  src={featured.coverImage.asset.url}
                  alt={featured.coverImage.alt ?? featured.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-white/20 text-6xl font-bold">SD</div>
                </div>
              )}
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-4">
                {featured.category && (
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                      categoryColors[featured.category] ?? "bg-gray-100 text-gray-600"
                    }`}
                  >
                    <Tag className="w-3 h-3" />
                    {categoryLabels[featured.category] ?? featured.category}
                  </span>
                )}
                <span className="text-[#475569] text-xs font-medium px-2.5 py-1 rounded-full bg-[#F1F5F9]">
                  Featured
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-4 group-hover:text-[#1D4ED8] transition-colors leading-tight">
                {featured.title}
              </h2>
              <p className="text-[#475569] leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-[#475569] text-sm">
                {featured.publishedAt && (
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {formatDate(featured.publishedAt)}
                  </div>
                )}
                {featured.readTime && (
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    {featured.readTime} min read
                  </div>
                )}
              </div>
              <div className="mt-6 inline-flex items-center gap-1.5 text-[#1D4ED8] font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                Read Article
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        </div>
      )}

      {/* Grid */}
      {grid.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {grid.map((post) => (
            <Link
              key={post._id}
              href={`/resources/${post.slug.current}`}
              className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#BFDBFE] hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-[#1D4ED8]/80 to-[#0A1628] overflow-hidden">
                {post.coverImage?.asset?.url ? (
                  <img
                    src={post.coverImage.asset.url}
                    alt={post.coverImage.alt ?? post.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-white/20 text-4xl font-bold">SD</div>
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  {post.category && (
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                        categoryColors[post.category] ?? "bg-gray-100 text-gray-600"
                      }`}
                    >
                      {categoryLabels[post.category] ?? post.category}
                    </span>
                  )}
                  <div className="flex items-center gap-1 text-[#475569] text-xs">
                    <Clock className="w-3 h-3" />
                    {post.readTime} min
                  </div>
                </div>
                <h3 className="text-[#0A1628] font-bold text-lg mb-2 group-hover:text-[#1D4ED8] transition-colors leading-snug flex-1">
                  {post.title}
                </h3>
                <p className="text-[#475569] text-sm leading-relaxed mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-1.5 text-[#475569] text-xs">
                    <Calendar className="w-3 h-3" />
                    {post.publishedAt ? formatDate(post.publishedAt) : ""}
                  </div>
                  <div className="flex items-center gap-1 text-[#1D4ED8] text-xs font-semibold group-hover:gap-2 transition-all">
                    Read
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-[#475569]">
          <p className="text-lg font-medium mb-2">No articles in this category yet.</p>
          <p className="text-sm">Check back soon — more content is on the way.</p>
        </div>
      )}
    </>
  );
}
