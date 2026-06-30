import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { placeholder } from "@/lib/data";

export default function SponsorStudentPage() {
  return (
    <main>
      <PageHero title="Sponsor a Student" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Donate", href: "/donate" }, { label: "Sponsor a Student" }]} />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        {["Student A", "Student B", "Student C", "Student D"].map((name, index) => <article key={name} className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-primary/10"><Image src={placeholder(name, "400x260")} alt="" width={400} height={260} className="rounded-md" /><h2 className="mt-4 font-display text-xl font-black text-primary">{name}</h2><p className="mt-1 text-sm font-bold text-muted">Class/Course: Grade {9 + index}</p><p className="mt-3 text-sm leading-6 text-muted">A motivated learner needs annual support for fees, books, travel, and mentoring continuity.</p><p className="mt-4 font-black text-primary">₹{5000 + index * 3000}/year</p><button className="mt-5 rounded-md bg-accent px-4 py-2 font-bold">Sponsor This Student</button></article>)}
      </section>
    </main>
  );
}
