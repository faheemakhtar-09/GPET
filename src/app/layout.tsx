import "./globals.css";
import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

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
        <Navbar />
        <main className="pt-20 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
