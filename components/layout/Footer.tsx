"use client";

import Link from "next/link";
import Image from "next/image";
import NewsletterSignup from "@/components/layout/NewsletterSignup";
import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const columns = [
    {
      title: language === "hi" ? "हमारे कार्यक्रम" : "Our Programs",
      links: [
        ["Mental Health & Wellness", "/programs/mental-health"],
        ["Education", "/programs/education"],
        ["Scholarships", "/programs/scholarships"],
        ["Healthcare", "/programs/healthcare"],
        ["Social Welfare", "/programs/social-welfare"],
        ["Skill Development", "/programs/skill-development"],
      ],
    },
    {
      title: language === "hi" ? "त्वरित लिंक" : "Quick Links",
      links: [
        ["About Us", "/about"],
        ["Vision & Mission", "/vision-mission"],
        ["Projects", "/projects"],
        ["Research Centre", "/research"],
        ["Transparency", "/transparency"],
        ["Annual Reports", "/about/annual-reports"],
      ],
    },
    {
      title: language === "hi" ? "जुड़ें" : "Get Involved",
      links: [
        ["Become a Volunteer", "/get-involved/volunteer"],
        ["Become a Mentor", "/get-involved/mentor"],
        ["Donate Now", "/donate"],
        ["Corporate CSR", "/donate/csr"],
        ["Careers", "/careers"],
        ["Events", "/events"],
      ],
    },
  ];

  return (
    <footer className="bg-[#F5EFE0] text-[#1E5FA8]">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-5">
        <div>
          <div className="mb-4 flex flex-col items-start gap-2">
            <Image
              src="/logo.png"
              alt="IRODOV Charitable Trust"
              width={40}
              height={40}
              className="h-8 w-auto object-contain"
              unoptimized
            />
            <div className="flex flex-col leading-tight">
              <span className="font-serif text-lg font-bold whitespace-nowrap text-[#1E5FA8]">IRODOV</span>
              <span className="whitespace-nowrap text-xs tracking-widest text-[#666666]">CHARITABLE TRUST</span>
            </div>
          </div>
          <p className="mt-4 text-sm leading-6 text-[#2D2D2D]">
            A national charitable institution serving education, mental wellness, healthcare, research, and social welfare.
          </p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm font-bold text-[#FF6B35]">
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
            <span>YouTube</span>
            <span>LinkedIn</span>
          </div>
          <NewsletterSignup compact />
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-[#1E5FA8] font-bold text-base">{column.title}</h3>
            <FooterLinks items={column.links} />
          </div>
        ))}

        <div>
          <h3 className="text-[#1E5FA8] font-bold text-base">{language === "hi" ? "संपर्क करें" : "Contact Us"}</h3>
          <p className="mt-4 text-sm leading-7 text-[#2D2D2D]">
            New Delhi, India
            <br />
            +91-XXXXX-XXXXX
            <br />
            info@irodovtrust.org
            <br />
            Mon-Sat, 9AM - 6PM
          </p>
        </div>
      </div>

      <div className="border-t border-[#E5D9C3] bg-[#F5EFE0] px-5 py-5 text-xs text-[#1E5FA8]/70 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <p>(c) 2024 IRODOV Charitable Trust. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            <Link href="#" className="hover:text-accent">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent">Terms & Conditions</Link>
            <Link href="#" className="hover:text-accent">Refund Policy</Link>
            <Link href="#" className="hover:text-accent">Donation Policy</Link>
            <Link href="#" className="hover:text-accent">Cookie Policy</Link>
          </div>
        </div>
        <p className="mx-auto mt-3 max-w-7xl text-[#1E5FA8]/60">
          Registered under Indian Trusts Act | PAN: AAATI1234X | 80G Certified | 12A Certified | CSR Eligible
        </p>
      </div>
    </footer>
  );
}

function FooterLinks({ items }: { items: string[][] }) {
  return (
    <div className="mt-4 grid gap-2 text-sm text-[#2D2D2D]">
      {items.map(([label, href]) => (
        <Link key={href} href={href} className="text-sm text-[#2D2D2D] hover:text-[#FF6B35]">
          {label}
        </Link>
      ))}
    </div>
  );
}
