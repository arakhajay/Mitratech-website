import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description: "Common questions about our web development services, pricing, project timelines, and technical capabilities answered by MitraTech experts.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    url: "/faq",
    title: "Frequently Asked Questions | Mitratech Services (OPC) Pvt Ltd",
    description: "Common questions about our web development services, pricing, project timelines, and technical capabilities answered by MitraTech experts.",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
