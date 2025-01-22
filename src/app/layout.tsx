import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FNAV from "./components/FNAV";
import SNAV from "./components/SNAV";
import Footer from "./components/Footer";
import { CartProvider } from "react-use-cart"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nike UI by TALHA",
  description: "Duplicated NIKE UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FNAV/>
        <SNAV/>
        {children}
        <Footer/>
      </body>
    </html>
     );
}
