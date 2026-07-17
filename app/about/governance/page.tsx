import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export default function GovernancePage() {
  return (
    <main>
      <PageHero title="Governance" breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Governance" }]} />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-border">
          <h2 className="font-display text-3xl font-black text-primary">Trust Deed</h2>
          <p className="mt-4 max-w-3xl leading-7 text-muted">The trust deed defines IRODOV&apos;s objectives, governance structure, decision rights, and charitable commitments.</p>
          <button className="mt-5 rounded-md bg-accent px-5 py-3 font-black">Download Trust Deed (PDF)</button>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-black text-primary">Code of Ethics</h2>
            <ol className="mt-5 grid gap-3 text-muted">
              {["Beneficiary dignity", "Non-discrimination", "Financial integrity", "Conflict disclosure", "Safeguarding", "Confidentiality", "Evidence-informed programs", "Transparent reporting"].map((item, index) => <li key={item} className="rounded-md bg-surface p-4">{index + 1}. {item}</li>)}
            </ol>
          </div>
          <div>
            <h2 className="font-display text-3xl font-black text-primary">Financial Accountability</h2>
            <p className="mt-4 leading-7 text-muted">IRODOV maintains documented approvals, periodic review, audit trails, and public reporting for all major program and donation flows.</p>
            <Link href="/transparency" className="mt-5 inline-block rounded-md bg-accent px-5 py-3 font-bold text-white">View Transparency Portal</Link>
            <h3 className="mt-8 font-display text-2xl font-black text-primary">Policies</h3>
            <div className="mt-4 grid gap-3">{["Safeguarding Policy", "Donation Policy", "Refund Policy", "Volunteer Policy", "Conflict of Interest Policy"].map((p) => <button key={p} className="rounded-md border border-primary px-4 py-2 text-left font-bold text-primary transition hover:bg-primary hover:text-white">{p}</button>)}</div>
          </div>
        </div>
      </section>
    </main>
  );
}
