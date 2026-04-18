import Link from "next/link";
import { ArrowRight, Crown, Rocket, Landmark, Handshake } from "lucide-react";

const partnerTiers = [
  {
    title: "Title Partner",
    subtitle: "The Face of Excellence",
    description:
      "The highest level of association. The Title Partner’s identity is seamlessly integrated into the GPET brand, gaining maximum visibility across all 75 districts and every digital touchpoint.",
    icon: Crown,
    accent: "from-[#e8732a] to-[#f39a61]",
  },
  {
    title: "Co-Powered By",
    subtitle: "Driving the Mission Forward",
    description:
      "Strategic pillars of the GPET ecosystem. These partners fuel the technological and infrastructural reach required to impact millions of students.",
    icon: Rocket,
    accent: "from-[#2f1608] to-[#6d3c1d]",
  },
  {
    title: "Founding Partners",
    subtitle: "The Architects of Change",
    description:
      "An exclusive tier for organizations that aligned with the vision of Gradorra from its inception. They represent the legacy and the ethical foundation of the movement.",
    icon: Landmark,
    accent: "from-[#c85d1c] to-[#e8732a]",
  },
];

function SectionPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#e8732a]/15 bg-[#fff4ed] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
      {children}
    </div>
  );
}

export default function PartnershipsPage() {
  return (
    <main className="bg-[#fffdfb] text-[#2f1608]">
      <section className="relative overflow-hidden border-b border-[#e8732a]/10 bg-[radial-gradient(circle_at_top_left,rgba(232,115,42,0.14),transparent_30%),linear-gradient(180deg,#fff8f3_0%,#fffdfb_55%,#ffffff_100%)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8%] top-[-10%] h-72 w-72 rounded-full bg-[#e8732a]/10 blur-3xl" />
          <div className="absolute right-[-10%] top-[10%] h-80 w-80 rounded-full bg-[#2f1608]/[0.05] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-end gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="max-w-4xl">
              <SectionPill>
                <Handshake className="h-4 w-4" />
                Strategic Partnerships & Alliances
              </SectionPill>

              <h1 className="mt-5 text-[clamp(2.5rem,6vw,5.4rem)] font-bold leading-[0.95] tracking-[-0.05em] text-[#2f1608]">
                Building the alliance
                <span className="block text-[#e8732a]">behind GPET 2026</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[#2f1608]/72 sm:text-lg">
                GPET 2026 is supported by a network of visionary organizations
                committed to identifying and empowering the brightest minds
                across Uttar Pradesh.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/60 bg-white/80 p-6 shadow-[0_20px_60px_rgba(47,22,8,0.08)] backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
                Partnership Vision
              </p>
              <p className="mt-4 text-2xl font-bold leading-tight text-[#2f1608]">
                Three tiers. One mission. Statewide impact.
              </p>
              <p className="mt-4 text-sm leading-7 text-[#2f1608]/68">
                Each association level is designed to reflect visibility, strategic
                contribution, and long-term commitment to educational excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-3">
          {partnerTiers.map((tier, index) => {
            const Icon = tier.icon;

            return (
              <article
                key={tier.title}
                className="group relative overflow-hidden rounded-[30px] border border-[#e8732a]/10 bg-white shadow-[0_18px_45px_rgba(232,115,42,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(232,115,42,0.1)]"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${tier.accent}`} />

                <div className="p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#fff4ed] text-[#e8732a]">
                      <Icon className="h-7 w-7" />
                    </div>

                    <div className="rounded-full border border-[#e8732a]/10 bg-[#fffaf7] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2f1608]/55">
                      Tier {index + 1}
                    </div>
                  </div>

                  <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
                    {tier.title}
                  </p>

                  <h2 className="mt-2 text-[1.7rem] font-bold leading-[1.08] tracking-[-0.03em] text-[#2f1608]">
                    {tier.subtitle}
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-[#2f1608]/72 sm:text-[15px]">
                    {tier.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        <div className="relative overflow-hidden rounded-[34px] bg-[#2f1608] px-6 py-8 text-white shadow-[0_28px_70px_rgba(47,22,8,0.2)] sm:px-8 lg:px-10 lg:py-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,115,42,0.22),transparent_30%)]" />

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.7fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f0a26d]">
                Collaborate with GPET
              </p>
              <h2 className="mt-3 text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.04] tracking-[-0.04em]">
                Partner in a mission that reaches every district
              </h2>
              <p className="mt-4 text-sm leading-8 text-white/76 sm:text-base">
                Join the ecosystem powering recognition, reach, and opportunity
                for students across Uttar Pradesh through GPET 2026.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#e8732a] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#cf6322]"
              >
                Become a Partner
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-white/10"
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