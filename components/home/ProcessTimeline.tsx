"use client";

import React from "react";
import { Sparkles, Search, Compass, Palette, Code2, ShieldCheck, Rocket, LifeBuoy } from "lucide-react";

const STEPS = [
  { step: "01", title: "Discovery", desc: "Understanding goals, audience, and technical specs.", icon: Search },
  { step: "02", title: "Planning", desc: "Mapping user flows, sitemaps, and architecture.", icon: Compass },
  { step: "03", title: "Design", desc: "Crafting Figma wireframes, UI kits, and prototypes.", icon: Palette },
  { step: "04", title: "Development", desc: "Coding Next.js 15 frontend & serverless APIs.", icon: Code2 },
  { step: "05", title: "Testing", desc: "Auditing Core Web Vitals, security, and responsive UI.", icon: ShieldCheck },
  { step: "06", title: "Launch", desc: "Deploying to Vercel/AWS with zero downtime.", icon: Rocket },
  { step: "07", title: "Support", desc: "Providing SLA maintenance and performance updates.", icon: LifeBuoy },
];

export function ProcessTimeline() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 px-3.5 py-1.5 rounded-full border border-purple-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Agency Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Our 7-Step Seamless <span className="gradient-text-blue-purple">Execution Process.</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            From initial concept discovery to post-launch SLA support, our structured workflow ensures predictable quality and rapid delivery.
          </p>
        </div>

        {/* Timeline Horizontal Line / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {STEPS.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="relative p-6 rounded-2xl glass-panel border border-slate-800 space-y-4 group hover:border-cyan-500/40 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-extrabold font-heading text-slate-700 group-hover:text-blue-400 transition-colors">
                    {item.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-heading text-white">
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
    </section>
  );
}
