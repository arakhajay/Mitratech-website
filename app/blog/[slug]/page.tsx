import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, User, Tag, Sparkles } from "lucide-react";
import { BLOG_POSTS } from "@/constants/blogData";
import { getArticleSchema } from "@/lib/jsonld";
import { CtaBanner } from "@/components/home/CtaBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  const url = `https://www.mitratechservices.in/blog/${slug}`;

  return {
    title: `${post.title} | MitraTech Blog`,
    description: post.excerpt,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${post.title} | MitraTech`,
      description: post.excerpt,
      url: url,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleSchema = getArticleSchema(post);

  return (
    <div className="space-y-12 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <article className="max-w-4xl mx-auto px-4 space-y-8">
        <Link
          href="/blog"
          className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Articles</span>
        </Link>

        <div className="space-y-4">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-600/20 text-cyan-300 text-xs font-bold border border-blue-500/30">
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center space-x-6 text-xs text-slate-400 pt-2 border-t border-slate-800">
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8 rounded-full overflow-hidden">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <div>
                <div className="text-white font-semibold">{post.author.name}</div>
                <div className="text-[10px] text-slate-500">{post.author.role}</div>
              </div>
            </div>

            <div className="flex items-center space-x-1">
              <Calendar className="w-3.5 h-3.5 text-cyan-400" />
              <span>{post.publishedAt}</span>
            </div>

            <div className="flex items-center space-x-1">
              <Clock className="w-3.5 h-3.5 text-purple-400" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        <div className="relative w-full h-[380px] sm:h-[450px] rounded-3xl overflow-hidden border border-slate-800">
          <Image src={post.coverImage} alt={post.title} fill className="object-cover" />
        </div>

        {/* Post Content */}
        <div className="prose prose-invert prose-blue max-w-none text-slate-300 space-y-6 text-sm sm:text-base leading-relaxed">
          {post.content.split("\n\n").map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-6 border-t border-slate-800 flex items-center space-x-2">
          <Tag className="w-4 h-4 text-cyan-400" />
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-400">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      <CtaBanner />
    </div>
  );
}
