import { FC } from "react";
import About from "./about";
import type { Metadata } from "next";

/**
 * The metadata for the about page.
 */
export const metadata: Metadata = {
  title: "About - Username - Notebook",
  description: "This is the notebook app",
};

/**
 * Component which shows the about page.
 * @returns The about page component.
 */
const AboutPage: FC = () => {
  return <About />;
};

export default AboutPage;
