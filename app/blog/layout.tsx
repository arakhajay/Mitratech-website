import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Articles",
  description: "In-depth guides on Next.js performance, UI/UX glassmorphism, Google Ads CPA optimization, and SaaS architecture.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    url: "/blog",
    title: "Blog & Articles | Mitratech Services (OPC) Pvt Ltd",
    description: "In-depth guides on Next.js performance, UI/UX glassmorphism, Google Ads CPA optimization, and SaaS architecture.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
