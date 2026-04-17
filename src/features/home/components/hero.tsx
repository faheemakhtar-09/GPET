"use client";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#F8FAFC] pt-32 pb-16 sm:pt-36 lg:pt-40">
      {/* Background particles / soft glow */}
      <div className="absolute inset-0 -z-10">
        {/* soft ambient glows */}
        <div className="absolute left-[-10%] top-20 h-72 w-72 rounded-full bg-[#002366]/[0.06] blur-3xl" />
        <div className="absolute right-[-5%] top-10 h-72 w-72 rounded-full bg-[#D4AF37]/[0.10] blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#002366]/[0.05] blur-3xl" />

        {/* subtle flowing SVG particle animation */}
        <div className="absolute inset-0 opacity-[0.14]">
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
                <stop offset="0%" stopColor="#002366" stopOpacity="0.18" />
                <stop offset="50%" stopColor="#5A78B8" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.18" />
              </linearGradient>

              <linearGradient id="heroLineB" x1="0" y1="0" x2="1440" y2="0">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.12" />
                <stop offset="50%" stopColor="#002366" stopOpacity="0.10" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.12" />
              </linearGradient>
            </defs>

            {/* flowing lines */}
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

            {/* particles */}
            <circle cx="120" cy="160" r="2.5" fill="#D4AF37" fillOpacity="0.35" />
            <circle cx="260" cy="210" r="2" fill="#002366" fillOpacity="0.28" />
            <circle cx="420" cy="140" r="1.8" fill="#D4AF37" fillOpacity="0.3" />
            <circle cx="620" cy="300" r="2.2" fill="#002366" fillOpacity="0.26" />
            <circle cx="760" cy="220" r="1.8" fill="#D4AF37" fillOpacity="0.3" />
            <circle cx="920" cy="180" r="2.4" fill="#002366" fillOpacity="0.24" />
            <circle cx="1080" cy="260" r="2" fill="#D4AF37" fillOpacity="0.3" />
            <circle cx="1260" cy="200" r="2.5" fill="#002366" fillOpacity="0.24" />
            <circle cx="1340" cy="320" r="2.2" fill="#D4AF37" fillOpacity="0.3" />

            <circle cx="180" cy="520" r="2" fill="#002366" fillOpacity="0.24" />
            <circle cx="340" cy="560" r="2.4" fill="#D4AF37" fillOpacity="0.28" />
            <circle cx="540" cy="500" r="1.8" fill="#002366" fillOpacity="0.24" />
            <circle cx="720" cy="620" r="2.3" fill="#D4AF37" fillOpacity="0.3" />
            <circle cx="920" cy="540" r="2" fill="#002366" fillOpacity="0.24" />
            <circle cx="1120" cy="600" r="2.5" fill="#D4AF37" fillOpacity="0.28" />
            <circle cx="1300" cy="540" r="1.8" fill="#002366" fillOpacity="0.22" />
          </svg>
        </div>
      </div>

      {/* local keyframes */}
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
      `}</style>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-10 lg:px-8">
        {/* LEFT - 60% */}
        <div className="lg:col-span-6">
          <div className="inline-flex items-center rounded-full border border-[#D4AF37]/25 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#002366] backdrop-blur-md">
            Gradorra Pre-Eligibility Test 2026
          </div>

          <h1 className="mt-6 max-w-4xl font-montserrat text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-[#002366] sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-[#002366] via-[#244c9a] to-[#D4AF37] bg-clip-text text-transparent">
              उत्तर प्रदेश का सबसे बड़ा डिजटल मेधा चयन महा-अभयान
            </span>
          </h1>

          <p className="mt-6 max-w-2xl font-montserrat text-base font-medium text-[#002366]/80 sm:text-lg">
            20,00,000+ Students | 30,000+ Rewards
          </p>

          <p className="mt-4 max-w-2xl font-inter text-sm leading-7 text-[#002366]/70 sm:text-base">
            GPET 2026 is designed to help students across Uttar Pradesh access a
            credible, scholarship-focused digital opportunity with a guided,
            mobile-first experience.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button className="inline-flex animate-[heroPulse_2.4s_ease-in-out_infinite] items-center justify-center rounded-lg bg-[#D4AF37] px-6 py-3.5 font-inter text-sm font-bold text-white shadow-[0_10px_24px_rgba(212,175,55,0.28)] transition duration-200 hover:scale-[1.02] hover:bg-[#c9a12d]">
              Register Now
            </button>

            <div className="flex items-center gap-3 text-[#002366]/70">
              <div className="h-2.5 w-2.5 rounded-full bg-[#10B981]" />
              <span className="font-inter text-sm font-medium">
                Trusted merit-based scholarship screening
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT - 40% */}
        <div className="lg:col-span-4">
          <div className="relative mx-auto max-w-md">
            {/* glow */}
            <div className="absolute inset-x-10 top-10 h-72 rounded-full bg-[#D4AF37]/25 blur-3xl" />

            {/* main visual shell */}
            <div className="relative overflow-hidden rounded-[32px] border border-[#D4AF37]/20 bg-gradient-to-b from-[#0d224f] to-[#08152f] p-4 shadow-[0_24px_60px_rgba(0,35,102,0.22)]">
              {/* inner frame */}
              <div className="rounded-[24px] border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl">
                <div className="relative flex aspect-[4/5] items-end justify-center overflow-hidden rounded-[20px] bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.35),_rgba(255,255,255,0.02)_45%,_rgba(255,255,255,0)_70%)]">
                  {/* silhouette placeholder */}
                  <div className="h-[78%] w-[62%] rounded-t-[120px] rounded-b-[28px] bg-gradient-to-b from-white/20 to-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]" />
                </div>
              </div>

              {/* floating info chip */}
              <div className="absolute left-3 top-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-lg">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                  Students
                </p>
                <p className="mt-1 text-lg font-semibold text-white">20L+</p>
              </div>

              {/* floating rewards chip */}
              <div className="absolute bottom-4 right-3 rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/10 px-4 py-3 backdrop-blur-lg">
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                  Rewards
                </p>
                <p className="mt-1 text-lg font-semibold text-[#F8FAFC]">
                  30K+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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
    </section>
  );
}