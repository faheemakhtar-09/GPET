"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
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

  const errors = useMemo(() => getStepErrors(step, form), [step, form]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown(new Date("2026-06-15T09:00:00")));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
  );
}