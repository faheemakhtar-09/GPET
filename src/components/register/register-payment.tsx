"use client";

import { CreditCard, Landmark, Smartphone } from "lucide-react";
import { FormData } from "./register-types";
import { cn } from "./register-utils";

const methods = [
  { id: "upi", title: "UPI", desc: "Pay instantly using any UPI app", icon: Smartphone },
  { id: "card", title: "Debit / Credit Card", desc: "Secure online card payment", icon: CreditCard },
  { id: "netbanking", title: "Net Banking", desc: "Pay through your bank account", icon: Landmark },
] as const;

export default function RegisterPayment({
  form,
  touched,
  errors,
  setField,
  setBooleanField,
  markTouched,
}: {
  form: FormData;
  touched: Record<string, boolean>;
  errors: Record<string, string>;
  setField: (key: keyof FormData, value: string) => void;
  setBooleanField: (key: keyof FormData, value: boolean) => void;
  markTouched: (fields: readonly (keyof FormData)[]) => void;
}) {
  return (
    <div className="grid gap-5">
      <div className="rounded-[24px] border border-[#e8732a]/10 bg-[#fff7f2] p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.16em] text-[#e8732a]">
              Registration Fee
            </p>
            <h3 className="mt-1 font-montserrat text-2xl font-bold tracking-[-0.02em] text-[#2f1608]">
              ₹199
            </h3>
            <p className="mt-1 font-inter text-sm leading-6 text-[#2f1608]/62">
              Complete payment to confirm registration and enable admit card access.
            </p>
          </div>

          <div className="rounded-2xl bg-white px-4 py-3 text-right shadow-[0_10px_25px_rgba(232,115,42,0.08)]">
            <p className="font-inter text-[11px] uppercase tracking-[0.14em] text-[#2f1608]/45">
              Status
            </p>
            <p
              className={cn(
                "mt-1 font-inter text-sm font-semibold",
                form.paymentStatus ? "text-[#16A34A]" : "text-[#e8732a]",
              )}
            >
              {form.paymentStatus ? "Paid" : "Pending"}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {methods.map((method) => {
          const Icon = method.icon;
          const active = form.paymentMethod === method.id;

          return (
            <button
              key={method.id}
              type="button"
              onClick={() => {
                setField("paymentMethod", method.id);
                markTouched(["paymentMethod"]);
              }}
              className={cn(
                "rounded-[22px] border p-5 text-left transition",
                active
                  ? "border-[#e8732a] bg-[#fff7f2] shadow-[0_18px_35px_rgba(232,115,42,0.12)]"
                  : "border-[#e8732a]/10 bg-white hover:border-[#e8732a]/35",
              )}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8732a] text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h4 className="mt-4 font-montserrat text-lg font-semibold text-[#2f1608]">
                {method.title}
              </h4>
              <p className="mt-1 font-inter text-sm leading-6 text-[#2f1608]/62">
                {method.desc}
              </p>
            </button>
          );
        })}
      </div>

      {touched.paymentMethod && errors.paymentMethod ? (
        <p className="text-xs text-[#EF4444]">{errors.paymentMethod}</p>
      ) : null}

      <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
        <label className="block">
          <span className="font-inter text-[13px] font-semibold text-[#2f1608] sm:text-sm">
            Transaction ID
          </span>
          <input
            type="text"
            value={form.transactionId}
            onChange={(e) => setField("transactionId", e.target.value)}
            onBlur={() => markTouched(["transactionId"])}
            placeholder="Enter transaction/reference ID"
            className={cn(
              "mt-2 h-11 w-full rounded-xl border bg-white px-3.5 font-inter text-sm text-[#2f1608] outline-none transition placeholder:text-[#2f1608]/35 sm:h-12 sm:px-4",
              touched.transactionId && errors.transactionId
                ? "border-[#EF4444]/40 ring-4 ring-[#EF4444]/10"
                : "border-[#e8732a]/15 focus:border-[#e8732a] focus:ring-4 focus:ring-[#e8732a]/10",
            )}
          />
          {touched.transactionId && errors.transactionId ? (
            <p className="mt-1.5 font-inter text-[11px] text-[#EF4444] sm:text-xs">
              {errors.transactionId}
            </p>
          ) : null}
        </label>

        <button
          type="button"
          onClick={() => {
            setBooleanField("paymentStatus", true);
            markTouched(["paymentStatus"]);
          }}
          className="inline-flex h-11 items-center justify-center rounded-xl bg-[#e8732a] px-5 font-inter text-sm font-semibold text-white transition hover:opacity-95 sm:mt-7 sm:h-12"
        >
          Mark as Paid
        </button>
      </div>

      {touched.paymentStatus && errors.paymentStatus ? (
        <p className="text-xs text-[#EF4444]">{errors.paymentStatus}</p>
      ) : null}
    </div>
  );
}