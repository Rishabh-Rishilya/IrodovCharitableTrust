"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";

type Crumb = { label: string; href?: string };

export default function PageHero({ title, subtitle, breadcrumbs }: { title: string; subtitle?: string; breadcrumbs: Crumb[] }) {
  const { language } = useLanguage();

  return (
    <section className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <nav className="mb-5 flex flex-wrap gap-2 text-sm text-[#FFE1D2]">
          {breadcrumbs.map((crumb, index) => {
            const label = crumb.label === "Home" ? (language === "hi" ? "होम" : "Home") : crumb.label;
            return (
              <span key={`${crumb.label}-${index}`} className="flex items-center gap-2">
                {crumb.href ? <Link href={crumb.href} className="hover:text-accent">{label}</Link> : label}
                {index < breadcrumbs.length - 1 && <span>/</span>}
              </span>
            );
          })}
        </nav>
        <h1 className="font-display text-2xl font-black leading-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-3xl text-lg leading-8 text-[#FFE1D2]">{subtitle}</p>}
      </div>
    </section>
  );
}
