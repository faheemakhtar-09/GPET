export type Step = 1 | 2 | 3 | 4;
export type Gender = "" | "Male" | "Female" | "Other";

export type FormData = {
  fullName: string;
  dob: string;
  gender: Gender;

  fatherName: string;
  motherName: string;

  country: string;
  state: string;
  district: string;
  addressLine: string;
  pincode: string;

  grade: string;
  schoolName: string;
  board: string;
  medium: string;

  aadharNumber: string;
  aadharFileName: string;
  identityFileName: string;

  passportPhotoName: string;
  passportPhotoUrl: string;

  faceVerified: boolean;

  paymentMethod: string;
  paymentStatus: boolean;
  transactionId: string;
};

export const initialForm: FormData = {
  fullName: "",
  dob: "",
  gender: "",

  fatherName: "",
  motherName: "",

  country: "India",
  state: "",
  district: "",
  addressLine: "",
  pincode: "",

  grade: "",
  schoolName: "",
  board: "",
  medium: "",

  aadharNumber: "",
  aadharFileName: "",
  identityFileName: "",

  passportPhotoName: "",
  passportPhotoUrl: "",

  faceVerified: false,

  paymentMethod: "",
  paymentStatus: false,
  transactionId: "",
};