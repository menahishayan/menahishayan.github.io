import type { Metadata } from "next";
import "./index.css";

export const metadata: Metadata = {
  title: "Menahi Shayan",
  description: "I build products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="root-wrapper">{children}</body>
    </html>
  );
}
