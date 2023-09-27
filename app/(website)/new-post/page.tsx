import { FC } from "react";
import NewPost from "./new-post";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "New post – Notebook",
  description: "In it's most basic form, what you see is what you get.",
};

const NewPostPage: FC = () => {
  return <NewPost />;
};

export default NewPostPage;
