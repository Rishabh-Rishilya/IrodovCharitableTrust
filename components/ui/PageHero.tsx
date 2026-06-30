import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageHero({ title, subtitle, breadcrumbs }: { title: string; subtitle?: string; breadcrumbs: Crumb[] }) {
  return (
    <section className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <nav className="mb-5 flex flex-wrap gap-2 text-sm text-white/75">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.label} className="flex items-center gap-2">
              {crumb.href ? <Link href={crumb.href} className="hover:text-accent">{crumb.label}</Link> : crumb.label}
              {index < breadcrumbs.length - 1 && <span>/</span>}
            </span>
          ))}
        </nav>
        <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">{subtitle}</p>}
      </div>
    </section>
  );
}
