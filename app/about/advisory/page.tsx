import PageHero from "@/components/ui/PageHero";

export default function AdvisoryPage() {
  const advisors = ["Education", "Mental Health", "Healthcare", "Research", "Rural Development", "CSR Strategy"];
  return (
    <main>
      <PageHero title="Advisory Board" breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Advisory Board" }]} />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
        {advisors.map((area, index) => (
          <article key={area} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10">
            <div className="grid size-14 place-items-center rounded-full bg-primary text-lg font-black text-white">A{index + 1}</div>
            <h2 className="mt-4 font-display text-xl font-black text-primary">Advisor {index + 1}</h2>
            <p className="mt-1 text-sm font-bold text-accent">{area}</p>
            <p className="mt-3 text-sm text-muted">Partner Organization</p>
          </article>
        ))}
      </section>
    </main>
  );
}
