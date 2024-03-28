"use client";

import { FC } from "react";
import { ThemeProvider } from "next-themes";
import { ProvidersProps } from "./ProvidersProps";

/**
 * Component which shows providers.
 * @returns The providers.
 */
const Providers: FC<ProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default Providers;
