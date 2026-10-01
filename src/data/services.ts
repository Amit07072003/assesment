export interface ServiceItem {
  id: string;
  category: "technology" | "growth" | "media";
  title: string;
  shortDesc: string;
  fullDesc: string;
  metric: string;
  deliverables: string[];
  techStack: string[];
  highlight: string;
  iconName: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "web-development",
    category: "technology",
    title: "Website & Web App Development",
    shortDesc: "High-performance, bespoke Next.js and React web platforms engineered for lightning speed, flawless responsiveness, and conversion supremacy.",
    fullDesc: "We don't build generic cookie-cutter templates. We engineer bespoke, scalable web applications with clean component architecture, sub-second load times, and intuitive UI/UX that transforms curious visitors into long-term enterprise clients.",
    metric: "98+ PageSpeed & <1.2s LCP",
    deliverables: [
      "Custom Next.js / React Architecture",
      "Headless CMS Integration & API Design",
      "Mobile-First Responsive Engineering",
      "Conversion Rate Optimization (CRO)",
      "Technical SEO & Core Web Vitals Optimization",
      "Enterprise Security & Cloud Hosting Setup",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "REST / GraphQL"],
    highlight: "Custom Code • Sub-Second Speed",
    iconName: "Code2",
  },
  {
    id: "seo-optimization",
    category: "growth",
    title: "Search Engine Optimization (SEO)",
    shortDesc: "Data-driven organic search strategies that secure dominant top rankings, capture high-intent commercial keywords, and compound sustainable traffic.",
    fullDesc: "Climb the search rankings with algorithmic precision. Our full-spectrum SEO services cover deep technical audits, content architecture, entity optimization, competitor gap exploitation, and high-authority link acquisition that withstands search engine updates.",
    metric: "+250% Avg. Organic Traffic Growth",
    deliverables: [
      "Comprehensive Technical Site Architecture Audit",
      "High-Intent Commercial Keyword Research",
      "On-Page Optimization & Schema Structured Data",
      "High-Authority B2B & Niche Digital PR Backlinks",
      "Local SEO & Google Business Profile Domination",
      "Monthly Transparent Rank & Attribution Reports",
    ],
    techStack: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog", "Schema.org"],
    highlight: "Rank #1 for Revenue-Driving Keywords",
    iconName: "SearchCheck",
  },
  {
    id: "ppc-paid-advertising",
    category: "growth",
    title: "Paid Advertising & Performance PPC",
    shortDesc: "Hyper-targeted Google Search, Shopping, Meta, and LinkedIn ad campaigns calibrated for maximum ROAS and lower customer acquisition costs (CAC).",
    fullDesc: "Eliminate ad spend waste. We build predictive bidding funnels, surgical audience segmentations, high-converting dedicated landing pages, and multi-touch retargeting architectures that consistently deliver 3x to 6x Return on Ad Spend.",
    metric: "4.6x Average Campaign ROAS",
    deliverables: [
      "Google Search, Performance Max & YouTube Ads",
      "Meta (Instagram & Facebook) Retargeting Funnels",
      "High-Value LinkedIn B2B Lead Gen Campaigns",
      "Dynamic A/B Tested Landing Page Creative",
      "Server-Side Conversion API Tracking (CAPI)",
      "Rigorous Negative Keyword & Bid Management",
    ],
    techStack: ["Google Ads", "Meta Business Suite", "LinkedIn Campaign Mgr", "GA4", "Tag Manager"],
    highlight: "Maximized ROAS • Zero Budget Leakage",
    iconName: "TrendingUp",
  },
  {
    id: "ecommerce-growth",
    category: "technology",
    title: "E-Commerce Growth & Headless Stores",
    shortDesc: "Turn-key online store development and full-funnel e-commerce marketing designed to scale average order value (AOV) and reduce cart abandonment.",
    fullDesc: "From luxury jewelry to D2C wellness brands, we design streamlined checkout experiences, friction-free product discoverability, dynamic recommendation engines, and customer retention systems that turn first-time buyers into repeat patrons.",
    metric: "+310% Online Store Revenue Lift",
    deliverables: [
      "Shopify Plus & Custom Headless Storefronts",
      "Frictionless 1-Page Checkout Architecture",
      "Abandoned Cart & SMS Retargeting Sequences",
      "Multi-Currency & Global Logistics Setup",
      "Product Catalog SEO & Rich Snippets",
      "AOV Bundling & Upsell Integration",
    ],
    techStack: ["Shopify", "WooCommerce", "Next.js Commerce", "Stripe", "Klaviyo"],
    highlight: "High AOV • Frictionless Checkout",
    iconName: "ShoppingBag",
  },
  {
    id: "social-media-marketing",
    category: "media",
    title: "Social Media Marketing & Brand Strategy",
    shortDesc: "End-to-end brand positioning, viral social content creation, community engagement, and influencer amplification that builds lasting loyalty.",
    fullDesc: "Connect emotionally with your ideal demographic. We craft compelling brand stories, aesthetic visual design systems, short-form video strategies (Reels/Shorts), and authentic engagement workflows that foster a dedicated community around your brand.",
    metric: "4.8x Social Engagement Multiplier",
    deliverables: [
      "Brand Narrative & Visual Guidelines",
      "High-Value Content Calendars & Editorial Planning",
      "Short-Form Video Production (Reels, TikTok, Shorts)",
      "Influencer Partnership & Outreach Management",
      "Community Management & Reputation Monitoring",
      "Paid Social Amplification & Audience Retargeting",
    ],
    techStack: ["Figma", "Adobe Premiere", "Canva Pro", "Sprout Social", "Meta Creator"],
    highlight: "Cultivate Brand Loyalty & Trust",
    iconName: "Share2",
  },
  {
    id: "content-copywriting",
    category: "media",
    title: "Content Marketing & Conversion Copy",
    shortDesc: "Strategic editorial content, thought leadership whitepapers, and high-impact conversion copywriting that educates prospects and closes deals.",
    fullDesc: "Words that move people to act. We combine psychological persuasion with search intent data to produce authoritative content assets that build thought leadership, earn natural backlinks, and nurture leads across each stage of your sales funnel.",
    metric: "+180% Lead Conversion Lift",
    deliverables: [
      "Thought Leadership Articles & Pillar Content",
      "Sales Page & High-Converting Landing Page Copy",
      "B2B Whitepapers, Case Studies & Lead Magnets",
      "Email Nurture Drip Sequences & Newsletters",
      "Brand Voice & Messaging Framework",
      "Content Distribution & Syndication",
    ],
    techStack: ["Notion", "Grammarly Business", "SurferSEO", "ConvertKit", "WordPress/MDX"],
    highlight: "Compelling Narrative • Real Action",
    iconName: "PenTool",
  },
];
