import { FC } from "react";
import Lists from "./lists";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Username on Notebook",
  description: "This is the notebook app",
};

const ListsPage: FC = () => {
  return <Lists />;
};

export default ListsPage;
