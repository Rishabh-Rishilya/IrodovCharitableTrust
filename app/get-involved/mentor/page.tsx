import ContactForm from "@/components/forms/ContactForm";
import PageHero from "@/components/ui/PageHero";
export default function MentorPage(){return <main><PageHero title="Become a Mentor" breadcrumbs={[{label:"Home",href:"/"},{label:"Get Involved",href:"/get-involved"},{label:"Mentor"}]} /><section className="mx-auto max-w-3xl px-5 py-16 sm:px-8"><ContactForm title="Mentor Form: name, profession, expertise, time commitment" /></section></main>;}
