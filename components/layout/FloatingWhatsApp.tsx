"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "@/constants/companyData";

export function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contact.whatsapp}?text=${encodeURIComponent(
    "Hello MitraTech Team, I would like to inquire about your website and web application development services."
  )}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center space-x-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all duration-300 group"
    >
      <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      <span className="text-xs font-bold hidden sm:inline">Chat with Us</span>
    </a>
  );
}
