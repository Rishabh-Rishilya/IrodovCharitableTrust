import PageHero from "@/components/ui/PageHero";

export default function TrusteesPage() {
  return (
    <main>
      <PageHero title="Board of Trustees" subtitle="The trustees guide IRODOV's mission, governance, and public accountability." breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Board of Trustees" }]} />
      <section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
        {[1, 2, 3, 4].map((i) => (
          <article key={i} className="rounded-lg bg-white p-6 text-center shadow-sm ring-1 ring-primary/10">
            <div className="mx-auto grid size-28 place-items-center rounded-full bg-surface-2 text-2xl font-black text-primary">T{i}</div>
            <h2 className="mt-5 font-display text-xl font-black text-primary">Trustee {i}</h2>
            <p className="mt-1 text-sm font-bold text-accent">Board Trustee</p>
            <p className="mt-3 text-sm leading-6 text-muted">Experienced public-service leader supporting education, governance, and transparent institutional growth.</p>
            <a href="#" className="mt-4 inline-block text-sm font-bold text-primary">LinkedIn</a>
          </article>
        ))}
      </section>
    </main>
  );
}
