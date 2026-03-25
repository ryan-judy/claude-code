import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { getAllPosts } from "@/lib/blog/posts";
import ResourcesGrid from "@/components/ResourcesGrid";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Resources | Spark Street Digital — Digital Marketing Insights for Ohio Businesses",
  description:
    "Practical digital marketing insights, Ohio business tips, and expert takes on websites, AI, SEO, and paid media. From the team at Spark Street Digital.",
};

export default function ResourcesPage() {
  const posts = getAllPosts();

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-8">
              <BookOpen className="w-4 h-4 text-[#D4AF37]" />
              Resources
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Digital marketing insights
              <br />
              <span className="text-[#D4AF37]">for Ohio businesses</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Practical, no-fluff articles on websites, AI, SEO, paid media,
              and digital strategy. Written from real experience, for real
              businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ResourcesGrid posts={posts} />
        </div>
      </section>

      <CTA />
    </>
  );
}
