"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type SlideItem = {
  image: string;
  alt?: string;
  tag?: string;
};

type Props = {
  slides?: SlideItem[];
};

const slidesData: SlideItem[] = [
  {
    image: "/images/cr/image1.png",
    alt: "GPET career diagnostic report overview",
    tag: "Career Diagnostic Report",
  },
  {
    image: "/images/cr/image2.png",
    alt: "GPET digital education overview report",
    tag: "Digital Education Overview",
  },
];

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex rounded-full border border-[#e8732a]/15 bg-[#fff4ed] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e8732a]">
      {children}
    </div>
  );
}

export default function ReportCarousel({ slides = slidesData }: Props) {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <section className="relative overflow-hidden border-t border-[#e8732a]/10 bg-[linear-gradient(180deg,#fffaf7_0%,#ffffff_100%)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8%] top-0 h-72 w-72 rounded-full bg-[#e8732a]/7 blur-3xl" />
        <div className="absolute right-[-8%] bottom-0 h-96 w-96 rounded-full bg-[#e8732a]/6 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <SectionBadge>GPET 2026</SectionBadge>

          <h2 className="mt-5 text-[clamp(2rem,4vw,3.4rem)] font-bold leading-[1.02] tracking-[-0.03em] text-[#2f1608]">
            GPET 2026: Your Performance, Profile, and Path
          </h2>

          <p className="mt-4 text-base leading-8 text-[#2f1608]/72 sm:text-lg">
            Explore diagnostic insights, subject performance, psychometric analysis,
            and AI-powered career recommendations through a simple single-slide carousel.
          </p>
        </div>

        <div className="mt-10">
          <div className="overflow-hidden rounded-[28px] border border-[#e8732a]/10 bg-white shadow-[0_14px_34px_rgba(232,115,42,0.06)] p-4 sm:p-6 lg:p-8">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              loop={slides.length > 1}
              autoplay={{ delay: 3200, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              onBeforeInit={(swiper: SwiperType) => {
                if (typeof swiper.params.navigation !== "boolean") {
                  swiper.params.navigation = {
                    ...swiper.params.navigation,
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  };
                }
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
            >
              {slides.map((slide, i) => (
                <SwiperSlide key={`${slide.image}-${i}`}>
                  <div className="overflow-hidden rounded-[24px] bg-[#fffaf7] p-3 sm:p-4">
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[20px] bg-white">
                      <img
                        src={slide.image}
                        alt={slide.alt ?? `GPET report slide ${i + 1}`}
                        className="h-full w-full object-contain object-center"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="mt-5 flex items-center justify-between gap-4">
              <div className="flex gap-3">
                <button
                  ref={prevRef}
                  type="button"
                  aria-label="Previous slide"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e8732a]/15 bg-white text-[#2f1608] shadow-[0_10px_24px_rgba(232,115,42,0.06)] transition hover:bg-[#fff7f2]"
                >
                  ←
                </button>

                <button
                  ref={nextRef}
                  type="button"
                  aria-label="Next slide"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e8732a]/15 bg-white text-[#2f1608] shadow-[0_10px_24px_rgba(232,115,42,0.06)] transition hover:bg-[#fff7f2]"
                >
                  →
                </button>
              </div>

              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2f1608]/40">
                Swipe through insights
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}