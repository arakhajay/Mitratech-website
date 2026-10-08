import React from "react";
import { getAllBlogPosts } from "@/lib/blog";
import { BlogClientWrapper } from "./BlogClientWrapper";

export const revalidate = 300; // ISR: revalidate every 5 minutes

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

  return <BlogClientWrapper initialPosts={posts} />;
}
