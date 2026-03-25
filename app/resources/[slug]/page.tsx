import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPost, getAllPosts } from "@/lib/blog/posts";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import CTA from "@/components/sections/CTA";

const categoryColors: Record<string, string> = {
  websites: "bg-blue-100 text-blue-700",
  seo: "bg-orange-100 text-orange-700",
  sem: "bg-green-100 text-green-700",
  ai: "bg-purple-100 text-purple-700",
  strategy: "bg-pink-100 text-pink-700",
  analytics: "bg-amber-100 text-amber-700",
  ohio: "bg-red-100 text-red-700",
};

const categoryLabels: Record<string, string> = {
  websites: "Websites",
  seo: "SEO",
  sem: "Paid Media",
  ai: "AI & Automation",
  strategy: "Digital Strategy",
  analytics: "Analytics",
  ohio: "Ohio Business",
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | Spark Street Digital`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);

  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/resources"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Resources
          </Link>

          <div className="flex items-center gap-3 mb-6">
            {post.category && (
              <span
                className={`inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full ${
                  categoryColors[post.category] || "bg-gray-100 text-gray-600"
                }`}
              >
                <Tag className="w-3 h-3" />
                {categoryLabels[post.category] || post.category}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-white/70 text-xl leading-relaxed mb-8">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-5 text-white/50 text-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 rounded-full bg-[#1D4ED8] flex items-center justify-center text-white font-bold text-xs">
                RJ
              </div>
              <span>Ryan Judy</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {formatDate(post.publishedAt)}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime} min read
            </div>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose-content">{post.body}</div>

          {/* Author bio */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="flex items-start gap-4 bg-[#F8FAFC] rounded-2xl p-6">
              <div className="w-14 h-14 rounded-full bg-[#1D4ED8] flex items-center justify-center text-white font-bold text-xl shrink-0">
                RJ
              </div>
              <div>
                <div className="font-bold text-[#0A1628] mb-1">Ryan Judy</div>
                <div className="text-[#1D4ED8] text-sm font-medium mb-2">
                  Founder, Spark Street Digital — Columbus, Ohio
                </div>
                <p className="text-[#475569] text-sm leading-relaxed">
                  10+ years helping Ohio businesses grow through websites, SEO,
                  paid media, AI, and digital strategy. Founded Spark Street Digital
                  to bring senior-level marketing to locally owned Ohio businesses.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1 text-[#1D4ED8] text-sm font-semibold mt-3 hover:underline"
                >
                  More about Ryan
                  <ArrowLeft className="w-3 h-3 rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      <CTA />
    </>
  );
}
