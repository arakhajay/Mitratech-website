import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Plans",
  description: "Transparent pricing for web design, development, and digital marketing services. Choose from Starter, Professional, or Enterprise packages.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    url: "/pricing",
    title: "Pricing & Plans | Mitratech Services (OPC) Pvt Ltd",
    description: "Transparent pricing for web design, development, and digital marketing services. Choose from Starter, Professional, or Enterprise packages.",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
