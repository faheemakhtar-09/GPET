import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#002366] text-white">
      {/* soft background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-0 h-64 w-64 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-14 sm:px-6 lg:px-8 lg:pt-16">
        {/* top grid */}
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-12">
          {/* brand */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/gradorra-logo.png"
                alt="Gradorra"
                width={150}
                height={42}
                className="h-9 w-auto object-contain"
              />
              <div className="h-9 w-px bg-white/15" />
              <Image
                src="/images/gpet-crest.png"
                alt="GPET crest"
                width={42}
                height={42}
                className="h-10 w-10 rounded-full object-contain"
              />
            </Link>

            <h3 className="mt-6 font-montserrat text-2xl font-semibold tracking-[-0.03em] text-white">
              Gradorra GPET 2026
            </h3>

            <p className="mt-4 max-w-md font-inter text-sm leading-7 text-white/72">
              A scholarship and merit-driven digital initiative built to guide
              students across Uttar Pradesh through a trusted, mobile-first
              eligibility journey.
            </p>

            <div className="mt-6 inline-flex items-center rounded-full border border-[#D4AF37]/25 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#D4AF37]">
              Quiet Luxury • High-Tech Authority
            </div>
          </div>

          {/* quick links */}
          <div className="lg:col-span-3">
            <h4 className="font-montserrat text-lg font-semibold text-white">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {[
                "Home",
                "About GPET",
                "Rewards 30K",
                "Eligibility",
                "Partners",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="group inline-flex items-center gap-2 font-inter text-sm text-white/72 transition hover:text-white"
                  >
                    <ChevronRight className="h-4 w-4 text-[#D4AF37] transition group-hover:translate-x-0.5" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="lg:col-span-4">
            <h4 className="font-montserrat text-lg font-semibold text-white">
              Contact & Support
            </h4>

            <div className="mt-5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#D4AF37]">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-inter text-sm font-medium text-white">
                    Email Support
                  </p>
                  <p className="mt-1 font-inter text-sm text-white/70">
                    support@gpet2026.in
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#D4AF37]">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-inter text-sm font-medium text-white">
                    Helpline
                  </p>
                  <p className="mt-1 font-inter text-sm text-white/70">
                    +91 00000 00000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#D4AF37]">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="font-inter text-sm font-medium text-white">
                    Regional Reach
                  </p>
                  <p className="mt-1 font-inter text-sm text-white/70">
                    Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="flex flex-col gap-4 pt-6 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-inter">
            © 2026 Gradorra GPET. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5 font-inter">
            <Link href="#" className="transition hover:text-[#D4AF37]">
              Privacy Policy
            </Link>
            <Link href="#" className="transition hover:text-[#D4AF37]">
              Terms & Conditions
            </Link>
            <Link href="#" className="transition hover:text-[#D4AF37]">
              Help Center
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
