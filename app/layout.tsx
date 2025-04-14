import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const fontSans = Source_Sans_3({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "PDFuse",
  description: "PDFuse is your personal summary sage — it cuts through the clutter and gives you only what matters. PDFs become pearls of wisdom, fast.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en" suppressHydrationWarning={true}>
      <body className={`${fontSans.variable} antialiased`}>
        <div className="flex flex-col min-h-screen relative">

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        </div>
        <Toaster />
      </body>
    </html>
    </ClerkProvider>
  );
}
