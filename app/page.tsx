import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:28px_28px]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <h1 className="max-w-4xl font-display text-5xl font-black leading-tight sm:text-7xl">
            Empowering Lives Through Education, Health & Hope
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
            A national charitable institution advancing education, psychological wellness, healthcare, research, and social welfare.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/programs" className="rounded-md border border-white/50 px-6 py-3 text-center font-bold">
              Explore Programs
            </Link>
            <Link href="/donate" className="rounded-md bg-accent px-6 py-3 text-center font-black text-foreground">
              Donate Now
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid place-items-center">
            <div className="grid size-56 place-items-center rounded-full bg-gray-200 text-5xl font-black text-primary shadow-inner">
              FN
            </div>
          </div>
          <div className="self-center">
            <p className="text-sm font-black uppercase tracking-widest text-accent">Welcome from Founder</p>
            <blockquote className="mt-4 border-l-4 border-accent pl-5 font-display text-3xl font-bold leading-snug text-primary">
              &quot;IRODOV Charitable Trust exists to serve humanity with compassion, clarity, and disciplined action. We believe education, mental health, and social support can restore hope where it is needed most.&quot;
            </blockquote>
            <p className="mt-6 font-bold">Dr. [Founder Name]</p>
            <p className="text-muted">Founder & Chairman, IRODOV Charitable Trust</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          <article className="rounded-lg bg-primary p-8 text-white shadow-sm">
            <p className="text-4xl">Eye</p>
            <h2 className="mt-4 font-display text-3xl font-black">Vision</h2>
            <p className="mt-4 leading-7 text-white/85">
              To build an inclusive society where every individual has access to quality education, mental health support, and opportunities for holistic development.
            </p>
          </article>
          <article className="rounded-lg bg-accent p-8 text-white shadow-sm">
            <p className="text-4xl">Target</p>
            <h2 className="mt-4 font-display text-3xl font-black">Mission</h2>
            <p className="mt-4 leading-7 text-white/90">
              To serve humanity through education, psychological wellness, healthcare, research, and social welfare, with transparency, compassion, and excellence.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-black text-primary">Core Values</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10">
              <p className="text-3xl text-accent">Heart</p>
              <h3 className="mt-4 font-display text-xl font-black text-primary">Compassion</h3>
              <p className="mt-2 text-sm leading-6 text-muted">We serve every person with dignity, warmth, and care.</p>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10">
              <p className="text-3xl text-accent">Shield</p>
              <h3 className="mt-4 font-display text-xl font-black text-primary">Integrity</h3>
              <p className="mt-2 text-sm leading-6 text-muted">We uphold ethical action and responsible decision-making.</p>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10">
              <p className="text-3xl text-accent">Star</p>
              <h3 className="mt-4 font-display text-xl font-black text-primary">Excellence</h3>
              <p className="mt-2 text-sm leading-6 text-muted">We aim for quality in every program and partnership.</p>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10">
              <p className="text-3xl text-accent">Users</p>
              <h3 className="mt-4 font-display text-xl font-black text-primary">Inclusion</h3>
              <p className="mt-2 text-sm leading-6 text-muted">We design services for people across backgrounds and abilities.</p>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10">
              <p className="text-3xl text-accent">Lightbulb</p>
              <h3 className="mt-4 font-display text-xl font-black text-primary">Innovation</h3>
              <p className="mt-2 text-sm leading-6 text-muted">We use practical ideas and research to improve impact.</p>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10">
              <p className="text-3xl text-accent">Eye</p>
              <h3 className="mt-4 font-display text-xl font-black text-primary">Transparency</h3>
              <p className="mt-2 text-sm leading-6 text-muted">We document, review, and report our work openly.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-16 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-white/15 bg-white/5 p-6 text-center">
            <p className="font-display text-4xl font-black text-accent">10000+</p>
            <p className="mt-2 text-sm font-semibold text-white/80">Lives Impacted</p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-6 text-center">
            <p className="font-display text-4xl font-black text-accent">500+</p>
            <p className="mt-2 text-sm font-semibold text-white/80">Scholarships Awarded</p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-6 text-center">
            <p className="font-display text-4xl font-black text-accent">15</p>
            <p className="mt-2 text-sm font-semibold text-white/80">States Reached</p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-6 text-center">
            <p className="font-display text-4xl font-black text-accent">8</p>
            <p className="mt-2 text-sm font-semibold text-white/80">Years of Service</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-black text-primary">Current Projects</h2>
          <div className="mt-8 flex gap-5 overflow-x-auto pb-3">
            <article className="min-w-80 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10">
              <Image src="https://placehold.co/400x200/1A3C6E/FFFFFF/png?text=Rural+STEM+Labs" alt="" width={400} height={200} className="h-40 w-full object-cover" />
              <div className="p-5">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">Bihar</span>
                <h3 className="mt-4 font-display text-xl font-black">Rural STEM Learning Labs</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Hands-on science learning spaces for rural school students.</p>
                <div className="mt-4 h-2 rounded-full bg-primary/10"><div className="h-2 w-[72%] rounded-full bg-accent" /></div>
                <button className="mt-5 rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary">Learn More</button>
              </div>
            </article>
            <article className="min-w-80 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10">
              <Image src="https://placehold.co/400x200/1A3C6E/FFFFFF/png?text=Wellness+Helpline" alt="" width={400} height={200} className="h-40 w-full object-cover" />
              <div className="p-5">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">Delhi NCR</span>
                <h3 className="mt-4 font-display text-xl font-black">Mental Wellness Helpline</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Counselling and crisis support access for young people.</p>
                <div className="mt-4 h-2 rounded-full bg-primary/10"><div className="h-2 w-[80%] rounded-full bg-accent" /></div>
                <button className="mt-5 rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary">Learn More</button>
              </div>
            </article>
            <article className="min-w-80 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10">
              <Image src="https://placehold.co/400x200/1A3C6E/FFFFFF/png?text=Scholarships" alt="" width={400} height={200} className="h-40 w-full object-cover" />
              <div className="p-5">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">15 States</span>
                <h3 className="mt-4 font-display text-xl font-black">Scholarship Cohort 2024</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Need-based education aid for school and college learners.</p>
                <div className="mt-4 h-2 rounded-full bg-primary/10"><div className="h-2 w-[64%] rounded-full bg-accent" /></div>
                <button className="mt-5 rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary">Learn More</button>
              </div>
            </article>
            <article className="min-w-80 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10">
              <Image src="https://placehold.co/400x200/1A3C6E/FFFFFF/png?text=Health+Camps" alt="" width={400} height={200} className="h-40 w-full object-cover" />
              <div className="p-5">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">Uttar Pradesh</span>
                <h3 className="mt-4 font-display text-xl font-black">Community Health Camps</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Preventive healthcare outreach with referral support.</p>
                <div className="mt-4 h-2 rounded-full bg-primary/10"><div className="h-2 w-[68%] rounded-full bg-accent" /></div>
                <button className="mt-5 rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary">Learn More</button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-black text-primary">Upcoming Events</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-primary/10">
              <div className="flex items-start justify-between gap-4"><span className="rounded-md bg-accent px-3 py-2 text-center font-black text-foreground">12<span className="block text-xs">Jul</span></span><span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">Workshop</span></div>
              <h3 className="mt-5 font-display text-xl font-black">Student Wellness Workshop</h3>
              <p className="mt-2 text-sm text-muted">Delhi</p>
              <button className="mt-5 rounded-md bg-primary px-4 py-2 text-sm font-bold text-white">Register</button>
            </article>
            <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-primary/10">
              <div className="flex items-start justify-between gap-4"><span className="rounded-md bg-accent px-3 py-2 text-center font-black text-foreground">26<span className="block text-xs">Jul</span></span><span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">Medical Camp</span></div>
              <h3 className="mt-5 font-display text-xl font-black">Mobile Health Camp</h3>
              <p className="mt-2 text-sm text-muted">Lucknow</p>
              <button className="mt-5 rounded-md bg-primary px-4 py-2 text-sm font-bold text-white">Register</button>
            </article>
            <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-primary/10">
              <div className="flex items-start justify-between gap-4"><span className="rounded-md bg-accent px-3 py-2 text-center font-black text-foreground">18<span className="block text-xs">Aug</span></span><span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">Webinar</span></div>
              <h3 className="mt-5 font-display text-xl font-black">Scholarship Orientation</h3>
              <p className="mt-2 text-sm text-muted">Online</p>
              <button className="mt-5 rounded-md bg-primary px-4 py-2 text-sm font-bold text-white">Register</button>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-black text-primary">Latest News</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10">
              <Image src="https://placehold.co/400x240/1A3C6E/FFFFFF/png?text=Education+News" alt="" width={400} height={240} className="h-44 w-full object-cover" />
              <div className="p-5"><p className="text-xs font-bold text-muted">10 Jun 2026</p><h3 className="mt-3 font-display text-xl font-black">IRODOV opens annual scholarship applications</h3><p className="mt-3 text-sm leading-6 text-muted">Students across partner states can apply for education continuity support and mentoring.</p><Link href="/media" className="mt-4 inline-block text-sm font-bold text-primary">Read More</Link></div>
            </article>
            <article className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10">
              <Image src="https://placehold.co/400x240/1A3C6E/FFFFFF/png?text=Mental+Health+News" alt="" width={400} height={240} className="h-44 w-full object-cover" />
              <div className="p-5"><p className="text-xs font-bold text-muted">22 May 2026</p><h3 className="mt-3 font-display text-xl font-black">Helpline expands counselling hours for students</h3><p className="mt-3 text-sm leading-6 text-muted">The mental health team has extended access windows for urgent student support.</p><Link href="/media" className="mt-4 inline-block text-sm font-bold text-primary">Read More</Link></div>
            </article>
            <article className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10">
              <Image src="https://placehold.co/400x240/1A3C6E/FFFFFF/png?text=Research+News" alt="" width={400} height={240} className="h-44 w-full object-cover" />
              <div className="p-5"><p className="text-xs font-bold text-muted">30 Apr 2026</p><h3 className="mt-3 font-display text-xl font-black">Rural STEM pilot publishes first learning note</h3><p className="mt-3 text-sm leading-6 text-muted">Field observations from rural learning labs are now available to partners.</p><Link href="/media" className="mt-4 inline-block text-sm font-bold text-primary">Read More</Link></div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-primary px-5 py-16 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-4xl font-black">Make a Difference Today</h2>
            <p className="mt-4 text-white/80">Your donation is tax-exempt under Section 80G of the Income Tax Act</p>
            <div className="mt-8 rounded-lg bg-white p-6 text-foreground">
              <div className="flex flex-wrap gap-2 text-sm font-bold"><span className="rounded-md bg-accent px-3 py-2">One-time</span><span className="rounded-md bg-surface px-3 py-2 text-primary">Monthly</span><span className="rounded-md bg-surface px-3 py-2 text-primary">Sponsor a Cause</span></div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3"><button className="rounded-md border border-primary/15 px-4 py-3 font-bold text-primary">Rs. 500</button><button className="rounded-md border border-primary/15 px-4 py-3 font-bold text-primary">Rs. 1000</button><button className="rounded-md border border-primary/15 px-4 py-3 font-bold text-primary">Rs. 2500</button><button className="rounded-md border border-primary/15 px-4 py-3 font-bold text-primary">Rs. 5000</button><button className="rounded-md border border-primary/15 px-4 py-3 font-bold text-primary">Rs. 10000</button><input className="rounded-md border border-primary/15 px-4 py-3" placeholder="Custom" /></div>
              <select className="mt-4 w-full rounded-md border border-primary/15 px-4 py-3"><option>General Fund</option><option>Education</option><option>Mental Health</option><option>Healthcare</option><option>Social Welfare</option><option>Disaster Relief</option></select>
              <Link href="/donate" className="mt-4 block rounded-md bg-accent px-5 py-3 text-center font-black">Donate Now</Link>
            </div>
          </div>
          <aside className="self-center rounded-lg border border-white/15 bg-white/10 p-6">
            <h3 className="font-display text-2xl font-black">Your Rs. 1000 can...</h3>
            <ul className="mt-5 grid gap-3 text-white/85"><li>Provide study material to two students</li><li>Support one counselling session</li><li>Fund essential medicines at a health camp</li></ul>
          </aside>
        </div>
      </section>

      <section className="bg-accent px-5 py-14 text-foreground sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-4xl font-black">Join Our Mission</h2>
            <p className="mt-2 text-foreground/75">Volunteer, mentor, or partner with us to create lasting change</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/get-involved/volunteer" className="rounded-md border border-foreground px-5 py-3 text-center font-bold">Become a Volunteer</Link>
            <Link href="/get-involved/mentor" className="rounded-md bg-foreground px-5 py-3 text-center font-bold text-white">Become a Mentor</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
