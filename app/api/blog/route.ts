import { NextResponse } from "next/server";
import { getAllBlogPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";
export const revalidate = 300;

export async function GET() {
  try {
    const posts = await getAllBlogPosts();
    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error in blog API route:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 }
    );
  }
}
