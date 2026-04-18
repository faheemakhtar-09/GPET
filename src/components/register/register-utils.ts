import { FormData, Step } from "./register-types";

export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function formatAadhar(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 12);
  const parts = digits.match(/.{1,4}/g) || [];
  return parts.join("-");
}

export function formatPincode(value: string) {
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
    if (!form.dob) next.dob = "Date of birth is required.";
    if (!form.gender) next.gender = "Gender is required.";
    if (!form.fatherName.trim()) next.fatherName = "Father's name is required.";
    if (!form.motherName.trim()) next.motherName = "Mother's name is required.";
    if (!form.country.trim()) next.country = "Country is required.";
    if (!form.state.trim()) next.state = "State is required.";
    if (!form.district.trim()) next.district = "District is required.";
    if (!form.addressLine.trim()) next.addressLine = "Address is required.";
    if (!/^\d{6}$/.test(form.pincode)) next.pincode = "Enter a valid 6-digit pincode.";
  }

  if (step === 2) {
    if (!form.grade) next.grade = "Class / Grade is required.";
    if (!form.schoolName.trim()) next.schoolName = "School name is required.";
    if (!form.board) next.board = "Board is required.";
    if (!form.medium) next.medium = "Medium is required.";
  }

  if (step === 3) {
    if (!/^\d{4}-\d{4}-\d{4}$/.test(form.aadharNumber)) {
      next.aadharNumber = "Aadhaar must be in XXXX-XXXX-XXXX format.";
    }
    if (!form.aadharFileName) next.aadharFileName = "Upload Aadhaar card.";
    if (!form.identityFileName) next.identityFileName = "Upload identity card.";
    if (!form.passportPhotoName) next.passportPhotoName = "Upload passport photo.";
    if (!form.faceVerified) next.faceVerified = "Please complete face verification.";
  }

  if (step === 4) {
    if (!form.paymentMethod) next.paymentMethod = "Select payment method.";
    if (!form.paymentStatus) next.paymentStatus = "Please complete payment.";
    if (!form.transactionId.trim()) next.transactionId = "Transaction ID is required.";
  }

  return next;
}

export const stepFields = {
  1: [
    "fullName",
    "dob",
    "gender",
    "fatherName",
    "motherName",
    "country",
    "state",
    "district",
    "addressLine",
    "pincode",
  ],
  2: ["grade", "schoolName", "board", "medium"],
  3: [
    "aadharNumber",
    "aadharFileName",
    "identityFileName",
    "passportPhotoName",
    "faceVerified",
  ],
  4: ["paymentMethod", "paymentStatus", "transactionId"],
} as const;

export const stepTitleMap: Record<Step, string> = {
  1: "Personal Information",
  2: "Academic Details",
  3: "Documents & Verification",
  4: "Payment",
};

export const indiaStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Tamil Nadu",
  "Telangana",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

export const districtMap: Record<string, string[]> = {
  "Uttar Pradesh": [
    "Agra",
    "Aligarh",
    "Allahabad",
    "Ambedkar Nagar",
    "Amethi",
    "Amroha",
    "Auraiya",
    "Ayodhya",
    "Azamgarh",
    "Baghpat",
    "Bahraich",
    "Ballia",
    "Balrampur",
    "Banda",
    "Barabanki",
    "Bareilly",
    "Basti",
    "Bhadohi",
    "Bijnor",
    "Budaun",
    "Bulandshahr",
    "Chandauli",
    "Deoria",
    "Etah",
    "Etawah",
    "Farrukhabad",
    "Fatehpur",
    "Firozabad",
    "Gautam Buddha Nagar",
    "Ghaziabad",
    "Ghazipur",
    "Gonda",
    "Gorakhpur",
    "Hamirpur",
    "Hapur",
    "Hardoi",
    "Hathras",
    "Jalaun",
    "Jaunpur",
    "Jhansi",
    "Kannauj",
    "Kanpur Dehat",
    "Kanpur Nagar",
    "Kasganj",
    "Kaushambi",
    "Kheri",
    "Kushinagar",
    "Lalitpur",
    "Lucknow",
    "Maharajganj",
    "Mahoba",
    "Mainpuri",
    "Mathura",
    "Mau",
    "Meerut",
    "Mirzapur",
    "Moradabad",
    "Muzaffarnagar",
    "Pilibhit",
    "Pratapgarh",
    "Raebareli",
    "Rampur",
    "Saharanpur",
    "Sambhal",
    "Sant Kabir Nagar",
    "Shahjahanpur",
    "Shamli",
    "Shravasti",
    "Siddharthnagar",
    "Sitapur",
    "Sonbhadra",
    "Sultanpur",
    "Unnao",
    "Varanasi",
  ],
};

export function getDistrictOptions(state: string) {
  return districtMap[state] || [];
}

export function generateRegistrationId() {
  return `GPET-2026-${Math.floor(10000 + Math.random() * 90000)}`;
}

export function generateTransactionId() {
  return `TXN${Date.now().toString().slice(-8)}`;
}