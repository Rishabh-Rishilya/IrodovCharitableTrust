import PageHero from "@/components/ui/PageHero";

export default function InternshipPage() {
  return <main><PageHero title="Internships" breadcrumbs={[{label:"Home",href:"/"},{label:"Students",href:"/students"},{label:"Internship"}]} /><section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-3">{["Research Intern","Program Intern","Design Intern"].map((r) => <article key={r} className="rounded-lg bg-white p-6 shadow-sm"><h2 className="font-display text-xl font-black text-primary">{r}</h2><p className="mt-3 text-sm text-muted">Duration: 8 weeks • Stipend: Placeholder • Department: Programs</p><button className="mt-5 rounded-md bg-accent px-4 py-2 font-bold">Apply</button></article>)}</section></main>;
}
