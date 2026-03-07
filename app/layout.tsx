import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AGE — Your Competitors Just Hired 22 People. Zero Salaries.",
  description: "AGE deploys a full AI workforce around your business in 90 days. Growth. Creative. Operations. Strategy. Command. All of it.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }} className={inter.className}>
        {children}
      </body>
    </html>
  );
}
