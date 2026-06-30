import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

export default function StudentsPage() {
  const links = [["Scholarships","/students/scholarships"],["Career Guidance","/students/career-guidance"],["Study Material","/students/study-material"],["Mentoring","/students/mentoring"],["Internship","/students/internship"],["Mental Wellness","/mental-health"]];
  return <main><PageHero title="Students Portal" breadcrumbs={[{label:"Home",href:"/"},{label:"Students"}]} /><section className="mx-auto grid max-w-7xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-3">{links.map(([l,h]) => <Link key={h} href={h} className="rounded-lg bg-white p-6 font-display text-xl font-black text-primary shadow-sm ring-1 ring-primary/10">{l}</Link>)}</section></main>;
}
