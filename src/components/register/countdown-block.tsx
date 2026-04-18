"use client";

export default function CountdownBlock({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="rounded-[22px] border border-[#e8732a]/12 bg-white p-5 text-center shadow-[0_12px_30px_rgba(232,115,42,0.06)]">
      <div className="font-montserrat text-3xl font-bold tracking-[-0.04em] text-[#2f1608]">
        {value}
      </div>
      <div className="mt-2 font-inter text-xs font-semibold uppercase tracking-[0.16em] text-[#e8732a]">
        {label}
      </div>
    </div>
  );
}