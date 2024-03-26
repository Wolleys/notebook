/* eslint-disable @next/next/no-page-custom-font */
import "./globals.css";
import { FC, ReactNode } from "react";
import Providers from "./providers";
import type { Metadata } from "next";
import Header from "@/components/header";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Notebook",
  description: "Notebook app",
};

/**
 * Component which shows the root layout for the app.
 * @returns The root layout component.
 */
const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp%7CMuli:400,600,700,800,900&amp;display=swap"
          media="all"
        ></link>
      </head>
      <body>
        <Providers>
          <Header />
          <div className="container">{children}</div>
        </Providers>
      </body>
    </html>
  );
};

export default RootLayout;
