"use client";

import { Check } from "lucide-react";
import { Step } from "./register-types";
import { cn, stepTitleMap } from "./register-utils";

const steps = [
  { id: 1, label: "Personal" },
  { id: 2, label: "Academic" },
  { id: 3, label: "Documents" },
  { id: 4, label: "Payment" },
] as const;

export default function RegisterStepHeader({ step }: { step: Step }) {
  return (
    <div className="rounded-[24px] border border-[#e8732a]/12 bg-white px-4 py-4 shadow-[0_16px_40px_rgba(232,115,42,0.08)] sm:px-5 sm:py-5">
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
                      ? "border-[#e8732a] bg-[#e8732a] text-white"
                      : active
                        ? "border-[#e8732a] bg-[#e8732a]/10 text-[#e8732a]"
                        : "border-[#e8732a]/15 bg-[#fff7f2] text-[#e8732a]/45",
                  )}
                >
                  {done ? <Check className="h-4 w-4" /> : item.id}
                </div>

                <div className="min-w-0">
                  <p
                    className={cn(
                      "truncate font-inter text-[11px] font-semibold uppercase tracking-[0.14em] sm:text-xs",
                      active || done ? "text-[#e8732a]" : "text-[#e8732a]/45",
                    )}
                  >
                    Step {item.id}
                  </p>
                  <p
                    className={cn(
                      "truncate font-inter text-[12px] sm:text-sm",
                      active ? "text-[#2f1608]" : "text-[#2f1608]/60",
                    )}
                  >
                    {item.label}
                  </p>
                </div>
              </div>

              {index !== steps.length - 1 ? (
                <div className="mx-2 h-[1px] flex-1 bg-[#e8732a]/10 sm:mx-4" />
              ) : null}
            </div>
          );
        })}
      </div>

      <div className="mt-4 border-t border-[#e8732a]/10 pt-4">
        <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.16em] text-[#e8732a]">
          Step {step} of 4
        </p>
        <h2 className="mt-1 font-montserrat text-[1.35rem] font-bold tracking-[-0.02em] text-[#2f1608] sm:text-[1.65rem]">
          {stepTitleMap[step]}
        </h2>
        <p className="mt-1 font-inter text-sm leading-6 text-[#2f1608]/62">
          Fill the details carefully to continue your registration.
        </p>
      </div>
    </div>
  );
}