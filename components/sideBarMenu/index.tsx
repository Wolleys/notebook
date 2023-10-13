import { FC } from "react";
import MostPopular from "../mostPopular";
import TopCategories from "../topCategories";
import styles from "./sidebarmenu.module.css";
import SideBarFooter from "../footer/sideBar";

const SideBarMenu: FC = () => {
  return (
    <aside className={styles.container}>
      <MostPopular />
      <TopCategories />
      <div className={styles.sticky}>
        <div className={styles.content}>
          <h3>Sticky Element</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quae
            molestias consectetur fuga, ut accusamus tenetur totam laborum
            minima ad, numquam aperiam voluptatem molestiae veritatis ipsum
            fugit porro repellendus odio?
          </p>
        </div>
        <SideBarFooter />
      </div>
    </aside>
  );
};

export default SideBarMenu;
