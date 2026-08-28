"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { FAQ_ITEMS } from "@/constants/faqData";
import { getFAQSchema } from "@/lib/jsonld";

export function FaqPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const previewFaqs = FAQ_ITEMS.slice(0, 5);
  const faqSchema = getFAQSchema(previewFaqs);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-slate-950/60 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            Frequently Asked <span className="gradient-text-cyan-blue">Questions.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {previewFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.id}
                className="rounded-2xl glass-panel border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between space-x-4 focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-bold font-heading text-white hover:text-blue-400 transition-colors">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-cyan-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div 
                  className={`px-6 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 overflow-hidden transition-all duration-300 ${
                    isOpen ? 'pb-6 pt-4 max-h-96 opacity-100' : 'max-h-0 pt-0 pb-0 opacity-0'
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            );
          })}
        </div>

        {/* View All FAQs link */}
        <div className="text-center pt-4">
          <Link
            href="/faq"
            className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 hover:text-blue-400 transition-colors"
          >
            <span>View All Frequently Asked Questions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
