"use client";

import { FormData, Step } from "./register-types";
import {
  cn,
  formatAadhar,
  formatPincode,
  getDistrictOptions,
  indiaStates,
} from "./register-utils";

function Field({
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
      <span className="font-inter text-[13px] font-semibold text-[#2f1608] sm:text-sm">
        {label}
      </span>

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        placeholder={placeholder}
        className={cn(
          "mt-2 h-11 w-full rounded-xl border bg-white px-3.5 font-inter text-sm text-[#2f1608] outline-none transition placeholder:text-[#2f1608]/35 sm:h-12 sm:px-4",
          error
            ? "border-[#EF4444]/40 ring-4 ring-[#EF4444]/10"
            : "border-[#e8732a]/15 focus:border-[#e8732a] focus:ring-4 focus:ring-[#e8732a]/10",
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

function SelectField({
  label,
  value,
  onChange,
  onBlur,
  options,
  error,
  disabled = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur: () => void;
  options: string[];
  error?: string;
  disabled?: boolean;
}) {
  return (
    <label className="block">
      <span className="font-inter text-[13px] font-semibold text-[#2f1608] sm:text-sm">
        {label}
      </span>

      <select
        value={value}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className={cn(
          "mt-2 h-11 w-full rounded-xl border bg-white px-3.5 font-inter text-sm text-[#2f1608] outline-none transition disabled:cursor-not-allowed disabled:bg-[#fff7f2] sm:h-12 sm:px-4",
          error
            ? "border-[#EF4444]/40 ring-4 ring-[#EF4444]/10"
            : "border-[#e8732a]/15 focus:border-[#e8732a] focus:ring-4 focus:ring-[#e8732a]/10",
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

function UploadField({
  label,
  value,
  onChange,
  onBlur,
  error,
  accept,
}: {
  label: string;
  value: string;
  onChange: (fileName: string, fileUrl?: string) => void;
  onBlur: () => void;
  error?: string;
  accept?: string;
}) {
  return (
    <label className="block">
      <span className="font-inter text-[13px] font-semibold text-[#2f1608] sm:text-sm">
        {label}
      </span>

      <input
        type="file"
        accept={accept}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (!file) {
            onChange("", "");
            return;
          }

          const fileUrl = URL.createObjectURL(file);
          onChange(file.name, fileUrl);
        }}
        onBlur={onBlur}
        className={cn(
          "mt-2 block w-full rounded-xl border bg-white px-3.5 py-3 font-inter text-sm text-[#2f1608] outline-none transition file:mr-3 file:rounded-lg file:border-0 file:bg-[#e8732a]/10 file:px-3 file:py-2 file:font-semibold file:text-[#e8732a]",
          error
            ? "border-[#EF4444]/40 ring-4 ring-[#EF4444]/10"
            : "border-[#e8732a]/15 focus-within:border-[#e8732a] focus-within:ring-4 focus-within:ring-[#e8732a]/10",
        )}
      />

      {value ? <p className="mt-1.5 text-xs text-[#2f1608]/60">{value}</p> : null}
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
  setBooleanField,
  markTouched,
}: {
  step: Step;
  form: FormData;
  touched: Record<string, boolean>;
  errors: Record<string, string>;
  setField: (key: keyof FormData, value: string) => void;
  setBooleanField: (key: keyof FormData, value: boolean) => void;
  markTouched: (fields: readonly (keyof FormData)[]) => void;
}) {
  const districtOptions = getDistrictOptions(form.state);

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
          label="Father's Name"
          placeholder="Enter father's name"
          value={form.fatherName}
          onChange={(v) => setField("fatherName", v)}
          onBlur={() => markTouched(["fatherName"])}
          error={touched.fatherName ? errors.fatherName : undefined}
        />

        <Field
          label="Mother's Name"
          placeholder="Enter mother's name"
          value={form.motherName}
          onChange={(v) => setField("motherName", v)}
          onBlur={() => markTouched(["motherName"])}
          error={touched.motherName ? errors.motherName : undefined}
        />

        <Field
          label="Country"
          placeholder="Country"
          value={form.country}
          onChange={(v) => setField("country", v)}
          onBlur={() => markTouched(["country"])}
          error={touched.country ? errors.country : undefined}
        />

        <SelectField
          label="State"
          value={form.state}
          onChange={(v) => {
            setField("state", v);
            setField("district", "");
          }}
          onBlur={() => markTouched(["state"])}
          options={indiaStates}
          error={touched.state ? errors.state : undefined}
        />

        <SelectField
          label="District"
          value={form.district}
          onChange={(v) => setField("district", v)}
          onBlur={() => markTouched(["district"])}
          options={districtOptions}
          disabled={!form.state}
          error={touched.district ? errors.district : undefined}
        />

        <div className="sm:col-span-2">
          <Field
            label="Address"
            placeholder="House no, street, area, locality"
            value={form.addressLine}
            onChange={(v) => setField("addressLine", v)}
            onBlur={() => markTouched(["addressLine"])}
            error={touched.addressLine ? errors.addressLine : undefined}
          />
        </div>

        <Field
          label="Pincode"
          placeholder="Enter 6-digit pincode"
          value={form.pincode}
          onChange={(v) => setField("pincode", formatPincode(v))}
          onBlur={() => markTouched(["pincode"])}
          error={touched.pincode ? errors.pincode : undefined}
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
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="sm:col-span-2">
        <Field
          label="Aadhaar Number"
          placeholder="XXXX-XXXX-XXXX"
          value={form.aadharNumber}
          onChange={(v) => setField("aadharNumber", formatAadhar(v))}
          onBlur={() => markTouched(["aadharNumber"])}
          error={touched.aadharNumber ? errors.aadharNumber : undefined}
        />
      </div>

      <UploadField
        label="Upload Aadhaar Card"
        value={form.aadharFileName}
        onChange={(fileName) => setField("aadharFileName", fileName)}
        onBlur={() => markTouched(["aadharFileName"])}
        error={touched.aadharFileName ? errors.aadharFileName : undefined}
      />

      <UploadField
        label="Upload Identity Card"
        value={form.identityFileName}
        onChange={(fileName) => setField("identityFileName", fileName)}
        onBlur={() => markTouched(["identityFileName"])}
        error={touched.identityFileName ? errors.identityFileName : undefined}
      />

      <div className="sm:col-span-2">
        <UploadField
          label="Upload Passport Photo"
          value={form.passportPhotoName}
          accept="image/png,image/jpeg,image/jpg"
          onChange={(fileName, fileUrl) => {
            setField("passportPhotoName", fileName);
            setField("passportPhotoUrl", fileUrl || "");
          }}
          onBlur={() => markTouched(["passportPhotoName"])}
          error={touched.passportPhotoName ? errors.passportPhotoName : undefined}
        />

        {form.passportPhotoUrl ? (
          <div className="mt-3 flex items-center gap-3 rounded-2xl border border-[#e8732a]/10 bg-[#fff7f2] p-3">
            <img
              src={form.passportPhotoUrl}
              alt="Passport preview"
              className="h-16 w-16 rounded-xl object-cover border border-[#e8732a]/15"
            />
            <div>
              <p className="font-inter text-sm font-semibold text-[#2f1608]">
                Passport photo selected
              </p>
              <p className="font-inter text-xs text-[#2f1608]/60">
                This image will appear on the admit card.
              </p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="sm:col-span-2 rounded-[20px] border border-[#e8732a]/10 bg-[#fff7f2] p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-montserrat text-lg font-semibold text-[#2f1608]">
              Dummy Face Verification
            </p>
            <p className="mt-1 font-inter text-sm leading-6 text-[#2f1608]/62">
              Simulate candidate face verification before continuing.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              setBooleanField("faceVerified", !form.faceVerified);
              markTouched(["faceVerified"]);
            }}
            className={cn(
              "inline-flex h-11 items-center justify-center rounded-xl px-4 font-inter text-sm font-semibold text-white transition",
              form.faceVerified ? "bg-[#16A34A]" : "bg-[#e8732a]",
            )}
          >
            {form.faceVerified ? "Verified" : "Verify Face"}
          </button>
        </div>

        {touched.faceVerified && errors.faceVerified ? (
          <p className="mt-2 text-xs text-[#EF4444]">{errors.faceVerified}</p>
        ) : null}
      </div>
    </div>
  );
}