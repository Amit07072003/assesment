"use client";

import React, { useState } from "react";
import {
  Search,
  Target,
  PenTool,
  Code2,
  Rocket,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      title: "Discover & Deep Audit",
      subtitle: "Week 1",
      icon: Search,
      desc: "We perform a thorough analysis of your current digital footprint, crawl errors, competitor keywords, user drop-offs, and commercial growth levers.",
      deliverables: ["Full Technical SEO & CRO Audit", "Competitor Gap Matrix", "Key Performance Indicators (KPI) Document"],
    },
    {
      num: "02",
      title: "Strategize & Blueprint",
      subtitle: "Week 2",
      icon: Target,
      desc: "We formulate an actionable 90-day growth roadmap, specifying exact target queries, ad budget allocations, conversion funnel wireframes, and tech stack choices.",
      deliverables: ["Channel Budget Allocation Plan", "Information Architecture Blueprint", "Content Cluster Roadmap"],
    },
    {
      num: "03",
      title: "Design & UX Prototyping",
      subtitle: "Weeks 3–4",
      icon: PenTool,
      desc: "Our design team crafts responsive, conversion-optimized interfaces in Figma, aligning brand aesthetics with cognitive UX psychology to eliminate checkout friction.",
      deliverables: ["High-Fidelity Component UI Kit", "Mobile & Desktop Responsive Prototypes", "Ad Creative & Copy Assets"],
    },
    {
      num: "04",
      title: "Agile Engineering & Build",
      subtitle: "Weeks 5–6",
      icon: Code2,
      desc: "We code clean, modular Next.js / React components with TypeScript and Tailwind CSS, configure tracking tags, test Core Web Vitals, and run rigorous QA.",
      deliverables: ["Production-Ready Web Application", "Server-Side Tracking & GA4 Integration", "Cross-Browser & Device Testing"],
    },
    {
      num: "05",
      title: "Launch & Continuous Scale",
      subtitle: "Ongoing",
      icon: Rocket,
      desc: "We execute zero-downtime deployment, activate performance campaigns, monitor real-time rankings, and conduct weekly A/B tests to compound revenue.",
      deliverables: ["Zero-Downtime Deployment", "Weekly Async Sprint Reports", "Continuous CRO & A/B Optimization"],
    },
  ];

  return (
    <section id="process" className="py-10 sm:py-16 lg:py-20 bg-white border-t border-[#D8E1F0] relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#004BFF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#004BFF]" />
            <span>Our 5-Step Execution Methodology</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#030B2E] tracking-tight leading-[1.18]">
            How We Turn Ambition into Measurable Market Traction
          </h2>
          <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            A battle-tested, transparent workflow that eliminates guesswork and delivers projects on time, on budget, and built to scale.
          </p>
        </div>

        {/* Process Step Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3.5 mb-5 sm:mb-8">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;
            return (
              <button
                key={step.num}
                type="button"
                onClick={() => setActiveStep(idx)}
                className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl text-left transition-all duration-300 border cursor-pointer ${
                  isCurrent
                    ? "bg-white border-[#004BFF] shadow-md ring-2 ring-[#004BFF]/20 scale-[1.02]"
                    : "bg-[#EEF2F9] border-[#D8E1F0] hover:bg-white hover:border-slate-300 hover:shadow-xs"
                } ${idx === 4 ? "col-span-2 sm:col-span-1" : ""}`}
              >
                <div className="flex items-center justify-between mb-1.5 sm:mb-2.5">
                  <span
                    className={`text-xs sm:text-sm font-mono font-bold ${
                      isCurrent ? "text-[#004BFF]" : "text-slate-400"
                    }`}
                  >
                    {step.num}
                  </span>
                  <div
                    className={`w-7 sm:w-8 h-7 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center transition-colors ${
                      isCurrent
                        ? "bg-[#004BFF] text-white shadow-sm"
                        : "bg-white text-slate-500 border border-[#D8E1F0]"
                    }`}
                  >
                    <Icon className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                  </div>
                </div>
                <div className="text-[10px] sm:text-[11px] text-slate-400 font-semibold">{step.subtitle}</div>
                <div
                  className={`text-xs sm:text-sm font-bold mt-0.5 line-clamp-1 ${
                    isCurrent ? "text-[#030B2E]" : "text-slate-700"
                  }`}
                >
                  {step.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Card */}
        <div className="rounded-2xl sm:rounded-3xl bg-[#EEF2F9] border border-[#D8E1F0] p-4 sm:p-8 lg:p-10 shadow-sm transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-7 space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl sm:text-4xl font-mono font-black text-[#004BFF]">
                  {steps[activeStep].num}
                </span>
                <div>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-slate-400 font-bold">
                    {steps[activeStep].subtitle} Phase
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#030B2E]">
                    {steps[activeStep].title}
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-base text-slate-600 leading-relaxed pt-1">
                {steps[activeStep].desc}
              </p>

              <div className="pt-2 sm:pt-3">
                <span className="text-[11px] sm:text-xs font-bold text-[#004BFF] uppercase tracking-wider block mb-2">
                  Phase Deliverables &amp; Milestones:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {steps[activeStep].deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 p-2 sm:p-2.5 rounded-xl bg-white border border-[#D8E1F0] text-xs text-slate-800"
                    >
                      <CheckCircle2 className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#004BFF] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-[#D8E1F0] space-y-2.5 sm:space-y-3 shadow-xs">
              <div className="text-xs font-bold text-[#004BFF] uppercase tracking-wider">
                Sprint Checkpoint Guarantee
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Before progressing from Phase {steps[activeStep].num} to the next sprint, we conduct a formal stakeholder walkthrough. No phase is signed off until all deliverables meet our rigorous quality and performance thresholds.
              </p>
              <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-[#D8E1F0] text-xs">
                <span className="text-slate-400">Next Step:</span>
                <span className="font-bold text-[#030B2E]">
                  {activeStep < steps.length - 1
                    ? steps[activeStep + 1].title
                    : "Continuous Scale"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
