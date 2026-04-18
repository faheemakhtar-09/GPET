export default function AboutUsPage() {
  return (
    <main className="bg-white text-[#2f1608]">
      <section className="relative overflow-hidden border-b border-[#e8732a]/10 bg-[linear-gradient(180deg,#fffaf7_0%,#ffffff_100%)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8%] top-[-10%] h-80 w-80 rounded-full bg-[#e8732a]/8 blur-3xl" />
          <div className="absolute right-[-10%] bottom-[-15%] h-96 w-96 rounded-full bg-[#e8732a]/6 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="inline-flex rounded-full border border-[#e8732a]/15 bg-[#fff4ed] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
              About Us
            </div>

            <h1 className="mt-5 font-montserrat text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.96] tracking-[-0.04em] text-[#2f1608]">
              GRADORRA:
              <span className="block text-[#e8732a]">
                Redefining Merit through Innovation
              </span>
            </h1>

            <p className="mt-6 max-w-3xl font-inter text-base leading-8 text-[#2f1608]/72 sm:text-lg">
              A future-ready education ecosystem built at the intersection of
              Ethical AI, educational innovation, and secure digital trust. [web:320]
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <article className="rounded-[28px] border border-[#e8732a]/10 bg-[#fffaf7] p-6 shadow-[0_16px_40px_rgba(232,115,42,0.06)] lg:col-span-7">
            <div className="inline-flex rounded-full border border-[#e8732a]/15 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
              The Organization
            </div>

            <h2 className="mt-5 font-montserrat text-3xl font-bold tracking-[-0.03em] text-[#2f1608]">
              Gradorra Private Limited
            </h2>

            <p className="mt-4 font-inter text-sm leading-8 text-[#2f1608]/75">
              Gradorra Private Limited is a premier technology firm operating at
              the intersection of Ethical AI and Educational Innovation.
              Headquartered in Greater Noida West, we build future-ready
              ecosystems that elevate education to global standards.
            </p>

            <div className="mt-8 rounded-[24px] border border-[#e8732a]/12 bg-white p-5">
              <h3 className="font-montserrat text-xl font-bold text-[#e8732a]">
                Data Sovereignty
              </h3>
              <p className="mt-3 font-inter text-sm leading-8 text-[#2f1608]/75">
                Our core principle is Data Sovereignty. We treat every student’s
                data as an "Amanat" (Sacred Trust), ensuring it is never
                monetized or shared. Our mission is to make technology
                transparent, secure, and accessible to everyone.
              </p>
            </div>
          </article>

          <aside className="rounded-[28px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_16px_40px_rgba(232,115,42,0.05)] lg:col-span-5">
            <h2 className="font-montserrat text-2xl font-bold text-[#2f1608]">
              What Defines Gradorra
            </h2>

            <div className="mt-5 space-y-4">
              <div className="rounded-2xl border border-[#e8732a]/10 bg-[#fffaf7] p-4">
                <p className="font-inter text-sm font-semibold text-[#e8732a]">
                  Ethical AI
                </p>
                <p className="mt-2 font-inter text-sm leading-7 text-[#2f1608]/72">
                  Technology that supports merit with transparency, fairness,
                  and responsible digital systems.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8732a]/10 bg-[#fffaf7] p-4">
                <p className="font-inter text-sm font-semibold text-[#e8732a]">
                  Student Trust
                </p>
                <p className="mt-2 font-inter text-sm leading-7 text-[#2f1608]/72">
                  Every product experience is designed around security,
                  accessibility, and long-term student value.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8732a]/10 bg-[#fffaf7] p-4">
                <p className="font-inter text-sm font-semibold text-[#e8732a]">
                  Future-Ready Ecosystem
                </p>
                <p className="mt-2 font-inter text-sm leading-7 text-[#2f1608]/72">
                  We aim to build digital education infrastructure that scales
                  with opportunity and ambition.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-y border-[#e8732a]/10 bg-[#fffaf7]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-[#e8732a]/15 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
              The Flagship: GPET 2026
            </div>

            <h2 className="mt-5 font-montserrat text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#2f1608]">
              India’s first Mobile AI-Proctored Scholarship Initiative
            </h2>

            <p className="mt-5 max-w-3xl font-inter text-base leading-8 text-[#2f1608]/75">
              The Gradorra Pre-Eligibility Test (GPET) is designed to identify
              talent across all 75 districts of Uttar Pradesh and provide
              students with a larger, more meaningful platform for recognition
              and opportunity.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-[24px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_14px_34px_rgba(232,115,42,0.05)]">
              <h3 className="font-montserrat text-xl font-bold text-[#2f1608]">
                Assessment Model
              </h3>
              <p className="mt-4 font-inter text-sm leading-8 text-[#2f1608]/75">
                A perfect balance of 50% NCERT (Academic Foundation) and 50%
                Logical Reasoning (Problem Solving & IQ).
              </p>
            </div>

            <div className="rounded-[24px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_14px_34px_rgba(232,115,42,0.05)]">
              <h3 className="font-montserrat text-xl font-bold text-[#2f1608]">
                Merit Rewards
              </h3>
              <p className="mt-4 font-inter text-sm leading-8 text-[#2f1608]/75">
                State, Zonal, and District toppers are honored with premium
                gadgets including laptops, tablets, smartphones, smartwatches,
                and higher education scholarships.
              </p>
            </div>

            <div className="rounded-[24px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_14px_34px_rgba(232,115,42,0.05)]">
              <h3 className="font-montserrat text-xl font-bold text-[#2f1608]">
                AI Analytics
              </h3>
              <p className="mt-4 font-inter text-sm leading-8 text-[#2f1608]/75">
                Every student receives detailed percentile reports and AI-driven
                career matching roadmaps based on individual performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <article className="rounded-[28px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_16px_40px_rgba(232,115,42,0.05)] lg:col-span-8">
            <div className="inline-flex rounded-full border border-[#e8732a]/15 bg-[#fff4ed] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
              Leadership
            </div>

            <h2 className="mt-5 font-montserrat text-3xl font-bold tracking-[-0.03em] text-[#2f1608]">
              Mr. Faisal Khan
            </h2>
            <p className="mt-2 font-inter text-sm font-semibold uppercase tracking-[0.14em] text-[#e8732a]">
              Founder & CEO, Gradorra Private Limited
            </p>

            <p className="mt-5 font-inter text-sm leading-8 text-[#2f1608]/75">
              Mr. Faisal Khan is the Founder and the driving force behind the KD
              Ventures Group. As a visionary entrepreneur, his mission is to
              integrate "Quiet Luxury" and "Digital Transparency" into the
              traditional education system.
            </p>

            <p className="mt-4 font-inter text-sm leading-8 text-[#2f1608]/75">
              Under his leadership, Gradorra is moving toward an ecosystem where
              a lack of resources will never stand in the way of one's dreams.
              His vision is to take GPET to a Pan-India level by 2029 and
              provide millions of students with a secure and bright digital
              future.
            </p>

            <blockquote className="mt-6 rounded-[24px] border border-[#e8732a]/12 bg-[#fffaf7] p-6">
              <p className="font-montserrat text-xl font-semibold leading-8 text-[#2f1608]">
                “Merit is the only currency of the future. At Gradorra, we are
                building the vaults to protect and grow it.”
              </p>
              <footer className="mt-3 font-inter text-sm font-medium text-[#e8732a]">
                — Faisal Khan
              </footer>
            </blockquote>
          </article>

          <aside className="rounded-[28px] border border-[#e8732a]/10 bg-[#fffaf7] p-6 shadow-[0_16px_40px_rgba(232,115,42,0.05)] lg:col-span-4">
            <h3 className="font-montserrat text-2xl font-bold tracking-[-0.03em] text-[#2f1608]">
              Building trust at scale
            </h3>

            <p className="mt-4 font-inter text-sm leading-8 text-[#2f1608]/75">
              Gradorra combines technology, merit, and secure digital systems to
              create a student-first ecosystem designed for long-term impact. [web:320]
            </p>

            <div className="mt-6 rounded-2xl border border-[#e8732a]/12 bg-white p-4">
              <p className="font-inter text-sm font-medium text-[#2f1608]">
                An initiative by Faisal Khan.
              </p>
              <p className="mt-2 font-inter text-sm text-[#2f1608]/65">
                © 2026 Gradorra Private Limited | All Rights Reserved.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}