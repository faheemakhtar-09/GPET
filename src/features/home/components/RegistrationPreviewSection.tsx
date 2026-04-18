import Link from "next/link";

function StepIcon({ number }: { number: number }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#e8732a]/25 bg-[#fff4ed] font-montserrat text-base font-bold tracking-[-0.02em] text-[#e8732a] shadow-[0_8px_20px_rgba(232,115,42,0.10)]">
      {number}
    </div>
  );
}

function RegisterStepCard({
  number,
  title,
  description,
}: {
  number: number;
  title: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[24px] border border-[#e8732a]/12 bg-white p-6 shadow-[0_12px_30px_rgba(232,115,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(232,115,42,0.12)]">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#e8732a]/80 via-[#e8732a] to-[#f29a61]" />
      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-[#e8732a]/10 blur-3xl transition duration-300 group-hover:bg-[#e8732a]/15" />

      <div className="relative">
        <StepIcon number={number} />

        <h3 className="mt-5 font-montserrat text-xl font-bold tracking-[-0.02em] text-[#2f1608]">
          {title}
        </h3>

        <p className="mt-3 font-inter text-sm leading-7 text-[#2f1608]/70">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function RegistrationStepsPreview() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#e8732a]/20 bg-[#fff4ed] px-4 py-2 font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
            Registration Journey
          </span>

          <h2 className="mt-4 font-montserrat text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[#2f1608]">
            Want to register? Just follow 3 simple steps
          </h2>

          <p className="mt-4 font-inter text-sm leading-7 text-[#2f1608]/70 sm:text-base">
            The GPET registration flow is designed to be simple, mobile-friendly,
            and easy to complete for every student.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <RegisterStepCard
            number={1}
            title="Personal Info"
            description="Enter your basic student details like name, date of birth, district, and state."
          />

          <RegisterStepCard
            number={2}
            title="Academic Details"
            description="Add your class, school, board, and preferred study medium in a structured flow."
          />

          <RegisterStepCard
            number={3}
            title="Verification"
            description="Complete Aadhaar, mobile number, and OTP verification before final submission."
          />
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/register"
            className="inline-flex items-center justify-center rounded-xl bg-[#e8732a] px-6 py-3 font-inter text-sm font-semibold text-white shadow-[0_12px_24px_rgba(232,115,42,0.18)] transition hover:-translate-y-0.5 hover:opacity-95"
          >
            Start Registration
          </Link>
        </div>
      </div>
    </section>
  );
}