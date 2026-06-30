import ContactForm from "@/components/forms/ContactForm";
import PageHero from "@/components/ui/PageHero";
export default function ResearchPartnerPage(){return <main><PageHero title="Research Partnership" breadcrumbs={[{label:"Home",href:"/"},{label:"Get Involved",href:"/get-involved"},{label:"Research"}]} /><section className="mx-auto max-w-3xl px-5 py-16 sm:px-8"><ContactForm title="Research Partnership Form" /></section></main>;}
