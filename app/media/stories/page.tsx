import Image from "next/image";
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
          <article key={name} className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10">
            <Image src={`https://placehold.co/400x300/2D4B32/FFFFFF/png?text=${name}`} alt="" width={400} height={300} className="h-56 w-full object-cover" />
            <div className="p-5">
              <div className="flex items-center justify-between gap-3 text-xs font-bold">
                <span className="rounded-full bg-surface-2 px-3 py-1 text-accent">{category}</span>
                <span className="text-muted">{date}</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-black text-primary">{name}</h2>
              <p className="mt-1 text-sm font-bold text-muted">⌖ {location}</p>
              <p className="mt-4 text-sm leading-7 text-muted">
                Through IRODOV support, {name} found timely guidance, practical resources, and renewed confidence. This placeholder story describes a 5-6 line journey of challenge, support, and measurable change in education, health, or wellbeing.
              </p>
              <button className="mt-5 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-white">Read More</button>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
