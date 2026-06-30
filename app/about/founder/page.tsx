import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import { placeholder } from "@/lib/data";

export default function FounderPage() {
  return <main><PageHero title="Founder" breadcrumbs={[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Founder"}]} /><section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]"><Image src={placeholder("Founder Profile","720x760")} alt="Founder" width={720} height={760} className="rounded-lg object-cover" /><div><h2 className="font-display text-4xl font-black text-primary">Dr. A. Irodov</h2><p className="mt-5 leading-8 text-muted">Placeholder biography describing the founder’s education, public service journey, institution-building work, and commitment to expanding access to education, healthcare, and emotional wellbeing.</p><blockquote className="mt-8 border-l-4 border-accent pl-5 font-display text-2xl font-bold text-primary">“Charity must be humane, professional, and accountable.”</blockquote></div></section></main>;
}
