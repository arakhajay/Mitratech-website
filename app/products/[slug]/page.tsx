import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { PRODUCTS_DATA } from "@/constants/productsData";
import {
  Sparkles,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Brain,
  MessageSquare,
  Search,
  Key,
  FileSpreadsheet,
  Check,
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS_DATA.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  const url = `https://www.mitratechservices.in/products/${product.slug}`;

  return {
    title: `${product.name} | MitraTech Products`,
    description: product.shortDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${product.name} - ${product.badge} | MitraTech`,
      description: product.shortDescription,
      url: url,
      siteName: "Mitratech Services (OPC) Pvt Ltd",
      images: [{ url: "https://www.mitratechservices.in/og-image.png" }],
    },
  };
}

const featureIconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
  Brain: <Brain className="w-6 h-6 text-purple-400" />,
  MessageSquare: <MessageSquare className="w-6 h-6 text-blue-400" />,
  Zap: <Zap className="w-6 h-6 text-amber-400" />,
  Search: <Search className="w-6 h-6 text-cyan-400" />,
  Key: <Key className="w-6 h-6 text-emerald-400" />,
  CheckCircle: <CheckCircle2 className="w-6 h-6 text-pink-400" />,
  FileSpreadsheet: <FileSpreadsheet className="w-6 h-6 text-purple-400" />,
};

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = PRODUCTS_DATA.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  // JSON-LD Schema for SoftwareApplication
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: product.name,
    operatingSystem: "Web-based",
    applicationCategory: "BusinessApplication",
    offers: {
      "@type": "Offer",
      price: product.pricingTiers ? "19.00" : "0.00",
      priceCurrency: "USD",
    },
    description: product.fullDescription,
    url: product.externalUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen pt-28 pb-20 bg-slate-950 text-white relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-purple-600/15 to-cyan-400/10 blur-[150px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-white transition-colors">Products</Link>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">{product.name}</span>
          </div>

          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{product.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-xl text-cyan-400 font-semibold font-heading">
                {product.tagline}
              </p>

              <p className="text-slate-300 text-base leading-relaxed">
                {product.fullDescription}
              </p>

              {/* Call to Actions */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <a
                  href={product.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center space-x-2.5 transition-all transform hover:scale-105 active:scale-95 group"
                >
                  <span>{product.ctaText}</span>
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={product.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto px-6 py-4 rounded-xl glass-panel border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-sm flex items-center justify-center space-x-2 transition-all"
                >
                  <span>{product.secondaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 text-cyan-400" />
                </a>
              </div>

              {/* Key Highlights Checklist */}
              <div className="pt-4 space-y-2 border-t border-slate-800/80">
                {product.keyHighlights.map((hl, idx) => (
                  <div key={idx} className="flex items-center space-x-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Image Frame */}
            <div className="relative w-full h-[420px] rounded-3xl overflow-hidden glass-panel border border-slate-700/80 shadow-2xl group">
              <Image
                src={product.heroImage}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl glass-panel border border-slate-800 backdrop-blur-md flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-white">{product.name} Official Web App</div>
                  <div className="text-[11px] text-cyan-400 truncate">{product.externalUrl}</div>
                </div>
                <a
                  href={product.externalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shrink-0"
                >
                  Open App ↗
                </a>
              </div>
            </div>
          </div>

          {/* Product Stats Banner */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 p-8 rounded-3xl glass-panel border border-slate-800 text-center">
            {product.stats.map((st, i) => (
              <div key={i} className="space-y-1">
                <div className="text-3xl font-extrabold text-cyan-400 font-heading">{st.value}</div>
                <div className="text-xs text-slate-400 font-medium">{st.label}</div>
              </div>
            ))}
          </div>

          {/* Deep Feature Showcase */}
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Architectural Features</div>
              <h2 className="text-3xl font-bold font-heading text-white">Engineered for High Performance</h2>
              <p className="text-sm text-slate-400">Discover how {product.name} solves complex business challenges through cutting-edge software architecture.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-panel border border-slate-800 hover:border-blue-500/40 transition-all space-y-3 group"
                >
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 w-fit group-hover:scale-110 transition-transform">
                    {featureIconMap[feat.icon] || <Zap className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-blue-400 transition-colors">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Integrations Wall (if Zivox Agent) */}
          {product.integrations && (
            <div className="space-y-8 p-8 rounded-3xl glass-panel border border-slate-800 text-center">
              <div className="space-y-2">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Ecosystem Compatibility</div>
                <h3 className="text-2xl font-bold font-heading text-white">Deploy Across All Your Tools</h3>
                <p className="text-xs text-slate-400 max-w-xl mx-auto">Seamlessly connect Zivox Agent with your existing messaging apps, CRMs, and store platforms.</p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3">
                {product.integrations.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold text-slate-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                  >
                    ⚡ {tool}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Pricing Tier Matrix (if available) */}
          {product.pricingTiers && (
            <div className="space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <div className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Transparent Pricing</div>
                <h2 className="text-3xl font-bold font-heading text-white">Select Your Plan</h2>
                <p className="text-sm text-slate-400">Start with a 7-day free trial. Cancel anytime with zero commitments.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {product.pricingTiers.map((tier, idx) => (
                  <div
                    key={idx}
                    className={`rounded-2xl p-6 glass-panel border flex flex-col justify-between space-y-6 relative ${
                      tier.popular
                        ? "border-blue-500/80 shadow-2xl shadow-blue-500/20 bg-slate-900/90"
                        : "border-slate-800"
                    }`}
                  >
                    {tier.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-600 text-[10px] font-extrabold text-white uppercase tracking-wider">
                        Most Popular
                      </div>
                    )}

                    <div className="space-y-4">
                      <div>
                        <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                        <p className="text-xs text-slate-400 mt-1">{tier.description}</p>
                      </div>

                      <div className="flex items-baseline space-x-1">
                        <span className="text-3xl font-extrabold text-white font-heading">{tier.price}</span>
                        {tier.period && <span className="text-xs text-slate-400">{tier.period}</span>}
                      </div>

                      <ul className="space-y-2 pt-2 border-t border-slate-800 text-xs">
                        {tier.highlights.map((hl, i) => (
                          <li key={i} className="flex items-center space-x-2 text-slate-300">
                            <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <a
                      href={product.externalUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`w-full py-3 rounded-xl text-xs font-bold text-center transition-all ${
                        tier.popular
                          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md hover:brightness-110"
                          : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                      }`}
                    >
                      {tier.ctaText}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Launch Banner */}
          <div className="p-10 rounded-3xl bg-gradient-to-r from-blue-950 via-slate-900 to-purple-950 border border-blue-500/40 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="max-w-2xl mx-auto space-y-3 relative z-10">
              <h2 className="text-3xl font-bold font-heading text-white">
                Ready to transform your business with {product.name}?
              </h2>
              <p className="text-sm text-slate-300">
                Launch the official product web application now or contact MitraTech engineers for custom integrations.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <a
                href={product.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl flex items-center justify-center space-x-2 transition-all transform hover:scale-105"
              >
                <span>Launch {product.name} App</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel border border-slate-700 hover:border-slate-500 text-white font-semibold text-sm transition-all"
              >
                Request Custom Integration
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
