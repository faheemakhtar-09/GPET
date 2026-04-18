type Lang = "en" | "hi";

const termsCopy = {
  en: {
    badge: "Legal",
    title: "Terms & Conditions",
    subtitle:
      "Welcome to the official portal of Gradorra Pre-Eligibility Test (GPET) 2026. By registering and participating, you agree to the following terms and conditions.",
    sections: [
      {
        title: "1. Eligibility & Registration",
        points: [
          "GPET 2026 is open to students currently studying in or residing in any of the 75 districts of Uttar Pradesh.",
          "All registration details must match the student’s government ID such as Aadhaar or School ID.",
          "Any misinformation may lead to automatic disqualification.",
        ],
      },
      {
        title: "2. AI-Proctored Examination Protocol",
        points: [
          "GPET is a mobile-based, AI-proctored exam and requires access to the device’s camera and microphone for the full duration of the test.",
          "Detection of multiple faces, external voices, screen recording, or switching apps may result in immediate termination of the exam.",
          "Gradorra Pvt. Ltd. is not responsible for technical failures, battery drain, or network issues at the user’s end.",
        ],
      },
      {
        title: "3. Dynamic Reward Scaling Policy",
        points: [
          "The total pool of physical rewards such as laptops, tablets, and smartphones is dynamic and scales in proportion to verified student participation.",
          'All mentions of "Upto 30,000 Rewards" refer to the maximum reward pool capacity at the 20-Lakh verified registration milestone.',
          "If total participation is below the 20-Lakh target, Gradorra Private Limited reserves the right to adjust the number of awardees on a pro-rata basis.",
          "The final number of winners in State, Zonal, and District categories will be officially declared by the GPET Merit Committee after the examination.",
        ],
      },
      {
        title: '4. Data Sovereignty (The "Amanat" Clause)',
        points: [
          'Gradorra Private Limited follows a strict non-monetization policy and treats student data as an "Amanat" or Sacred Trust.',
          "Data will not be sold, shared, or traded with third-party partners or marketers.",
          "Collected data is used only for identity verification, result processing, and personalized AI career roadmap services.",
        ],
      },
      {
        title: "5. Merit Evaluation & Award Disbursement",
        points: [
          "Rankings are determined by an automated system based on 50% NCERT and 50% Logical Reasoning weightage.",
          "Shortlisted toppers must undergo physical document verification and identity audit before the final award ceremony.",
          "The decision of the GPET Merit Committee regarding rankings and reward eligibility is final.",
        ],
      },
      {
        title: "6. Scholarships & Institutional Grants",
        points: [
          "Scholarship offers from institutional partners are subject to the respective institution’s admission criteria.",
          "GPET serves as a facilitation platform for merit-holders to access these grants.",
        ],
      },
      {
        title: "7. Intellectual Property & Conduct",
        points: [
          "All software, examination content, and brand assets related to Gradorra and GPET are the intellectual property of Gradorra Private Limited.",
          "Any attempt to hack, reverse-engineer, or defame the GPET platform may lead to legal action under the jurisdiction of the courts in Noida/Greater Noida, Uttar Pradesh.",
        ],
      },
      {
        title: "8. Modification of Terms",
        points: [
          "Gradorra Private Limited reserves the right to update or modify these terms at any time without prior notice to ensure the smooth execution of the initiative.",
        ],
      },
    ],
    initiative: "An Initiative by Faisal Khan",
    founder: "Founder & CEO, Gradorra Private Limited.",
    copyright: "© 2026 Gradorra Private Limited. All Rights Reserved.",
  },
  hi: {
    badge: "Legal",
    title: "Terms & Conditions",
    subtitle:
      "Gradorra Pre-Eligibility Test (GPET) 2026 ke official portal par aapka swagat hai. Registration aur participation ke saath aap in terms and conditions ko accept karte hain.",
    sections: [
      {
        title: "1. Eligibility & Registration",
        points: [
          "GPET 2026 Uttar Pradesh ke 75 districts mein padh rahe ya reh rahe students ke liye open hai.",
          "Registration details student ke government ID jaise Aadhaar ya School ID se match honi chahiye.",
          "Kisi bhi galat jankari par automatic disqualification ho sakta hai.",
        ],
      },
      {
        title: "2. AI-Proctored Examination Protocol",
        points: [
          "GPET ek mobile-based AI-proctored exam hai aur exam ke dauran camera aur microphone access required hoga.",
          "Multiple faces, external voices, screen recording, ya app switching detect hone par exam terminate ho sakta hai.",
          "Technical failure, battery drain, ya network issue ke liye Gradorra Pvt. Ltd. zimmedar nahi hoga.",
        ],
      },
      {
        title: "3. Dynamic Reward Scaling Policy",
        points: [
          "Physical rewards jaise laptops, tablets, aur smartphones ka total pool verified participation ke hisab se scale karega.",
          '"Upto 30,000 Rewards" ka mention 20-Lakh verified registration milestone par maximum reward pool ko refer karta hai.',
          "Agar participation 20-Lakh target se kam hoti hai, to awardees ki sankhya pro-rata basis par adjust ki ja sakti hai.",
          "State, Zonal, aur District categories ke final winners GPET Merit Committee dwara examination ke baad declare honge.",
        ],
      },
      {
        title: '4. Data Sovereignty (The "Amanat" Clause)',
        points: [
          'Gradorra Private Limited student data ko "Amanat" yani Sacred Trust ke roop mein treat karta hai.',
          "Data kisi bhi third-party partner ya marketer ko sell, share, ya trade nahi kiya jayega.",
          "Collected data sirf identity verification, result processing, aur personalized AI career roadmap ke liye use hoga.",
        ],
      },
      {
        title: "5. Merit Evaluation & Award Disbursement",
        points: [
          "Ranking automated system ke through 50% NCERT aur 50% Logical Reasoning weightage par determine hogi.",
          "Shortlisted toppers ko final award ceremony se pehle physical document verification aur identity audit se guzarna hoga.",
          "Rankings aur reward eligibility par GPET Merit Committee ka decision final hoga.",
        ],
      },
      {
        title: "6. Scholarships & Institutional Grants",
        points: [
          "Institutional partners ke scholarship offers unke apne admission criteria ke subject honge.",
          "GPET merit-holders ko in grants tak pahunch dene ke liye ek facilitation platform ke roop mein kaam karta hai.",
        ],
      },
      {
        title: "7. Intellectual Property & Conduct",
        points: [
          "Gradorra aur GPET se jude software, exam content, aur brand assets Gradorra Private Limited ki intellectual property hain.",
          "Platform ko hack, reverse-engineer, ya defame karne par Noida/Greater Noida, Uttar Pradesh ke courts ke jurisdiction mein legal action ho sakta hai.",
        ],
      },
      {
        title: "8. Modification of Terms",
        points: [
          "Initiative ke smooth execution ke liye Gradorra Private Limited bina prior notice ke in terms ko update ya modify kar sakta hai.",
        ],
      },
    ],
    initiative: "An Initiative by Faisal Khan",
    founder: "Founder & CEO, Gradorra Private Limited.",
    copyright: "© 2026 Gradorra Private Limited. All Rights Reserved.",
  },
};

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex rounded-full border border-[#e8732a]/15 bg-[#fff4ed] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
      {children}
    </div>
  );
}

export default function TermsPage({ lang = "en" }: { lang?: Lang }) {
  const t = termsCopy[lang];

  return (
    <main className="bg-[#fcfaf8] text-[#2f1608]">
      <section className="border-b border-[#e8732a]/10">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionBadge>{t.badge}</SectionBadge>

          <h1 className="mt-5 text-[clamp(2.2rem,5vw,4rem)] font-bold leading-[1] tracking-[-0.04em] text-[#2f1608]">
            {t.title}
          </h1>

          <p className="mt-5 max-w-3xl text-base leading-8 text-[#2f1608]/72 sm:text-lg">
            {t.subtitle}
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="space-y-8">
            {t.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-[24px] border border-[#2f1608]/8 bg-white p-6 sm:p-7"
              >
                <h2 className="text-xl font-bold tracking-[-0.02em] text-[#2f1608] sm:text-2xl">
                  {section.title}
                </h2>

                <ul className="mt-4 space-y-3">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="text-sm leading-7 text-[#2f1608]/75 sm:text-[15px]"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-10 border-t border-[#2f1608]/10 pt-6 text-center">
            <p className="text-base font-semibold text-[#2f1608]">
              {t.initiative}
            </p>
            <p className="mt-1 text-sm text-[#2f1608]/68">{t.founder}</p>
            <p className="mt-4 text-xs uppercase tracking-[0.14em] text-[#2f1608]/45">
              {t.copyright}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}