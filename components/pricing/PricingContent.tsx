"use client";

import React, { useState } from "react";
import { Sparkles, Check, X } from "lucide-react";
import { PRICING_PLANS, PRICING_FEATURE_MATRIX } from "@/constants/pricingData";
import { QuickConsultModal } from "@/components/ui/QuickConsultModal";
import { CtaBanner } from "@/components/home/CtaBanner";

export function PricingContent() {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("Professional Growth");

  const openQuoteForPlan = (planName: string) => {
    setSelectedPlan(planName);
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-20 py-10">
      {/* Hero Header & Toggle */}
      <section className="text-center max-w-4xl mx-auto px-4 space-y-6">
        <div className="inline-flex items-center space-x-2 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-4 py-2 rounded-full border border-cyan-500/20">
          <Sparkles className="w-4 h-4" />
          <span>Transparent & Flexible Plans</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold font-heading text-white tracking-tight">
          Invest in High-Performing <span className="gradient-text-blue-purple">Digital Growth.</span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-xl mx-auto">
          No hidden fees or surprise invoices. Choose a plan tailored to your business stage or request a custom milestone quote.
        </p>

        {/* Toggle Billing */}
        <div className="flex items-center justify-center space-x-4 pt-4">
          <span className={`text-xs font-semibold ${!isAnnual ? "text-white" : "text-slate-400"}`}>
            Monthly Billing
          </span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="w-14 h-8 rounded-full bg-slate-800 p-1 relative transition-colors border border-slate-700"
            aria-label="Toggle Annual Billing"
          >
            <div
              className={`w-6 h-6 rounded-full bg-blue-500 transition-transform ${
                isAnnual ? "translate-x-6 bg-cyan-400" : ""
              }`}
            />
          </button>
          <span className={`text-xs font-semibold flex items-center space-x-1.5 ${isAnnual ? "text-white" : "text-slate-400"}`}>
            <span>Annual Billing</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold">
              Save 20%
            </span>
          </span>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.priceAnnually : plan.priceMonthly;
            const isEnterprise = plan.id === "plan-enterprise";

            return (
              <div
                key={plan.id}
                className={`relative p-8 rounded-3xl glass-panel border flex flex-col justify-between transition-all ${
                  plan.popular
                    ? "border-blue-500/80 shadow-2xl shadow-blue-500/20 bg-slate-900/90"
                    : "border-slate-800"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold font-heading text-white">{plan.name}</h3>
                    <p className="text-xs text-slate-400 mt-1">{plan.description}</p>
                  </div>

                  {isEnterprise ? (
                    <div>
                      <span className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                        Custom Quote
                      </span>
                      <span className="block text-[11px] text-cyan-400 font-semibold mt-0.5">
                        Decided upon consultation
                      </span>
                    </div>
                  ) : (
                    <div className="flex items-baseline space-x-1">
                      <span className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
                        ₹{price.toLocaleString("en-IN")}
                      </span>
                      <span className="text-xs text-slate-400">/ project</span>
                    </div>
                  )}

                  <button
                    onClick={() => openQuoteForPlan(plan.name)}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs shadow-lg transition-all ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400 shadow-blue-500/25"
                        : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                    }`}
                  >
                    {plan.ctaText}
                  </button>

                  <div className="space-y-2.5 pt-4 border-t border-slate-800">
                    <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">What's Included:</div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}

                    {plan.notIncluded.map((feat, i) => (
                      <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-500 line-through">
                        <X className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detailed Comparison Matrix */}
      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold font-heading text-white">Detailed Feature Matrix</h2>
          <p className="text-slate-400 text-sm mt-1">Compare capabilities across Starter, Pro, and Enterprise tiers.</p>
        </div>

        <div className="rounded-2xl glass-panel border border-slate-800 overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-900/60">
                <th className="p-4 text-white font-bold font-heading">Features</th>
                <th className="p-4 text-slate-300 font-semibold text-center">Starter</th>
                <th className="p-4 text-cyan-400 font-semibold text-center">Pro Growth</th>
                <th className="p-4 text-purple-400 font-semibold text-center">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {PRICING_FEATURE_MATRIX.map((cat, i) => (
                <React.Fragment key={i}>
                  <tr className="bg-slate-950/40 border-b border-slate-800">
                    <td colSpan={4} className="p-3 font-bold text-white uppercase text-[10px] tracking-widest">
                      {cat.category}
                    </td>
                  </tr>
                  {cat.features.map((feat, j) => (
                    <tr key={j} className="border-b border-slate-800/60 hover:bg-slate-800/30">
                      <td className="p-4 text-slate-300 font-medium">{feat.name}</td>
                      <td className="p-4 text-center text-slate-400">
                        {typeof feat.starter === "boolean" ? (
                          feat.starter ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-slate-600 mx-auto" />
                        ) : (
                          feat.starter
                        )}
                      </td>
                      <td className="p-4 text-center text-cyan-300 font-semibold">
                        {typeof feat.pro === "boolean" ? (
                          feat.pro ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-slate-600 mx-auto" />
                        ) : (
                          feat.pro
                        )}
                      </td>
                      <td className="p-4 text-center text-purple-300 font-semibold">
                        {typeof feat.enterprise === "boolean" ? (
                          feat.enterprise ? <Check className="w-4 h-4 text-emerald-400 mx-auto" /> : <X className="w-4 h-4 text-slate-600 mx-auto" />
                        ) : (
                          feat.enterprise
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <CtaBanner />
      <QuickConsultModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} defaultService={selectedPlan} />
    </div>
  );
}
