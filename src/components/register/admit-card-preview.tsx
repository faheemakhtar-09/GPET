"use client";

import { CalendarDays, Download, GraduationCap, MapPin, UserRound } from "lucide-react";
import { FormData } from "./register-types";

export default function AdmitCardPreview({
  form,
  registrationId,
}: {
  form: FormData;
  registrationId: string;
}) {
  const handleDownload = () => {
    const photoHtml = form.passportPhotoUrl
      ? `<img src="${form.passportPhotoUrl}" alt="Passport Photo" style="width:100px;height:120px;object-fit:cover;border-radius:12px;border:1px solid #f1c5a8;" />`
      : `<div style="width:100px;height:120px;display:flex;align-items:center;justify-content:center;border-radius:12px;border:1px dashed #f1c5a8;background:#fff7f2;color:#e8732a;font-size:12px;">Photo</div>`;

    const html = `
      <html>
        <head>
          <title>Admit Card</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 24px; color: #2f1608; background: #ffffff; }
            .card { border: 1px solid #f4d7c3; border-radius: 18px; overflow: hidden; }
            .header { background: #e8732a; color: white; padding: 20px; }
            .tag { color: rgba(255,255,255,0.8); font-weight: bold; letter-spacing: 1px; font-size: 12px; text-transform: uppercase; }
            .content { padding: 20px; }
            .top { display: grid; grid-template-columns: 120px 1fr; gap: 20px; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 20px; }
            .label { font-size: 11px; text-transform: uppercase; color: #9a5a34; margin-bottom: 4px; }
            .value { font-size: 16px; font-weight: 600; }
            .footer { padding: 16px 20px; background: #fff7f2; border-top: 1px solid #f4d7c3; }
          </style>
        </head>
        <body>
          <div class="card">
            <div class="header">
              <div class="tag">GPET 2026</div>
              <h2 style="margin:8px 0 0;">Provisional Admit Card</h2>
            </div>

            <div class="content">
              <div class="top">
                <div>${photoHtml}</div>
                <div>
                  <div class="label">Candidate Name</div>
                  <div class="value">${form.fullName || "-"}</div>

                  <div style="margin-top:12px;" class="label">Registration ID</div>
                  <div class="value">${registrationId}</div>
                </div>
              </div>

              <div class="grid">
                <div><div class="label">Father's Name</div><div class="value">${form.fatherName || "-"}</div></div>
                <div><div class="label">Mother's Name</div><div class="value">${form.motherName || "-"}</div></div>
                <div><div class="label">Class / Grade</div><div class="value">${form.grade || "-"}</div></div>
                <div><div class="label">Board</div><div class="value">${form.board || "-"}</div></div>
                <div><div class="label">Exam Date</div><div class="value">15 June 2026</div></div>
                <div><div class="label">Exam District</div><div class="value">${form.district || "-"}</div></div>
                <div><div class="label">State</div><div class="value">${form.state || "-"}</div></div>
                <div><div class="label">Country</div><div class="value">${form.country || "India"}</div></div>
                <div><div class="label">Address</div><div class="value">${form.addressLine || "-"}</div></div>
                <div><div class="label">Pincode</div><div class="value">${form.pincode || "-"}</div></div>
              </div>
            </div>

            <div class="footer">
              Carry this admit card along with valid ID proof to the exam center.
            </div>
          </div>
        </body>
      </html>
    `;

    const blob = new Blob([html], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${registrationId}-admit-card.html`;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 300);
  };

  return (
    <div className="overflow-hidden rounded-[28px] border border-[#e8732a]/15 bg-white shadow-[0_20px_60px_rgba(232,115,42,0.08)]">
      <div className="bg-[#e8732a] px-6 py-5 text-white">
        <p className="font-inter text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
          GPET 2026
        </p>
        <h3 className="mt-2 font-montserrat text-2xl font-bold tracking-[-0.02em]">
          Provisional Admit Card
        </h3>
      </div>

      <div className="grid gap-6 p-6 md:grid-cols-[120px_1fr]">
        <div className="flex h-[145px] w-[110px] items-center justify-center overflow-hidden rounded-2xl border border-[#e8732a]/15 bg-[#fff7f2]">
          {form.passportPhotoUrl ? (
            <img
              src={form.passportPhotoUrl}
              alt="Candidate passport"
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="text-center">
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#e8732a]/10 text-[#e8732a]">
                <UserRound className="h-5 w-5" />
              </div>
              <p className="mt-3 font-inter text-[10px] font-semibold uppercase tracking-[0.14em] text-[#2f1608]/45">
                Passport Photo
              </p>
            </div>
          )}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-[#2f1608]/45">
              Candidate Name
            </p>
            <p className="mt-1 font-montserrat text-lg font-semibold tracking-[-0.02em] text-[#2f1608]">
              {form.fullName || "Student Name"}
            </p>
          </div>

          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-[#2f1608]/45">
              Registration ID
            </p>
            <p className="mt-1 font-montserrat text-lg font-semibold tracking-[-0.02em] text-[#2f1608]">
              {registrationId}
            </p>
          </div>

          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-[#2f1608]/45">
              Parents Details
            </p>
            <p className="mt-1 font-inter text-sm font-medium text-[#2f1608]">
              {form.fatherName || "Father"} / {form.motherName || "Mother"}
            </p>
          </div>

          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-[#2f1608]/45">
              Academic
            </p>
            <p className="mt-1 flex items-center gap-2 font-inter text-sm font-medium text-[#2f1608]">
              <GraduationCap className="h-4 w-4 text-[#e8732a]" />
              Class {form.grade || "-"} • {form.board || "-"}
            </p>
          </div>

          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-[#2f1608]/45">
              Exam Date
            </p>
            <p className="mt-1 flex items-center gap-2 font-inter text-sm font-medium text-[#2f1608]">
              <CalendarDays className="h-4 w-4 text-[#e8732a]" />
              15 June 2026
            </p>
          </div>

          <div>
            <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-[#2f1608]/45">
              Exam District
            </p>
            <p className="mt-1 flex items-center gap-2 font-inter text-sm font-medium text-[#2f1608]">
              <MapPin className="h-4 w-4 text-[#e8732a]" />
              {form.district || "Your District"}
            </p>
          </div>

          <div className="sm:col-span-2">
            <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-[#2f1608]/45">
              Address
            </p>
            <p className="mt-1 font-inter text-sm font-medium text-[#2f1608]">
              {form.addressLine || "Address not provided"}, {form.district || "-"},{" "}
              {form.state || "-"}, {form.country || "India"} - {form.pincode || "-"}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 border-t border-[#e8732a]/10 bg-[#fff7f2] px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-inter text-sm text-[#2f1608]/62">
          Download your admit card and carry a valid ID proof on exam day.
        </p>

        <button
          type="button"
          onClick={handleDownload}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-[#e8732a] px-4 font-inter text-sm font-semibold text-white transition hover:opacity-95"
        >
          <Download className="h-4 w-4" />
          Download Admit Card
        </button>
      </div>
    </div>
  );
}