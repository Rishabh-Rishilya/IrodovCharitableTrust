import Image from "next/image";
import PageHero from "@/components/ui/PageHero";

export default function TrusteesPage() {
  return (
    <main>
      <PageHero title="Board of Trustees" subtitle="The trustees guide IRODOV's mission, governance, and public accountability." breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Board of Trustees" }]} />
      <section className="mx-auto grid max-w-4xl gap-8 px-5 py-16 sm:px-8 md:grid-cols-2">

        {/* Trustee 1 - Founder */}
        <article className="rounded-lg bg-white p-8 text-center shadow-sm ring-1 ring-border">
          <Image
            src="/Founder.jpg"
            alt="Navin Kumar"
            width={120}
            height={120}
            className="mx-auto h-40 w-32 rounded-xl object-cover shadow-md object-top"
          />
          <h2 className="mt-5 font-display text-xl font-black text-primary">Navin Kumar</h2>
          <p className="mt-1 text-sm font-bold text-accent">Founder & Managing Trustee</p>
          <ul className="mt-4 space-y-1 text-sm text-[#3D4451]">
            <li>M.Sc Physics JNU, B.Ed.</li>
            <li>Gold Medalist — Society for Perfection</li>
          </ul>
          <a href="/about/founder" className="mt-5 inline-block text-sm font-bold text-primary hover:text-accent">
            View Full Profile →
          </a>
        </article>

        {/* Trustee 2 - To be announced */}
        <article className="rounded-lg bg-white p-8 text-center shadow-sm ring-1 ring-border">
          <Image
            src="/Trustee2.jpeg"
            alt="Maneesh Bajpai"
            width={120}
            height={120}
            className="mx-auto h-40 w-32 rounded-xl object-cover object-top shadow-md"
          />
          <h2 className="mt-5 font-display text-xl font-black text-primary">Maneesh Bajpai</h2>
          <p className="mt-1 text-sm font-bold text-accent">Board Trustee</p>
          <ul className="mt-4 space-y-1 text-sm text-muted">
            <li>M.A. Political Science</li>
            <li>Kanpur University</li>
          </ul>
        </article>

      </section>
    </main>
  );
}
