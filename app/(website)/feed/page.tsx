import { FC } from "react";
import Feed from "./feed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feed – Notebook",
  description: "This is the notebook app feed us page",
};

const FeedPage: FC = () => {
  return <Feed />;
};

export default FeedPage;
