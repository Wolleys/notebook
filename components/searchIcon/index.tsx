"use client";

import { FC, useRef } from "react";
import SearchBar from "../searchBar";
import useToggle from "@/hooks/useToggle";
import styles from "./searchicon.module.css";
import { closeIcon } from "@/icons/closeIcon";
import { searchIcon } from "@/icons/searchIcon";
import useClickOutside from "@/hooks/useClickOutside";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";

const SearchIcon: FC = () => {
  const searchIconRef = useRef(null);
  const { value: openSearchBar, toggle: toggleSearchBar } = useToggle(false);

  const closeSearchBar = (): void => {
    if (openSearchBar) {
      toggleSearchBar();
    }
  };
  useClickOutside(searchIconRef, closeSearchBar);

  return (
    <span ref={searchIconRef}>
      <span onClick={toggleSearchBar}>
        {openSearchBar ? (
          <FontAwesomeIcon icon={closeIcon} customClass={styles.icon} />
        ) : (
          <FontAwesomeIcon icon={searchIcon} customClass={styles.icon} />
        )}
      </span>
      {openSearchBar && (
        <div className={styles.content}>
          <SearchBar />
        </div>
      )}
    </span>
  );
};

export default SearchIcon;
