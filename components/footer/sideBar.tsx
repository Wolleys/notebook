import { FC } from "react";
import Link from "next/link";
import styles from "./footer.module.css";

const SideBarFooter: FC = () => {
  return (
    <div className={styles.sideBarFooter}>
      <div className={styles.sideBarFooterLinks}>
        <ul>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/help">Help</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/terms">Terms</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy</Link>
          </li>
          <li>
            <Link href="/status">Status</Link>
          </li>
        </ul>
      </div>
      <p>© Notebook, Inc. All rights reserved.</p>
    </div>
  );
};

export default SideBarFooter;
