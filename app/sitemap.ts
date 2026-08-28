import { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/constants/servicesData";
import { PRODUCTS_DATA } from "@/constants/productsData";
import { PORTFOLIO_DATA } from "@/constants/portfolioData";
import { BLOG_POSTS } from "@/constants/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mitratechservices.in";

  const staticPages = [
    "/",
    "/about",
    "/services",
    "/products",
    "/portfolio",
    "/pricing",
    "/blog",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: route === "/" ? `${baseUrl}/` : `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/" ? 1.0 : 0.8,
  }));

  const servicePages = SERVICES_DATA.map((srv) => ({
    url: `${baseUrl}/services/${srv.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const productPages = PRODUCTS_DATA.map((prod) => ({
    url: `${baseUrl}/products/${prod.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const portfolioPages = PORTFOLIO_DATA.map((p) => ({
    url: `${baseUrl}/portfolio/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const blogPages = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages, ...productPages, ...portfolioPages, ...blogPages];
}
