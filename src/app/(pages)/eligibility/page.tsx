type Lang = "en" | "hi";

const eligibilityCopy = {
  en: {
    badge: "Eligibility 2026",
    title: "Eligibility Criteria – GPET 2026",
    subtitle:
      "GPET 2026 is designed to identify and nurture young talent at the foundational level. To participate in India’s first AI-proctored scholarship exam, candidates must meet the following criteria:",
    sections: [
      {
        number: "01",
        title: "Academic Qualification",
        content: [
          "The examination is open to students currently enrolled in the following classes for the academic session 2025-26 or 2026-27:",
        ],
        bullets: [
          "Secondary Level: Class 9th & Class 10th",
          "Senior Secondary Level: Class 11th & Class 12th",
          "Note: All streams (Science, Commerce, Arts/Humanities) are eligible.",
        ],
      },
      {
        number: "02",
        title: "Geographical Requirement",
        content: [],
        bullets: [
          "Region: Candidates must be residents of Uttar Pradesh or currently studying in any recognized school/college across the 75 districts of the state.",
          "Board Affiliation: Students from all recognized boards (UP Board, CBSE, ICSE, or any other equivalent board) are eligible to apply.",
        ],
      },
      {
        number: "03",
        title: "Technical Requirements",
        content: [
          "Since GPET is a Mobile AI-Proctored Exam, students must have:",
        ],
        bullets: [
          "A functional smartphone with a working front camera and microphone.",
          "A stable internet connection (4G/5G or High-speed Wi-Fi).",
        ],
      },
      {
        number: "04",
        title: "Identity Verification",
        content: [],
        bullets: [
          "Candidates must possess a valid Student ID Card issued by their school or a government-issued identity proof (such as Aadhaar Card) for the registration process.",
        ],
      },
    ],
    disclosureTitle: "Important Disclosure",
    disclosure:
      '"Providing incorrect academic or personal information will lead to immediate disqualification. The GPET system uses advanced AI verification to cross-check student credentials during the final award disbursement phase."',
    initiative: "An Initiative by Faisal Khan",
    founder: "Founder & CEO, Gradorra Private Limited.",
  },
};

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex rounded-full border border-[#e8732a]/15 bg-[#fff4ed] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
      {children}
    </div>
  );
}

function EligibilityCard({
  number,
  title,
  content,
  bullets,
}: {
  number: string;
  title: string;
  content: string[];
  bullets: string[];
}) {
  return (
    <article className="rounded-[28px] border border-[#2f1608]/8 bg-white p-6 shadow-[0_14px_32px_rgba(47,22,8,0.04)] sm:p-7">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fff4ed] text-sm font-bold text-[#e8732a]">
          {number}
        </div>
        <h2 className="text-xl font-bold tracking-[-0.02em] text-[#2f1608] sm:text-2xl">
          {title}
        </h2>
      </div>

      {content.length > 0 && (
        <div className="mt-5 space-y-3">
          {content.map((text) => (
            <p
              key={text}
              className="text-sm leading-7 text-[#2f1608]/76 sm:text-[15px]"
            >
              {text}
            </p>
          ))}
        </div>
      )}

      <ul className="mt-5 space-y-3">
        {bullets.map((point) => (
          <li
            key={point}
            className="rounded-2xl bg-[#fcfaf8] px-4 py-3 text-sm leading-7 text-[#2f1608]/78 sm:text-[15px]"
          >
            {point}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function EligibilityPage() {
  const t = eligibilityCopy.en;

  return (
    <main className="bg-[#fcfaf8] text-[#2f1608]">
      <section className="relative overflow-hidden border-b border-[#e8732a]/10 bg-[linear-gradient(180deg,#fffaf7_0%,#ffffff_100%)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-10%] top-[-10%] h-72 w-72 rounded-full bg-[#e8732a]/7 blur-3xl" />
          <div className="absolute right-[-8%] bottom-[-18%] h-80 w-80 rounded-full bg-[#e8732a]/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl">
            <SectionBadge>{t.badge}</SectionBadge>

            <h1 className="mt-5 text-[clamp(2.3rem,5vw,4.4rem)] font-bold leading-[0.98] tracking-[-0.04em] text-[#2f1608]">
              {t.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#2f1608]/72 sm:text-lg">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-6 md:grid-cols-2">
            {t.sections.map((section) => (
              <EligibilityCard
                key={section.number}
                number={section.number}
                title={section.title}
                content={section.content}
                bullets={section.bullets}
              />
            ))}
          </div>

          <div className="mt-8 rounded-[28px] border border-[#e8732a]/15 bg-[linear-gradient(180deg,#fff7f1_0%,#fffdfb_100%)] p-6 shadow-[0_14px_32px_rgba(232,115,42,0.05)] sm:p-8">
            <div className="max-w-4xl">
              <SectionBadge>{t.disclosureTitle}</SectionBadge>
              <p className="mt-5 text-base leading-8 text-[#2f1608]/80 sm:text-lg">
                {t.disclosure}
              </p>
            </div>
          </div>

          <div className="mt-10 border-t border-[#2f1608]/10 pt-6 text-center">
            <p className="text-base font-semibold text-[#2f1608]">
              {t.initiative}
            </p>
            <p className="mt-1 text-sm text-[#2f1608]/68">{t.founder}</p>
          </div>
        </div>
      </section>
    </main>
  );
}