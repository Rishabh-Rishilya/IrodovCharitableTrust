import PageHero from "@/components/ui/PageHero";

export default function CSRPage() {
  return (
    <main>
      <PageHero title="CSR Partnership" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Donate", href: "/donate" }, { label: "CSR Partnership" }]} />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-3xl font-black text-primary">What is CSR?</h2>
        <p className="mt-4 max-w-4xl leading-7 text-muted">Corporate Social Responsibility enables eligible companies to invest in credible charitable programs aligned with national development goals and measurable impact.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {["CSR eligible programs", "Transparent reporting", "Multi-sector impact"].map((item) => <div key={item} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10"><h3 className="font-display text-xl font-black text-primary">{item}</h3><p className="mt-3 text-sm text-muted">Benefit description for corporate partners.</p></div>)}
        </div>
        <div className="mt-10 rounded-lg bg-surface p-6"><h2 className="font-display text-2xl font-black text-primary">80G Tax Benefit</h2><p className="mt-3 text-muted">Eligible donations can receive tax exemption certificates subject to statutory requirements and PAN details.</p><button className="mt-5 rounded-md bg-accent px-5 py-3 font-black">Download Impact Report</button></div>
        <form className="mt-10 grid gap-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10 md:grid-cols-2">
          {["Company Name", "Contact Person", "Email", "Phone", "Budget Range", "Area of Interest"].map((field) => <input key={field} className="rounded-md border border-primary/15 px-4 py-3" placeholder={field} />)}
          <textarea className="min-h-32 rounded-md border border-primary/15 px-4 py-3 md:col-span-2" placeholder="Message" />
          <button type="button" className="rounded-md bg-accent px-5 py-3 font-black md:col-span-2">Submit</button>
        </form>
      </section>
    </main>
  );
}
