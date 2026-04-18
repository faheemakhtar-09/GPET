import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About GPET", href: "/about" },
  { label: "Scholarships", href: "/scholarship" },
  { label: "Eligibility", href: "/eligibility" },
  { label: "Partners", href: "/partners" },
  { label: "Our Mission Partners", href: "our-mission-partners" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#e8732a]/10 bg-white text-[#2f1608]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-6%] top-0 h-72 w-72 rounded-full bg-[#e8732a]/8 blur-3xl" />
        <div className="absolute right-[-8%] bottom-0 h-80 w-80 rounded-full bg-[#e8732a]/6 blur-3xl" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e8732a]/40 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid gap-10 border-b border-[#e8732a]/10 pb-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-4">
              <div className="rounded-2xl border border-[#e8732a]/12 bg-[#fffaf7] p-3 shadow-[0_10px_25px_rgba(232,115,42,0.08)]">
                <Image
                  src="/images/gradorra-logo-removebg-preview.png"
                  alt="GPET crest"
                  width={54}
                  height={54}
                  className="h-12 w-12 object-contain"
                />
              </div>

              <div>
                <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e8732a]">
                  GPET 2026
                </p>
                <h3 className="mt-1 font-montserrat text-2xl font-bold tracking-[-0.03em] text-[#2f1608]">
                  Gradorra Pre-Eligibility Test
                </h3>
              </div>
            </Link>

            <p className="mt-6 max-w-md font-inter text-sm leading-7 text-[#2f1608]/70">
              A scholarship and merit-driven digital initiative designed to
              guide students across Uttar Pradesh through a trusted, accessible,
              and mobile-first eligibility journey.
            </p>

            <div className="mt-6 inline-flex items-center rounded-full border border-[#e8732a]/15 bg-[#fff4ed] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e8732a]">
              Trusted • Merit-Based • Digital-First
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-montserrat text-lg font-semibold text-[#2f1608]">
              Quick Links
            </h4>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center gap-2 font-inter text-sm text-[#2f1608]/70 transition hover:text-[#e8732a]"
                  >
                    <ChevronRight className="h-4 w-4 text-[#e8732a] transition group-hover:translate-x-0.5" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-montserrat text-lg font-semibold text-[#2f1608]">
              Contact & Support
            </h4>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-[#e8732a]/10 bg-[#fffaf7] p-4 shadow-[0_10px_24px_rgba(232,115,42,0.06)]">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff4ed] text-[#e8732a]">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-inter text-sm font-medium text-[#2f1608]">
                      Email Support
                    </p>
                    <a
                      href="mailto:support@gpet2026.in"
                      className="mt-1 inline-block font-inter text-sm text-[#2f1608]/70 transition hover:text-[#e8732a]"
                    >
                      support@gpet2026.in
                    </a>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#e8732a]/10 bg-[#fffaf7] p-4 shadow-[0_10px_24px_rgba(232,115,42,0.06)]">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff4ed] text-[#e8732a]">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-inter text-sm font-medium text-[#2f1608]">
                      Helpline
                    </p>
                    <p className="mt-1 font-inter text-sm text-[#2f1608]/70">
                      +91 00000 00000
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[#e8732a]/10 bg-[#fffaf7] p-4 shadow-[0_10px_24px_rgba(232,115,42,0.06)]">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl bg-[#fff4ed] text-[#e8732a]">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-inter text-sm font-medium text-[#2f1608]">
                      Regional Reach
                    </p>
                    <p className="mt-1 font-inter text-sm text-[#2f1608]/70">
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-[#2f1608]/60 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-inter">
            © 2026 Gradorra Private Limited | All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5 font-inter">
            {/* <Link href="#" className="transition hover:text-[#e8732a]">
              Privacy Policy
            </Link> */}
            <Link
              href="/terms-and-conditions"
              className="transition hover:text-[#e8732a]"
            >
              Terms & Conditions
            </Link>
            {/* <Link href="#" className="transition hover:text-[#e8732a]">
              Help Center
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
