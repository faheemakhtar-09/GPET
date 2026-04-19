type Lang = "en" | "hi";

const whyGpetCopy = {
  en: {
    badge: "Why GPET",
    title: "Why GPET Stands Apart",
    subtitle:
      "We are not just another scholarship test; we are your Career Architects. Our goal is not merely to distribute rewards, but to provide a mirror to your true capabilities.",
    features: [
      {
        title: "Not Just a Scholarship, but a Roadmap",
        desc: "Beyond rewards and gadgets, every participant receives an AI-Driven Performance Report that deciphers their unique cognitive DNA.",
      },
      {
        title: "Precision Career Matching",
        desc: "Our advanced AI ecosystem analyzes your strengths to match you with the career path where you are most likely to excel.",
      },
      {
        title: "Empowering Ambitions",
        desc: "We aim to ensure that a lack of resources never stands between a talented student in Uttar Pradesh and their dream of becoming a Doctor, Engineer, or Civil Servant.",
      },
      {
        title: "State-Level Benchmarking",
        desc: "Compete with lakhs of students and discover where you stand in the state of Uttar Pradesh.",
      },
      {
        title: "Comprehensive AI Analytics",
        desc: "Receive a deep-dive report into your academic strengths and areas of improvement.",
      },
      {
        title: "Strategic Career Guidance",
        desc: "Get a personalized roadmap identifying which competitive exams like JEE, NEET, and UPSC align best with your skills.",
      },
      {
        title: "Premium Rewards",
        desc: "Become eligible to win from a pool of Up to 30,000+ Rewards, including Laptops, Tablets, and Scholarships.",
      },
    ],
    priceBadge: "Democratizing Opportunity",
    priceTitle: "Only ₹299",
    priceDesc:
      "We have intentionally kept the registration fee at a nominal ₹299 to ensure that every student in Uttar Pradesh—from the bustling hubs of Noida to the remote villages of Purvanchal—can participate without financial hesitation.",
    quote:
      "We have kept the entry barrier minimal so that money never becomes a wall between talent and opportunity.",
    quoteAuthor: "Faisal Khan (Founder & CEO)",
    founderTitle: "From the Founder’s Desk",
    founderMessage:
      "My mission is to ensure every student in UP recognizes their true worth. GPET provides the 'Solution' before the 'Selection'. Join us to lay the foundation of your professional future today.",
    cta: "Register Now for ₹299",
    closing: "Merit is the only currency of the future.",
  },
};

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex rounded-full border border-[#e8732a]/15 bg-[#fff4ed] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
      {children}
    </div>
  );
}

export default function WhyGpetSection({ lang = "en" }: { lang?: Lang }) {
  const t = whyGpetCopy.en;

  return (
    <section className="bg-[#fcfaf8] text-[#2f1608]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-4xl">
          <SectionBadge>{t.badge}</SectionBadge>

          <h2 className="mt-5 text-[clamp(2.2rem,5vw,4.5rem)] font-bold leading-[0.98] tracking-[-0.04em] text-[#e8732a]">
            {t.title}
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[#2f1608]/72 sm:text-lg">
            {t.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {t.features.map((item) => (
            <article
              key={item.title}
              className="rounded-[24px] border border-[#2f1608]/8 bg-white p-6 shadow-[0_12px_30px_rgba(47,22,8,0.04)]"
            >
              <h3 className="text-lg font-bold tracking-[-0.02em] text-[#2f1608]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#2f1608]/74">
                {item.desc}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] border border-[#e8732a]/12 bg-[linear-gradient(180deg,#fff7f1_0%,#fffdfb_100%)] p-6 shadow-[0_14px_32px_rgba(232,115,42,0.05)] sm:p-8">
            <SectionBadge>{t.priceBadge}</SectionBadge>
            <h3 className="mt-5 text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1] tracking-[-0.04em] text-[#e8732a]">
              {t.priceTitle}
            </h3>
            <p className="mt-5 text-sm leading-7 text-[#2f1608]/76 sm:text-[15px]">
              {t.priceDesc}
            </p>

            <div className="mt-6 rounded-2xl border border-[#e8732a]/10 bg-white px-5 py-5">
              <p className="text-base font-medium leading-8 text-[#2f1608]">
                “{t.quote}”
              </p>
              <p className="mt-3 text-sm text-[#2f1608]/62">{t.quoteAuthor}</p>
            </div>
          </div>

          <div className="rounded-[28px] bg-[#2f1608] p-6 text-white shadow-[0_18px_45px_rgba(47,22,8,0.16)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#f0a26d]">
              {t.founderTitle}
            </p>

            <p className="mt-5 text-lg leading-8 text-white/92">
              {t.founderMessage}
            </p>

            <button className="mt-8 inline-flex items-center justify-center rounded-full bg-[#e8732a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#cf641f]">
              {t.cta}
            </button>

            <p className="mt-5 text-sm text-white/68">{t.closing}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
