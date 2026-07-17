"use client";

import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const choose = (value: "accepted" | "declined") => {
    localStorage.setItem("cookie-consent", value);
    setVisible(false);
  };

  if (!mounted) return null;
  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] flex flex-col items-center justify-between gap-4 border-t border-border bg-white px-6 py-4 text-foreground shadow-2xl md:flex-row">
      <p className="text-center text-sm md:text-left">
        We use cookies to improve your experience on our website. By continuing to browse, you agree to our{" "}
        <a href="/privacy-policy" className="text-accent underline">Cookie Policy</a>.
      </p>
      <div className="flex flex-shrink-0 gap-3">
        <button onClick={() => choose("declined")} className="rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:border-primary hover:text-primary">Decline</button>
        <button onClick={() => choose("accepted")} className="rounded-lg bg-accent px-4 py-2 text-sm text-white transition-colors hover:bg-[#e55a30]">Accept All</button>
      </div>
    </div>
  );
}
