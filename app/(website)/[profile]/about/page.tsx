import { FC } from "react";
import About from "./about";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Username - Notebook",
  description: "This is the notebook app",
};

const AboutPage: FC = () => {
  return <About />;
};

export default AboutPage;
