export interface CaseStudy {
  id: string;
  client: string;
  category: "Web Development" | "SEO Growth" | "E-Commerce" | "Paid Advertising";
  title: string;
  challenge: string;
  solution: string;
  results: {
    primaryMetric: string;
    primaryLabel: string;
    secondaryMetric: string;
    secondaryLabel: string;
    tertiaryMetric: string;
    tertiaryLabel: string;
  };
  tags: string[];
  clientLogo?: string;
  industry: string;
}

export const caseStudiesData: CaseStudy[] = [
  {
    id: "pitti-jewels",
    client: "Pitti Jewels & Pearls",
    category: "E-Commerce",
    title: "Scaling Luxury Jewelry E-Commerce with Ultra-Fast Headless Store & Targeted PPC",
    challenge: "High cart abandonment rates (74%) and sluggish mobile load speeds (4.8s) on legacy WooCommerce platform were crippling conversions for high-ticket luxury jewelry.",
    solution: "Engineered a headless Next.js storefront with instant page transitions, bespoke 1-click checkout, high-res 360° product showcases, and high-intent Google Shopping PPC funnels.",
    results: {
      primaryMetric: "+310%",
      primaryLabel: "Online Revenue Lift in 6 Months",
      secondaryMetric: "4.8x",
      secondaryLabel: "ROAS on Performance Ads",
      tertiaryMetric: "0.9s",
      tertiaryLabel: "Mobile Page Load Speed",
    },
    tags: ["Next.js", "Headless Shopify", "Google Shopping", "Luxury UX", "CRO"],
    clientLogo: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209663/xntrova-wp-media/xntrova-wp-media/5-3699036ea4992f89.webp",
    industry: "Luxury Goods & Retail",
  },
  {
    id: "amritya-wellness",
    client: "Amritya Wellness",
    category: "SEO Growth",
    title: "Organic Search Domination: Outranking Industry Giants for High-Volume Ayurvedic Keywords",
    challenge: "Zero organic footprint in a hyper-competitive herbal wellness niche, with high customer acquisition costs draining profitability on social media ads.",
    solution: "Conducted exhaustive semantic entity mapping, fixed deep technical crawl errors, revamped content clusters with medical doctor reviews, and built 85+ authoritative health backlinks.",
    results: {
      primaryMetric: "+250%",
      primaryLabel: "Surge in Organic Organic Traffic",
      secondaryMetric: "#1 Rank",
      secondaryLabel: "For 42 Commercial Keywords",
      tertiaryMetric: "-64%",
      tertiaryLabel: "Blended Customer Acquisition Cost",
    },
    tags: ["Technical SEO", "Entity Clustering", "Digital PR", "Content Architecture"],
    clientLogo: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209666/xntrova-wp-media/xntrova-wp-media/logo-1-86c7453d4dbc03a3.webp",
    industry: "Health & Ayurveda",
  },
  {
    id: "scholar-scribe",
    client: "Scholar Scribe Solutions",
    category: "Web Development",
    title: "Next-Gen SaaS Web Platform Architecture with Sub-Second Interactions",
    challenge: "Clunky UI, confusing onboarding funnel, and poor mobile responsiveness resulted in a steep drop-off of academic professionals signing up for demo trials.",
    solution: "Re-architected the entire web presence from scratch using React, TypeScript, and Tailwind CSS. Implemented interactive feature simulators and a streamlined 2-step onboarding modal.",
    results: {
      primaryMetric: "+145%",
      primaryLabel: "Increase in Trial Signups",
      secondaryMetric: "99/100",
      secondaryLabel: "Google Lighthouse Performance",
      tertiaryMetric: "-52%",
      tertiaryLabel: "Bounce Rate Reduction",
    },
    tags: ["React", "TypeScript", "Tailwind CSS", "UI/UX Redesign", "SaaS Funnel"],
    clientLogo: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209654/xntrova-wp-media/xntrova-wp-media/27-93030f459f54a40f.webp",
    industry: "EdTech & Software",
  },
  {
    id: "etex-industrial",
    client: "Etex",
    category: "Paid Advertising",
    title: "B2B Performance Lead Generation: Quadrupling Enterprise RFQ Inquiries",
    challenge: "Struggling to generate qualified corporate procurement inquiries through digital channels, relying on expensive and slow trade shows.",
    solution: "Deployed account-based marketing (ABM) on LinkedIn targeted at VP-level construction & procurement directors, paired with high-intent Google Search campaigns and dedicated interactive spec sheets.",
    results: {
      primaryMetric: "4.2x",
      primaryLabel: "Qualified Inbound Enterprise RFQs",
      secondaryMetric: "₹18M+",
      secondaryLabel: "Pipeline Value Generated in 90 Days",
      tertiaryMetric: "38%",
      tertiaryLabel: "RFQ to Closed Contract Ratio",
    },
    tags: ["B2B LinkedIn Ads", "Account-Based Marketing", "Google Search", "Landing Page CRO"],
    clientLogo: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209657/xntrova-wp-media/xntrova-wp-media/25-b12b5da59d88eafd.webp",
    industry: "Industrial Manufacturing",
  },
];
