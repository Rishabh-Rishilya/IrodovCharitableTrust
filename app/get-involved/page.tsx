import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export default function GetInvolvedPage() {
  const roles = [["Volunteer","/get-involved/volunteer"],["Mentor","/get-involved/mentor"],["Donor","/donate"],["Corporate Partner","/get-involved/corporate"],["Research Partner","/get-involved/research"],["Campus Ambassador","/get-involved/campus-ambassador"]];
  return <main><PageHero title="Get Involved" breadcrumbs={[{label:"Home",href:"/"},{label:"Get Involved"}]} /><section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-3">{roles.map(([r,h]) => <Link key={r} href={h} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-border"><h2 className="font-display text-xl font-black text-primary">{r}</h2><p className="mt-3 text-sm text-muted">Join IRODOV as a {r.toLowerCase()} and support national charitable work.</p></Link>)}</section></main>;
}
