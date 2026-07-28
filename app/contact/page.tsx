"use client";

import ContactForm from "@/components/forms/ContactForm";
import PageHero from "@/components/ui/PageHero";
import { useLanguage } from "@/lib/LanguageContext";

export default function ContactPage() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  return (
    <main>
      <PageHero title={isHindi ? "संपर्क" : "Contact"} breadcrumbs={[{ label: isHindi ? "होम" : "Home", href: "/" }, { label: isHindi ? "संपर्क" : "Contact" }]} />
      <section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2">
        <ContactForm title={isHindi ? "संपर्क फ़ॉर्म" : "Contact Form"} />
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-border">
          <h2 className="font-display text-2xl font-black text-primary">IRODOV Charitable Trust</h2>
          <div className="mt-6 space-y-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-primary">Registered Office</p>
              <p className="mt-1 leading-7 text-[#3D4451]">
                1175, C-2 Block, Palam Vihar
                <br />
                Gurgaon, Haryana, India
                <br />
                PIN - 122017
              </p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-primary">Phone</p>
              <p className="mt-1 text-[#3D4451]">+91 9717232575</p>
              <p className="text-[#3D4451]">+91 9971060575</p>
            </div>
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-primary">Email</p>
              <p className="mt-1 text-[#3D4451]">info@irodovcharitabletrust.org</p>
              <p className="text-[#3D4451]">helpdesk@irodovcharitabletrust.org</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

