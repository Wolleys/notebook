"use client";

import { FC } from "react";
import Link from "next/link";
import SearchBar from "../searchBar";
import SearchIcon from "../searchIcon";
import styles from "./header.module.css";
import Button from "@/components/button";
import { penIcon } from "@/icons/penIcon";
import HeaderAvatar from "../headerAvatar";
import { bellIcon } from "@/icons/bellIcon";
import { usePathname } from "next/navigation";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";

const Header: FC = () => {
  const status = true;
  const pathname = usePathname();

  const handlePublish = () => {
    console.log("Note published");
  };

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
                  {pathname === "/new-post" ? (
                    <span className={styles.write}>
                      <Button variant="publish" onClick={handlePublish}>
                        Publish
                      </Button>
                    </span>
                  ) : (
                    <span className={styles.write}>
                      <Link href="/new-post">
                        <FontAwesomeIcon
                          icon={penIcon}
                          customClass={styles.linksIcon}
                        />
                        &nbsp;Write
                      </Link>
                    </span>
                  )}
                </li>
                <li>
                  <Link href="/me/notifications">
                    <FontAwesomeIcon
                      icon={bellIcon}
                      customClass={styles.linksIcon}
                    />
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
