export interface NavItem {
  label: string;
  href: string;
  badge?: string;
}

export const navigationItems: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Why Xntrova", href: "#why-us" },
  { label: "Case Studies", href: "#portfolio" },
  { label: "How We Work", href: "#process" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export const companyContact = {
  name: "Xntrova Technologies",
  phone: "+91 868-382-8646",
  phoneDisplay: "+91 868-382-8646",
  email: "info@xntrova.com",
  address: "A107, 2nd Floor, Sector 8, Dwarka, New Delhi - 110077, India",
  hours: "Mon - Sat: 9:30 AM - 6:30 PM IST",
  socials: {
    facebook: "https://www.facebook.com/xntrova/",
    instagram: "https://www.instagram.com/xntrova.agency/",
    linkedin: "https://www.linkedin.com/company/xntrova/",
    twitter: "https://x.com/xntrova",
  },
};
