"use client";

import { FC } from "react";
import SearchBar from "../searchBar";
import useToggle from "@/hooks/useToggle";
import styles from "./searchicon.module.css";

const SearchIcon: FC = () => {
  const { value, toggle } = useToggle(false);

  return (
    <>
      <i
        className={
          value
            ? `fa-solid fa-xmark fa-fw ${styles["icon"]}`
            : `fa-solid fa-magnifying-glass fa-fw ${styles["icon"]}`
        }
        onClick={toggle}
      ></i>
      {value && (
        <div className={styles.content}>
          <SearchBar />
        </div>
      )}
    </>
  );
};

export default SearchIcon;
