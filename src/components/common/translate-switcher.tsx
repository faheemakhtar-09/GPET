"use client";

export default function TranslateSwitcher() {
  const changeLanguage = (lang: string) => {
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;

    if (select) {
      select.value = lang;
      select.dispatchEvent(new Event("change"));
    }
  };

  return (
    <div className="flex gap-2">
      <button onClick={() => changeLanguage("en")}>EN</button>
      <button onClick={() => changeLanguage("hi")}>HI</button>
    </div>
  );
}