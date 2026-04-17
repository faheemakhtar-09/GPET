import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#" },
  { label: "About GPET", href: "#" },
  { label: "Rewards 30K", href: "#" },
  { label: "Eligibility", href: "#" },
  { label: "Partners", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#EADFD1] bg-[linear-gradient(180deg,#FFFDFB_0%,#F9F4EC_100%)] text-[#2B211C]">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6%] top-0 h-72 w-72 rounded-full bg-[#E8B15A]/10 blur-3xl" />
        <div className="absolute right-[-8%] bottom-0 h-80 w-80 rounded-full bg-[#D99032]/8 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#D99032]/50 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid gap-10 border-b border-[#EADFD1] pb-10 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-4">
              <div className="rounded-2xl border border-[#EADFD1] bg-white/80 p-3 shadow-[0_10px_25px_rgba(120,84,47,0.06)] backdrop-blur-sm">
                <Image
                  src="/images/gradorra-logo-removebg-preview.png"
                  alt="GPET crest"
                  width={54}
                  height={54}
                  className="h-12 w-12 object-contain"
                />
              </div>

              <div>
                <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C8842C]">
                  GPET 2026
                </p>
                <h3 className="mt-1 font-montserrat text-2xl font-bold tracking-[-0.03em] text-[#2B211C]">
                  Gradorra Pre-Eligibility Test
                </h3>
              </div>
            </Link>

            <p className="mt-6 max-w-md font-inter text-sm leading-7 text-[#6C5648]">
              A scholarship and merit-driven digital initiative designed to guide
              students across Uttar Pradesh through a trusted, accessible, and
              mobile-first eligibility journey.
            </p>

            <div className="mt-6 inline-flex items-center rounded-full border border-[#F0D9B2] bg-[#FFF3DF] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B87422]">
              Trusted • Merit-Based • Digital-First
            </div>
          </div>

          {/* quick links */}
          <div className="lg:col-span-3">
            <h4 className="font-montserrat text-lg font-semibold text-[#2B211C]">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 font-inter text-sm text-[#6C5648] transition hover:text-[#C97B23]"
                  >
                    <ChevronRight className="h-4 w-4 text-[#D99032] transition group-hover:translate-x-0.5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="lg:col-span-4">
            <h4 className="font-montserrat text-lg font-semibold text-[#2B211C]">
              Contact & Support
            </h4>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-[#EADFD1] bg-white/75 p-4 shadow-[0_10px_24px_rgba(111,76,41,0.05)] backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF1DA] text-[#D99032]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-inter text-sm font-medium text-[#2B211C]">
                      Email Support
                    </p>
                    <a
                      href="mailto:support@gpet2026.in"
                      className="mt-1 inline-block font-inter text-sm text-[#6C5648] transition hover:text-[#C97B23]"
                    >
                      support@gpet2026.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#EADFD1] bg-white/75 p-4 shadow-[0_10px_24px_rgba(111,76,41,0.05)] backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF1DA] text-[#D99032]">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-inter text-sm font-medium text-[#2B211C]">
                      Helpline
                    </p>
                    <p className="mt-1 font-inter text-sm text-[#6C5648]">
                      +91 00000 00000
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#EADFD1] bg-white/75 p-4 shadow-[0_10px_24px_rgba(111,76,41,0.05)] backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#FFF1DA] text-[#D99032]">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-inter text-sm font-medium text-[#2B211C]">
                      Regional Reach
                    </p>
                    <p className="mt-1 font-inter text-sm text-[#6C5648]">
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col gap-4 pt-6 text-sm text-[#7A6454] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-inter">
            © 2026 GPET by Gradorra. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5 font-inter">
            <Link href="#" className="transition hover:text-[#C97B23]">
              Privacy Policy
            </Link>
            <Link href="#" className="transition hover:text-[#C97B23]">
              Terms & Conditions
            </Link>
            <Link href="#" className="transition hover:text-[#C97B23]">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}