"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { programs } from "@/lib/data";
import { useLanguage } from "@/lib/LanguageContext";

const mainLinks = [
  ["Home", "/"],
  ["About", "/about"],
  ["Programs", "/programs"],
  ["Mental Health", "/mental-health"],
  ["Research", "/research"],
  ["Media", "/media"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
];

const moreLinks = [
  ["Students", "/students"],
  ["Get Involved", "/get-involved"],
  ["Events", "/events"],
  ["Transparency", "/transparency"],
  ["Publications", "/publications"],
];

const drawerLinks = [
  ...mainLinks,
  ...moreLinks,
  ["Projects", "/projects"],
  ["Vision & Mission", "/vision-mission"],
  ["Donate Now", "/donate"],
];

const navLinkClass = "whitespace-nowrap text-[14px] font-medium text-[#2D4B32] transition-colors hover:text-[#FF6E41]";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const aboutRef = useRef<HTMLDivElement>(null);
  const programsRef = useRef<HTMLDivElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const { language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const target = event.target as Node;
      if (aboutRef.current && !aboutRef.current.contains(target)) setAboutOpen(false);
      if (programsRef.current && !programsRef.current.contains(target)) setProgramsOpen(false);
      if (moreRef.current && !moreRef.current.contains(target)) setMoreOpen(false);
      if (searchRef.current && !searchRef.current.contains(target)) setSearchOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  const submitSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmed = query.trim();
    if (trimmed) {
      setSearchOpen(false);
      router.push(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#E6EB82] bg-white shadow-sm">
      <nav className="mx-auto flex h-24 w-full max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <Link href="/" className="flex flex-shrink-0 items-center gap-3">
          <Image src="/logo.png" alt="IRODOV Charitable Trust" width={96} height={96} className="h-20 w-auto object-contain" priority unoptimized />
          <div className="hidden flex-col leading-tight md:flex">
            <span className="font-serif text-2xl font-bold whitespace-nowrap text-[#2D4B32]">IRODOV</span>
            <span className="whitespace-nowrap text-[15px] font-medium tracking-widest text-[#4A6B52]">CHARITABLE TRUST</span>
          </div>
        </Link>

        <div className="hidden items-center gap-4 lg:flex">
          <Link className={navLinkClass} href="/">Home</Link>
          <Dropdown label="About" open={aboutOpen} setOpen={setAboutOpen} menuRef={aboutRef}>
            <MenuLink href="/about" onClick={() => setAboutOpen(false)}>About Us</MenuLink>
            <MenuLink href="/about/founder" onClick={() => setAboutOpen(false)}>Founder</MenuLink>
            <MenuLink href="/about/trustees" onClick={() => setAboutOpen(false)}>Trustees</MenuLink>
            <MenuLink href="/about/governance" onClick={() => setAboutOpen(false)}>Governance</MenuLink>
          </Dropdown>
          <Dropdown label="Programs" open={programsOpen} setOpen={setProgramsOpen} menuRef={programsRef}>
            <div className="grid w-[620px] grid-cols-2 gap-2 p-1">
              {programs.map(([slug, title, desc]) => (
                <Link key={slug} href={`/programs/${slug}`} className="rounded-md p-3 transition hover:bg-surface" onClick={() => setProgramsOpen(false)}>
                  <span className="block font-bold text-primary">{title}</span>
                  <span className="mt-1 block text-xs leading-5 text-muted">{desc}</span>
                </Link>
              ))}
            </div>
          </Dropdown>
          <Link className={navLinkClass} href="/mental-health">Mental Health</Link>
          <Link className={navLinkClass} href="/research">Research</Link>
          <Link className={navLinkClass} href="/media">Media</Link>
          <Link className={navLinkClass} href="/careers">Careers</Link>
          <Link className={navLinkClass} href="/contact">Contact</Link>
          <Dropdown label="More ▾" open={moreOpen} setOpen={setMoreOpen} menuRef={moreRef} align="right">
            {moreLinks.map(([label, href]) => (
              <MenuLink key={href} href={href} onClick={() => setMoreOpen(false)}>
                {label}
              </MenuLink>
            ))}
          </Dropdown>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleLanguage}
            className="hidden items-center gap-2 rounded-lg border border-[#E6EB82] px-3 py-2 text-xs font-bold text-primary transition hover:bg-surface md:flex"
            aria-label="Toggle language"
          >
            <span className="text-sm">🌐</span>
            <span className="flex items-center gap-1">
              <span className={language === "en" ? "font-black underline text-[#FF6E41]" : "text-primary/70"}>EN</span>
              <span className="text-primary/50">|</span>
              <span className={language === "hi" ? "font-black underline text-[#FF6E41]" : "text-primary/70"}>हिं</span>
            </span>
          </button>
          <form ref={searchRef} onSubmit={submitSearch} className="hidden items-center gap-2 md:flex">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search..."
              className={`rounded-lg border border-[#E6EB82] bg-white px-3 py-2 text-sm text-primary outline-none transition-all duration-200 ${
                searchOpen ? "w-56 opacity-100" : "w-0 border-transparent px-0 opacity-0"
              }`}
            />
            <button
              type="button"
              onClick={() => setSearchOpen((value) => !value)}
              className="grid size-10 place-items-center rounded-lg border border-[#E6EB82] text-primary"
              aria-label="Search"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
            </button>
          </form>
          <Link href="/donate" className="whitespace-nowrap rounded-lg bg-accent px-4 py-2 text-sm font-black text-white transition-colors hover:bg-[#e55a30]">
            Donate Now
          </Link>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-lg border border-primary/20 text-primary lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round">
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-x-0 top-0 z-50 bg-white shadow-2xl lg:hidden">
          <div className="max-h-[100vh] overflow-y-auto border-b border-[#E6EB82]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
              <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
                <Image src="/logo.png" alt="IRODOV Charitable Trust" width={72} height={72} className="h-16 w-auto object-contain" priority unoptimized />
                <div className="hidden flex-col leading-tight sm:flex">
                  <span className="font-serif text-xl font-bold whitespace-nowrap text-[#2D4B32]">IRODOV</span>
                  <span className="whitespace-nowrap text-[12px] font-medium tracking-widest text-[#4A6B52]">CHARITABLE TRUST</span>
                </div>
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="grid size-11 place-items-center rounded-lg border border-primary/20 text-primary"
                aria-label="Close menu"
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round">
                  <path d="M6 6 18 18" />
                  <path d="m18 6-12 12" />
                </svg>
              </button>
            </div>
            <div className="border-t border-[#E6EB82] px-5 py-4">
              <div className="grid gap-3">
                {drawerLinks.map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    className="rounded-lg border border-gray-100 px-4 py-3 text-[15px] font-medium text-[#2D4B32]"
                  >
                    {label}
                  </Link>
                ))}
              </div>
              <Link
                href="/donate"
                onClick={() => setOpen(false)}
                className="mt-5 block w-full rounded-lg bg-accent px-4 py-3 text-center font-black text-white whitespace-nowrap"
              >
                Donate Now
              </Link>
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
      <button type="button" onClick={() => setOpen((value) => !value)} className={navLinkClass}>
        {label}
      </button>
      {open && (
        <div className={`absolute top-full z-50 pt-2 ${align === "right" ? "right-0" : "left-0"}`}>
          <div className="rounded-lg bg-white p-3 shadow-xl ring-1 ring-primary/10">{children}</div>
        </div>
      )}
    </div>
  );
}

function MenuLink({ href, onClick, children }: { href: string; onClick: () => void; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block whitespace-nowrap rounded-md px-3 py-2 text-[15px] font-medium text-[#2D4B32] transition-colors hover:bg-surface-2 hover:text-[#FF6E41]"
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
