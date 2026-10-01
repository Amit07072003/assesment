"use client";

import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Loader2,
} from "lucide-react";
import { companyContact } from "@/data/navigation";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
}

interface ContactSectionProps {
  prefilledService?: string;
}

export default function ContactSection({ prefilledService }: ContactSectionProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: prefilledService || "",
    budget: "₹1,00,000 - ₹2,50,000",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [prevPrefilled, setPrevPrefilled] = useState(prefilledService);
  if (prefilledService !== prevPrefilled) {
    setPrevPrefilled(prefilledService);
    if (prefilledService) {
      setFormData((prev) => ({ ...prev, service: prefilledService }));
    }
  }

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = "Please provide your full name (at least 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Please provide a valid business email address.";
    }

    const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
    if (!formData.phone.trim() || !phoneRegex.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Please enter a valid phone number (at least 10 digits).";
    }

    if (!formData.service) {
      newErrors.service = "Please select the service you are interested in.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      budget: "₹1,00,000 - ₹2,50,000",
      message: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-10 sm:py-16 lg:py-20 bg-[#EEF2F9] border-t border-[#D8E1F0] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-10 w-80 h-80 bg-blue-100/40 blur-[140px] rounded-full pointer-events-none animate-blob" />
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-indigo-100/30 blur-[130px] rounded-full pointer-events-none animate-blob"
        style={{ animationDelay: "5s" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 text-[#004BFF] border border-blue-200/80 text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-[#004BFF]" />
            <span>Start Your Growth Journey</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold text-[#030B2E] tracking-tight leading-[1.18]">
            Claim Your Free Technical &amp; Growth Audit
          </h2>
          <p className="mt-2.5 sm:mt-3.5 text-xs sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Tell us about your digital goals. Our senior technical and marketing leads will review your web footprint and respond with a customized action plan within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 items-start">
          {/* Left Column: Direct Office Contact Details */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#D8E1F0] p-4 sm:p-8 space-y-4 sm:space-y-6 shadow-sm">
              <h3 className="text-lg sm:text-xl font-bold text-[#030B2E]">
                Direct Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Prefer a direct phone conversation or want to visit our Delhi NCR headquarters?
                Reach out to our leadership team directly:
              </p>

              <div className="space-y-2.5 sm:space-y-3.5 pt-1">
                <a
                  href={`tel:${companyContact.phone}`}
                  className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#EEF2F9] border border-[#D8E1F0] hover:border-[#004BFF]/50 transition-all hover:shadow-xs group"
                >
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#004BFF] shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Direct Phone (Mon-Sat)</div>
                    <div className="text-xs sm:text-sm font-bold text-[#030B2E] group-hover:text-[#004BFF] transition-colors">
                      {companyContact.phoneDisplay}
                    </div>
                  </div>
                </a>

                <a
                  href={`mailto:${companyContact.email}`}
                  className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#EEF2F9] border border-[#D8E1F0] hover:border-[#004BFF]/50 transition-all hover:shadow-xs group"
                >
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#004BFF] shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Official Inquiries</div>
                    <div className="text-xs sm:text-sm font-bold text-[#030B2E] group-hover:text-[#004BFF] transition-colors">
                      {companyContact.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#EEF2F9] border border-[#D8E1F0]">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#004BFF] shrink-0">
                    <MapPin className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Headquarters Address</div>
                    <div className="text-xs font-semibold text-slate-800 leading-snug mt-0.5">
                      {companyContact.address}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#EEF2F9] border border-[#D8E1F0]">
                  <div className="w-9 sm:w-10 h-9 sm:h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#004BFF] shrink-0">
                    <Clock className="w-4 sm:w-5 h-4 sm:h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400">Working Hours</div>
                    <div className="text-xs font-semibold text-slate-800 mt-0.5">
                      {companyContact.hours}
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="p-3 rounded-xl sm:rounded-2xl bg-[#EEF2F9] border border-[#D8E1F0] flex items-center gap-2.5">
                <ShieldCheck className="w-4 sm:w-5 h-4 sm:h-5 text-emerald-600 shrink-0" />
                <span className="text-[11px] sm:text-xs text-slate-600">
                  NDA Protected • We never share or sell your business contact details.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Lead Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl sm:rounded-3xl bg-white border border-[#D8E1F0] p-4 sm:p-8 lg:p-9 shadow-xl relative">
              {isSubmitted ? (
                <div className="py-8 sm:py-10 text-center space-y-3 sm:space-y-4">
                  <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto text-emerald-600">
                    <CheckCircle2 className="w-7 sm:w-8 h-7 sm:h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#030B2E]">
                    Audit Request Received!
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#030B2E]">{formData.name}</strong>. Our strategy lead has received your inquiry for{" "}
                    <strong className="text-[#004BFF]">{formData.service || "Digital Growth"}</strong>.
                    We will review your web presence and email your custom audit report within 24 hours.
                  </p>
                  <div className="pt-3 sm:pt-5">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-2.5 rounded-full bg-[#EEF2F9] hover:bg-[#D8E1F0] text-slate-800 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between pb-2.5 sm:pb-3 border-b border-[#D8E1F0]">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#030B2E]">Get a Free Digital Audit</h3>
                      <p className="text-[11px] sm:text-xs text-slate-500">Tell us about your business and we&apos;ll get back to you shortly.</p>
                    </div>
                    <span className="text-[11px] sm:text-xs text-slate-400">* Required</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="contact-name" className="text-xs font-bold text-slate-700 block mb-1">
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Rahul Sharma"
                        className={`w-full rounded-xl border px-3 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-[#EEF2F9]/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? "border-red-400 focus:ring-red-400"
                            : "border-[#D8E1F0] focus:border-[#004BFF] focus:ring-[#004BFF]/20"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="contact-email" className="text-xs font-bold text-slate-700 block mb-1">
                        Business Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className={`w-full rounded-xl border px-3 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-[#EEF2F9]/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? "border-red-400 focus:ring-red-400"
                            : "border-[#D8E1F0] focus:border-[#004BFF] focus:ring-[#004BFF]/20"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    {/* Phone Field */}
                    <div>
                      <label htmlFor="contact-phone" className="text-xs font-bold text-slate-700 block mb-1">
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className={`w-full rounded-xl border px-3 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-[#EEF2F9]/50 focus:bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.phone
                            ? "border-red-400 focus:ring-red-400"
                            : "border-[#D8E1F0] focus:border-[#004BFF] focus:ring-[#004BFF]/20"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    {/* Company / Website */}
                    <div>
                      <label htmlFor="contact-company" className="text-xs font-bold text-slate-700 block mb-1">
                        Company Name
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Global"
                        className="w-full rounded-xl border border-[#D8E1F0] px-3 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-[#EEF2F9]/50 focus:bg-white focus:outline-none focus:border-[#004BFF] focus:ring-2 focus:ring-[#004BFF]/20 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                    {/* Service Selection */}
                    <div>
                      <label htmlFor="contact-service" className="text-xs font-bold text-slate-700 block mb-1">
                        Which service are you interested in? *
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={`w-full rounded-xl border px-3 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 transition-all ${
                          errors.service
                            ? "border-red-400 focus:ring-red-400"
                            : "border-[#D8E1F0] focus:border-[#004BFF] focus:ring-[#004BFF]/20"
                        }`}
                      >
                        <option value="" disabled>Select a service...</option>
                        <option value="Search Engine Optimization (SEO)">SEO (Search Engine Optimisation)</option>
                        <option value="Website & Web App Development">Website Development</option>
                        <option value="Paid Advertising & PPC (Google & Meta)">PPC (Pay-Per-Click)</option>
                        <option value="E-Commerce Growth & Headless Stores">E-Commerce Marketing</option>
                        <option value="Social Media Marketing & Brand Strategy">Social Media Marketing</option>
                        <option value="Content Marketing & Copywriting">Content Marketing</option>
                        <option value="Performance Marketing Retainer">Performance Marketing</option>
                      </select>
                      {errors.service && (
                        <p className="text-red-600 text-xs mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.service}</span>
                        </p>
                      )}
                    </div>

                    {/* Estimated Monthly Budget */}
                    <div>
                      <label htmlFor="contact-budget" className="text-xs font-bold text-slate-700 block mb-1">
                        Estimated Budget Tier
                      </label>
                      <select
                        id="contact-budget"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full rounded-xl border border-[#D8E1F0] px-3 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-800 bg-white focus:outline-none focus:border-[#004BFF] focus:ring-2 focus:ring-[#004BFF]/20 transition-all"
                      >
                        <option value="Under ₹50,000 / $600">Under ₹50,000 / $600</option>
                        <option value="₹50,000 - ₹1,00,000">Sprint Tier (₹50k - ₹1L)</option>
                        <option value="₹1,00,000 - ₹2,50,000">Growth Tier (₹1L - ₹2.5L)</option>
                        <option value="₹2,50,000+ / $3,000+">Enterprise Scale (₹2.5L+)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="contact-message" className="text-xs font-bold text-slate-700 block mb-1">
                      Tell us about your business goals
                    </label>
                    <textarea
                      id="contact-message"
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Briefly describe your objectives or challenges..."
                      className="w-full rounded-xl border border-[#D8E1F0] px-3 sm:px-3.5 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-800 placeholder-slate-400 bg-[#EEF2F9]/50 focus:bg-white focus:outline-none focus:border-[#004BFF] focus:ring-2 focus:ring-[#004BFF]/20 transition-all"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="btn-shimmer group w-full py-3 sm:py-4 rounded-full bg-[#004BFF] hover:bg-[#0037BD] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer disabled:opacity-60"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Analyzing Requirements...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Free Audit Request</span>
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] sm:text-[11px] text-slate-400">
                    ⚡ Guaranteed response within 24 business hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
