import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-4xl flex-col items-center justify-center px-5 py-20 text-center sm:px-8">
      <p className="text-sm font-black uppercase tracking-widest text-accent">404</p>
      <h1 className="mt-4 font-display text-4xl font-black text-primary sm:text-5xl">Page not found</h1>
      <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
        The page you are looking for does not exist or has moved.
      </p>
      <Link href="/" className="mt-8 rounded-lg bg-accent px-5 py-3 font-black text-white">
        Return Home
      </Link>
    </main>
  );
}
