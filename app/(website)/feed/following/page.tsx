import { FC } from "react";
import Following from "./following";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Following – Notebook",
  description: "This is the notebook app following page",
};

const FollowingPage: FC = () => {
  return <Following />;
};

export default FollowingPage;
