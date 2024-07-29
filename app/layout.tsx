/* eslint-disable no-use-before-define */

import "./globals.css"
import React, { ReactNode } from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const syne = Inter({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.example.com/"),
  title: "Samuel Odogwu's Portfolio",
  description: "Samuel Odogwu's Portfolio",
  generator: "Next.js",
  applicationName: "Samuel Odogwu's Portfolio",
  keywords: [
    "Samuel Odogwu's Portfolio",
    "React",
    "developer",
    "frontend",
    "nextjs",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "software",
    "software developer",
    "portfolio",
    "frontend engineer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Samuel Odogwu's Portfolio",
    description: "Samuel Odogwu's Portfolio",
    url: "https://www.tobiodogwu.vercel.app/",
    siteName: "www.eldoraui.site",
    images: [
      {
        url: "./public/metadata.jpg",
        width: 1200,
        height: 630,
        alt: "Samuel Odogwu's Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Odogwu's Portfolio",
    description: "Samuel Odogwu's Portfolio",
    creator: "Samuel Odogwu",
    creatorId: "0000000000",
    images: ["./public/samuelImage.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
}

type RootLayoutProps = {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-none scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
      </body>
    </html>
  )
}
