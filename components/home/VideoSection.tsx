"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const videos = [
  ["Mental Health Camp 2024 - Reaching Rural Communities", "4:32", "Mental+Health+Camp"],
  ["Scholarship Stories - Students Moving Forward", "6:18", "Scholarship+Stories"],
  ["Healthcare Outreach - Care at the Doorstep", "3:55", "Healthcare+Outreach"],
];

export default function VideoSection() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-surface px-5 py-16 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-4xl font-black text-primary">Change That Inspires Us</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {videos.map(([title, duration, image]) => (
            <button key={title} type="button" onClick={() => setOpen(true)} className="group overflow-hidden rounded-lg bg-white text-left shadow-sm ring-1 ring-border">
              <div className="relative">
                <Image src={`https://placehold.co/640x360/1E5FA8/FFFFFF/png?text=${image}`} alt="" width={640} height={360} className="h-52 w-full object-cover" />
                <div className="absolute inset-0 bg-black/35" />
                <span className="absolute inset-0 m-auto grid size-16 place-items-center rounded-full bg-white text-primary transition group-hover:scale-105" aria-hidden="true">
                  <svg viewBox="0 0 24 24" className="ml-1 size-7 fill-current">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                <span className="absolute bottom-3 right-3 rounded bg-black/70 px-2 py-1 text-xs font-bold text-white">{duration}</span>
              </div>
              <h3 className="p-5 font-display text-xl font-black text-primary">{title}</h3>
            </button>
          ))}
        </div>
        <Link href="/media" className="mt-8 inline-block font-bold text-accent">
          Watch More Videos →
        </Link>
      </div>
      {open && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/70 p-5" onClick={() => setOpen(false)}>
          <div className="w-full max-w-4xl" onClick={(event) => event.stopPropagation()}>
            <iframe className="aspect-video w-full rounded-lg bg-black" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="IRODOV video" allowFullScreen />
            <button type="button" onClick={() => setOpen(false)} className="mt-4 rounded-lg bg-white px-4 py-2 font-bold text-primary">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
