"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, CheckCircle2 } from "lucide-react";

interface GrowthCalculatorProps {
  onApplyProjections: (details: { industry: string; goal: string; budget: string }) => void;
}

export default function GrowthCalculator({ onApplyProjections }: GrowthCalculatorProps) {
  const [industry, setIndustry] = useState("ecommerce");
  const [goal, setGoal] = useState("seo");
  const [budgetTier, setBudgetTier] = useState("growth");

  const calculateProjections = () => {
    let trafficMultiplier = "+250%";
    let leadsRange = "45 - 90 / mo";
    let estRoas = "4.5x";
    let speedScore = "99/100";

    if (goal === "seo") {
      trafficMultiplier = budgetTier === "scale" ? "+380%" : budgetTier === "growth" ? "+250%" : "+160%";
      leadsRange = budgetTier === "scale" ? "120 - 240 / mo" : budgetTier === "growth" ? "50 - 95 / mo" : "25 - 45 / mo";
      estRoas = "Compounding";
    } else if (goal === "ppc") {
      trafficMultiplier = budgetTier === "scale" ? "+420%" : "+210%";
      leadsRange = budgetTier === "scale" ? "180 - 350 / mo" : budgetTier === "growth" ? "80 - 150 / mo" : "30 - 65 / mo";
      estRoas = budgetTier === "scale" ? "5.2x" : "4.4x";
    } else {
      trafficMultiplier = "+190%";
      leadsRange = budgetTier === "scale" ? "140 - 260 / mo" : "60 - 110 / mo";
      speedScore = "100/100 (<0.8s LCP)";
      estRoas = "3.8x Lift in CRO";
    }

    return { trafficMultiplier, leadsRange, estRoas, speedScore };
  };

  const projections = calculateProjections();

  return (
    <section className="py-10 sm:py-16 lg:py-20 bg-white border-t border-[#D8E1F0] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-10 w-80 h-80 bg-blue-100/40 blur-[130px] rounded-full pointer-events-none animate-blob" />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-100/30 blur-[120px] rounded-full pointer-events-none animate-blob"
        style={{ animationDelay: "5s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          {/* Left Column: Interactive Controls */}
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#004BFF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider mb-1">
              <Calculator className="w-3.5 h-3.5 text-[#004BFF]" />
              <span>Interactive ROI &amp; Potential Estimator</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#030B2E] tracking-tight leading-[1.18]">
              Calculate Your 6-Month Digital Growth Potential
            </h2>

            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              Based on historical data from 500+ client campaigns across Delhi NCR and global markets,
              estimate the impact of our unified engineering and marketing strategies on your business.
            </p>

            <div className="space-y-3.5 pt-1">
              {/* Industry Select */}
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                  1. Select Your Industry
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2">
                  {[
                    { id: "ecommerce", label: "E-Commerce / D2C" },
                    { id: "saas", label: "B2B SaaS / Tech" },
                    { id: "healthcare", label: "Health & Wellness" },
                    { id: "industrial", label: "Industrial / Mfg" },
                    { id: "services", label: "Corporate Services" },
                    { id: "education", label: "EdTech & Education" },
                  ].map((ind) => (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => setIndustry(ind.id)}
                      className={`p-2 sm:p-2.5 rounded-xl text-xs font-semibold transition-all text-left cursor-pointer border ${
                        industry === ind.id
                          ? "bg-[#004BFF] border-[#004BFF] text-white shadow-sm"
                          : "bg-[#EEF2F9] border-[#D8E1F0] text-slate-700 hover:bg-white hover:border-slate-300"
                      }`}
                    >
                      {ind.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Primary Objective Select */}
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                  2. Primary Growth Lever
                </p>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {[
                    { id: "seo", label: "SEO Dominance" },
                    { id: "ppc", label: "Paid Ads (ROAS)" },
                    { id: "web", label: "Next.js Web App" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setGoal(item.id)}
                      className={`p-2 sm:p-2.5 rounded-xl text-xs font-semibold transition-all text-center cursor-pointer border ${
                        goal === item.id
                          ? "bg-[#004BFF] border-[#004BFF] text-white shadow-sm"
                          : "bg-[#EEF2F9] border-[#D8E1F0] text-slate-700 hover:bg-white hover:border-slate-300"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Budget Tier Select */}
              <div>
                <p className="text-[11px] sm:text-xs font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
                  3. Monthly Investment Tier
                </p>
                <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                  {[
                    { id: "starter", label: "Sprint Tier", sub: "Foundation" },
                    { id: "growth", label: "Growth Tier", sub: "Accelerated" },
                    { id: "scale", label: "Scale Tier", sub: "Enterprise" },
                  ].map((tier) => (
                    <button
                      key={tier.id}
                      type="button"
                      onClick={() => setBudgetTier(tier.id)}
                      className={`p-2 sm:p-2.5 rounded-xl text-xs font-semibold transition-all text-center cursor-pointer border ${
                        budgetTier === tier.id
                          ? "bg-[#004BFF] border-[#004BFF] text-white shadow-sm"
                          : "bg-[#EEF2F9] border-[#D8E1F0] text-slate-700 hover:bg-white hover:border-slate-300"
                      }`}
                    >
                      <div>{tier.label}</div>
                      <div className={`text-[9px] sm:text-[10px] mt-0.5 ${budgetTier === tier.id ? "text-blue-100" : "text-slate-400"}`}>
                        {tier.sub}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Output Card */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#D8E1F0] p-4 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-[#D8E1F0]">
                <span className="text-[11px] sm:text-xs font-bold text-[#004BFF] uppercase tracking-wider">
                  Projected 6-Month Benchmarks
                </span>
                <span className="text-[10px] sm:text-[11px] bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded-full font-semibold">
                  Based on 500+ Audits
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-4 my-3 sm:my-5">
                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#EEF2F9] border border-[#D8E1F0]">
                  <div className="text-[11px] sm:text-xs text-slate-500">Estimated Organic Lift</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#004BFF] mt-1">
                    {projections.trafficMultiplier}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Keyword Volume</div>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#EEF2F9] border border-[#D8E1F0]">
                  <div className="text-[11px] sm:text-xs text-slate-500">Qualified Leads / Mo</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#030B2E] mt-1">
                    {projections.leadsRange}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">High-Intent Traffic</div>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#EEF2F9] border border-[#D8E1F0]">
                  <div className="text-[11px] sm:text-xs text-slate-500">Attributed ROAS</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 mt-1">
                    {projections.estRoas}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">ROI Return</div>
                </div>

                <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-[#EEF2F9] border border-[#D8E1F0]">
                  <div className="text-[11px] sm:text-xs text-slate-500">Speed &amp; Web Vitals</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#004BFF] mt-1">
                    {projections.speedScore}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Core Web Vitals</div>
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2 text-xs text-slate-600 pb-4 border-b border-[#D8E1F0]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#004BFF] shrink-0" />
                  <span>Custom roadmap calibrated to your customer acquisition cost</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#004BFF] shrink-0" />
                  <span>Real-time Looker Studio dashboard provided with zero vanity metrics</span>
                </div>
              </div>

              <div className="pt-3.5 sm:pt-5">
                <button
                  type="button"
                  onClick={() => onApplyProjections({ industry, goal, budget: budgetTier })}
                  className="btn-shimmer w-full py-3 sm:py-4 rounded-full bg-[#004BFF] hover:bg-[#0037BD] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer group"
                >
                  <span>Apply These Projections to My Free Audit</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
