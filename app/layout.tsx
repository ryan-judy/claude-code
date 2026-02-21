import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { client } from "@/lib/sanity/client";
import { siteSettingsQuery, navigationQuery } from "@/lib/sanity/queries";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const settings = await client.fetch(siteSettingsQuery);
    return {
      title: settings?.defaultSeoTitle ?? "Ryan Judy | Digital Marketing for Columbus Businesses",
      description:
        settings?.defaultSeoDescription ??
        "10+ years of digital marketing experience helping Columbus businesses grow online. Specializing in websites, AI integration, SEM, SEO, and full digital marketing strategy.",
      keywords: [
        "digital marketing Columbus Ohio",
        "website design Columbus Ohio",
        "SEO Columbus Ohio",
        "SEM Columbus Ohio",
        "AI marketing Columbus",
        "digital marketing strategy Columbus",
      ],
      authors: [{ name: settings?.siteName ?? "Ryan Judy" }],
      openGraph: {
        title: settings?.defaultSeoTitle ?? "Ryan Judy | Digital Marketing for Columbus Businesses",
        description:
          settings?.defaultSeoDescription ??
          "10+ years of digital marketing expertise. Helping Columbus businesses dominate their digital presence.",
        type: "website",
        locale: "en_US",
      },
    };
  } catch {
    return {
      title: "Ryan Judy | Digital Marketing for Columbus Businesses",
      description:
        "10+ years of digital marketing experience helping Columbus businesses grow online.",
    };
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [navData, siteData] = await Promise.all([
    client.fetch(navigationQuery).catch(() => null),
    client.fetch(siteSettingsQuery).catch(() => null),
  ]);

  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased">
        <Navigation data={navData} />
        <main>{children}</main>
        <Footer data={siteData} />
      </body>
    </html>
  );
}
