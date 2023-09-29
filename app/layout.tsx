import "./globals.css";
import { FC, ReactNode } from "react";
import Providers from "./providers";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "@/components/navBar";

const inter = Inter({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Notebook",
  description: "Notebook app",
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
