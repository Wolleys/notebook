import { FC, ReactNode } from "react";
import ThemeSwitch from "../themeSwitch";
import styles from "./sidebarmenu.module.css";
import SideBarFooter from "../footer/sideBar";

interface SideBarMenuProps {
  children: ReactNode;
  sidebarSections?: ReactNode[];
}

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
