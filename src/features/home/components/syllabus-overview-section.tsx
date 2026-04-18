import { BookOpen, BrainCircuit, Calculator, FlaskConical, Landmark, Target } from "lucide-react";

export default function SyllabusOverviewSection() {
  return (
    <section className="relative border-y border-[#e8732a]/10 bg-[#fffaf7]">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-[8%] top-10 h-40 w-40 rounded-full bg-[#e8732a]/6 blur-3xl" />
        <div className="absolute right-[10%] bottom-10 h-52 w-52 rounded-full bg-[#e8732a]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#e8732a]/15 bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
            <BookOpen className="h-4 w-4" />
            GPET 2026 Syllabus Overview
          </div>

          <h2 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#2f1608]">
            A balanced exam built for merit, logic, and academic strength
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-[#2f1608]/75">
            GPET 2026 includes <strong>100 total questions</strong> with
            <strong> +4 marks for every correct answer</strong> and
            <strong> -1 mark for every wrong answer</strong>. The structure is
            designed to equally measure reasoning ability and academic foundation.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[28px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_16px_40px_rgba(232,115,42,0.06)] sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff4ed] text-[#e8732a]">
                <BrainCircuit className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#e8732a]">
                  Part 1
                </p>
                <h3 className="text-2xl font-bold text-[#2f1608]">
                  Logical Mastery
                </h3>
              </div>
            </div>

            <p className="mt-5 text-sm leading-8 text-[#2f1608]/75">
              <strong>50 Questions</strong> focused on thinking ability,
              problem-solving, and practical intelligence.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-[#e8732a]/10 bg-[#fffaf7] p-4">
                <div className="flex items-center gap-3">
                  <Target className="h-5 w-5 text-[#e8732a]" />
                  <p className="text-sm font-semibold text-[#2f1608]">
                    Logic & IQ
                  </p>
                </div>
                <p className="mt-2 text-sm leading-7 text-[#2f1608]/72">
                  Brain teasers, puzzles, and series completion.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8732a]/10 bg-[#fffaf7] p-4">
                <div className="flex items-center gap-3">
                  <Calculator className="h-5 w-5 text-[#e8732a]" />
                  <p className="text-sm font-semibold text-[#2f1608]">
                    Aptitude
                  </p>
                </div>
                <p className="mt-2 text-sm leading-7 text-[#2f1608]/72">
                  Essential math skills for competitive success.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8732a]/10 bg-[#fffaf7] p-4">
                <div className="flex items-center gap-3">
                  <BrainCircuit className="h-5 w-5 text-[#e8732a]" />
                  <p className="text-sm font-semibold text-[#2f1608]">
                    Analytical
                  </p>
                </div>
                <p className="mt-2 text-sm leading-7 text-[#2f1608]/72">
                  Critical thinking and data interpretation.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_16px_40px_rgba(232,115,42,0.06)] sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#fff4ed] text-[#e8732a]">
                <BookOpen className="h-7 w-7" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#e8732a]">
                  Part 2
                </p>
                <h3 className="text-2xl font-bold text-[#2f1608]">
                  Academic Core
                </h3>
              </div>
            </div>

            <p className="mt-5 text-sm leading-8 text-[#2f1608]/75">
              <strong>50 Questions</strong> based on NCERT academic subjects
              across major learning streams.
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-[#e8732a]/10 bg-[#fffaf7] p-4">
                <div className="flex items-center gap-3">
                  <FlaskConical className="h-5 w-5 text-[#e8732a]" />
                  <p className="text-sm font-semibold text-[#2f1608]">
                    Science
                  </p>
                </div>
                <p className="mt-2 text-sm leading-7 text-[#2f1608]/72">
                  NCERT Physics, Chemistry, Bio/Math.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8732a]/10 bg-[#fffaf7] p-4">
                <div className="flex items-center gap-3">
                  <Calculator className="h-5 w-5 text-[#e8732a]" />
                  <p className="text-sm font-semibold text-[#2f1608]">
                    Commerce
                  </p>
                </div>
                <p className="mt-2 text-sm leading-7 text-[#2f1608]/72">
                  NCERT Accounts, Economics, Business Studies.
                </p>
              </div>

              <div className="rounded-2xl border border-[#e8732a]/10 bg-[#fffaf7] p-4">
                <div className="flex items-center gap-3">
                  <Landmark className="h-5 w-5 text-[#e8732a]" />
                  <p className="text-sm font-semibold text-[#2f1608]">
                    Arts
                  </p>
                </div>
                <p className="mt-2 text-sm leading-7 text-[#2f1608]/72">
                  NCERT History, Political Science, Geography.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[28px] border border-[#e8732a]/12 bg-[#2f1608] px-6 py-6 text-white shadow-[0_20px_50px_rgba(47,22,8,0.18)] sm:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e8732a]">
                Exam Pattern
              </p>
              <p className="mt-2 text-lg font-bold leading-8 sm:text-xl">
                100 Questions • +4 Correct • -1 Wrong
              </p>
            </div>

            <a
              href="/register"
              className="inline-flex items-center justify-center rounded-xl bg-[#e8732a] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#cf6322]"
            >
              Register for GPET 2026
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}