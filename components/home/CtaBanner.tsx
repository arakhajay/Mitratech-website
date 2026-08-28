"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, PhoneCall } from "lucide-react";
import { QuickConsultModal } from "@/components/ui/QuickConsultModal";
import { COMPANY_INFO } from "@/constants/companyData";

export function CtaBanner() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative p-10 sm:p-16 rounded-3xl bg-gradient-to-r from-blue-900/40 via-purple-900/40 to-slate-900 border border-blue-500/30 overflow-hidden shadow-2xl space-y-8 text-center">
            {/* Background Orbs */}
            <div className="absolute -top-32 -left-32 w-64 h-64 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-64 h-64 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />

            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-300">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Let's Discuss Your Next Digital Project</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white max-w-3xl mx-auto leading-tight">
              Ready to Build Something <span className="gradient-text-blue-purple">Amazing?</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Schedule a strategic discovery consultation with our technical engineering team in Pune to turn your vision into a production-ready web application.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center space-x-2.5 transition-all transform hover:scale-105 active:scale-95"
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={COMPANY_INFO.contact.telLink}
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel border border-slate-700 hover:border-slate-500 text-slate-200 hover:text-white font-semibold text-sm flex items-center justify-center space-x-2 transition-all hover:bg-slate-800/80"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Call {COMPANY_INFO.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <QuickConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
