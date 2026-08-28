import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Sparkles, CheckCircle2, ArrowRight, Zap } from "lucide-react";
import { SERVICES_DATA } from "@/constants/servicesData";
import { getServiceSchema, getFAQSchema } from "@/lib/jsonld";
import { CtaBanner } from "@/components/home/CtaBanner";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((srv) => ({
    slug: srv.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  const url = `https://www.mitratechservices.in/services/${service.slug}`;

  return {
    title: `${service.title} Services`,
    description: service.shortDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${service.title} | MitraTech`,
      description: service.shortDescription,
      url: url,
      siteName: "Mitratech Services (OPC) Pvt Ltd",
      images: [
        {
          url: "https://www.mitratechservices.in/og-image.png",
          width: 1200,
          height: 630,
          alt: `${service.title} - MitraTech`,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = getServiceSchema(service.title, service.fullDescription);
  const faqSchema = getFAQSchema(service.faqs);

  return (
    <div className="space-y-20 py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Service Detail Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
              <Sparkles className="w-4 h-4" />
              <span>Service Deep Dive</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
              {service.title}
            </h1>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              {service.fullDescription}
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {service.subCategories.map((sub, i) => (
                <span
                  key={i}
                  className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-cyan-300"
                >
                  {sub}
                </span>
              ))}
            </div>

            <div className="pt-4 flex items-center space-x-4">
              <Link
                href="/contact"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-lg shadow-blue-500/25 flex items-center space-x-2"
              >
                <span>Request Proposal for {service.title}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative h-80 sm:h-96 rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold font-heading text-white">Service Features & Deliverables</h2>
          <p className="text-slate-400 text-sm mt-2">What you receive when partnering with MitraTech for {service.title}.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.features.map((feat, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold font-heading text-white">{feat.title}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{feat.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Benefits */}
      <section className="max-w-5xl mx-auto px-4 bg-slate-950/50 py-12 rounded-3xl border border-slate-800 space-y-6">
        <h2 className="text-2xl font-bold font-heading text-white text-center">Business Impact & Benefits</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {service.benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start space-x-3 p-4 rounded-xl bg-slate-900/80 border border-slate-800">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm text-slate-300">{benefit}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Process Timeline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <h2 className="text-3xl font-bold font-heading text-white text-center">Implementation Process</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {service.process.map((step) => (
            <div key={step.step} className="p-5 rounded-2xl glass-panel border border-slate-800 space-y-2">
              <div className="text-xs font-bold text-cyan-400">Step 0{step.step}</div>
              <h3 className="text-base font-bold font-heading text-white">{step.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-5xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-2xl font-bold font-heading text-white">Technology Stack Used</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {service.techStack.map((tech, idx) => (
            <div key={idx} className="px-4 py-2.5 rounded-xl glass-panel border border-slate-800 text-xs font-semibold text-white flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>{tech.name}</span>
              <span className="text-[10px] text-slate-500">({tech.category})</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 space-y-6">
        <h2 className="text-2xl font-bold font-heading text-white text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {service.faqs.map((faq, idx) => (
            <div key={idx} className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-2">
              <h3 className="text-base font-bold text-white">{faq.question}</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
