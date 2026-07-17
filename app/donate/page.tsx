"use client";

import DonationForm from "@/components/forms/DonationForm";
import PageHero from "@/components/ui/PageHero";
import { useLanguage } from "@/lib/LanguageContext";

export default function DonatePage() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  return (
    <main>
      <PageHero
        title={isHindi ? "दान" : "Donate"}
        subtitle={
          isHindi
            ? "शिक्षा, स्वास्थ्य, मानसिक कल्याण, सहायता और समुदाय की स्थिरता के लिए योगदान दें।"
            : "Support education, health, mental wellness, relief, and community resilience."
        }
        breadcrumbs={[{ label: isHindi ? "होम" : "Home", href: "/" }, { label: isHindi ? "दान" : "Donate" }]}
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.5fr_1fr]">
        <DonationForm />
        <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="font-display text-2xl font-black text-primary">{isHindi ? "आपका ₹1000 ..." : "Your ₹1000 can..."}</h2>
            <ul className="mt-4 grid gap-3 text-sm text-muted">
              <li>{isHindi ? "अध्ययन सामग्री उपलब्ध कराए" : "Provide study materials"}</li>
              <li>{isHindi ? "परामर्श तक पहुँच समर्थन करे" : "Support counselling access"}</li>
              <li>{isHindi ? "स्वास्थ्य शिविर की आवश्यकताएँ पूरी करे" : "Fund health camp essentials"}</li>
            </ul>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="font-bold text-primary">{isHindi ? "विश्वास बैज" : "Trust Badges"}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {(isHindi ? ["80G कर छूट", "पंजीकृत ट्रस्ट", "सुरक्षित"] : ["80G Tax Exempt", "Registered Trust", "Secure"]).map((x) => (
                <span key={x} className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-accent">
                  {x}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h2 className="font-bold text-primary">{isHindi ? "हाल के दाता" : "Recent Donors"}</h2>
            <p className="mt-3 text-sm text-muted">Anita ₹2500 • Rahul ₹1000 • Priya ₹5000</p>
          </div>
          <a href="/donate/receipt" className="block rounded-lg border border-primary px-4 py-3 text-center font-bold text-primary transition hover:bg-primary hover:text-white">
            {isHindi ? "नमूना रसीद देखें" : "View Sample Receipt"}
          </a>
        </aside>
      </section>
    </main>
  );
}
