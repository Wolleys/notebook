import { FC } from "react";
import Link from "next/link";
import SearchBar from "../searchBar";
import styles from "./navbar.module.css";

const NavBar: FC = () => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navBarLeft}>
        <Link href="/">Notebook</Link>
      </div>
      <div className={styles.navBarCenter}>
        <SearchBar placeholder="Search Notebook" />
      </div>
      <div className={styles.navBarRight}>
        <ul className={styles.navBarList}>
          <li className={styles.navBarListItem}>
            <Link href="/auth/login">
              Sign in
            </Link>
          </li>
          <li className={styles.navBarListItem}>
            <Link href="/auth/register">
              Sign up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
