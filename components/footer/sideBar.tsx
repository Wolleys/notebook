import { FC } from "react";
import Link from "next/link";
import styles from "./footer.module.css";

const SideBarFooter: FC = () => {
  const sideBarFooterlinks = [
    { path: "/about", label: "About" },
    { path: "/help", label: "Help" },
    { path: "/contact", label: "Contact" },
    { path: "/terms", label: "Terms" },
    { path: "/privacy", label: "Privacy" },
    { path: "/status", label: "Status" },
  ];

  return (
    <div className={styles.sideBarFooter}>
      <div className={styles.sideBarFooterLinks}>
        <ul>
          {sideBarFooterlinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path}>{link.label}</Link>
            </li>
          ))}
          {/* <li>
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
          </li> */}
        </ul>
      </div>
      <p>© Notebook, Inc. All rights reserved.</p>
    </div>
  );
};

export default SideBarFooter;
