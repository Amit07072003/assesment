"use client";

import React, { useEffect, useRef, useState } from "react";

interface MotionRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // in milliseconds
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function MotionReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: MotionRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal immediately if reduced-motion is preferred
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const raf = requestAnimationFrame(() => setIsRevealed(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      {
        // Large rootMargin so elements reveal BEFORE they scroll into view
        rootMargin: "300px 0px 300px 0px",
        threshold: 0,
      }
    );

    const el = elementRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) observer.unobserve(el);
    };
  }, []);

  const getTransformClass = () => {
    if (isRevealed) return "translate-y-0 translate-x-0";
    switch (direction) {
      case "up":    return "translate-y-6";
      case "down":  return "-translate-y-6";
      case "left":  return "translate-x-6";
      case "right": return "-translate-x-6";
      default:      return "";
    }
  };

  return (
    <div
      ref={elementRef}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-500 ease-out ${
        isRevealed ? "opacity-100" : "opacity-0"
      } ${getTransformClass()} ${className}`}
    >
      {children}
    </div>
  );
}
