"use client";

import Link from "next/link";
import { ArrowLeft, Home, Search, ShieldAlert } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-[#2f1608]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,115,42,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(232,115,42,0.08),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#e8732a_1px,transparent_1px),linear-gradient(to_bottom,#e8732a_1px,transparent_1px)] [background-size:40px_40px]" />

      <section className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e8732a]/25 bg-[#fff8f4] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
              <ShieldAlert className="h-4 w-4" />
              Page Not Found
            </div>

            <h1 className="mt-6 text-[clamp(4rem,12vw,8rem)] font-extrabold leading-none tracking-[-0.05em] text-[#2f1608]">
              404
            </h1>

            <h2 className="mt-3 text-[clamp(1.8rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.03em] text-[#2f1608]">
              This page is not available right now.
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#2f1608]/75 sm:text-lg">
              The page you are looking for may have been moved, removed, or the
              link may be incorrect.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e8732a] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(232,115,42,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#cf6322]"
              >
                <Home className="h-4 w-4" />
                Back to Home
              </Link>

              <button
                type="button"
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e8732a]/15 bg-white px-6 py-3.5 text-sm font-semibold text-[#2f1608] transition duration-300 hover:-translate-y-0.5 hover:border-[#e8732a]/40 hover:text-[#e8732a]"
              >
                <ArrowLeft className="h-4 w-4" />
                Go Back
              </button>
            </div>
          </div>

          <div className="relative rounded-[32px] border border-[#e8732a]/15 bg-white/95 p-8 shadow-[0_24px_80px_rgba(232,115,42,0.10)] backdrop-blur-sm">
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-[#e8732a]/10 blur-2xl" />

            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e8732a] text-white">
                <Search className="h-6 w-6" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
                  Navigation Help
                </p>
                <h3 className="mt-1 text-2xl font-bold text-[#2f1608]">
                  Continue your journey
                </h3>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <Link
                href="/about"
                className="group flex items-center justify-between rounded-2xl border border-[#e8732a]/10 bg-[#fffaf7] px-5 py-4 transition duration-300 hover:border-[#e8732a]/30 hover:bg-white"
              >
                <div>
                  <p className="text-lg font-bold text-[#2f1608]">
                    About Gradorra
                  </p>
                  <p className="mt-1 text-sm text-[#2f1608]/65">
                    Learn about our mission, leadership, and data trust.
                  </p>
                </div>
                <span className="text-sm font-semibold text-[#e8732a] transition group-hover:translate-x-1">
                  Open
                </span>
              </Link>

              <Link
                href="/gpet"
                className="group flex items-center justify-between rounded-2xl border border-[#e8732a]/10 bg-[#fffaf7] px-5 py-4 transition duration-300 hover:border-[#e8732a]/30 hover:bg-white"
              >
                <div>
                  <p className="text-lg font-bold text-[#2f1608]">GPET 2026</p>
                  <p className="mt-1 text-sm text-[#2f1608]/65">
                    Explore the scholarship initiative, merit model, and rewards.
                  </p>
                </div>
                <span className="text-sm font-semibold text-[#e8732a] transition group-hover:translate-x-1">
                  Open
                </span>
              </Link>

              <Link
                href="/contact"
                className="group flex items-center justify-between rounded-2xl border border-[#e8732a]/10 bg-[#fffaf7] px-5 py-4 transition duration-300 hover:border-[#e8732a]/30 hover:bg-white"
              >
                <div>
                  <p className="text-lg font-bold text-[#2f1608]">
                    Contact Support
                  </p>
                  <p className="mt-1 text-sm text-[#2f1608]/65">
                    Reach out if you need help finding the correct page.
                  </p>
                </div>
                <span className="text-sm font-semibold text-[#e8732a] transition group-hover:translate-x-1">
                  Open
                </span>
              </Link>
            </div>

            <div className="mt-8 rounded-2xl border border-[#e8732a]/20 bg-[#2f1608] p-5 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                Gradorra Standard
              </p>
              <p className="mt-2 text-xl font-bold leading-8">
                Merit deserves clarity, security, and the right direction.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}