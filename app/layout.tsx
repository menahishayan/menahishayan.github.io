import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Shayan Menahi — AI PM, Speaker, Builder",
  description:
    "AI Product Manager at T-Mobile. International public speaker. Open source builder. MS Engineering Management at Northeastern University.",
  openGraph: {
    title: "Shayan Menahi — AI PM, Speaker, Builder",
    description:
      "AI PM at T-Mobile · International Speaker · Open Source Builder",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@MenahiShayan",
    title: "Shayan Menahi",
    description: "AI PM · Speaker · Builder",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="bg-[#080808] text-white font-body antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
