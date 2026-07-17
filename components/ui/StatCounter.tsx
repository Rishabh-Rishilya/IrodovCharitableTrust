"use client";

import { useEffect, useState } from "react";

export default function StatCounter({ value, label }: { value: number; label: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let frame = 0;
    const total = 45;
    const tick = () => {
      frame += 1;
      setCount(Math.round((value * frame) / total));
      if (frame < total) requestAnimationFrame(tick);
    };
    tick();
  }, [value]);

  return (
    <div className="rounded-lg bg-white p-6 text-center shadow-sm ring-1 ring-border">
      <p className="font-display text-4xl font-black text-primary">{count.toLocaleString()}+</p>
      <p className="mt-2 text-sm font-semibold text-muted">{label}</p>
    </div>
  );
}
