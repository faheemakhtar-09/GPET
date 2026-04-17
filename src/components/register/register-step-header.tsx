"use client";

import { Check } from "lucide-react";
import { Step } from "./register-types";
import { cn, stepTitleMap } from "./register-utils";

const steps = [
  { id: 1, label: "Personal" },
  { id: 2, label: "Academic" },
  { id: 3, label: "Verify" },
  { id: 4, label: "Face" },
] as const;

export default function RegisterStepHeader({ step }: { step: Step }) {
  return (
    <div className="rounded-[24px] border border-[#002366]/8 bg-white px-4 py-4 sm:px-5 sm:py-5">
      <div className="flex items-center justify-between gap-2 sm:gap-3">
        {steps.map((item, index) => {
          const done = step > item.id;
          const active = step === item.id;

          return (
            <div key={item.id} className="flex min-w-0 flex-1 items-center">
              <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                <div
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-xs font-semibold transition sm:h-10 sm:w-10 sm:text-sm",
                    done
                      ? "border-[#10B981] bg-[#10B981] text-white"
                      : active
                        ? "border-[#D4AF37] bg-[#D4AF37]/12 text-[#D4AF37]"
                        : "border-[#002366]/12 bg-[#F8FAFC] text-[#002366]/45",
                  )}
                >
                  {done ? <Check className="h-4 w-4" /> : item.id}
                </div>

                <div className="min-w-0">
                  <p
                    className={cn(
                      "truncate font-inter text-[11px] font-semibold uppercase tracking-[0.14em] sm:text-xs",
                      active || done ? "text-[#002366]" : "text-[#002366]/45",
                    )}
                  >
                    Step {item.id}
                  </p>
                  <p
                    className={cn(
                      "truncate font-inter text-[12px] sm:text-sm",
                      active ? "text-[#002366]" : "text-[#002366]/60",
                    )}
                  >
                    {item.label}
                  </p>
                </div>
              </div>

              {index !== steps.length - 1 ? (
                <div className="mx-2 h-[1px] flex-1 bg-[#002366]/10 sm:mx-4" />
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mt-4 border-t border-[#002366]/8 pt-4">
        <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.16em] text-[#D4AF37]">
          Step {step} of 4
        </p>
        <h2 className="mt-1 font-montserrat text-[1.35rem] font-bold tracking-[-0.02em] text-[#002366] sm:text-[1.65rem]">
          {stepTitleMap[step]}
        </h2>
        <p className="mt-1 font-inter text-sm leading-6 text-[#002366]/62">
          Fill the details carefully to continue your registration.
        </p>
      </div>
    </div>
  );
}