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
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10">
          <h2 className="font-display text-2xl font-black text-primary">IRODOV Charitable Trust</h2>
          <p className="mt-4 leading-7 text-muted">
            {isHindi ? "पंजीकृत कार्यालय: नई दिल्ली, भारत" : "Registered Office: New Delhi, India"}
            <br />
            {isHindi ? "फोन: 1800-XXX-XXXX" : "Phone: 1800-XXX-XXXX"}
            <br />
            {isHindi ? "ईमेल: contact@irodovtrust.org" : "Email: contact@irodovtrust.org"}
            <br />
            {isHindi ? "कार्य घंटा: सोम-शुक्र, सुबह 10 - शाम 6" : "Working Hours: Mon-Sat, 10 AM - 6 PM"}
          </p>
          <iframe className="mt-6 h-72 w-full rounded-lg border-0" src="https://maps.google.com/maps?q=New%20Delhi%20India&t=&z=11&ie=UTF8&iwloc=&output=embed" title="IRODOV Delhi address map" />
        </div>
      </section>
    </main>
  );
}
