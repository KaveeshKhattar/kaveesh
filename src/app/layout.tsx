import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import Navigation from "./_components/Navigation";
import Providers from "./_components/Providers";

export const metadata: Metadata = {
  title: "Kaveesh Khattar",
  description: "Built by Kaveesh Khattar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} font-sans antialiased`}
      >
        <Providers>
          <Navigation />
          <div className="mx-auto max-w-[850px] px-6 pb-24 pt-16 md:px-6 md:pb-44 md:pt-20">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
