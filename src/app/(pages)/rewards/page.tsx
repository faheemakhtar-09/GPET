type Lang = "en" | "hi";

const rewardsCopy = {
  en: {
    badge: "Rewards & Analytics",
    title: "Beyond the Exam",
    highlight: "Precision Analytics & Merit Rewards",
    subtitle:
      "GPET is not just an exam. It is a performance intelligence layer designed to help students understand strengths, improve decisions, and unlock meaningful rewards.",
    analyticsBadge: "Precision Analytics",
    analyticsTitle: "Your exam becomes a career compass",
    analyticsQuote: "GPET is not just an exam, it is the GPS of your academic future.",
    analyticsCards: [
      {
        title: "Comprehensive Performance Report",
        points: [
          "Percentile-based standing across large student participation in Uttar Pradesh.",
          "Subject-wise proficiency insights to identify strength and improvement areas.",
          "Time management and accuracy observations based on exam behavior.",
        ],
      },
      {
        title: "AI Career Matching Engine",
        points: [
          "Skill mapping across fields like engineering, civil services, arts, and technology.",
          "Future pathway recommendations based on performance patterns and percentile bands.",
          "Industry alignment insights to connect current aptitude with emerging demands.",
        ],
      },
    ],
    rewardsBadge: "The GPET Hall of Fame",
    rewardsTitle: "Recognition built for the modern scholar",
    rewardsCards: [
      {
        title: "Digital Empowerment Suite",
        points: [
          "Flagship laptops and tablets for advanced learning and research.",
          "High-end smartphones and smartwatches to stay connected and productive.",
        ],
      },
      {
        title: "Merit Funding",
        points: [
          "Higher education grants for top percentile holders.",
          "Elite coaching aid for JEE, NEET, and CUET preparation support.",
        ],
      },
      {
        title: "Recognition Tiers",
        points: [
          "State toppers receive GPET Gold Medal honors and grand recognition.",
          "Zonal toppers receive excellence certificates and premium gadgets.",
          "District toppers across all 75 districts receive trophies and tech kits.",
        ],
      },
      {
        title: "Verified Credentials",
        points: [
          "Blockchain-secured certificates designed to be trusted and tamper-resistant.",
        ],
      },
    ],
    noteTitle: "Privacy Note",
    note:
      "Your performance data is an Amanat. We use it to empower students, not to sell data.",
    initiative: "An initiative by Faisal Khan.",
  },
  hi: {
    badge: "Rewards & Analytics",
    title: "परीक्षा से आगे",
    highlight: "Precision Analytics और Merit Rewards",
    subtitle:
      "GPET सिर्फ एक exam नहीं है। यह एक performance intelligence layer है जो students को अपनी strengths समझने, बेहतर decisions लेने और meaningful rewards unlock करने में मदद करती है।",
    analyticsBadge: "Precision Analytics",
    analyticsTitle: "आपका exam बनता है career compass",
    analyticsQuote: "GPET सिर्फ एक exam नहीं, आपके academic future ka GPS है।",
    analyticsCards: [
      {
        title: "Comprehensive Performance Report",
        points: [
          "Uttar Pradesh के बड़े student base के बीच percentile-based standing.",
          "Subject-wise proficiency insights ताकि strength और improvement areas समझ आएं.",
          "Exam behavior के आधार par time management और accuracy observations.",
        ],
      },
      {
        title: "AI Career Matching Engine",
        points: [
          "Engineering, civil services, arts, और technology जैसे fields ke साथ skill mapping.",
          "Performance patterns और percentile bands ke basis par future pathway recommendations.",
          "Current aptitude ko emerging industry demands se align karne ke insights.",
        ],
      },
    ],
    rewardsBadge: "The GPET Hall of Fame",
    rewardsTitle: "Modern scholar ke liye meaningful recognition",
    rewardsCards: [
      {
        title: "Digital Empowerment Suite",
        points: [
          "Advanced learning aur research ke liye flagship laptops aur tablets.",
          "Connected aur productive rehne ke लिए high-end smartphones aur smartwatches.",
        ],
      },
      {
        title: "Merit Funding",
        points: [
          "Top percentile holders ke लिए higher education grants.",
          "JEE, NEET, aur CUET preparation ke लिए elite coaching support.",
        ],
      },
      {
        title: "Recognition Tiers",
        points: [
          "State toppers ko GPET Gold Medal aur grand recognition diya jayega.",
          "Zonal toppers ko excellence certificates aur premium gadgets milenge.",
          "75 districts ke district toppers ko trophies aur tech kits diye jayenge.",
        ],
      },
      {
        title: "Verified Credentials",
        points: [
          "Blockchain-secured certificates jo trusted aur tamper-resistant honge.",
        ],
      },
    ],
    noteTitle: "Privacy Note",
    note:
      "Aapka performance data ek Amanat hai. Hum students ko empower karte hain, data sell nahi karte.",
    initiative: "Faisal Khan ki ek initiative.",
  },
};

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex rounded-full border border-[#e8732a]/15 bg-[#fff4ed] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
      {children}
    </div>
  );
}

function InfoCard({
  title,
  points,
}: {
  title: string;
  points: string[];
}) {
  return (
    <div className="rounded-[24px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_14px_34px_rgba(232,115,42,0.06)]">
      <h3 className="text-xl font-bold tracking-[-0.02em] text-[#2f1608]">
        {title}
      </h3>
      <ul className="mt-4 space-y-3">
        {points.map((point) => (
          <li
            key={point}
            className="rounded-2xl border border-[#e8732a]/8 bg-[#fffaf7] px-4 py-3 text-sm leading-7 text-[#2f1608]/75"
          >
            {point}
          </li>
        ))}
      </ul>
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

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-[28px] border border-[#e8732a]/10 bg-[#fffaf7] p-6 shadow-[0_16px_40px_rgba(232,115,42,0.06)] lg:col-span-4">
            <SectionBadge>{t.analyticsBadge}</SectionBadge>
            <h2 className="mt-5 text-3xl font-bold leading-[1.05] tracking-[-0.03em] text-[#2f1608]">
              {t.analyticsTitle}
            </h2>
            <p className="mt-5 rounded-2xl border border-[#e8732a]/12 bg-white p-5 text-lg font-semibold leading-8 text-[#2f1608]">
              “{t.analyticsQuote}”
            </p>
          </div>

          <div className="grid gap-6 lg:col-span-8 md:grid-cols-2">
            {t.analyticsCards.map((card) => (
              <InfoCard key={card.title} title={card.title} points={card.points} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8732a]/10 bg-[#fffaf7]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <SectionBadge>{t.rewardsBadge}</SectionBadge>
            <h2 className="mt-5 text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#2f1608]">
              {t.rewardsTitle}
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.rewardsCards.map((card) => (
              <InfoCard key={card.title} title={card.title} points={card.points} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_16px_40px_rgba(232,115,42,0.05)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1.4fr_0.8fr] lg:items-end">
            <div>
              <SectionBadge>{t.noteTitle}</SectionBadge>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[#2f1608]/75 sm:text-lg">
                {t.note}
              </p>
            </div>

            <div className="rounded-2xl border border-[#e8732a]/12 bg-[#fffaf7] px-5 py-5 text-right">
              <p className="text-sm text-[#2f1608]/65">{t.initiative}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}