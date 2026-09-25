"use client";

import React, { useState } from "react";
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
  ChevronRight
} from "lucide-react";
import { SERVICES_DATA } from "@/constants/servicesData";

const iconMap: Record<string, React.ReactNode> = {
  Palette: <Palette className="w-5 h-5 text-cyan-400" />,
  Code2: <Code2 className="w-5 h-5 text-blue-400" />,
  Cpu: <Cpu className="w-5 h-5 text-purple-400" />,
  Share2: <Share2 className="w-5 h-5 text-pink-400" />,
  PenTool: <PenTool className="w-5 h-5 text-amber-400" />,
  Target: <Target className="w-5 h-5 text-emerald-400" />,
};

export function ServicesPreview() {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES_DATA[1].id);

  const activeService = SERVICES_DATA.find((s) => s.id === activeServiceId) || SERVICES_DATA[0];

  return (
    <section className="py-24 relative bg-[#090D15] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-800/80 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-blue-300">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Full-Spectrum Digital Studio</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
              Engineering Services Built for Precision.
            </h2>

            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              We eliminate technical debt and fragmented vendor management by delivering end-to-end design, full-stack engineering, and performance growth under one roof.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 hover:text-blue-400 transition-colors shrink-0 group"
          >
            <span>Explore All 6 Services</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Asymmetric Interactive Studio Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Service Selectors (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {SERVICES_DATA.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={"w-full p-4 rounded-2xl text-left transition-all flex items-center justify-between border " + (
                    isActive
                      ? "bg-slate-900/90 border-blue-500/50 shadow-lg shadow-blue-500/5 text-white"
                      : "bg-slate-950/40 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-900/40 hover:border-slate-700"
                  )}
                >
                  <div className="flex items-center space-x-3.5 min-w-0">
                    <div className={"p-2.5 rounded-xl border " + (
                      isActive ? "bg-slate-800 border-slate-700" : "bg-slate-900 border-slate-800"
                    )}>
                      {iconMap[service.iconName]}
                    </div>
                    <div className="truncate">
                      <div className="font-bold font-heading text-sm text-white truncate">
                        {service.title}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                        From {service.pricingStarting}
                      </div>
                    </div>
                  </div>

                  <ChevronRight className={"w-4 h-4 shrink-0 transition-transform " + (
                    isActive ? "text-cyan-400 translate-x-1" : "text-slate-600"
                  )} />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep-Dive Feature Showcase Panel (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between space-y-8 min-h-[480px]">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-4">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">SELECTED CAPABILITY</span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mt-1">
                    {activeService.title}
                  </h3>
                </div>
                <div className="px-3.5 py-1.5 rounded-xl bg-slate-800 text-cyan-300 border border-slate-700 font-mono text-xs font-semibold">
                  Starting at {activeService.pricingStarting}
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {activeService.fullDescription}
              </p>

              {/* Sub-capabilities Grid */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Deliverables:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                  {activeService.subCategories.map((sub, i) => (
                    <div key={i} className="flex items-center space-x-2 text-xs text-slate-300 p-2.5 rounded-xl bg-slate-950/80 border border-slate-800/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack Tags */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Production Stack:</span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeService.techStack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-slate-950 text-slate-300 border border-slate-800 text-xs font-mono font-medium">
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                href={"/services/" + activeService.slug}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-600/20 flex items-center justify-center space-x-2 transition-all hover:translate-x-0.5"
              >
                <span>View Full Service Architecture & Pricing</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto text-xs font-semibold text-slate-400 hover:text-white flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span>Request Discovery Call</span>
                <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
