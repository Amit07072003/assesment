"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { faqsData } from "@/data/faqs";

export default function FAQ() {
  const [openId, setOpenId] = useState<string>(faqsData[0].id);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="faq" className="py-10 sm:py-16 lg:py-20 bg-white border-t border-[#D8E1F0] relative overflow-hidden">
      {/* Ambient background glow for depth */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-100/40 blur-[130px] rounded-full pointer-events-none animate-blob" />
      <div
        className="absolute bottom-10 left-10 w-72 h-72 bg-indigo-100/30 blur-[100px] rounded-full pointer-events-none animate-blob"
        style={{ animationDelay: "5s" }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#004BFF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider mb-2">
            <HelpCircle className="w-3.5 h-3.5 text-[#004BFF]" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#030B2E] tracking-tight leading-[1.18]">
            Frequently Asked Questions
          </h2>
          <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about our technical deliverables, engagement models, timelines, and verified performance guarantees.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-2.5 sm:space-y-3.5">
          {faqsData.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl sm:rounded-2xl transition-all duration-200 border overflow-hidden ${
                  isOpen
                    ? "bg-white border-[#004BFF]/50 shadow-md ring-1 ring-[#004BFF]/20"
                    : "bg-[#EEF2F9] border-[#D8E1F0] hover:bg-white hover:border-slate-300"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-3.5 sm:p-6 text-left flex items-center justify-between gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004BFF] cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                >
                  <span className="text-sm sm:text-lg font-bold text-[#030B2E] flex items-center gap-2.5 sm:gap-3">
                    <HelpCircle className="w-4 sm:w-5 h-4 sm:h-5 text-[#004BFF] shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <div
                    className={`w-7 sm:w-8 h-7 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "rotate-180 bg-[#004BFF] text-white"
                        : "bg-white text-slate-600 border border-[#D8E1F0]"
                    }`}
                  >
                    <ChevronDown className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="px-4 pb-4 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-base text-slate-600 leading-relaxed border-t border-[#D8E1F0]"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box in HCLTech enterprise style */}
        <div className="mt-6 sm:mt-10 p-4 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#EEF2F9] border border-[#D8E1F0] text-center flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-[#030B2E] flex items-center justify-center sm:justify-start gap-2">
              <MessageSquare className="w-4 h-4 text-[#004BFF]" />
              Have a specific question about your project?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Speak directly with our senior technical strategists. No high-pressure sales reps.
            </p>
          </div>
          <a
            href="#contact"
            className="btn-shimmer w-full sm:w-auto px-6 py-2.5 sm:py-3 rounded-full bg-[#004BFF] hover:bg-[#0037BD] text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-all shadow-md cursor-pointer text-center"
          >
            Ask a Strategist
          </a>
        </div>
      </div>
    </section>
  );
}
