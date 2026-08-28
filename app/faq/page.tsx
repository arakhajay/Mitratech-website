import React from "react";
import type { Metadata } from "next";
import { FaqContent } from "@/components/faq/FaqContent";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Find clear answers about MitraTech's software development services, project timelines, Pune office location, pricing models, and IP ownership.",
  alternates: {
    canonical: "https://www.mitratechservices.in/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | MitraTech",
    description:
      "Find clear answers about MitraTech's software development services, project timelines, and technical capabilities.",
    url: "https://www.mitratechservices.in/faq",
    siteName: "Mitratech Services (OPC) Pvt Ltd",
    images: [
      {
        url: "https://www.mitratechservices.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "MitraTech FAQs",
      },
    ],
  },
};

export default function FAQPage() {
  return <FaqContent />;
}
