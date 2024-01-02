"use client";

import { FC, FormEvent, ChangeEvent, useState } from "react";
import Input from "@/components/input";
import { useRouter } from "next/navigation";
import styles from "./searchbar.module.css";
import { searchBar } from "@/inputs/searchBar";
import { searchIcon } from "@/icons/searchIcon";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";

const SearchBar: FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const { push } = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    push(`/search/?q=${encodeURIComponent(searchQuery)}`);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchBar}>
      <Input
        input={searchBar}
        value={searchQuery}
        onChange={handleChange}
        customClass={styles.input}
      />
      <button type="submit">
        <FontAwesomeIcon icon={searchIcon} customClass={styles.searchBarIcon} />
      </button>
    </form>
  );
};

export default SearchBar;
