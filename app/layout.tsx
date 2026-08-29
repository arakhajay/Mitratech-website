import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Script from "next/script";
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
  metadataBase: new URL("https://www.mitratechservices.in"),
  title: {
    default: "MitraTech | Transforming Ideas into Powerful Digital Solutions",
    template: "%s | MitraTech",
  },
  description:
    "Mitratech Services (OPC) Pvt Ltd is a premier software development and digital marketing agency based in Pune, India. Specializing in custom website design, Next.js web applications, SaaS platforms, branding, and Google Ads PPC growth.",
  keywords: [
    "MitraTech",
    "Mitratech Services",
    "Mitratech Services (OPC) Pvt Ltd",
    "Software Development Agency Pune",
    "Next.js software development company Pune",
    "Website Design Studio Pune",
    "Custom SaaS application developers India",
    "B2B website design and UI UX agency Pune",
    "Google Ads PPC growth management Pune",
    "Next.js Developers India",
    "Web Application Development",
    "SaaS Platform Development",
    "Zivox Agent AI Chatbot",
    "LeadSpark AI Lead Scraper",
  ],
  authors: [{ name: "Mitratech Services (OPC) Pvt Ltd", url: "https://www.mitratechservices.in" }],
  creator: "Mitratech Services (OPC) Pvt Ltd",
  publisher: "Mitratech Services (OPC) Pvt Ltd",
  alternates: {
    canonical: "https://www.mitratechservices.in/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "w5tS8wRo1WVM3Jt0RuG4mCaoOuG1yFXI_cZj4zBTRCs",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.mitratechservices.in/",
    siteName: "Mitratech Services (OPC) Pvt Ltd",
    title: "MitraTech | Transforming Ideas into Powerful Digital Solutions",
    description:
      "Enterprise-grade website design, full-stack Next.js web applications, SaaS engineering, and high-ROI digital marketing from Pune, India.",
    images: [
      {
        url: "https://www.mitratechservices.in/og-image.png",
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
    images: ["https://www.mitratechservices.in/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();
  const localSchema = getLocalBusinessSchema();
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en-IN" className={`dark ${spaceGrotesk.variable} ${inter.variable}`}>
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
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
        {gtmId && (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${gtmId}');
            `}
          </Script>
        )}
        <Navbar />
        <main className="pt-20 min-h-screen">{children}</main>
        <Footer />
        <StickyQuoteCTA />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
