"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", href: "#" },
  { label: "About GPET", href: "#" },
  { label: "Rewards 30K", href: "#" },
  { label: "Eligibility", href: "#" },
  { label: "Partners", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#D4AF37]/20 bg-[#002366]/70 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.18)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* BRAND */}
        <a href="#" className="flex items-center text-white">
          <div className="relative rounded-full border border-[#D4AF37]/25 bg-white/[0.06] p-1 backdrop-blur-md shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_6px_18px_rgba(0,0,0,0.14)]">
            <div className="rounded-full bg-white/95 px-2.5 py-1 ring-1 ring-[#D4AF37]/10">
              <Image
                src="/images/gpet-crest.png"
                alt="GPET crest"
                width={120}
                height={36}
                priority
                className="h-7 w-auto object-contain sm:h-8"
              />
            </div>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative font-inter text-sm font-medium tracking-wide text-white/90 transition-colors duration-200 hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <button className="rounded-lg bg-[#D4AF37] px-5 py-2.5 font-inter text-sm font-bold text-white shadow-[0_6px_20px_rgba(212,175,55,0.28)] transition duration-200 hover:scale-[1.03] hover:bg-[#c9a12d]">
            Register / Login
          </button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white transition hover:border-[#D4AF37]/40 hover:bg-white/10 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-[#001a4d]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-4 py-5">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-4 font-inter text-sm font-medium tracking-wide text-white/90 transition hover:text-[#D4AF37]"
            >
              {item.label}
            </a>
          ))}

          <button className="mt-5 rounded-lg bg-[#D4AF37] px-5 py-3 font-inter text-sm font-bold text-white shadow-[0_6px_20px_rgba(212,175,55,0.28)]">
            Register / Login
          </button>
        </div>
      </div>
    </header>
  );
}
