"use client";

import { useEffect, useState } from "react";

const testimonials = [
  ["IRODOV helped me continue my studies when my family needed support the most.", "Anita", "Student, Bihar"],
  ["The counselling support gave my son confidence during a very difficult year.", "Ramesh", "Parent, Rajasthan"],
  ["Volunteering here feels structured, humane, and genuinely accountable.", "Neha", "Volunteer, Delhi"],
  ["Their health camp connected our village with doctors and follow-up care.", "Mohan", "Community Leader, UP"],
  ["The scholarship program came with mentoring, not just money.", "Fatima", "Student, Delhi"],
  ["IRODOV’s team listens first and then builds practical solutions.", "Kabir", "Partner, Jharkhand"],
];

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((value) => (value + 1) % testimonials.length), 4000);
    return () => clearInterval(id);
  }, [paused]);

  const visible = [0, 1, 2].map((offset) => testimonials[(index + offset) % testimonials.length]);

  return (
    <section className="bg-surface px-5 py-16 sm:px-8" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-4xl font-black text-primary">Testimonials</h2>
        <div className="mt-8 flex items-center gap-4">
          <button onClick={() => setIndex((index - 1 + testimonials.length) % testimonials.length)} className="hidden rounded-full bg-white px-3 py-2 font-black text-primary shadow md:block">‹</button>
          <div className="grid flex-1 gap-5 md:grid-cols-3">
            {visible.map(([quote, name, role]) => (
              <article key={name} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-border">
                <p className="text-5xl font-black leading-none text-primary/20">“</p>
                <p className="mt-2 text-sm leading-7 text-muted">{quote}</p>
                <p className="mt-4 text-accent">★★★★★</p>
                <h3 className="mt-3 font-display text-xl font-black text-primary">{name}</h3>
                <p className="text-sm font-semibold text-muted">{role}</p>
              </article>
            ))}
          </div>
          <button onClick={() => setIndex((index + 1) % testimonials.length)} className="hidden rounded-full bg-white px-3 py-2 font-black text-primary shadow md:block">›</button>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map(([, name], dot) => <button key={name} onClick={() => setIndex(dot)} className={`size-2 rounded-full ${dot === index ? "bg-accent" : "bg-primary/20"}`} aria-label={`Show testimonial ${dot + 1}`} />)}
        </div>
      </div>
    </section>
  );
}
