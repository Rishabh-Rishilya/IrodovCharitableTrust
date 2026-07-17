import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import ProgramCard from "@/components/ui/ProgramCard";

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  const query = q?.trim() || "";

  return (
    <main>
      <PageHero title="Search" subtitle={query ? `Search results for: ${query}` : "Search IRODOV programs, events, news, and resources."} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Search" }]} />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-border">
          <h2 className="font-display text-3xl font-black text-primary">No results found</h2>
          <p className="mt-3 text-muted">Browse our most active program areas below.</p>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <ProgramCard title="Education" desc="Learning support, digital access, and academic continuity." href="/programs/education" />
          <ProgramCard title="Mental Health & Wellness" desc="Counselling, awareness, helplines, and school wellness." href="/programs/mental-health" />
          <ProgramCard title="Healthcare" desc="Medical camps, preventive care, and treatment support." href="/programs/healthcare" />
        </div>
        <Link href="/programs" className="mt-8 inline-block font-bold text-accent">Browse all programs →</Link>
      </section>
    </main>
  );
}
