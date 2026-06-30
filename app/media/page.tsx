"use client";

import Image from "next/image";
import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { placeholder } from "@/lib/data";

const tabs = ["News", "Press Releases", "Photo Gallery", "Video Gallery", "Success Stories", "Testimonials"];

export default function MediaPage() {
  const [tab, setTab] = useState("News");
  return (
    <main>
      <PageHero title="Media Centre" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Media" }]} />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-8 flex flex-wrap gap-2">{tabs.map((item) => <button key={item} onClick={() => setTab(item)} className={`rounded-md px-4 py-2 text-sm font-bold ${tab === item ? "bg-primary text-white" : "bg-white text-primary"}`}>{item}</button>)}</div>
        {(tab === "News" || tab === "Press Releases") && <div className="grid gap-5 md:grid-cols-3">{Array.from({ length: 6 }, (_, i) => <article key={i} className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10"><Image src={placeholder(`${tab} ${i + 1}`, "400x240")} alt="" width={400} height={240} className="h-44 w-full object-cover" /><div className="p-5"><p className="text-xs font-bold text-muted">2026-06-{10 + i}</p><h2 className="mt-3 font-display text-xl font-black text-primary">{tab} Headline {i + 1}</h2><p className="mt-2 text-sm leading-6 text-muted">Two-line placeholder excerpt for the media update.</p></div></article>)}</div>}
        {tab === "Photo Gallery" && <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">{Array.from({ length: 9 }, (_, i) => <Image key={i} src={placeholder(`Photo ${i + 1}`, "400x300")} alt="" width={400} height={300} className="mb-4 rounded-lg" />)}</div>}
        {tab === "Video Gallery" && <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">{Array.from({ length: 4 }, (_, i) => <article key={i} className="overflow-hidden rounded-lg bg-white shadow-sm"><div className="relative"><Image src={placeholder(`Video ${i + 1}`, "400x240")} alt="" width={400} height={240} className="h-44 w-full object-cover" /><span className="absolute inset-0 grid place-items-center text-4xl text-white">▶</span><span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 text-xs text-white">12:0{i}</span></div><h2 className="p-4 font-bold text-primary">Video Story {i + 1}</h2></article>)}</div>}
        {tab === "Success Stories" && <div className="grid gap-5 lg:grid-cols-3">{["Student A", "Family B", "Community C"].map((name) => <article key={name} className="rounded-lg bg-white p-5 shadow-sm"><Image src={placeholder(name, "400x260")} alt="" width={400} height={260} className="rounded-md" /><h2 className="mt-4 font-display text-xl font-black text-primary">{name}</h2><p className="mt-1 text-sm font-bold text-accent">New Delhi</p><p className="mt-3 text-sm leading-6 text-muted">A 3-4 line placeholder story describing how IRODOV support created a measurable and humane change.</p><p className="mt-4 font-bold text-primary">Impact: Education continuity restored</p></article>)}</div>}
        {tab === "Testimonials" && <div className="flex gap-5 overflow-x-auto pb-3">{["Donor", "Volunteer", "Student", "Partner"].map((role) => <blockquote key={role} className="min-w-80 rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10"><p className="font-display text-xl font-bold text-primary">“IRODOV brings care and accountability together.”</p><p className="mt-4 text-sm font-bold text-muted">{role} Name, {role}</p></blockquote>)}</div>}
      </section>
    </main>
  );
}
