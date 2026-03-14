import "./globals.css";
import type { Metadata } from "next";
import { fredoka, poppins } from "@/assets/fonts";

import Header from "@/components/home/header";
import Footer from "@/components/home/footer";
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
            <Header />
            <main className="flex flex-1 justify-center">{children}</main>
            <Footer />
          </RootWrapper>
          <Toaster position="bottom-right" />
        </body>
      </html>
    </>
  );
}
