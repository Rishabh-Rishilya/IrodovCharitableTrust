import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

const subnav = [
  ["About", "/about"],
  ["Founder", "/about/founder"],
  ["Trustees", "/about/trustees"],
  ["Advisory", "/about/advisory"],
  ["Governance", "/about/governance"],
  ["Annual Reports", "/about/annual-reports"],
];

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About IRODOV" subtitle="A national-level charitable institution built for transparent, multi-sector public service." breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]} />
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
        <div className="flex flex-wrap gap-3">
          {subnav.map(([label, href]) => <Link key={href} href={href} className="rounded-full bg-white px-4 py-2 text-sm font-bold text-primary shadow-sm ring-1 ring-primary/10">{label}</Link>)}
        </div>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-black text-primary">Why IRODOV</h2>
            <p className="mt-4 leading-7 text-muted">
              The name IRODOV represents disciplined learning, scientific curiosity, and a deep respect for human potential. The trust carries that spirit into education, mental wellness, research, and social welfare.
            </p>
            <blockquote className="mt-6 border-l-4 border-accent pl-5 font-display text-2xl font-bold text-primary">
              “A society rises when knowledge, care, and opportunity are shared without discrimination.”
            </blockquote>
          </div>
          <div>
            <h2 className="font-display text-3xl font-black text-primary">History Timeline</h2>
            <div className="mt-5 space-y-4">
              {["2018 - Foundation vision formed", "2020 - First education and relief programs", "2022 - National expansion begins", "2024 - Research and transparency portal launched", "2026 - Digital platform and helpline scale-up"].map((item) => <p key={item} className="border-l-4 border-accent bg-white p-4 shadow-sm">{item}</p>)}
            </div>
          </div>
        </div>
        <div className="mt-12 rounded-lg bg-surface p-6">
          <h2 className="font-display text-3xl font-black text-primary">Registration Details</h2>
          <table className="mt-6 w-full overflow-hidden rounded-lg bg-white text-sm shadow-sm">
            <tbody>{[["Registration No.", "ICT/2024/001"], ["PAN", "AAATI1234X"], ["12A", "Certified"], ["80G", "Certified"], ["CSR Eligibility", "Eligible"], ["Registered Office", "New Delhi, India"]].map(([k, v]) => <tr key={k} className="border-b border-gray-100"><td className="p-4 font-bold text-primary">{k}</td><td className="p-4 text-muted">{v}</td></tr>)}</tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
