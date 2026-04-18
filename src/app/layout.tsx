import "./globals.css";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import Script from "next/script";

export const metadata = {
  title: "GPET Portal",
  description: "Gradorra GPET 2026",
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