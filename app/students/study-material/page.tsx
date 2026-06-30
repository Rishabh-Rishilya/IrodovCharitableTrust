import PDFDownloadRow from "@/components/ui/PDFDownloadRow";
import PageHero from "@/components/ui/PageHero";

export default function StudyMaterialPage() {
  return <main><PageHero title="Study Material" breadcrumbs={[{label:"Home",href:"/"},{label:"Students",href:"/students"},{label:"Study Material"}]} /><section className="mx-auto max-w-5xl px-5 py-16 sm:px-8"><select className="mb-6 rounded-md border px-4 py-3"><option>Filter by Subject</option><option>Physics</option><option>Maths</option></select><div className="grid gap-3">{["Physics Notes","Maths Practice","Chemistry Handbook","Career Guide"].map((x) => <PDFDownloadRow key={x} title={x} year="PDF" />)}</div></section></main>;
}
