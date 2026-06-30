import PageHero from "@/components/ui/PageHero";
import PDFDownloadRow from "@/components/ui/PDFDownloadRow";

export default function AnnualReportsPage() {
  return <main><PageHero title="Annual Reports" breadcrumbs={[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Annual Reports"}]} /><section className="mx-auto grid max-w-4xl gap-4 px-5 py-16 sm:px-8">{["2024","2023","2022","2021","2020"].map((year) => <PDFDownloadRow key={year} title={`Annual Report ${year}`} year={year} />)}</section></main>;
}
