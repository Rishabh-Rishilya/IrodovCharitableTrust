import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Transparency",
  description: "View reports, registrations, governance details, and accountability documents.",
};
import { docs } from "@/lib/data";

export default function TransparencyPage() {
  return (
    <main>
      <PageHero title="Transparency" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Transparency" }]} />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <p className="max-w-4xl text-lg leading-8 text-muted">IRODOV is committed to open documentation, public accountability, verified compliance records, and responsible utilization of every contribution received.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {docs.map(([name, year]) => <article key={name} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10"><div className="flex items-start justify-between gap-4"><span className="text-3xl text-primary">▣</span><span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">Verified</span></div><h2 className="mt-5 font-display text-xl font-black text-primary">{name}</h2><p className="mt-2 text-sm text-muted">{year}</p><button className="mt-5 rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary">Download / View</button></article>)}
        </div>
        <div className="mt-12 rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10">
          <h2 className="font-display text-3xl font-black text-primary">Financial Accountability</h2>
          {[["Programs", 78], ["Admin", 12], ["Fundraising", 10]].map(([label, value]) => <div key={label} className="mt-5"><div className="mb-2 flex justify-between text-sm font-bold"><span>{label}</span><span>{value}%</span></div><div className="h-3 rounded-full bg-primary/10"><div className="h-3 rounded-full bg-accent" style={{ width: `${value}%` }} /></div></div>)}
        </div>
      </section>
    </main>
  );
}
