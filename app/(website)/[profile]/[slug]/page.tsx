import { FC } from "react";
import Slug from "./slug";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Slug - by Username - Notebook",
  description: "This is the notebook app",
};

const SlugPage: FC = () => {
  return <Slug />;
};

export default SlugPage;
