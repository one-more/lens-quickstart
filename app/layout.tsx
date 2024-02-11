import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LensProvider } from "~/Lens/LensProvider";
import { Web3ModalProvider } from "~/Web3Modal/Web3ModalProvider";
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lens Provider QuickStart",
  description: "Lens Provider QuickStart",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Web3ModalProvider>
          <LensProvider>{children}</LensProvider>
        </Web3ModalProvider>
      </body>
    </html>
  );
}
