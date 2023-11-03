"use client";

import { FC, useRef } from "react";
import SearchBar from "../searchBar";
import useToggle from "@/hooks/useToggle";
import styles from "./searchicon.module.css";
import { searchIcon, closeIcon } from "@/icons";
import useClickOutside from "@/hooks/useClickOutside";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";

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
      <span onClick={toggle}>
        {value ? (
          <FontAwesomeIcon icon={closeIcon} customClass={styles.icon} />
        ) : (
          <FontAwesomeIcon icon={searchIcon} customClass={styles.icon} />
        )}
      </span>
      {value && (
        <div className={styles.content}>
          <SearchBar />
        </div>
      )}
    </span>
  );
};

export default SearchIcon;
