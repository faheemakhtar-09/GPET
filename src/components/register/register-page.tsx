"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { FormData, Step, initialForm } from "./register-types";
import RegisterFields from "./register-fields";
import RegisterStepHeader from "./register-step-header";
import RegisterPayment from "./register-payment";
import RegisterSuccess from "./register-success";
import {
  generateRegistrationId,
  generateTransactionId,
  getCountdown,
  getStepErrors,
  stepFields,
} from "./register-utils";

export default function RegisterPage() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);
  const [registrationId] = useState(generateRegistrationId());
  const [countdown, setCountdown] = useState(() =>
    getCountdown(new Date("2026-06-15T09:00:00"))
  );
  const [showComingSoon, setShowComingSoon] = useState(false);

  const errors = useMemo(() => getStepErrors(step, form), [step, form]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown(new Date("2026-06-15T09:00:00")));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComingSoon(true);
    }, 600);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showComingSoon ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showComingSoon]);

  const setField = (key: keyof FormData, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const setBooleanField = (key: keyof FormData, value: boolean) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const markTouched = (fields: readonly (keyof FormData)[]) => {
    setTouched((prev) => {
      const next = { ...prev };
      fields.forEach((field) => {
        next[field] = true;
      });
      return next;
    });
  };

  const handleNext = () => {
    const currentFields = stepFields[step];
    markTouched(currentFields);

    const currentStepErrors = getStepErrors(step, form);
    const hasErrors = currentFields.some((field) => !!currentStepErrors[field]);

    if (hasErrors) return;

    if (step < 4) {
      setStep((prev) => (prev + 1) as Step);
      return;
    }

    setSubmitted(true);
  };

  const handleBack = () => {
    if (step > 1) {
      setStep((prev) => (prev - 1) as Step);
    }
  };

  useEffect(() => {
    if (form.paymentStatus && !form.transactionId) {
      setForm((prev) => ({
        ...prev,
        transactionId: generateTransactionId(),
      }));
    }
  }, [form.paymentStatus, form.transactionId]);

  if (submitted) {
    return (
      <section className="mx-auto max-w-7xl px-4 pt-[100px] sm:px-6 sm:pt-[80px] lg:px-8 lg:pt-[90px]">
        <RegisterSuccess
          form={form}
          countdown={countdown}
          registrationId={registrationId}
        />
      </section>
    );
  }

  return (
    <>
      {showComingSoon && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#2f1608]/55 px-4 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="coming-soon-title"
          aria-describedby="coming-soon-description"
        >
          <div className="relative w-full max-w-xl overflow-hidden rounded-[32px] border border-white/20 bg-white shadow-[0_30px_100px_rgba(232,115,42,0.25)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,115,42,0.12),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(232,115,42,0.08),transparent_30%)]" />

            <button
              type="button"
              onClick={() => setShowComingSoon(false)}
              aria-label="Close popup"
              className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#e8732a]/15 bg-white/90 text-[#2f1608] transition hover:bg-[#fff3eb]"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative p-6 sm:p-8 md:p-10">
              <div className="inline-flex rounded-full border border-[#e8732a]/15 bg-[#fff4ed] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
                Registration Update
              </div>

              <h2
                id="coming-soon-title"
                className="mt-6 text-[clamp(2rem,4vw,3rem)] font-bold leading-[0.98] tracking-[-0.04em] text-[#2f1608]"
              >
                Coming Soon
              </h2>

              <p
                id="coming-soon-description"
                className="mt-4 text-base leading-8 text-[#2f1608]/72 sm:text-lg"
              >
                GPET 2026 registration will open very soon. Stay tuned for
                scholarships, digital rewards, and early access updates.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setShowComingSoon(false)}
                  className="inline-flex items-center justify-center rounded-full bg-[#e8732a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#cf6421]"
                >
                  Got it
                </button>

                <button
                  type="button"
                  onClick={() => setShowComingSoon(false)}
                  className="inline-flex items-center justify-center rounded-full border border-[#e8732a]/15 bg-[#fff8f4] px-6 py-3 text-sm font-semibold text-[#2f1608] transition hover:bg-[#fff1e8]"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="mx-auto max-w-7xl px-4 pt-[100px] sm:px-6 sm:pt-[80px] lg:px-8 lg:pt-[90px]">
        <div className="space-y-5">
          <RegisterStepHeader step={step} />

          <div className="rounded-[28px] border border-[#e8732a]/12 bg-white p-4 shadow-[0_20px_60px_rgba(232,115,42,0.08)] sm:p-6">
            {step <= 3 ? (
              <RegisterFields
                step={step}
                form={form}
                touched={touched}
                errors={errors}
                setField={setField}
                setBooleanField={setBooleanField}
                markTouched={markTouched}
              />
            ) : (
              <RegisterPayment
                form={form}
                touched={touched}
                errors={errors}
                setField={setField}
                setBooleanField={setBooleanField}
                markTouched={markTouched}
              />
            )}

            <div className="mt-6 flex items-center justify-between gap-3 border-t border-[#e8732a]/10 pt-6">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 1}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#e8732a]/12 bg-white px-4 font-inter text-sm font-semibold text-[#2f1608] transition disabled:cursor-not-allowed disabled:opacity-40 sm:h-12"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#e8732a] px-5 font-inter text-sm font-semibold text-white transition hover:opacity-95 sm:h-12"
              >
                {step === 4 ? "Complete Registration" : "Continue"}
                {step < 4 ? <ArrowRight className="h-4 w-4" /> : null}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}