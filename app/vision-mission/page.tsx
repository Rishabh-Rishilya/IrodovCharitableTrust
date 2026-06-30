import PageHero from "@/components/ui/PageHero";

const pillars = ["Education", "Mental Health", "Healthcare", "Research", "Social Welfare", "Rural Development"];
const roadmap = ["2018 - Foundation", "2020 - First Programs", "2022 - National Expansion", "2024 - Research Centre", "2026 - Digital Platform"];
const sdgs = [["3", "Good Health"], ["4", "Quality Education"], ["8", "Decent Work"], ["10", "Reduced Inequalities"], ["11", "Sustainable Cities"], ["17", "Partnerships"]];

export default function VisionMissionPage() {
  return (
    <main>
      <PageHero title="Vision & Mission" breadcrumbs={[{ label: "Home", href: "/" }, { label: "Vision & Mission" }]} />
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="rounded-lg bg-primary p-8 text-white">
          <p className="font-display text-4xl font-black leading-tight">
            To build an inclusive society where every individual has access to education, mental health support, healthcare, and opportunities for holistic development.
          </p>
        </div>
        <h2 className="mt-12 font-display text-3xl font-black text-primary">Mission Pillars</h2>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => <div key={pillar} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-primary/10"><p className="text-2xl text-accent">◆</p><h3 className="mt-3 font-display text-xl font-black text-primary">{pillar}</h3></div>)}
        </div>
        <h2 className="mt-12 font-display text-3xl font-black text-primary">Long-term Goals</h2>
        <ol className="mt-6 grid gap-3 text-muted">
          {["Reach underserved communities across India", "Create accessible mental health support systems", "Fund education continuity for vulnerable students", "Build a research-driven social impact model", "Publish transparent annual reports and impact dashboards"].map((goal, index) => <li key={goal} className="rounded-md bg-surface p-4 font-semibold">{index + 1}. {goal}</li>)}
        </ol>
        <h2 className="mt-12 font-display text-3xl font-black text-primary">Strategic Roadmap</h2>
        <div className="mt-6 flex gap-4 overflow-x-auto pb-3">
          {roadmap.map((item) => <div key={item} className="min-w-56 rounded-lg bg-white p-5 text-center font-bold text-primary shadow-sm ring-1 ring-primary/10">{item}</div>)}
        </div>
        <h2 className="mt-12 font-display text-3xl font-black text-primary">SDG Alignment</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {sdgs.map(([num, label]) => <div key={num} className="rounded-lg bg-white p-4 text-center shadow-sm"><div className="mx-auto grid size-14 place-items-center rounded-md bg-accent text-xl font-black text-foreground">{num}</div><p className="mt-3 text-sm font-bold text-primary">{label}</p></div>)}
        </div>
      </section>
    </main>
  );
}
