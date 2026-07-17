"use client";

import Image from "next/image";
import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { placeholder } from "@/lib/data";

const tabs = ["Ongoing", "Upcoming", "Completed", "Flagship"];

export default function ProjectsPage() {
  const [tab, setTab] = useState("Ongoing");
  const count = tab === "Ongoing" ? 6 : tab === "Flagship" ? 2 : 4;
  return (
    <main>
      <PageHero title="Projects" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Projects" }]} />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="flex flex-wrap gap-2">{tabs.map((item) => <button key={item} onClick={() => setTab(item)} className={`rounded-md px-4 py-2 font-bold ${tab === item ? "bg-accent text-white" : "bg-white text-primary"}`}>{item}</button>)}</div>
        <div className={`mt-8 grid gap-5 ${tab === "Flagship" ? "lg:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
          {Array.from({ length: count }, (_, i) => (
            <article key={i} className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-border">
              <Image src={placeholder(`${tab} Project ${i + 1}`, "400x200")} alt="" width={400} height={200} className={`${tab === "Flagship" ? "h-64" : "h-44"} w-full object-cover`} />
              <div className="p-5">
                <div className="flex flex-wrap gap-2 text-xs font-bold"><span className="rounded-full bg-primary/10 px-3 py-1 text-primary">New Delhi</span><span className="rounded-full bg-accent/20 px-3 py-1 text-white">{tab === "Upcoming" ? "Starting Soon" : tab === "Completed" ? "Completed" : "Education"}</span></div>
                <h2 className="mt-4 font-display text-xl font-black text-primary">{tab} Project {i + 1}</h2>
                <p className="mt-2 text-sm leading-6 text-muted">Placeholder project description with beneficiaries, implementation area, and partner details.</p>
                {tab === "Ongoing" && <div className="mt-4 h-2 rounded-full bg-primary/10"><div className="h-2 rounded-full bg-accent" style={{ width: `${60 + i * 4}%` }} /></div>}
                {tab === "Completed" && <p className="mt-4 font-bold text-green-700">Impact: {(i + 1) * 750}+ people reached</p>}
                <button className="mt-5 rounded-md bg-accent px-4 py-2 text-sm font-bold text-white">View Details</button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
