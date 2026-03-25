import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import Script from "next/script";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata: Metadata = {
  title: "Spark Street Digital | Digital Marketing for Ohio Businesses",
  description:
    "Senior-level digital marketing for locally owned Ohio businesses. Websites, SEO & GEO/AEO, paid media, AI, and strategy — without the agency overhead.",
  keywords: [
    "digital marketing Ohio",
    "website design Ohio",
    "SEO Ohio",
    "paid media Ohio",
    "AI marketing Ohio",
    "digital marketing strategy Ohio",
    "Columbus Ohio digital marketing",
    "Spark Street Digital",
  ],
  authors: [{ name: "Ryan Judy" }],
  openGraph: {
    title: "Spark Street Digital | Digital Marketing for Ohio Businesses",
    description:
      "Senior-level digital marketing for locally owned Ohio businesses. Websites, SEO & GEO/AEO, paid media, and strategy — without the agency overhead.",
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
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
