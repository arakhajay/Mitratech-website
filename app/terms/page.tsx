import React from "react";

export const metadata = {
  title: "Terms & Conditions | MitraTech",
  description: "MitraTech's Terms and Conditions governing website usage and client service agreements.",
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-white">Terms & Conditions</h1>
        <p className="text-xs text-slate-400">Last updated: February 2026</p>
      </div>

      <div className="prose prose-invert max-w-none text-slate-300 space-y-6 text-sm leading-relaxed">
        <p>
          By accessing or using the MitraTech website and contracting our software development services, you agree to comply with the following Terms and Conditions.
        </p>

        <h2 className="text-xl font-bold font-heading text-white">1. Intellectual Property & Ownership</h2>
        <p>
          Upon full payment of agreed project milestones, 100% ownership of all custom design files (Figma assets), source code repositories (TypeScript/Next.js), and branding collateral is transferred to the client.
        </p>

        <h2 className="text-xl font-bold font-heading text-white">2. Warranties & SLA Guarantees</h2>
        <p>
          We guarantee that all code delivered complies with modern performance standards (95+ Core Web Vitals) and is free of major critical security vulnerabilities at the time of launch.
        </p>

        <h2 className="text-xl font-bold font-heading text-white">3. Payment & Milestone Schedules</h2>
        <p>
          Fixed-price projects follow defined milestone payments set forth in individual project proposals. Milestone payments are non-refundable once work has commenced and been delivered according to specifications.
        </p>
      </div>
    </div>
  );
}
