"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function NewsletterSignup({ compact = false }: { compact?: boolean }) {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const { language } = useLanguage();

  const submit = () => {
    if (email.trim()) setDone(true);
  };

  if (compact) {
    return (
      <div className="mt-5">
        <p className="text-sm font-bold text-white">{language === "hi" ? "न्यूज़लेटर सदस्यता" : "Subscribe to Newsletter"}</p>
        <div className="mt-2 flex gap-2">
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="min-w-0 flex-1 rounded-md border border-white/20 bg-white px-3 py-2 text-sm text-primary"
            placeholder={language === "hi" ? "ईमेल" : "Email"}
          />
          <button type="button" onClick={submit} className="rounded-md bg-accent px-3 py-2 text-sm font-bold text-white">
            {language === "hi" ? "सदस्यता लें" : "Subscribe"}
          </button>
        </div>
        {done && <p className="mt-2 text-xs text-white/75">{language === "hi" ? "सदस्यता के लिए धन्यवाद।" : "Thanks for subscribing."}</p>}
      </div>
    );
  }

  return (
    <section className="bg-primary px-5 py-14 text-white sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-4xl font-black">Stay Connected with IRODOV</h2>
        <p className="mt-3 max-w-2xl text-[#FFE1D2]">Get updates on our programs, events, and impact stories delivered to your inbox</p>
        <div className="mt-6 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="flex-1 rounded-lg border border-white/20 bg-white px-4 py-3 text-primary"
            placeholder="Enter your email"
          />
          <button type="button" onClick={submit} className="rounded-lg bg-accent px-6 py-3 font-black text-white">
            Subscribe
          </button>
        </div>
        <p className="mt-3 text-sm text-white/70">We respect your privacy. Unsubscribe anytime.</p>
        {done && <p className="mt-4 font-bold text-accent">You are subscribed. Thank you.</p>}
      </div>
    </section>
  );
}
