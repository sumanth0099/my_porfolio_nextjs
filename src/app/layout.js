import "./globals.css";
import { portfolioData } from "@/data/portfolioData";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${portfolioData.name} | ${portfolioData.role}`,
  description: portfolioData.about.bio.substring(0, 160),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
