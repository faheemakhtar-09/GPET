export type Step = 1 | 2 | 3 | 4;
export type Gender = "" | "Male" | "Female" | "Other";

export type FormData = {
  fullName: string;
  dob: string;
  gender: Gender;
  district: string;
  state: string;
  grade: string;
  schoolName: string;
  board: string;
  medium: string;
  aadhar: string;
  mobile: string;
  otp: string;
  faceCaptured: boolean;
  faceConsent: boolean;
};

export const initialForm: FormData = {
  fullName: "",
  dob: "",
  gender: "",
  district: "",
  state: "Uttar Pradesh",
  grade: "",
  schoolName: "",
  board: "",
  medium: "",
  aadhar: "",
  mobile: "",
  otp: "",
  faceCaptured: false,
  faceConsent: false,
};