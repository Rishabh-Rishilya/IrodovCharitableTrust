import PageHero from "@/components/ui/PageHero";

export default function StudentScholarshipsPage() {
  return <main><PageHero title="Student Scholarships" breadcrumbs={[{label:"Home",href:"/"},{label:"Students",href:"/students"},{label:"Scholarships"}]} /><section className="mx-auto max-w-5xl px-5 py-16 sm:px-8"><div className="grid gap-4 md:grid-cols-3">{["Merit-cum-Need","STEM Scholars","Emergency Aid"].map((x) => <div key={x} className="rounded-lg bg-white p-5 shadow-sm"><h2 className="font-bold text-primary">{x}</h2></div>)}</div><form className="mt-8 grid gap-4 rounded-lg bg-white p-6 shadow-sm">{["Name","College","Course","Year","Income","Marks","Upload Docs"].map((x) => <input key={x} className="rounded-md border px-4 py-3" placeholder={x} />)}<button type="button" className="rounded-md bg-accent px-5 py-3 font-black">Apply</button></form></section></main>;
}
