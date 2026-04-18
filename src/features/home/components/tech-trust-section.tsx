"use client";

const trustItems = [
  {
    id: "ai",
    label: "Secure Intelligence",
    title: "AI-Proctoring",
    description:
      "Focused monitoring design that communicates fairness, confidence, and modern digital exam integrity.",
    type: "eye",
  },
  {
    id: "aadhaar",
    label: "Verified Identity",
    title: "Aadhar-Verified",
    description:
      "A structured verification experience that reinforces trust, eligibility confidence, and student authenticity.",
    type: "shield",
  },
  {
    id: "command",
    label: "Operational Oversight",
    title: "1000+ Commando live Monitors",
    description:
      "Human-backed supervision presented with institutional authority and strong on-ground monitoring assurance.",
    type: "grid",
  },
];

function LineIcon({ type }: { type: string }) {
  if (type === "eye") {
    return (
      <svg viewBox="0 0 64 64" className="h-11 w-11" fill="none" aria-hidden="true">
        <path
          d="M6 32C11 22 20 16 32 16C44 16 53 22 58 32C53 42 44 48 32 48C20 48 11 42 6 32Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="32" cy="32" r="7.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="32" cy="32" r="2.5" fill="currentColor" />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg viewBox="0 0 64 64" className="h-11 w-11" fill="none" aria-hidden="true">
        <path
          d="M32 8L49 14V28C49 39 42 48 32 54C22 48 15 39 15 28V14L32 8Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M24.5 32L29.5 37L40 26.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" className="h-11 w-11" fill="none" aria-hidden="true">
      <rect x="12" y="12" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <rect x="36" y="12" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <rect x="12" y="36" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <rect x="36" y="36" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export default function TechTrustSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0">
        <div className="absolute left-[-10%] top-0 h-80 w-80 rounded-full bg-[#244C9A]/[0.05] blur-3xl" />
        <div className="absolute right-[-10%] top-20 h-96 w-96 rounded-full bg-[#E8732A]/[0.10] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(232,115,42,0.05),_transparent_38%)]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center rounded-full border border-[#E8732A]/20 bg-[#FFF4ED] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#244C9A] backdrop-blur-md">
              Tech & Trust
            </div>

            <h2 className="mt-6 max-w-xl font-montserrat text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-[#244C9A] sm:text-4xl lg:text-5xl">
              Built to feel secure, credible, and institutionally strong
            </h2>

            <p className="mt-5 max-w-lg font-inter text-sm leading-7 text-[#244C9A]/72 sm:text-base">
              The platform experience should communicate trust from the first interaction,
              combining premium visual restraint with strong security cues and academic clarity.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-[32px] border border-[#E8732A]/12 bg-white p-6 shadow-[0_24px_80px_rgba(36,76,154,0.08)] sm:p-8">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#E8732A]/18 bg-[#FFF4ED] px-4 py-4">
                  <p className="font-inter text-[11px] uppercase tracking-[0.2em] text-[#E8732A]">
                    Protection Layer
                  </p>
                  <p className="mt-2 font-montserrat text-2xl font-bold tracking-[-0.03em] text-[#244C9A]">
                    AI Led
                  </p>
                </div>

                <div className="rounded-2xl border border-[#244C9A]/10 bg-[#F8FAFC] px-4 py-4">
                  <p className="font-inter text-[11px] uppercase tracking-[0.2em] text-[#244C9A]/55">
                    Identity Status
                  </p>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#10B981]/10 px-3 py-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                    <span className="font-inter text-sm font-semibold text-[#10B981]">
                      Verified
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#244C9A]/10 bg-[#F8FAFC] px-4 py-4">
                  <p className="font-inter text-[11px] uppercase tracking-[0.2em] text-[#244C9A]/55">
                    Ground Oversight
                  </p>
                  <p className="mt-2 font-montserrat text-2xl font-bold tracking-[-0.03em] text-[#244C9A]">
                    1000+
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {trustItems.map((item, index) => (
            <article
              key={item.id}
              className="group relative overflow-hidden rounded-[30px] border border-[#E8732A]/12 bg-white p-7 shadow-[0_16px_50px_rgba(36,76,154,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#E8732A]/25 hover:shadow-[0_24px_60px_rgba(36,76,154,0.12)]"
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(232,115,42,0.05),rgba(255,255,255,0))] opacity-0 transition duration-300 group-hover:opacity-100" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-[#E8732A]/20 bg-[#FFF4ED] text-[#E8732A]">
                    <LineIcon type={item.type} />
                  </div>

                  {index === 1 ? (
                    <span className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/15 bg-[#10B981]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#10B981]">
                      <span className="h-2 w-2 rounded-full bg-[#10B981]" />
                      Verified
                    </span>
                  ) : null}
                </div>

                <p className="mt-8 font-inter text-[11px] font-semibold uppercase tracking-[0.24em] text-[#E8732A]">
                  {item.label}
                </p>

                <h3 className="mt-3 font-montserrat text-2xl font-bold tracking-[-0.03em] text-[#244C9A]">
                  {item.title}
                </h3>

                <p className="mt-4 font-inter text-sm leading-7 text-[#244C9A]/72">
                  {item.description}
                </p>

                <div className="mt-8 h-px w-full bg-gradient-to-r from-[#E8732A]/35 via-[#244C9A]/10 to-transparent" />

                <div className="mt-6 flex items-center justify-between">
                  <span className="font-inter text-sm text-[#244C9A]/55">
                    Trust signal
                  </span>

                  <span className="font-inter text-sm font-semibold text-[#244C9A]">
                    {item.id === "ai"
                      ? "Live monitoring"
                      : item.id === "aadhaar"
                      ? "Identity checked"
                      : "Human supervision"}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}