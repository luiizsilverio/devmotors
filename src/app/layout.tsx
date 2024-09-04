import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/header";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevMotors - Sua oficina especializada!",
  description: "Oficina de carros",
  keywords: ["oficina", "carros", "automotivo"],
  openGraph: {
    title: "DevMotors - Sua oficina especializada!",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.png`]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
