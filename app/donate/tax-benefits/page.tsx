import PageHero from "@/components/ui/PageHero";

export default function TaxBenefitsPage() {
  return (
    <main>
      <PageHero title="Tax Benefits" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Donate", href: "/donate" }, { label: "Tax Benefits" }]} />
      <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-border">
          <h2 className="font-display text-3xl font-black text-primary">80G Explained</h2>
          <p className="mt-4 leading-7 text-muted">Donations to eligible charitable institutions may qualify for tax deduction under Section 80G. Donors should provide PAN details to receive the tax exemption certificate.</p>
          <button className="mt-5 rounded-md bg-accent px-5 py-3 font-black">Download 80G Certificate</button>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {["Donate", "Share PAN", "Verify payment", "Receive certificate"].map((step, index) => <div key={step} className="rounded-lg bg-surface p-5 text-center"><div className="mx-auto grid size-12 place-items-center rounded-full border border-[#E5D9C3] bg-[#F5EFE0] font-black text-primary">{index + 1}</div><p className="mt-3 font-bold text-primary">{step}</p></div>)}
        </div>
        <p className="mt-8 rounded-lg border border-accent bg-accent/10 p-4 font-semibold text-white">PAN is required for issuing an 80G tax exemption certificate.</p>
        <div className="mt-10">{Array.from({ length: 5 }, (_, i) => <details key={i} className="mb-3 rounded-lg bg-white p-5 shadow-sm"><summary className="cursor-pointer font-bold text-primary">Tax benefit question {i + 1}</summary><p className="mt-3 text-muted">Placeholder answer about receipt, PAN, deduction eligibility, and timelines.</p></details>)}</div>
      </section>
    </main>
  );
}
