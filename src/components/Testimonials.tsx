"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck, Sparkles } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIdx) => (prevIdx === 0 ? testimonialsData.length - 1 : prevIdx - 1));
  };

  const next = () => {
    setCurrentIndex((prevIdx) => (prevIdx === testimonialsData.length - 1 ? 0 : prevIdx + 1));
  };

  const current = testimonialsData[currentIndex];

  return (
    <section id="reviews" className="py-10 sm:py-16 lg:py-20 bg-[#EEF2F9] border-t border-[#D8E1F0] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-100/40 blur-[140px] rounded-full pointer-events-none animate-blob" />
      <div
        className="absolute top-10 right-10 w-72 h-72 bg-indigo-100/30 blur-[100px] rounded-full pointer-events-none animate-blob"
        style={{ animationDelay: "4s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#004BFF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#004BFF]" />
            <span>Client Testimonials &amp; Partner Stories</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#030B2E] tracking-tight leading-[1.18]">
            What Founders &amp; Marketing Leaders Say About Xntrova
          </h2>
          <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Real feedback from founders, CEOs, and marketing directors who partnered with Xntrova to scale their digital reach and compound business revenue.
          </p>
        </div>

        {/* Featured Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl sm:rounded-3xl bg-white border border-[#D8E1F0] p-5 sm:p-8 lg:p-12 shadow-xl">
              <div className="relative z-10">
                {/* Stars & Verified Badge */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5 sm:mb-5">
                  <div className="flex items-center gap-1 text-[#FFB703]">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 sm:w-4 h-3.5 sm:h-4 fill-[#FFB703]" />
                    ))}
                    <span className="text-xs sm:text-sm font-bold text-slate-900 ml-1">5.0 / 5.0 Rating</span>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] sm:text-xs font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Verified Review</span>
                  </div>
                </div>

                {/* Quote Mark */}
                <Quote className="w-8 sm:w-10 h-8 sm:h-10 text-[#004BFF]/20 mb-2 sm:mb-3" />

                {/* Quote Text */}
                <p className="text-sm sm:text-lg lg:text-xl text-[#030B2E] font-medium leading-relaxed italic">
                  &ldquo;{current.quote}&rdquo;
                </p>

                {/* Highlight Tag */}
                <div className="mt-3.5 sm:mt-5 inline-block text-[11px] sm:text-xs font-bold text-[#004BFF] bg-blue-50 px-3 py-1 rounded-full border border-blue-200/80">
                  Key Takeaway: {current.highlight}
                </div>

                {/* Client Info and Carousel Navigation */}
                <div className="mt-5 sm:mt-7 pt-4 sm:pt-6 border-t border-[#D8E1F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl sm:rounded-2xl bg-[#004BFF] flex items-center justify-center text-white font-bold text-sm sm:text-base shadow-sm shrink-0">
                      {current.avatarInitial}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-[#030B2E]">{current.name}</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500">
                        {current.role}, <span className="text-[#030B2E] font-semibold">{current.company}</span>
                      </p>
                      <span className="text-[10px] sm:text-[11px] text-[#004BFF] font-semibold mt-0.5 block">
                        Scope: {current.serviceReceived}
                      </span>
                    </div>
                  </div>

                  {/* Navigation Arrows in Circular Pill Buttons */}
                  <div className="flex items-center justify-end gap-2">
                    <button
                      type="button"
                      onClick={prev}
                      className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-white hover:bg-[#004BFF] text-slate-700 hover:text-white border border-[#D8E1F0] transition-colors cursor-pointer shadow-xs flex items-center justify-center"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <span className="text-xs font-mono font-semibold text-slate-500 px-1.5 sm:px-2">
                      {currentIndex + 1} / {testimonialsData.length}
                    </span>
                    <button
                      type="button"
                      onClick={next}
                      className="w-9 sm:w-10 h-9 sm:h-10 rounded-full bg-white hover:bg-[#004BFF] text-slate-700 hover:text-white border border-[#D8E1F0] transition-colors cursor-pointer shadow-xs flex items-center justify-center"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-5">
            {testimonialsData.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setCurrentIndex(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === i ? "w-6 sm:w-7 bg-[#004BFF]" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
