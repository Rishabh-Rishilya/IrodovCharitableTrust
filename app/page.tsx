"use client";

import Image from "next/image";
import Link from "next/link";
import NewsletterSignup from "@/components/layout/NewsletterSignup";
import VideoSection from "@/components/home/VideoSection";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { language } = useLanguage();
  const heroTitle = language === "en" ? "Empowering Lives Through Education, Health & Hope" : "शिक्षा, स्वास्थ्य और आशा के माध्यम से जीवन को सशक्त बनाना";
  const heroSubtitle =
    language === "en"
      ? "A national charitable institution advancing education, psychological wellness, healthcare, research, and social welfare."
      : "एक राष्ट्रीय दान संस्था जो शिक्षा, मनोवैज्ञानिक कल्याण, स्वास्थ्य देखभाल, अनुसंधान और सामाजिक कल्याण को आगे बढ़ा रही है।";
  const heroCta = language === "en" ? "Explore Programs" : "कार्यक्रम देखें";
  const heroDonate = language === "en" ? "Donate Now" : "अब दान करें";
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-primary text-white">
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_1px_1px,#fff_1px,transparent_0)] [background-size:28px_28px]" />
        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
          <h1 className="max-w-4xl font-display text-2xl font-black leading-tight sm:text-5xl lg:text-7xl">
            {heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#FFE1D2]">{heroSubtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/programs" className="rounded-md border border-white/50 px-6 py-3 text-center font-bold">
              {heroCta}
            </Link>
            <Link href="/donate" className="rounded-lg bg-accent px-6 py-3 text-center font-black text-white">
              {heroDonate}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid place-items-center">
            <div className="grid size-56 place-items-center rounded-full bg-surface-2 text-5xl font-black text-primary shadow-inner">
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
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-2">
          <article className="rounded-lg bg-primary p-8 text-white shadow-sm">
            <p className="text-4xl">Eye</p>
            <h2 className="mt-4 font-display text-3xl font-black">Vision</h2>
            <p className="mt-4 leading-7 text-[#FFE1D2]">
              To build an inclusive society where every individual has access to quality education, mental health support, and opportunities for holistic development.
            </p>
          </article>
          <article className="rounded-lg bg-accent p-8 text-white shadow-sm">
            <p className="text-4xl">Target</p>
            <h2 className="mt-4 font-display text-3xl font-black">Mission</h2>
            <p className="mt-4 leading-7 text-[#FFE1D2]">
              To serve humanity through education, psychological wellness, healthcare, research, and social welfare, with transparency, compassion, and excellence.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-black text-primary">Core Values</h2>
          <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-3">
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
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 lg:grid-cols-3">
          <div className="rounded-lg border border-white/15 bg-white/5 p-6 text-center">
            <p className="font-display text-4xl font-black text-accent">10000+</p>
            <p className="mt-2 text-sm font-semibold text-white">Lives Impacted</p>
            <p className="mt-2 text-xs text-white/70">Across 15 states since 2018</p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-6 text-center">
            <p className="font-display text-4xl font-black text-accent">500+</p>
            <p className="mt-2 text-sm font-semibold text-white">Scholarships</p>
            <p className="mt-2 text-xs text-white/70">Students supported through education</p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-6 text-center">
            <p className="font-display text-4xl font-black text-accent">15</p>
            <p className="mt-2 text-sm font-semibold text-white">States</p>
            <p className="mt-2 text-xs text-white/70">Active programs nationwide</p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-6 text-center">
            <p className="font-display text-4xl font-black text-accent">8</p>
            <p className="mt-2 text-sm font-semibold text-white">Years of Service</p>
            <p className="mt-2 text-xs text-white/70">Of dedicated service</p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-6 text-center">
            <p className="font-display text-4xl font-black text-accent">275+</p>
            <p className="mt-2 text-sm font-semibold text-white">Health Camps</p>
            <p className="mt-2 text-xs text-white/70">Free medical services delivered</p>
          </div>
          <div className="rounded-lg border border-white/15 bg-white/5 p-6 text-center">
            <p className="font-display text-4xl font-black text-accent">1200+</p>
            <p className="mt-2 text-sm font-semibold text-white">Volunteers</p>
            <p className="mt-2 text-xs text-white/70">Changemakers across India</p>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl text-center">
          <Link href="/publications" className="inline-block rounded-lg bg-accent px-5 py-3 font-black text-white">View Our Full Impact Report</Link>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-black text-primary">Current Projects</h2>
          <div className="mt-8 flex gap-5 overflow-x-auto pb-3">
            <article className="min-w-80 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10">
              <Image src="https://placehold.co/400x200/2D4B32/FFFFFF/png?text=Rural+STEM+Labs" alt="" width={400} height={200} className="h-40 w-full object-cover" />
              <div className="p-5">
                <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-primary">Bihar</span>
                <h3 className="mt-4 font-display text-xl font-black">Rural STEM Learning Labs</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Hands-on science learning spaces for rural school students.</p>
                <div className="mt-4 h-2 rounded-full bg-primary/10"><div className="h-2 w-[72%] rounded-full bg-accent" /></div>
                <button className="mt-5 rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary">Learn More</button>
              </div>
            </article>
            <article className="min-w-80 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10">
              <Image src="https://placehold.co/400x200/2D4B32/FFFFFF/png?text=Wellness+Helpline" alt="" width={400} height={200} className="h-40 w-full object-cover" />
              <div className="p-5">
                <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-primary">Delhi NCR</span>
                <h3 className="mt-4 font-display text-xl font-black">Mental Wellness Helpline</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Counselling and crisis support access for young people.</p>
                <div className="mt-4 h-2 rounded-full bg-primary/10"><div className="h-2 w-[80%] rounded-full bg-accent" /></div>
                <button className="mt-5 rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary">Learn More</button>
              </div>
            </article>
            <article className="min-w-80 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10">
              <Image src="https://placehold.co/400x200/2D4B32/FFFFFF/png?text=Scholarships" alt="" width={400} height={200} className="h-40 w-full object-cover" />
              <div className="p-5">
                <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-primary">15 States</span>
                <h3 className="mt-4 font-display text-xl font-black">Scholarship Cohort 2024</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Need-based education aid for school and college learners.</p>
                <div className="mt-4 h-2 rounded-full bg-primary/10"><div className="h-2 w-[64%] rounded-full bg-accent" /></div>
                <button className="mt-5 rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary">Learn More</button>
              </div>
            </article>
            <article className="min-w-80 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10">
              <Image src="https://placehold.co/400x200/2D4B32/FFFFFF/png?text=Health+Camps" alt="" width={400} height={200} className="h-40 w-full object-cover" />
              <div className="p-5">
                <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-primary">Uttar Pradesh</span>
                <h3 className="mt-4 font-display text-xl font-black">Community Health Camps</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Preventive healthcare outreach with referral support.</p>
                <div className="mt-4 h-2 rounded-full bg-primary/10"><div className="h-2 w-[68%] rounded-full bg-accent" /></div>
                <button className="mt-5 rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary">Learn More</button>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-surface-2 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-4xl font-black text-primary">Our Campaigns</h2>
            <Link href="/donate" className="font-bold text-accent">View All</Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-lg bg-accent p-6 text-white transition hover:-translate-y-1"><p className="text-3xl">Book</p><h3 className="mt-4 font-display text-2xl font-black">Shiksha Ke Liye</h3><p className="mt-2">Support Education</p><Link href="/donate" className="mt-5 inline-block rounded-lg bg-white px-4 py-2 font-bold text-primary">Donate for this Campaign</Link></article>
            <article className="rounded-lg bg-primary p-6 text-white transition hover:-translate-y-1"><p className="text-3xl">Heart</p><h3 className="mt-4 font-display text-2xl font-black">Swasthya Pehle</h3><p className="mt-2">Healthcare for All</p><Link href="/donate" className="mt-5 inline-block rounded-lg bg-white px-4 py-2 font-bold text-primary">Donate for this Campaign</Link></article>
            <article className="rounded-lg bg-[#4A6B52] p-6 text-white transition hover:-translate-y-1"><p className="text-3xl">Smile</p><h3 className="mt-4 font-display text-2xl font-black">Muskaan</h3><p className="mt-2">Mental Health Awareness</p><Link href="/donate" className="mt-5 inline-block rounded-lg bg-white px-4 py-2 font-bold text-primary">Donate for this Campaign</Link></article>
            <article className="rounded-lg bg-[#e55a30] p-6 text-white transition hover:-translate-y-1"><p className="text-3xl">Tools</p><h3 className="mt-4 font-display text-2xl font-black">Aajeevika</h3><p className="mt-2">Skill & Livelihood</p><Link href="/donate" className="mt-5 inline-block rounded-lg bg-white px-4 py-2 font-bold text-primary">Donate for this Campaign</Link></article>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-4xl font-black text-primary">Stories of Change</h2>
            <Link href="/media/stories" className="font-bold text-accent">View All Stories</Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {["Riya", "Mohan", "Fatima"].map((name, index) => (
              <article key={name} className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10">
                <Image src={`https://placehold.co/400x300/2D4B32/FFFFFF/png?text=${name}`} alt="" width={400} height={300} className="h-56 w-full object-cover" />
                <div className="p-5"><h3 className="font-display text-2xl font-black text-primary">{name}</h3><p className="mt-1 text-sm font-bold text-muted">Location: {["Rajasthan", "Bihar", "Delhi"][index]}</p><p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">With timely guidance, learning resources, and emotional support from IRODOV, {name} found a path forward and renewed confidence for the future.</p><Link href="/media/stories" className="mt-4 inline-block font-bold text-accent">Read Full Story</Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <VideoSection />

      <section className="bg-surface px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-black text-primary">Upcoming Events</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-primary/10">
              <div className="flex items-start justify-between gap-4"><span className="rounded-lg bg-accent px-3 py-2 text-center font-black text-white">12<span className="block text-xs">Jul</span></span><span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-primary">Workshop</span></div>
              <h3 className="mt-5 font-display text-xl font-black">Student Wellness Workshop</h3>
              <p className="mt-2 text-sm text-muted">Delhi</p>
              <button className="mt-5 rounded-md bg-accent px-4 py-2 text-sm font-bold text-white">Register</button>
            </article>
            <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-primary/10">
              <div className="flex items-start justify-between gap-4"><span className="rounded-lg bg-accent px-3 py-2 text-center font-black text-white">26<span className="block text-xs">Jul</span></span><span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-primary">Medical Camp</span></div>
              <h3 className="mt-5 font-display text-xl font-black">Mobile Health Camp</h3>
              <p className="mt-2 text-sm text-muted">Lucknow</p>
              <button className="mt-5 rounded-md bg-accent px-4 py-2 text-sm font-bold text-white">Register</button>
            </article>
            <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-primary/10">
              <div className="flex items-start justify-between gap-4"><span className="rounded-lg bg-accent px-3 py-2 text-center font-black text-white">18<span className="block text-xs">Aug</span></span><span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-primary">Webinar</span></div>
              <h3 className="mt-5 font-display text-xl font-black">Scholarship Orientation</h3>
              <p className="mt-2 text-sm text-muted">Online</p>
              <button className="mt-5 rounded-md bg-accent px-4 py-2 text-sm font-bold text-white">Register</button>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-black text-primary">Latest News</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10">
              <Image src="https://placehold.co/400x240/2D4B32/FFFFFF/png?text=Education+News" alt="" width={400} height={240} className="h-44 w-full object-cover" />
              <div className="p-5"><p className="text-xs font-bold text-muted">10 Jun 2026</p><h3 className="mt-3 font-display text-xl font-black">IRODOV opens annual scholarship applications</h3><p className="mt-3 text-sm leading-6 text-muted">Students across partner states can apply for education continuity support and mentoring.</p><Link href="/media" className="mt-4 inline-block text-sm font-bold text-primary">Read More</Link></div>
            </article>
            <article className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10">
              <Image src="https://placehold.co/400x240/2D4B32/FFFFFF/png?text=Mental+Health+News" alt="" width={400} height={240} className="h-44 w-full object-cover" />
              <div className="p-5"><p className="text-xs font-bold text-muted">22 May 2026</p><h3 className="mt-3 font-display text-xl font-black">Helpline expands counselling hours for students</h3><p className="mt-3 text-sm leading-6 text-muted">The mental health team has extended access windows for urgent student support.</p><Link href="/media" className="mt-4 inline-block text-sm font-bold text-primary">Read More</Link></div>
            </article>
            <article className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-primary/10">
              <Image src="https://placehold.co/400x240/2D4B32/FFFFFF/png?text=Research+News" alt="" width={400} height={240} className="h-44 w-full object-cover" />
              <div className="p-5"><p className="text-xs font-bold text-muted">30 Apr 2026</p><h3 className="mt-3 font-display text-xl font-black">Rural STEM pilot publishes first learning note</h3><p className="mt-3 text-sm leading-6 text-muted">Field observations from rural learning labs are now available to partners.</p><Link href="/media" className="mt-4 inline-block text-sm font-bold text-primary">Read More</Link></div>
            </article>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <section className="bg-surface px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-widest text-accent">Supplementing Government of India Initiatives</p>
          <h2 className="mt-3 font-display text-4xl font-black text-primary">Aligned with National Missions</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10"><p className="text-3xl">Education</p><h3 className="mt-4 font-display text-xl font-black text-primary">Education</h3><ul className="mt-3 grid gap-2 text-sm text-muted"><li>Sarva Shiksha Abhiyan</li><li>NEP 2020</li><li>Digital India</li><li>Beti Bachao Beti Padhao</li></ul></article>
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10"><p className="text-3xl">Health</p><h3 className="mt-4 font-display text-xl font-black text-primary">Health</h3><ul className="mt-3 grid gap-2 text-sm text-muted"><li>Ayushman Bharat</li><li>National Rural Health Mission</li><li>Universal Health Coverage</li></ul></article>
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10"><p className="text-3xl">Skills</p><h3 className="mt-4 font-display text-xl font-black text-primary">Skill Dev</h3><ul className="mt-3 grid gap-2 text-sm text-muted"><li>Skill India Mission</li><li>PMKVY</li><li>Startup India</li></ul></article>
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10"><p className="text-3xl">Social</p><h3 className="mt-4 font-display text-xl font-black text-primary">Social</h3><ul className="mt-3 grid gap-2 text-sm text-muted"><li>MGNREGA</li><li>PM Awas Yojana</li><li>Swachh Bharat Mission</li></ul></article>
          </div>
        </div>
      </section>

      <NewsletterSignup />

      <section className="bg-primary px-5 py-16 text-white sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-4xl font-black">Make a Difference Today</h2>
            <p className="mt-4 text-[#FFE1D2]">Your donation is tax-exempt under Section 80G of the Income Tax Act</p>
            <div className="mt-8 rounded-lg bg-white p-6 text-foreground">
              <div className="flex flex-wrap gap-2 text-sm font-bold"><span className="rounded-lg bg-accent px-3 py-2 text-white">One-time</span><span className="rounded-md bg-surface px-3 py-2 text-primary">Monthly</span><span className="rounded-md bg-surface px-3 py-2 text-primary">Sponsor a Cause</span></div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3"><button className="rounded-md border border-primary/15 px-4 py-3 font-bold text-primary">Rs. 500</button><button className="rounded-md border border-primary/15 px-4 py-3 font-bold text-primary">Rs. 1000</button><button className="rounded-md border border-primary/15 px-4 py-3 font-bold text-primary">Rs. 2500</button><button className="rounded-md border border-primary/15 px-4 py-3 font-bold text-primary">Rs. 5000</button><button className="rounded-md border border-primary/15 px-4 py-3 font-bold text-primary">Rs. 10000</button><input className="rounded-md border border-primary/15 px-4 py-3" placeholder="Custom" /></div>
              <select className="mt-4 w-full rounded-md border border-primary/15 px-4 py-3"><option>General Fund</option><option>Education</option><option>Mental Health</option><option>Healthcare</option><option>Social Welfare</option><option>Disaster Relief</option></select>
              <Link href="/donate" className="mt-4 block rounded-lg bg-accent px-5 py-3 text-center font-black">Donate Now</Link>
            </div>
          </div>
          <aside className="self-center rounded-lg border border-white/15 bg-white/10 p-6">
            <h3 className="font-display text-2xl font-black">Your Rs. 1000 can...</h3>
            <ul className="mt-5 grid gap-3 text-[#FFE1D2]"><li>Provide study material to two students</li><li>Support one counselling session</li><li>Fund essential medicines at a health camp</li></ul>
          </aside>
        </div>
      </section>

      <section className="bg-accent px-5 py-14 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-4xl font-black">Join Our Mission</h2>
            <p className="mt-2 text-white/85">Volunteer, mentor, or partner with us to create lasting change</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/get-involved/volunteer" className="rounded-md bg-white px-5 py-3 text-center font-bold">Become a Volunteer</Link>
            <Link href="/get-involved/mentor" className="rounded-md border border-white px-5 py-3 text-center font-bold text-white">Become a Mentor</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
