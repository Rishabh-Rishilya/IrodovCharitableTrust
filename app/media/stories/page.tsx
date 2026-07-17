import Link from "next/link";
import PageHero from "@/components/ui/PageHero";

const stories = [
  ["Riya", "Rajasthan", "Education", "15 Jun 2026"],
  ["Mohan", "Bihar", "Healthcare", "02 Jun 2026"],
  ["Fatima", "Delhi", "Mental Health", "22 May 2026"],
  ["Aarav", "Uttar Pradesh", "Education", "11 May 2026"],
  ["Sana", "Madhya Pradesh", "Healthcare", "03 May 2026"],
  ["Kabir", "Jharkhand", "Mental Health", "24 Apr 2026"],
];

export default function StoriesPage() {
  return (
    <main>
      <PageHero title="Stories of Change" subtitle="Lives touched through education, wellness, healthcare, and community care." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Media", href: "/media" }, { label: "Stories of Change" }]} />
      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-3">
        {stories.map(([name, location, category, date]) => (
          <article key={name} className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-border">
            <div className="h-48 bg-white flex items-center justify-center border-b border-[#E8E8E0]">
              <span className="text-5xl font-bold text-[#1E5FA8]">{name}</span>
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-3 text-xs font-bold">
                <span className="rounded-full bg-[#FFF8F0] border border-[#FF6B35] px-2 py-1 text-xs text-[#FF6B35]">{category}</span>
                <span className="text-[#666666] text-xs">{date}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-black text-primary">{name}</h2>
              <p className="mt-1 text-[#666666] text-sm">{location}</p>
              <p className="mt-4 text-[#2D2D2D] text-sm leading-relaxed">
                Through IRODOV support, {name} found timely guidance, practical resources, and renewed confidence. This placeholder story describes a 5-6 line journey of challenge, support, and measurable change in education, health, or wellbeing.
              </p>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
