import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"
import Navbar from "@/components/Navbar"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Assets Global",
  description: "Real Estate advisory services",
  icons: {
    icon: "/favicon.ico", // ensure this file is in the /public folder
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
         {/* <Navbar /> */}
        <main>{children}</main>
        <Footer />
       
      </body>
    </html>
  )
}
