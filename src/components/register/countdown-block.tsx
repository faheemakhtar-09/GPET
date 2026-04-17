"use client";

export default function CountdownBlock({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-2xl bg-white px-4 py-5 text-center shadow-sm ring-1 ring-[#002366]/6">
      <div className="font-montserrat text-3xl font-bold tracking-[-0.03em] text-[#002366]">
        {value}
      </div>
      <div className="mt-1 font-inter text-[11px] font-semibold uppercase tracking-[0.16em] text-[#002366]/45">
        {label}
      </div>
    </div>
  );
}