import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kalkandoctor.com"),

  title: {
    default: "Kalkan Doctor | English-Speaking Doctor in Kalkan & Kaş",
    template: "%s | Kalkan Doctor",
  },

  description:
    "24/7 English-speaking private doctor service in Kalkan, Kaş, Patara and Kaputaş. Hotel visits, villa visits, home healthcare and urgent medical assistance.",

  keywords: [
    "Kalkan doctor",
    "doctor in Kalkan",
    "English speaking doctor Kalkan",
    "Kaş doctor",
    "doctor in Kaş",
    "Patara doctor",
    "Kaputaş doctor",
    "hotel doctor Kalkan",
    "villa doctor Kalkan",
    "home visit doctor Kalkan",
    "emergency doctor Kalkan",
    "private doctor Kalkan",
    "tourist doctor Kalkan",
    "24/7 doctor Kalkan",
    "doctor near me",
  ],

  authors: [{ name: "Kalkan Doctor" }],
  creator: "Kalkan Doctor",
  publisher: "Kalkan Doctor",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://www.kalkandoctor.com",
    siteName: "Kalkan Doctor",
    title: "Kalkan Doctor | 24/7 Private Medical Care",
    description:
      "English-speaking medical care across Kalkan, Kaş, Patara, Kaputaş and surrounding areas.",
  },

  twitter: {
    card: "summary_large_image",
    title: "Kalkan Doctor | 24/7 Private Medical Care",
    description:
      "English-speaking doctor visits throughout Kalkan, Kaş, Patara and Kaputaş.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "healthcare",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#e00016",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-white text-slate-950 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
