"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from "lucide-react";

const TESTIMONIALS = [
  {
    quote: "MitraTech delivered a financial dashboard that exceeded our performance expectations. Our clients rave about how fast and responsive the analytics views are.",
    author: "David Vance",
    role: "Chief Technology Officer",
    company: "Apex Financial Labs",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "The luxury e-commerce web store designed by MitraTech feels like walking through a high-end boutique. Mobile sales doubled within 30 days of launch.",
    author: "Elena Rostova",
    role: "Brand Director",
    company: "Verve Eyewear",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "Working with MitraTech on our Google Ads PPC campaigns cut our lead acquisition cost by 62%. They are transparent, responsive, and obsessive about results.",
    author: "Marcus Thorne",
    role: "VP of Growth",
    company: "Krypton Health",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? TESTIMONIALS.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === TESTIMONIALS.length - 1 ? 0 : prevIdx + 1));
  };

  const item = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Testimonials</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading text-white tracking-tight">
            What Our Partners <span className="gradient-text-blue-purple">Say About Us.</span>
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="relative p-8 sm:p-12 rounded-3xl glass-panel border border-slate-800 shadow-2xl space-y-6">
          <Quote className="w-12 h-12 text-blue-500/30" />

          <p className="text-lg sm:text-2xl text-slate-200 font-medium italic leading-relaxed">
            "{item.quote}"
          </p>

          <div className="flex items-center space-x-1 text-amber-400">
            {[...Array(item.rating)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400" />
            ))}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <div className="flex items-center space-x-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-slate-700">
                <Image src={item.avatar} alt={item.author} fill className="object-cover" />
              </div>
              <div>
                <h4 className="text-base font-bold font-heading text-white">{item.author}</h4>
                <p className="text-xs text-slate-400">
                  {item.role} • <span className="text-cyan-400">{item.company}</span>
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center space-x-2">
              <button
                onClick={prev}
                className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 transition-colors"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="p-2.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-blue-500 transition-colors"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
