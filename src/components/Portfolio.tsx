"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  X,
  Sparkles,
} from "lucide-react";
import { caseStudiesData, CaseStudy } from "@/data/caseStudies";

interface PortfolioProps {
  onOpenAuditModal: () => void;
}

export default function Portfolio({ onOpenAuditModal }: PortfolioProps) {
  const [filter, setFilter] = useState<string>("All");
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  const categories = ["All", "E-Commerce", "SEO Growth", "Web Development", "Paid Advertising"];

  const filteredProjects = caseStudiesData.filter((item) => {
    if (filter === "All") return true;
    return item.category === filter;
  });

  return (
    <section id="portfolio" className="py-10 sm:py-16 lg:py-20 bg-[#EEF2F9] border-t border-[#D8E1F0] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-blue-100/40 blur-[130px] rounded-full pointer-events-none animate-blob" />
      <div
        className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-100/30 blur-[100px] rounded-full pointer-events-none animate-blob"
        style={{ animationDelay: "4s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#004BFF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#004BFF]" />
            <span>Proven Client Results &amp; Case Studies</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#030B2E] tracking-tight leading-[1.18]">
            Real Work. Real Data. Real Commercial Transformation.
          </h2>
          <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Explore how we partnered with ambitious brands to solve complex technical bottlenecks,
            dominate organic search, and scale ad-attributed revenue.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-7">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  filter === cat
                    ? "bg-[#004BFF] text-white shadow-sm ring-2 ring-[#004BFF]/20"
                    : "bg-white text-slate-600 hover:text-[#004BFF] border border-[#D8E1F0] hover:bg-white hover:shadow-xs"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Enterprise Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-7">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} className="rounded-2xl bg-white border border-[#D8E1F0] overflow-hidden hover:border-[#004BFF]/60 hover:shadow-[0_20px_40px_-15px_rgba(0,75,255,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xs group h-full">
                <div className="p-4 sm:p-7">
                  {/* Header: Client & Category Badge */}
                  <div className="flex items-center justify-between gap-3 mb-2.5 sm:mb-3.5">
                    <div className="flex items-center gap-2.5">
                      {project.clientLogo && (
                        <div className="relative h-6 sm:h-7 w-16 sm:w-20">
                          <Image
                            src={project.clientLogo}
                            alt={project.client}
                            fill
                            sizes="80px"
                            className="object-contain"
                          />
                        </div>
                      )}
                      <span className="text-xs sm:text-sm font-bold text-[#030B2E]">{project.client}</span>
                    </div>
                    <span className="text-[10px] sm:text-xs font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-blue-50 text-[#004BFF] border border-blue-100">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-xl font-bold text-[#030B2E] group-hover:text-[#004BFF] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Challenge Summary */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-[#030B2E]">Challenge: </strong>
                    {project.challenge}
                  </p>

                  {/* Solution Summary */}
                  <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-[#030B2E]">Solution: </strong>
                    {project.solution}
                  </p>

                  {/* Verified Results Spotlight */}
                  <div className="mt-3.5 sm:mt-5 p-2.5 sm:p-3.5 rounded-2xl bg-[#EEF2F9] border border-[#D8E1F0] grid grid-cols-3 gap-1 sm:gap-2 text-center">
                    <div>
                      <div className="text-lg sm:text-2xl font-black text-[#004BFF]">
                        {project.results.primaryMetric}
                      </div>
                      <div className="text-[9px] sm:text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {project.results.primaryLabel}
                      </div>
                    </div>
                    <div className="border-x border-[#D8E1F0] px-0.5 sm:px-1">
                      <div className="text-lg sm:text-2xl font-black text-[#030B2E]">
                        {project.results.secondaryMetric}
                      </div>
                      <div className="text-[9px] sm:text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {project.results.secondaryLabel}
                      </div>
                    </div>
                    <div>
                      <div className="text-lg sm:text-2xl font-black text-emerald-600">
                        {project.results.tertiaryMetric}
                      </div>
                      <div className="text-[9px] sm:text-xs text-slate-500 mt-0.5 line-clamp-1">
                        {project.results.tertiaryLabel}
                      </div>
                    </div>
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-[#EEF2F9] text-slate-600 border border-[#D8E1F0]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-4 sm:px-7 py-3 bg-[#F4F7FC] border-t border-[#D8E1F0] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setActiveModalStudy(project)}
                    className="text-xs font-bold text-[#004BFF] hover:text-[#0037BD] flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>Read Full Case Study</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>

                  <button
                    type="button"
                    onClick={onOpenAuditModal}
                    className="text-xs text-slate-600 hover:text-[#004BFF] font-bold cursor-pointer"
                  >
                    Get Similar Results →
                  </button>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeModalStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-title"
        >
          <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-[#D8E1F0] p-5 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveModalStudy(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-[11px] sm:text-xs uppercase tracking-wider text-[#004BFF] font-bold mb-1.5 sm:mb-2">
              <span>{activeModalStudy.industry}</span>
              <span>•</span>
              <span>{activeModalStudy.category}</span>
            </div>

            <h3 id="case-study-title" className="text-xl sm:text-2xl font-bold text-[#030B2E] mb-3 sm:mb-4">
              {activeModalStudy.title}
            </h3>

            <div className="p-3 sm:p-4 rounded-2xl bg-[#EEF2F9] border border-[#D8E1F0] grid grid-cols-3 gap-2 text-center mb-4 sm:mb-6">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-[#004BFF]">
                  {activeModalStudy.results.primaryMetric}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-600">{activeModalStudy.results.primaryLabel}</div>
              </div>
              <div className="border-x border-[#D8E1F0]">
                <div className="text-xl sm:text-2xl font-bold text-[#030B2E]">
                  {activeModalStudy.results.secondaryMetric}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-600">{activeModalStudy.results.secondaryLabel}</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-emerald-600">
                  {activeModalStudy.results.tertiaryMetric}
                </div>
                <div className="text-[10px] sm:text-xs text-slate-600">{activeModalStudy.results.tertiaryLabel}</div>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-slate-600">
              <div>
                <h4 className="text-[11px] sm:text-xs font-bold text-[#030B2E] uppercase tracking-wider mb-1">
                  The Obstacle / Context
                </h4>
                <p className="leading-relaxed bg-[#EEF2F9] p-3 rounded-xl border border-[#D8E1F0]">
                  {activeModalStudy.challenge}
                </p>
              </div>

              <div>
                <h4 className="text-[11px] sm:text-xs font-bold text-[#030B2E] uppercase tracking-wider mb-1">
                  The Xntrova Engineering &amp; Growth Strategy
                </h4>
                <p className="leading-relaxed bg-[#EEF2F9] p-3 rounded-xl border border-[#D8E1F0]">
                  {activeModalStudy.solution}
                </p>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 pt-4 sm:pt-5 border-t border-[#D8E1F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-xs text-slate-500">Verified Client: {activeModalStudy.client}</span>
              <button
                type="button"
                onClick={() => {
                  setActiveModalStudy(null);
                  onOpenAuditModal();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#004BFF] hover:bg-[#0037BD] text-white font-bold text-xs sm:text-sm shadow-md cursor-pointer text-center"
              >
                Schedule Strategy Audit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
