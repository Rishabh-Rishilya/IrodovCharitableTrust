import Image from "next/image";
import { placeholder } from "@/lib/data";

export default function NewsCard({ date, title }: { date: string; title: string }) {
  return (
    <article className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-border">
      <Image src={placeholder(title, "700x420")} alt="" width={700} height={420} className="h-44 w-full object-cover" />
      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-muted">{date}</p>
        <h3 className="mt-3 font-display text-xl font-black">{title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">Placeholder update from IRODOV programs, partnerships, and field impact.</p>
        <button className="mt-4 text-sm font-bold text-primary">Read More</button>
      </div>
    </article>
  );
}
