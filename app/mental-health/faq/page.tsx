import PageHero from "@/components/ui/PageHero";

export default function FAQPage() {
  return <main><PageHero title="Mental Health FAQ" breadcrumbs={[{label:"Home",href:"/"},{label:"Mental Health",href:"/mental-health"},{label:"FAQ"}]} /><section className="mx-auto max-w-4xl px-5 py-16 sm:px-8">{Array.from({length:8},(_,i) => <details key={i} className="mb-3 rounded-lg bg-white p-5 shadow-sm"><summary className="cursor-pointer font-bold text-primary">Placeholder question {i+1}?</summary><p className="mt-3 text-muted">Placeholder answer explaining process, privacy, appointment expectations, and support options.</p></details>)}</section></main>;
}
