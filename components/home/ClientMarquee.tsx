"use client";

import React from "react";

const TECH_STACK = [
  "Next.js 15",
  "React 19",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "PostgreSQL",
  "AWS Cloud",
  "Figma UI/UX",
  "Google Cloud",
  "Supabase",
  "Python AI",
];

export function ClientMarquee() {
  const items = [...TECH_STACK, ...TECH_STACK];

  return (
    <div className="py-6 bg-slate-950/60 border-y border-slate-800/60 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-3 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
          Enterprise Technology Ecosystem & Modern Architecture
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Gradient Fades on Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-left space-x-10 whitespace-nowrap py-1">
          {items.map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 text-slate-400 font-heading font-semibold text-sm hover:text-cyan-400 transition-colors px-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
