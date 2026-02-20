import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { client } from "@/lib/sanity/client";
import { postBySlugQuery, postSlugsQuery } from "@/lib/sanity/queries";
import { PortableText } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";
import { Calendar, Clock, ArrowLeft, Tag } from "lucide-react";
import CTA from "@/components/sections/CTA";

interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  category?: string;
  readTime?: number;
  body?: TypedObject[];
  seoTitle?: string;
  seoDescription?: string;
  coverImage?: { asset?: { url: string }; alt?: string };
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
  sem: "SEM / Paid Search",
  ai: "AI & Automation",
  strategy: "Digital Strategy",
  analytics: "Analytics",
  ohio: "Columbus Business",
};

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateStaticParams() {
  try {
    const slugs: { slug: string }[] = await client.fetch(postSlugsQuery);
    return slugs.map((s) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post: Post = await client.fetch(postBySlugQuery, { slug });
    if (!post) return { title: "Post Not Found" };
    return {
      title: post.seoTitle || `${post.title} | Ryan Judy`,
      description:
        post.seoDescription ||
        post.excerpt ||
        "Digital marketing insights from Ryan Judy.",
    };
  } catch {
    return { title: "Blog | Ryan Judy" };
  }
}

const portableTextComponents = {
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className="text-3xl font-bold text-[#0A1628] mt-12 mb-4">{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className="text-2xl font-bold text-[#0A1628] mt-8 mb-3">{children}</h3>
    ),
    h4: ({ children }: { children?: React.ReactNode }) => (
      <h4 className="text-xl font-bold text-[#0A1628] mt-6 mb-2">{children}</h4>
    ),
    blockquote: ({ children }: { children?: React.ReactNode }) => (
      <blockquote className="border-l-4 border-[#D4AF37] pl-6 my-6 italic text-[#475569] text-lg">
        {children}
      </blockquote>
    ),
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-[#475569] leading-relaxed mb-4 text-base">{children}</p>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-[#0A1628]">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
    code: ({ children }: { children?: React.ReactNode }) => (
      <code className="bg-[#F1F5F9] text-[#1D4ED8] font-mono text-sm px-1.5 py-0.5 rounded">
        {children}
      </code>
    ),
    link: ({
      value,
      children,
    }: {
      value?: { href: string; blank?: boolean };
      children?: React.ReactNode;
    }) => (
      <a
        href={value?.href}
        target={value?.blank ? "_blank" : undefined}
        rel={value?.blank ? "noopener noreferrer" : undefined}
        className="text-[#1D4ED8] underline hover:text-[#1e40af] transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({
      value,
    }: {
      value?: { asset?: { url: string }; alt?: string; caption?: string };
    }) => {
      if (!value?.asset?.url) return null;
      return (
        <figure className="my-8">
          <img
            src={value.asset.url}
            alt={value.alt || ""}
            className="w-full rounded-xl border border-gray-100"
          />
          {value.caption && (
            <figcaption className="text-center text-[#475569] text-sm mt-2">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let post: Post | null = null;
  try {
    post = await client.fetch(postBySlugQuery, { slug });
  } catch {
    // pass
  }

  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="hero-gradient pt-36 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/60 hover:text-white text-sm font-medium mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
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

          {post.excerpt && (
            <p className="text-white/70 text-xl leading-relaxed mb-8">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center gap-5 text-white/50 text-sm">
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 rounded-full bg-[#1D4ED8] flex items-center justify-center text-white font-bold text-xs">
                RJ
              </div>
              <span>Ryan Judy</span>
            </div>
            {post.publishedAt && (
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {formatDate(post.publishedAt)}
              </div>
            )}
            {post.readTime && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime} min read
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Cover image */}
      {post.coverImage?.asset?.url && (
        <div className="bg-[#0A1628] py-8">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <img
              src={post.coverImage.asset.url}
              alt={post.coverImage.alt || post.title}
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      )}

      {/* Article body */}
      <article className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.body ? (
            <div className="prose-content">
              <PortableText
                value={post.body}
                components={portableTextComponents}
              />
            </div>
          ) : (
            <div className="text-center py-12 text-[#475569]">
              <p>This post&apos;s content hasn&apos;t been published yet.</p>
            </div>
          )}

          {/* Author bio */}
          <div className="mt-16 pt-8 border-t border-gray-100">
            <div className="flex items-start gap-4 bg-[#F8FAFC] rounded-2xl p-6">
              <div className="w-14 h-14 rounded-full bg-[#1D4ED8] flex items-center justify-center text-white font-bold text-xl shrink-0">
                RJ
              </div>
              <div>
                <div className="font-bold text-[#0A1628] mb-1">Ryan Judy</div>
                <div className="text-[#1D4ED8] text-sm font-medium mb-2">
                  Digital Marketing Strategist — Columbus, Columbus
                </div>
                <p className="text-[#475569] text-sm leading-relaxed">
                  10+ years helping Columbus businesses grow through websites, SEO,
                  SEM, AI, and digital strategy. Based in Columbus, focused on
                  real results for real businesses.
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
