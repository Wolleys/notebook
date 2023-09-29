"use client";

import { FC, FormEvent, ChangeEvent, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./searchbar.module.css";

const SearchBar: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { push } = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    push(`/search/?query=${encodeURIComponent(searchQuery)}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchBar}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        className={styles.input}
        placeholder="Search Notebook"
      />
      <button type="submit">
        <i
          className={`fa-solid fa-magnifying-glass ${styles["searchBarIcon"]}`}
        ></i>
      </button>
    </form>
  );
};

export default SearchBar;
