import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies",
  description: "Explore our portfolio of successful web applications, e-commerce stores, and digital marketing campaigns for startups and enterprises.",
  alternates: {
    canonical: "/portfolio",
  },
  openGraph: {
    url: "/portfolio",
    title: "Portfolio & Case Studies | Mitratech Services (OPC) Pvt Ltd",
    description: "Explore our portfolio of successful web applications, e-commerce stores, and digital marketing campaigns for startups and enterprises.",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
