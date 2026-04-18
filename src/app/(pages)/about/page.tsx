import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  GraduationCap,
  Smartphone,
  Trophy,
  Users,
  Target,
  Sparkles,
} from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Access for All",
    desc: "GPET is designed to support broad student participation with a clear, accessible, and easy-to-use digital journey.",
  },
  {
    icon: Trophy,
    title: "Merit with Meaning",
    desc: "The platform is built to recognize effort, encourage excellence, and create structured visibility for student achievement.",
  },
  {
    icon: ShieldCheck,
    title: "Trust by Design",
    desc: "Every experience is shaped around clarity, credibility, and a secure digital environment that students and families can trust.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    desc: "With a large share of users expected on budget smartphones, the platform experience is intentionally optimized for smaller screens.",
  },
];

const highlights = [
  {
    value: "20 Lakh+",
    label: "Target student reach",
  },
  {
    value: "30,000",
    label: "Reward-led narrative",
  },
  {
    value: "Mobile First",
    label: "Built for budget devices",
  },
  {
    value: "Uttar Pradesh",
    label: "State-wide student focus",
  },
];

const commitments = [
  "A guided and student-friendly registration experience.",
  "Clear eligibility journeys with less confusion and more confidence.",
  "A structured dashboard and assessment flow built for trust.",
  "A digital-first system that supports accessibility at scale.",
];

export default function AboutPage() {
  return (
    <main className="bg-[#F8F6F2] text-[#2B211C]">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8%] top-10 h-72 w-72 rounded-full bg-[#E8B15A]/10 blur-3xl" />
          <div className="absolute right-[-6%] top-0 h-80 w-80 rounded-full bg-[#D99032]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-14 pt-16 sm:px-6 lg:px-8 lg:pb-20 lg:pt-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center rounded-full border border-[#F0D9B2] bg-[#FFF3DF] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#B87422]">
              About GPET
            </div>

            <h1 className="mt-6 font-montserrat text-4xl font-bold tracking-[-0.04em] text-[#2B211C] sm:text-5xl lg:text-6xl">
              Building Access, Rewarding Merit, and Guiding Students Forward
            </h1>

            <p className="mt-6 max-w-2xl font-inter text-base leading-8 text-[#6C5648] sm:text-lg">
              The Gradorra Pre-Eligibility Test (GPET) is a scholarship and
              merit-focused digital initiative designed to help students move
              ahead with clarity, confidence, and opportunity. Built for scale,
              accessibility, and trust, GPET creates a guided experience for
              students across Uttar Pradesh through a structured, mobile-first,
              and recognition-driven journey.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#D99032] px-6 py-3 font-inter text-sm font-semibold text-white shadow-[0_14px_30px_rgba(217,144,50,0.25)] transition hover:-translate-y-0.5 hover:bg-[#C97B23]"
              >
                Register Now
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="#"
                className="inline-flex items-center gap-2 rounded-2xl border border-[#EADFD1] bg-white px-6 py-3 font-inter text-sm font-semibold text-[#7A5B45] transition hover:border-[#D99032]/40 hover:text-[#C97B23]"
              >
                Explore Eligibility
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-6">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[28px] border border-[#EADFD1] bg-white p-7 shadow-[0_18px_40px_rgba(90,63,34,0.05)] sm:p-8">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF1DA] text-[#D99032]">
              <GraduationCap className="h-7 w-7" />
            </div>
            <h2 className="font-montserrat text-2xl font-bold tracking-[-0.03em] text-[#2B211C]">
              Who We Are
            </h2>
            <p className="mt-4 font-inter text-[15px] leading-8 text-[#6C5648]">
              GPET is a student-focused initiative by Gradorra that combines
              merit recognition, digital accessibility, and a guided academic
              journey in one unified platform. It has been envisioned to support
              a large and diverse audience of students with a process that feels
              structured, approachable, and trustworthy.
            </p>
            <p className="mt-4 font-inter text-[15px] leading-8 text-[#6C5648]">
              Our goal is not just to create reach, but to build confidence.
              Every step of the platform is designed to reduce confusion,
              support mobile users, and help students move from awareness to
              participation with clarity.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#EADFD1] bg-[linear-gradient(180deg,#FFFDFB_0%,#F9F4EC_100%)] p-7 shadow-[0_18px_40px_rgba(90,63,34,0.05)] sm:p-8">
            <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF1DA] text-[#D99032]">
              <Target className="h-7 w-7" />
            </div>
            <h2 className="font-montserrat text-2xl font-bold tracking-[-0.03em] text-[#2B211C]">
              Our Mission
            </h2>
            <p className="mt-4 font-inter text-[15px] leading-8 text-[#6C5648]">
              Our mission is to create a more accessible, transparent, and
              student-friendly path for merit-based opportunity. GPET is built
              to help students from different backgrounds understand the
              journey, prepare with confidence, and participate in a digital
              environment grounded in fairness and credibility.
            </p>
            <div className="mt-6 rounded-2xl border border-[#F0D9B2] bg-[#FFF4E3] p-5">
              <p className="font-inter text-sm leading-7 text-[#8A6238]">
                We believe opportunity should feel understandable, merit should
                feel visible, and digital systems should feel trustworthy from
                the first interaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-10 lg:py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-inter text-sm font-semibold uppercase tracking-[0.18em] text-[#C8842C]">
              What GPET Stands For
            </p>
            <h2 className="mt-3 font-montserrat text-3xl font-bold tracking-[-0.03em] text-[#2B211C]">
              A student-first system built on clarity, merit, and trust
            </h2>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group rounded-[26px] border border-[#EADFD1] bg-white p-[1px] shadow-[0_18px_40px_rgba(90,63,34,0.05)] transition duration-300 hover:-translate-y-1.5"
                >
                  <div className="h-full rounded-[25px] bg-[linear-gradient(180deg,#ffffff_0%,#fdf8f1_100%)] p-6">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF1DA] text-[#D99032] shadow-sm">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-6 font-montserrat text-xl font-bold tracking-[-0.02em] text-[#2B211C]">
                      {item.title}
                    </h3>

                    <p className="mt-3 font-inter text-sm leading-7 text-[#6C5648]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="pb-10 lg:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[28px] border border-[#EADFD1] bg-white p-7 shadow-[0_18px_40px_rgba(90,63,34,0.05)] sm:p-8">
              <p className="font-inter text-sm font-semibold uppercase tracking-[0.18em] text-[#C8842C]">
                Why GPET Matters
              </p>
              <h2 className="mt-3 font-montserrat text-3xl font-bold tracking-[-0.03em] text-[#2B211C]">
                Reducing confusion and making opportunity easier to approach
              </h2>

              <p className="mt-5 font-inter text-[15px] leading-8 text-[#6C5648]">
                Many students face uncertainty while trying to understand
                opportunities, eligibility conditions, and digital academic
                processes. GPET aims to reduce that complexity by creating a
                journey that is easier to navigate, easier to trust, and easier
                to complete.
              </p>

              <p className="mt-4 font-inter text-[15px] leading-8 text-[#6C5648]">
                By combining digital reach with clear guidance, GPET helps
                students spend less time dealing with process confusion and more
                time focusing on preparation, participation, and progress.
              </p>
            </div>

            <div className="rounded-[28px] border border-[#EADFD1] bg-[linear-gradient(180deg,#FFFDFB_0%,#F9F4EC_100%)] p-7 shadow-[0_18px_40px_rgba(90,63,34,0.05)] sm:p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFF1DA] text-[#D99032]">
                <Sparkles className="h-7 w-7" />
              </div>
              <h3 className="mt-6 font-montserrat text-2xl font-bold tracking-[-0.03em] text-[#2B211C]">
                Our Student Commitment
              </h3>

              <ul className="mt-5 space-y-4">
                {commitments.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[#D99032]" />
                    <p className="font-inter text-sm leading-7 text-[#6C5648]">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-10 lg:pb-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[30px] border border-[#EADFD1] bg-[#FFFDF9] p-6 shadow-[0_20px_45px_rgba(90,63,34,0.05)] sm:p-8 lg:p-10">
            <div className="max-w-2xl">
              <p className="font-inter text-sm font-semibold uppercase tracking-[0.18em] text-[#C8842C]">
                Built for Scale
              </p>
              <h2 className="mt-3 font-montserrat text-3xl font-bold tracking-[-0.03em] text-[#2B211C]">
                Designed to serve a large student audience with confidence
              </h2>
              <p className="mt-4 font-inter text-[15px] leading-8 text-[#6C5648]">
                GPET has been envisioned as a large-scale digital initiative for
                students across Uttar Pradesh, with a strong focus on
                accessibility, performance, and mobile-first participation.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-[#F0E4D5] bg-white p-6"
                >
                  <p className="font-montserrat text-3xl font-bold tracking-[-0.04em] text-[#C97B23]">
                    {item.value}
                  </p>
                  <p className="mt-2 font-inter text-sm text-[#6C5648]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology & trust */}
      <section className="pb-10 lg:pb-14">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-[28px] border border-[#EADFD1] bg-white p-7 shadow-[0_18px_40px_rgba(90,63,34,0.05)] sm:p-8">
            <h2 className="font-montserrat text-2xl font-bold tracking-[-0.03em] text-[#2B211C]">
              Technology with Trust
            </h2>
            <p className="mt-4 font-inter text-[15px] leading-8 text-[#6C5648]">
              GPET is not only about access. It is also about accountability,
              reliability, and confidence in the student experience. The
              platform is designed to communicate trust through structured
              digital flows, guided progress, and secure interaction patterns.
            </p>
            <p className="mt-4 font-inter text-[15px] leading-8 text-[#6C5648]">
              From registration and dashboard states to assessment experiences,
              every interface decision is intended to support clarity and
              credibility across the journey.
            </p>
          </div>

          <div className="rounded-[28px] border border-[#EADFD1] bg-[linear-gradient(180deg,#FFFDFB_0%,#F9F4EC_100%)] p-7 shadow-[0_18px_40px_rgba(90,63,34,0.05)] sm:p-8">
            <h2 className="font-montserrat text-2xl font-bold tracking-[-0.03em] text-[#2B211C]">
              Looking Ahead
            </h2>
            <p className="mt-4 font-inter text-[15px] leading-8 text-[#6C5648]">
              We envision GPET as more than a test interface. We see it as a
              trusted student platform that encourages aspiration, rewards
              effort, and helps learners take their next step with greater
              confidence.
            </p>
            <p className="mt-4 font-inter text-[15px] leading-8 text-[#6C5648]">
              Our long-term vision is to make merit-oriented digital experiences
              more understandable, more accessible, and more student-centered at
              scale.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 pt-2 lg:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-[32px] border border-[#EADFD1] bg-[linear-gradient(135deg,#FFF8EF_0%,#FFFDFB_60%,#F8EFE1_100%)] p-8 shadow-[0_24px_60px_rgba(90,63,34,0.06)] sm:p-10 lg:p-12">
            <div className="max-w-3xl">
              <p className="font-inter text-sm font-semibold uppercase tracking-[0.18em] text-[#C8842C]">
                Take the Next Step
              </p>
              <h2 className="mt-3 font-montserrat text-3xl font-bold tracking-[-0.03em] text-[#2B211C] sm:text-4xl">
                Move forward with clarity, trust, and purpose
              </h2>
              <p className="mt-4 font-inter text-[15px] leading-8 text-[#6C5648] sm:text-base">
                Whether you are exploring eligibility, preparing to register, or
                learning more about the initiative, GPET is designed to help you
                move forward with confidence.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#D99032] px-6 py-3 font-inter text-sm font-semibold text-white shadow-[0_14px_30px_rgba(217,144,50,0.25)] transition hover:-translate-y-0.5 hover:bg-[#C97B23]"
                >
                  Register Now
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 rounded-2xl border border-[#EADFD1] bg-white px-6 py-3 font-inter text-sm font-semibold text-[#7A5B45] transition hover:border-[#D99032]/40 hover:text-[#C97B23]"
                >
                  Check Eligibility
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}