"use client";

import Image from "next/image";
import Link from "next/link";
import NewsletterSignup from "@/components/layout/NewsletterSignup";
import VideoSection from "@/components/home/VideoSection";
import TestimonialsCarousel from "@/components/ui/TestimonialsCarousel";
import AccentButton from "@/components/ui/AccentButton";
import { useLanguage } from "@/lib/LanguageContext";
import { useState } from "react";

export default function Home() {
  const { language } = useLanguage();
  const [donateTab, setDonateTab] = useState<"onetime" | "monthly" | "sponsor">("onetime");

  const t = {
    en: {
      heroTitle: "Empowering Lives Through Education, Health & Hope",
      heroSubtitle: "A national charitable institution advancing education, psychological wellness, healthcare, research, and social welfare.",
      explorePrograms: "Explore Programs",
      donateNow: "Donate Now",
      welcomeFromFounder: "Welcome from Founder",
      founderQuote: '"IRODOV Charitable Trust exists to serve humanity with compassion, clarity, and disciplined action. We believe education, mental health, and social support can restore hope where it is needed most."',
      founderName: "Dr. [Founder Name]",
      founderTitle: "Founder & Chairman, IRODOV Charitable Trust",
      visionLabel: "Vision",
      visionText: "To build an inclusive society where every individual has access to quality education, mental health support, and opportunities for holistic development.",
      missionLabel: "Mission",
      missionText: "To serve humanity through education, psychological wellness, healthcare, research, and social welfare, with transparency, compassion, and excellence.",
      coreValuesHeading: "Our Core Values",
      compassion: "Compassion",
      compassionDesc: "We serve every person with dignity, warmth, and care.",
      integrity: "Integrity",
      integrityDesc: "We uphold ethical action and responsible decision-making.",
      excellence: "Excellence",
      excellenceDesc: "We aim for quality in every program and partnership.",
      inclusion: "Inclusion",
      inclusionDesc: "We design services for people across backgrounds and abilities.",
      innovation: "Innovation",
      innovationDesc: "We use practical ideas and research to improve impact.",
      transparency: "Transparency",
      transparencyDesc: "We document, review, and report our work openly.",
      statsHeading: "Our Impact",
      livesImpacted: "Lives Impacted",
      livesImpactedDesc: "Across 15 states since 2018",
      scholarships: "Scholarships",
      scholarshipsDesc: "Students supported through education",
      states: "States",
      statesDesc: "Active programs nationwide",
      yearsOfService: "Years of Service",
      yearsOfServiceDesc: "Of dedicated service",
      healthCamps: "Health Camps",
      healthCampsDesc: "Free medical services delivered",
      volunteers: "Volunteers",
      volunteersDesc: "Changemakers across India",
      ourCampaigns: "Our Campaigns",
      viewAll: "View All",
      shikshaSub: "Support Education",
      donateForCampaign: "Donate for this Campaign",
      swasthyaSub: "Healthcare for All",
      muskaanSub: "Mental Health Awareness",
      aajeevikaaSub: "Skill & Livelihood",
      storiesOfChange: "Stories of Change",
      viewAllStories: "View All Stories",
      upcomingEvents: "Upcoming Events",
      register: "Register",
      latestNews: "Latest News",
      readMore: "Read More",
      alignedWithMissions: "Aligned with National Missions",
      supplementing: "Supplementing Government of India Initiatives",
      donateHeading: "Make a Difference Today",
      taxExemptText: "Your donation is tax-exempt under Section 80G of the Income Tax Act",
      oneTime: "One-time",
      monthly: "Monthly",
      sponsorCause: "Sponsor a Cause",
      customAmount: "Custom",
      generalFund: "General Fund",
      education: "Education",
      mentalHealth: "Mental Health",
      healthcare: "Healthcare",
      socialWelfare: "Social Welfare",
      disasterRelief: "Disaster Relief",
      yourThousandCan: "Your Rs. 1000 can...",
      studyMaterial: "Provide study material to two students",
      counsellingSession: "Support one counselling session",
      essentialMedicines: "Fund essential medicines at a health camp",
      joinOurMission: "Join Our Mission",
      volunteerSubtitle: "Volunteer, mentor, or partner with us to create lasting change",
      becomeVolunteer: "Become a Volunteer",
      becomeMentor: "Become a Mentor",
      projectsHeading: "Current Projects",
      learnMore: "Learn More",
      villageLocation: "Location",
      viewImpactReport: "View Our Full Impact Report",
    },
    hi: {
      heroTitle: "शिक्षा, स्वास्थ्य और आशा के माध्यम से जीवन को सशक्त बनाना",
      heroSubtitle: "एक राष्ट्रीय दान संस्था जो शिक्षा, मनोवैज्ञानिक कल्याण, स्वास्थ्य देखभाल, अनुसंधान और सामाजिक कल्याण को आगे बढ़ा रही है।",
      explorePrograms: "कार्यक्रम देखें",
      donateNow: "अभी दान करें",
      welcomeFromFounder: "संस्थापक का संदेश",
      founderQuote: '"IRODOV चैरिटेबल ट्रस्ट करुणा, स्पष्टता और अनुशासित कार्य के साथ मानवता की सेवा के लिए समर्पित है। हम मानते हैं कि शिक्षा, मानसिक स्वास्थ्य और सामाजिक सहायता वहाँ आशा बहाल कर सकती है जहाँ इसकी सबसे अधिक आवश्यकता है।"',
      founderName: "डॉ. [संस्थापक का नाम]",
      founderTitle: "संस्थापक और अध्यक्ष, IRODOV चैरिटेबल ट्रस्ट",
      visionLabel: "दृष्टि",
      visionText: "एक समावेशी समाज का निर्माण करना जहाँ प्रत्येक व्यक्ति को गुणवत्तापूर्ण शिक्षा, मानसिक स्वास्थ्य सहायता और समग्र विकास के अवसर मिलें।",
      missionLabel: "मिशन",
      missionText: "शिक्षा, मनोवैज्ञानिक कल्याण, स्वास्थ्य सेवा, अनुसंधान और सामाजिक कल्याण के माध्यम से पारदर्शिता, करुणा और उत्कृष्टता के साथ मानवता की सेवा करना।",
      coreValuesHeading: "हमारे मूल मूल्य",
      compassion: "करुणा",
      compassionDesc: "हम हर व्यक्ति की गरिमा, गर्मजोशी और देखभाल के साथ सेवा करते हैं।",
      integrity: "ईमानदारी",
      integrityDesc: "हम नैतिक कार्य और जिम्मेदार निर्णय लेने का पालन करते हैं।",
      excellence: "उत्कृष्टता",
      excellenceDesc: "हम हर कार्यक्रम और साझेदारी में गुणवत्ता का लक्ष्य रखते हैं।",
      inclusion: "समावेश",
      inclusionDesc: "हम विभिन्न पृष्ठभूमि और क्षमताओं के लोगों के लिए सेवाएं डिजाइन करते हैं।",
      innovation: "नवीनता",
      innovationDesc: "हम प्रभाव को बेहतर बनाने के लिए व्यावहारिक विचारों और अनुसंधान का उपयोग करते हैं।",
      transparency: "पारदर्शिता",
      transparencyDesc: "हम अपने काम को खुले तौर पर दस्तावेज़, समीक्षा और रिपोर्ट करते हैं।",
      statsHeading: "हमारा प्रभाव",
      livesImpacted: "जीवन प्रभावित हुए",
      livesImpactedDesc: "2018 से 15 राज्यों में",
      scholarships: "छात्रवृत्तियाँ",
      scholarshipsDesc: "शिक्षा के माध्यम से समर्थित छात्र",
      states: "राज्य",
      statesDesc: "सक्रिय राष्ट्रव्यापी कार्यक्रम",
      yearsOfService: "सेवा के वर्ष",
      yearsOfServiceDesc: "समर्पित सेवा का",
      healthCamps: "स्वास्थ्य शिविर",
      healthCampsDesc: "निःशुल्क चिकित्सा सेवाएं प्रदान की गईं",
      volunteers: "स्वयंसेवक",
      volunteersDesc: "भारत भर में परिवर्तन निर्माता",
      ourCampaigns: "हमारे अभियान",
      viewAll: "सभी देखें",
      shikshaSub: "शिक्षा का समर्थन करें",
      donateForCampaign: "इस अभियान के लिए दान करें",
      swasthyaSub: "सभी के लिए स्वास्थ्य सेवा",
      muskaanSub: "मानसिक स्वास्थ्य जागरूकता",
      aajeevikaaSub: "कौशल और आजीविका",
      storiesOfChange: "परिवर्तन की कहानियाँ",
      viewAllStories: "सभी कहानियाँ देखें",
      upcomingEvents: "आगामी कार्यक्रम",
      register: "पंजीकरण करें",
      latestNews: "ताज़ा खबरें",
      readMore: "और पढ़ें",
      alignedWithMissions: "राष्ट्रीय मिशन के अनुरूप",
      supplementing: "भारत सरकार की पहल का समर्थन",
      donateHeading: "आज बदलाव लाएं",
      taxExemptText: "आपका दान आयकर अधिनियम की धारा 80G के तहत कर-मुक्त है",
      oneTime: "एकबारी",
      monthly: "मासिक",
      sponsorCause: "एक कारण को प्रायोजित करें",
      customAmount: "कस्टम",
      generalFund: "सामान्य कोष",
      education: "शिक्षा",
      mentalHealth: "मानसिक स्वास्थ्य",
      healthcare: "स्वास्थ्य सेवा",
      socialWelfare: "सामाजिक कल्याण",
      disasterRelief: "आपदा राहत",
      yourThousandCan: "आपकी 1000 रुपये कर सकती है...",
      studyMaterial: "दो छात्रों को अध्ययन सामग्री प्रदान करें",
      counsellingSession: "एक परामर्श सत्र का समर्थन करें",
      essentialMedicines: "स्वास्थ्य शिविर में आवश्यक दवाओं के लिए धन प्रदान करें",
      joinOurMission: "हमारे मिशन में शामिल हों",
      volunteerSubtitle: "बदलाव लाने के लिए स्वयंसेवक, मार्गदर्शक, या भागीदार बनें",
      becomeVolunteer: "स्वयंसेवक बनें",
      becomeMentor: "मार्गदर्शक बनें",
      projectsHeading: "वर्तमान परियोजनाएं",
      learnMore: "अधिक जानें",
      villageLocation: "स्थान",
      viewImpactReport: "हमारी पूरी प्रभाव रिपोर्ट देखें",
    }
  };

  const text = t[language];
  return (
    <main className="bg-white">
      <section className="relative overflow-hidden bg-surface-2 text-foreground">
        <div className="absolute inset-0 opacity-60 [bg-[radial-gradient(circle_at_1px_1px,#1E5FA8_1px,transparent_0)]" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
          <div>
            <h1 className="max-w-4xl font-display text-2xl font-black leading-tight text-primary sm:text-5xl lg:text-7xl">
              {text.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{text.heroSubtitle}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/programs" className="rounded-lg border border-primary px-6 py-3 text-center font-bold text-primary transition hover:bg-primary hover:text-white!">
                {text.explorePrograms}
              </Link>
              <AccentButton href="/donate" className="px-6 py-3">
                {text.donateNow}
              </AccentButton>
            </div>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg">
            <Image
              src="/images/students/classroom-8.jpg"
              alt="Students and teacher engaged in classroom learning"
              width={1200}
              height={900}
              className="aspect-4/3 w-full object-cover"
            />
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
            <p className="text-sm font-black uppercase tracking-widest text-accent">{text.welcomeFromFounder}</p>
            <blockquote className="mt-4 border-l-4 border-accent pl-5 font-display text-3xl font-bold leading-snug text-primary">
              {text.founderQuote}
            </blockquote>
            <p className="mt-6 font-bold">{text.founderName}</p>
            <p className="text-muted">{text.founderTitle}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 lg:grid-cols-2">
          <article className="rounded-lg bg-[#F5EFE0] p-8 text-primary shadow-sm ring-1 ring-[#E5D9C3]">
            <h2 className="font-display text-3xl font-black">{text.visionLabel}</h2>
            <p className="mt-4 leading-7 text-muted">
              {text.visionText}
            </p>
          </article>
          <article className="rounded-lg bg-[#F5EFE0] p-8 text-primary shadow-sm ring-1 ring-[#E5D9C3]">
            <h2 className="font-display text-3xl font-black">{text.missionLabel}</h2>
            <p className="mt-4 leading-7 text-muted">
              {text.missionText}
            </p>
          </article>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-black text-primary">{text.coreValuesHeading}</h2>
          <div className="mt-8 grid grid-cols-2 gap-5 lg:grid-cols-3">
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-border">
              <p className="text-3xl text-accent">❤️</p>
              <h3 className="mt-4 font-display text-xl font-black text-primary">{text.compassion}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{text.compassionDesc}</p>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-border">
              <p className="text-3xl text-accent">🛡️</p>
              <h3 className="mt-4 font-display text-xl font-black text-primary">{text.integrity}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{text.integrityDesc}</p>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-border">
              <p className="text-3xl text-accent">⭐</p>
              <h3 className="mt-4 font-display text-xl font-black text-primary">{text.excellence}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{text.excellenceDesc}</p>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-border">
              <p className="text-3xl text-accent">👥</p>
              <h3 className="mt-4 font-display text-xl font-black text-primary">{text.inclusion}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{text.inclusionDesc}</p>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-border">
              <p className="text-3xl text-accent">💡</p>
              <h3 className="mt-4 font-display text-xl font-black text-primary">{text.innovation}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{text.innovationDesc}</p>
            </article>
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-border">
              <p className="text-3xl text-accent">👁️</p>
              <h3 className="mt-4 font-display text-xl font-black text-primary">{text.transparency}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{text.transparencyDesc}</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-black text-primary">Our Work in Action</h2>
          <p className="mt-3 max-w-2xl text-muted">Moments from our classrooms and communities.</p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[15, 10, 11, 12, 13, 14].map((photo) => (
              <Image
                key={photo}
                src={`/images/students/classroom-${photo}.jpg`}
                alt="Students and teacher engaged in classroom learning"
                width={800}
                height={600}
                className="aspect-4/3 w-full rounded-lg object-cover shadow-sm ring-1 ring-border"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#F5EFE0] px-5 py-16 text-primary sm:px-8" >
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 lg:grid-cols-3">
          <div className="rounded-lg border border-[#E5D9C3] bg-white/60 p-6 text-center shadow-sm">
            <p className="font-display text-4xl font-black text-accent">10000+</p>
            <p className="mt-2 text-sm font-semibold text-primary">{text.livesImpacted}</p>
            <p className="mt-2 text-xs text-[#4B6B8C]">{text.livesImpactedDesc}</p>
          </div>
          <div className="rounded-lg border border-[#E5D9C3] bg-white/60 p-6 text-center shadow-sm">
            <p className="font-display text-4xl font-black text-accent">500+</p>
            <p className="mt-2 text-sm font-semibold text-primary">{text.scholarships}</p>
            <p className="mt-2 text-xs text-[#4B6B8C]">{text.scholarshipsDesc}</p>
          </div>
          <div className="rounded-lg border border-[#E5D9C3] bg-white/60 p-6 text-center shadow-sm">
            <p className="font-display text-4xl font-black text-accent">15</p>
            <p className="mt-2 text-sm font-semibold text-primary">{text.states}</p>
            <p className="mt-2 text-xs text-[#4B6B8C]">{text.statesDesc}</p>
          </div>
          <div className="rounded-lg border border-[#E5D9C3] bg-white/60 p-6 text-center shadow-sm">
            <p className="font-display text-4xl font-black text-accent">8</p>
            <p className="mt-2 text-sm font-semibold text-primary">{text.yearsOfService}</p>
            <p className="mt-2 text-xs text-[#4B6B8C]">{text.yearsOfServiceDesc}</p>
          </div>
          <div className="rounded-lg border border-[#E5D9C3] bg-white/60 p-6 text-center shadow-sm">
            <p className="font-display text-4xl font-black text-accent">275+</p>
            <p className="mt-2 text-sm font-semibold text-primary">{text.healthCamps}</p>
            <p className="mt-2 text-xs text-[#4B6B8C]">{text.healthCampsDesc}</p>
          </div>
          <div className="rounded-lg border border-[#E5D9C3] bg-white/60 p-6 text-center shadow-sm">
            <p className="font-display text-4xl font-black text-accent">1200+</p>
            <p className="mt-2 text-sm font-semibold text-primary">{text.volunteers}</p>
            <p className="mt-2 text-xs text-[#4B6B8C]">{text.volunteersDesc}</p>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl text-center">
          <Link href="/publications" className="inline-block rounded-lg bg-accent px-5 py-3 font-black text-white!">{text.viewImpactReport}</Link>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-black text-primary">{text.projectsHeading}</h2>
          <div className="mt-8 flex gap-5 overflow-x-auto pb-3">
            <article className="min-w-80 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-border">
              <Image src="/images/students/classroom-1.jpg" alt="Students and teacher engaged in classroom learning" width={400} height={200} className="h-40 w-full object-cover" />
              <div className="p-5">
                <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-primary">Bihar</span>
                <h3 className="mt-4 font-display text-xl font-black">Rural STEM Learning Labs</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Hands-on science learning spaces for rural school students.</p>
                <div className="mt-4 h-2 rounded-full bg-primary/10"><div className="h-2 w-[72%] rounded-full bg-accent" /></div>
                <Link href="/projects" className="mt-5 inline-block rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary transition hover:bg-primary hover:text-white">{text.learnMore}</Link>
              </div>
            </article>
            <article className="min-w-80 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-border">
              <Image src="/images/students/classroom-2.jpg" alt="Students and teacher engaged in classroom learning" width={400} height={200} className="h-40 w-full object-cover" />
              <div className="p-5">
                <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-primary">Delhi NCR</span>
                <h3 className="mt-4 font-display text-xl font-black">Mental Wellness Helpline</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Counselling and crisis support access for young people.</p>
                <div className="mt-4 h-2 rounded-full bg-primary/10"><div className="h-2 w-[80%] rounded-full bg-accent" /></div>
                <Link href="/projects" className="mt-5 inline-block rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary transition hover:bg-primary hover:text-white">{text.learnMore}</Link>
              </div>
            </article>
            <article className="min-w-80 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-border">
              <Image src="/images/students/classroom-3.jpg" alt="Students and teacher engaged in classroom learning" width={400} height={200} className="h-40 w-full object-cover" />
              <div className="p-5">
                <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-primary">15 States</span>
                <h3 className="mt-4 font-display text-xl font-black">Scholarship Cohort 2024</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Need-based education aid for school and college learners.</p>
                <div className="mt-4 h-2 rounded-full bg-primary/10"><div className="h-2 w-[64%] rounded-full bg-accent" /></div>
                <Link href="/projects" className="mt-5 inline-block rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary transition hover:bg-primary hover:text-white">{text.learnMore}</Link>
              </div>
            </article>
            <article className="min-w-80 overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-border">
              <Image src="/images/students/classroom-4.jpg" alt="Students and teacher engaged in classroom learning" width={400} height={200} className="h-40 w-full object-cover" />
              <div className="p-5">
                <span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-primary">Uttar Pradesh</span>
                <h3 className="mt-4 font-display text-xl font-black">Community Health Camps</h3>
                <p className="mt-2 text-sm leading-6 text-muted">Preventive healthcare outreach with referral support.</p>
                <div className="mt-4 h-2 rounded-full bg-primary/10"><div className="h-2 w-[68%] rounded-full bg-accent" /></div>
                <Link href="/projects" className="mt-5 inline-block rounded-md border border-primary px-4 py-2 text-sm font-bold text-primary transition hover:bg-primary hover:text-white">{text.learnMore}</Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-4xl font-black text-primary">{text.ourCampaigns}</h2>
            <Link href="/donate" className="font-bold text-accent">{text.viewAll}</Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-lg border border-[#E5D9C3] border-l-4 border-l-accent bg-[#F5EFE0] p-6 text-foreground shadow-sm transition hover:-translate-y-1">
              <span className="grid size-12 place-items-center rounded-full bg-accent/15 text-accent" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="size-6 fill-current">
                  <path d="M4 18V6l8-3 8 3v12l-8 3-8-3zm8-13.4L6 7v8.9l6 2.3 6-2.3V7L12 4.6z" />
                </svg>
              </span>
              <h3 className="mt-4 font-display text-2xl font-black text-primary">Shiksha Ke Liye</h3>
              <p className="mt-2 text-muted">{text.shikshaSub}</p>
              <AccentButton href="/donate" className="mt-5 px-4 py-2">
                {text.donateForCampaign}
              </AccentButton>
            </article>
            <article className="rounded-lg border border-[#E5D9C3] border-l-4 border-l-accent bg-[#F5EFE0] p-6 text-foreground shadow-sm transition hover:-translate-y-1">
              <span className="grid size-12 place-items-center rounded-full bg-accent/15 text-accent" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="size-6 fill-current">
                  <path d="M12 2a4 4 0 0 1 4 4c0 1.5-.8 2.8-2 3.5V12h2l4 6h-4v4H8v-4H4l4-6h2V9.5A4 4 0 0 1 8 6a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2c0 .9.6 1.7 1.4 2l.6.2.6-.2A2 2 0 0 0 14 6a2 2 0 0 0-2-2z" />
                </svg>
              </span>
              <h3 className="mt-4 font-display text-2xl font-black text-primary">Swasthya Pehle</h3>
              <p className="mt-2 text-muted">{text.swasthyaSub}</p>
              <AccentButton href="/donate" className="mt-5 px-4 py-2">
                {text.donateForCampaign}
              </AccentButton>
            </article>
            <article className="rounded-lg border border-[#E5D9C3] border-l-4 border-l-accent bg-[#F5EFE0] p-6 text-foreground shadow-sm transition hover:-translate-y-1">
              <span className="grid size-12 place-items-center rounded-full bg-accent/15 text-accent" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="size-6 fill-current">
                  <path d="M12 3a9 9 0 1 0 9 9h-2a7 7 0 1 1-7-7V3z" />
                  <path d="M13 7h-2v6l5 3 1-1.7-4-2.3V7z" />
                </svg>
              </span>
              <h3 className="mt-4 font-display text-2xl font-black text-primary">Muskaan</h3>
              <p className="mt-2 text-muted">{text.muskaanSub}</p>
              <AccentButton href="/donate" className="mt-5 px-4 py-2">
                {text.donateForCampaign}
              </AccentButton>
            </article>
            <article className="rounded-lg border border-[#E5D9C3] border-l-4 border-l-accent bg-[#F5EFE0] p-6 text-foreground shadow-sm transition hover:-translate-y-1">
              <span className="grid size-12 place-items-center rounded-full bg-accent/15 text-accent" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="size-6 fill-current">
                  <path d="M12 3 2 9l10 6 8-4.8V18h2V9L12 3zm0 2.3L18.2 9 12 12.7 5.8 9 12 5.3zM6 13.6v2.6c0 1.9 2.7 4 6 4s6-2.1 6-4v-2.6l-6 3.6-6-3.6z" />
                </svg>
              </span>
              <h3 className="mt-4 font-display text-2xl font-black text-primary">Aajeevika</h3>
              <p className="mt-2 text-muted">{text.aajeevikaaSub}</p>
              <AccentButton href="/donate" className="mt-5 px-4 py-2">
                {text.donateForCampaign}
              </AccentButton>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-display text-4xl font-black text-primary">{text.storiesOfChange}</h2>
            <Link href="/media/stories" className="font-bold text-accent">{text.viewAllStories}</Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {["Riya", "Mohan", "Fatima"].map((name, index) => (
              <article key={name} className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-border">
                <div className="flex h-48 items-center justify-center border-b border-[#E8E8E0] bg-white">
                  <span className="text-5xl font-bold text-[#1E5FA8]">{name}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-2xl font-black text-primary">{name}</h3>
                  <p className="mt-1 text-sm font-bold text-muted">
                    {text.villageLocation}: {["Rajasthan", "Bihar", "Delhi"][index]}
                  </p>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">With timely guidance, learning resources, and emotional support from IRODOV, {name} found a path forward and renewed confidence for the future.</p>
                  <Link href="/media/stories" className="mt-4 inline-block rounded-lg bg-[#1E5FA8] px-5 py-2 text-sm font-semibold transition-colors hover:bg-[#174a85]" style={{ color: "#FFFFFF" }}>
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <VideoSection />

      <section className="bg-surface px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-black text-primary">{text.upcomingEvents}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-border">
              <div className="flex items-start justify-between gap-4"><span className="rounded-lg bg-accent px-3 py-2 text-center font-black text-white">12<span className="block text-xs">Jul</span></span><span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-primary">Workshop</span></div>
              <h3 className="mt-5 font-display text-xl font-black">Student Wellness Workshop</h3>
              <p className="mt-2 text-sm text-muted">Delhi</p>
              <Link href="/contact" className="mt-5 inline-block rounded-md bg-accent px-4 py-2 text-sm font-bold" style={{ color: "#FFFFFF" }}>Register</Link>
            </article>
            <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-border">
              <div className="flex items-start justify-between gap-4"><span className="rounded-lg bg-accent px-3 py-2 text-center font-black text-white">26<span className="block text-xs">Jul</span></span><span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-primary">Medical Camp</span></div>
              <h3 className="mt-5 font-display text-xl font-black">Mobile Health Camp</h3>
              <p className="mt-2 text-sm text-muted">Lucknow</p>
              <Link href="/contact" className="mt-5 inline-block rounded-md bg-accent px-4 py-2 text-sm font-bold" style={{ color: "#FFFFFF" }}>Register</Link>
            </article>
            <article className="rounded-lg bg-white p-5 shadow-sm ring-1 ring-border">
              <div className="flex items-start justify-between gap-4"><span className="rounded-lg bg-accent px-3 py-2 text-center font-black text-white">18<span className="block text-xs">Aug</span></span><span className="rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-primary">Webinar</span></div>
              <h3 className="mt-5 font-display text-xl font-black">Scholarship Orientation</h3>
              <p className="mt-2 text-sm text-muted">Online</p>
              <Link href="/contact" className="mt-5 inline-block rounded-md bg-accent px-4 py-2 text-sm font-bold" style={{ color: "#FFFFFF" }}>Register</Link>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-4xl font-black text-primary">{text.latestNews}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-border">
              <Image src="/images/students/classroom-5.jpg" alt="Students and teacher engaged in classroom learning" width={400} height={240} className="h-44 w-full object-cover" />
              <div className="p-5"><p className="text-xs font-bold text-muted">10 Jun 2026</p><h3 className="mt-3 font-display text-xl font-black">IRODOV opens annual scholarship applications</h3><p className="mt-3 text-sm leading-6 text-muted">Students across partner states can apply for education continuity support and mentoring.</p><Link href="/media" className="mt-4 inline-block text-sm font-bold text-primary">{text.readMore}</Link></div>
            </article>
            <article className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-border">
              <Image src="/images/students/classroom-6.jpg" alt="Students and teacher engaged in classroom learning" width={400} height={240} className="h-44 w-full object-cover" />
              <div className="p-5"><p className="text-xs font-bold text-muted">22 May 2026</p><h3 className="mt-3 font-display text-xl font-black">Helpline expands counselling hours for students</h3><p className="mt-3 text-sm leading-6 text-muted">The mental health team has extended access windows for urgent student support.</p><Link href="/media" className="mt-4 inline-block text-sm font-bold text-primary">{text.readMore}</Link></div>
            </article>
            <article className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-border">
              <Image src="/images/students/classroom-7.jpg" alt="Students and teacher engaged in classroom learning" width={400} height={240} className="h-44 w-full object-cover" />
              <div className="p-5"><p className="text-xs font-bold text-muted">30 Apr 2026</p><h3 className="mt-3 font-display text-xl font-black">Rural STEM pilot publishes first learning note</h3><p className="mt-3 text-sm leading-6 text-muted">Field observations from rural learning labs are now available to partners.</p><Link href="/media" className="mt-4 inline-block text-sm font-bold text-primary">{text.readMore}</Link></div>
            </article>
          </div>
        </div>
      </section>

      <TestimonialsCarousel />

      <section className="bg-surface px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-widest text-accent">{text.supplementing}</p>
          <h2 className="mt-3 font-display text-4xl font-black text-primary">{text.alignedWithMissions}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-border"><p className="text-3xl">🎓</p><h3 className="mt-4 font-display text-xl font-black text-primary">{text.education}</h3><ul className="mt-3 grid gap-2 text-sm text-muted"><li>Sarva Shiksha Abhiyan</li><li>NEP 2020</li><li>Digital India</li><li>Beti Bachao Beti Padhao</li></ul></article>
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-border"><p className="text-3xl">⚕️</p><h3 className="mt-4 font-display text-xl font-black text-primary">{text.healthcare}</h3><ul className="mt-3 grid gap-2 text-sm text-muted"><li>Ayushman Bharat</li><li>National Rural Health Mission</li><li>Universal Health Coverage</li></ul></article>
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-border"><p className="text-3xl">💼</p><h3 className="mt-4 font-display text-xl font-black text-primary">Skill Dev</h3><ul className="mt-3 grid gap-2 text-sm text-muted"><li>Skill India Mission</li><li>PMKVY</li><li>Startup India</li></ul></article>
            <article className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-border"><p className="text-3xl">🤝</p><h3 className="mt-4 font-display text-xl font-black text-primary">Social</h3><ul className="mt-3 grid gap-2 text-sm text-muted"><li>MGNREGA</li><li>PM Awas Yojana</li><li>Swachh Bharat Mission</li></ul></article>
          </div>
        </div>
      </section>

      <NewsletterSignup />

      <section className="bg-[#F5EFE0] px-5 py-16 text-primary sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-4xl font-black">{text.donateHeading}</h2>
            <p className="mt-4 text-muted">{text.taxExemptText}</p>
            <div className="mt-8 rounded-lg bg-white p-6 text-foreground">
              <div className="flex flex-wrap gap-2 text-sm font-bold">
                <button
                  type="button"
                  onClick={() => setDonateTab("onetime")}
                  className={donateTab === "onetime" ? "rounded-lg bg-accent px-3 py-2 text-white" : "rounded-md bg-surface px-3 py-2 text-primary hover:bg-surface-2 transition-colors"}
                >
                  {text.oneTime}
                </button>
                <button
                  type="button"
                  onClick={() => setDonateTab("monthly")}
                  className={donateTab === "monthly" ? "rounded-lg bg-accent px-3 py-2 text-white" : "rounded-md bg-surface px-3 py-2 text-primary hover:bg-surface-2 transition-colors"}
                >
                  {text.monthly}
                </button>
                <button
                  type="button"
                  onClick={() => setDonateTab("sponsor")}
                  className={donateTab === "sponsor" ? "rounded-lg bg-accent px-3 py-2 text-white" : "rounded-md bg-surface px-3 py-2 text-primary hover:bg-surface-2 transition-colors"}
                >
                  {text.sponsorCause}
                </button>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-3"><button className="rounded-md border border-border px-4 py-3 font-bold text-primary">Rs. 500</button><button className="rounded-md border border-border px-4 py-3 font-bold text-primary">Rs. 1000</button><button className="rounded-md border border-border px-4 py-3 font-bold text-primary">Rs. 2500</button><button className="rounded-md border border-border px-4 py-3 font-bold text-primary">Rs. 5000</button><button className="rounded-md border border-border px-4 py-3 font-bold text-primary">Rs. 10000</button><input className="rounded-md border border-border px-4 py-3" placeholder={text.customAmount} /></div>
              <select className="mt-4 w-full rounded-md border border-border px-4 py-3"><option>{text.generalFund}</option><option>{text.education}</option><option>{text.mentalHealth}</option><option>{text.healthcare}</option><option>{text.socialWelfare}</option><option>{text.disasterRelief}</option></select>
              <AccentButton href="/donate" className="mt-4 px-5 py-3">
                {text.donateNow}
              </AccentButton>
            </div>
          </div>
          <aside className="self-center rounded-xl bg-[#F5F5F0] p-6">
            <h3 className="font-display text-xl font-bold text-[#1E5FA8]">{text.yourThousandCan}</h3>
            <ul className="mt-5 grid gap-3 text-base text-[#2D2D2D]">
              <li className="flex gap-3"><span className="text-[#FF6B35]">•</span><span>{text.studyMaterial}</span></li>
              <li className="flex gap-3"><span className="text-[#FF6B35]">•</span><span>{text.counsellingSession}</span></li>
              <li className="flex gap-3"><span className="text-[#FF6B35]">•</span><span>{text.essentialMedicines}</span></li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="bg-accent px-5 py-14 text-white sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-4xl font-black text-white!">{text.joinOurMission}</h2>
            <p className="mt-2 text-white">{text.volunteerSubtitle}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/get-involved/volunteer" className="px-6 py-3 bg-white font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap" style={{ color: '#FF6B35' }}>
              {text.becomeVolunteer}
            </Link>
            <Link href="/get-involved/mentor" className="px-6 py-3 bg-white font-semibold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap" style={{ color: '#FF6B35' }}>
              {text.becomeMentor}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
