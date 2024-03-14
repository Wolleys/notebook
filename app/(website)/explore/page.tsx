import { FC } from "react";
import Explore from "./explore";
import type { Metadata } from "next";

/**
 * The metadata for the explore page.
 */
export const metadata: Metadata = {
  title: "Explore – Notebook",
  description: "This is the notebook app explore page",
};

/**
 * Component which shows the explore page.
 * @returns The explore page component.
 */
const ExplorePage: FC = () => {
  return <Explore />;
};

export default ExplorePage;
