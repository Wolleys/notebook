import { FC } from "react";
import Following from "./following";
import type { Metadata } from "next";

/**
 * The metadata for the following feed page.
 */
export const metadata: Metadata = {
  title: "Following – Notebook",
  description: "This is the notebook app following page",
};

/**
 * Component which shows the following feed page.
 * @returns The following feed page component.
 */
const FollowingPage: FC = () => {
  return <Following />;
};

export default FollowingPage;
