import Link from "next/link";

export default function EventCard({ date, title, location, type = "Event" }: { date: string; title: string; location: string; type?: string }) {
  return (
    <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-border">
      <div className="flex items-start justify-between gap-4">
        <span className="rounded-md bg-accent px-3 py-2 text-center text-sm font-semibold text-white">{date}</span>
        <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent">{type}</span>
      </div>
      <h3 className="mt-5 font-display text-xl font-black">{title}</h3>
      <p className="mt-2 text-sm text-muted">{location}</p>
      <Link href="/contact" className="mt-5 inline-block rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white!">
        Register
      </Link>
    </article>
  );
}
