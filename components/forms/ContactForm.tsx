"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ContactForm({ title = "Send an Inquiry" }: { title?: string }) {
  const { language } = useLanguage();
  const isHindi = language === "hi";
  const [submitted, setSubmitted] = useState(false);

  return (
    <form className="grid gap-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-border">
      <h2 className="font-display text-2xl font-black text-primary">{title}</h2>
      <input className="rounded-md border border-border px-4 py-3" placeholder={isHindi ? "पूरा नाम" : "Full Name"} />
      <input className="rounded-md border border-border px-4 py-3" placeholder="Email" />
      <input className="rounded-md border border-border px-4 py-3" placeholder={isHindi ? "फोन या विषय" : "Phone or Subject"} />
      <textarea className="min-h-32 rounded-md border border-border px-4 py-3" placeholder={isHindi ? "संदेश" : "Message"} />
      <button
        type="button"
        onClick={() => setSubmitted(true)}
        className="rounded-md bg-accent px-5 py-3 font-black text-white"
      >
        {isHindi ? "भेजें" : "Submit"}
      </button>
      {submitted && (
        <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-green-800 font-medium text-center">
          {isHindi
            ? "धन्यवाद! आपका संदेश प्राप्त हो गया है। हम 24 घंटे में जवाब देंगे।"
            : "Thank you! Your message has been received. We will get back to you within 24 hours."}
        </div>
      )}
    </form>
  );
}