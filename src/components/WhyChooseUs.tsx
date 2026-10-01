"use client";

import React from "react";
import {
  Cpu,
  Users2,
  Eye,
  Layers3,
  TimerReset,
  Award,
  Sparkles,
} from "lucide-react";

export default function WhyChooseUs() {
  const differentiators = [
    {
      icon: Cpu,
      title: "Modern Engineering, Not Template Bloat",
      description:
        "We build clean, modern Next.js and React web architectures with 95+ PageSpeed scores, zero plugin bloat, and sub-second loading that boosts Google rankings and reduces bounce rates.",
    },
    {
      icon: Users2,
      title: "Direct Access to Senior Strategists",
      description:
        "No handoffs to inexperienced junior interns. You collaborate directly with experienced frontend engineers, SEO tacticians, and performance marketers who understand your unit economics.",
    },
    {
      icon: Eye,
      title: "100% Transparent Attribution & Dashboards",
      description:
        "No smoke, mirrors, or meaningless vanity metrics. Get 24/7 access to live Looker Studio and GA4 dashboards tracking qualified leads, cost-per-acquisition (CPA), and verifiable revenue.",
    },
    {
      icon: Layers3,
      title: "Integrated Full-Funnel Growth",
      description:
        "We tear down silos. Your website design, conversion copywriting, technical SEO, and paid performance advertising work together in a synchronized ecosystem to maximize customer lifetime value.",
    },
    {
      icon: TimerReset,
      title: "Agile 2-Week Sprints & Rapid Turnaround",
      description:
        "We work at the speed of modern business. Clear milestones, weekly async sprint demos, rapid deployments, and proactive recommendations keep your project continuously ahead of schedule.",
    },
    {
      icon: Award,
      title: "Tested & Trusted by 500+ Clients",
      description:
        "From early-stage D2C disruptors to multinational manufacturing conglomerates and governmental agencies, our battle-tested frameworks deliver consistent, repeatable growth.",
    },
  ];

  return (
    <section id="why-us" className="py-10 sm:py-16 lg:py-20 bg-[#EEF2F9] border-t border-[#D8E1F0] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-blue-200/30 blur-[130px] rounded-full pointer-events-none animate-blob" />
      <div
        className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-200/30 blur-[120px] rounded-full pointer-events-none animate-blob"
        style={{ animationDelay: "5s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#004BFF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#004BFF]" />
            <span>Why Ambitious Brands Choose Xntrova</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#030B2E] tracking-tight leading-[1.18]">
            Built for Businesses That Demand Measurable Commercial Impact
          </h2>
          <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We reject the traditional agency model of slow bureaucracy and empty vanity promises.
            Here is why fast-growing companies trust Xntrova with their digital future.
          </p>
        </div>

        {/* 6 Enterprise Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {differentiators.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <div key={diff.title} className="rounded-2xl bg-white border border-[#D8E1F0] p-4 sm:p-7 hover:border-[#004BFF]/60 hover:shadow-[0_20px_40px_-15px_rgba(0,75,255,0.12)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-xs group h-full">
                  <div>
                    <div className="flex items-center justify-between mb-3 sm:mb-5">
                      <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#004BFF] group-hover:bg-[#004BFF] group-hover:text-white transition-all duration-300 shadow-xs group-hover:scale-105">
                        <Icon className="w-5 sm:w-6 h-5 sm:h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-[#004BFF] transition-colors">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-[#030B2E] group-hover:text-[#004BFF] transition-colors">
                      {diff.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {diff.description}
                    </p>
                  </div>

                  <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-[#D8E1F0] flex items-center gap-1.5 text-xs text-[#004BFF] font-semibold">
                    <span>Guaranteed Quality Standard</span>
                  </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
