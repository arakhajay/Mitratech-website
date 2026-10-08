import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-01-01";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

const builder = projectId !== "placeholder" ? imageUrlBuilder(client) : null;

export function urlForImage(source: any) {
  if (!builder) return null;
  try {
    return builder.image(source);
  } catch (error) {
    console.error("Error generating image URL:", error);
    return null;
  }
}

export interface SanityBlogPost {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  content: string;
  coverImage?: {
    asset: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  };
  coverImageUrl?: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar?: {
      asset: {
        _ref: string;
        _type: "reference";
      };
    };
    avatarUrl?: string;
  };
  publishedAt: string;
  readTime: string;
  featured: boolean;
  tags: string[];
}

export async function getBlogPosts(): Promise<SanityBlogPost[]> {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    content,
    coverImage,
    coverImageUrl,
    category,
    author,
    publishedAt,
    readTime,
    featured,
    tags
  }`;

  try {
    const posts = await client.fetch(query);
    return posts;
  } catch (error) {
    console.error("Error fetching blog posts from Sanity:", error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<SanityBlogPost | null> {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    content,
    coverImage,
    coverImageUrl,
    category,
    author,
    publishedAt,
    readTime,
    featured,
    tags
  }`;

  try {
    const post = await client.fetch(query, { slug });
    return post || null;
  } catch (error) {
    console.error(`Error fetching blog post with slug "${slug}":`, error);
    return null;
  }
}

export function isSanityConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_DATASET
  );
}
