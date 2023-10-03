import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthLinks from "../authLinks";
// import SearchBar from "../searchBar";
import styles from "./navbar.module.css";

const NavBar: FC = () => {
  const status = false;

  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">Notebook</Link>
      </div>
      <div className={styles.searchBar}>{/* <SearchBar /> */} SearchBar</div>
      <div className={styles.links}>
        {!status ? (
          <AuthLinks />
        ) : (
          <>
            <Link href="/new-post">
              <i
                className={`fa-regular fa-pen-to-square fa-fw ${styles["linksIcon"]}`}
              ></i>
              Write
            </Link>
            <Link href="/me/notifications">
              <i
                className={`fa-regular fa-bell fa-fw ${styles["linksIcon"]}`}
              ></i>
            </Link>
            <Image
              src="/profile-pic.png"
              alt="profile"
              width={32}
              height={32}
            />
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
