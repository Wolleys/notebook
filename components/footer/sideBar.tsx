import { FC } from "react";
import Link from "next/link";
import styles from "./footer.module.css";
import { sideBarFooterlinks } from "./sideBarFooterlinks";

const SideBarFooter: FC = () => {
  return (
    <div className={styles.sideBarFooter}>
      <div className={styles.sideBarFooterLinks}>
        <ul>
          {sideBarFooterlinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <p>© Notebook, Inc. All rights reserved.</p>
    </div>
  );
};

export default SideBarFooter;
