"use client";

import React, { useState } from "react";
import {
  Code2,
  Search,
  TrendingUp,
  ShoppingBag,
  Share2,
  PenTool,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Layers,
  X,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";

interface ServicesProps {
  onSelectServiceForAudit: (serviceTitle: string) => void;
}

export default function Services({ onSelectServiceForAudit }: ServicesProps) {
  const [activeCategory, setActiveCategory] = useState<"all" | "technology" | "growth" | "media">("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const filteredServices = servicesData.filter((s) => {
    if (activeCategory === "all") return true;
    return s.category === activeCategory;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return <Code2 className="w-5 sm:w-6 h-5 sm:h-6 text-[#004BFF] group-hover:text-white transition-colors" />;
      case "SearchCheck":
        return <Search className="w-5 sm:w-6 h-5 sm:h-6 text-[#004BFF] group-hover:text-white transition-colors" />;
      case "TrendingUp":
        return <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-[#004BFF] group-hover:text-white transition-colors" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-5 sm:w-6 h-5 sm:h-6 text-[#004BFF] group-hover:text-white transition-colors" />;
      case "Share2":
        return <Share2 className="w-5 sm:w-6 h-5 sm:h-6 text-[#004BFF] group-hover:text-white transition-colors" />;
      case "PenTool":
        return <PenTool className="w-5 sm:w-6 h-5 sm:h-6 text-[#004BFF] group-hover:text-white transition-colors" />;
      default:
        return <Layers className="w-5 sm:w-6 h-5 sm:h-6 text-[#004BFF] group-hover:text-white transition-colors" />;
    }
  };

  return (
    <section id="services" className="py-10 sm:py-16 lg:py-20 bg-[#EEF2F9] border-t border-[#D8E1F0] relative overflow-hidden">
      {/* Ambient soft glow orbs */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-blue-200/30 blur-[130px] rounded-full pointer-events-none animate-blob" />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-200/30 blur-[120px] rounded-full pointer-events-none animate-blob"
        style={{ animationDelay: "5s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#004BFF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#004BFF]" />
            <span>Growth &amp; Technology Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#030B2E] tracking-tight leading-[1.18]">
            Best Digital Marketing &amp; Tech Services in Delhi for Sustainable Business Growth
          </h2>
          <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            As a leading digital marketing agency in Delhi, we bring together tailored strategies, fresh creativity, and continuous optimization to help your brand grow online.
          </p>

          {/* Category Filter Pills in HCLTech pill style */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-7">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[#004BFF] text-white shadow-sm"
                  : "bg-white text-slate-600 hover:text-[#004BFF] border border-[#D8E1F0] hover:bg-white"
              }`}
            >
              All Capabilities ({servicesData.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("technology")}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === "technology"
                  ? "bg-[#004BFF] text-white shadow-sm"
                  : "bg-white text-slate-600 hover:text-[#004BFF] border border-[#D8E1F0] hover:bg-white"
              }`}
            >
              Web &amp; Tech Architecture
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("growth")}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === "growth"
                  ? "bg-[#004BFF] text-white shadow-sm"
                  : "bg-white text-slate-600 hover:text-[#004BFF] border border-[#D8E1F0] hover:bg-white"
              }`}
            >
              SEO &amp; Performance PPC
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("media")}
              className={`px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === "media"
                  ? "bg-[#004BFF] text-white shadow-sm"
                  : "bg-white text-slate-600 hover:text-[#004BFF] border border-[#D8E1F0] hover:bg-white"
              }`}
            >
              Brand &amp; Content Strategy
            </button>
          </div>
        </div>

        {/* Enterprise Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredServices.map((service, idx) => (
              <div key={service.id} className="rounded-2xl bg-white border border-[#D8E1F0] p-4 sm:p-7 flex flex-col justify-between hover:border-[#004BFF]/60 hover:shadow-[0_20px_40px_-15px_rgba(0,75,255,0.12)] transition-all duration-300 hover:-translate-y-1 shadow-sm group h-full">
                <div>
                  {/* Header / Icon & Metric Pill */}
                  <div className="flex items-center justify-between gap-3 mb-3 sm:mb-4">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center group-hover:bg-[#004BFF] transition-all duration-300 shadow-xs group-hover:scale-105">
                      {getIcon(service.iconName)}
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold text-[#004BFF] bg-blue-50 border border-blue-200/80 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full transition-colors group-hover:bg-blue-100">
                      {service.metric}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-[#030B2E] group-hover:text-[#004BFF] transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Key Deliverables */}
                  <div className="mt-3.5 sm:mt-5 pt-3 sm:pt-4 border-t border-[#D8E1F0] space-y-1.5 sm:space-y-2">
                    <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                      Key Deliverables:
                    </span>
                    {service.deliverables.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#004BFF] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-1 sm:gap-1.5">
                    {service.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded-full text-[10px] sm:text-[11px] font-medium bg-[#EEF2F9] text-slate-600 border border-[#D8E1F0]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#D8E1F0] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-[#004BFF] hover:text-[#0037BD] flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectServiceForAudit(service.title)}
                    className="px-3.5 sm:px-4 py-1.5 rounded-full text-xs font-bold bg-blue-50 hover:bg-[#004BFF] text-[#004BFF] hover:text-white transition-all border border-blue-200/80 hover:border-transparent cursor-pointer"
                  >
                    Get Proposal
                  </button>
                </div>
              </div>
          ))}
        </div>
      </div>

      {/* Scope Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-[#D8E1F0] p-5 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                {getIcon(selectedService.iconName)}
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-[#004BFF] font-bold">
                  {selectedService.highlight}
                </span>
                <h3 id="service-modal-title" className="text-xl sm:text-2xl font-bold text-[#030B2E]">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 sm:mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="mb-4 sm:mb-6">
              <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2.5">
                Full Deliverables Scope:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.deliverables.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-xs text-slate-800 p-2 sm:p-2.5 rounded-xl bg-[#EEF2F9] border border-[#D8E1F0]">
                    <CheckCircle2 className="w-4 h-4 text-[#004BFF] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#D8E1F0] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[11px] text-slate-400 block">Typical Metric:</span>
                <span className="text-sm font-bold text-[#004BFF]">{selectedService.metric}</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  const title = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForAudit(title);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#004BFF] hover:bg-[#0037BD] text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer text-center"
              >
                Inquire About This Service
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
