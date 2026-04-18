"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-white text-[#2f1608]">
      <section className="relative overflow-hidden border-b border-[#e8732a]/10 bg-[linear-gradient(180deg,#fffaf7_0%,#ffffff_100%)]">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-[-8%] top-[-10%] h-72 w-72 rounded-full bg-[#e8732a]/8 blur-3xl" />
          <div className="absolute right-[-10%] bottom-[-15%] h-80 w-80 rounded-full bg-[#e8732a]/6 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-[#e8732a]/15 bg-[#fff4ed] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
              Contact Us
            </div>

            <h1 className="mt-5 text-[clamp(2.4rem,5vw,4.5rem)] font-bold leading-[0.96] tracking-[-0.04em] text-[#2f1608]">
              Let’s Connect
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-8 text-[#2f1608]/72 sm:text-lg">
              Have a question about GPET 2026, partnerships, admissions, or
              student support? Send us a message and our team will get back to
              you.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-[#e8732a]/10 bg-[#fffaf7] p-6 shadow-[0_16px_40px_rgba(232,115,42,0.05)] sm:p-8">
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#2f1608]">
              Contact Information
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#2f1608]/72">
              You can reach us directly through the details below or use the
              form to send your query.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-2xl border border-[#e8732a]/8 bg-white p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff4ed] text-[#e8732a]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2f1608]">Email</p>
                  <p className="mt-1 text-sm text-[#2f1608]/70">info@gpet.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[#e8732a]/8 bg-white p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff4ed] text-[#e8732a]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2f1608]">Phone</p>
                  <p className="mt-1 text-sm text-[#2f1608]/70">
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-[#e8732a]/8 bg-white p-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#fff4ed] text-[#e8732a]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2f1608]">Office</p>
                  <p className="mt-1 text-sm text-[#2f1608]/70">
                    Greater Noida West, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#e8732a]/10 bg-white p-6 shadow-[0_16px_40px_rgba(232,115,42,0.06)] sm:p-8">
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#2f1608]">
              Send a Message
            </h2>

            <p className="mt-4 text-sm leading-7 text-[#2f1608]/72">
              Fill out the form below and we’ll respond as soon as possible.
            </p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5 text-sm text-green-800">
                Thank you. Your message has been submitted successfully.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-[#2f1608]"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Enter your full name"
                      className="h-12 w-full rounded-xl border border-[#e8732a]/15 bg-[#fffaf7] px-4 text-sm text-[#2f1608] outline-none transition focus:border-[#e8732a] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-[#2f1608]"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email"
                      className="h-12 w-full rounded-xl border border-[#e8732a]/15 bg-[#fffaf7] px-4 text-sm text-[#2f1608] outline-none transition focus:border-[#e8732a] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-[#2f1608]"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      className="h-12 w-full rounded-xl border border-[#e8732a]/15 bg-[#fffaf7] px-4 text-sm text-[#2f1608] outline-none transition focus:border-[#e8732a] focus:bg-white"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-sm font-semibold text-[#2f1608]"
                    >
                      Subject
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      placeholder="Enter subject"
                      className="h-12 w-full rounded-xl border border-[#e8732a]/15 bg-[#fffaf7] px-4 text-sm text-[#2f1608] outline-none transition focus:border-[#e8732a] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#2f1608]"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Write your message here..."
                    className="w-full rounded-xl border border-[#e8732a]/15 bg-[#fffaf7] px-4 py-3 text-sm text-[#2f1608] outline-none transition focus:border-[#e8732a] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#e8732a] px-6 py-3.5 text-sm font-semibold text-white transition duration-300 hover:bg-[#cf6322]"
                >
                  Send Message
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
