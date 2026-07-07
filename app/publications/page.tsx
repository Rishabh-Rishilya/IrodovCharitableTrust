import PageHero from "@/components/ui/PageHero";

const filters = ["All", "Annual Reports", "Financial Reports", "Newsletters", "Research Papers", "Books", "Policy Papers"];

export default function PublicationsPage() {
  return (
    <main>
      <PageHero title="Publications" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Publications" }]} />
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="mb-8 flex flex-wrap gap-2">{filters.map((item) => <button key={item} className="rounded-md bg-white px-4 py-2 text-sm font-bold text-primary shadow-sm">{item}</button>)}</div>
        <div className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10">
          {Array.from({ length: 10 }, (_, i) => <div key={i} className="flex flex-col gap-3 border-b border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-bold text-primary">▣ Publication Document {i + 1}</p><p className="mt-1 text-sm text-muted">202{Math.min(i, 6)} • {filters[(i % (filters.length - 1)) + 1]} • {(1.2 + i / 10).toFixed(1)} MB</p></div><button className="rounded-md bg-accent px-4 py-2 text-sm font-black text-white">Download</button></div>)}
        </div>
      </section>
    </main>
  );
}
