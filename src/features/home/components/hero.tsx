"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16 sm:pt-36 lg:pt-40">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-[#244C9A]/[0.06] blur-3xl" />
        <div className="absolute right-[-5%] top-10 h-72 w-72 rounded-full bg-[#E8732A]/[0.10] blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#244C9A]/[0.05] blur-3xl" />

        <div className="absolute inset-0 opacity-[0.12]">
          <svg
            className="h-full w-full animate-[heroFloat_18s_ease-in-out_infinite]"
            viewBox="0 0 1440 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="heroLineA" x1="0" y1="0" x2="1440" y2="0">
                <stop offset="0%" stopColor="#244C9A" stopOpacity="0.18" />
                <stop offset="50%" stopColor="#6B86C9" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#E8732A" stopOpacity="0.18" />
              </linearGradient>

              <linearGradient id="heroLineB" x1="0" y1="0" x2="1440" y2="0">
                <stop offset="0%" stopColor="#E8732A" stopOpacity="0.12" />
                <stop offset="50%" stopColor="#244C9A" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#E8732A" stopOpacity="0.12" />
              </linearGradient>
            </defs>

            <path
              d="M-40 180C120 120 220 120 360 180C500 240 640 240 780 180C920 120 1080 120 1220 180C1320 220 1400 220 1480 180"
              stroke="url(#heroLineA)"
              strokeWidth="1.25"
            />
            <path
              d="M-20 340C140 290 300 290 430 340C560 390 700 390 840 340C980 290 1120 290 1260 340C1360 372 1420 372 1480 340"
              stroke="url(#heroLineB)"
              strokeWidth="1.1"
            />
            <path
              d="M-60 540C100 500 220 500 360 540C500 580 620 580 760 540C900 500 1060 500 1200 540C1320 576 1400 576 1500 540"
              stroke="url(#heroLineA)"
              strokeWidth="1"
            />

            <circle cx="120" cy="160" r="2.5" fill="#E8732A" fillOpacity="0.35" />
            <circle cx="260" cy="210" r="2" fill="#244C9A" fillOpacity="0.28" />
            <circle cx="420" cy="140" r="1.8" fill="#E8732A" fillOpacity="0.3" />
            <circle cx="620" cy="300" r="2.2" fill="#244C9A" fillOpacity="0.26" />
            <circle cx="760" cy="220" r="1.8" fill="#E8732A" fillOpacity="0.3" />
            <circle cx="920" cy="180" r="2.4" fill="#244C9A" fillOpacity="0.24" />
            <circle cx="1080" cy="260" r="2" fill="#E8732A" fillOpacity="0.3" />
            <circle cx="1260" cy="200" r="2.5" fill="#244C9A" fillOpacity="0.24" />
            <circle cx="1340" cy="320" r="2.2" fill="#E8732A" fillOpacity="0.3" />

            <circle cx="180" cy="520" r="2" fill="#244C9A" fillOpacity="0.24" />
            <circle cx="340" cy="560" r="2.4" fill="#E8732A" fillOpacity="0.28" />
            <circle cx="540" cy="500" r="1.8" fill="#244C9A" fillOpacity="0.24" />
            <circle cx="720" cy="620" r="2.3" fill="#E8732A" fillOpacity="0.3" />
            <circle cx="920" cy="540" r="2" fill="#244C9A" fillOpacity="0.24" />
            <circle cx="1120" cy="600" r="2.5" fill="#E8732A" fillOpacity="0.28" />
            <circle cx="1300" cy="540" r="1.8" fill="#244C9A" fillOpacity="0.22" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes heroFloat {
          0% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(8px, -10px, 0) scale(1.01);
          }
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
        }

        @keyframes heroPulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.04);
          }
        }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl">
          <div className="inline-flex items-center rounded-full border border-[#E8732A]/20 px-4 py-2 backdrop-blur-md">
            <Image
              src="/images/gpet-crest.png"
              alt="GPET logo"
              width={220}
              height={64}
              priority
              className="h-8 w-auto object-contain sm:h-10"
            />
          </div>

          <h1 className="mt-8 max-w-4xl font-montserrat text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#244C9A] sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#244C9A] via-[#365fbc] to-[#E8732A] bg-clip-text text-transparent">
              उत्तर प्रदेश का सबसे बड़ा डिजिटल मेधा चयन महा-अभियान
            </span>
          </h1>

          <p className="mt-6 max-w-2xl font-montserrat text-base font-medium text-[#244C9A]/80 sm:text-lg">
            20,00,000+ Students | 30,000+ Rewards
          </p>

          <p className="mt-4 max-w-2xl font-inter text-sm leading-7 text-[#244C9A]/72 sm:text-base">
            GPET 2026 is designed to help students across Uttar Pradesh access a credible,
            scholarship-focused digital opportunity with a guided, mobile-first experience.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button className="inline-flex animate-[heroPulse_2.4s_ease-in-out_infinite] items-center justify-center rounded-lg bg-[#E8732A] px-6 py-3.5 font-inter text-sm font-bold text-white shadow-[0_10px_24px_rgba(232,115,42,0.28)] transition duration-200 hover:scale-[1.02] hover:bg-[#D9651F]">
              Register Now
            </button>

            <div className="flex items-center gap-3 text-[#244C9A]/70">
              <div className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
              <span className="font-inter text-sm font-medium">
                Trusted merit-based scholarship screening
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}