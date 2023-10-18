import { FC, ReactNode } from "react";
import Link from "next/link";
import styles from "./feedstab.module.css";

interface FeedsTabProps {
  activeTab: string;
  children: ReactNode;
}

const navItems = [
  { path: "/feed", label: "For you" },
  { path: "/feed/following", label: "Following" },
  { path: "/explore", label: "Explore" },
];

const FeedsTab: FC<FeedsTabProps> = ({ activeTab, children }) => {
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

export default FeedsTab;
