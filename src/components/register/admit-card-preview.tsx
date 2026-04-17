"use client";

import { CalendarDays, MapPin, Phone, UserRound } from "lucide-react";
import { FormData } from "./register-types";

export default function AdmitCardPreview({ form }: { form: FormData }) {
  return (
    <div className="overflow-hidden rounded-[28px] border border-[#D4AF37]/20 bg-white">
      <div className="bg-[#002366] px-6 py-5 text-white">
        <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
          GPET 2026
        </p>
        <h3 className="mt-2 font-montserrat text-2xl font-bold tracking-[-0.02em]">
          Provisional Admit Card
        </h3>
      </div>

      <div className="grid gap-6 p-6 md:grid-cols-[110px_1fr]">
        <div className="flex h-[130px] w-[100px] items-center justify-center rounded-2xl border border-dashed border-[#002366]/20 bg-[#F8FAFC]">
          <div className="text-center">
            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#D4AF37]/10 text-[#D4AF37]">
              <UserRound className="h-5 w-5" />
            </div>
            <p className="mt-3 font-inter text-[10px] font-semibold uppercase tracking-[0.14em] text-[#002366]/45">
              Student Photo
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-[#002366]/45">
              Candidate Name
            </p>
            <p className="mt-1 font-montserrat text-lg font-semibold tracking-[-0.02em] text-[#002366]">
              {form.fullName || "Student Name"}
            </p>
          </div>

          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-[#002366]/45">
              Registration ID
            </p>
            <p className="mt-1 font-montserrat text-lg font-semibold tracking-[-0.02em] text-[#002366]">
              GPET-2026-10482
            </p>
          </div>

          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-[#002366]/45">
              Exam Date
            </p>
            <p className="mt-1 flex items-center gap-2 font-inter text-sm font-medium text-[#002366]">
              <CalendarDays className="h-4 w-4 text-[#D4AF37]" />
              15 June 2026
            </p>
          </div>

          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-[#002366]/45">
              Exam City
            </p>
            <p className="mt-1 flex items-center gap-2 font-inter text-sm font-medium text-[#002366]">
              <MapPin className="h-4 w-4 text-[#D4AF37]" />
              {form.district || "Your District"}
            </p>
          </div>

          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-[#002366]/45">
              Mobile
            </p>
            <p className="mt-1 flex items-center gap-2 font-inter text-sm font-medium text-[#002366]">
              <Phone className="h-4 w-4 text-[#D4AF37]" />
              +91 {form.mobile || "XXXXXXXXXX"}
            </p>
          </div>

          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-[#002366]/45">
              Status
            </p>
            <p className="mt-1 font-inter text-sm font-semibold text-[#10B981]">
              Registered Successfully
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#002366]/8 bg-[#F8FAFC] px-6 py-4">
        <p className="font-inter text-sm text-[#002366]/62">
          Admit card download becomes active when the release countdown ends.
        </p>
      </div>
    </div>
  );
}
