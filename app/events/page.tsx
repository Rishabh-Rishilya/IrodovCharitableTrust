import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { placeholder } from "@/lib/data";

const filters = ["All", "Workshops", "Webinars", "Medical Camps", "Mental Health Camps", "Conferences", "Student Seminars"];

export default function EventsPage() {
  return (
    <main>
      <PageHero title="Events" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events" }]} />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="mb-8 flex flex-wrap gap-2">{filters.map((item) => <button key={item} className="rounded-md bg-white px-4 py-2 text-sm font-bold text-primary shadow-sm">{item}</button>)}</div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => <article key={i} className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10"><Image src={placeholder(`Event ${i + 1}`, "400x200")} alt="" width={400} height={200} className="h-44 w-full object-cover" /><div className="p-5"><div className="flex items-start justify-between gap-4"><span className="rounded-md bg-accent px-3 py-2 text-center font-black text-foreground">{12 + i}<span className="block text-xs">Aug</span></span><span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{filters[(i % 6) + 1]}</span></div><h2 className="mt-5 font-display text-xl font-black text-primary">Community Event {i + 1}</h2><p className="mt-2 text-sm text-muted">New Delhi, India</p><button className="mt-5 rounded-md bg-primary px-4 py-2 text-sm font-bold text-white">Register</button></div></article>)}
        </div>
        <h2 className="mt-12 font-display text-3xl font-black text-primary">Past Events</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {["Mental Health Camp", "Scholarship Webinar", "Medical Outreach"].map((title) => <article key={title} className="rounded-lg bg-gray-100 p-5 text-muted"><span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">Completed</span><h3 className="mt-4 font-display text-xl font-black text-foreground">{title}</h3><p className="mt-2 text-sm">Past event summary and attendance details.</p></article>)}
        </div>
      </section>
    </main>
  );
}
