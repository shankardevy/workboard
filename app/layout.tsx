"use client";
import { usePathname } from "next/navigation";
import Navigation from "@/components/navigation";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  return (
    <html lang="en">
      <body>
        {!isHomePage && <Navigation />}

        <main className="mx-auto max-w-7xl sm:px-6 lg:px-8">{children}</main>
      </body>
    </html>
  );
}
