"use client";

import { useState } from "react";

export default function DonationAmountPicker() {
  const amounts = ["₹500", "₹1000", "₹2500", "₹5000", "₹10000"];
  const [selected, setSelected] = useState("₹1000");
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {amounts.map((amount) => (
        <button
          key={amount}
          type="button"
          onClick={() => setSelected(amount)}
          className={`rounded-md border px-4 py-3 text-sm font-bold ${selected === amount ? "border-accent bg-accent text-foreground" : "border-primary/15 bg-white text-primary"}`}
        >
          {amount}
        </button>
      ))}
      <input className="rounded-md border border-primary/15 px-4 py-3 text-sm" placeholder="Custom amount" />
    </div>
  );
}
