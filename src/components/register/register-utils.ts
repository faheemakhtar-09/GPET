import { FormData, Step } from "./register-types";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatAadhar(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 12);
  const parts = digits.match(/.{1,4}/g) || [];
  return parts.join("-");
}

export function formatMobile(value: string) {
  return value.replace(/\D/g, "").slice(0, 10);
}

export function formatOtp(value: string) {
  return value.replace(/\D/g, "").slice(0, 6);
}

export function getCountdown(target: Date) {
  const diff = target.getTime() - Date.now();

  if (diff <= 0) {
    return { days: "00", hours: "00", minutes: "00", seconds: "00" };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export function getStepErrors(step: Step, form: FormData) {
  const next: Record<string, string> = {};

  if (step === 1) {
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    else if (!/^[A-Za-z\s]+$/.test(form.fullName.trim())) {
      next.fullName = "Only alphabets are allowed.";
    }

    if (!form.dob) next.dob = "Date of birth is required.";
    if (!form.gender) next.gender = "Gender is required.";
    if (!form.district.trim()) next.district = "District is required.";
    if (!form.state.trim()) next.state = "State is required.";
  }

  if (step === 2) {
    if (!form.grade) next.grade = "Class / Grade is required.";
    if (!form.schoolName.trim()) next.schoolName = "School name is required.";
    if (!form.board) next.board = "Board is required.";
    if (!form.medium) next.medium = "Medium is required.";
  }

  if (step === 3) {
    if (!/^\d{4}-\d{4}-\d{4}$/.test(form.aadhar)) {
      next.aadhar = "Aadhaar must be in XXXX-XXXX-XXXX format.";
    }
    if (!/^\d{10}$/.test(form.mobile)) {
      next.mobile = "Enter a valid 10-digit mobile number.";
    }
    if (!/^\d{4,6}$/.test(form.otp)) {
      next.otp = "Enter a valid OTP.";
    }
  }

  if (step === 4) {
    if (!form.faceCaptured) {
      next.faceCaptured = "Please capture your face to continue.";
    }
    if (!form.faceConsent) {
      next.faceConsent = "Please confirm face verification consent.";
    }
  }

  return next;
}

export const stepFields = {
  1: ["fullName", "dob", "gender", "district", "state"],
  2: ["grade", "schoolName", "board", "medium"],
  3: ["aadhar", "mobile", "otp"],
  4: ["faceCaptured", "faceConsent"],
} as const;

export const stepTitleMap: Record<Step, string> = {
  1: "Personal Information",
  2: "Academic Details",
  3: "Verification",
  4: "Face Capture",
};