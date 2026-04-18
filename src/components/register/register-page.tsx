"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { FormData, Step, initialForm } from "./register-types";
import RegisterFields from "./register-fields";
import RegisterFaceCapture from "./register-face-capture";
import RegisterStepHeader from "./register-step-header";
import { getStepErrors, stepFields } from "./register-utils";

export default function RegisterPageView() {
  const [step, setStep] = useState<Step>(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const errors = useMemo(() => getStepErrors(step, form), [step, form]);

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

  if (submitted) {
    return (
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pt-10">
        <div className="rounded-[24px] border border-[#002366]/8 bg-white p-6 sm:p-8">
          <h2 className="font-montserrat text-[1.5rem] font-bold tracking-[-0.02em] text-[#002366] sm:text-[1.9rem]">
            Registration completed
          </h2>
          <p className="mt-2 font-inter text-sm leading-6 text-[#002366]/65">
            Your registration details and face verification step have been
            completed successfully.
          </p>
        </div>
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pt-[100px] sm:px-6 sm:pt-[80px] lg:px-8 lg:pt-[90px]">
      <div className="mx-auto">
        <div className="space-y-5">
          <RegisterStepHeader step={step} />

          <div className="rounded-[24px] border border-[#002366]/8 bg-white p-4 sm:p-6">
            {step <= 3 ? (
              <RegisterFields
                step={step}
                form={form}
                touched={touched}
                errors={errors}
                setField={setField}
                markTouched={markTouched}
              />
            ) : (
              <RegisterFaceCapture
                faceCaptured={form.faceCaptured}
                faceConsent={form.faceConsent}
                setFaceCaptured={(value) =>
                  setBooleanField("faceCaptured", value)
                }
                setFaceConsent={(value) =>
                  setBooleanField("faceConsent", value)
                }
                markTouched={(fields) =>
                  markTouched(fields as (keyof FormData)[])
                }
                errors={errors}
                touched={touched}
              />
            )}

            <div className="mt-6 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 1}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#002366]/10 bg-white px-4 font-inter text-sm font-semibold text-[#002366] transition disabled:cursor-not-allowed disabled:opacity-40 sm:h-12"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-5 font-inter text-sm font-semibold text-white transition hover:opacity-95 sm:h-12"
              >
                {step === 4 ? "Complete Registration" : "Continue"}
                {step < 4 ? <ArrowRight className="h-4 w-4" /> : null}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
