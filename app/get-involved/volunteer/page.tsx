import ContactForm from "@/components/forms/ContactForm";
import PageHero from "@/components/ui/PageHero";
export default function VolunteerPage(){return <main><PageHero title="Volunteer" breadcrumbs={[{label:"Home",href:"/"},{label:"Get Involved",href:"/get-involved"},{label:"Volunteer"}]} /><section className="mx-auto max-w-3xl px-5 py-16 sm:px-8"><ContactForm title="Volunteer Form: name, email, phone, city, availability, skills, motivation" /></section></main>;}
