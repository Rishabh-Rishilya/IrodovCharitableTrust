"use client";

import { useState } from "react";
import DonationAmountPicker from "@/components/ui/DonationAmountPicker";

export default function DonationForm() {
  const [tab, setTab] = useState("upi");
  return (
    <form className="space-y-8 rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10">
      <section>
        <h2 className="font-display text-2xl font-black text-primary">Step 1 — Choose Amount</h2>
        <div className="mt-4 flex w-fit rounded-md bg-surface p-1">
          {["One-time", "Monthly"].map((item) => <button key={item} type="button" className="rounded-md px-4 py-2 text-sm font-bold text-primary focus:bg-white">{item}</button>)}
        </div>
        <div className="mt-4"><DonationAmountPicker /></div>
        <select className="mt-4 w-full rounded-md border border-primary/15 px-4 py-3">
          {["General Fund", "Education", "Mental Health", "Healthcare", "Social Welfare", "Disaster Relief"].map((c) => <option key={c}>{c}</option>)}
        </select>
      </section>
      <section>
        <h2 className="font-display text-2xl font-black text-primary">Step 2 — Donor Details</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <input className="rounded-md border border-primary/15 px-4 py-3" placeholder="Full Name *" />
          <input className="rounded-md border border-primary/15 px-4 py-3" placeholder="Email *" />
          <input className="rounded-md border border-primary/15 px-4 py-3" placeholder="Phone *" />
          <input className="rounded-md border border-primary/15 px-4 py-3" placeholder="PAN Number for 80G tax exemption certificate" />
          <textarea className="min-h-24 rounded-md border border-primary/15 px-4 py-3 sm:col-span-2" placeholder="Address" />
        </div>
      </section>
      <section>
        <h2 className="font-display text-2xl font-black text-primary">Step 3 — Payment Method</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {[["upi","UPI"],["bank","Bank Transfer"],["online","Online Payment"]].map(([key, label]) => (
            <button key={key} type="button" onClick={() => setTab(key)} className={`rounded-md px-4 py-2 text-sm font-bold ${tab === key ? "bg-primary text-white" : "bg-surface text-primary"}`}>{label}</button>
          ))}
        </div>
        <div className="mt-5 rounded-lg bg-surface p-5">
          {tab === "upi" && <div><div className="rounded-md bg-white p-4 font-bold text-primary">UPI ID: irodovtrust@upi <button type="button" className="ml-3 text-accent">Copy</button></div><div className="mt-4 grid size-40 place-items-center rounded-md bg-white text-xs text-muted">QR Placeholder</div><p className="mt-4 text-sm text-muted">Scan QR or copy UPI ID, complete payment in your UPI app, then enter reference number below.</p><input className="mt-4 w-full rounded-md border px-4 py-3" placeholder="Reference Number" /><button type="button" className="mt-4 rounded-md bg-accent px-5 py-3 font-black">I have completed the payment</button></div>}
          {tab === "bank" && <div><table className="w-full text-sm"><tbody>{[["Account Name","IRODOV Charitable Trust"],["Account Number","000000000000"],["IFSC Code","BANK0001234"],["Bank Name","National Bank"],["Branch","New Delhi"]].map(([k,v]) => <tr key={k} className="border-b"><td className="py-3 font-bold">{k}</td><td>{v}</td></tr>)}</tbody></table><button type="button" className="mt-4 rounded-md border border-primary px-4 py-2 font-bold text-primary">Copy All Details</button><input className="mt-4 w-full rounded-md border px-4 py-3" placeholder="Reference Number" /><button type="button" className="mt-4 rounded-md bg-accent px-5 py-3 font-black">Submit</button></div>}
          {tab === "online" && <div><span className="rounded-full bg-accent/20 px-3 py-1 text-xs font-bold text-primary">Coming Soon</span><p className="mt-4 font-bold">Online payment gateway coming soon.</p><div className="mt-4 flex gap-2"><input className="flex-1 rounded-md border px-4 py-3" placeholder="Email" /><button type="button" className="rounded-md bg-primary px-4 py-3 font-bold text-white">Notify Me</button></div></div>}
        </div>
      </section>
    </form>
  );
}
