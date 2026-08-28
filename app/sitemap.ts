import { MetadataRoute } from "next";
import { SERVICES_DATA } from "@/constants/servicesData";
import { PRODUCTS_DATA } from "@/constants/productsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mitratechservices.in";

  const staticPages = [
    "/",
    "/about",
    "/services",
    "/products",
    "/pricing",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: route === "/" ? `${baseUrl}/` : `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: (route === "" ? "weekly" : "monthly") as "weekly" | "monthly",
    priority: route === "" ? 1.0 : route === "/services" || route === "/products" ? 0.9 : 0.8,
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

  return [...staticPages, ...servicePages, ...productPages];
}
