import { FC } from "react";
import styles from "./sidebarmenu.module.css";
import SideBarFooter from "../footer/sideBar";

const SideBarMenu: FC = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>Trending on Notebook</h2>
      </div>
      <SideBarFooter />
    </aside>
  );
};

export default SideBarMenu;
