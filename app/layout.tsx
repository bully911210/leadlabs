import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "LeadLabs - AI Receptionist for Johannesburg & Pretoria Businesses",
  description:
    "Never miss another lead. 24/7 AI receptionist that answers calls, books appointments, and sends quotes instantly. Serving businesses in Johannesburg and Pretoria.",
  generator: "v0.app",
  keywords: ["AI receptionist", "Johannesburg", "Pretoria", "business automation", "call handling", "lead generation"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
