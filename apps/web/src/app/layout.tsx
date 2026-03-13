import "./globals.css";
import type { Metadata } from "next";
import { fredoka, poppins } from "@/assets/fonts";

import NavBar from "@/components/home/navBar";
import RootWrapper from "@/components/home/rootWrapper";
import { Toaster } from "@mosquitopedia/ui/components/sonner";

export const metadata: Metadata = {
  title: "Mosquitopedia",
  description: "Find any mosquito, anytime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className={`${poppins.className} ${fredoka.variable}`}>
        <body className="flex min-h-screen flex-col">
          <RootWrapper>
            <NavBar />
            {children}
          </RootWrapper>
          <Toaster position="bottom-right" />
        </body>
      </html>
    </>
  );
}
