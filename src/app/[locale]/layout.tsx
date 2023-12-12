import type { Metadata } from "next";
import "../../styles/globals.css";
import { Header } from "@/app/[locale]/Header";
import { Providers } from "@/app/[locale]/providers";
import { Footer } from "@/app/[locale]/Footer";
import { Analytics } from "@vercel/analytics/react";

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

interface Props {
  children: React.ReactNode;
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang={"en"}>
      <body>
        {/*"use client" 컴포넌트는 Providers 컴포넌트 안에 있어야 합니다.*/}
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
