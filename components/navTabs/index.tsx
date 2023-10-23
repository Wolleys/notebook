import { FC, ReactNode } from "react";
import Link from "next/link";
import styles from "./navtabs.module.css";

interface NavItem {
  path: string;
  label: string;
}

interface NavTabsProps {
  activeTab: string;
  navItems: NavItem[];
  children: ReactNode;
}

const NavTabs: FC<NavTabsProps> = ({ activeTab, navItems, children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <ul>
          {navItems.map((item, index) => (
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
