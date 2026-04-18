type Lang = "en" | "hi";

const copy = {
  en: {
    badge: "About Gradorra",
    title: "Redefining Merit through Innovation",
    subtitle:
      "A technology-led education ecosystem built on Ethical AI, transparency, and student-first trust.",
    orgTitle: "The Organization",
    orgBody:
      "Gradorra Private Limited is a premier technology firm working at the intersection of Ethical AI and Educational Innovation. Headquartered in Greater Noida West, we build future-ready ecosystems that raise education to global standards.",
    trustTitle: "Data Sovereignty",
    trustBody:
      "We treat every student's data as an Amanat, or sacred trust, and we never monetize it. Transparency, security, and accessibility guide every product decision we make.",
    missionTitle: "Our Mission",
    missionBody:
      "To create a deeply personalized and secure experience that helps students make informed decisions about their academic and career future.",
    visionTitle: "Our Vision",
    visionBody:
      "To democratize access to high-quality education by giving every student a transparent, direct, and trusted pathway to opportunity.",
    valuesTitle: "Our Values",
    values: [
      "Ethical AI with human accountability.",
      "Student privacy and data sovereignty.",
      "Transparency in every process.",
      "Merit-based opportunity for all.",
    ],
    gpetTitle: "GPET 2026",
    gpetBody:
      "The Gradorra Pre-Eligibility Test is India’s first mobile AI-proctored scholarship initiative, designed to identify talent across 75 districts of Uttar Pradesh.",
    gpetExtra:
      "The model balances academic foundation with logical reasoning and rewards top performers with premium gadgets and scholarships.",
    leaderTitle: "Leadership",
    leaderName: "Mr. Faisal Khan",
    leaderRole: "Founder & CEO, Gradorra Private Limited",
    leaderBody:
      "Mr. Faisal Khan is the visionary behind Gradorra and the Founder of KD Ventures Group. His mission is to bring quiet luxury and digital transparency into modern education.",
    leaderVision:
      "Under his leadership, Gradorra is building an ecosystem where resources never stand between a student and their dream.",
    quote:
      "Merit is the only currency of the future. At Gradorra, we are building the vaults to protect and grow it.",
    quoteBy: "— Faisal Khan",
    ctaTitle: "A Trusted Path Forward",
    ctaBody:
      "A student-first platform for admissions, scholarships, and future-ready educational access.",
    ctaButton: "Explore GPET 2026",
  },
  hi: {
    badge: "Gradorra के बारे में",
    title: "नवाचार के माध्यम से योग्यता को नया रूप",
    subtitle:
      "Ethical AI, transparency, और student-first trust पर आधारित एक education ecosystem.",
    orgTitle: "संगठन",
    orgBody:
      "Gradorra Private Limited एक प्रमुख टेक्नोलॉजी फर्म है जो Ethical AI और Educational Innovation के संगम पर काम करती है। Greater Noida West में स्थित, हम ऐसे future-ready ecosystems बनाते हैं जो शिक्षा को global standards तक ले जाते हैं।",
    trustTitle: "डेटा संप्रभुता",
    trustBody:
      "हम हर student के data को Amanat, यानी sacred trust, मानते हैं और उसे कभी monetize नहीं करते। Transparency, security, और accessibility हमारे हर product decision का आधार हैं।",
    missionTitle: "हमारा मिशन",
    missionBody:
      "एक सुरक्षित और personalized experience बनाना, जो students को उनके academic और career future के लिए informed decisions लेने में मदद करे।",
    visionTitle: "हमारी दृष्टि",
    visionBody:
      "High-quality education को सभी के लिए accessible बनाना, ताकि हर student को opportunity तक एक transparent और trusted रास्ता मिले।",
    valuesTitle: "हमारे मूल्य",
    values: [
      "Human accountability के साथ Ethical AI.",
      "Student privacy और data sovereignty.",
      "हर प्रक्रिया में transparency.",
      "सभी के लिए merit-based opportunity.",
    ],
    gpetTitle: "GPET 2026",
    gpetBody:
      "Gradorra Pre-Eligibility Test भारत की पहली mobile AI-proctored scholarship initiative है, जिसे Uttar Pradesh के 75 districts की talent पहचानने के लिए बनाया गया है।",
    gpetExtra:
      "यह model academic foundation और logical reasoning का balance रखता है, और top performers को premium gadgets और scholarships से सम्मानित करता है।",
    leaderTitle: "नेतृत्व",
    leaderName: "Mr. Faisal Khan",
    leaderRole: "Founder & CEO, Gradorra Private Limited",
    leaderBody:
      "Mr. Faisal Khan, Gradorra के vision के पीछे की प्रमुख शक्ति हैं और KD Ventures Group के Founder भी हैं। उनका मिशन modern education में quiet luxury और digital transparency लाना है।",
    leaderVision:
      "उनके नेतृत्व में, Gradorra ऐसा ecosystem बना रहा है जहाँ resources किसी student के सपने और लक्ष्य के बीच रुकावट न बनें।",
    quote:
      "Merit भविष्य की only currency है। Gradorra में हम इसे protect और grow करने के लिए vaults बना रहे हैं।",
    quoteBy: "— Faisal Khan",
    ctaTitle: "एक भरोसेमंद रास्ता",
    ctaBody:
      "Admissions, scholarships, और future-ready educational access के लिए student-first platform.",
    ctaButton: "GPET 2026 देखें",
  },
};

export default function AboutPage({ lang = "en" }: { lang?: Lang }) {
  const t = copy[lang];

  return (
    <main className="bg-white text-[#2f1608]">
      <section className="relative overflow-hidden border-b border-[#e8732a]/10 bg-[linear-gradient(180deg,#fffaf7_0%,#ffffff_100%)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-8%] top-[-10%] h-80 w-80 rounded-full bg-[#e8732a]/8 blur-3xl" />
          <div className="absolute right-[-10%] bottom-[-12%] h-96 w-96 rounded-full bg-[#e8732a]/6 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-[#e8732a]/15 bg-[#fff4ed] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
              {t.badge}
            </div>
            <h1 className="mt-5 font-montserrat text-[clamp(2.4rem,6vw,4.8rem)] font-bold leading-[0.98] tracking-[-0.04em]">
              {t.title}
            </h1>
            <p className="mt-5 max-w-2xl font-inter text-base leading-8 text-[#2f1608]/72 sm:text-lg">
              {t.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-12">
          <article className="rounded-[28px] border border-[#e8732a]/10 bg-[#fffaf7] p-6 shadow-[0_16px_40px_rgba(232,115,42,0.06)] lg:col-span-7">
            <h2 className="font-montserrat text-2xl font-bold">{t.orgTitle}</h2>
            <p className="mt-4 font-inter text-sm leading-8 text-[#2f1608]/75">
              {t.orgBody}
            </p>

            <h3 className="mt-8 font-montserrat text-xl font-bold text-[#e8732a]">
              {t.trustTitle}
            </h3>
            <p className="mt-3 font-inter text-sm leading-8 text-[#2f1608]/75">
              {t.trustBody}
            </p>
          </article>

          <aside className="rounded-[28px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_16px_40px_rgba(232,115,42,0.05)] lg:col-span-5">
            <h2 className="font-montserrat text-2xl font-bold">{t.valuesTitle}</h2>
            <ul className="mt-5 space-y-3">
              {t.values.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-[#e8732a]/10 bg-[#fffaf7] px-4 py-4 font-inter text-sm leading-7 text-[#2f1608]/75"
                >
                  {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-[28px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_16px_40px_rgba(232,115,42,0.05)]">
            <h2 className="font-montserrat text-2xl font-bold">{t.missionTitle}</h2>
            <p className="mt-4 font-inter text-sm leading-8 text-[#2f1608]/75">
              {t.missionBody}
            </p>
          </article>

          <article className="rounded-[28px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_16px_40px_rgba(232,115,42,0.05)]">
            <h2 className="font-montserrat text-2xl font-bold">{t.visionTitle}</h2>
            <p className="mt-4 font-inter text-sm leading-8 text-[#2f1608]/75">
              {t.visionBody}
            </p>
          </article>

          <article className="rounded-[28px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_16px_40px_rgba(232,115,42,0.05)]">
            <h2 className="font-montserrat text-2xl font-bold">{t.gpetTitle}</h2>
            <p className="mt-4 font-inter text-sm leading-8 text-[#2f1608]/75">
              {t.gpetBody}
            </p>
            <p className="mt-4 font-inter text-sm leading-8 text-[#2f1608]/75">
              {t.gpetExtra}
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-[#e8732a]/10 bg-[#fffaf7]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-12">
            <article className="rounded-[28px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_16px_40px_rgba(232,115,42,0.06)] lg:col-span-8">
              <div className="inline-flex rounded-full border border-[#e8732a]/15 bg-[#fff4ed] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
                {t.leaderTitle}
              </div>

              <h2 className="mt-4 font-montserrat text-2xl font-bold">{t.founder}</h2>
              <p className="mt-1 font-inter text-sm font-medium text-[#e8732a]">
                {t.founderRole}
              </p>

              <p className="mt-5 font-inter text-sm leading-8 text-[#2f1608]/75">
                {t.leaderBody}
              </p>
              <p className="mt-4 font-inter text-sm leading-8 text-[#2f1608]/75">
                {t.leaderVision}
              </p>

              <blockquote className="mt-6 rounded-2xl border border-[#e8732a]/12 bg-[#fffaf7] p-5">
                <p className="font-montserrat text-lg font-semibold leading-8">
                  {t.quote}
                </p>
                <footer className="mt-3 font-inter text-sm font-medium text-[#e8732a]">
                  {t.quoteBy}
                </footer>
              </blockquote>
            </article>

            <aside className="rounded-[28px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_16px_40px_rgba(232,115,42,0.05)] lg:col-span-4">
              <h2 className="font-montserrat text-2xl font-bold">{t.ctaTitle}</h2>
              <p className="mt-4 font-inter text-sm leading-8 text-[#2f1608]/75">
                {t.ctaBody}
              </p>

              <a
                href="/gpet-2026"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#e8732a] px-6 py-3 font-inter text-sm font-semibold text-white shadow-[0_12px_24px_rgba(232,115,42,0.18)] transition hover:-translate-y-0.5 hover:opacity-95"
              >
                {t.ctaButton}
              </a>

              <p className="mt-6 font-inter text-sm text-[#2f1608]/60">
                {t.initiative}
              </p>
              <p className="mt-2 font-inter text-sm text-[#2f1608]/60">
                {t.rights}
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}