import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ryan Judy | Digital Marketing for Ohio Businesses",
  description:
    "10+ years of digital marketing experience helping Ohio businesses grow online. Specializing in websites, AI integration, SEM, SEO, and full digital marketing strategy.",
  keywords: [
    "digital marketing Columbus Ohio",
    "website design Columbus Ohio",
    "SEO Columbus Ohio",
    "SEM agency Ohio",
    "AI marketing Ohio",
    "digital marketing strategy Ohio",
  ],
  authors: [{ name: "Ryan Judy" }],
  openGraph: {
    title: "Ryan Judy | Digital Marketing for Ohio Businesses",
    description:
      "10+ years of digital marketing expertise. Helping Ohio businesses dominate their digital presence.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
