import Image from "next/image";
import { placeholder } from "@/lib/data";

export default function TeamCard({ name, role, bio }: { name: string; role: string; bio: string }) {
  return (
    <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-primary/10">
      <Image src={placeholder(name, "480x360")} alt={name} width={480} height={360} className="h-52 w-full rounded-md object-cover" />
      <h3 className="mt-5 font-display text-xl font-black">{name}</h3>
      <p className="mt-1 text-sm font-bold text-primary">{role}</p>
      <p className="mt-3 text-sm leading-6 text-muted">{bio}</p>
    </article>
  );
}
