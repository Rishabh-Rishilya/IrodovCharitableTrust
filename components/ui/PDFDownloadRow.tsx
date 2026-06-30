export default function PDFDownloadRow({ title, year, type = "PDF" }: { title: string; year: string; type?: string }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 shadow-sm ring-1 ring-primary/10 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="font-bold text-foreground">▣ {title}</p>
        <p className="mt-1 text-sm text-muted">{year} • {type}</p>
      </div>
      <button className="rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary">Download</button>
    </div>
  );
}
