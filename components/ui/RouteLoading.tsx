import Skeleton from "@/components/ui/Skeleton";

export default function RouteLoading() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-12 sm:px-8">
      <Skeleton className="h-14 w-64" />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Skeleton className="h-56 w-full" />
        <Skeleton className="h-56 w-full" />
      </div>
      <div className="mt-8 grid gap-5 lg:grid-cols-3">
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    </main>
  );
}
