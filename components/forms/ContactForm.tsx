"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function ContactForm({ title = "Send an Inquiry" }: { title?: string }) {
  const { language } = useLanguage();
  const isHindi = language === "hi";

  return (
    <form className="grid gap-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-border">
      <h2 className="font-display text-2xl font-black text-primary">{title}</h2>
      <input className="rounded-md border border-border px-4 py-3" placeholder={isHindi ? "पूरा नाम" : "Full Name"} />
      <input className="rounded-md border border-border px-4 py-3" placeholder="Email" />
      <input className="rounded-md border border-border px-4 py-3" placeholder={isHindi ? "फोन या विषय" : "Phone or Subject"} />
      <textarea className="min-h-32 rounded-md border border-border px-4 py-3" placeholder={isHindi ? "संदेश" : "Message"} />
      <button type="button" className="rounded-md bg-accent px-5 py-3 font-black text-white">{isHindi ? "भेजें" : "Submit"}</button>
    </form>
  );
}
