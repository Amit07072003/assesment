"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  Menu,
  X,
  ArrowRight,
  Globe,
  Sparkles,
  ChevronDown,
} from "lucide-react";
import { navigationItems, companyContact } from "@/data/navigation";

interface HeaderProps {
  onOpenAuditModal: () => void;
}

export default function Header({ onOpenAuditModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [regionDropdown, setRegionDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  // Shared smooth-scroll handler that accounts for the sticky header height
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-[#EEF2F9] border-b border-[#D8E1F0] text-slate-600 text-xs hidden lg:block py-2 relative z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left: Social Media Links */}
          <div className="flex items-center gap-2">
            <a
              href={companyContact.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-5 w-5 items-center justify-center rounded-full text-white bg-[#1877F2] hover:opacity-90 transition-opacity"
              aria-label="Facebook"
            >
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href={companyContact.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-5 w-5 items-center justify-center rounded-full text-white bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 hover:opacity-90 transition-opacity"
              aria-label="Instagram"
            >
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
            <a
              href={companyContact.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-5 w-5 items-center justify-center rounded-full text-white bg-[#0A66C2] hover:opacity-90 transition-opacity"
              aria-label="LinkedIn"
            >
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0-.01-3.2 1.6 1.6 0 0 0 .01 3.2m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
            </a>
            <a
              href={companyContact.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-5 w-5 items-center justify-center rounded-full text-white bg-black hover:opacity-90 transition-opacity"
              aria-label="Twitter / X"
            >
              <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          {/* Right: Phone, Email, Region, and Quick CTA */}
          <div className="flex items-center gap-5">
            <a
              href={`tel:${companyContact.phone}`}
              className="flex items-center gap-1.5 hover:text-[#004BFF] transition-colors"
              aria-label={`Call us at ${companyContact.phoneDisplay}`}
            >
              <Phone className="w-3.5 h-3.5 text-[#004BFF]" />
              <span className="font-medium">{companyContact.phoneDisplay}</span>
            </a>
            <span className="h-3 w-px bg-slate-300" aria-hidden="true" />
            <a
              href={`mailto:${companyContact.email}`}
              className="flex items-center gap-1.5 hover:text-[#004BFF] transition-colors"
              aria-label={`Email us at ${companyContact.email}`}
            >
              <Mail className="w-3.5 h-3.5 text-[#004BFF]" />
              <span className="font-medium">{companyContact.email}</span>
            </a>
            <span className="h-3 w-px bg-slate-300" aria-hidden="true" />

            {/* Region Selector */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setRegionDropdown(!regionDropdown)}
                className="flex items-center gap-1.5 hover:text-[#004BFF] transition-colors cursor-pointer"
                aria-expanded={regionDropdown}
                aria-label="Select Region"
              >
                <Globe className="w-3.5 h-3.5 text-[#004BFF]" />
                <span className="font-medium">India</span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {regionDropdown && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white border border-[#D8E1F0] shadow-xl py-2 z-50 text-slate-700">
                  <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Regional Focus
                  </div>
                  <button
                    type="button"
                    onClick={() => setRegionDropdown(false)}
                    className="w-full text-left px-3 py-1.5 text-xs hover:bg-slate-50 flex items-center justify-between text-[#004BFF] font-semibold"
                  >
                    <span>🇮🇳 India (Delhi NCR)</span>
                    <span className="text-[10px] bg-blue-50 text-[#004BFF] px-1.5 py-0.5 rounded font-bold">HQ</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRegionDropdown(false)}
                    className="w-full text-left px-3 py-1.5 text-xs hover:bg-slate-50 flex items-center justify-between text-slate-600"
                  >
                    <span>🇦🇪 UAE (Middle East)</span>
                    <span className="text-[10px] text-slate-400">Global</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setRegionDropdown(false)}
                    className="w-full text-left px-3 py-1.5 text-xs hover:bg-slate-50 flex items-center justify-between text-slate-600"
                  >
                    <span>🇺🇸 United States</span>
                    <span className="text-[10px] text-slate-400">Remote</span>
                  </button>
                </div>
              )}
            </div>

            {/* Top Electric Blue CTA Button */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="ml-1 inline-flex items-center px-4 py-1 rounded-full bg-[#004BFF] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#0037BD] transition-colors shadow-xs cursor-pointer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Main Floating Pill Header */}
      {/* Outer: sticky + full viewport width so touch hit areas align on iOS */}
      <div className="sticky top-2.5 sm:top-4 z-40 w-full mb-3 sm:mb-4">
        {/* Inner: max-width + horizontal padding */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
        <header
          className={`w-full backdrop-blur-md rounded-2xl border border-[#D8E1F0] px-4 sm:px-6 py-2.5 sm:py-3 transition-[box-shadow,background-color] duration-300 ${isScrolled
              ? "bg-white/98 shadow-[0_8px_30px_rgba(11,19,43,0.12)] border-[#C7D9FE]"
              : "bg-white/95 shadow-[0_4px_25px_rgba(11,19,43,0.06)]"
            }`}
        >
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004BFF] rounded-lg p-1"
              aria-label="Xntrova Technologies Home"
            >
              <div className="flex items-center shrink-0">
                <Image
                  src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png"
                  alt="Xntrova Technologies"
                  width={144}
                  height={36}
                  priority
                  style={{ width: 'auto' }}
                  className="h-8 sm:h-9 object-contain"
                />
              </div>
            </a>

            {/* Desktop Navigation (>= md) */}
            <nav
              className="hidden md:flex items-center gap-1 lg:gap-1.5"
              aria-label="Primary Navigation"
            >
              {navigationItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-3.5 py-1.5 text-xs lg:text-sm font-semibold text-slate-700 hover:text-[#004BFF] rounded-full transition-colors hover:bg-blue-50/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004BFF] cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons (>= md) */}
            <div className="hidden md:flex items-center gap-2.5">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="px-4 py-2 text-xs font-semibold text-slate-700 hover:text-[#004BFF] border border-slate-200 hover:border-[#004BFF] rounded-full transition-all hover:bg-blue-50/60 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004BFF] cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#004BFF]" />
                <span>Free Audit</span>
              </button>

              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="btn-shimmer group inline-flex items-center justify-center gap-2 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white rounded-full bg-[#004BFF] hover:bg-[#0037BD] shadow-md shadow-blue-900/15 transition-all transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#004BFF] cursor-pointer"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Mobile Actions & Hamburger Button (< md) */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={onOpenAuditModal}
                className="px-3 py-2 text-xs font-semibold text-[#004BFF] bg-blue-50 border border-blue-200 rounded-full cursor-pointer hover:bg-blue-100 transition-colors"
                style={{ touchAction: 'manipulation', minHeight: '44px' }}
              >
                Audit
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ touchAction: 'manipulation', minWidth: '44px', minHeight: '44px' }}
                className="flex items-center justify-center rounded-xl text-slate-700 hover:text-[#004BFF] hover:bg-blue-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#004BFF] cursor-pointer border border-[#D8E1F0] active:bg-blue-100"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              >
                {mobileMenuOpen ? <X className="w-5 h-5 text-[#030B2E]" /> : <Menu className="w-5 h-5 text-[#030B2E]" />}
              </button>
            </div>
          </div>
        </header>
        </div>
      </div>

      {/* Mobile Drawer Navigation (< md) */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-slate-900/60 backdrop-blur-sm flex flex-col justify-between"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="bg-white p-4 sm:p-5 flex items-center justify-between border-b border-[#D8E1F0]">
            <div className="flex items-center shrink-0">
              <Image
                src="https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_384/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png"
                alt="Xntrova Technologies"
                width={130}
                height={32}
                style={{ width: 'auto' }}
                className="h-7 object-contain"
              />
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              style={{ touchAction: 'manipulation', minWidth: '44px', minHeight: '44px' }}
              className="flex items-center justify-center rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 border border-[#D8E1F0] cursor-pointer active:bg-slate-200"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="bg-white px-6 py-4 flex flex-col gap-1 overflow-y-auto flex-1">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  if (item.href.startsWith("#")) {
                    e.preventDefault();
                    const target = document.querySelector(item.href);
                    if (target) {
                      const topOffset = 80;
                      const elementPosition = target.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
                      window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                      });
                    }
                  }
                }}
                className="text-sm font-semibold text-slate-800 hover:text-[#004BFF] hover:bg-blue-50/60 px-3 py-3 rounded-xl border-b border-slate-100 transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            ))}
          </nav>

          <div className="p-5 border-t border-[#D8E1F0] bg-slate-50 space-y-3.5">
            <div className="text-xs text-slate-600 space-y-1.5">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#004BFF]" />
                <a href={`tel:${companyContact.phone}`} className="font-medium text-slate-800">
                  {companyContact.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#004BFF]" />
                <a href={`mailto:${companyContact.email}`} className="font-medium text-slate-800">
                  {companyContact.email}
                </a>
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2.5 pt-1">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAuditModal();
                }}
                className="w-full py-2.5 rounded-xl border border-[#004BFF] text-[#004BFF] font-semibold text-xs hover:bg-blue-50 cursor-pointer text-center"
              >
                Free Audit
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  e.preventDefault();
                  const target = document.querySelector("#contact");
                  if (target) {
                    const topOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - topOffset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth"
                    });
                  }
                }}
                className="w-full py-2.5 rounded-xl bg-[#004BFF] text-white font-bold text-xs text-center flex items-center justify-center gap-1 shadow-md shadow-blue-900/10 hover:bg-[#0037BD] cursor-pointer"
              >
                Let&apos;s Talk
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
