"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  TrendingUp,
  ShieldCheck,
  Star,
  Zap,
  Code2,
  Search,
  DollarSign,
  Activity,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface HeroProps {
  onOpenAuditModal: () => void;
}

export default function Hero({ onOpenAuditModal }: HeroProps) {
  const [activeTab, setActiveTab] = useState<"seo" | "web" | "roas">("seo");

  const tabData = {
    seo: {
      title: "Organic Search Surge",
      metric: "+250%",
      label: "Average Organic Traffic Lift",
      secondary: "42 #1 Ranked Keywords",
      statIcon: Search,
      pill: "Compounding Traffic",
    },
    web: {
      title: "Next.js Core Web Vitals",
      metric: "99/100",
      label: "Lighthouse Performance & Speed",
      secondary: "0.8s Avg First Contentful Paint",
      statIcon: Code2,
      pill: "Sub-Second Speed",
    },
    roas: {
      title: "Performance Ads Multiplier",
      metric: "4.6x",
      label: "Blended Return on Ad Spend (ROAS)",
      secondary: "-48% Customer Acquisition Cost",
      statIcon: DollarSign,
      pill: "Maximized Conversion",
    },
  };

  const chartHeights = {
    seo: [25, 35, 42, 52, 60, 68, 76, 84, 90, 95, 100, 100],
    web: [82, 85, 88, 92, 94, 95, 98, 99, 99, 100, 100, 100],
    roas: [20, 26, 34, 44, 56, 68, 76, 84, 90, 94, 98, 100],
  };

  const current = tabData[activeTab];

  return (
    <section className="bg-[#EEF2F9] pt-2 sm:pt-4 pb-6 sm:pb-10">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#030B2E] via-[#0D1854] to-[#1E1156] text-white p-4 sm:p-7 lg:py-8 lg:px-10 shadow-2xl border border-white/10">
          {/* Background Ambient Glow Elements */}
          <div
            className="absolute top-1/4 -left-20 w-72 h-72 bg-[#00D2FF]/20 rounded-full blur-3xl pointer-events-none animate-blob"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-10 right-10 w-72 h-72 bg-[#6842FF]/25 rounded-full blur-3xl pointer-events-none animate-blob"
            style={{ animationDelay: "4s" }}
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center relative z-10">
            {/* Left Column: Hero Content */}
            <div className="lg:col-span-7 text-left space-y-3 sm:space-y-3.5">
              {/* Pill Tag with Live Radar Pulse */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-blue-200 text-xs font-semibold backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00D2FF] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00D2FF]"></span>
                </span>
                <span>Supercharging Business Growth in Delhi NCR</span>
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight text-white leading-[1.14]">
                Scale Your Business With The{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D2FF] via-[#5487FF] to-[#A070FF]">
                  Best Digital Marketing
                </span>{" "}
                &amp; Web Agency in Delhi
              </h1>

              {/* Signature Accent Underline (Electric Blue) */}
              <svg
                width="120"
                height="8"
                viewBox="0 0 120 8"
                fill="none"
                aria-hidden="true"
                className="text-[#00D2FF]"
              >
                <path
                  d="M2 6C24 2 96 2 118 6"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>

              {/* Subtitle */}
              <p className="text-xs sm:text-base text-slate-200/90 leading-relaxed max-w-xl">
                Unlock your business potential and connect with your targeted customers by partnering with Xntrova.
                We combine modern frontend web engineering with high-ROI organic search and performance marketing to deliver sustainable growth.
              </p>

              {/* CTAs (HCLTech Pill Style) */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 pt-1">
                <button
                  type="button"
                  onClick={onOpenAuditModal}
                  className="btn-shimmer inline-flex items-center justify-center gap-2 px-6 py-2.5 sm:py-3 rounded-full bg-white text-[#030B2E] hover:bg-slate-100 font-bold text-xs sm:text-sm shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group"
                >
                  <span>Get Free Digital Audit</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <a
                  href="#portfolio"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:py-3 rounded-full border border-white/25 hover:border-white text-white font-semibold text-xs sm:text-sm hover:bg-white/10 transition-all text-center"
                >
                  <span>Explore Client Work</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="pt-3 sm:pt-4 border-t border-white/10 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <div>
                    <span className="font-bold text-white">4.9 / 5.0</span>
                    <span className="text-slate-300 text-[11px] ml-1">(150+ Reviews)</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span>Verified B2B Partner</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>48h Sprint Kickoff</span>
                </div>
              </div>
            </div>

            {/* Right Column: Crisp White Floating Agency Console */}
            <div className="lg:col-span-5 relative">
              {/* Floating Micro Badge 1 (Top-Right) */}
              <div className="animate-float hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-800 border border-slate-200/90 shadow-lg text-[11px] font-bold absolute -top-3 -right-2 z-20">
                <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                <span>99/100 Web Vitals</span>
              </div>

              {/* Floating Micro Badge 2 (Bottom-Left) */}
              <div className="animate-float-delayed hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-slate-800 border border-slate-200/90 shadow-lg text-[11px] font-bold absolute -bottom-3 -left-3 z-20">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
                <span>42 Keywords Ranked #1</span>
              </div>

              <div className="rounded-2xl bg-white text-slate-900 border border-slate-200/80 p-4 sm:p-5.5 shadow-[0_20px_50px_rgba(3,11,46,0.35)] relative z-10">
                {/* Card Header */}
                <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">
                      Get a Free Digital Audit
                    </h3>
                    <p className="text-[11px] text-slate-500">
                      Live growth projections &amp; benchmarks
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#004BFF] bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-full">
                    <Activity className="w-2.5 h-2.5 text-[#004BFF]" />
                    Live Preview
                  </span>
                </div>

                {/* Channel Tabs */}
                <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-lg mt-2.5 sm:mt-3">
                  <button
                    type="button"
                    onClick={() => setActiveTab("seo")}
                    className={`py-1.5 px-1 sm:px-2 rounded-md text-[11px] sm:text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === "seo"
                        ? "bg-white text-[#004BFF] shadow-xs font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    SEO Growth
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("web")}
                    className={`py-1.5 px-1 sm:px-2 rounded-md text-[11px] sm:text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === "web"
                        ? "bg-white text-[#004BFF] shadow-xs font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Web Tech
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("roas")}
                    className={`py-1.5 px-1 sm:px-2 rounded-md text-[11px] sm:text-xs font-semibold transition-all cursor-pointer ${
                      activeTab === "roas"
                        ? "bg-white text-[#004BFF] shadow-xs font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    Paid ROAS
                  </button>
                </div>

                {/* Dynamic Metrics Showcase */}
                <div className="mt-2.5 sm:mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                      {current.title}
                    </span>
                    <span className="text-[9px] sm:text-[10px] font-bold text-[#004BFF] bg-blue-50 px-2 py-0.5 rounded">
                      {current.pill}
                    </span>
                  </div>

                  <div className="mt-1.5 flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-extrabold text-[#004BFF] tracking-tight">
                      {current.metric}
                    </span>
                    <span className="text-[10px] sm:text-[11px] text-emerald-600 flex items-center font-semibold">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Verified ROI Impact
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 mt-0.5">{current.label}</p>

                  {/* Growth Chart Simulation */}
                  <div className="mt-2 pt-2 border-t border-slate-200">
                    <div className="h-9 sm:h-10 w-full flex items-end gap-1.5">
                      {chartHeights[activeTab].map((height, i) => (
                        <div
                          key={i}
                          style={{ height: `${height}%` }}
                          className={`w-1/12 rounded-t transition-all duration-500 ease-out ${
                            i < 4
                              ? "bg-blue-100"
                              : i < 7
                              ? "bg-blue-300"
                              : i < 10
                              ? "bg-[#004BFF]/75"
                              : "bg-[#004BFF] shadow-xs"
                          }`}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between text-[9px] text-slate-400 mt-0.5 font-mono">
                      <span>Audit (Day 1)</span>
                      <span>Sprint 4</span>
                      <span>Scale Phase</span>
                    </div>
                  </div>
                </div>

                {/* Performance Bullets */}
                <div className="mt-2 sm:mt-2.5 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#004BFF] shrink-0" />
                    <div>
                      <div className="font-bold text-slate-800 text-[11px]">120+ Delivered</div>
                      <div className="text-[9px] text-slate-500">On Schedule</div>
                    </div>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <div>
                      <div className="font-bold text-slate-800 text-[11px]">500+ Clients</div>
                      <div className="text-[9px] text-slate-500">98% Retention</div>
                    </div>
                  </div>
                </div>

                {/* Fast Direct CTA Button */}
                <div className="mt-2.5 pt-2 sm:pt-2.5 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={onOpenAuditModal}
                    className="btn-shimmer w-full py-2.5 rounded-full bg-[#004BFF] hover:bg-[#0037BD] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer"
                  >
                    <span>Claim Your Free Digital Audit</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Docked Diagnostic Bar (HCLTech Style) */}
          <div className="mt-5 sm:mt-6 pt-3 sm:pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 bg-white/5 backdrop-blur-md rounded-2xl px-3.5 sm:px-4 py-2.5 border border-white/10 relative z-10">
            <div className="flex items-center gap-2.5 text-xs text-slate-200 text-center sm:text-left">
              <Sparkles className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
              <span>Supercharging your business: Request a comprehensive technical &amp; organic growth audit.</span>
            </div>
            <button
              type="button"
              onClick={onOpenAuditModal}
              className="btn-shimmer w-full sm:w-auto shrink-0 px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-[#004BFF] hover:bg-[#0037BD] text-white shadow-md transition-all cursor-pointer text-center"
            >
              Run Free Diagnostic →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
