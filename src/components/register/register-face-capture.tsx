"use client";

import { Camera, CheckCircle2, ShieldCheck } from "lucide-react";
import { cn } from "./register-utils";

export default function RegisterFaceCapture({
  faceCaptured,
  faceConsent,
  setFaceCaptured,
  setFaceConsent,
  markTouched,
  errors,
  touched,
}: {
  faceCaptured: boolean;
  faceConsent: boolean;
  setFaceCaptured: (value: boolean) => void;
  setFaceConsent: (value: boolean) => void;
  markTouched: (fields: string[]) => void;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
}) {
  return (
    <div className="grid gap-4">
      <div className="rounded-[20px] border border-[#002366]/10 bg-[#F8FAFC] p-4 sm:p-5">
        <div
          className={cn(
            "flex min-h-[260px] items-center justify-center rounded-[18px] border-2 bg-white p-6 text-center transition",
            faceCaptured
              ? "border-[#10B981] shadow-[0_0_0_4px_rgba(16,185,129,0.08)]"
              : "border-dashed border-[#002366]/18",
          )}
        >
          <div className="max-w-[280px]">
            <div
              className={cn(
                "mx-auto flex h-16 w-16 items-center justify-center rounded-full",
                faceCaptured
                  ? "bg-[#10B981]/12 text-[#10B981]"
                  : "bg-[#002366]/6 text-[#002366]",
              )}
            >
              {faceCaptured ? (
                <CheckCircle2 className="h-8 w-8" />
              ) : (
                <Camera className="h-8 w-8" />
              )}
            </div>

            <h3 className="mt-4 font-montserrat text-lg font-semibold text-[#002366]">
              {faceCaptured
                ? "Face captured successfully"
                : "Capture your face"}
            </h3>

            <p className="mt-2 font-inter text-sm leading-6 text-[#002366]/62">
              {faceCaptured
                ? "Your face image has been captured for secure identity verification."
                : "Place your face in the frame clearly, look straight, and ensure proper lighting."}
            </p>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-center">
              <button
                type="button"
                onClick={() => {
                  setFaceCaptured(true);
                  markTouched(["faceCaptured"]);
                }}
                className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-4 font-inter text-sm font-semibold text-white transition hover:opacity-95 sm:h-12"
              >
                <Camera className="h-4 w-4" />
                {faceCaptured ? "Capture Again" : "Capture Face"}
              </button>

              {faceCaptured ? (
                <button
                  type="button"
                  onClick={() => {
                    setFaceCaptured(false);
                    markTouched(["faceCaptured"]);
                  }}
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-[#002366]/10 bg-white px-4 font-inter text-sm font-semibold text-[#002366] transition hover:border-[#D4AF37]/30 sm:h-12"
                >
                  Reset
                </button>
              ) : null}
            </div>

            {touched.faceCaptured && errors.faceCaptured ? (
              <p className="mt-2 font-inter text-[11px] text-[#EF4444] sm:text-xs">
                {errors.faceCaptured}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      <label className="block rounded-[20px] border border-[#002366]/10 bg-white p-4 sm:p-5">
        <div className="flex items-start gap-3">
          <div className="mt-0.5 text-[#002366]">
            <ShieldCheck className="h-5 w-5" />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={faceConsent}
                onChange={(e) => setFaceConsent(e.target.checked)}
                onBlur={() => markTouched(["faceConsent"])}
                className="mt-1 h-4 w-4 rounded border-[#002366]/20 text-[#002366] focus:ring-[#D4AF37]/20"
              />
              <div>
                <p className="font-inter text-sm leading-6 text-[#002366]/70">
                  I confirm that this face capture belongs to the candidate and
                  can be used for secure identity verification.
                </p>

                {touched.faceConsent && errors.faceConsent ? (
                  <p className="mt-1.5 font-inter text-[11px] text-[#EF4444] sm:text-xs">
                    {errors.faceConsent}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
  );
}
