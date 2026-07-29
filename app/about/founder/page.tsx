import Image from "next/image";
import PageHero from "@/components/ui/PageHero";

export default function FounderPage() {
  return (
    <main>
      <PageHero title="Founder" breadcrumbs={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Founder" }]} />

      {/* Founder Section */}
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Image src="/Founder.jpg" alt="Navin Kumar - Founder" width={720} height={760} className="rounded-lg object-cover w-full" />
        <div>
          <h2 className="font-display text-4xl font-black text-primary">Navin Kumar</h2>
          <p className="mt-1 text-sm font-bold text-accent uppercase tracking-widest">Founder, Irodov Charitable Trust</p>
          <div className="mt-6 space-y-4 leading-8 text-[#1a1a1a] text-[15px]">
            <p>Every journey has a beginning. Mine began in a small town called Shahabad in Hardoi district of Uttar Pradesh, where I was born into a humble family. Financial hardship was a constant part of our lives. There were days when even paying my school fees which were nominal seemed impossible, and continuing my education appeared to be nothing more than a distant dream.</p>
            <p>Fortunately, destiny introduced me to people whose kindness changed the course of my life.
              Qualifying for the State Government Scholarship Examination in Class V marked an important turning point in my academic life. The scholarship, which I received from Classes VI to VIII, covered my essential educational expenses, including books, notebooks, and the nominal monthly school fees. Beyond financial support, it reinforced my confidence and strengthened my commitment to academic excellence.  Later, when I took admission to Adarsh Rashtriya Inter Collegein IX class , the then Principal, Shri Radheshyam Dixit, recognized my academic performance and generously waived my school fees. His compassion ensured that poverty did not force me to abandon my education.</p>
            <p>To support my family and meet our daily expenses, I began teaching young children up to Class V while I was still a student myself. Those early experiences taught me the dignity of hard work and the value of education.</p>
            <p>Around that time, I came to know about Shri Omnivas Gupta Ji, a highly respected Mathematics teacher in Shahabad. More than being an exceptional teacher, he was an extraordinary human being. I approached him with a simple request—to teach me Mathematics—but I also confessed that I had no money to pay his fees.</p>
            <p>Without the slightest hesitation, he welcomed me into his home and taught me with unmatched sincerity. I still remember those early mornings, sometimes as early as five o'clock, when he would teach me under the dim light of a lantern. While most people were enjoying their sleep, Guruji devoted his precious time to shaping the future of a student who could offer him nothing in return.</p>
            <p>His selfless service, discipline, and unwavering dedication left an indelible mark on my life. It was through him that I discovered not only the beauty of Mathematics but also the nobility of the teaching profession. He did not merely teach me formulas; he taught me the meaning of compassion, responsibility, and giving back to society.</p>
            <p>The strong foundation he built enabled me to pursue higher education, and eventually I completed my Post-Graduation in Physics from one of the most prestigious university JNU New Delhi. I later served for several years as a PGT Physics teacher in Delhi and Gurgaon. Since 2007, I have been running <strong>Irodov Classes</strong> and <strong>Tiwari's Classes</strong> in Gurgaon, where countless students have fulfilled their dreams by securing admissions to IITs, qualifying NEET, and studying at prestigious universities in the USA, Europe, and Australia.</p>
            <p>As I look back on my journey, I realize that whatever I have achieved has been possible because of the blessings of my parents, my teachers, and above all, the grace of God.
              Inspired by these blessings and by the ideals of my beloved Guruji, Shri Omnivas Gupta Ji, the thought of establishing a charitable trust took root in my heart. That dream became a reality when our Trust was registered on 29 May 2026.</p>
            <p>The purpose of this Trust is simple yet profound: to ensure that no deserving child is denied education because of financial hardship. Through this initiative, we aspire to support underprivileged students from villages, small towns, and economically weaker sections of society by providing educational opportunities, guidance, mentorship, and hope.</p>
            <p>I know from personal experience how one helping hand can transform an entire life. If this Trust succeeds in fulfilling even sixty percent of this vision, I shall consider my life's mission accomplished.</p>
            <p>This Trust is not merely an institution; it is my humble expression of gratitude to all those who believed in me when I had nothing except determination and dreams.
              I dedicate this mission with deep reverence to my Guru, <strong>Shri Omnivas Gupta Ji</strong>, whose selfless teaching continues to illuminate countless lives through mine.</p>
          </div>
          <blockquote className="mt-8 border-l-4 border-accent pl-5 font-display text-2xl font-bold text-primary">
            "With gratitude, faith, and hope"
          </blockquote>
          <p className="mt-6 font-bold text-primary">Navin Kumar</p>
          <p className="text-[#1a1a1a]">Founder</p> 
          <p className="text-[#1a1a1a]">Irodov Charitable Trust</p>
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
            <div className="shrink-0 text-center">
              <Image
                src="/Tribute.jpg"
                alt="Late Shri Omnivas Gupta Ji"
                width={200}
                height={240}
                className="rounded-xl object-cover shadow-md mx-auto"
              />
              <p className="mt-4 font-bold text-primary text-lg">Late Shri Omnivas Gupta Ji</p>
              <p className="text-sm text-[#1a1a1a]">Mathematics Teacher</p>
              <p className="text-sm text-[#1a1a1a]">Shahabad, Hardoi, U.P.</p>
            </div>
            <div className="flex-1">
              <div className="mb-4 flex justify-center">
                <Image
                  src="/images/students/Diya.jpeg"
                  alt="Diya"
                  width={48}
                  height={48}
                  className="h-30 w-30 object-contain"
                />
              </div>
              <p className="leading-8 text-[#1A1A1A] text-[15px]">
                The life of Late Shri Omnivas Gupta Ji exemplified the highest ideals of teaching — knowledge imparted with compassion, discipline enriched by humility, and service offered without expectation. His blessings shaped my destiny, and his immortal values continue to inspire every step of my journey and every mission I undertake.
              </p>
              <blockquote className="mt-6 border-l-4 border-accent pl-5 font-display text-xl font-bold text-primary italic">
                "He did not merely teach me formulas; he taught me the meaning of compassion, responsibility, and giving back to society."
              </blockquote>
              <p className="mt-4 text-sm font-bold text-accent">— Navin Kumar, Founder</p>
            </div>
          </div>
          <p className="mt-8 text-center text-sm text-[#1a1a1a] italic">
            This Trust is dedicated with deep reverence to Shri Omnivas Gupta Ji, whose selfless teaching continues to illuminate countless lives.
          </p>
        </div>
      </section>
    </main>
  );
}
