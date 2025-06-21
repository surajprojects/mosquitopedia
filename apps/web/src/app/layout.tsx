import { Fredoka, Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-fredoka",
});

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['400', '500'],
  display: 'swap',
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
      <body className="font-body">
        {children}
      </body>
    </html>
  );
};