import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import MentalHealthPill from "@/components/layout/MHPill";
import Navbar from "@/components/layout/Navbar";

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
  title: "IRODOV Charitable Trust",
  description:
    "IRODOV Charitable Trust is a national charitable institution supporting education, health, mental wellness, research, social welfare, and disaster relief.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${merriweather.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        <Navbar />
        {children}
        <Footer />
        <MentalHealthPill />
      </body>
    </html>
  );
}
