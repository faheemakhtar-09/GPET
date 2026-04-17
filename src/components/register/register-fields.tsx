"use client";

import { FormData, Step } from "./register-types";
import { cn } from "./register-utils";

export function Field({
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  type = "text",
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  error?: string;
  type?: string;
}) {
  return (
    <label className="block">
      <span className="font-inter text-[13px] font-semibold text-[#002366] sm:text-sm">
        {label}
      </span>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        className={cn(
          "mt-2 h-11 w-full rounded-xl border bg-white px-3.5 font-inter text-sm text-[#002366] outline-none transition placeholder:text-[#002366]/35 sm:h-12 sm:px-4",
          error
            ? "border-[#EF4444]/40 ring-4 ring-[#EF4444]/10"
            : "border-[#002366]/10 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10",
        )}
      />

      {error ? (
        <p className="mt-1.5 font-inter text-[11px] text-[#EF4444] sm:text-xs">
          {error}
        </p>
      ) : null}
    </label>
  );
}

export function SelectField({
  label,
  value,
  onChange,
  onBlur,
  options,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  options: string[];
  error?: string;
}) {
  return (
    <label className="block">
      <span className="font-inter text-[13px] font-semibold text-[#002366] sm:text-sm">
        {label}
      </span>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={cn(
          "mt-2 h-11 w-full rounded-xl border bg-white px-3.5 font-inter text-sm text-[#002366] outline-none transition sm:h-12 sm:px-4",
          error
            ? "border-[#EF4444]/40 ring-4 ring-[#EF4444]/10"
            : "border-[#002366]/10 focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/10",
        )}
      >
        <option value="">Select</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error ? (
        <p className="mt-1.5 font-inter text-[11px] text-[#EF4444] sm:text-xs">
          {error}
        </p>
      ) : null}
    </label>
  );
}

export default function RegisterFields({
  step,
  form,
  touched,
  errors,
  setField,
  markTouched,
}: {
  step: Step;
  form: FormData;
  touched: Record<string, boolean>;
  errors: Record<string, string>;
  setField: (key: keyof FormData, value: string) => void;
  markTouched: (fields: (keyof FormData)[]) => void;
}) {
  if (step === 1) {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <Field
            label="Full Name"
            placeholder="Enter your full name"
            value={form.fullName}
            onChange={(v) => setField("fullName", v)}
            onBlur={() => markTouched(["fullName"])}
            error={touched.fullName ? errors.fullName : undefined}
          />
        </div>

        <Field
          label="Date of Birth"
          placeholder="Select date of birth"
          type="date"
          value={form.dob}
          onChange={(v) => setField("dob", v)}
          onBlur={() => markTouched(["dob"])}
          error={touched.dob ? errors.dob : undefined}
        />

        <SelectField
          label="Gender"
          value={form.gender}
          onChange={(v) => setField("gender", v)}
          onBlur={() => markTouched(["gender"])}
          options={["Male", "Female", "Other"]}
          error={touched.gender ? errors.gender : undefined}
        />

        <Field
          label="District"
          placeholder="Enter district"
          value={form.district}
          onChange={(v) => setField("district", v)}
          onBlur={() => markTouched(["district"])}
          error={touched.district ? errors.district : undefined}
        />

        <Field
          label="State"
          placeholder="Enter state"
          value={form.state}
          onChange={(v) => setField("state", v)}
          onBlur={() => markTouched(["state"])}
          error={touched.state ? errors.state : undefined}
        />
      </div>
    );
  }

  if (step === 2) {
    return (
      <div className="grid gap-4 sm:grid-cols-2">
        <SelectField
          label="Class / Grade"
          value={form.grade}
          onChange={(v) => setField("grade", v)}
          onBlur={() => markTouched(["grade"])}
          options={["8", "9", "10", "11", "12"]}
          error={touched.grade ? errors.grade : undefined}
        />

        <SelectField
          label="Medium"
          value={form.medium}
          onChange={(v) => setField("medium", v)}
          onBlur={() => markTouched(["medium"])}
          options={["Hindi", "English"]}
          error={touched.medium ? errors.medium : undefined}
        />

        <div className="sm:col-span-2">
          <Field
            label="School Name"
            placeholder="Enter your school name"
            value={form.schoolName}
            onChange={(v) => setField("schoolName", v)}
            onBlur={() => markTouched(["schoolName"])}
            error={touched.schoolName ? errors.schoolName : undefined}
          />
        </div>

        <div className="sm:col-span-2">
          <SelectField
            label="Board"
            value={form.board}
            onChange={(v) => setField("board", v)}
            onBlur={() => markTouched(["board"])}
            options={["UP Board", "CBSE", "ICSE", "Other"]}
            error={touched.board ? errors.board : undefined}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      <Field
        label="Aadhaar Number"
        placeholder="XXXX-XXXX-XXXX"
        value={form.aadhar}
        onChange={(v) => setField("aadhar", v)}
        onBlur={() => markTouched(["aadhar"])}
        error={touched.aadhar ? errors.aadhar : undefined}
      />

      <Field
        label="Mobile Number"
        placeholder="10-digit mobile number"
        value={form.mobile}
        onChange={(v) => setField("mobile", v)}
        onBlur={() => markTouched(["mobile"])}
        error={touched.mobile ? errors.mobile : undefined}
      />

      <Field
        label="OTP"
        placeholder="Enter verification OTP"
        value={form.otp}
        onChange={(v) => setField("otp", v)}
        onBlur={() => markTouched(["otp"])}
        error={touched.otp ? errors.otp : undefined}
      />
    </div>
  );
}
