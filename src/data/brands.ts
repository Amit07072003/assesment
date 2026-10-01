export interface ReviewPlatform {
  name: string;
  rating: string;
  reviewsCount: string;
  badgeText: string;
  logoUrl?: string;
  color: string;
}

export const reviewPlatforms: ReviewPlatform[] = [
  {
    name: "Clutch",
    rating: "4.9/5",
    reviewsCount: "50+ Reviews",
    badgeText: "Top Digital Marketing Agency",
    logoUrl: "https://res.cloudinary.com/di93stsbz/image/upload/v1788251111/xntrova-wp-media/brand-logos/clutch.svg",
    color: "#FF3D2E",
  },
  {
    name: "Google Reviews",
    rating: "5.0/5",
    reviewsCount: "120+ Verified Ratings",
    badgeText: "Excellence in Agency Services",
    color: "#4285F4",
  },
  {
    name: "Trustpilot",
    rating: "4.8/5",
    reviewsCount: "Verified Enterprise Partner",
    badgeText: "Customer Satisfaction Leader",
    color: "#00B67A",
  },
  {
    name: "GoodFirms",
    rating: "4.9/5",
    reviewsCount: "Top Rated B2B Partner",
    badgeText: "Top Development & SEO Agency",
    logoUrl: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1788251114/xntrova-wp-media/brand-logos/goodfirms.jpg",
    color: "#2C7DF7",
  },
  {
    name: "DesignRush",
    rating: "4.9/5",
    reviewsCount: "Ranked Top 10 Agency",
    badgeText: "Premier Web Design Agency",
    logoUrl: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1788251112/xntrova-wp-media/brand-logos/designrush.png",
    color: "#FF5A5F",
  },
];

export interface ClientBrand {
  name: string;
  industry: string;
  logoUrl?: string;
}

export const verifiedClients: ClientBrand[] = [
  {
    name: "Scholar Scribe Solutions",
    industry: "EdTech & SaaS",
    logoUrl: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209654/xntrova-wp-media/xntrova-wp-media/27-93030f459f54a40f.webp",
  },
  {
    name: "Etex",
    industry: "Industrial & Manufacturing",
    logoUrl: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209657/xntrova-wp-media/xntrova-wp-media/25-b12b5da59d88eafd.webp",
  },
  {
    name: "Onsa",
    industry: "Fintech & Corporate",
    logoUrl: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209658/xntrova-wp-media/xntrova-wp-media/24-a3b12968a07aa207.webp",
  },
  {
    name: "Herbals Here",
    industry: "Ayurveda & D2C Wellness",
    logoUrl: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209660/xntrova-wp-media/xntrova-wp-media/23-d847757291b16815.webp",
  },
  {
    name: "Range Lilies",
    industry: "Fashion & Lifestyle",
    logoUrl: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209661/xntrova-wp-media/xntrova-wp-media/22-28c745b590448d01.webp",
  },
  {
    name: "Pitti Jewels & Pearls",
    industry: "Luxury Jewelry & E-Commerce",
    logoUrl: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209663/xntrova-wp-media/xntrova-wp-media/5-3699036ea4992f89.webp",
  },
  {
    name: "Berryan Luiz",
    industry: "Apparel & Retail",
    logoUrl: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209665/xntrova-wp-media/xntrova-wp-media/2-89328e3e86eae27d.webp",
  },
  {
    name: "Amritya Wellness",
    industry: "Health & Organic Goods",
    logoUrl: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209666/xntrova-wp-media/xntrova-wp-media/logo-1-86c7453d4dbc03a3.webp",
  },
  {
    name: "Fortune Mattresses",
    industry: "Home Comfort & Consumer Goods",
    logoUrl: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209668/xntrova-wp-media/xntrova-wp-media/21-74fc495daed31461.webp",
  },
  {
    name: "NITDA",
    industry: "Technology Agency",
    logoUrl: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209670/xntrova-wp-media/xntrova-wp-media/19-b8fef04fa64e0b05.webp",
  },
  {
    name: "Good Health Foundation",
    industry: "Healthcare NGO",
    logoUrl: "https://res.cloudinary.com/di93stsbz/image/upload/f_auto,q_auto,c_limit,w_256/v1787209671/xntrova-wp-media/xntrova-wp-media/17-scaled-1-6168fc981b5c9d4a.webp",
  },
];
