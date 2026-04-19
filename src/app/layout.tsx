import "./globals.css";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Script from "next/script";

// app/layout.tsx

export const metadata = {
  title: "GPET 2026 | India's First AI-Based Mobile Exam | Gradorra",
  description:
    "Register for GPET 2026 by Gradorra. Most secure AI-proctored merit test. Win scholarships & digital gadgets. Exclusive for Uttar Pradesh students.",

  openGraph: {
    title: "GPET 2026 - Digital Gadgets & Scholarship Exam",
    description: "Empowering merit through AI technology.",
    url: "https://yourdomain.com",
    siteName: "GPET 2026",
    images: [
      {
        url: "https://yourdomain.com/banner.jpg", // ⚠️ replace
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* ✅ Google Translate Hidden Container */}
        <div id="google_translate_element" style={{ display: "none" }} />
        <h1 className="hidden">भारत का पहला AI-आधारित Mobile Exam</h1>
        {/* ✅ Google Script */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
            function googleTranslateElementInit() {
              new window.google.translate.TranslateElement(
                {
                  pageLanguage: 'en',
                  autoDisplay: false
                },
                'google_translate_element'
              );
            }
          `}
        </Script>

        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />

        <Navbar />
        <main className="pt-20 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
