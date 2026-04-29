"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white">
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-1 {
          animation: fadeUp 0.5s ease forwards 0.05s;
          opacity: 0;
        }
        .fade-2 {
          animation: fadeUp 0.5s ease forwards 0.15s;
          opacity: 0;
        }
        .fade-3 {
          animation: fadeUp 0.5s ease forwards 0.25s;
          opacity: 0;
        }
        .fade-4 {
          animation: fadeUp 0.5s ease forwards 0.35s;
          opacity: 0;
        }
        .fade-5 {
          animation: fadeUp 0.5s ease forwards 0.45s;
          opacity: 0;
        }
      `}</style>

      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://media.istockphoto.com/id/154208318/photo/pastel-sunset-over-the-ocean-in-a-cloudy-sky.jpg?s=612x612&w=0&k=20&c=TRU1mdgVRqTIuHgAy2BGNgPYnOPV6KuVbfvWEeY1ijs="
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(255,248,240,0.78)_0%,rgba(255,255,255,0.56)_42%,rgba(255,255,255,0.92)_100%)]" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[38%] bg-[linear-gradient(180deg,rgba(47,22,8,0)_0%,rgba(47,22,8,0.05)_100%)]" />

      <svg
        className="absolute bottom-0 left-0 z-10 w-full"
        viewBox="0 0 1440 220"
        preserveAspectRatio="none"
      >
        <path
          d="M0,170 C120,140 220,120 320,132 C420,145 510,190 620,178 C730,166 820,105 930,110 C1040,116 1130,176 1230,182 C1320,187 1385,160 1440,144 L1440,220 L0,220 Z"
          fill="#e5ddd3"
        />
        <path
          d="M0,186 C110,160 210,152 310,160 C420,170 510,198 620,192 C730,186 825,140 935,144 C1045,148 1130,182 1235,188 C1330,193 1390,183 1440,174 L1440,220 L0,220 Z"
          fill="#d7c8bb"
        />
      </svg>

      <div className="relative z-20 mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <div className="fade-2 mt-4 flex justify-center">
          <div className="inline-flex items-center overflow-hidden rounded-md border border-[#cf6a20] bg-[#e57a22] ">
            <div className="flex h-[58px] w-[58px] items-center justify-center border-r border-white/20 bg-[#d86d1f] px-3">
              <svg
                viewBox="0 0 64 64"
                className="h-8 w-8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M32 12L8 24L32 36L56 24L32 12Z" fill="white" />
                <path
                  d="M18 29V38C18 42 24 46 32 46C40 46 46 42 46 38V29"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M56 24V38"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="56" cy="41" r="3" fill="white" />
              </svg>
            </div>

            <div className="flex items-center px-5 py-2.5">
              <span
                className="text-white"
                style={{
                  fontFamily: `"Georgia", "Times New Roman", serif`,
                  fontSize: "clamp(1.9rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                GPET 2026
              </span>
            </div>
          </div>
        </div>
        <p className="mt-3 text-center text-xs font-semibold uppercase leading-relaxed tracking-[0.08em] text-[#e57a22] sm:text-sm md:text-base">
          India&apos;s first secure AI-proctored ecosystem, redefining merit for
          the digital age.
        </p>
        <div className="fade-3 mt-5 text-center">
          <h1 className="text-[clamp(2rem,5vw,3.8rem)] font-extrabold leading-[1.08] tracking-[-0.04em] text-[#244C9A] ">
            उत्तर प्रदेश का सबसे बड़ा डिजिटल मेधा चयन
          </h1>
          <p className="mt-3 text-[clamp(1rem,2vw,1.35rem)] font-semibold uppercase tracking-[0.18em] text-[#244C9A] ">
            PRE-REGISTRATION OPEN NOW
          </p>
        </div>

        <div className="fade-4 mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-[18px] border border-[#e8732a]/20 bg-[#fffaf6] p-4 text-center shadow-[0_10px_24px_rgba(232,115,42,0.08)]">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#fff1e7] text-[#e8732a] shadow-sm">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <path
                  d="M4 20a8 8 0 0 1 16 0"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
              Eligibility
            </p>
            <p className="mt-2 text-sm font-bold leading-tight text-[#1f1a16]">
              Class 8, 9, 10 & 12
            </p>
          </div>

          <div className="rounded-[18px] border border-[#e8732a]/20 bg-[#fffaf6] p-4 text-center shadow-[0_10px_24px_rgba(232,115,42,0.08)]">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#fff1e7] text-[#e8732a] shadow-sm">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M4 18L10 12L14 15L20 7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 11V7H16"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
              Target Reach
            </p>
            <p className="mt-2 text-sm font-bold leading-tight text-[#1f1a16]">
              20,00,000+ Students
            </p>
          </div>

          <div className="rounded-[18px] border border-[#e8732a]/20 bg-[#fffaf6] p-4 text-center shadow-[0_10px_24px_rgba(232,115,42,0.08)]">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#fff1e7] text-[#e8732a] shadow-sm">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M12 3l2.6 5.26L20 9.04l-4 3.9.94 5.5L12 15.9l-4.94 2.54.94-5.5-4-3.9 5.4-.78L12 3Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
              Awards
            </p>
            <p className="mt-2 text-sm font-bold leading-tight text-[#1f1a16]">
              Up to 30,000+ Merit Rewards
            </p>
          </div>

          <div className="rounded-[18px] border border-[#e8732a]/20 bg-[#fffaf6] p-4 text-center shadow-[0_10px_24px_rgba(232,115,42,0.08)]">
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#fff1e7] text-[#e8732a] shadow-sm">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path
                  d="M12 3v18"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <path
                  d="M7 8h8a3 3 0 0 0 0-6H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H7"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
              Direct Benefit
            </p>
            <p className="mt-2 text-sm font-bold leading-tight text-[#1f1a16]">
              Distributions
            </p>
          </div>
        </div>

        <p className="fade-4 mx-auto mt-6 max-w-3xl text-center text-sm leading-7 text-[#2f1608]/75 sm:text-base">
          GPET 2026 is designed to help eligible students from Classes 8, 9, 10,
          and 12 across Uttar Pradesh access a credible, scholarship-focused
          digital opportunity with a guided, mobile-first experience.
        </p>

        <div className="fade-5 mt-5 flex flex-col items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#10b981] shadow-[0_0_0_4px_rgba(16,185,129,0.18)]" />
            <span className="text-center text-sm font-semibold text-[#244c9a]">
              उत्तर प्रदेश का सबसे बड़ा डिजिटल मेधा चयन
            </span>
          </div>

          <button
            onClick={() =>
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdPNfs4bE48pYsGDQbTCubV6OwFMJpcFcmk70JT6QrzwXoraA/viewform?usp=dialog",
                "_blank",
                "noopener,noreferrer",
              )
            }
            className="inline-flex items-center justify-center rounded-full bg-[#e8732a] px-7 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(232,115,42,0.26)] transition hover:bg-[#d9651f]"
          >
            Register / Partner in Our Mission
          </button>

          <div className="mt-1 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-[#244c9a]/10 pt-4">
            {["75-District Reach", "Secure Data"].map((item) => (
              <span
                key={item}
                className="text-xs font-medium text-[#244c9a]/70"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
