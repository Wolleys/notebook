import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthLinks from "../authLinks";
// import SearchBar from "../searchBar";
import styles from "./navbar.module.css";


const NavBar: FC = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">Notebook</Link>
      </div>
      <div className={styles.searchBar}>{/* <SearchBar /> */} SearchBar</div>
      <div className={styles.links}>
        <AuthLinks />
        <Link href="/new-post">
          <i className="fa-regular fa-pen-to-square fa-lg fa-fw"></i> Write
        </Link>
        <Link href="/me/notifications">
          <i className="fa-regular fa-bell fa-lg fa-fw"></i>
        </Link>
        <Image src="/profile-pic.png" alt="profile" width={32} height={32} />
      </div>
    </nav>
  );
};

export default NavBar;
