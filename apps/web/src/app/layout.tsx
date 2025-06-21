// Next js imports
import { Fredoka, Poppins } from "next/font/google";
import type { Metadata } from "next";

// Styles imports
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import "@mosquitopedia/ui/styles.css";

// Other imports
import { ToastContainer } from "react-toastify";
import Header from "@mosquitopedia/ui/header";
import Footer from "@mosquitopedia/ui/footer";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-primary",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-secondary",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

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
    <html lang="en" className={`${fredoka.variable} ${poppins.variable}`}>
      <body className="font-secondary flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <ToastContainer theme="light" position="top-right" />
      </body>
    </html>
  );
};