import type { Metadata } from "next";
import { Bitter, Inter } from "next/font/google";
import "./globals.css";

const bitter = Bitter({
  variable: "--font-bitter",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const title = "Riverside Cetina";
const description =
  "Beginner-friendly horseback riding along the Cetina river in Sinj, 35 km from Split. 1h30 rides from Glavice, €50. Book on WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL("https://riverside-cetina.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Riverside Cetina",
    images: ["/images/hero-poster.jpg"],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bitter.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-cream font-body text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
