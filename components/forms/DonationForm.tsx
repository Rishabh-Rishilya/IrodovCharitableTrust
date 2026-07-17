"use client";

import { useState } from "react";
import DonationAmountPicker from "@/components/ui/DonationAmountPicker";
import { useLanguage } from "@/lib/LanguageContext";

export default function DonationForm() {
  const { language } = useLanguage();
  const isHindi = language === "hi";
  const [tab, setTab] = useState("upi");

  return (
    <form className="space-y-8 rounded-lg bg-white p-6 shadow-sm ring-1 ring-border">
      <section>
        <h2 className="font-display text-2xl font-black text-primary">{isHindi ? "चरण 1 — राशि चुनें" : "Step 1 — Choose Amount"}</h2>
        <div className="mt-4 flex w-fit rounded-md bg-surface p-1">
          {(isHindi ? ["एक बार", "मासिक"] : ["One-time", "Monthly"]).map((item) => (
            <button key={item} type="button" className="rounded-md px-4 py-2 text-sm font-bold text-primary focus:bg-white">
              {item}
            </button>
          ))}
        </div>
        <div className="mt-4"><DonationAmountPicker /></div>
        <select className="mt-4 w-full rounded-md border border-border px-4 py-3">
          {(isHindi ? ["सामान्य कोष", "शिक्षा", "मानसिक स्वास्थ्य", "स्वास्थ्य सेवा", "सामाजिक कल्याण", "आपदा राहत"] : ["General Fund", "Education", "Mental Health", "Healthcare", "Social Welfare", "Disaster Relief"]).map((c) => <option key={c}>{c}</option>)}
        </select>
      </section>
      <section>
        <h2 className="font-display text-2xl font-black text-primary">{isHindi ? "चरण 2 — दाता विवरण" : "Step 2 — Donor Details"}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <input className="rounded-md border border-border px-4 py-3" placeholder={isHindi ? "पूरा नाम *" : "Full Name *"} />
          <input className="rounded-md border border-border px-4 py-3" placeholder={isHindi ? "ईमेल *" : "Email *"} />
          <input className="rounded-md border border-border px-4 py-3" placeholder={isHindi ? "फोन *" : "Phone *"} />
          <input className="rounded-md border border-border px-4 py-3" placeholder={isHindi ? "80G कर छूट के लिए पैन नंबर" : "PAN Number for 80G tax exemption certificate"} />
          <textarea className="min-h-24 rounded-md border border-border px-4 py-3 sm:col-span-2" placeholder={isHindi ? "पता" : "Address"} />
        </div>
      </section>
      <section>
        <h2 className="font-display text-2xl font-black text-primary">{isHindi ? "चरण 3 — भुगतान विधि" : "Step 3 — Payment Method"}</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          {([['upi', isHindi ? 'यूपीआई' : 'UPI'], ['bank', isHindi ? 'बैंक ट्रांसफर' : 'Bank Transfer'], ['online', isHindi ? 'ऑनलाइन भुगतान' : 'Online Payment']]).map(([key, label]) => (
            <button key={key} type="button" onClick={() => setTab(key)} className={`rounded-md px-4 py-2 text-sm font-bold ${tab === key ? "bg-accent text-white" : "bg-surface text-primary"}`}>{label}</button>
          ))}
        </div>
        <div className="mt-5 rounded-lg bg-surface p-5">
          {tab === "upi" && <div><div className="rounded-md bg-white p-4 font-bold text-primary">UPI ID: irodovtrust@upi <button type="button" className="ml-3 text-accent">{isHindi ? "कॉपी" : "Copy"}</button></div><div className="mt-4 grid size-40 place-items-center rounded-md bg-white text-xs text-muted">{isHindi ? "क्यूआर प्लेसहोल्डर" : "QR Placeholder"}</div><p className="mt-4 text-sm text-muted">{isHindi ? "क्यूआर स्कैन करें या यूपीआई आईडी कॉपी करें, अपने यूपीआई ऐप में भुगतान पूरा करें, फिर नीचे संदर्भ संख्या दर्ज करें।" : "Scan QR or copy UPI ID, complete payment in your UPI app, then enter reference number below."}</p><input className="mt-4 w-full rounded-md border px-4 py-3" placeholder={isHindi ? "संदर्भ संख्या" : "Reference Number"} /><button type="button" className="mt-4 rounded-md bg-accent px-5 py-3 font-black">{isHindi ? "मैं भुगतान पूरा कर चुका हूँ" : "I have completed the payment"}</button></div>}
          {tab === "bank" && <div><table className="w-full text-sm"><tbody>{([[isHindi ? "खाता नाम" : "Account Name", "IRODOV Charitable Trust"], [isHindi ? "खाता संख्या" : "Account Number", "000000000000"], [isHindi ? "आईएफएससी कोड" : "IFSC Code", "BANK0001234"], [isHindi ? "बैंक का नाम" : "Bank Name", "National Bank"], [isHindi ? "शाखा" : "Branch", "New Delhi"]]).map(([k,v]) => <tr key={k} className="border-b"><td className="py-3 font-bold">{k}</td><td>{v}</td></tr>)}</tbody></table><button type="button" className="mt-4 rounded-md border border-primary px-4 py-2 font-bold text-primary transition hover:bg-primary hover:text-white">{isHindi ? "सभी विवरण कॉपी करें" : "Copy All Details"}</button><input className="mt-4 w-full rounded-md border px-4 py-3" placeholder={isHindi ? "संदर्भ संख्या" : "Reference Number"} /><button type="button" className="mt-4 rounded-md bg-accent px-5 py-3 font-black">{isHindi ? "जमा करें" : "Submit"}</button></div>}
          {tab === "online" && <div><span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-accent">{isHindi ? "जल्द आ रहा है" : "Coming Soon"}</span><p className="mt-4 font-bold">{isHindi ? "ऑनलाइन भुगतान गेटवे जल्द उपलब्ध होगा।" : "Online payment gateway coming soon."}</p><div className="mt-4 flex gap-2"><input className="flex-1 rounded-md border px-4 py-3" placeholder="Email" /><button type="button" className="rounded-md bg-accent px-4 py-3 font-bold text-white">{isHindi ? "मुझे सूचित करें" : "Notify Me"}</button></div></div>}
        </div>
      </section>
    </form>
  );
}
