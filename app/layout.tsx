import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hofix.cz"),
  title: {
    default: "hofix — IT & vývoj bez korporátní omáčky",
    template: "%s — hofix",
  },
  description:
    "IT specialista pro firmy: správa sítí a end-user support, analýza a zjednodušování firemních procesů a vývoj softwaru. Práce mám dost — zajímavé výzvy ale rád přijmu.",
  keywords: [
    "IT specialista",
    "správa sítí",
    "end-user support",
    "analýza procesů",
    "vývoj softwaru",
    "Olomouc",
    "IT pro firmy",
  ],
  authors: [{ name: "David Hofman" }],
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://hofix.cz",
    siteName: "hofix",
    title: "hofix — IT & vývoj bez korporátní omáčky",
    description:
      "IT specialista pro firmy: sítě, end-user support, analýza procesů a vývoj. Zajímavé výzvy rád přijmu.",
  },
  twitter: {
    card: "summary_large_image",
    title: "hofix — IT & vývoj bez korporátní omáčky",
    description:
      "IT specialista pro firmy: sítě, end-user support, analýza procesů a vývoj.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="cs"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
