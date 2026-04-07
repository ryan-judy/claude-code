import { groq } from "next-sanity";

// ── Types ─────────────────────────────────────────────────────────────────────

export type AuditSectionKey =
  | "user-experience"
  | "performance"
  | "technical-seo"
  | "onpage-seo"
  | "geo-aeo"
  | "local-search"
  | "content-structure"
  | "conversion"
  | "tech-stack"
  | "competitor";

export type AuditStatus =
  | "excellent"
  | "good"
  | "needs-attention"
  | "issues-found"
  | "na";

export type AuditPriority = "high" | "medium" | "low";

export type PortableTextBlock = {
  _type: "block";
  _key: string;
  style?: string;
  listItem?: string;
  children: Array<{ _key: string; _type: string; text: string; marks?: string[] }>;
};

export type AuditSection = {
  _key: string;
  sectionKey: AuditSectionKey;
  status: AuditStatus;
  priority?: AuditPriority;
  findings?: PortableTextBlock[];
  recommendations?: PortableTextBlock[];
};

export type AuditReport = {
  _id: string;
  clientName: string;
  slug: { current: string };
  clientUrl?: string;
  industry?: string;
  preparedAt?: string;
  reportVersion?: string;
  overallStatus?: "excellent" | "good" | "needs-attention" | "issues-found";
  quickWins?: string[];
  executiveSummary?: PortableTextBlock[];
  sections?: AuditSection[];
  actionQuickWins?: PortableTextBlock[];
  actionShortTerm?: PortableTextBlock[];
  actionStrategic?: PortableTextBlock[];
};

// ── Queries ───────────────────────────────────────────────────────────────────

export const auditReportBySlugQuery = groq`
  *[_type == "auditReport" && slug.current == $slug][0] {
    _id,
    clientName,
    slug,
    clientUrl,
    industry,
    preparedAt,
    reportVersion,
    overallStatus,
    quickWins,
    executiveSummary,
    sections[] {
      _key,
      sectionKey,
      status,
      priority,
      findings,
      recommendations
    },
    actionQuickWins,
    actionShortTerm,
    actionStrategic
  }
`;
