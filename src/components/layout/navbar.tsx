"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import TranslateSwitcher from "../common/translate-switcher";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About GPET", href: "/about" },
  { label: "Scholarships", href: "/scholarship" },
  { label: "Eligibility", href: "/eligibility" },
  { label: "Partners", href: "/partners" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#E8732A]/12 bg-white/95 backdrop-blur-md shadow-[0_10px_30px_rgba(36,76,154,0.06)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/gradorra-logo-removebg-preview.png"
            alt="Gradorra logo"
            width={0}
            height={0}
            sizes="100vw"
            priority
            className="h-[80px] w-auto object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`group relative font-inter text-sm font-medium tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-[#E8732A]"
                    : "text-[#244C9A] hover:text-[#E8732A]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-[#E8732A] transition-all duration-200 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-xl border border-[#E8732A]/20 bg-white px-5 py-2.5 font-inter text-sm font-bold text-[#244C9A] transition duration-200 hover:bg-[#FFF4ED] hover:text-[#E8732A]">
            Login
          </button>

          <button
            onClick={() => router.push("/register")}
            className="rounded-xl bg-[#E8732A] px-5 py-2.5 font-inter text-sm font-bold text-white shadow-[0_10px_24px_rgba(232,115,42,0.26)] transition duration-200 hover:scale-[1.03] hover:bg-[#D9651F]"
          >
            Register Now
          </button>

          <TranslateSwitcher />
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E8732A]/15 bg-white text-[#244C9A] transition hover:border-[#E8732A]/35 hover:bg-[#FFF4ED] hover:text-[#E8732A] md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-[#E8732A]/10 bg-white/98 backdrop-blur-xl transition-all duration-300 md:hidden ${
          open ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-4 py-5">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`border-b border-[#E8732A]/10 py-4 font-inter text-sm font-medium tracking-wide transition ${
                  isActive
                    ? "text-[#E8732A]"
                    : "text-[#244C9A] hover:text-[#E8732A]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <div className="mt-4 border-t border-[#E8732A]/10 pt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#244C9A]/70">
              Language
            </p>
            <div className="inline-flex">
              <TranslateSwitcher />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-3">
            <button className="rounded-xl border border-[#E8732A]/20 bg-white px-5 py-3 font-inter text-sm font-bold text-[#244C9A] transition duration-200 hover:bg-[#FFF4ED] hover:text-[#E8732A]">
              Login
            </button>

            <button
              onClick={() => {
                setOpen(false);
                router.push("/register");
              }}
              className="rounded-xl bg-[#E8732A] px-5 py-3 font-inter text-sm font-bold text-white shadow-[0_10px_24px_rgba(232,115,42,0.26)] transition duration-200 hover:bg-[#D9651F]"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
