import React from "react";
import type { Metadata } from "next";
import { PricingContent } from "@/components/pricing/PricingContent";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for custom website design, Next.js web application development, SaaS engineering, and monthly digital growth retainers at MitraTech.",
  alternates: {
    canonical: "https://www.mitratechservices.in/pricing",
  },
  openGraph: {
    title: "Pricing Plans | MitraTech",
    description:
      "Transparent pricing for custom website design, Next.js web applications, and growth retainers.",
    url: "https://www.mitratechservices.in/pricing",
    siteName: "Mitratech Services (OPC) Pvt Ltd",
    images: [
      {
        url: "https://www.mitratechservices.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "MitraTech Transparent Pricing Plans",
      },
    ],
  },
};

export default function PricingPage() {
  return <PricingContent />;
}
