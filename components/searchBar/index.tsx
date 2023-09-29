import { FC, InputHTMLAttributes } from "react";
import styles from "./searchbar.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name?: string;
}

const SearchBar: FC<InputProps> = ({ name, ...otherProps }) => {
  return (
    <div className={styles.searchBar}>
      <input name={name} {...otherProps} className={styles.input} />
      <button type="submit">
        <i
          className={`fa-solid fa-magnifying-glass ${styles["searchBarIcon"]}`}
        ></i>
      </button>
    </div>
  );
};

export default SearchBar;
