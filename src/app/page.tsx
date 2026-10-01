"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import GrowthCalculator from "@/components/GrowthCalculator";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import QuickAuditModal from "@/components/QuickAuditModal";

export default function Home() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>("");

  const handleSelectService = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleApplyProjections = (details: { industry: string; goal: string; budget: string }) => {
    let serviceName = "Search Engine Optimization (SEO)";
    if (details.goal === "web") serviceName = "Website & Web App Development";
    if (details.goal === "ppc") serviceName = "Paid Advertising & PPC (Google & Meta)";
    setPrefilledService(serviceName);

    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Header & Navigation */}
      <Header onOpenAuditModal={() => setIsAuditModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* 3. Review Platforms & Client Brand Marquee */}
        <TrustBar />

        {/* 4. Core Services & Deliverables */}
        <Services onSelectServiceForAudit={handleSelectService} />

        {/* 5. About Xntrova & Verified Performance Stats */}
        <About onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* 6. Why Choose Xntrova Differentiators */}
        <WhyChooseUs />

        {/* 7. How We Work / 5-Phase Process */}
        <Process />

        {/* 8. Portfolio & Case Studies */}
        <Portfolio onOpenAuditModal={() => setIsAuditModalOpen(true)} />

        {/* 9. Interactive Growth & ROI Estimator */}
        <GrowthCalculator onApplyProjections={handleApplyProjections} />

        {/* 10. Verified Client Testimonials */}
        <Testimonials />

        {/* 11. FAQ Accordion */}
        <FAQ />

        {/* 12. Lead Capture & Project Planner Form */}
        <ContactSection prefilledService={prefilledService} />
      </main>

      {/* 13. Comprehensive Footer */}
      <Footer />

      {/* Quick Audit Modal */}
      <QuickAuditModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
        defaultService={prefilledService || "Search Engine Optimization (SEO)"}
      />
    </div>
  );
}
