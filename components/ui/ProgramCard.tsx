import Link from "next/link";

export default function ProgramCard({ title, desc, href, icon }: { title: string; desc: string; href: string; icon?: React.ReactNode }) {
  return (
    <article className="flex h-full flex-col rounded-lg bg-white p-6 shadow-sm ring-1 ring-border transition hover:-translate-y-1 hover:shadow-md">
      <span className="grid size-12 place-items-center rounded-lg bg-accent/15 text-accent" aria-hidden="true">
        {icon ?? (
          <svg viewBox="0 0 24 24" className="size-6 fill-current">
            <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3zm0 2.3L6 8v8l6 3.4 6-3.4V8l-6-2.7z" />
          </svg>
        )}
      </span>
      <h3 className="mt-5 font-display text-xl font-black text-foreground">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{desc}</p>
      <Link href={href} className="mt-5 text-sm font-bold text-primary hover:text-accent">
        Learn More
      </Link>
    </article>
  );
}
