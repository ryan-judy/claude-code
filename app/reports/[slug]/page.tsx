import { client } from "@/lib/sanity/client";
import {
  auditReportBySlugQuery,
  auditReportSlugsQuery,
  type AuditReport,
  type AuditSection,
  type AuditSectionKey,
  type AuditStatus,
  type AuditPriority,
} from "@/lib/sanity/auditQueries";
import { PortableText } from "@portabletext/react";
import type { Metadata } from "next";

// When no reports exist yet, generateStaticParams returns [] — this tells
// Next.js to still treat the route as fully static rather than throwing.
export const dynamic = "force-static";

// ── Static export ─────────────────────────────────────────────────────────────

export async function generateStaticParams() {
  try {
    const slugs: { slug: string }[] = await client.fetch(auditReportSlugsQuery);
    const params = slugs.map(({ slug }) => ({ slug }));
    // output: export requires at least one static param; use a placeholder
    // until real reports exist so the build doesn't fail.
    return params.length > 0 ? params : [{ slug: "__placeholder" }];
  } catch {
    return [{ slug: "__placeholder" }];
  }
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Website Audit Report | Spark Street Digital",
    robots: { index: false, follow: false },
  };
}

// ── Data helpers ──────────────────────────────────────────────────────────────

const SECTION_META: Record<
  AuditSectionKey,
  { number: number; title: string; description: string }
> = {
  "user-experience": {
    number: 1,
    title: "User Experience",
    description: "Design, usability, and mobile responsiveness",
  },
  performance: {
    number: 2,
    title: "Website Performance & Speed",
    description: "Core Web Vitals, load times, hosting quality",
  },
  "technical-seo": {
    number: 3,
    title: "Technical SEO",
    description: "Crawlability, indexing, site structure, schema markup",
  },
  "onpage-seo": {
    number: 4,
    title: "On-Page SEO & Content",
    description: "Keyword targeting, heading structure, internal linking",
  },
  "geo-aeo": {
    number: 5,
    title: "GEO & AEO — AI Search Visibility",
    description: "ChatGPT, Google AI Overviews, Perplexity",
  },
  "local-search": {
    number: 6,
    title: "Local Search & Google Business Profile",
    description: "GBP completeness, reviews, citations, map rankings",
  },
  "content-structure": {
    number: 7,
    title: "Content & Site Structure",
    description: "Clarity, messaging, site architecture",
  },
  conversion: {
    number: 8,
    title: "Conversion Optimization",
    description: "CTAs, forms, user flow, lead generation",
  },
  "tech-stack": {
    number: 9,
    title: "Tech Stack",
    description: "Platform, tools, analytics, tracking setup",
  },
  competitor: {
    number: 10,
    title: "Competitor Snapshot",
    description: "How top local competitors compare online",
  },
};

const STATUS_CONFIG: Record<
  AuditStatus,
  { label: string; color: string; dot: string; bg: string }
> = {
  excellent: {
    label: "Excellent",
    color: "#059669",
    dot: "#10B981",
    bg: "#ECFDF5",
  },
  good: { label: "Good", color: "#0284C7", dot: "#38BDF8", bg: "#F0F9FF" },
  "needs-attention": {
    label: "Needs Attention",
    color: "#B45309",
    dot: "#F59E0B",
    bg: "#FFFBEB",
  },
  "issues-found": {
    label: "Issues Found",
    color: "#B91C1C",
    dot: "#F87171",
    bg: "#FFF1F2",
  },
  na: { label: "N/A", color: "#64748B", dot: "#94A3B8", bg: "#F8FAFC" },
};

const PRIORITY_CONFIG: Record<
  AuditPriority,
  { label: string; color: string; bg: string }
> = {
  high: { label: "High Priority", color: "#B91C1C", bg: "#FEF2F2" },
  medium: { label: "Medium Priority", color: "#B45309", bg: "#FFFBEB" },
  low: { label: "Low Priority", color: "#0369A1", bg: "#EFF6FF" },
};

const OVERALL_STATUS_CONFIG: Record<
  string,
  { label: string; color: string; bg: string; border: string }
> = {
  excellent: {
    label: "Excellent",
    color: "#065F46",
    bg: "#ECFDF5",
    border: "#6EE7B7",
  },
  good: {
    label: "Good",
    color: "#0C4A6E",
    bg: "#F0F9FF",
    border: "#BAE6FD",
  },
  "needs-attention": {
    label: "Needs Attention",
    color: "#78350F",
    bg: "#FFFBEB",
    border: "#FDE68A",
  },
  "issues-found": {
    label: "Issues Found",
    color: "#7F1D1D",
    bg: "#FFF1F2",
    border: "#FECACA",
  },
};

// ── Portable text components ──────────────────────────────────────────────────

const ptComponents = {
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-sm text-slate-600 leading-relaxed mb-2 last:mb-0">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc pl-4 space-y-1 text-sm text-slate-600">
        {children}
      </ul>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className="leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className="font-semibold text-slate-800">{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em className="italic">{children}</em>
    ),
  },
};

const actionPtComponents = {
  ...ptComponents,
  block: {
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className="text-sm text-slate-700 leading-relaxed mb-2 last:mb-0">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className="list-disc pl-4 space-y-1.5 text-sm text-slate-700">
        {children}
      </ul>
    ),
  },
};

// ── Section card ──────────────────────────────────────────────────────────────

function SectionCard({ section }: { section: AuditSection }) {
  const meta = SECTION_META[section.sectionKey];
  if (!meta) return null;

  const statusCfg = STATUS_CONFIG[section.status] ?? STATUS_CONFIG.na;
  const priorityCfg = section.priority
    ? PRIORITY_CONFIG[section.priority]
    : null;

  return (
    <div
      className="bg-white rounded-lg border border-slate-200 overflow-hidden"
      style={{ borderLeftWidth: "3px", borderLeftColor: statusCfg.dot }}
    >
      {/* Section header */}
      <div className="px-5 py-4 border-b border-slate-100">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center">
              {meta.number}
            </span>
            <div className="min-w-0">
              <h3 className="font-semibold text-slate-900 text-sm leading-tight">
                {meta.title}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">{meta.description}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            {priorityCfg && (
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={{ color: priorityCfg.color, background: priorityCfg.bg }}
              >
                {priorityCfg.label}
              </span>
            )}
            <span
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ color: statusCfg.color, background: statusCfg.bg }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: statusCfg.dot }}
              />
              {statusCfg.label}
            </span>
          </div>
        </div>
      </div>

      {/* Section body */}
      <div className="px-5 py-4 grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Key Findings
          </p>
          {section.findings && section.findings.length > 0 ? (
            <PortableText value={section.findings} components={ptComponents} />
          ) : (
            <p className="text-sm text-slate-400 italic">No findings noted.</p>
          )}
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
            Recommendations
          </p>
          {section.recommendations && section.recommendations.length > 0 ? (
            <PortableText
              value={section.recommendations}
              components={ptComponents}
            />
          ) : (
            <p className="text-sm text-slate-400 italic">
              No recommendations noted.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default async function AuditReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report: AuditReport | null = await client.fetch(
    auditReportBySlugQuery,
    { slug }
  );

  if (!report) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-500 text-lg">Report not found.</p>
        </div>
      </div>
    );
  }

  const overallCfg = report.overallStatus
    ? OVERALL_STATUS_CONFIG[report.overallStatus]
    : null;

  const preparedDate = report.preparedAt
    ? new Date(report.preparedAt + "T00:00:00").toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <div className="min-h-screen" style={{ background: "#F1F5F9" }}>
      {/* ── Header ── */}
      <header style={{ background: "#0A1628" }}>
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 500 500"
                fill="none"
                className="w-10 h-10"
              >
                <path
                  d="M 445 148 L 445 58 L 115 58 A 95 95 0 0 0 115 248 L 255 248"
                  stroke="#2563EB"
                  strokeWidth="22"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
                <path
                  d="M 255 252 L 385 252 A 95 95 0 0 1 385 442 L 55 442 L 55 348"
                  stroke="#2563EB"
                  strokeWidth="22"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                />
                <path
                  d="M 362 52 L 230 242 L 268 242 L 148 450 L 300 258 L 260 258 Z"
                  fill="#F59E0B"
                />
              </svg>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">
                  Spark Street Digital
                </p>
                <p className="text-blue-400 text-xs">sparkstreet.digital</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-1">
                Confidential
              </p>
              <h1 className="text-white font-bold text-xl leading-tight">
                Website Audit Report
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* ── Client info bar ── */}
      <div style={{ background: "#0F1F3D" }} className="border-b border-slate-700/50">
        <div className="max-w-4xl mx-auto px-6 py-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-3">
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">
                Business
              </p>
              <p className="text-white font-semibold text-sm">
                {report.clientName}
              </p>
            </div>
            {report.clientUrl && (
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">
                  Website
                </p>
                <p className="text-blue-300 text-sm truncate">{report.clientUrl}</p>
              </div>
            )}
            {report.industry && (
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">
                  Industry
                </p>
                <p className="text-slate-300 text-sm">{report.industry}</p>
              </div>
            )}
            {preparedDate && (
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">
                  Date Prepared
                </p>
                <p className="text-slate-300 text-sm">{preparedDate}</p>
              </div>
            )}
            <div>
              <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">
                Prepared By
              </p>
              <p className="text-slate-300 text-sm">Spark Street Digital</p>
            </div>
            {report.reportVersion && (
              <div>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-0.5">
                  Version
                </p>
                <p className="text-slate-300 text-sm">{report.reportVersion}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">

        {/* Overall Snapshot */}
        <section>
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
            Overall Snapshot
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {overallCfg && (
              <div
                className="rounded-lg border p-4"
                style={{ background: overallCfg.bg, borderColor: overallCfg.border }}
              >
                <p className="text-xs font-semibold uppercase tracking-wider mb-2"
                  style={{ color: overallCfg.color }}>
                  Overall Status
                </p>
                <p className="text-2xl font-bold" style={{ color: overallCfg.color }}>
                  {overallCfg.label}
                </p>
              </div>
            )}

            {report.quickWins && report.quickWins.length > 0 && (
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
                  Top Priority Quick Wins
                </p>
                <ol className="space-y-1">
                  {report.quickWins.map((win, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-400 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-sm text-amber-900 leading-relaxed">
                        {win}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>

          {report.executiveSummary && report.executiveSummary.length > 0 && (
            <div className="mt-4 bg-white rounded-lg border border-slate-200 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                Executive Summary
              </p>
              <PortableText
                value={report.executiveSummary}
                components={ptComponents}
              />
            </div>
          )}
        </section>

        {/* Audit Sections */}
        {report.sections && report.sections.length > 0 && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Audit Findings
            </h2>
            <div className="space-y-3">
              {report.sections.map((section) => (
                <SectionCard key={section._key} section={section} />
              ))}
            </div>
          </section>
        )}

        {/* Action Plan */}
        {(report.actionQuickWins ||
          report.actionShortTerm ||
          report.actionStrategic) && (
          <section>
            <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
              Action Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100" style={{ background: "#EFF6FF" }}>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                    Quick Wins
                  </p>
                  <p className="text-xs text-blue-500 mt-0.5">Do Now</p>
                </div>
                <div className="px-4 py-3">
                  {report.actionQuickWins && report.actionQuickWins.length > 0 ? (
                    <PortableText value={report.actionQuickWins} components={actionPtComponents} />
                  ) : (
                    <p className="text-sm text-slate-400 italic">None listed.</p>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100" style={{ background: "#FFFBEB" }}>
                  <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    Short-Term
                  </p>
                  <p className="text-xs text-amber-500 mt-0.5">30–90 Days</p>
                </div>
                <div className="px-4 py-3">
                  {report.actionShortTerm && report.actionShortTerm.length > 0 ? (
                    <PortableText value={report.actionShortTerm} components={actionPtComponents} />
                  ) : (
                    <p className="text-sm text-slate-400 italic">None listed.</p>
                  )}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
                <div className="px-4 py-3 border-b border-slate-100" style={{ background: "#F0FDF4" }}>
                  <p className="text-xs font-bold uppercase tracking-wider text-green-700">
                    Strategic
                  </p>
                  <p className="text-xs text-green-500 mt-0.5">90+ Days</p>
                </div>
                <div className="px-4 py-3">
                  {report.actionStrategic && report.actionStrategic.length > 0 ? (
                    <PortableText value={report.actionStrategic} components={actionPtComponents} />
                  ) : (
                    <p className="text-sm text-slate-400 italic">None listed.</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      {/* Footer */}
      <footer style={{ background: "#0A1628" }} className="mt-8 py-6">
        <div className="max-w-4xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              fill="none"
              className="w-5 h-5"
            >
              <path
                d="M 362 52 L 230 242 L 268 242 L 148 450 L 300 258 L 260 258 Z"
                fill="#F59E0B"
              />
            </svg>
            <p className="text-slate-400 text-xs">
              Prepared by{" "}
              <span className="text-white font-medium">Spark Street Digital</span>
              {" · "}
              <span className="text-blue-400">sparkstreet.digital</span>
            </p>
          </div>
          <p className="text-slate-500 text-xs">Confidential</p>
        </div>
      </footer>
    </div>
  );
}
