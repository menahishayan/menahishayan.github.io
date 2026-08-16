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
  metadataBase: new URL("https://tech.menahishayan.com"),
  title: "Shayan Menahi — AI PM, Speaker, Builder",
  description:
    "AI Product Manager at T-Mobile. International public speaker. Open source builder. MS Engineering Management at Northeastern University.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shayan Menahi — AI PM, Speaker, Builder",
    description:
      "AI PM at T-Mobile · International Speaker · Open Source Builder",
    type: "website",
    url: "https://tech.menahishayan.com",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@MenahiShayan",
    title: "Shayan Menahi",
    description: "AI PM · Speaker · Builder",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Shayan Menahi",
  alternateName: "Menahi Shayan",
  url: "https://tech.menahishayan.com",
  image: "https://film.menahishayan.com/images/portrait.jpg",
  jobTitle: ["Entrepreneur", "Public Speaker", "Filmmaker"],
  gender: "Male",
  alumniOf: {
    "@type": "OrganizationRole",
    endDate: "2026",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Northeastern University",
      sameAs: "https://www.northeastern.edu/",
    },
  },
  sameAs: [
    "https://tech.menahishayan.com",
    "https://film.menahishayan.com",
    "https://www.imdb.com/name/nm18343686/",
    "https://twitter.com/MenahiShayan",
    "https://gitnation.com/person/shayan_136926",
    "https://github.com/menahishayan",
    "https://sessionize.com/menahishayan/",
    "https://www.linkedin.com/in/menahi-shayan/",
    "https://shayan.productions",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
