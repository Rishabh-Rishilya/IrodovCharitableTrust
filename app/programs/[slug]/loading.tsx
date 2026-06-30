export default function Loading() {
  return <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8"><div className="h-10 w-72 animate-pulse rounded bg-primary/10" /><div className="mt-8 grid gap-5 md:grid-cols-3">{[1,2,3].map((i) => <div key={i} className="h-44 animate-pulse rounded-lg bg-primary/10" />)}</div></div>;
}
