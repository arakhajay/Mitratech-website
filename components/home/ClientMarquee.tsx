"use client";

import React from "react";
import { COMPANY_INFO } from "@/constants/companyData";

export function ClientMarquee() {
  const logos = [...COMPANY_INFO.clientLogos, ...COMPANY_INFO.clientLogos];

  return (
    <div className="py-8 bg-slate-950/60 border-y border-slate-800/60 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-4 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Trusted By Industry Leaders & Innovative Startups Worldwide
        </p>
      </div>

      <div className="relative w-full overflow-hidden flex">
        {/* Gradient Fades on Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0F172A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0F172A] to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee-left space-x-12 whitespace-nowrap py-2">
          {logos.map((client, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 text-slate-400 font-heading font-bold text-lg hover:text-cyan-400 transition-colors cursor-pointer px-4"
            >
              <span>{client.logo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
