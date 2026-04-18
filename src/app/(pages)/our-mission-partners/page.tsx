type Lang = "en" | "hi";

const missionPartnersCopy = {
  en: {
    badge: "Our Network",
    title: "Our Mission Partners",
    subtitle:
      "We collaborate with trusted institutions and ecosystem enablers who share our commitment to merit, transparency, and student opportunity.",
    partners: [
      {
        name: "Academic Excellence Council",
        image:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
        desc: "Supporting academic outreach, institutional credibility, and student-first impact across Uttar Pradesh.",
      },
      {
        name: "Future Skills Alliance",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
        desc: "Enabling career readiness, skill development pathways, and future-focused learner support.",
      },
      {
        name: "Digital Learning Network",
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
        desc: "Strengthening access to digital learning systems, performance tools, and educational innovation.",
      },
      {
        name: "Merit Recognition Forum",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
        desc: "Promoting fair recognition frameworks that celebrate achievement with credibility and transparency.",
      },
      {
        name: "Student Opportunity Foundation",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
        desc: "Encouraging scholarship access, opportunity creation, and meaningful progression for young learners.",
      },
      {
        name: "Innovation & Impact Collective",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
        desc: "Bringing together innovation partners focused on scalable educational outcomes and measurable impact.",
      },
    ],
  },
  hi: {
    badge: "Our Network",
    title: "Our Mission Partners",
    subtitle:
      "Hum trusted institutions aur ecosystem enablers ke saath collaborate karte hain jo merit, transparency, aur student opportunity ke prati hamari commitment share karte hain.",
    partners: [
      {
        name: "Academic Excellence Council",
        image:
          "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80",
        desc: "Academic outreach, institutional credibility, aur student-first impact ko support karta hai.",
      },
      {
        name: "Future Skills Alliance",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
        desc: "Career readiness, skill development pathways, aur future-focused learner support ko enable karta hai.",
      },
      {
        name: "Digital Learning Network",
        image:
          "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=80",
        desc: "Digital learning systems, performance tools, aur educational innovation ko strengthen karta hai.",
      },
      {
        name: "Merit Recognition Forum",
        image:
          "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
        desc: "Fair recognition frameworks ko promote karta hai jo achievement ko credibility ke saath celebrate kare.",
      },
      {
        name: "Student Opportunity Foundation",
        image:
          "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
        desc: "Scholarship access, opportunity creation, aur student progression ko encourage karta hai.",
      },
      {
        name: "Innovation & Impact Collective",
        image:
          "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
        desc: "Educational outcomes aur measurable impact par focused innovation partners ko connect karta hai.",
      },
    ],
  },
};

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex rounded-full border border-[#e8732a]/15 bg-[#fff4ed] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
      {children}
    </div>
  );
}

export default function MissionPartnersPage({ lang = "en" }: { lang?: Lang }) {
  const t = missionPartnersCopy[lang];

  return (
    <main className="bg-white text-[#2f1608]">
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffaf7_0%,#ffffff_100%)]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[-8%] top-[-10%] h-72 w-72 rounded-full bg-[#e8732a]/8 blur-3xl" />
          <div className="absolute right-[-8%] bottom-[-15%] h-80 w-80 rounded-full bg-[#e8732a]/6 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <SectionBadge>{t.badge}</SectionBadge>

            <h1 className="mt-5 text-[clamp(2.4rem,5.5vw,4.8rem)] font-bold leading-[0.98] tracking-[-0.04em] text-[#2f1608]">
              {t.title}
            </h1>

            <p className="mt-6 text-base leading-8 text-[#2f1608]/72 sm:text-lg">
              {t.subtitle}
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {t.partners.map((partner) => (
              <article
                key={partner.name}
                className="group overflow-hidden rounded-[26px] border border-[#e8732a]/10 bg-white shadow-[0_14px_34px_rgba(232,115,42,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(232,115,42,0.08)]"
              >
                <div className="aspect-[4/3] overflow-hidden bg-[#fff4ed]">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold tracking-[-0.02em] text-[#2f1608]">
                    {partner.name}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[#2f1608]/72">
                    {partner.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}