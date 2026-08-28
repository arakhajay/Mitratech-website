import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PRODUCTS_DATA } from "@/constants/productsData";
import { Sparkles, ExternalLink, ArrowRight, CheckCircle2, Bot, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Explore MitraTech's proprietary SaaS platforms and AI automation tools including Zivox Agent (AI Customer Support) and LeadSpark AI.",
  alternates: {
    canonical: "https://www.mitratechservices.in/products",
  },
  openGraph: {
    title: "Products | MitraTech",
    description: "Explore MitraTech's proprietary SaaS platforms and AI automation tools.",
    url: "https://www.mitratechservices.in/products",
    siteName: "Mitratech Services (OPC) Pvt Ltd",
    images: [
      {
        url: "https://www.mitratechservices.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "MitraTech Proprietary SaaS Products",
      },
    ],
  },
};

const iconMap: Record<string, React.ReactNode> = {
  Bot: <Bot className="w-6 h-6 text-cyan-400" />,
  Search: <Search className="w-6 h-6 text-purple-400" />,
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 bg-slate-950 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>MitraTech Product Labs</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Proprietary SaaS <span className="gradient-text-blue-purple">& AI Platforms</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            In addition to custom client engineering, MitraTech builds and operates enterprise-grade SaaS products that empower businesses to automate customer engagement and accelerate growth.
          </p>
        </div>

        {/* Products Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {PRODUCTS_DATA.map((product) => (
            <div
              key={product.id}
              className="rounded-3xl glass-panel border border-slate-800 p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/40 transition-all duration-300 group shadow-2xl relative overflow-hidden"
            >
              {/* Product Card Top Info */}
              <div className="space-y-6">
                {/* Header Badge & Title */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-2xl bg-slate-900 border border-slate-800 shadow-md">
                      {iconMap[product.iconName]}
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-cyan-400 tracking-wide uppercase">
                        {product.badge}
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold font-heading text-white group-hover:text-blue-400 transition-colors">
                        {product.name}
                      </h2>
                    </div>
                  </div>

                  <a
                    href={product.externalUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-cyan-300 hover:text-white border border-cyan-500/30 text-xs font-semibold transition-all shrink-0"
                  >
                    <span>Visit Product</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Thumbnail Image */}
                <div className="relative w-full h-56 rounded-2xl overflow-hidden border border-slate-800">
                  <Image
                    src={product.heroImage}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-4 left-4 right-4 text-xs text-slate-200 font-medium italic">
                    "{product.tagline}"
                  </div>
                </div>

                {/* Description & Key Highlights */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {product.fullDescription}
                </p>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Core Capabilities:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {product.keyHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80">
                  {product.stats.map((st, i) => (
                    <div key={i} className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-center">
                      <div className="text-base font-bold text-cyan-400 font-heading">{st.value}</div>
                      <div className="text-[10px] text-slate-400 truncate">{st.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-8 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={product.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:flex-1 py-3.5 px-5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold shadow-lg shadow-blue-500/20 flex items-center justify-center space-x-2 transition-all"
                >
                  <span>{product.ctaText}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <Link
                  href={`/products/${product.slug}`}
                  className="w-full sm:w-auto py-3.5 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <span>Product Details</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
