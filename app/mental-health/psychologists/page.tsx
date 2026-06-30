import PageHero from "@/components/ui/PageHero";
import TeamCard from "@/components/ui/TeamCard";

export default function PsychologistsPage() {
  return <main><PageHero title="Psychologists" breadcrumbs={[{label:"Home",href:"/"},{label:"Mental Health",href:"/mental-health"},{label:"Psychologists"}]} /><section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-3">{["Dr. Meera Nair","Rhea Kapoor","Aman Verma"].map((n) => <TeamCard key={n} name={n} role="Clinical Psychologist • 8+ years" bio="Specializes in student stress, anxiety, relationship concerns, and resilience-building." />)}</section></main>;
}
