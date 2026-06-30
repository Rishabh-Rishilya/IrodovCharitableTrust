import PageHero from "@/components/ui/PageHero";
import TeamCard from "@/components/ui/TeamCard";

export default function PsychiatristsPage() {
  return <main><PageHero title="Psychiatrists" breadcrumbs={[{label:"Home",href:"/"},{label:"Mental Health",href:"/mental-health"},{label:"Psychiatrists"}]} /><section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-3">{["Dr. Kabir Sethi","Dr. Farah Ali","Dr. Neel Gupta"].map((n) => <TeamCard key={n} name={n} role="Psychiatrist • 10+ years" bio="Provides psychiatric assessment, treatment planning, and referral coordination." />)}</section></main>;
}
