import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AGE — You Don't Need More People. You Need a Fleet.",
  description: "22 AI agents. 5 divisions. 90 days to a business that runs without you.",
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
