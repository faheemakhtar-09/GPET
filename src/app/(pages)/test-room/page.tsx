"use client";

const questions = Array.from({ length: 30 }, (_, i) => {
  const number = i + 1;

  if ([1, 5, 8, 11, 22, 25, 28, 29, 30].includes(number)) {
    return { number, state: "attempted" as const };
  }

  if ([14, 27].includes(number)) {
    return { number, state: "flagged" as const };
  }

  if (number === 24) {
    return { number, state: "current" as const };
  }

  return { number, state: "idle" as const };
});

const ACCENT = "#E8732A";

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M12 3L18 5.5V11.2C18 15.2 15.5 18.8 12 20.5C8.5 18.8 6 15.2 6 11.2V5.5L12 3Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 11.8L11.3 13.5L14.8 10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="6"
        width="14"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M17 10L21 8V16L17 14"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProgressStep({
  label,
  active = false,
  done = false,
  last = false,
}: {
  label: string;
  active?: boolean;
  done?: boolean;
  last?: boolean;
}) {
  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <span
          className={`flex h-4 w-4 items-center justify-center rounded-full ${
            active
              ? `bg-[${ACCENT}]`
              : done
                ? "bg-[#F3B07D]"
                : "border border-[#E8D7C8] bg-transparent"
          }`}
        >
          {active || done ? (
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
          ) : null}
        </span>
        {!last ? <span className="mt-1 h-8 w-px bg-[#EEDFD3]" /> : null}
      </div>

      <div>
        <p
          className={`font-inter text-[15px] ${
            active ? "font-semibold text-[#1F1A17]" : "text-[#6A5A50]"
          }`}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

function PaletteCell({
  number,
  state,
}: {
  number: number;
  state: "attempted" | "flagged" | "current" | "idle";
}) {
  const style =
    state === "attempted"
      ? "bg-[#FDE7D5] text-[#A35A22]"
      : state === "flagged"
        ? "bg-[#F9DDE2] text-[#9A4A5A]"
        : state === "current"
          ? `bg-[${ACCENT}] text-white`
          : "bg-[#F7F2ED] text-[#79685C]";

  return (
    <button
      type="button"
      className={`flex h-8 w-8 items-center justify-center rounded-md text-[11px] font-semibold transition hover:-translate-y-[1px] ${style}`}
    >
      {number}
    </button>
  );
}

import { useState } from "react";

function DummyWebcamPreview({
  imageSrc='images/dummy-user.png',
  alt = "Webcam preview",
}: {
  imageSrc?: string;
  alt?: string;
}) {
  const [hasError, setHasError] = useState(false);

  const showFallback = !imageSrc || hasError;

  return (
    <div className="relative overflow-hidden rounded-[16px] bg-[linear-gradient(135deg,#FFFDFB_0%,#FFF2E7_100%)] aspect-[1.35/1]">
      {!showFallback ? (
        <img
          src={imageSrc}
          alt={alt}
          className="h-full w-full object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FFE3C9_0%,transparent_45%)]" />
          <div className="absolute inset-3 rounded-[12px] border border-dashed border-[#E8C8A9]" />

          <div className="relative flex h-full flex-col items-center justify-center text-[#C05F22]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/85">
              <CameraIcon />
            </div>
            <p className="mt-3 font-inter text-sm font-semibold">
              Webcam Preview
            </p>
            <p className="mt-1 text-center font-inter text-xs text-[#A57C5A]">
              Dummy placeholder for live monitoring
            </p>
          </div>
        </>
      )}
    </div>
  );
}
export default function StaticTestPage() {
  return (
    <section className="min-h-screen bg-white pt-14 sm:pt-16 lg:pt-20">
      <div className="mx-auto max-w-[1380px] px-4 pb-10 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[30px] bg-white">
          <div className="grid lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="bg-[#FFF9F5] px-6 py-7 lg:px-7 lg:py-8">
              <div className="flex items-center gap-3">
                <div className="font-montserrat text-2xl font-bold tracking-[-0.04em] text-[#22201E]">
                  Grad<span className="text-[#E8732A]">orra</span>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF0E4] text-[10px] font-bold text-[#B35A23]">
                  GPET
                </div>
              </div>

              <div className="mt-10">
                <p className="font-montserrat text-[13px] font-bold uppercase tracking-[0.18em] text-[#B56A39]">
                  Progress
                </p>

                <div className="mt-5">
                  <ProgressStep label="Start" done />
                  <ProgressStep label="In Progress" active />
                  <ProgressStep label="End" last />
                </div>
              </div>

              <div className="mt-10">
                <p className="font-montserrat text-[13px] font-bold uppercase tracking-[0.18em] text-[#B56A39]">
                  Time Left
                </p>
                <div className="mt-3 font-montserrat text-[44px] font-bold leading-none tracking-[-0.05em] text-[#E8732A]">
                  00:04:36
                </div>
              </div>

              <div className="mt-10">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-montserrat text-[13px] font-bold uppercase tracking-[0.18em] text-[#B56A39]">
                    Question Palette
                  </p>
                  <span className="font-inter text-xs text-[#907869]">
                    30 Questions
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-5 gap-2">
                  {questions.map((item) => (
                    <PaletteCell
                      key={item.number}
                      number={item.number}
                      state={item.state}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="font-montserrat text-[13px] font-bold uppercase tracking-[0.18em] text-[#B56A39]">
                  Status Guide
                </p>

                <div className="mt-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="h-3.5 w-3.5 rounded-[4px] bg-[#E8732A]" />
                    <span className="font-inter text-sm text-[#2A211C]">
                      Current
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-3.5 w-3.5 rounded-[4px] bg-[#FDE7D5]" />
                    <span className="font-inter text-sm text-[#2A211C]">
                      Attempted
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-3.5 w-3.5 rounded-[4px] bg-[#F9DDE2]" />
                    <span className="font-inter text-sm text-[#2A211C]">
                      Flagged
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="h-3.5 w-3.5 rounded-[4px] bg-[#F7F2ED]" />
                    <span className="font-inter text-sm text-[#2A211C]">
                      Unvisited
                    </span>
                  </div>
                </div>
              </div>
            </aside>

            <main className="bg-white px-5 py-6 sm:px-7 sm:py-7 lg:px-10 lg:py-10">
              <div className="flex flex-col gap-8">
                <div className="flex justify-end">
                  <div className="w-full max-w-[270px] rounded-[22px] bg-[#FFF7EE] p-3">
                    <DummyWebcamPreview />

                    <div className="mt-4 flex items-center justify-between gap-2">
                      <span className="font-inter text-sm font-medium text-[#8A5A1F]">
                        Status: Secure
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-[#EEF8F0] px-2.5 py-1 font-inter text-[11px] font-semibold text-[#1F8A4C]">
                        <ShieldIcon />
                        Verified
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex min-h-[540px] items-center justify-center">
                  <div className="w-full max-w-[780px] rounded-[28px] bg-[#FFFDFB] px-6 py-7 sm:px-8 sm:py-9">
                    <div>
                      <p className="font-inter text-xs font-semibold uppercase tracking-[0.2em] text-[#B56A39]">
                        Question 24
                      </p>
                      <h2 className="mt-3 max-w-[640px] font-montserrat text-[20px] font-bold leading-8 text-[#2B211C]">
                        Which of the following options best matches the correct
                        response for the question shown in this sample exam
                        interface?
                      </h2>
                    </div>

                    <div className="mt-10 space-y-4">
                      {["Action A", "Option B", "Option C", "Option D"].map(
                        (option, index) => (
                          <label
                            key={option}
                            className="flex cursor-pointer items-center gap-4 rounded-2xl bg-[#FFF7F1] px-4 py-4 transition hover:bg-[#FFF1E7]"
                          >
                            <span
                              className={`flex h-6 w-6 items-center justify-center rounded-full ${
                                index === 0
                                  ? "border border-[#E8732A]"
                                  : "border border-[#DED4C7]"
                              }`}
                            >
                              {index === 0 ? (
                                <span className="h-3 w-3 rounded-full bg-[#E8732A]" />
                              ) : null}
                            </span>

                            <span className="font-inter text-[15px] font-semibold text-[#2A211C]">
                              {String.fromCharCode(65 + index)}.
                            </span>
                            <span className="font-inter text-[15px] text-[#3F342D]">
                              {option}
                            </span>
                          </label>
                        ),
                      )}
                    </div>

                    <div className="mt-10 flex justify-end">
                      <button
                        type="button"
                        className="rounded-[18px] bg-[#E8732A] px-8 py-3 font-inter text-sm font-bold text-white transition hover:bg-[#D96419]"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="rounded-full bg-[#FFF7F1] px-3 py-2 font-inter text-sm text-[#7A5B45]">
                    English only interface
                  </div>
                  <div className="rounded-full bg-[#FFF0E4] px-3 py-2 font-inter text-sm text-[#B35A23]">
                    White and orange theme
                  </div>
                  <div className="rounded-full bg-[#EEF8F0] px-3 py-2 font-inter text-sm text-[#1F8A4C]">
                    Dummy webcam placeholder
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </section>
  );
}
