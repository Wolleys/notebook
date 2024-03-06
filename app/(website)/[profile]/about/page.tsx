import { FC } from "react";
import About from "./about";
import type { Metadata } from "next";

/**
 * The metadata for the profile about page.
 */
export const metadata: Metadata = {
  title: "About - Username - Notebook",
  description: "This is the notebook app",
};

/**
 * Component which shows the profile about page.
 * @returns The profile about page component.
 */
const AboutPage: FC = () => {
  return <About />;
};

export default AboutPage;
