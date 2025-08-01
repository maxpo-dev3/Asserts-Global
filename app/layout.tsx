import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import { DM_Sans, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // adjust as needed
});

export const metadata: Metadata = {
  title: "Assets Global",
  description: "Real Estate advisory services",
  icons: {
    icon: "/favicon.ico", // ensure this file is in the /public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          as="video"
          href="/videos/header.mp4"
          type="video/mp4"
        />
        <meta
          name="google-site-verification"
          content="Yr_AowC4ajXeufTLujsbaqo_mC7DI1G2fAgN0pfeGXA"
        />
        <Script id="gtm-head" strategy="beforeInteractive">
          {`
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','G-3CD8W5KCJB');
    `}
        </Script>
      </head>
      <body className={`  ${poppins.variable}`}>
        <Header />
        {/* <Navbar /> */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
