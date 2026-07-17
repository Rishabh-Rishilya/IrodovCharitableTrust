import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import { placeholder, programServices, programs } from "@/lib/data";

export function generateStaticParams() {
  return programs.map(([slug]) => ({ slug }));
}

export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = programs.find(([item]) => item === slug);
  if (!program) notFound();
  const [, title, desc] = program;
  const services = programServices[slug] ?? ["Program design", "Beneficiary support", "Monitoring", "Partnerships"];

  return (
    <main>
      <PageHero title={title} subtitle={desc} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Programs", href: "/programs" }, { label: title }]} />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <p className="max-w-4xl text-lg leading-8 text-muted">
          The {title} program delivers structured support through community partnerships, professional volunteers, field implementation, and transparent reporting. It is designed to meet immediate needs while building long-term resilience.
        </p>
        <h2 className="mt-12 font-display text-3xl font-black text-primary">Services</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {services.map((service) => <div key={service} className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-border"><span className="text-accent">◆</span> <span className="font-bold text-primary">{service}</span></div>)}
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {[["2,500+", "Beneficiaries"], ["15", "Partner districts"], ["82%", "Follow-up completion"]].map(([num, label]) => <div key={label} className="rounded-lg border border-[#E5D9C3] bg-[#F5EFE0] p-6 text-center text-primary shadow-sm"><p className="font-display text-4xl font-black text-accent">{num}</p><p className="mt-2 text-sm">{label}</p></div>)}
        </div>
        {[1, 2].map((item) => <div key={item} className="mt-12 grid gap-8 lg:grid-cols-2"><Image src={placeholder(`${title} Initiative ${item}`, "800x520")} alt="" width={800} height={520} className={`${item % 2 === 0 ? "lg:order-2" : ""} rounded-lg object-cover`} /><div className="self-center"><h2 className="font-display text-3xl font-black text-primary">Key Initiative {item}</h2><p className="mt-4 leading-7 text-muted">Placeholder initiative details covering program design, local partners, beneficiary selection, implementation rhythm, and expected outcomes.</p></div></div>)}
        <div className="mt-12 rounded-lg bg-surface p-8 md:flex md:items-center md:justify-between">
          <h2 className="font-display text-3xl font-black text-primary">Support {title}</h2>
          <div className="mt-5 flex gap-3 md:mt-0"><Link href="/get-involved" className="rounded-md border border-primary px-5 py-3 font-bold text-primary transition hover:bg-primary hover:text-white">Get Involved</Link><Link href="/donate" className="rounded-md bg-accent px-5 py-3 font-black text-white">Donate for this Cause</Link></div>
        </div>
      </section>
    </main>
  );
}
