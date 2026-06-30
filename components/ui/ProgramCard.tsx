import Link from "next/link";

export default function ProgramCard({ title, desc, href, icon = "◆" }: { title: string; desc: string; href: string; icon?: string }) {
  return (
    <article className="flex h-full flex-col rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10 transition hover:-translate-y-1 hover:shadow-md">
      <span className="grid size-12 place-items-center rounded-lg bg-accent/15 text-xl text-primary">{icon}</span>
      <h3 className="mt-5 font-display text-xl font-black text-foreground">{title}</h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">{desc}</p>
      <Link href={href} className="mt-5 text-sm font-bold text-primary hover:text-accent">Learn More</Link>
    </article>
  );
}
