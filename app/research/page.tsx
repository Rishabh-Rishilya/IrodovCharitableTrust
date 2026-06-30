import ContactForm from "@/components/forms/ContactForm";
import PDFDownloadRow from "@/components/ui/PDFDownloadRow";
import PageHero from "@/components/ui/PageHero";

export default function ResearchPage() {
  return <main><PageHero title="Research" breadcrumbs={[{label:"Home",href:"/"},{label:"Research"}]} /><section className="mx-auto max-w-7xl px-5 py-16 sm:px-8"><div className="mb-6 flex gap-2"><select className="rounded-md border px-4 py-3"><option>Year</option></select><select className="rounded-md border px-4 py-3"><option>Type</option></select></div><div className="grid gap-3">{["Education access paper","Mental health field note","Rural development brief"].map((x) => <PDFDownloadRow key={x} title={x} year="2026" type="Research" />)}</div><div className="mt-10 grid gap-8 lg:grid-cols-2"><div>{["Active Project A","Active Project B"].map((x) => <details key={x} className="mb-3 rounded-lg bg-white p-5 shadow-sm"><summary className="font-bold text-primary">{x}</summary><p className="mt-3 text-muted">Placeholder active research project summary.</p></details>)}<div className="mt-6 grid grid-cols-3 gap-3">{[1,2,3,4,5,6].map((i) => <div key={i} className="rounded-md bg-surface p-4 text-center font-bold text-muted">Logo</div>)}</div></div><ContactForm title="Submit Research Proposal" /></div></section></main>;
}
