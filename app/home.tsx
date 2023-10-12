import { FC } from "react";
import styles from "./page.module.css";
import Featured from "@/components/featured";
import PostsList from "@/components/postsList";
import ThemeSwitch from "@/components/themeSwitch";
import SideBarMenu from "@/components/sideBarMenu";

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Featured />
      <main className={styles.main}>
        <PostsList />
        <SideBarMenu />
      </main>
      <ThemeSwitch />
    </div>
  );
};

export default Home;
