"use client";

import CountdownBlock from "./countdown-block";
import AdmitCardPreview from "./admit-card-preview";
import { FormData } from "./register-types";

export default function RegisterSuccess({
  form,
  countdown,
}: {
  form: FormData;
  countdown: {
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
}) {
  return (
    <div>
      <div className="rounded-[28px] bg-[#F8FAFC] p-6 sm:p-8">
        <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#10B981]">
          Registration Complete
        </p>

        <h2 className="mt-3 font-montserrat text-[clamp(1.8rem,2.5vw,2.8rem)] font-bold tracking-[-0.02em] text-[#002366]">
          Your application has been submitted successfully
        </h2>

        <p className="mt-3 max-w-2xl font-inter text-sm leading-7 text-[#002366]/65">
          Your admit card will be available after the countdown ends. Until
          then, you can review the preview below.
        </p>
      </div>

      <div className="mt-8">
        <h3 className="font-montserrat text-2xl font-bold tracking-[-0.02em] text-[#002366]">
          Countdown to admit card
        </h3>

        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <CountdownBlock value={countdown.days} label="Days" />
          <CountdownBlock value={countdown.hours} label="Hours" />
          <CountdownBlock value={countdown.minutes} label="Minutes" />
          <CountdownBlock value={countdown.seconds} label="Seconds" />
        </div>
      </div>

      <div className="mt-10">
        <AdmitCardPreview form={form} />
      </div>
    </div>
  );
}
