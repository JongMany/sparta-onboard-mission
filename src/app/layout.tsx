import type {Metadata} from "next";
// import localFont from "next/font/local";
import "./globals.css";
import {MainHeader} from "@/components/shared/main-header";
import {MainFooter} from "@/components/shared/main-footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "내일배움캠프",
  description: "내일배움캠프😆",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>
      <MainHeader/>
      {children}
      <MainFooter/>
      </body>
      </html>
  );
}
