"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Target, Compass, Award, Sparkles } from "lucide-react";
import { COMPANY_INFO } from "@/constants/companyData";

export function AboutPreview() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image Stack & Glass Cards */}
          <div className="relative">
            <div className="relative w-full h-[420px] sm:h-[480px] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                alt="MitraTech Agency Team Collaborating"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
            </div>

            {/* Overlaid Floating Achievement Card */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 p-5 rounded-2xl glass-panel border border-blue-500/40 shadow-2xl max-w-xs space-y-2">
              <div className="flex items-center space-x-2 text-cyan-400 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>Engineered for Growth</span>
              </div>
              <p className="text-xs text-slate-300">
                Helping businesses bridge the gap between design excellence and scalable full-stack web applications.
              </p>
            </div>
          </div>

          {/* Right Column - Text & Core Pillars */}
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
              <span>About MitraTech</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white leading-tight">
              We Craft Software & Digital Campaigns That{" "}
              <span className="gradient-text-blue-purple">Drive Real Impact.</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {COMPANY_INFO.aboutShort}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl glass-panel border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-blue-400 font-semibold text-sm font-heading">
                  <Target className="w-4 h-4 text-blue-400" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  To empower ambition-driven businesses with robust digital products, high-converting interfaces, and predictable customer growth.
                </p>
              </div>

              <div className="p-4 rounded-xl glass-panel border border-slate-800 space-y-2">
                <div className="flex items-center space-x-2 text-purple-400 font-semibold text-sm font-heading">
                  <Compass className="w-4 h-4 text-purple-400" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  To be the global digital engineering partner of choice for startups and enterprises seeking innovation and uncompromised quality.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all hover:translate-x-1"
              >
                <span>Read Full Company Story</span>
                <ArrowRight className="w-4 h-4 text-cyan-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
