import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito_Sans, Oleo_Script_Swash_Caps } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";


const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  weight: ["300", "400", "600"],
});
const oleoScript = Oleo_Script_Swash_Caps({
  subsets: ["latin"],
  variable: "--font-oleo-script",
  weight: "400",
});
export const metadata: Metadata = {
  title: "Skin Care",
  description: "Create by Shoaib",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.variable} ${oleoScript.variable}  antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
