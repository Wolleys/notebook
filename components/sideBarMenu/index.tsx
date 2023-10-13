import { FC } from "react";
import MostPopular from "../mostPopular";
import TopCategories from "../topCategories";
import styles from "./sidebarmenu.module.css";
import SideBarFooter from "../footer/sideBar";
import FeaturedWriters from "../featuredWriters";

const SideBarMenu: FC = () => {
  return (
    <aside className={styles.container}>
      <MostPopular />
      <TopCategories />
      <div className={styles.sticky}>
        <div className={styles.content}>
          <FeaturedWriters />
        </div>
        <SideBarFooter />
      </div>
    </aside>
  );
};

export default SideBarMenu;
