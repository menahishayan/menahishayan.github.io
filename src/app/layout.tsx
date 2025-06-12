import BetaTag from "@/components/Beta";
import Header from "@/components/Header";
import type { Metadata } from "next";
import "./index.css";

export const metadata: Metadata = {
  title: "Menahi Shayan",
  description: "I build products",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="root-wrapper">
        <BetaTag />
        <Header />
        {children}
        {modal || null}
      </body>
    </html>
  );
}
