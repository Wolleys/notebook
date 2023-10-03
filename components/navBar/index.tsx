import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthLinks from "../authLinks";
import SearchBar from "../searchBar";
import styles from "./navbar.module.css";

const NavBar: FC = () => {
  const status = true;

  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">Notebook</Link>
      </div>
      <div className={styles.searchBar}>
        <SearchBar />
      </div>
      {!status && (
        <span className={styles.searchIcon}>
          <i
            className={`fa-solid fa-magnifying-glass fa-fw ${styles["linksIcon"]}`}
          ></i>
        </span>
      )}
      <div className={styles.links}>
        {!status ? (
          <AuthLinks />
        ) : (
          <>
            <span className={styles.searchIcon}>
              <i
                className={`fa-solid fa-magnifying-glass fa-fw ${styles["linksIcon"]}`}
              ></i>
            </span>
            <div className={styles.write}>
              <Link href="/new-post">
                <i
                  className={`fa-regular fa-pen-to-square fa-fw ${styles["linksIcon"]}`}
                ></i>
                Write
              </Link>
            </div>
            <Link href="/me/notifications">
              <i
                className={`fa-regular fa-bell fa-fw ${styles["linksIcon"]}`}
              ></i>
            </Link>
            <div className={styles.profile}>
              <Image
                src="/profile-pic.png"
                alt="profile"
                width={32}
                height={32}
              />
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
