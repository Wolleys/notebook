import { FC } from "react";
import Search from "./search";
import type { Metadata } from "next";

/**
 * The metadata for the search page.
 */
export const metadata: Metadata = {
  title: "Search page",
  description: "This is the notebook app search page",
};

/**
 * Component which shows the search page.
 * @returns The search page component.
 */
const SearchPage: FC = () => {
  return <Search />;
};

export default SearchPage;
