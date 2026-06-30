import ContactForm from "@/components/forms/ContactForm";
import ProgramCard from "@/components/ui/ProgramCard";
import PageHero from "@/components/ui/PageHero";

export default function CareerGuidancePage() {
  return <main><PageHero title="Career Guidance" breadcrumbs={[{label:"Home",href:"/"},{label:"Students",href:"/students"},{label:"Career Guidance"}]} /><section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2"><div className="grid gap-4">{["Career maps","Exam planning","Interview readiness"].map((x) => <ProgramCard key={x} title={x} desc="Placeholder student career resource." href="#" />)}</div><ContactForm title="Book a Counsellor" /></section></main>;
}
