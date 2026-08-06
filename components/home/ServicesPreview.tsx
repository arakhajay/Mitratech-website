"use client";

import React from "react";
import Link from "next/link";
import {
  Palette,
  Code2,
  Cpu,
  Share2,
  PenTool,
  Target,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { SERVICES_DATA } from "@/constants/servicesData";

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-7 h-7 text-cyan-400" />,
  Code2: <Code2 className="w-7 h-7 text-blue-400" />,
  Cpu: <Cpu className="w-7 h-7 text-purple-400" />,
  Share2: <Share2 className="w-7 h-7 text-pink-400" />,
  PenTool: <PenTool className="w-7 h-7 text-amber-400" />,
  Target: <Target className="w-7 h-7 text-emerald-400" />,
};

export function ServicesPreview() {
  return (
    <section className="py-20 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3.5 py-1.5 rounded-full border border-blue-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>End-to-End Digital Solutions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Services Built to Scale Your{" "}
            <span className="gradient-text-cyan-blue">Digital Presence.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            From high-end website designs and Next.js applications to targeted PPC campaigns, we provide end-to-end digital capabilities under one roof.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative p-8 rounded-2xl glass-panel glass-panel-hover border border-slate-800 flex flex-col justify-between"
            >
              <div className="space-y-5">
                {/* Icon & Starting Price */}
                <div className="flex items-center justify-between">
                  <div className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 group-hover:scale-110 transition-transform">
                    {iconMap[service.iconName]}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                    From {service.pricingStarting}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold font-heading text-white group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Sub-categories preview pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.subCategories.slice(0, 4).map((sub, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center space-x-1 text-[11px] text-slate-300 bg-slate-900/80 px-2.5 py-1 rounded-md border border-slate-800"
                    >
                      <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                      <span>{sub}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 group-hover:text-blue-400 transition-colors"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
