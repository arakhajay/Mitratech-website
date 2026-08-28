import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with MitraTech for a free consultation. We offer custom web design, Next.js development, SaaS applications, and digital marketing services.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
    title: "Contact Us | Mitratech Services (OPC) Pvt Ltd",
    description: "Get in touch with MitraTech for a free consultation. We offer custom web design, Next.js development, SaaS applications, and digital marketing services.",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
