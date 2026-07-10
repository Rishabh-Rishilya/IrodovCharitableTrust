"use client";

import PageHero from "@/components/ui/PageHero";
import { useLanguage } from "@/lib/LanguageContext";

export default function CareersPage() {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  return (
    <main>
      <PageHero title={isHindi ? "करियर" : "Careers"} breadcrumbs={[{ label: isHindi ? "होम" : "Home", href: "/" }, { label: isHindi ? "करियर" : "Careers" }]} />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-8 flex flex-wrap gap-2">
          {(isHindi ? ["नौकरियाँ", "इंटर्नशिप", "फेलोशिप", "कंसल्टेंट"] : ["Jobs", "Internships", "Fellowships", "Consultants"]).map((x) => (
            <button key={x} className="rounded-md bg-white px-4 py-2 font-bold text-primary">
              {x}
            </button>
          ))}
        </div>
        <div className="grid gap-5">
          {(isHindi ? ["कार्यक्रम प्रबंधक", "परामर्शदाता", "अनुसंधान साथी", "क्षेत्र समन्वयक"] : ["Program Manager", "Counsellor", "Research Fellow", "Field Coordinator"]).map((x) => (
            <details key={x} className="rounded-lg bg-white p-6 shadow-sm">
              <summary className="cursor-pointer font-display text-xl font-black text-primary">{x} — {isHindi ? "कार्यक्रम" : "Programs"} — {isHindi ? "दिल्ली" : "Delhi"} — {isHindi ? "पूर्णकालिक" : "Full-time"}</summary>
              <p className="mt-4 text-muted">{isHindi ? "स्थिति, जिम्मेदारियाँ, योग्यता और आवेदन निर्देशों का पूर्ण placeholder विवरण।" : "Full placeholder description for the position, responsibilities, qualifications, and application instructions."}</p>
              <form className="mt-5 grid gap-3 md:grid-cols-3">
                <input className="rounded-md border px-4 py-3" placeholder={isHindi ? "नाम" : "Name"} />
                <input className="rounded-md border px-4 py-3" placeholder="Email" />
                <input className="rounded-md border px-4 py-3" placeholder={isHindi ? "रीज़्यूमे अपलोड" : "Resume upload"} />
                <button type="button" className="rounded-md bg-accent px-4 py-3 font-bold md:col-span-3">{isHindi ? "अभी आवेदन करें" : "Apply Now"}</button>
              </form>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
