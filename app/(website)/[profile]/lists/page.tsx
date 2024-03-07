import { FC } from "react";
import Lists from "./lists";
import type { Metadata } from "next";

/**
 * The metadata for the profile list page.
 */
export const metadata: Metadata = {
  title: "Username on Notebook",
  description: "This is the notebook app",
};

/**
 * Component which shows the profile list page.
 * @returns The profile list page component.
 */
const ListsPage: FC = () => {
  return <Lists />;
};

export default ListsPage;
