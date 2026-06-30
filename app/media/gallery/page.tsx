"use client";

import Image from "next/image";
import { useState } from "react";
import PageHero from "@/components/ui/PageHero";
import { placeholder } from "@/lib/data";

export default function GalleryPage() {
  const [active, setActive] = useState<string | null>(null);
  return <main><PageHero title="Gallery" breadcrumbs={[{label:"Home",href:"/"},{label:"Media",href:"/media"},{label:"Gallery"}]} /><section className="mx-auto max-w-7xl px-5 py-16 sm:px-8"><div className="columns-1 gap-4 sm:columns-2 lg:columns-3">{Array.from({length:9},(_,i) => <Image key={i} onClick={() => setActive(`Photo ${i+1}`)} src={placeholder(`Gallery ${i+1}`,"640x520")} alt="" width={640} height={520} className="mb-4 cursor-pointer rounded-lg" />)}</div><h2 className="mt-12 font-display text-3xl font-black text-primary">Video Gallery</h2><div className="mt-6 grid gap-5 md:grid-cols-2"><iframe className="aspect-video w-full rounded-lg" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video placeholder" /><iframe className="aspect-video w-full rounded-lg" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="Video placeholder 2" /></div>{active && <button onClick={() => setActive(null)} className="fixed inset-0 z-50 grid place-items-center bg-foreground/70 p-8 text-3xl font-black text-white">{active}</button>}</section></main>;
}
