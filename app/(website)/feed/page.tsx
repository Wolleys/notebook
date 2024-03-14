import { FC } from "react";
import Feed from "./feed";
import type { Metadata } from "next";

/**
 * The metadata for the feed page.
 */
export const metadata: Metadata = {
  title: "Feed – Notebook",
  description: "This is the notebook app feed us page",
};

/**
 * Component which shows the feed page.
 * @returns The feed page component.
 */
const FeedPage: FC = () => {
  return <Feed />;
};

export default FeedPage;
