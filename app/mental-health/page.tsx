import PageHero from "@/components/ui/PageHero";

export const metadata = {
  title: "Mental Health",
  description: "Confidential counselling, psychiatry referrals, crisis guidance, and wellness resources.",
};

export default function MentalHealthPage() {
  return <main><PageHero title="Mental Health Centre" subtitle="Confidential counselling, psychiatry referrals, crisis guidance, and wellness resources." breadcrumbs={[{label:"Home",href:"/"},{label:"Mental Health"}]} /><section className="mx-auto max-w-7xl px-5 py-16 sm:px-8"><div className="grid gap-5 md:grid-cols-3">{["Counselling","Psychiatry","Workshops","Peer Support","Crisis Guidance","Resources"].map((x) => <div key={x} className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-border"><h2 className="font-display text-xl font-black text-primary">{x}</h2><p className="mt-3 text-sm leading-6 text-[#3D4451]">Placeholder service overview for students and community members.</p></div>)}</div></section></main>;
}

