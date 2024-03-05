import { FC } from "react";
import Slug from "./slug";
import type { Metadata } from "next";

/**
 * The metadata for the slug page.
 */
export const metadata: Metadata = {
  title: "Slug - by Username - Notebook",
  description: "This is the notebook app",
};

/**
 * Component which shows the slug page.
 * @returns The slug page component.
 */
const SlugPage: FC = () => {
  return <Slug />;
};

export default SlugPage;
