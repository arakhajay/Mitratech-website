import React from "react";
import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Mitratech Services (OPC) Pvt Ltd in Pune, India. Contact us via email at support@mitratechservices.in or call +91 8600352657 for project discovery.",
  alternates: {
    canonical: "https://www.mitratechservices.in/contact",
  },
  openGraph: {
    title: "Contact Us | MitraTech",
    description:
      "Get in touch with Mitratech Services (OPC) Pvt Ltd in Pune, India. Submit project details or book a discovery call.",
    url: "https://www.mitratechservices.in/contact",
    siteName: "Mitratech Services (OPC) Pvt Ltd",
    images: [
      {
        url: "https://www.mitratechservices.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "Contact MitraTech",
      },
    ],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
