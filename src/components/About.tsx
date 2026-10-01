"use client";

import React from "react";
import Image from "next/image";
import {
  Lightbulb,
  Compass,
  BarChart3,
  TrendingUp,
  ArrowRight,
  Eye,
  Users,
  MousePointerClick,
  Gauge,
} from "lucide-react";

interface AboutProps {
  onOpenAuditModal: () => void;
}

export default function About({ onOpenAuditModal }: AboutProps) {
  const pillars = [
    {
      icon: Lightbulb,
      title: "Creative Ideas",
      desc: "Fresh thinking that builds powerful brand stories.",
    },
    {
      icon: Compass,
      title: "Strategic Planning",
      desc: "Smart strategies backed by deep market insights.",
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      desc: "Decisions tied to real impact and ROI.",
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      desc: "Real results that drive growth and long-term success.",
    },
  ];

  return (
    <section id="about" className="py-10 sm:py-16 lg:py-20 bg-white border-t border-[#D8E1F0] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-100/40 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#004BFF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-[#004BFF]" aria-hidden="true" />
              <span>About Xntrova Technologies</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#030B2E] tracking-tight leading-[1.18]">
              Driven By Ideas.{" "}
              <span className="text-[#004BFF]">Focused on Results.</span>
            </h2>

            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              At Xntrova, we believe that the key to great marketing is understanding people.
              Each of our strategies is rooted in fresh ideas, robust planning, and a clear focus on what truly matters.
              We combine creativity with data-driven decisions to create meaningful experiences that connect, engage, and inspire action.
            </p>

            <div className="border-l-2 border-[#004BFF]/40 pl-3.5 py-1 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Whether you want to shape your brand story, improve visibility, or drive conversion,
              we take a creative and data-driven approach to ensure the best possible results.
              Standing as the premier digital agency in Delhi NCR, we aim to deliver measurable results and help your business climb the competitive ladder with confidence.
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex items-start gap-2.5 sm:gap-3">
                    <span className="shrink-0 flex h-9 sm:h-10 w-9 sm:w-10 items-center justify-center rounded-full bg-blue-50 text-[#004BFF] border border-blue-100">
                      <Icon className="w-4 sm:w-5 h-4 sm:h-5" />
                    </span>
                    <div>
                      <h4 className="font-bold text-[#030B2E] text-xs sm:text-sm">{pillar.title}</h4>
                      <p className="text-[11px] sm:text-xs text-slate-500 leading-snug mt-0.5">{pillar.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2 sm:pt-4">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#004BFF] hover:bg-[#0037BD] text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all cursor-pointer group"
              >
                <span>Let&apos;s Grow Together</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Diagram with Responsive Mobile Layout */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[460px] bg-[#EEF2F9] rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#D8E1F0]">
              
              {/* Desktop/Tablet: Circular Orbital Diagram */}
              <div className="hidden sm:block relative aspect-square w-full">
                {/* Central Xntrova Hub */}
                <div className="absolute inset-0 m-auto flex h-28 w-28 lg:h-32 lg:w-32 flex-col items-center justify-center gap-1.5 rounded-full border border-[#D8E1F0] bg-white p-3 text-center shadow-md ring-4 ring-[#004BFF]/10 z-10 transition-transform duration-300 hover:scale-105">
                  <div className="flex items-center justify-center">
                    <Image
                      src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png"
                      alt="Xntrova"
                      width={80}
                      height={22}
                      style={{ width: 'auto' }}
                      className="h-5 lg:h-6 object-contain"
                    />
                  </div>
                  <span className="text-[9px] font-bold uppercase tracking-wider text-[#004BFF]">
                    Driven by Results
                  </span>
                </div>

                {/* 4 Floating Satellite Benefit Cards */}
                <div className="animate-float absolute left-2 top-2 w-[140px] lg:w-[150px] rounded-2xl border border-[#D8E1F0] bg-white p-3 shadow-xs hover:shadow-md hover:border-[#004BFF]/50 transition-all cursor-default">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[#004BFF] border border-blue-100">
                    <Eye className="w-4 h-4" />
                  </span>
                  <p className="mt-2 font-bold text-[#030B2E] text-xs leading-tight">Build Visibility</p>
                  <p className="mt-0.5 text-[11px] text-slate-500 leading-snug">Increase reach &amp; stand out.</p>
                </div>

                <div className="animate-float-delayed absolute right-2 top-2 w-[140px] lg:w-[150px] rounded-2xl border border-[#D8E1F0] bg-white p-3 shadow-xs hover:shadow-md hover:border-[#004BFF]/50 transition-all cursor-default">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[#004BFF] border border-blue-100">
                    <Users className="w-4 h-4" />
                  </span>
                  <p className="mt-2 font-bold text-[#030B2E] text-xs leading-tight">Engage Audience</p>
                  <p className="mt-0.5 text-[11px] text-slate-500 leading-snug">Turn visitors into customers.</p>
                </div>

                <div className="animate-float-delayed absolute left-2 bottom-2 w-[140px] lg:w-[150px] rounded-2xl border border-[#D8E1F0] bg-white p-3 shadow-xs hover:shadow-md hover:border-[#004BFF]/50 transition-all cursor-default">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[#004BFF] border border-blue-100">
                    <MousePointerClick className="w-4 h-4" />
                  </span>
                  <p className="mt-2 font-bold text-[#030B2E] text-xs leading-tight">Drive Conversions</p>
                  <p className="mt-0.5 text-[11px] text-slate-500 leading-snug">High-ROI smart funnels.</p>
                </div>

                <div className="animate-float absolute right-2 bottom-2 w-[140px] lg:w-[150px] rounded-2xl border border-[#D8E1F0] bg-white p-3 shadow-xs hover:shadow-md hover:border-[#004BFF]/50 transition-all cursor-default">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-[#004BFF] border border-blue-100">
                    <Gauge className="w-4 h-4" />
                  </span>
                  <p className="mt-2 font-bold text-[#030B2E] text-xs leading-tight">Measure &amp; Improve</p>
                  <p className="mt-0.5 text-[11px] text-slate-500 leading-snug">Optimize continuously.</p>
                </div>
              </div>

              {/* Mobile: Clean Stacked Hub + 2x2 Grid */}
              <div className="block sm:hidden space-y-3">
                <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-[#D8E1F0] shadow-xs">
                  <Image
                    src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png"
                    alt="Xntrova"
                    width={85}
                    height={22}
                    style={{ width: 'auto' }}
                    className="h-5 object-contain"
                  />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#004BFF] bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
                    Driven by Results
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl border border-[#D8E1F0] bg-white p-2.5 shadow-2xs">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[#004BFF]">
                      <Eye className="w-3.5 h-3.5" />
                    </span>
                    <p className="mt-1.5 font-bold text-[#030B2E] text-xs leading-tight">Build Visibility</p>
                    <p className="mt-0.5 text-[10px] text-slate-500 leading-snug">Increase reach &amp; stand out.</p>
                  </div>

                  <div className="rounded-xl border border-[#D8E1F0] bg-white p-2.5 shadow-2xs">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[#004BFF]">
                      <Users className="w-3.5 h-3.5" />
                    </span>
                    <p className="mt-1.5 font-bold text-[#030B2E] text-xs leading-tight">Engage Audience</p>
                    <p className="mt-0.5 text-[10px] text-slate-500 leading-snug">Turn visitors to customers.</p>
                  </div>

                  <div className="rounded-xl border border-[#D8E1F0] bg-white p-2.5 shadow-2xs">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[#004BFF]">
                      <MousePointerClick className="w-3.5 h-3.5" />
                    </span>
                    <p className="mt-1.5 font-bold text-[#030B2E] text-xs leading-tight">Drive Conversions</p>
                    <p className="mt-0.5 text-[10px] text-slate-500 leading-snug">High-ROI funnels.</p>
                  </div>

                  <div className="rounded-xl border border-[#D8E1F0] bg-white p-2.5 shadow-2xs">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-[#004BFF]">
                      <Gauge className="w-3.5 h-3.5" />
                    </span>
                    <p className="mt-1.5 font-bold text-[#030B2E] text-xs leading-tight">Measure &amp; Improve</p>
                    <p className="mt-0.5 text-[10px] text-slate-500 leading-snug">Optimize continuously.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Overview Bottom Card */}
            <div className="rounded-2xl border border-[#D8E1F0] bg-white p-3.5 sm:p-4 shadow-sm max-w-sm mx-auto">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-bold text-[#030B2E]">Performance Overview</p>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] sm:text-[11px] font-bold text-emerald-700 border border-emerald-100">
                  <TrendingUp className="w-3 h-3 text-emerald-600" />
                  Growing
                </span>
              </div>
              <svg viewBox="0 0 120 40" className="mt-2 w-full h-8 sm:h-10" preserveAspectRatio="none">
                <path
                  d="M2 36 C 20 34, 30 24, 42 26 S 62 14, 74 12 S 96 4, 118 2"
                  fill="none"
                  stroke="#004BFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
              <dl className="mt-2 grid grid-cols-3 gap-2 border-t border-[#D8E1F0] pt-2 text-center">
                <div>
                  <dt className="text-[9px] sm:text-[10px] text-slate-400">Organic Traffic</dt>
                  <dd className="text-xs font-bold text-[#030B2E] mt-0.5">+250%</dd>
                </div>
                <div>
                  <dt className="text-[9px] sm:text-[10px] text-slate-400">Projects</dt>
                  <dd className="text-xs font-bold text-[#030B2E] mt-0.5">120+</dd>
                </div>
                <div>
                  <dt className="text-[9px] sm:text-[10px] text-slate-400">Happy Clients</dt>
                  <dd className="text-xs font-bold text-[#030B2E] mt-0.5">500+</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
