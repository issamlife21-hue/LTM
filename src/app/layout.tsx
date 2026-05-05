import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { UtilityStrip } from "@/components/layout/UtilityStrip";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Liberia Traffic Management — Official Traffic Services in Liberia",
    template: "%s | Liberia Traffic Management",
  },
  description:
    "Official government concessionaire for vehicle registration, driver licensing, inspection, and license plates in Liberia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <UtilityStrip />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
