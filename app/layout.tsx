"use client";
import { usePathname } from "next/navigation";

import localFont from "next/font/local";
import Navigation from "@/components/navigation";

import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  // Check if the current page is the login page
  const isLoginPage = pathname === "/";

  return (
    <html lang="en">
      <body>
        {!isLoginPage && <Navigation />}

        <main className="mt-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {children}
        </main>
      </body>
    </html>
  );
}
