import {
  Globe2,
  ShieldCheck,
  Trophy,
  ArrowRight,
} from "lucide-react";

const rewards = [
  {
    title: "Massive Reach",
    count: "75 Districts",
    icon: Globe2,
    desc: "Large-scale access across Uttar Pradesh with a broad, inclusive scholarship screening footprint.",
    points: ["75 जिलों तक पहुँच", "20 लाख+ छात्र लक्ष्य"],
  },
  {
    title: "Transparent & Secure",
    count: "Verified Process",
    icon: ShieldCheck,
    desc: "Built with secure verification, structured screening, and trust-focused student participation flow.",
    points: ["AI-प्रॉक्टिरिंग", "आधार सत्यापन"],
  },
  {
    title: "Merit Incentives",
    count: "Upto 30,000+ Rewards",
    icon: Trophy,
    desc: "Recognition and rewards designed to motivate students at district, zonal, and state levels.",
    points: ["लैपटॉप / टैबलेट / स्मार्टफोन / छात्रवृत्ति / स्टडी किट्स", "Upto 30,000+ पुरस्कार"],
  },
];

export default function RewardsGallery() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-5%] top-20 h-72 w-72 rounded-full bg-[#244C9A]/[0.05] blur-3xl" />
        <div className="absolute right-[-5%] top-10 h-72 w-72 rounded-full bg-[#E8732A]/[0.10] blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#E8732A]/20 bg-[#FFF4ED] px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#244C9A] shadow-sm">
            Rewards Gallery
          </span>

          <h2 className="mt-5 font-montserrat text-3xl font-bold tracking-[-0.03em] text-[#244C9A] sm:text-4xl lg:text-5xl">
            Upto 30,000+ Rewards Across Every Level
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-inter text-sm leading-7 text-[#244C9A]/70 sm:text-base">
            GPET 2026 is structured to recognize talent from district rankers to
            state toppers, making the scholarship journey aspirational, inclusive,
            and merit-driven.
          </p>
        </div>

        {/* cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {rewards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-[28px] border border-[#E8732A]/15 bg-white p-[1px] shadow-[0_18px_50px_rgba(36,76,154,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(36,76,154,0.14)]"
              >
                <div className="relative h-full rounded-[27px] bg-[linear-gradient(180deg,#ffffff_0%,#fff8f4_100%)] p-6">
                  {/* glow */}
                  <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#E8732A]/12 blur-3xl transition duration-300 group-hover:bg-[#E8732A]/20" />
                  <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#244C9A] via-[#E8732A] to-[#244C9A]" />

                  {/* top */}
                  <div className="relative flex items-start justify-between gap-4">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] bg-[#244C9A] text-[#E8732A] shadow-[0_14px_30px_rgba(36,76,154,0.20)]">
                      <div className="absolute inset-0 rounded-[20px] border border-white/10" />
                      <Icon className="h-7 w-7" strokeWidth={1.9} />
                    </div>

                    <span className="inline-flex rounded-full border border-[#E8732A]/20 bg-[#FFF4ED] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-[#C95F1D]">
                      {item.count}
                    </span>
                  </div>

                  {/* content */}
                  <div className="relative mt-8">
                    <h3 className="font-montserrat text-2xl font-bold tracking-[-0.03em] text-[#244C9A]">
                      {item.title}
                    </h3>

                    <p className="mt-4 font-inter text-sm leading-7 text-[#244C9A]/70 sm:text-[15px]">
                      {item.desc}
                    </p>
                  </div>

                  {/* points */}
                  <div className="relative mt-6 space-y-3">
                    {item.points.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-3 rounded-2xl border border-[#244C9A]/8 bg-[#F8FAFC] px-4 py-3"
                      >
                        <div className="h-2.5 w-2.5 rounded-full bg-[#E8732A]" />
                        <span className="font-inter text-sm font-medium text-[#244C9A]/85">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* footer */}
                  <div className="relative mt-8 flex items-center justify-between rounded-2xl border border-[#E8732A]/10 bg-white px-4 py-3 shadow-[0_8px_20px_rgba(36,76,154,0.04)]">
                    <span className="font-inter text-sm font-semibold text-[#244C9A]">
                      Merit-based recognition
                    </span>

                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#E8732A]/12 text-[#E8732A] transition duration-300 group-hover:translate-x-1 group-hover:bg-[#E8732A]/20">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* bottom ticker */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#E8732A]/15 bg-[#244C9A] py-4 shadow-[0_14px_40px_rgba(36,76,154,0.16)]">
          <div className="flex min-w-max animate-[marquee_20s_linear_infinite] items-center gap-10 px-6 text-sm font-medium text-white">
            <span className="text-[#FFD1B5]">Upcoming Scholarships</span>
            <span>Merit Scholarship Updates</span>
            <span>District Rank Announcements</span>
            <span>Zonal Recognition Programs</span>
            <span>Topper Benefit Highlights</span>
            <span>Registration Deadlines & Alerts</span>
            <span className="text-[#FFD1B5]">Upcoming Scholarships</span>
            <span>Merit Scholarship Updates</span>
            <span>District Rank Announcements</span>
            <span>Zonal Recognition Programs</span>
          </div>
        </div>
      </div>
    </section>
  );
}