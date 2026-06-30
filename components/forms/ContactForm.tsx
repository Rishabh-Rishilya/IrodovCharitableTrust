export default function ContactForm({ title = "Send an Inquiry" }: { title?: string }) {
  return (
    <form className="grid gap-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10">
      <h2 className="font-display text-2xl font-black text-primary">{title}</h2>
      <input className="rounded-md border border-primary/15 px-4 py-3" placeholder="Full Name" />
      <input className="rounded-md border border-primary/15 px-4 py-3" placeholder="Email" />
      <input className="rounded-md border border-primary/15 px-4 py-3" placeholder="Phone or Subject" />
      <textarea className="min-h-32 rounded-md border border-primary/15 px-4 py-3" placeholder="Message" />
      <button type="button" className="rounded-md bg-accent px-5 py-3 font-black text-foreground">Submit</button>
    </form>
  );
}
