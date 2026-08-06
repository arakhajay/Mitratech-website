"use client";

import React, { useState } from "react";
import { Sparkles, Briefcase, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { CAREER_POSITIONS } from "@/constants/companyData";
import { CtaBanner } from "@/components/home/CtaBanner";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  return (
    <div className="space-y-20 py-10">
      {/* Hero */}
      <section className="text-center max-w-4xl mx-auto px-4 space-y-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/20">
          <Sparkles className="w-4 h-4" />
          <span>Join Our Team</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
          Build the Future of Digital Products <span className="gradient-text-blue-purple">With Us.</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
          We are always looking for ambitious engineers, UI/UX designers, and digital growth specialists passionate about craftsmanship.
        </p>
      </section>

      {/* Benefits */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-2">
            <h3 className="text-base font-bold font-heading text-white">Remote & Flexible</h3>
            <p className="text-xs text-slate-400">Work from anywhere with asynchronous communication protocols.</p>
          </div>
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-2">
            <h3 className="text-base font-bold font-heading text-white">Competitive Pay</h3>
            <p className="text-xs text-slate-400">Top-of-market compensation packages with performance bonuses.</p>
          </div>
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-2">
            <h3 className="text-base font-bold font-heading text-white">Learning Stipend</h3>
            <p className="text-xs text-slate-400">Annual budget for courses, conferences, books, and tech tools.</p>
          </div>
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 space-y-2">
            <h3 className="text-base font-bold font-heading text-white">Latest Tech Hardware</h3>
            <p className="text-xs text-slate-400">MacBook Pro M-Series or workstation setup provided upon joining.</p>
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="max-w-5xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold font-heading text-white text-center">Open Positions</h2>

        <div className="space-y-6">
          {CAREER_POSITIONS.map((job) => (
            <div
              key={job.id}
              className="p-8 rounded-3xl glass-panel border border-slate-800 space-y-6 hover:border-blue-500/50 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold font-heading text-white">{job.title}</h3>
                  <div className="flex items-center space-x-4 text-xs text-slate-400 mt-2">
                    <span className="flex items-center space-x-1">
                      <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{job.department}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      <span>{job.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{job.type} ({job.experience})</span>
                    </span>
                  </div>
                </div>

                <a
                  href={`mailto:careers@mitratech.com?subject=Application for ${encodeURIComponent(job.title)}`}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shrink-0 text-center transition-colors"
                >
                  Apply Now
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{job.description}</p>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                <span className="text-xs font-bold text-slate-300">Requirements:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {job.requirements.map((req, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </div>
  );
}
