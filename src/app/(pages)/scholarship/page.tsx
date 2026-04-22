import React from "react";
import WhatWeProvideSection from "@/components/scholarship/what-we-provide";
import ReportCarousel from "@/components/common/report-carousel";

type Lang = "en" | "hi";

const rewardsCopy = {
  en: {
    heroHeading: "GPET 2026: Recognizing Merit Across the Region",
    heroSubHeading: "Up to 30,000 Students Empowered with Digital Tools",
    heroBody:
      "The Gradorra Pre-Eligibility Test identifies and empowers the brightest academic talents across Uttar Pradesh with scalable excellence.",
    badge: "Rewards & Recognition 2026",
    title: "The Vision of Scalable Excellence",
    highlight: "Up to 30,000 Students Shortlisted",
    subtitle:
      "GPET 2026 shortlists up to 30,000 students based on pure merit, providing them with digital empowerment tools and academic grants to excel in a digital-first world.",
    tiersTitle: "Tiered Merit Recognition",
    tiersIntro:
      "Inclusive representation through three distinct tiers ensuring excellence is honored at every level - state, zonal, and district.",
    tierCards: [
      {
        label: "State-Level Excellence",
        subtitle: "Highest-ranking performers across the entire state",
        points: [
          "Top state rankers receive premium laptops and academic grants.",
          "Special recognition at state-level ceremonies.",
          "Priority access to higher education scholarships.",
        ],
      },
      {
        label: "Zonal Merit Benchmarks",
        subtitle: "Top talent across all 4 zones",
        points: [
          "High-performance tablets for zonal toppers.",
          "Zonal certificates and digital productivity tools.",
          "Regional leadership recognition programs.",
        ],
      },
      {
        label: "District-Level Achievement",
        subtitle: "Academic leaders across all 75 districts",
        points: [
          "Smartphones and smart study kits for district toppers.",
          "Grassroots empowerment with digital badges.",
          "Career guidance and academic support packages.",
        ],
        image: "/images/merti-scolor.jpeg",
        imageAlt:
          "Uttar Pradesh districts performance map highlighting merit achievers",
      },
    ],
    policyTitle: "Merit-Based Selection",
    policyPoints: [
      "Strictly merit-driven selection process across all streams.",
      "Transparent percentile-based shortlisting methodology.",
      "AI-proctoring ensures fair evaluation and verification.",
      "Representation guaranteed across Science, Commerce, and Arts.",
    ],
    beyondTitle: "Reward Ecosystem",
    beyondPoints: [
      "Digital productivity gadgets (laptops, tablets, smartphones).",
      "Smart study kits with curated educational resources.",
      "Higher education scholarship grants and career support.",
    ],
    initiative: "An initiative by Gradorra Private Limited.",
    designation: "Empowering Tomorrow's Leaders.",
    disclaimer:
      "GPET 2026 aims to shortlist up to 30,000 students based on merit. The reward pool scales with verified participation. Final selections and reward distribution will be based on exam performance and verification processes. Gradorra Private Limited reserves all rights to final decisions.",
  },
  hi: {
    heroHeading: "GPET 2026: पूरे क्षेत्र में योग्यता को मान्यता",
    heroSubHeading: "30,000 छात्रों को डिजिटल टूल्स से सशक्तिकरण",
    heroBody:
      "ग्राडोर्रा प्री-योग्यता परीक्षा उत्तर प्रदेश भर के सबसे प्रतिभाशाली छात्र प्रतिभाओं को पहचानती और सशक्त बनाती है।",
    badge: "पुरस्कार एवं मान्यता 2026",
    title: "स्केलेबल उत्कृष्टता का दृष्टिकोण",
    highlight: "30,000 छात्रों का चयन",
    subtitle:
      "GPET 2026 शुद्ध योग्यता के आधार पर 30,000 छात्रों का चयन करेगा, उन्हें डिजिटल प्रथम विश्व में उत्कृष्टता के लिए आवश्यक उपकरण प्रदान करेगा।",
    tiersTitle: "तीन स्तर की मान्यता",
    tiersIntro:
      "राज्य, जोनल और जिला स्तर पर तीन विशिष्ट स्तरों के माध्यम से समावेशी प्रतिनिधित्व सुनिश्चित करना।",
    tierCards: [
      {
        label: "राज्य-स्तरीय उत्कृष्टता",
        subtitle: "सम्पूर्ण राज्य के उच्चतम रैंक वाले प्रदर्शनकारक",
        points: [
          "शीर्ष राज्य रैंकर्स को प्रीमियम लैपटॉप और शैक्षणिक अनुदान।",
          "राज्य-स्तरीय समारोहों में विशेष मान्यता।",
          "उच्च शिक्षा छात्रवृत्ति के लिए प्राथमिकता।",
        ],
      },
      {
        label: "क्षेत्रीय योग्यता बेंचमार्क",
        subtitle: "सभी 4 जोनों के शीर्ष प्रतिभागी",
        points: [
          "क्षेत्रीय शीर्षक के लिए उच्च-प्रदर्शन वाली टैबलेट।",
          "क्षेत्रीय प्रमाणपत्र और डिजिटल उत्पादकता उपकरण।",
          "क्षेत्रीय नेतृत्व मान्यता कार्यक्रम।",
        ],
      },
      {
        label: "जिला-स्तरीय उपलब्धियाँ",
        subtitle: "सभी 75 जिलों के शैक्षणिक नेता",
        points: [
          "जिला शीर्षक के लिए स्मार्टफोन और स्मार्ट स्टडी किट।",
          "ग्रामीण सशक्तिकरण के लिए डिजिटल बैज।",
          "करियर मार्गदर्शन और शैक्षणिक समर्थन पैकेज।",
        ],
        image: "/images/merti-scolor.jpeg",
        imageAlt:
          "उत्तर प्रदेश के जिलों का प्रदर्शन मानचित्र जिसमें योग्यता प्राप्तकर्ता हाइलाइट",
      },
    ],
    policyTitle: "योग्यता आधारित चयन",
    policyPoints: [
      "सभी धाराओं में कड़ाई से योग्यता आधारित चयन प्रक्रिया।",
      "पारदर्शी प्रतिशत आधारित शॉर्टलिस्टिंग पद्धति।",
      "AI-प्रोक्टोरिंग निष्पक्ष मूल्यांकन सुनिश्चित करती है।",
      "विज्ञान, वाणिज्य और कला में प्रतिनिधित्व सुनिश्चित।",
    ],
    beyondTitle: "पुरस्कार पारिस्थितिकी तंत्र",
    beyondPoints: [
      "डिजिटल उत्पादकता गैजेट्स (लैपटॉप, टैबलेट, स्मार्टफोन)।",
      "क्यूरेटेड शैक्षणिक संसाधनों के साथ स्मार्ट स्टडी किट।",
      "उच्च शिक्षा छात्रवृत्ति अनुदान और करियर समर्थन।",
    ],
    initiative: "ग्राडोर्रा प्राइवेट लिमिटेड की पहल।",
    designation: "कल के नेताओं को सशक्त बनाना।",
    disclaimer:
      "GPET 2026 योग्यता के आधार पर 30,000 छात्रों का चयन करेगा। पुरस्कार पूल सत्यापित भागीदारी के साथ बढ़ेगा। अंतिम चयन और पुरस्कार वितरण परीक्षा प्रदर्शन और सत्यापन प्रक्रियाओं पर आधारित होगा। ग्राडोर्रा प्राइवेट लिमिटेड को अंतिम निर्णय का पूर्ण अधिकार है।",
  },
} as const;

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex rounded-full border border-[#e8732a]/15 bg-[#fff4ed] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
      {children}
    </div>
  );
}

export default function RewardsPage({ lang = "en" }: { lang?: Lang }) {
  const t = rewardsCopy[lang];
  const stateCard = t.tierCards[0];
  const zonalCard = t.tierCards[1];
  const districtCard = t.tierCards[2];

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
              {t.heroHeading}
            </h1>

            <h2 className="mt-4 text-[clamp(1.8rem,3.5vw,3rem)] font-bold leading-tight tracking-[-0.03em] text-[#e8732a]">
              {t.heroSubHeading}
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#2f1608]/72 sm:text-lg">
              {t.heroBody}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <SectionBadge>{t.tiersTitle}</SectionBadge>
          <h2 className="mt-5 text-[clamp(2rem,4vw,3.2rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#2f1608]">
            {t.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-[#2f1608]/72 sm:text-lg">
            {t.tiersIntro}
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <article className="rounded-[26px] border border-[#e8732a]/10 bg-[#fffaf7] p-6 shadow-[0_14px_34px_rgba(232,115,42,0.05)]">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e8732a]">
              {stateCard.label}
            </p>
            <h3 className="mt-2 text-xl font-bold tracking-[-0.02em] text-[#2f1608]">
              {stateCard.subtitle}
            </h3>
            <ul className="mt-5 space-y-3">
              {stateCard.points.map((point) => (
                <li key={point} className="text-sm leading-7 text-[#2f1608]/72">
                  • {point}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-[26px] border border-[#e8732a]/10 bg-[#fffaf7] p-6 shadow-[0_14px_34px_rgba(232,115,42,0.05)]">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e8732a]">
              {zonalCard.label}
            </p>
            <h3 className="mt-2 text-xl font-bold tracking-[-0.02em] text-[#2f1608]">
              {zonalCard.subtitle}
            </h3>
            <ul className="mt-5 space-y-3">
              {zonalCard.points.map((point) => (
                <li key={point} className="text-sm leading-7 text-[#2f1608]/72">
                  • {point}
                </li>
              ))}
            </ul>
          </article>
          <article className="overflow-hidden rounded-[26px] border border-[#e8732a]/10 bg-[#fffaf7] shadow-[0_14px_34px_rgba(232,115,42,0.05)] lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-full">
                <img
                  src={districtCard.image}
                  alt={
                    districtCard.imageAlt ||
                    "District-level achievement representation"
                  }
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 sm:p-8 flex flex-col justify-center">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#e8732a]">
                  {districtCard.label}
                </p>
                <h3 className="mt-2 text-[clamp(1.4rem,2.6vw,2rem)] font-bold tracking-[-0.02em] text-[#2f1608]">
                  {districtCard.subtitle}
                </h3>
                <ul className="mt-5 space-y-3">
                  {districtCard.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm leading-7 text-[#2f1608]/72 sm:text-base"
                    >
                      • {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>
      <WhatWeProvideSection />
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
                <p className="mt-2 text-sm text-white/72">{t.designation}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ReportCarousel />
      <footer className="border-t border-[#e8732a]/10 bg-[#2f1608]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <p className="text-sm leading-7 text-white/72">{t.disclaimer}</p>
        </div>
      </footer>
    </main>
  );
}
