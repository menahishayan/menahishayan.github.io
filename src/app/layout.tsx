import type { Metadata } from "next";

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
      <body>{children}</body>
    </html>
  );
}
