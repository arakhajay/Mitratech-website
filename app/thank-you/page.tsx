import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Home } from "lucide-react";

export const metadata = {
  title: "Thank You | MitraTech Digital Agency",
  description: "Thank you for contacting MitraTech. Our technical team will reach out to you within 24 hours.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-xl w-full p-8 sm:p-12 rounded-3xl glass-panel border border-emerald-500/30 shadow-2xl space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
          <CheckCircle2 className="w-12 h-12" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
          Inquiry Successfully Received!
        </h1>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Thank you for reaching out to MitraTech. A Senior Solutions Architect is reviewing your project details and will send a custom proposal & schedule a call within 24 hours.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center justify-center space-x-2 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/portfolio"
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs flex items-center justify-center space-x-2 transition-colors"
          >
            <span>Explore Case Studies</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
