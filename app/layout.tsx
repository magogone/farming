import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import MobileNav from "@/components/layout/mobile-nav";
import Header from "@/components/layout/header";
import { ChatSheet } from "@/components/chat-sheet";
// import { Icons } from "@/components/icons" // Icons不再需要eth定义

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DeFi Dashboard",
  description: "A modern DeFi dashboard for farming, swapping, and more.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex w-full justify-center bg-slate-50">
            <div className="relative w-full max-w-md bg-slate-50 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end" />
              <div className="relative z-10">
                <Header />
                <main className="flex-1 pb-28">{children}</main>
                <MobileNav />
                <ChatSheet />
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
