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
} from "lucide-react";
import { COMPANY_INFO } from "@/constants/companyData";

const BENEFITS = [
  { title: "Modern UI/UX", desc: "Human-centric glassmorphism, responsive grids, and crisp typography.", icon: Layout },
  { title: "Fast Delivery", desc: "Agile sprint releases with fast turnaround times without quality compromise.", icon: Clock },
  { title: "SEO & Core Web Vitals Ready", desc: "Sub-second load times with structured JSON-LD schemas and dynamic metadata.", icon: Zap },
  { title: "Scalable Architecture", desc: "Built with Next.js 15, TypeScript, and cloud serverless edge APIs.", icon: Layers },
  { title: "Dedicated SLA Support", desc: "Round-the-clock technical monitoring and direct Slack channel access.", icon: Shield },
  { title: "Transparent Pricing", desc: "No hidden charges or unexpected invoices. Clear milestone proposals.", icon: TrendingUp },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Animated Statistics Counter Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800 text-center space-y-2 group hover:border-blue-500/40 transition-colors"
            >
              <div className="text-4xl sm:text-5xl font-extrabold font-heading text-white gradient-text-blue-purple group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Benefits Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div className="space-y-6 lg:col-span-1">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Why Choose MitraTech</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white leading-tight">
              Engineering Digital Excellence for Modern{" "}
              <span className="gradient-text-blue-purple">Enterprise Brands.</span>
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              We don't just build websites; we engineer revenue engines. Our multidisciplinary approach bridges software development, creative design, and conversion rate optimization.
            </p>

            <ul className="space-y-2 text-xs text-slate-300">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Source Code & Asset Ownership</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>95+ Google Lighthouse Guaranteed</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>24/7 Dedicated Client SLA Support</span>
              </li>
            </ul>
          </div>

          {/* Benefits Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BENEFITS.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-panel border border-slate-800 hover:border-slate-700 transition-all space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold font-heading text-white group-hover:text-blue-400 transition-colors">
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
