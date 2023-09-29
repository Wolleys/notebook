"use client";

import { FC, ChangeEvent } from "react";
import styles from "./searchbar.module.css";

const SearchBar: FC = () => {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        onChange={handleSearch}
        className={styles.input}
        placeholder="Search Notebook"
      />
      <button type="submit">
        <i
          className={`fa-solid fa-magnifying-glass ${styles["searchBarIcon"]}`}
        ></i>
      </button>
    </div>
  );
};

export default SearchBar;
