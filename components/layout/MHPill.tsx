"use client";

import { useState } from "react";

export default function MentalHealthPill() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-[calc(100vw-3rem)]">
      {open && (
        <div className="mb-3 ml-auto w-full max-w-[280px] rounded-lg bg-white p-4 shadow-xl ring-1 ring-danger/20">
          <p className="font-bold text-danger">Mental Health Helpline</p>
          <p className="mt-1 text-sm text-muted">Confidential support, available for urgent guidance.</p>
          <div className="mt-4 flex gap-2">
            <a href="tel:1800000000" className="rounded-md bg-danger px-4 py-2 text-sm font-bold text-white">Call</a>
            <a href="https://wa.me/910000000000" className="rounded-md border border-danger px-4 py-2 text-sm font-bold text-danger">WhatsApp</a>
          </div>
        </div>
      )}
      <button onClick={() => setOpen(!open)} className="rounded-full bg-danger px-3 py-2 text-xs font-black whitespace-nowrap text-white shadow-lg sm:px-5 sm:py-3 sm:text-sm">
        🆘 Mental Health Helpline: 1800-XXX-XXXX
      </button>
    </div>
  );
}
