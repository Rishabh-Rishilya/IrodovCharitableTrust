import ContactForm from "@/components/forms/ContactForm";
import PageHero from "@/components/ui/PageHero";
export default function CampusAmbassadorPage(){return <main><PageHero title="Campus Ambassador" breadcrumbs={[{label:"Home",href:"/"},{label:"Get Involved",href:"/get-involved"},{label:"Campus Ambassador"}]} /><section className="mx-auto max-w-3xl px-5 py-16 sm:px-8"><ContactForm title="Campus Form: college name, city, year, social media handles" /></section></main>;}
