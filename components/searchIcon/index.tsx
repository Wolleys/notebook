"use client";

import { FC, useState } from "react";
import SearchBar from "../searchBar";
import styles from "./searchicon.module.css";

const SearchIcon: FC = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const handleToggle = (): void => {
    setOpen(!open);
  };

  return (
    <>
      <i
        className={
          open
            ? `fa-solid fa-xmark fa-fw ${styles["icon"]}`
            : `fa-solid fa-magnifying-glass fa-fw ${styles["icon"]}`
        }
        onClick={handleToggle}
      ></i>
      {open && (
        <div className={styles.content}>
          <SearchBar />
        </div>
      )}
    </>
  );
};

export default SearchIcon;
