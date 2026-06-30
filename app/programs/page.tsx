import PageHero from "@/components/ui/PageHero";
import ProgramCard from "@/components/ui/ProgramCard";
import { programs } from "@/lib/data";

export default function ProgramsPage() {
  return <main><PageHero title="Programs" subtitle="Ten integrated program areas serving students, families, and communities." breadcrumbs={[{label:"Home",href:"/"},{label:"Programs"}]} /><section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-3">{programs.map(([slug, title, desc]) => <ProgramCard key={slug} title={title} desc={desc} href={`/programs/${slug}`} />)}</section></main>;
}
