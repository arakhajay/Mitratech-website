"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  CheckCircle2,
} from "lucide-react";
import { QuickConsultModal } from "@/components/ui/QuickConsultModal";
import { TubesBackground } from "@/components/ui/TubesBackground";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[85vh] flex flex-col justify-center pt-10 pb-20 overflow-hidden bg-[#0A0E17]">
        {/* Subtle Architectural Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b18_1px,transparent_1px),linear-gradient(to_bottom,#1e293b18_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[120px] pointer-events-none rounded-full" />

        {/* 3D Tubes Canvas Background */}
        <TubesBackground className="absolute inset-0 w-full h-full bg-transparent">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8 pt-8">
            
            {/* Top Location & Studio Label */}
            <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/70 text-xs font-semibold text-slate-300 shadow-xl pointer-events-auto">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Mitratech Services (OPC) Pvt Ltd • Pune Engineering Studio</span>
            </div>

            {/* Main Hero Headline - Clear, Authoritative, Anti-Slop */}
            <div className="space-y-4 max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.08] pointer-events-auto select-none">
                Software Engineering & Digital Products{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-300 bg-clip-text text-transparent">
                  Built for Scale.
                </span>
              </h1>

              {/* Subtitle with Specific Proof & Guarantees */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed pointer-events-auto select-none">
                We engineer enterprise Next.js 15 platforms, custom SaaS architectures, and high-ROI conversion engines with 95+ Core Web Vitals and zero vendor lock-in.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-1 pointer-events-auto w-full sm:w-auto">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-xl shadow-blue-600/25 flex items-center justify-center space-x-2.5 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Book Engineering Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold text-sm flex items-center justify-center space-x-2 transition-all cursor-pointer"
              >
                <Code2 className="w-4 h-4 text-cyan-400" />
                <span>Explore Core Services</span>
              </Link>
            </div>

            {/* Key Engineering Standards Bar */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto text-left text-xs font-semibold text-slate-300 pointer-events-auto w-full">
              <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% Code Ownership</span>
              </div>
              <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Next.js 15 & React 19</span>
              </div>
              <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Sub-Second Latency</span>
              </div>
              <div className="flex items-center space-x-2 p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Pune Founder Direct SLA</span>
              </div>
            </div>

          </div>
        </TubesBackground>
      </section>

      <QuickConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}


