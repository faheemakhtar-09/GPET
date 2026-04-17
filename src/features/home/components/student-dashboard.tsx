"use client";

import { useEffect, useMemo, useState } from "react";

type StepStatus = "complete" | "current" | "locked";

const TARGET_DATE = "2026-06-15T09:00:00";
const INITIAL_TIME = { days: 0, hours: 0, minutes: 0, seconds: 0 };

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M5 12.5L9.2 16.7L19 7.5"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 10V8C8 5.8 9.8 4 12 4C14.2 4 16 5.8 16 8V10" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function getCountdown(targetDate: string) {
  const diff = new Date(targetDate).getTime() - Date.now();

  if (diff <= 0) {
    return INITIAL_TIME;
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function useCountdown(targetDate: string) {
  const [time, setTime] = useState(INITIAL_TIME);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(getCountdown(targetDate));

    const interval = setInterval(() => {
      setTime(getCountdown(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return { time, mounted };
}

function CircleProgress({ value }: { value: number }) {
  const radius = 30;
  const stroke = 6;
  const normalized = radius - stroke / 2;
  const circumference = 2 * Math.PI * normalized;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative h-[72px] w-[72px]">
      <svg className="h-[72px] w-[72px] -rotate-90" viewBox="0 0 72 72">
        <circle
          cx="36"
          cy="36"
          r={normalized}
          fill="none"
          stroke="rgba(0,35,102,0.12)"
          strokeWidth={stroke}
        />
        <circle
          cx="36"
          cy="36"
          r={normalized}
          fill="none"
          stroke="#D4AF37"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 0.8s ease" }}
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-montserrat text-sm font-bold tracking-[-0.02em] text-[#002366]">
          {value}%
        </span>
      </div>
    </div>
  );
}

function StepCard({
  number,
  title,
  description,
  status,
}: {
  number: number;
  title: string;
  description: string;
  status: StepStatus;
}) {
  const isComplete = status === "complete";
  const isCurrent = status === "current";
  const isLocked = status === "locked";

  return (
    <div className="rounded-2xl border border-[#D4AF37]/15 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md">
      <div className="flex items-start gap-4">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${
            isComplete
              ? "border-[#10B981] bg-[#10B981] text-white"
              : isCurrent
                ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]"
                : "border-[#002366]/10 bg-[#002366]/5 text-[#002366]/40"
          }`}
        >
          {isComplete ? (
            <CheckIcon />
          ) : isLocked ? (
            <LockIcon />
          ) : (
            <span className="font-inter text-sm font-bold">{number}</span>
          )}
        </div>

        <div>
          <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Step {number}
          </p>
          <h3 className="mt-1 font-montserrat text-[1.1rem] font-bold leading-tight tracking-[-0.02em] text-[#002366]">
            {title}
          </h3>
          <p className="mt-2 font-inter text-sm leading-6 text-[#002366]/70">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function TimeBlock({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-xl border border-[#002366]/10 bg-[#F8FAFC] px-3 py-4 text-center">
      <div className="font-montserrat text-xl font-bold tracking-[-0.02em] text-[#002366]">
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-1 font-inter text-[10px] uppercase tracking-[0.16em] text-[#002366]/55">
        {label}
      </div>
    </div>
  );
}

export default function ProgressPipeline() {
  const [profile, setProfile] = useState(72);
  const { time: countdown, mounted } = useCountdown(TARGET_DATE);

  useEffect(() => {
    const timer = setTimeout(() => setProfile(100), 1800);
    return () => clearTimeout(timer);
  }, []);

  const steps = useMemo(
    () => [
      {
        number: 1,
        title: "Registration",
        description: "Account setup is complete and the student is successfully onboarded.",
        status: "complete" as StepStatus,
      },
      {
        number: 2,
        title: "Profile Completion",
        description: "Academic and personal details are being completed for eligibility flow.",
        status: profile === 100 ? ("complete" as StepStatus) : ("current" as StepStatus),
      },
      {
        number: 3,
        title: "Mock Test",
        description: "Accessible only after profile completion reaches 100%.",
        status: profile === 100 ? ("current" as StepStatus) : ("locked" as StepStatus),
      },
      {
        number: 4,
        title: "Admit Card",
        description: "Live countdown shows the upcoming admit card release window.",
        status: "locked" as StepStatus,
      },
    ],
    [profile]
  );

  return (
    <section className="bg-[#F8FAFC] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#D4AF37]/20 bg-white px-4 py-2 font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-[#002366]">
            Student Dashboard
          </span>

          <h2 className="mt-4 font-montserrat text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[#002366]">
            Progress Pipeline
          </h2>

          <p className="mt-4 font-inter text-sm leading-7 text-[#002366]/70 sm:text-base">
            A structured four-step dashboard that helps students move from registration to admit card readiness.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <StepCard
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
              status={step.status}
            />
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#D4AF37]/15 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
                  Profile Status
                </p>
                <h3 className="mt-2 font-montserrat text-[clamp(1.4rem,2vw,1.75rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[#002366]">
                  Completion Progress
                </h3>
                <p className="mt-2 font-inter text-sm leading-6 text-[#002366]/70">
                  Students can clearly see how much of their profile is complete before the mock test unlocks.
                </p>
              </div>

              <CircleProgress value={profile} />
            </div>

            <div className="mt-6">
              <div className="mb-3 flex items-center justify-between">
                <span className="font-inter text-sm font-medium text-[#002366]/70">
                  Eligibility progress
                </span>
                <span className="font-inter text-sm font-semibold text-[#002366]">
                  {profile}%
                </span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-[#002366]/10">
                <div
                  className="h-full rounded-full bg-[#D4AF37]"
                  style={{ width: `${profile}%`, transition: "width 0.8s ease" }}
                />
              </div>

              <button
                type="button"
                disabled={profile < 100}
                className={`mt-6 inline-flex rounded-xl px-5 py-3 font-inter text-sm font-semibold transition ${
                  profile < 100
                    ? "cursor-not-allowed bg-slate-200 text-slate-500"
                    : "bg-[#D4AF37] text-white hover:opacity-95"
                }`}
              >
                {profile < 100 ? "Mock Test Locked" : "Start Mock Test"}
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-[#D4AF37]/15 bg-white p-6 shadow-sm sm:p-8">
            <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
              Admit Card
            </p>
            <h3 className="mt-2 font-montserrat text-[clamp(1.4rem,2vw,1.75rem)] font-bold leading-[1.15] tracking-[-0.02em] text-[#002366]">
              Release Countdown
            </h3>
            <p className="mt-2 font-inter text-sm leading-6 text-[#002366]/70">
              The dashboard keeps the student informed with a live time-based release indicator.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <TimeBlock label="Days" value={mounted ? countdown.days : 0} />
              <TimeBlock label="Hours" value={mounted ? countdown.hours : 0} />
              <TimeBlock label="Minutes" value={mounted ? countdown.minutes : 0} />
              <TimeBlock label="Seconds" value={mounted ? countdown.seconds : 0} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}