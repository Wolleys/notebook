import { FC } from "react";
import Post from "./post";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Post slug",
  description: "This is the notebook app Post page",
};

const PostPage: FC = () => {
  return <Post />;
};

export default PostPage;
