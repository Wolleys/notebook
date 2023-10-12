import { FC } from "react";
import MostPopular from "../mostPopular";
import styles from "./sidebarmenu.module.css";
import SideBarFooter from "../footer/sideBar";

const SideBarMenu: FC = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.content}>
        <MostPopular />
      </div>
      <SideBarFooter />
    </aside>
  );
};

export default SideBarMenu;
