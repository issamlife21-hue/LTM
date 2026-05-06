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
    "Liberia Traffic Management (LTM) is the official government concessionaire for vehicle registration, driver licensing, vehicle inspection, and license plates in Liberia. Visit our SKD Boulevard service center in Monrovia.",
  keywords: [
    "Liberia Traffic Management",
    "LTM",
    "Liberia driver license",
    "Liberia vehicle registration",
    "Liberia vehicle inspection",
    "Monrovia traffic services",
    "license plates Liberia",
  ],
  authors: [{ name: "Liberia Traffic Management" }],
  metadataBase: new URL("https://www.liberiatraffic.com"),
  openGraph: {
    title: "Liberia Traffic Management",
    description:
      "Official traffic management services for the Republic of Liberia — vehicle registration, driver licensing, inspection, and license plates.",
    url: "https://www.liberiatraffic.com",
    siteName: "Liberia Traffic Management",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Liberia Traffic Management",
    description:
      "Official traffic management services for the Republic of Liberia.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
