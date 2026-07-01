"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { programs } from "@/lib/data";

const allLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Vision & Mission", "/vision-mission"],
  ["Projects", "/projects"],
  ["Programs", "/programs"],
  ["Mental Health", "/mental-health"],
  ["Research", "/research"],
  ["Media", "/media"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
  ["Donate", "/donate"],
  ["Students", "/students"],
  ["Get Involved", "/get-involved"],
  ["Events", "/events"],
  ["Publications", "/publications"],
  ["Transparency", "/transparency"],
];

const aboutLinks = [
  ["About Us", "/about"],
  ["Vision & Mission", "/vision-mission"],
  ["Founder", "/about/founder"],
  ["Trustees", "/about/trustees"],
  ["Advisory Board", "/about/advisory"],
  ["Governance", "/about/governance"],
  ["Annual Reports", "/about/annual-reports"],
];

const moreLinks = [
  ["Students", "/students"],
  ["Get Involved", "/get-involved"],
  ["Events", "/events"],
  ["Publications", "/publications"],
  ["Transparency", "/transparency"],
];

const navLinkClass = "whitespace-nowrap transition-colors hover:text-[#1A3C6E]";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as Node;
      if (aboutRef.current && !aboutRef.current.contains(target)) setAboutOpen(false);
      if (programsRef.current && !programsRef.current.contains(target)) setProgramsOpen(false);
      if (moreRef.current && !moreRef.current.contains(target)) setMoreOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white shadow-sm">
      <nav className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex flex-shrink-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt="IRODOV Charitable Trust"
            width={96}
            height={96}
            className="h-20 w-auto object-contain"
            priority
            unoptimized
          />
          <div className="hidden flex-col leading-tight md:flex">
            <span className="font-serif text-2xl font-bold whitespace-nowrap text-[#1A3C6E]">IRODOV</span>
            <span className="text-[15px] font-medium tracking-widest whitespace-nowrap text-[#6B7A99]">CHARITABLE TRUST</span>
          </div>
        </Link>

        <div className="hidden items-center gap-4 text-[14px] font-medium text-gray-700 lg:flex">
          <Link className={navLinkClass} href="/">Home</Link>
          <Dropdown label="About" open={aboutOpen} setOpen={setAboutOpen} menuRef={aboutRef}>
            {aboutLinks.map(([label, href]) => (
              <MenuLink key={href} href={href} onClick={() => setAboutOpen(false)}>{label}</MenuLink>
            ))}
          </Dropdown>
          <Link className={navLinkClass} href="/projects">Projects</Link>
          <div ref={programsRef} className="relative" onMouseLeave={() => setProgramsOpen(false)}>
            <button onClick={() => setProgramsOpen((value) => !value)} className={navLinkClass}>Programs</button>
            {programsOpen && (
              <div className="absolute left-0 top-full z-50 pt-2">
                <div className="grid w-[620px] grid-cols-2 gap-2 rounded-lg bg-white p-4 shadow-xl ring-1 ring-primary/10">
                  {programs.map(([slug, title, desc]) => (
                    <Link key={slug} href={`/programs/${slug}`} className="rounded-md p-3 hover:bg-surface" onClick={() => setProgramsOpen(false)}>
                      <span className="block font-bold text-primary">{title}</span>
                      <span className="mt-1 block text-xs leading-5 text-muted">{desc}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link className={navLinkClass} href="/mental-health">Mental Health</Link>
          <Link className={navLinkClass} href="/research">Research</Link>
          <Link className={navLinkClass} href="/media">Media</Link>
          <Link className={navLinkClass} href="/careers">Careers</Link>
          <Link className={navLinkClass} href="/contact">Contact</Link>
          <Dropdown label="More ▾" open={moreOpen} setOpen={setMoreOpen} menuRef={moreRef} align="right">
            {moreLinks.map(([label, href]) => (
              <MenuLink key={href} href={href} onClick={() => setMoreOpen(false)}>{label}</MenuLink>
            ))}
          </Dropdown>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/donate" className="whitespace-nowrap rounded-md bg-accent px-4 py-2 text-sm font-black text-foreground">
            Donate Now
          </Link>
          <button className="rounded-md border border-primary/20 px-3 py-2 text-primary lg:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
            ☰
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 bg-foreground/50 lg:hidden">
          <div className="h-full w-full overflow-y-auto bg-white p-5 shadow-xl">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex flex-shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
                <Image
                  src="/logo.png"
                  alt="IRODOV Charitable Trust"
                  width={96}
                  height={96}
                  className="h-20 w-auto object-contain"
                  priority
                  unoptimized
                />
                <div className="hidden flex-col leading-tight md:flex">
                  <span className="font-serif text-2xl font-bold whitespace-nowrap text-[#1A3C6E]">IRODOV</span>
                  <span className="text-[15px] font-medium tracking-widest whitespace-nowrap text-[#6B7A99]">CHARITABLE TRUST</span>
                </div>
              </Link>
              <button onClick={() => setOpen(false)} className="rounded-md border px-3 py-1" aria-label="Close menu">×</button>
            </div>
            <div className="mt-6 grid gap-3">
              {allLinks.map(([label, href]) => (
                <Link onClick={() => setOpen(false)} key={href} href={href} className="font-semibold text-foreground">
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Dropdown({
  label,
  open,
  setOpen,
  menuRef,
  children,
  align = "left",
}: {
  label: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  menuRef: React.RefObject<HTMLDivElement | null>;
  children: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <div ref={menuRef} className="relative" onMouseLeave={() => setOpen(false)}>
      <button onClick={() => setOpen((value) => !value)} className={navLinkClass}>
        {label}
      </button>
      {open && (
        <div className={`absolute top-full z-50 pt-2 ${align === "right" ? "right-0" : "left-0"}`}>
          <div className="grid w-56 gap-1 rounded-lg bg-white p-3 shadow-xl ring-1 ring-primary/10">{children}</div>
        </div>
      )}
    </div>
  );
}

function MenuLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link href={href} className="whitespace-nowrap rounded-md px-3 py-2 text-[15px] font-medium text-gray-700 transition-colors hover:bg-surface hover:text-[#1A3C6E]" onClick={onClick}>
      {children}
    </Link>
  );
}
