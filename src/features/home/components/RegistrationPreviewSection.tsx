import Link from "next/link";

function StepIcon({ number }: { number: number }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 font-montserrat text-base font-bold tracking-[-0.02em] text-[#D4AF37]">
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
    <div className="rounded-2xl border border-[#002366]/10 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <StepIcon number={number} />
      <h3 className="mt-5 font-montserrat text-xl font-bold tracking-[-0.02em] text-[#002366]">
        {title}
      </h3>
      <p className="mt-3 font-inter text-sm leading-7 text-[#002366]/70">
        {description}
      </p>
    </div>
  );
}

export default function RegistrationStepsPreview() {
  return (
    <section className="bg-[#F8FAFC] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-[#D4AF37]/20 bg-white px-4 py-2 font-inter text-[11px] font-semibold uppercase tracking-[0.18em] text-[#002366]">
            Registration Journey
          </span>

          <h2 className="mt-4 font-montserrat text-[clamp(1.9rem,4vw,3.2rem)] font-bold leading-[1.05] tracking-[-0.02em] text-[#002366]">
            Want to register? Just follow 3 simple steps
          </h2>

          <p className="mt-4 font-inter text-sm leading-7 text-[#002366]/70 sm:text-base">
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
            className="inline-flex items-center justify-center rounded-xl bg-[#D4AF37] px-6 py-3 font-inter text-sm font-semibold text-white transition hover:opacity-95"
          >
            Start Registration
          </Link>
        </div>
      </div>
    </section>
  );
}