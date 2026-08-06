"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { QuickConsultModal } from "@/components/ui/QuickConsultModal";

export function StickyQuoteCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center space-x-3 p-3 rounded-2xl glass-panel border border-blue-500/30 shadow-2xl animate-fadeIn">
        <div className="w-8 h-8 rounded-xl bg-blue-600/20 text-cyan-400 flex items-center justify-center">
          <Sparkles className="w-4 h-4 animate-spin-slow" />
        </div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-white">Have a Project in Mind?</span>
          <span className="text-[11px] text-slate-400">Get a free proposal & estimate in 24h</span>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="ml-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold flex items-center space-x-1.5 shadow-md transition-all active:scale-95"
        >
          <span>Get Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      <QuickConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
