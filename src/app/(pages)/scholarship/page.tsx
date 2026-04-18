type Lang = "en" | "hi";

const rewardsCopy = {
  en: {
    badge: "Rewards & Recognition 2026",
    title: "Celebrate Merit",
    highlight: "Up to 30,000+ Physical Rewards",
    subtitle:
      "GPET 2026 is dedicated to celebrating the academic brilliance of Uttar Pradesh. Our reward ecosystem scales with participation, so the final reward pool grows with the community.",
    tiersTitle: "The Merit Tiers",
    tiersIntro:
      "Rewards are distributed through a percentile-based scaling model across state, zonal, and district recognition levels.",
    tierCards: [
      {
        label: "State Level Excellence",
        subtitle: "Top-performing students across the state",
        points: [
          "Ultra-premium laptops and gold-plated trophies.",
          "Recognition at the Grand State Ceremony in Noida/Lucknow.",
          "Full higher education scholarship grants.",
        ],
      },
      {
        label: "Zonal Level Merit",
        subtitle: "Top performers across 18 zones",
        points: [
          "High-performance tablets and silver medals.",
          "Zonal excellence certificates.",
          "Entrance coaching aid and skill development kits.",
        ],
      },
      {
        label: "District Level Achievers",
        subtitle: "Top merit across all 75 districts",
        points: [
          "Smartphones, smartwatches, and bronze medals.",
          "District topper digital badges.",
          "Career roadmap access and internship opportunities.",
        ],
      },
    ],
    policyTitle: "Transparency Policy",
    policyPoints: [
      "The final volume of physical rewards is pro-rated based on the total verified examination participants.",
      'All mentions of "Upto 30,000 rewards" refer to the maximum potential reward pool at the 20-Lakh student participation milestone.',
      "Performance metrics and identity are verified through AI-proctoring and document audits before award disbursement.",
      "Rewards are strictly percentile-based to ensure fairness across Science, Commerce, and Arts streams.",
    ],
    beyondTitle: "Beyond Physical Awards",
    beyondPoints: [
      "Blockchain-verified participation certificate.",
      "AI-driven precision performance report.",
      "Personalized career matching roadmap.",
    ],
    initiative: "An initiative by Faisal Khan.",
    designation: "Founder & CEO, Gradorra Private Limited.",
  },
  hi: {
    badge: "Rewards & Recognition 2026",
    title: "Merit ka Celebration",
    highlight: "Upto 30,000+ तक Physical Rewards",
    subtitle:
      "GPET 2026 Uttar Pradesh ki academic brilliance ko celebrate karne ke liye dedicated hai. Reward ecosystem participation ke saath scale karta hai, isliye final reward pool community ke saath grow karta hai.",
    tiersTitle: "Merit Tiers",
    tiersIntro:
      "Rewards percentile-based scaling model ke through state, zonal, aur district recognition levels par distribute honge.",
    tierCards: [
      {
        label: "State Level Excellence",
        subtitle: "State ke top-performing students",
        points: [
          "Ultra-premium laptops aur gold-plated trophies.",
          "Noida/Lucknow ke Grand State Ceremony mein recognition.",
          "Full higher education scholarship grants.",
        ],
      },
      {
        label: "Zonal Level Merit",
        subtitle: "18 zones ke top performers",
        points: [
          "High-performance tablets aur silver medals.",
          "Zonal excellence certificates.",
          "Entrance coaching aid aur skill development kits.",
        ],
      },
      {
        label: "District Level Achievers",
        subtitle: "75 districts ke top merit achievers",
        points: [
          "Smartphones, smartwatches, aur bronze medals.",
          "District topper digital badges.",
          "Career roadmap access aur internship opportunities.",
        ],
      },
    ],
    policyTitle: "Transparency Policy",
    policyPoints: [
      "Physical rewards ka final volume total verified participants ke hisab se pro-rated hoga.",
      '“Upto 30,000 rewards” ka reference 20-Lakh participation milestone par maximum potential reward pool ko dikhata hai.',
      "Award disbursement se pehle performance aur identity AI-proctoring aur document audits se verify hongi.",
      "Science, Commerce, aur Arts sab ke liye rewards strictly percentile-based honge.",
    ],
    beyondTitle: "Beyond Physical Awards",
    beyondPoints: [
      "Blockchain-verified participation certificate.",
      "AI-driven precision performance report.",
      "Personalized career matching roadmap.",
    ],
    initiative: "Faisal Khan ki ek initiative.",
    designation: "Founder & CEO, Gradorra Private Limited.",
  },
};

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex rounded-full border border-[#e8732a]/15 bg-[#fff4ed] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
      {children}
    </div>
  );
}

export default function RewardsPage({ lang = "en" }: { lang?: Lang }) {
  const t = rewardsCopy[lang];

  return (
    <main className="bg-white text-[#2f1608]">
      <section className="relative overflow-hidden border-b border-[#e8732a]/10 bg-[linear-gradient(180deg,#fffaf7_0%,#ffffff_100%)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8%] top-[-10%] h-80 w-80 rounded-full bg-[#e8732a]/8 blur-3xl" />
          <div className="absolute right-[-8%] bottom-[-15%] h-96 w-96 rounded-full bg-[#e8732a]/6 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <SectionBadge>{t.badge}</SectionBadge>

            <h1 className="mt-5 text-[clamp(2.5rem,6vw,5rem)] font-bold leading-[0.96] tracking-[-0.04em] text-[#2f1608]">
              {t.title}
              <span className="block text-[#e8732a]">{t.highlight}</span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#2f1608]/72 sm:text-lg">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <SectionBadge>{t.tiersTitle}</SectionBadge>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#2f1608]">
            Recognition that scales with merit
          </h2>
          <p className="mt-4 text-base leading-8 text-[#2f1608]/72 sm:text-lg">
            {t.tiersIntro}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {t.tierCards.map((card) => (
            <article
              key={card.label}
              className="rounded-[26px] border border-[#e8732a]/10 bg-[#fffaf7] p-6 shadow-[0_14px_34px_rgba(232,115,42,0.05)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e8732a]">
                {card.label}
              </p>

              <h3 className="mt-2 text-xl font-bold tracking-[-0.02em] text-[#2f1608]">
                {card.subtitle}
              </h3>

              <ul className="mt-5 space-y-3">
                {card.points.map((point) => (
                  <li
                    key={point}
                    className="text-sm leading-7 text-[#2f1608]/72"
                  >
                    • {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-[#e8732a]/10 bg-[#fffaf7]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[28px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_16px_40px_rgba(232,115,42,0.05)] sm:p-8">
              <SectionBadge>{t.policyTitle}</SectionBadge>
              <ul className="mt-6 space-y-4">
                {t.policyPoints.map((point) => (
                  <li
                    key={point}
                    className="rounded-2xl border border-[#e8732a]/8 bg-[#fffaf7] px-4 py-4 text-sm leading-7 text-[#2f1608]/75"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <div className="rounded-[28px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_16px_40px_rgba(232,115,42,0.05)] sm:p-8">
                <SectionBadge>{t.beyondTitle}</SectionBadge>
                <ul className="mt-6 space-y-4">
                  {t.beyondPoints.map((point) => (
                    <li
                      key={point}
                      className="text-sm leading-7 text-[#2f1608]/75"
                    >
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[28px] bg-[#2f1608] p-6 text-white shadow-[0_18px_45px_rgba(47,22,8,0.16)] sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f0a26d]">
                  Initiative
                </p>
                <p className="mt-3 text-lg font-semibold leading-8">
                  {t.initiative}
                </p>
                <p className="mt-2 text-sm text-white/72">
                  {t.designation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}