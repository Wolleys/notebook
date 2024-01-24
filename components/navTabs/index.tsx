import { FC } from "react";
import Link from "next/link";
import styles from "./navtabs.module.css";
import { NavTabsProps } from "./NavTabsProps";

const NavTabs: FC<NavTabsProps> = ({ activeTab, tabs, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <ul>
          {tabs.map((item, index) => (
            <li key={index}>
              <Link
                className={`${activeTab === item.path ? styles.active : ""}`}
                href={item.path}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default NavTabs;
