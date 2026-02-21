import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { client } from "@/lib/sanity/client";
import { flexPageBySlugQuery, flexPageSlugsQuery, siteSettingsQuery } from "@/lib/sanity/queries";
import SectionRenderer from "@/components/SectionRenderer";

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const slugs = await client.fetch(flexPageSlugsQuery);
    return (slugs ?? [])
      .filter((s: { slug: string | null }) => s.slug)
      .map((s: { slug: string }) => ({ slug: s.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await params;
    const page = await client.fetch(flexPageBySlugQuery, { slug });
    return {
      title: page?.seoTitle ?? page?.title ?? undefined,
      description: page?.seoDescription ?? undefined,
    };
  } catch {
    return {};
  }
}

export default async function FlexPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const [page, settings] = await Promise.all([
    client.fetch(flexPageBySlugQuery, { slug }).catch(() => null),
    client.fetch(siteSettingsQuery).catch(() => null),
  ]);

  if (!page) notFound();

  return (
    <SectionRenderer
      sections={page.sections ?? []}
      siteSettings={settings}
    />
  );
}
