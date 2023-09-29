import { FC } from "react";
import Search from "./search";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Search page",
  description: "This is the notebook app Search page",
};

const SearchPage: FC = () => {
  return <Search />;
};

export default SearchPage;
