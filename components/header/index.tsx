import { FC } from "react";
import Link from "next/link";
import SearchBar from "../searchBar";
import SearchIcon from "../searchIcon";
import styles from "./header.module.css";
import HeaderAvatar from "../headerAvatar";

const Header: FC = () => {
  const status = true;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href="/">Notebook</Link>
        </div>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        {!status && (
          <span className={styles.searchIcon}>
            <span className={styles.linksIcon}>
              <SearchIcon />
            </span>
          </span>
        )}
        <nav className={styles.nav}>
          <ul>
            {!status ? (
              <>
                <li>
                  <Link href="/auth/login">Sign in</Link>
                </li>
                <li>
                  <Link href="/auth/register">Sign up</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <span
                    className={styles.searchIcon}
                    style={{ marginRight: "-20px" }}
                  >
                    <span className={styles.linksIcon}>
                      <SearchIcon />
                    </span>
                  </span>
                </li>
                <li>
                  <span className={styles.write}>
                    <Link href="/new-post">
                      <span className={styles.linksIcon}>
                        <i className="fa-regular fa-pen-to-square fa-fw"></i>
                      </span>
                      &nbsp;Write
                    </Link>
                  </span>
                </li>
                <li>
                  <Link href="/me/notifications">
                    <span className={styles.linksIcon}>
                      <i className="fa-regular fa-bell fa-fw"></i>
                    </span>
                  </Link>
                </li>
                <li>
                  <HeaderAvatar />
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
