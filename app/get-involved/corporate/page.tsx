import ContactForm from "@/components/forms/ContactForm";
import PageHero from "@/components/ui/PageHero";
export default function CorporatePage(){return <main><PageHero title="Corporate Partnership" subtitle="CSR eligible programs, impact reporting, and co-designed community initiatives." breadcrumbs={[{label:"Home",href:"/"},{label:"Get Involved",href:"/get-involved"},{label:"Corporate"}]} /><section className="mx-auto max-w-3xl px-5 py-16 sm:px-8"><ContactForm title="Partnership Inquiry Form" /></section></main>;}
