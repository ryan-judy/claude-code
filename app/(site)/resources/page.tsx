import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { client } from "@/lib/sanity/client";
import { postsQuery, type SanityPost } from "@/lib/sanity/queries";
import ResourcesGrid from "@/components/ResourcesGrid";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Resources | Spark Street Digital — Digital Marketing Insights for Ohio Businesses",
  description:
    "Practical digital marketing insights, Ohio business tips, and expert takes on websites, AI, SEO, and paid media. From the team at Spark Street Digital.",
};

export default async function ResourcesPage() {
  const posts: SanityPost[] = await client.fetch(postsQuery);

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white text-sm font-semibold px-4 py-2 rounded-full mb-8">
              <BookOpen className="w-4 h-4 text-[#F59E0B]" />
              Resources
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Digital marketing insights
              <br />
              <span className="text-[#F59E0B]">for Ohio businesses</span>
            </h1>
            <p className="text-white text-xl leading-relaxed">
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
