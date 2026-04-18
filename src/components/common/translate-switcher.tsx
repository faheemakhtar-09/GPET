"use client";

import { useState } from "react";

export default function TranslateSwitcher() {
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    const select = document.querySelector(
      ".goog-te-combo"
    ) as HTMLSelectElement;

    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }

    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-xl border border-[#E8732A]/20 bg-white px-4 py-2 text-sm font-medium text-[#244C9A] hover:bg-[#FFF4ED]"
      >
        Language ▾
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-32 overflow-hidden rounded-xl border border-[#E8732A]/20 bg-white shadow-lg">
          <button
            onClick={() => changeLanguage("en")}
            className="w-full px-4 py-2 text-left text-sm text-[#244C9A] hover:bg-[#FFF4ED]"
          >
            🇺🇸 English
          </button>

          <button
            onClick={() => changeLanguage("hi")}
            className="w-full px-4 py-2 text-left text-sm text-[#244C9A] hover:bg-[#FFF4ED]"
          >
            🇮🇳 Hindi
          </button>
        </div>
      )}
    </div>
  );
}