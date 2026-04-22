import React from "react";

type ProvideItem = {
  title: string;
  description: string;
  image: string;
};

const provideItems: ProvideItem[] = [
  {
    title: "High-Performance Laptop",
    description:
      "Powerful laptops built for advanced study, online learning, projects, productivity, and long-term academic performance.",
    image: "/images/rewards/lp.jpeg",
  },
  {
    title: "Advanced Tablet",
    description:
      "Modern tablets for digital notes, e-books, practice tests, recorded lectures, and flexible study anywhere.",
    image: "/images/rewards/tablet.jpeg",
  },
  {
    title: "Smartphone",
    description:
      "Smartphones that keep students connected to learning apps, updates, communication tools, and academic resources.",
    image: "/images/rewards/mob.png",
  },
  {
    title: "Smartwatch",
    description:
      "Smart wearables that support time management, focus, daily routine tracking, and productivity discipline.",
    image: "/images/rewards/wath.jpeg",
  },
  {
    title: "Educational Kit",
    description:
      "Curated learning materials, exam support resources, guidance tools, and academic essentials for better preparation.",
    image: "/images/rewards/kit.jpeg",
  },
];

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex rounded-full border border-[#e8732a]/15 bg-[#fff4ed] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
      {children}
    </div>
  );
}

export default function WhatWeProvideSection() {
  return (
    <section className="relative overflow-hidden border-t border-[#e8732a]/10 bg-[linear-gradient(180deg,#fffaf7_0%,#ffffff_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-0 h-72 w-72 rounded-full bg-[#e8732a]/7 blur-3xl" />
        <div className="absolute right-[-8%] bottom-0 h-96 w-96 rounded-full bg-[#e8732a]/6 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <SectionBadge>What We Provide</SectionBadge>

          <h2 className="mt-5 text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#2f1608]">
            Digital tools and study support for deserving students
          </h2>

          <p className="mt-4 text-base leading-8 text-[#2f1608]/72 sm:text-lg">
            GPET 2026 is committed to supporting merit students with practical
            devices and learning resources that improve access, confidence, and
            academic readiness.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {provideItems.map((item, index) => (
            <article
              key={item.title}
              className={`group overflow-hidden rounded-[28px] border border-[#e8732a]/10 bg-white shadow-[0_14px_34px_rgba(232,115,42,0.06)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(232,115,42,0.12)]
              ${index === 4 ? "sm:col-span-2 xl:col-span-1" : ""}`}
            >
              <div className="relative h-64 overflow-hidden sm:h-72">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2f1608]/30 via-transparent to-transparent" />
              </div>

              <div className="p-6 sm:p-7">
                <div className="inline-flex rounded-full border border-[#e8732a]/10 bg-[#fff7f2] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
                  Student Support
                </div>

                <h3 className="mt-4 text-[1.35rem] font-bold leading-tight tracking-[-0.02em] text-[#2f1608] sm:text-[1.5rem]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#2f1608]/72 sm:text-base">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
