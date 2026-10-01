"use client";

import React, { useState } from "react";
import { X, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

interface QuickAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function QuickAuditModal({
  isOpen,
  onClose,
  defaultService = "Search Engine Optimization (SEO)",
}: QuickAuditModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [service, setService] = useState(defaultService);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [prevDefault, setPrevDefault] = useState(defaultService);
  if (defaultService !== prevDefault) {
    setPrevDefault(defaultService);
    if (defaultService) {
      setService(defaultService);
    }
  }

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Please fill in your name and email.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setError("Please provide a valid work email.");
      return;
    }

    setError("");
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setWebsite("");
    setIsSuccess(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="audit-modal-title"
    >
      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-[#D8E1F0] p-6 sm:p-8 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-[#030B2E]">Audit Request Received!</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
              We&apos;re preparing your personalized technical and digital marketing audit. Expect an executive breakdown in your inbox within 24 hours.
            </p>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-2.5 rounded-full bg-[#EEF2F9] hover:bg-[#D8E1F0] text-slate-800 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-[11px] font-bold text-[#004BFF] uppercase tracking-wider block mb-1">
                Zero Obligation • 24-Hour Delivery
              </span>
              <h3 id="audit-modal-title" className="text-xl sm:text-2xl font-bold text-[#030B2E]">
                Request Free Digital Audit
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Receive an engineering and SEO health check on your current digital assets.
              </p>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <div>
              <label htmlFor="audit-name" className="text-xs font-bold text-slate-700 block mb-1">
                Your Name *
              </label>
              <input
                id="audit-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Rahul Sharma"
                className="w-full rounded-xl border border-[#D8E1F0] px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-[#EEF2F9]/50 focus:bg-white focus:outline-none focus:border-[#004BFF] focus:ring-2 focus:ring-[#004BFF]/20"
              />
            </div>

            <div>
              <label htmlFor="audit-email" className="text-xs font-bold text-slate-700 block mb-1">
                Work Email *
              </label>
              <input
                id="audit-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="rahul@company.com"
                className="w-full rounded-xl border border-[#D8E1F0] px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-[#EEF2F9]/50 focus:bg-white focus:outline-none focus:border-[#004BFF] focus:ring-2 focus:ring-[#004BFF]/20"
              />
            </div>

            <div>
              <label htmlFor="audit-website" className="text-xs font-bold text-slate-700 block mb-1">
                Website URL (or Target Domain)
              </label>
              <input
                id="audit-website"
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://example.com"
                className="w-full rounded-xl border border-[#D8E1F0] px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 bg-[#EEF2F9]/50 focus:bg-white focus:outline-none focus:border-[#004BFF] focus:ring-2 focus:ring-[#004BFF]/20"
              />
            </div>

            <div>
              <label htmlFor="audit-service" className="text-xs font-bold text-slate-700 block mb-1">
                Primary Area of Focus
              </label>
              <select
                id="audit-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-xl border border-[#D8E1F0] px-3.5 py-2.5 text-sm text-slate-800 bg-[#EEF2F9]/50 focus:bg-white focus:outline-none focus:border-[#004BFF] focus:ring-2 focus:ring-[#004BFF]/20"
              >
                <option value="Search Engine Optimization (SEO)">Search Engine Optimization (SEO)</option>
                <option value="Website & Web App Development">Website &amp; Web App Development</option>
                <option value="Paid Advertising & PPC (Google & Meta)">Paid Advertising &amp; PPC</option>
                <option value="E-Commerce Growth & Headless Stores">E-Commerce Growth</option>
                <option value="Social Media Marketing & Brand Strategy">Social Media &amp; Brand Strategy</option>
                <option value="Full Digital Transformation Package">Full Digital Transformation</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 rounded-full bg-[#004BFF] hover:bg-[#0037BD] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-60"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Preparing Audit Request...</span>
                </>
              ) : (
                <>
                  <span>Send My Free Audit Request</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
