import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { postsQuery } from "@/lib/sanity/queries";
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from "lucide-react";
import CTA from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Blog | Ryan Judy — Digital Marketing Insights for Ohio Businesses",
  description:
    "Practical digital marketing insights, Ohio business tips, and expert takes on websites, AI, SEO, and paid search. Written by Ryan Judy.",
};

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  category?: string;
  readTime?: number;
  featured?: boolean;
  coverImage?: {
    asset?: { url: string };
    alt?: string;
  };
}

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
  sem: "SEM",
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

// Placeholder posts shown when no Sanity content is available
const placeholderPosts: Post[] = [
  {
    _id: "placeholder-1",
    title: "Why Your Ohio Business Website Might Be Costing You Customers",
    slug: { current: "placeholder-1" },
    excerpt:
      "Most small business websites are built to look good at launch — not to convert visitors into customers. Here's what to audit first and what to fix.",
    publishedAt: "2025-01-15T00:00:00Z",
    category: "websites",
    readTime: 7,
    featured: true,
  },
  {
    _id: "placeholder-2",
    title: "The Ohio Business Owner's Guide to Google Ads in 2025",
    slug: { current: "placeholder-2" },
    excerpt:
      "Google Ads can be a gold mine or a money pit depending on how they're set up. Here's what to know before you spend a single dollar.",
    publishedAt: "2025-01-08T00:00:00Z",
    category: "sem",
    readTime: 9,
  },
  {
    _id: "placeholder-3",
    title: "AI Tools That Are Actually Useful for Small Business Marketing",
    slug: { current: "placeholder-3" },
    excerpt:
      "Beyond the hype — these are the AI tools delivering real ROI for small businesses right now, and how to start using them without getting overwhelmed.",
    publishedAt: "2024-12-20T00:00:00Z",
    category: "ai",
    readTime: 8,
  },
  {
    _id: "placeholder-4",
    title: "Local SEO for Columbus Businesses: A Practical 2025 Playbook",
    slug: { current: "placeholder-4" },
    excerpt:
      "Columbus is competitive. Here's exactly how to optimize your local SEO presence to show up when Columbus customers are searching for what you offer.",
    publishedAt: "2024-12-10T00:00:00Z",
    category: "seo",
    readTime: 11,
  },
  {
    _id: "placeholder-5",
    title: "How to Build a Digital Marketing Strategy That Actually Gets Executed",
    slug: { current: "placeholder-5" },
    excerpt:
      "The problem with most marketing strategies isn't the strategy — it's the execution. Here's how to build one designed to be actually done.",
    publishedAt: "2024-11-25T00:00:00Z",
    category: "strategy",
    readTime: 6,
  },
  {
    _id: "placeholder-6",
    title: "5 GA4 Reports Every Ohio Business Owner Should Check Monthly",
    slug: { current: "placeholder-6" },
    excerpt:
      "Google Analytics 4 is powerful — but only if you know what to look at. Here are the five reports that matter most for understanding your website's performance.",
    publishedAt: "2024-11-12T00:00:00Z",
    category: "analytics",
    readTime: 5,
  },
];

async function getPosts(): Promise<Post[]> {
  try {
    const posts = await client.fetch(postsQuery, {}, { next: { revalidate: 60 } });
    return posts?.length ? posts : placeholderPosts;
  } catch {
    return placeholderPosts;
  }
}

export default async function BlogPage() {
  const posts = await getPosts();
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured || p._id === featured?._id ? p._id !== featured?._id : true);

  const isPlaceholder = posts === placeholderPosts || posts[0]?._id?.startsWith("placeholder");

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient dot-pattern pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-8">
              <BookOpen className="w-4 h-4 text-[#F59E0B]" />
              The Blog
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Digital marketing insights
              <br />
              <span className="text-[#F59E0B]">for Ohio businesses</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed">
              Practical, no-fluff articles on websites, AI, SEO, paid search,
              and digital strategy. Written from real experience, for real
              businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isPlaceholder && (
            <div className="mb-12 bg-[#EFF6FF] border border-[#BFDBFE] rounded-xl p-4 text-sm text-[#1D4ED8]">
              <strong>Note:</strong> These are placeholder articles shown while
              the blog is being set up. Once Sanity CMS is connected, real
              content will appear here automatically.
            </div>
          )}

          {/* Featured post */}
          {featured && (
            <div className="mb-12">
              <div className="text-[#1D4ED8] text-sm font-bold uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#1D4ED8]" />
                Featured
              </div>
              <Link
                href={isPlaceholder ? "/blog" : `/blog/${featured.slug.current}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#BFDBFE] hover:shadow-xl transition-all duration-300"
              >
                {/* Cover image area */}
                <div className="aspect-[16/9] lg:aspect-auto bg-gradient-to-br from-[#1D4ED8] to-[#0A1628] flex items-center justify-center min-h-[240px]">
                  {featured.coverImage?.asset?.url ? (
                    <img
                      src={featured.coverImage.asset.url}
                      alt={featured.coverImage.alt || featured.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-white/20 text-6xl font-bold">RJ</div>
                  )}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-4">
                    {featured.category && (
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                          categoryColors[featured.category] ||
                          "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <Tag className="w-3 h-3" />
                        {categoryLabels[featured.category] || featured.category}
                      </span>
                    )}
                    <span className="text-[#94A3B8] text-xs font-medium px-2.5 py-1 rounded-full bg-[#F1F5F9]">
                      Featured
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#0A1628] mb-4 group-hover:text-[#1D4ED8] transition-colors leading-tight">
                    {featured.title}
                  </h2>
                  {featured.excerpt && (
                    <p className="text-[#64748B] leading-relaxed mb-6">
                      {featured.excerpt}
                    </p>
                  )}
                  <div className="flex items-center gap-4 text-[#94A3B8] text-sm">
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

          {/* Rest of posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post._id}
                href={isPlaceholder ? "/blog" : `/blog/${post.slug.current}`}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-[#BFDBFE] hover:shadow-lg transition-all duration-300 flex flex-col"
              >
                {/* Cover image */}
                <div className="aspect-[16/9] bg-gradient-to-br from-[#1D4ED8]/80 to-[#0A1628] flex items-center justify-center">
                  {post.coverImage?.asset?.url ? (
                    <img
                      src={post.coverImage.asset.url}
                      alt={post.coverImage.alt || post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-white/20 text-4xl font-bold">RJ</div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {/* Category + date */}
                  <div className="flex items-center justify-between mb-3">
                    {post.category && (
                      <span
                        className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                          categoryColors[post.category] ||
                          "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {categoryLabels[post.category] || post.category}
                      </span>
                    )}
                    {post.readTime && (
                      <div className="flex items-center gap-1 text-[#94A3B8] text-xs">
                        <Clock className="w-3 h-3" />
                        {post.readTime} min
                      </div>
                    )}
                  </div>

                  <h3 className="text-[#0A1628] font-bold text-lg mb-2 group-hover:text-[#1D4ED8] transition-colors leading-snug flex-1">
                    {post.title}
                  </h3>

                  {post.excerpt && (
                    <p className="text-[#64748B] text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                    {post.publishedAt && (
                      <div className="flex items-center gap-1.5 text-[#94A3B8] text-xs">
                        <Calendar className="w-3 h-3" />
                        {formatDate(post.publishedAt)}
                      </div>
                    )}
                    <div className="flex items-center gap-1 text-[#1D4ED8] text-xs font-semibold group-hover:gap-2 transition-all">
                      Read
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
