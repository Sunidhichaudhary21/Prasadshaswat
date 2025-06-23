import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Professional Web Development Services | PS Web Services",
    template: "%s | PS Web Services",
  },
  description:
    "Professional web development services by Prasad Shaswat & Sunidhi Chaudhary. Beautiful, responsive websites starting at ₹2500. Expert developers, designer team.",
  keywords:
    "web development, website design, react development, next.js, responsive design, SEO optimization, professional websites, affordable web services",
  authors: [{ name: "Prasad Shaswat" }, { name: "Sunidhi Chaudhary" }],
  creator: "PS Web Services",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pswebservices.com",
    siteName: "PS Web Services",
    title: "Professional Web Development Services | PS Web Services",
    description:
      "Beautiful, responsive websites custom-built for your brand starting at just ₹2500. Professional web development services.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Web Development Services | PS Web Services",
    description:
      "Beautiful, responsive websites custom-built for your brand starting at just ₹2500.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
