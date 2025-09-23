import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pokemon List",
  description: "Welcome to the pokemon list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-100`}
      >
        <div className="flex min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_55%)]">
          <Sidebar />

          <main className="flex-1 px-8 py-12 md:px-16 md:py-16 overflow-y-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
