import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import "./globals.css"
import { DM_Sans, Poppins } from "next/font/google"
import Navbar from "@/components/Navbar"

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // adjust as needed
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
        className={`  ${poppins.variable}`}
      >
        <Header />
         {/* <Navbar /> */}
        <main>{children}</main>
        <Footer />
       
      </body>
    </html>
  )
}
