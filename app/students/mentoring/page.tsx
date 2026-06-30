import ContactForm from "@/components/forms/ContactForm";
import TeamCard from "@/components/ui/TeamCard";
import PageHero from "@/components/ui/PageHero";

export default function MentoringPage() {
  return <main><PageHero title="Mentoring" breadcrumbs={[{label:"Home",href:"/"},{label:"Students",href:"/students"},{label:"Mentoring"}]} /><section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2"><div className="grid gap-5 md:grid-cols-2">{["Mentor A","Mentor B"].map((n) => <TeamCard key={n} name={n} role="Academic Mentor" bio="Supports planning, confidence, and study routines." />)}</div><ContactForm title="Request a Mentor" /></section></main>;
}
