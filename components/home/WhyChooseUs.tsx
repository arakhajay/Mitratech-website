"use client";

import React from "react";
import {
  CheckCircle2,
  Shield,
  Zap,
  TrendingUp,
  Layout,
  Clock,
  Layers,
  Sparkles,
  Lock,
  GitBranch,
  Gauge
} from "lucide-react";
import { COMPANY_INFO } from "@/constants/companyData";

const STANDARDS = [
  {
    title: "Zero Vendor Lock-In",
    desc: "100% full intellectual property and source code ownership transferred on day one. Clean, modular git repositories.",
    icon: Lock
  },
  {
    title: "95+ Core Web Vitals Guaranteed",
    desc: "Sub-second First Contentful Paint (FCP) with server-side pre-rendering, automatic WebP/AVIF compression, and zero layout shift.",
    icon: Gauge
  },
  {
    title: "Production Next.js 15 & React 19",
    desc: "Strict TypeScript type-safety, Server Components, and scalable edge routing built to support millions of monthly visits.",
    icon: Layers
  },
  {
    title: "Pune Founder-Direct SLA",
    desc: "Direct communication with senior engineers and founder Ajay Arakh without layers of non-technical account managers.",
    icon: Shield
  },
  {
    title: "Agile 2-Week Sprints",
    desc: "Predictable milestone deliveries with continuous staging previews and immediate feature feedback loops.",
    icon: GitBranch
  },
  {
    title: "Transparent Fixed Milestones",
    desc: "Detailed technical scope documents with zero hidden fees, ambiguous surcharges, or surprise change orders.",
    icon: TrendingUp
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-24 relative bg-[#070A11] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Engineering Performance Matrix */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 text-center space-y-2 hover:border-blue-500/40 transition-colors"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-heading text-white font-mono">
                {stat.value}
              </div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Core Principles & Standards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="space-y-6 lg:col-span-5">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-cyan-300">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Engineering Standards</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white leading-tight">
              Why Fast-Growing Companies Choose MitraTech.
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              We bridge the gap between world-class product design and robust full-stack architecture. No cut corners, no bloated WordPress templates, and no opaque outsourcing.
            </p>

            <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3">
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">The MitraTech Guarantee</div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Full source code & Figma asset handover</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Sub-second page speeds & SEO-ready structure</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Direct WhatsApp & Slack engineering support</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 6 Standards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {STANDARDS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
