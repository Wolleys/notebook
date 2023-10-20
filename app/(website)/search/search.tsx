"use client";

import { FC } from "react";
import styles from "./search.module.css";
import { useSearchParams } from "next/navigation";

const Search: FC = () => {
  const { get } = useSearchParams();
  const search = get("q");

  return (
    <div className={styles.container}>
      <p>{`Search results for "${search}"`}</p>
    </div>
  );
};

export default Search;
