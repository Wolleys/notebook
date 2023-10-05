"use client";

import { FC, useRef } from "react";
import SearchBar from "../searchBar";
import useToggle from "@/hooks/useToggle";
import styles from "./searchicon.module.css";
import useClickOutside from "@/hooks/useClickOutside";

const SearchIcon: FC = () => {
  const searchIconRef = useRef(null);
  const { value, toggle } = useToggle(false);

  const closeSearchBar = (): void => {
    if (value) {
      toggle();
    }
  };
  useClickOutside(searchIconRef, closeSearchBar);

  return (
    <span ref={searchIconRef}>
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
    </span>
  );
};

export default SearchIcon;
