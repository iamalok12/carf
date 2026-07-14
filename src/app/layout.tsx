import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Great_Vibes, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const vibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vibes",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sherya & Abhishek | The Wedding Celebration,
  description: "Join us in celebrating our wedding day.",
};

export const viewport = {
  themeColor: "#FDFBF7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${vibes.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-cormorant text-brand-text bg-brand-bg selection:bg-brand-gold selection:text-white">
        {children}
      </body>
    </html>
  );
}
