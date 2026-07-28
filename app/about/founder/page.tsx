import Image from "next/image";
import PageHero from "@/components/ui/PageHero";

export default function FounderPage() {
  return (
    <main>
      <PageHero title="Founder" breadcrumbs={[{label:"Home",href:"/"},{label:"About",href:"/about"},{label:"Founder"}]} />
      
      {/* Founder Section */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Image src="/Founder.jpg" alt="Naveen Kumar - Founder" width={720} height={760} className="rounded-lg object-cover w-full" />
        <div>
          <h2 className="font-display text-4xl font-black text-primary">Naveen Kumar</h2>
          <p className="mt-1 text-sm font-bold text-accent uppercase tracking-widest">Founder, Irodov Charitable Trust</p>
          <div className="mt-6 space-y-4 leading-8 text-muted text-[15px]">
            <p>Every journey has a beginning. Mine began in a small town called Shahabad in Hardoi district of Uttar Pradesh, where I was born into a humble family. Financial hardship was a constant part of our lives. There were days when even paying my school fees seemed impossible, and continuing my education appeared to be nothing more than a distant dream.</p>
            <p>Fortunately, destiny introduced me to people whose kindness changed the course of my life. Qualifying for the State Government Scholarship Examination in Class V marked an important turning point. The scholarship I received from Classes VI to VIII covered my essential educational expenses and reinforced my confidence.</p>
            <p>When I took admission to Adarsh Rashtriya Inter College in Class IX, the then Principal, Shri Radheshyam Dixit, recognized my academic performance and generously waived my school fees. His compassion ensured that poverty did not force me to abandon my education.</p>
            <p>Around that time, I came to know about Shri Omnivas Gupta Ji, a highly respected Mathematics teacher in Shahabad. Without the slightest hesitation, he welcomed me into his home and taught me with unmatched sincerity — sometimes as early as five o'clock in the morning under the dim light of a lantern. His selfless service left an indelible mark on my life.</p>
            <p>The strong foundation he built enabled me to pursue higher education. I completed my Post-Graduation in Physics from <strong>JNU New Delhi</strong> and later served as a PGT Physics teacher in Delhi and Gurgaon. Since 2007, I have been running <strong>Irodov Classes</strong> and <strong>Tiwari's Classes</strong> in Gurgaon, where countless students have fulfilled their dreams by securing admissions to IITs, qualifying NEET, and studying at prestigious universities worldwide.</p>
            <p>Inspired by the blessings of my parents, my teachers, and the ideals of my beloved Guruji, the thought of establishing a charitable trust took root in my heart. That dream became a reality when our Trust was registered on <strong>29 May 2026</strong>.</p>
            <p>The purpose of this Trust is simple yet profound: to ensure that no deserving child is denied education because of financial hardship. If this Trust succeeds in fulfilling even sixty percent of this vision, I shall consider my life's mission accomplished.</p>
          </div>
          <blockquote className="mt-8 border-l-4 border-accent pl-5 font-display text-2xl font-bold text-primary">
            "Every human life is sacred, every dream deserves encouragement, and every heart deserves hope."
          </blockquote>
          <p className="mt-6 font-bold text-primary">Naveen Kumar</p>
          <p className="text-muted">Founder, Irodov Charitable Trust</p>
        </div>
      </section>

      {/* Tribute Section */}
      <section className="bg-[#F5EFE0] px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-sm font-bold text-accent uppercase tracking-widest">A Humble Tribute</p>
            <h2 className="mt-3 font-display text-4xl font-black text-primary">In Honour of Our Inspiration</h2>
          </div>
          <div className="flex flex-col items-center gap-8 rounded-2xl bg-white p-10 shadow-sm ring-1 ring-[#E5D9C3] md:flex-row md:items-start">
            <div className="flex-shrink-0 text-center">
              <Image
                src="/Tribute.jpg"
                alt="Late Shri Omnivas Gupta Ji"
                width={200}
                height={240}
                className="rounded-xl object-cover shadow-md mx-auto"
              />
              <p className="mt-4 font-bold text-primary text-lg">Late Shri Omnivas Gupta Ji</p>
              <p className="text-sm text-muted">Mathematics Teacher</p>
              <p className="text-sm text-muted">Shahabad, Hardoi, U.P.</p>
            </div>
            <div className="flex-1">
              <div className="text-4xl text-accent mb-4">🕯️</div>
              <p className="leading-8 text-muted text-[15px]">
                The life of Late Shri Omnivas Gupta Ji exemplified the highest ideals of teaching — knowledge imparted with compassion, discipline enriched by humility, and service offered without expectation. His blessings shaped my destiny, and his immortal values continue to inspire every step of my journey and every mission I undertake.
              </p>
              <blockquote className="mt-6 border-l-4 border-accent pl-5 font-display text-xl font-bold text-primary italic">
                "He did not merely teach me formulas; he taught me the meaning of compassion, responsibility, and giving back to society."
              </blockquote>
              <p className="mt-4 text-sm font-bold text-accent">— Naveen Kumar, Founder</p>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-muted italic">
            This Trust is dedicated with deep reverence to Shri Omnivas Gupta Ji, whose selfless teaching continues to illuminate countless lives.
          </p>
        </div>
      </section>
    </main>
  );
}