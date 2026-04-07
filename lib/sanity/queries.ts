import { groq } from "next-sanity";

// ── Blog Post Types ───────────────────────────────────────────────────────────

export type SanityPost = {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt?: string;
  publishedAt?: string;
  category?: string;
  readTime?: number;
  featured?: boolean;
  coverImage?: {
    asset?: { _id: string; url: string };
    alt?: string;
  };
  body?: unknown[];
  seoTitle?: string;
  seoDescription?: string;
};

// ── Blog Posts ────────────────────────────────────────────────────────────────

export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    readTime,
    featured,
    coverImage {
      asset -> { _id, url },
      alt
    }
  }
`;

export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc)[0...3] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    readTime,
    coverImage {
      asset -> { _id, url },
      alt
    }
  }
`;

export const recentPostsQuery = groq`
  *[_type == "post"] | order(publishedAt desc)[0...6] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    readTime,
    coverImage {
      asset -> { _id, url },
      alt
    }
  }
`;

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    category,
    readTime,
    featured,
    coverImage {
      asset -> { _id, url },
      alt
    },
    body,
    seoTitle,
    seoDescription
  }
`;

export const postSlugsQuery = groq`
  *[_type == "post"] { "slug": slug.current }
`;

export const postSitemapQuery = groq`
  *[_type == "post"] { "slug": slug.current, publishedAt }
`;

// ── Site Settings ─────────────────────────────────────────────────────────────

export const siteSettingsQuery = groq`
  *[_type == "siteSettings" && _id == "siteSettings"][0] {
    siteName,
    tagline,
    email,
    phone,
    phoneHref,
    location,
    locationSubtext,
    responseTime,
    auditDeliveryTime,
    linkedin,
    twitter,
    defaultSeoTitle,
    defaultSeoDescription,
    defaultOgImage { asset -> { url }, alt }
  }
`;

// ── Navigation ────────────────────────────────────────────────────────────────

export const navigationQuery = groq`
  *[_type == "navigation" && _id == "navigation"][0] {
    logoText,
    navLinks[] { label, href },
    ctaText,
    ctaHref
  }
`;

// ── Shared sections projection ────────────────────────────────────────────────
// Used in all page queries. GROQ returns null for fields not present on a
// given section type — this is intentional and safe.

const sectionsProjection = groq`
  sections[] {
    _type,
    _key,
    // heroSection + pageHeroSection
    badge,
    badgeIcon,
    headline,
    headlineHighlight,
    subheadline,
    primaryCtaText,
    secondaryCtaText,
    proofStats[] { value, label },
    // statsSection
    stats[] { value, label, description },
    // servicesSection
    services[] {
      icon,
      color,
      title,
      description,
      highlights,
      href,
      // servicesDetailSection extra fields
      "id": id.current,
      iconBg,
      tagline,
      capabilities,
      ctaText
    },
    // processSection
    steps[] { number, title, description, deliverable },
    // whySection
    body,
    quote,
    quoteAuthor,
    reasons[] { icon, title, description },
    // whoIHelpSection
    personas[] { icon, quote, detail },
    ctaHeadline,
    ctaBody,
    // industriesSection
    list[] { icon, name, description, wins },
    moreCardHeadline,
    moreCardBody,
    moreCardCta,
    // pricingSection
    plans[] { name, tagline, price, priceNote, features, ctaText, isPrimary, badge },
    footerNote,
    // ctaSection
    ctaFinePrint,
    // richTextSection
    content,
    // profileStorySection
    profileImage { asset -> { url }, alt },
    profileBadge,
    storyBadge,
    storyHeadline,
    storyHeadlineHighlight,
    storyHeadlineLine2,
    storyBody,
    storyCtaText,
    storyLinkedinText,
    storyLinkedinUrl,
    // experienceSection
    experienceItems[] { period, role, company, description, highlight, accentColor },
    expertiseItems[] { icon, label, years },
    // valuesSection
    items[] { icon, title, description },
    // contactFormSection
    formHeadline,
    formSubheadline,
    serviceOptions,
    submitText,
    auditCheckboxLabel,
    auditCheckboxSub,
    formFinePrint,
    contactInfoHeadline,
    contactInfoSubheadline
  }
`;

// ── Home Page ─────────────────────────────────────────────────────────────────

export const homePageQuery = groq`
  *[_type == "homePage" && _id == "homePage"][0] {
    seoTitle,
    seoDescription,
    ${sectionsProjection}
  }
`;

// ── About Page ────────────────────────────────────────────────────────────────

export const aboutPageQuery = groq`
  *[_type == "aboutPage" && _id == "aboutPage"][0] {
    seoTitle,
    seoDescription,
    ${sectionsProjection}
  }
`;

// ── Services Page ─────────────────────────────────────────────────────────────

export const servicesPageQuery = groq`
  *[_type == "servicesPage" && _id == "servicesPage"][0] {
    seoTitle,
    seoDescription,
    ${sectionsProjection}
  }
`;

// ── Contact Page ──────────────────────────────────────────────────────────────

export const contactPageQuery = groq`
  *[_type == "contactPage" && _id == "contactPage"][0] {
    seoTitle,
    seoDescription,
    ${sectionsProjection}
  }
`;

// ── Audit Page ────────────────────────────────────────────────────────────────

export const auditPageQuery = groq`
  *[_type == "auditPage" && _id == "auditPage"][0] {
    seoTitle, seoDescription,
    heroBadge, heroHeadline, heroHeadlineHighlight, heroSubheadline,
    heroPrimaryCtaText, heroSecondaryCtaText,
    includedBadge, includedHeadline, includedHeadlineHighlight, includedSubheadline,
    auditAreas[] { icon, color, title, desc },
    deliverableBadge, deliverableHeadline, deliverableHeadlineHighlight, deliverableBody,
    deliverables,
    stepsBadge, stepsHeadline, stepsHeadlineHighlight, stepsSubheadline,
    steps[] { number, title, desc },
    requestBadge, requestHeadline, requestHeadlineHighlight, requestBody,
    requestBullets,
    faqHeadline, faqSubheadline,
    faqs[] { q, a }
  }
`;

// ── Flexible Pages ────────────────────────────────────────────────────────────

export const flexPageSlugsQuery = groq`
  *[_type == "flexPage"] { "slug": slug.current }
`;

export const flexPageBySlugQuery = groq`
  *[_type == "flexPage" && slug.current == $slug][0] {
    title,
    slug,
    seoTitle,
    seoDescription,
    ${sectionsProjection}
  }
`;
