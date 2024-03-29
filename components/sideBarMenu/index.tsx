import { FC } from "react";
import ThemeSwitch from "../themeSwitch";
import styles from "./sidebarmenu.module.css";
import SideBarFooter from "../footer/sideBarFooter";
import { SideBarMenuProps } from "./SideBarMenuProps";

const SideBarMenu: FC<SideBarMenuProps> = ({ children, sidebarSections }) => {
  return (
    <aside className={styles.container}>
      {sidebarSections &&
        sidebarSections.map((component, index) => (
          <section key={index}>{component}</section>
        ))}
      <div className={styles.sticky}>
        <div className={styles.content}>
          {children}
          <div className={styles.themeSwitcher}>
            <ThemeSwitch />
          </div>
        </div>
        <SideBarFooter />
      </div>
    </aside>
  );
};

export default SideBarMenu;
