"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M15 8L16.8 6.2C17.4 5.6 18.4 6 18.4 6.9V17.1C18.4 18 17.4 18.4 16.8 17.8L15 16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="4"
        y="7"
        width="11"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 3L18 5.5V11.2C18 15.2 15.5 18.8 12 20.5C8.5 18.8 6 15.2 6 11.2V5.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.4 11.9L11.1 13.6L14.8 9.9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TimerChip() {
  const [timeLeft, setTimeLeft] = useState(75);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => (prev <= 10 ? 10 : prev - 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isWarning = timeLeft <= 10;

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold ${
        isWarning
          ? "border-[#E8732A]/35 bg-[#FFF4ED] text-[#B45309]"
          : "border-[#244C9A]/10 bg-[#F8FAFC] text-[#244C9A]/80"
      }`}
    >
      <span
        className={`h-2 w-2 rounded-full ${isWarning ? "bg-[#E8732A]" : "bg-[#10B981]"}`}
      />
      <span className="font-inter tracking-[0.12em] uppercase">
        Timer {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:
        {String(timeLeft % 60).padStart(2, "0")}
      </span>
    </div>
  );
}

function QuestionDot({
  number,
  state,
}: {
  number: number;
  state: "attempted" | "flagged" | "idle";
}) {
  const styles =
    state === "attempted"
      ? "bg-[#10B981] text-white border-[#10B981]"
      : state === "flagged"
        ? "bg-[#FFF4ED] text-[#E8732A] border-[#E8732A]/30"
        : "bg-[#F8FAFC] text-[#244C9A]/45 border-[#244C9A]/10";

  return (
    <div
      className={`flex h-9 w-9 items-center justify-center rounded-full border text-xs font-semibold ${styles}`}
    >
      {number}
    </div>
  );
}

export default function TestRoomPreviewSection() {
  const sampleQuestions = Array.from({ length: 20 }, (_, i) => {
    if ([1, 4, 7, 11, 16].includes(i))
      return { number: i + 1, state: "attempted" as const };
    if ([2, 8, 13].includes(i))
      return { number: i + 1, state: "flagged" as const };
    return { number: i + 1, state: "idle" as const };
  });

  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <span className="inline-flex rounded-full border border-[#E8732A]/20 bg-[#FFF4ED] px-4 py-2 font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-[#244C9A]">
              Focus Mode Preview
            </span>

            <h2 className="mt-4 font-montserrat text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[#244C9A]">
              AI-Proctored test room built for trust, discipline, and exam focus
            </h2>

            <p className="mt-4 max-w-2xl font-inter text-sm leading-7 text-[#244C9A]/70 sm:text-base">
              The GPET exam interface is designed to create a high-confidence
              testing environment with live monitoring cues, a structured
              question palette, and clear time visibility before students enter
              the real test room.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#244C9A]/10 bg-[#F8FAFC] px-4 py-2 text-sm text-[#244C9A]/85">
                <CameraIcon />
                <span className="font-inter">Live webcam placeholder</span>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#244C9A]/10 bg-[#F8FAFC] px-4 py-2 text-sm text-[#244C9A]/85">
                <ShieldIcon />
                <span className="font-inter">Security-aware exam layout</span>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/test-room"
                className="inline-flex items-center justify-center rounded-xl bg-[#E8732A] px-5 py-3 font-inter text-sm font-semibold text-white transition hover:opacity-95"
              >
                Explore Test Room
              </Link>

              <Link
                href="/register"
                className="inline-flex items-center justify-center rounded-xl border border-[#244C9A]/10 bg-white px-5 py-3 font-inter text-sm font-semibold text-[#244C9A] transition hover:bg-[#F8FAFC]"
              >
                Register for GPET
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[#E8732A]/12 bg-white p-4 shadow-[0_20px_80px_rgba(36,76,154,0.08)] sm:p-5">
            <div className="pointer-events-none absolute inset-0 rounded-[28px] border border-[#E8732A]/18" />
            <div className="pointer-events-none absolute left-0 top-0 h-[3px] w-full bg-[#E8732A]/70" />

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-3 rounded-2xl border border-[#244C9A]/10 bg-[#F8FAFC] p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-[#E8732A]">
                    GPET Examination UI
                  </p>
                  <h3 className="mt-2 font-montserrat text-xl font-bold tracking-[-0.02em] text-[#244C9A]">
                    Secure Test Environment
                  </h3>
                </div>

                <TimerChip />
              </div>

              <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-2xl border border-[#244C9A]/10 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-inter text-sm font-medium text-[#244C9A]/80">
                      Question 12 of 100
                    </p>
                    <span className="rounded-full bg-[#10B981]/10 px-3 py-1 font-inter text-[11px] font-semibold uppercase tracking-[0.14em] text-[#10B981]">
                      Face Detected
                    </span>
                  </div>

                  <div className="mt-4 rounded-2xl border border-dashed border-[#244C9A]/10 bg-[#F8FAFC] p-5">
                    <div className="flex aspect-[16/9] items-center justify-center rounded-xl border border-[#244C9A]/10 bg-[radial-gradient(circle_at_center,rgba(232,115,42,0.10),rgba(255,255,255,0.7)_55%,transparent_75%)]">
                      <div className="text-center">
                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#10B981]/20 bg-[#10B981]/10 text-[#10B981]">
                          <CameraIcon />
                        </div>
                        <p className="mt-3 font-inter text-sm text-[#244C9A]/70">
                          Live webcam monitoring preview
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 rounded-xl border border-[#244C9A]/10 bg-white p-4">
                      <p className="font-inter text-xs uppercase tracking-[0.16em] text-[#E8732A]">
                        Sample Prompt
                      </p>
                      <p className="mt-2 font-inter text-sm leading-7 text-[#244C9A]/75">
                        Candidates will see a distraction-free question area,
                        clear answer states, and real-time monitoring cues
                        during the exam.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#244C9A]/10 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-montserrat text-lg font-bold tracking-[-0.02em] text-[#244C9A]">
                      Question Palette
                    </p>
                    <span className="font-inter text-xs text-[#244C9A]/50">
                      100 total
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-5 gap-2">
                    {sampleQuestions.map((item) => (
                      <QuestionDot
                        key={item.number}
                        number={item.number}
                        state={item.state}
                      />
                    ))}
                  </div>

                  <div className="mt-5 space-y-2 rounded-xl border border-[#244C9A]/10 bg-[#F8FAFC] p-4">
                    <div className="flex items-center gap-2 font-inter text-sm text-[#244C9A]/75">
                      <span className="h-3 w-3 rounded-full bg-[#10B981]" />
                      Attempted
                    </div>
                    <div className="flex items-center gap-2 font-inter text-sm text-[#244C9A]/75">
                      <span className="h-3 w-3 rounded-full bg-[#E8732A]" />
                      Flagged
                    </div>
                    <div className="flex items-center gap-2 font-inter text-sm text-[#244C9A]/75">
                      <span className="h-3 w-3 rounded-full bg-[#244C9A]/20" />
                      Unvisited
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}