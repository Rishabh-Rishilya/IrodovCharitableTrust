import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import MentalHealthPill from "@/components/layout/MHPill";
import Navbar from "@/components/layout/Navbar";
import BackToTop from "@/components/layout/BackToTop";
import CookieBanner from "@/components/layout/CookieBanner";
import PageTransition from "@/components/layout/PageTransition";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { LanguageProvider } from "@/lib/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-merriweather",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://irodovtrust.org"),
  title: {
    default: "IRODOV Charitable Trust | Education, Health & Hope",
    template: "%s | IRODOV Charitable Trust",
  },
  description:
    "IRODOV Charitable Trust is a national charitable institution supporting education, health, mental wellness, research, social welfare, and disaster relief.",
  keywords: [
    "IRODOV Charitable Trust",
    "charitable trust India",
    "education scholarships",
    "mental health support",
    "healthcare charity",
    "social welfare",
    "CSR NGO India",
  ],
  authors: [{ name: "IRODOV Charitable Trust" }],
  creator: "IRODOV Charitable Trust",
  openGraph: {
    title: "IRODOV Charitable Trust",
    description:
      "Supporting education, mental wellness, healthcare, research, social welfare, and relief across India.",
    url: "https://irodovtrust.org",
    siteName: "IRODOV Charitable Trust",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "IRODOV Charitable Trust" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IRODOV Charitable Trust",
    description: "Education, health, mental wellness, research, and social welfare initiatives across India.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${merriweather.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <LanguageProvider>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
          <MentalHealthPill />
          <WhatsAppButton />
          <BackToTop />
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
