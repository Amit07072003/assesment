"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Star, ShieldCheck, Award } from "lucide-react";
import { reviewPlatforms, verifiedClients } from "@/data/brands";

export default function TrustBar() {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const halfWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    let animId: number;

    const animate = () => {
      if (track && !pausedRef.current) {
        // Measure half-width once after mount (when DOM has rendered)
        if (halfWidthRef.current === 0) {
          halfWidthRef.current = track.scrollWidth / 2;
        }
        posRef.current -= 0.6; // px per frame ≈ 36px/s at 60fps
        if (halfWidthRef.current > 0 && Math.abs(posRef.current) >= halfWidthRef.current) {
          posRef.current = 0;
        }
        track.style.transform = `translateX(${posRef.current}px)`;
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <section className="bg-[#EEF2F9] border-t border-[#D8E1F0] py-7 sm:py-12">
      {/* Constrained inner content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-5 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#004BFF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5 text-[#004BFF]" />
            <span>Independent Reviews &amp; Client Ratings</span>
          </div>
          <h2 className="text-xl sm:text-3xl font-extrabold text-[#030B2E] tracking-tight">
            Reviews Platform
          </h2>
        </div>

        {/* Review Platforms Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4 mb-6 sm:mb-10">
          {reviewPlatforms.map((platform, idx) => (
            <div
              key={platform.name}
              className={`p-3 sm:p-4 rounded-2xl bg-white border border-[#D8E1F0] hover:border-[#004BFF]/60 hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center group ${
                idx === 4 ? "col-span-2 sm:col-span-1" : ""
              }`}
            >
              <div className="h-6 sm:h-7 flex items-center justify-center mb-1.5 sm:mb-2">
                {platform.logoUrl ? (
                  <div className="relative h-5 sm:h-6 w-20 sm:w-24">
                    <Image src={platform.logoUrl} alt={platform.name} fill sizes="96px" className="object-contain" />
                  </div>
                ) : (
                  <span className="font-extrabold text-xs sm:text-sm text-[#030B2E]">{platform.name}</span>
                )}
              </div>
              <div className="flex items-center gap-1 text-[#FFB703] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-[#FFB703]" />
                ))}
                <span className="text-xs font-bold text-slate-800 ml-1">{platform.rating}</span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium">{platform.reviewsCount}</p>
            </div>
          ))}
        </div>

        {/* Client Brands Label Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#D8E1F0] pt-4 sm:pt-7 mb-4 sm:mb-5 gap-2 text-center sm:text-left">
          <p className="text-xs uppercase tracking-wider text-slate-500 font-bold flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#004BFF]" />
            <span>Trusted By High-Growth Companies &amp; Enterprise Brands</span>
          </p>
          <span className="text-xs text-slate-400">Over 500+ projects delivered</span>
        </div>
      </div>

      {/* ── Full-width JS Marquee ── */}
      <div
        className="relative w-full py-2"
        style={{ overflow: "hidden" }}
        onMouseEnter={() => { pausedRef.current = true; }}
        onMouseLeave={() => { pausedRef.current = false; }}
      >
        {/* Left fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-[#EEF2F9] to-transparent z-10" />
        {/* Right fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-[#EEF2F9] to-transparent z-10" />

        {/* Track — doubled list creates seamless loop via JS transform */}
        <div
          ref={trackRef}
          className="flex items-center gap-4 sm:gap-8"
          style={{ width: "max-content", willChange: "transform" }}
        >
          {[...verifiedClients, ...verifiedClients].map((client, idx) => (
            <div
              key={`${client.name}-${idx < verifiedClients.length ? "a" : "b"}`}
              className="flex items-center gap-2.5 sm:gap-3 shrink-0 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl bg-white border border-[#D8E1F0] hover:border-[#004BFF]/40 transition-[border-color,box-shadow] hover:shadow-xs group"
            >
              {client.logoUrl ? (
                <div className="relative h-6 sm:h-7 w-20 sm:w-24">
                  <Image
                    src={client.logoUrl}
                    alt={client.name}
                    fill
                    sizes="96px"
                    className="object-contain grayscale group-hover:grayscale-0 transition-[filter]"
                  />
                </div>
              ) : (
                <span className="text-xs font-semibold text-slate-700 group-hover:text-[#004BFF] whitespace-nowrap">
                  {client.name}
                </span>
              )}
              <span className="text-[10px] text-slate-400 uppercase tracking-wider hidden md:inline whitespace-nowrap">
                {client.industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
