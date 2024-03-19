import { FC } from "react";
import NewPost from "./new-post";
import type { Metadata } from "next";

/**
 * The metadata for the new post page.
 */
export const metadata: Metadata = {
  title: "New post – Notebook",
  description: "In it's most basic form, what you see is what you get.",
};

/**
 * Component which shows the new post page.
 * @returns The new post page component.
 */
const NewPostPage: FC = () => {
  return <NewPost />;
};

export default NewPostPage;
