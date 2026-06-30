import ContactForm from "@/components/forms/ContactForm";
import PageHero from "@/components/ui/PageHero";

export default function ContactPage() {
  return <main><PageHero title="Contact" breadcrumbs={[{label:"Home",href:"/"},{label:"Contact"}]} /><section className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-2"><ContactForm title="Contact Form" /><div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10"><h2 className="font-display text-2xl font-black text-primary">IRODOV Charitable Trust</h2><p className="mt-4 leading-7 text-muted">Registered Office: New Delhi, India<br />Phone: 1800-XXX-XXXX<br />Email: contact@irodovtrust.org<br />Working Hours: Mon-Sat, 10 AM - 6 PM</p><iframe className="mt-6 h-72 w-full rounded-lg border-0" src="https://maps.google.com/maps?q=New%20Delhi%20India&t=&z=11&ie=UTF8&iwloc=&output=embed" title="IRODOV Delhi address map" /></div></section></main>;
}
