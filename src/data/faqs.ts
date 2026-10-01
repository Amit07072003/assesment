export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "SEO" | "PPC & Ads" | "Web Development";
}

export const faqsData: FAQItem[] = [
  {
    id: "faq-1",
    category: "General",
    question: "How long does it take to see results from digital marketing?",
    answer: "The timeline depends on the chosen channel and your strategic goals. Paid advertising (PPC) and Performance Max campaigns can generate qualified traffic and leads within the very first 7–14 days. In contrast, organic channels like Search Engine Optimization (SEO) and Content Marketing build compounding value, typically showing substantial keyword ascensions and organic traffic acceleration within 90 to 120 days. We provide clear milestone roadmaps so you track progress from week one.",
  },
  {
    id: "faq-2",
    category: "General",
    question: "How do you create customized marketing strategies for businesses?",
    answer: "We avoid generic boilerplate packages. Our process starts with a comprehensive audit of your current digital footprint, competitor gap analysis, search intent mapping, and unit economics review. From there, we formulate a tailored growth blueprint aligned with your target audience, margins, and aggressive revenue benchmarks.",
  },
  {
    id: "faq-3",
    category: "General",
    question: "Will I receive regular updates on campaign performance?",
    answer: "Yes, 100% transparency is our core pillar. Every client gets access to an always-on real-time live performance dashboard (Google Analytics 4 / Looker Studio), bi-weekly executive sprint updates, and monthly strategy review calls where we analyze revenue attribution, ROAS, keyword rankings, and planned optimizations.",
  },
  {
    id: "faq-4",
    category: "General",
    question: "Which digital marketing service is right for my business?",
    answer: "The ideal mix depends on your current business maturity. If you require immediate customer acquisition and cash flow, Paid Ads (Google & Meta) with conversion landing pages is the fastest lever. If you are building long-term domain authority and sustainable low-CAC customer acquisition, technical SEO and content architecture are essential. During our initial free digital audit, we analyze your metrics to recommend the highest-ROI sequence.",
  },
  {
    id: "faq-5",
    category: "General",
    question: "What makes Xntrova different from other agencies?",
    answer: "Unlike traditional agencies that outsource or rely on bloated WordPress templates, Xntrova combines deep engineering capability (Next.js, modern web architectures) with high-level performance marketing. You get direct access to seasoned strategists, transparent pricing, agile weekly deliverables, and an unwavering commitment to measurable bottom-line revenue rather than empty vanity metrics.",
  },
  {
    id: "faq-6",
    category: "Web Development",
    question: "What technologies and web frameworks do you specialize in?",
    answer: "We specialize in modern frontend engineering stacks: React, Next.js (App Router), TypeScript, and Tailwind CSS for web applications, along with Shopify Plus and headless architectures for high-volume e-commerce. All sites are built with mobile-first responsiveness, Core Web Vitals perfection (95+ PageSpeed), and enterprise security.",
  },
];
