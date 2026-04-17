/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#002366",
          navyDark: "#001A4D",
          navyLight: "#1E3A8A",
          gold: "#D4AF37",
          goldDark: "#B8932F",
          goldLight: "#E6C35C",
          ghost: "#F8FAFC",
          success: "#10B981",
          alert: "#EF4444",
          dark: "#0A0A0F",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 8px 24px rgba(0, 35, 102, 0.08)",
        glass: "0 8px 30px rgba(0, 0, 0, 0.12)",
        gold: "0 8px 20px rgba(212, 175, 55, 0.22)",
      },
      borderRadius: {
        xl2: "1rem",
      },
      backdropBlur: {
        xs: "2px",
      },
      letterSpacing: {
        heading: "-0.02em",
      },
      keyframes: {
        pulseSoft: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.04)" },
        },
        slideDownFade: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        pulseSoft: "pulseSoft 2s ease-in-out infinite",
        slideDownFade: "slideDownFade 0.3s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
