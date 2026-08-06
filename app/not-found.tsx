import React from "react";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 text-center">
      <div className="max-w-md w-full p-8 sm:p-12 rounded-3xl glass-panel border border-slate-800 shadow-2xl space-y-6">
        <div className="text-6xl font-extrabold font-heading text-blue-500">404</div>

        <h1 className="text-2xl font-bold font-heading text-white">Page Not Found</h1>

        <p className="text-xs sm:text-sm text-slate-400">
          The page you are looking for might have been removed, renamed, or is temporarily unavailable.
        </p>

        <div className="pt-2">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
