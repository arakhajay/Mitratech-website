import { BlogPost } from "@/types";
import { SanityBlogPost, urlForImage, getBlogPosts, getBlogPostBySlug, isSanityConfigured } from "./sanity";
import { BLOG_POSTS } from "@/constants/blogData";

const DEFAULT_AUTHOR_AVATAR = "/logo.svg";

function sanityPostToBlogPost(sanityPost: SanityBlogPost): BlogPost {
  let coverImage = sanityPost.coverImageUrl || "";
  if (sanityPost.coverImage && !coverImage) {
    try {
      const imageBuilder = urlForImage(sanityPost.coverImage);
      if (imageBuilder) {
        coverImage = imageBuilder.width(1200).height(630).url();
      }
    } catch (error) {
      console.error("Error generating cover image URL:", error);
    }
  }

  let authorAvatar = sanityPost.author.avatarUrl || DEFAULT_AUTHOR_AVATAR;
  if (sanityPost.author.avatar && sanityPost.author.avatarUrl !== DEFAULT_AUTHOR_AVATAR) {
    try {
      const imageBuilder = urlForImage(sanityPost.author.avatar);
      if (imageBuilder) {
        authorAvatar = imageBuilder.width(200).height(200).url();
      }
    } catch (error) {
      console.error("Error generating author avatar URL:", error);
    }
  }

  return {
    id: sanityPost._id,
    slug: sanityPost.slug.current,
    title: sanityPost.title,
    excerpt: sanityPost.excerpt,
    content: sanityPost.content,
    coverImage,
    category: sanityPost.category,
    author: {
      name: sanityPost.author.name,
      role: sanityPost.author.role,
      avatar: authorAvatar,
    },
    publishedAt: sanityPost.publishedAt,
    readTime: sanityPost.readTime,
    featured: sanityPost.featured,
    tags: sanityPost.tags || [],
  };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  if (!isSanityConfigured()) {
    console.log("Sanity not configured, using fallback blog data");
    return BLOG_POSTS.map((post) => ({
      ...post,
      author: {
        ...post.author,
        avatar: DEFAULT_AUTHOR_AVATAR,
      },
    }));
  }

  try {
    const sanityPosts = await getBlogPosts();
    
    if (sanityPosts.length === 0) {
      console.log("No posts found in Sanity, using fallback blog data");
      return BLOG_POSTS.map((post) => ({
        ...post,
        author: {
          ...post.author,
          avatar: DEFAULT_AUTHOR_AVATAR,
        },
      }));
    }

    return sanityPosts.map(sanityPostToBlogPost);
  } catch (error) {
    console.error("Error fetching from Sanity, using fallback:", error);
    return BLOG_POSTS.map((post) => ({
      ...post,
      author: {
        ...post.author,
        avatar: DEFAULT_AUTHOR_AVATAR,
      },
    }));
  }
}

export async function getBlogPostBySlugWithFallback(slug: string): Promise<BlogPost | null> {
  if (!isSanityConfigured()) {
    const fallbackPost = BLOG_POSTS.find((p) => p.slug === slug);
    return fallbackPost
      ? {
          ...fallbackPost,
          author: {
            ...fallbackPost.author,
            avatar: DEFAULT_AUTHOR_AVATAR,
          },
        }
      : null;
  }

  try {
    const sanityPost = await getBlogPostBySlug(slug);
    
    if (sanityPost) {
      return sanityPostToBlogPost(sanityPost);
    }

    const fallbackPost = BLOG_POSTS.find((p) => p.slug === slug);
    return fallbackPost
      ? {
          ...fallbackPost,
          author: {
            ...fallbackPost.author,
            avatar: DEFAULT_AUTHOR_AVATAR,
          },
        }
      : null;
  } catch (error) {
    console.error(`Error fetching post "${slug}" from Sanity, using fallback:`, error);
    const fallbackPost = BLOG_POSTS.find((p) => p.slug === slug);
    return fallbackPost
      ? {
          ...fallbackPost,
          author: {
            ...fallbackPost.author,
            avatar: DEFAULT_AUTHOR_AVATAR,
          },
        }
      : null;
  }
}
