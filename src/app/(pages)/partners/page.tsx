import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2, Handshake, ImageIcon, Users } from "lucide-react";

const partners = [
  {
    name: "Partner One",
    type: "Academic Partner",
    description: "Supporting student outreach, academic collaboration, and regional impact.",
    image: "/partners/partner-1.png",
    href: "#",
  },
  {
    name: "Partner Two",
    type: "Technology Partner",
    description: "Helping strengthen digital systems, scale, and secure delivery.",
    image: "",
    href: "#",
  },
  {
    name: "Partner Three",
    type: "Scholarship Partner",
    description: "Enabling student opportunity through rewards, access, and recognition.",
    image: "/partners/partner-3.png",
    href: "#",
  },
  {
    name: "Partner Four",
    type: "Institutional Partner",
    description: "Working together to expand credibility, reach, and student trust.",
    image: "",
    href: "#",
  },
  {
    name: "Partner Five",
    type: "Outreach Partner",
    description: "Building awareness and engagement across communities and districts.",
    image: "/partners/partner-5.png",
    href: "#",
  },
  {
    name: "Partner Six",
    type: "Strategic Partner",
    description: "Contributing long-term support to scale meaningful educational initiatives.",
    image: "",
    href: "#",
  },
];

export default function PartnersPage() {
  return (
    <main className="bg-white text-[#2f1608]">
      <section className="relative overflow-hidden border-b border-[#e8732a]/10 bg-[linear-gradient(180deg,#fffaf7_0%,#ffffff_100%)]">
        <div className="absolute inset-0">
          <div className="absolute left-[-8%] top-[-10%] h-80 w-80 rounded-full bg-[#e8732a]/8 blur-3xl" />
          <div className="absolute right-[-10%] bottom-[-15%] h-96 w-96 rounded-full bg-[#e8732a]/6 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e8732a]/15 bg-[#fff4ed] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
              <Handshake className="h-4 w-4" />
              Our Partners
            </div>

            <h1 className="mt-5 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.96] tracking-[-0.04em] text-[#2f1608]">
              Building impact through trusted partnerships
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#2f1608]/72 sm:text-lg">
              We collaborate with institutions, technology enablers, outreach partners,
              and strategic allies who share our commitment to opportunity, trust,
              and educational progress.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-[24px] border border-[#e8732a]/10 bg-[#fffaf7] p-6">
            <Building2 className="h-8 w-8 text-[#e8732a]" />
            <h2 className="mt-4 text-xl font-bold text-[#2f1608]">Institutional Trust</h2>
            <p className="mt-3 text-sm leading-7 text-[#2f1608]/72">
              Partnerships that strengthen credibility, reach, and academic confidence.
            </p>
          </div>

          <div className="rounded-[24px] border border-[#e8732a]/10 bg-[#fffaf7] p-6">
            <Users className="h-8 w-8 text-[#e8732a]" />
            <h2 className="mt-4 text-xl font-bold text-[#2f1608]">Shared Mission</h2>
            <p className="mt-3 text-sm leading-7 text-[#2f1608]/72">
              Every collaboration is built around real student value and meaningful outcomes.
            </p>
          </div>

          <div className="rounded-[24px] border border-[#e8732a]/10 bg-[#fffaf7] p-6">
            <Handshake className="h-8 w-8 text-[#e8732a]" />
            <h2 className="mt-4 text-xl font-bold text-[#2f1608]">Long-Term Growth</h2>
            <p className="mt-3 text-sm leading-7 text-[#2f1608]/72">
              We work with partners who believe in long-term impact, not short-term visibility.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8732a]/10 bg-[#fffaf7]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-[-0.03em] text-[#2f1608]">
              Partner Directory
            </h2>
            <p className="mt-4 text-sm leading-8 text-[#2f1608]/72">
              Explore the organizations and collaborators contributing to our ecosystem.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {partners.map((partner) => (
              <Link
                key={partner.name}
                href={partner.href}
                className="group rounded-[24px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_14px_34px_rgba(232,115,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(232,115,42,0.10)]"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-[#e8732a]/10 bg-[#fffaf7]">
                    {partner.image ? (
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <ImageIcon className="h-7 w-7 text-[#e8732a]" />
                    )}
                  </div>

                  <div>
                    <p className="text-lg font-bold text-[#2f1608]">
                      {partner.name}
                    </p>
                    <p className="mt-1 text-sm font-medium text-[#e8732a]">
                      {partner.type}
                    </p>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-[#2f1608]/72">
                  {partner.description}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#e8732a]">
                  View Partner
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[32px] border border-[#e8732a]/12 bg-[#2f1608] px-6 py-10 text-white shadow-[0_24px_60px_rgba(47,22,8,0.18)] sm:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
              Partner with us
            </p>
            <h2 className="mt-3 text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.05] tracking-[-0.03em]">
              Let’s build meaningful impact together
            </h2>
            <p className="mt-4 text-sm leading-8 text-white/75 sm:text-base">
              If your organization shares our vision for education, innovation,
              and trust-driven growth, we would love to explore partnership opportunities.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e8732a] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#cf6322]"
              >
                Become a Partner
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl border border-white/12 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-[#e8732a]/40 hover:text-[#e8732a]"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}