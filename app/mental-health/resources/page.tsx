import NewsCard from "@/components/ui/NewsCard";
import PDFDownloadRow from "@/components/ui/PDFDownloadRow";
import PageHero from "@/components/ui/PageHero";

export default function ResourcesPage() {
  return <main><PageHero title="Mental Health Resources" breadcrumbs={[{label:"Home",href:"/"},{label:"Mental Health",href:"/mental-health"},{label:"Resources"}]} /><section className="mx-auto max-w-7xl px-5 py-16 sm:px-8"><div className="grid gap-5 md:grid-cols-3">{["Managing exam stress","When to seek help","Supporting a friend"].map((t) => <NewsCard key={t} title={t} date="Resource" />)}</div><div className="mt-10 grid gap-3">{["Wellness Toolkit","Crisis Safety Plan","Student Self-Care Guide"].map((t) => <PDFDownloadRow key={t} title={t} year="Download" />)}</div></section></main>;
}
