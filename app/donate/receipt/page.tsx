"use client";

export default function ReceiptPage() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-12 sm:px-8">
      <div className="flex items-center justify-between gap-4">
        <h1 className="font-display text-3xl font-black text-primary">Donation Receipt</h1>
        <button onClick={() => window.print()} className="rounded-lg bg-accent px-4 py-2 font-black text-white">
          Print Receipt
        </button>
      </div>
      <div className="mt-8 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-border print:shadow-none">
        <table className="w-full text-sm">
          <tbody>
            {[
              ["Receipt No.", "IRT-2026-0001"],
              ["Donor", "Sample Donor"],
              ["Amount", "₹2,500"],
              ["Purpose", "Education Support"],
              ["Date", "10 July 2026"],
              ["Payment Mode", "Online"],
            ].map(([key, value]) => (
              <tr key={key} className="border-b border-border">
                <td className="p-4 font-bold text-primary">{key}</td>
                <td className="p-4 text-muted">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
