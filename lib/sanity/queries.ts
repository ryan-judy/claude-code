import { groq } from "next-sanity";

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
