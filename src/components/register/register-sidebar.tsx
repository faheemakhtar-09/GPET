"use client";

import { Check } from "lucide-react";
import { Step } from "./register-types";
import { cn } from "./register-utils";

const steps = [
  {
    id: 1,
    title: "Personal Information",
    description: "Basic student details",
  },
  {
    id: 2,
    title: "Academic Details",
    description: "School and class details",
  },
  {
    id: 3,
    title: "Verification",
    description: "Aadhaar and mobile verification",
  },
] as const;

export default function RegisterSidebar({
  currentStep,
  completed,
}: {
  currentStep: Step;
  completed: boolean;
}) {
  return (
    <aside className="self-start lg:sticky lg:top-24">
      <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
        GPET 2026
      </p>

      <h1 className="mt-3 font-montserrat text-[clamp(2rem,3vw,3.25rem)] font-bold leading-[1.02] tracking-[-0.02em] text-[#002366]">
        Register in 3 simple steps
      </h1>

      <p className="mt-4 max-w-sm font-inter text-sm leading-7 text-[#002366]/65">
        A clean and guided registration flow designed to reduce form fatigue and
        improve trust for students.
      </p>

      <div className="mt-10 space-y-5">
        {steps.map((item) => {
          const active = currentStep === item.id && !completed;
          const done = currentStep > item.id || completed;

          return (
            <div key={item.id} className="flex items-start gap-4">
              <div
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition",
                  done
                    ? "border-[#10B981] bg-[#10B981] text-white"
                    : active
                      ? "border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]"
                      : "border-[#002366]/12 bg-white text-[#002366]/50",
                )}
              >
                {done ? <Check className="h-4 w-4" /> : item.id}
              </div>

              <div className="pt-1">
                <p className="font-montserrat text-lg font-semibold tracking-[-0.02em] text-[#002366]">
                  {item.title}
                </p>
                <p className="mt-1 font-inter text-sm text-[#002366]/55">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-10 rounded-2xl border border-[#002366]/8 bg-white px-5 py-4">
        <p className="font-inter text-xs font-semibold uppercase tracking-[0.16em] text-[#002366]/45">
          Trust note
        </p>
        <p className="mt-2 font-inter text-sm leading-6 text-[#002366]/68">
          Your form uses structured validation and a simple step-by-step flow.
        </p>
      </div>
    </aside>
  );
}
