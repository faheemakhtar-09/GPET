import { Laptop, TabletSmartphone, Smartphone, ArrowRight } from "lucide-react";

const rewards = [
  {
    title: "State Topper",
    count: "Top Tier Rewards",
    icon: Laptop,
    desc: "Premium recognition and flagship scholarship benefits for the highest achievers across the state.",
  },
  {
    title: "Zonal Topper",
    count: "Regional Merit Rewards",
    icon: TabletSmartphone,
    desc: "Strong scholarship opportunities and recognition for top-performing students at the zonal level.",
  },
  {
    title: "District Topper",
    count: "District Achievement Rewards",
    icon: Smartphone,
    desc: "Broad access to rewards and recognition designed to encourage merit across every district.",
  },
];

export default function RewardsGallery() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-[#D4AF37]/25 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#002366] shadow-sm">
            Rewards Gallery
          </span>

          <h2 className="mt-5 font-montserrat text-3xl font-bold tracking-[-0.03em] text-[#002366] sm:text-4xl lg:text-5xl">
            30,000+ Rewards Across Every Level
          </h2>

          <p className="mx-auto mt-4 max-w-2xl font-inter text-sm leading-7 text-[#002366]/70 sm:text-base">
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
                className="group relative overflow-hidden rounded-[28px] border border-[#D4AF37]/15 bg-white p-6 shadow-[0_18px_45px_rgba(0,35,102,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,35,102,0.14)]"
              >
                {/* soft glow */}
                <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[#D4AF37]/10 blur-3xl transition duration-300 group-hover:bg-[#D4AF37]/20" />

                {/* top */}
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#D4AF37]/20 bg-[#002366] text-[#D4AF37] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>

                  <span className="rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#8f6a10]">
                    {item.count}
                  </span>
                </div>

                {/* content */}
                <div className="relative mt-8">
                  <h3 className="font-montserrat text-2xl font-semibold tracking-[-0.02em] text-[#002366]">
                    {item.title}
                  </h3>

                  <p className="mt-4 font-inter text-sm leading-7 text-[#002366]/70 sm:text-[15px]">
                    {item.desc}
                  </p>
                </div>

                {/* footer */}
                <div className="relative mt-8 flex items-center justify-between border-t border-[#002366]/8 pt-5">
                  <span className="font-inter text-sm font-medium text-[#002366]">
                    Merit-based recognition
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#D4AF37] transition duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

        {/* bottom ticker */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#D4AF37]/15 bg-[#002366] py-4 shadow-[0_14px_40px_rgba(0,35,102,0.16)]">
          <div className="flex min-w-max animate-[marquee_20s_linear_infinite] items-center gap-10 px-6 text-sm font-medium text-white">
            <span className="text-[#D4AF37]">Upcoming Scholarships</span>
            <span>Merit Scholarship Updates</span>
            <span>District Rank Announcements</span>
            <span>Zonal Recognition Programs</span>
            <span>Topper Benefit Highlights</span>
            <span>Registration Deadlines & Alerts</span>
            <span className="text-[#D4AF37]">Upcoming Scholarships</span>
            <span>Merit Scholarship Updates</span>
            <span>District Rank Announcements</span>
            <span>Zonal Recognition Programs</span>
          </div>
        </div>
      </div>
    </section>
  );
}