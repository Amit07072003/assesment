import type { Metadata, Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Xntrova Technologies | Premier Digital Marketing & Web Development Agency in Delhi NCR",
  description:
    "Scale your business with Xntrova Technologies. Premier B2B digital marketing and web development agency in Delhi NCR offering bespoke Next.js web applications, technical SEO, PPC, and full-funnel digital growth.",
  keywords: [
    "Digital Marketing Agency Delhi",
    "Web Development Company Delhi",
    "SEO Services Delhi NCR",
    "PPC Agency",
    "Next.js Development",
    "Xntrova Technologies",
  ],
  authors: [{ name: "Xntrova Technologies" }],
  openGraph: {
    title: "Xntrova Technologies | Premier Digital Marketing & Web Development Agency",
    description:
      "Transforming ideas into market-leading digital experiences. Driven by ideas, focused on results.",
    url: "https://www.xntrova.com/",
    siteName: "Xntrova Technologies",
    images: [
      {
        url: "https://res.cloudinary.com/di93stsbz/image/upload/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png",
        width: 1200,
        height: 630,
        alt: "Xntrova Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Xntrova Technologies | Premier Digital Marketing & Web Development Agency",
    description:
      "Transforming ideas into market-leading digital experiences. Driven by ideas, focused on results.",
    images: ["https://res.cloudinary.com/di93stsbz/image/upload/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.xntrova.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": "https://www.xntrova.com/#organization",
        name: "Xntrova Technologies",
        url: "https://www.xntrova.com/",
        logo: "https://res.cloudinary.com/di93stsbz/image/upload/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png",
        image: "https://res.cloudinary.com/di93stsbz/image/upload/v1788158799/cms-settings/cx4pzlnw2srdmd5ckfjp.png",
        description:
          "India's premier B2B digital marketing and technology agency delivering growth-focused web development, SEO, and performance marketing.",
        telephone: "+91-868-382-8646",
        email: "info@xntrova.com",
        address: {
          "@type": "PostalAddress",
          streetAddress: "A107, 2nd Floor, Sector 8, Dwarka",
          addressLocality: "New Delhi",
          postalCode: "110077",
          addressCountry: "IN",
        },
        sameAs: [
          "https://www.facebook.com/xntrova/",
          "https://www.instagram.com/xntrova.agency/",
          "https://www.linkedin.com/company/xntrova/",
          "https://x.com/xntrova",
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "150",
        },
      },
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} scroll-smooth overflow-x-hidden w-full`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#EEF2F9] text-slate-800 antialiased selection:bg-[#004BFF] selection:text-white overflow-x-hidden w-full">
        {children}
      </body>
    </html>
  );
}
