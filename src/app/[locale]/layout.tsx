import { Footer } from "@/components/server/layouts/Footer";
import { Header } from "@/components/server/layouts/Header";
import { LangType } from "@/i18n/routing";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { unstable_setRequestLocale } from "next-intl/server";
import "@/styles/globals.scss";
import "./layout.scss";

export const metadata: Metadata = {
  metadataBase: new URL("https://axisj.com"),
  title: {
    template: "%s | axisj.com",
    default: "axisj.com",
  },
  description: "AXISJ Official Website",
  openGraph: {
    title: "AXISJ.com",
    url: "https://axisj.com",
    siteName: "AXISJ Official Website",
    locale: "en",
    type: "website",
    images: [
      {
        url: `https://axisj.com/images/og-image.jpg`,
        width: 800,
        height: 400,
        alt: "AXISJ Official Website",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    shortcut: "https://axisj.com/favicons/favicon.ico",
  },
  alternates: {
    canonical: `https://axisj.com`,
    languages: {
      "en-US": "/en",
      "ko-KR": "/ko",
    },
    types: {
      "application/rss+xml": "https://axisj.com/feed.xml",
    },
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: ReactNode;
  params: { locale: LangType };
}>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
