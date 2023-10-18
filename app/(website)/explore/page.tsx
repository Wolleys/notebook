import { FC } from "react";
import Explore from "./explore";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore – Notebook",
  description: "This is the notebook app explore page",
};

const ExplorePage: FC = () => {
  return <Explore />;
};

export default ExplorePage;
