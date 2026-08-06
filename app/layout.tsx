import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import { StickyQuoteCTA } from "@/components/layout/StickyQuoteCTA";
import { getOrganizationSchema, getLocalBusinessSchema } from "@/lib/jsonld";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "MitraTech | Transforming Ideas into Powerful Digital Solutions",
    template: "%s | MitraTech Digital Agency",
  },
  description:
    "MitraTech is a premium software development and digital marketing agency specializing in custom website design, Next.js web applications, SaaS platforms, branding, and Google Ads PPC growth.",
  keywords: [
    "Software Development Agency",
    "Website Design Studio",
    "Next.js Developers",
    "Web Application Agency",
    "SaaS Development",
    "Google Ads PPC Agency",
    "Branding & Graphic Design",
    "MitraTech",
  ],
  authors: [{ name: "MitraTech Digital Solutions" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mitratech.com",
    siteName: "MitraTech Digital Solutions",
    title: "MitraTech | Transforming Ideas into Powerful Digital Solutions",
    description:
      "Enterprise-grade website design, full-stack web applications, SaaS engineering, and high-ROI digital marketing.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "MitraTech Enterprise Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MitraTech | Enterprise Digital Products & Web Development",
    description: "Building digital experiences that grow businesses worldwide.",
    images: ["https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();
  const localSchema = getLocalBusinessSchema();

  return (
    <html lang="en" className={`dark ${spaceGrotesk.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }}
        />
      </head>
      <body className="min-h-screen bg-[#0F172A] text-[#F8FAFC] antialiased selection:bg-blue-600 selection:text-white">
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
        <StickyQuoteCTA />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
