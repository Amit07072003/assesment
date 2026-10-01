export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarInitial: string;
  quote: string;
  rating: number;
  highlight: string;
  serviceReceived: string;
  verified: boolean;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "amit-verma",
    name: "Amit Verma",
    role: "Founder",
    company: "Scholar Scribe Solutions",
    avatarInitial: "AV",
    quote: "What impressed us most about Xntrova was their strategic mindset. Unlike other digital marketing agencies in Delhi, Xntrova didn’t give us a one-size-fits-all solution; instead, they created customised strategies for our business. Their proactive communication and data-driven approach gave us confidence in every decision we made together.",
    rating: 5,
    highlight: "Customised strategies, not cookie-cutter solutions",
    serviceReceived: "Web Architecture & Organic Growth",
    verified: true,
  },
  {
    id: "neha-kapoor",
    name: "Neha Kapoor",
    role: "Director",
    company: "Range Lilies",
    avatarInitial: "NK",
    quote: "Xntrova is truly the best digital marketing agency. Their team brought fresh ideas and clear directions for our business. They listened to all of our concerns and created their strategies accordingly, and the results they delivered were beyond expectations.",
    rating: 5,
    highlight: "Results delivered beyond expectations",
    serviceReceived: "Social Media & Brand Campaign",
    verified: true,
  },
  {
    id: "rahul-sharma",
    name: "Rahul Sharma",
    role: "CEO",
    company: "Onsa Fintech",
    avatarInitial: "RS",
    quote: "What sets Xntrova apart is the way they combine expertise with a human touch. They celebrate your wins, tackle challenges alongside you, and remain focused on creating long-term value. It’s the kind of partnership every growing business hopes to find.",
    rating: 5,
    highlight: "High technical expertise combined with a human touch",
    serviceReceived: "Full-Funnel Performance Marketing",
    verified: true,
  },
  {
    id: "ankit-gupta",
    name: "Ankit Gupta",
    role: "Founder",
    company: "Herbals Here",
    avatarInitial: "AG",
    quote: "What started as a simple project quickly turned into a long-term partnership. The team of Xntrova was approachable, proactive, and always willing to explore new ideas. Their dedication and attention to detail gave us confidence that our brand was in the right hands.",
    rating: 5,
    highlight: "Meticulous attention to detail and long-term commitment",
    serviceReceived: "SEO & E-Commerce Marketing",
    verified: true,
  },
  {
    id: "priya-patel",
    name: "Priya",
    role: "CEO",
    company: "Amritya Wellness",
    avatarInitial: "P",
    quote: "Xntrova combines creativity with practicality in a way that’s hard to find. Every recommendation had a purpose, and every conversation left us with greater confidence in our direction. They don’t just deliver services; instead, they act as true growth partners.",
    rating: 5,
    highlight: "True growth partners who combine creativity with practicality",
    serviceReceived: "Search Engine Optimization & Web Redesign",
    verified: true,
  },
];
