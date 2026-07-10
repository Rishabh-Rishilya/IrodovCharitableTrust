"use client";

import PageHero from "@/components/ui/PageHero";
import ProgramCard from "@/components/ui/ProgramCard";
import { programs } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

export default function ProgramsPage() {
  const { language } = useLanguage();
  const translatedTitles: Record<string, string> = {
    "mental-health": language === "hi" ? "मानसिक स्वास्थ्य" : "Mental Health & Wellness",
    education: language === "hi" ? "शिक्षा" : "Education",
    scholarships: language === "hi" ? "छात्रवृत्ति" : "Scholarships",
    healthcare: language === "hi" ? "स्वास्थ्य सेवा" : "Healthcare",
    "social-welfare": language === "hi" ? "सामाजिक कल्याण" : "Social Welfare",
    "skill-development": language === "hi" ? "कौशल विकास" : "Skill Development",
    "rural-development": language === "hi" ? "ग्रामीण विकास" : "Rural Development",
    "disaster-relief": language === "hi" ? "आपदा राहत" : "Disaster Relief",
  };

  return (
    <main>
      <PageHero title={language === "hi" ? "हमारे कार्यक्रम" : "Our Programs"} subtitle={language === "hi" ? "छात्रों, परिवारों और समुदायों की सेवा के लिए दस एकीकृत कार्यक्रम क्षेत्र।" : "Ten integrated program areas serving students, families, and communities."} breadcrumbs={[{ label: "Home", href: "/" }, { label: language === "hi" ? "कार्यक्रम" : "Programs" }]} />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
        {programs.map(([slug, title, desc]) => (
          <ProgramCard key={slug} title={translatedTitles[slug] || title} desc={desc} href={`/programs/${slug}`} />
        ))}
      </section>
    </main>
  );
}
