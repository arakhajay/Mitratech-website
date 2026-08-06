"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Play,
  ShieldCheck,
  CheckCircle2,
  Zap,
  Code,
  Layers,
  Star,
} from "lucide-react";
import { QuickConsultModal } from "@/components/ui/QuickConsultModal";

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-16 overflow-hidden">
        {/* Background Glowing Gradients & Abstract Particle Shapes */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[400px] rounded-full bg-gradient-to-tr from-blue-600/20 via-purple-600/20 to-cyan-500/10 blur-[130px] pointer-events-none animate-pulse-glow" />
        <div className="absolute top-12 left-10 w-72 h-72 rounded-full bg-blue-600/15 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-purple-600/15 blur-[110px] pointer-events-none" />

        {/* Floating Animated Badges */}
        <div className="hidden lg:block absolute top-32 left-[12%] animate-float pointer-events-none">
          <div className="p-3 rounded-2xl glass-panel border border-cyan-500/30 flex items-center space-x-3 shadow-xl">
            <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Sub-Second Speed</div>
              <div className="text-[10px] text-slate-400">Core Web Vitals 98+</div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-36 right-[12%] animate-float [animation-delay:2s] pointer-events-none">
          <div className="p-3 rounded-2xl glass-panel border border-purple-500/30 flex items-center space-x-3 shadow-xl">
            <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">Next.js 15 & React 19</div>
              <div className="text-[10px] text-slate-400">Enterprise Stack</div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute top-40 right-[15%] animate-float [animation-delay:4s] pointer-events-none">
          <div className="p-3 rounded-2xl glass-panel border border-emerald-500/30 flex items-center space-x-3 shadow-xl">
            <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
              <Star className="w-5 h-5 fill-emerald-400" />
            </div>
            <div>
              <div className="text-xs font-bold text-white">99% Client Rating</div>
              <div className="text-[10px] text-slate-400">100+ Projects Done</div>
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel border border-blue-500/40 text-xs font-medium text-cyan-300 shadow-lg">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
            <span>Transforming Ideas into Powerful Digital Solutions</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
          </div>

          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.1]">
            Building Digital Experiences That{" "}
            <span className="gradient-text-blue-purple">Grow Businesses.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto font-normal leading-relaxed">
            From beautiful websites and powerful web applications to high-performing marketing campaigns, MitraTech helps startups, SMEs, and enterprise brands succeed in the digital world.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-base shadow-xl shadow-blue-600/30 flex items-center justify-center space-x-2.5 transition-all transform hover:scale-105 active:scale-95 group"
            >
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="/portfolio"
              className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-base flex items-center justify-center space-x-2 transition-all hover:bg-slate-800/80"
            >
              <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              <span>View Portfolio</span>
            </Link>
          </div>

          {/* Key Value Highlights */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left text-xs font-medium text-slate-400 border-t border-slate-800/80">
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Custom Figma UI/UX</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Next.js 15 & React 19</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>95+ Core Web Vitals</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Dedicated 24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      <QuickConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
