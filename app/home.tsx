import { FC } from "react";
import styles from "./page.module.css";
import Featured from "@/components/featured";
import PostsList from "@/components/postsList";
import SideBarMenu from "@/components/sideBarMenu";

const Home: FC = () => {
  const status = true;

  return (
    <div className={styles.container}>
      {!status ? <Featured /> : null}
      <main className={styles.main}>
        <PostsList />
        <SideBarMenu />
      </main>
    </div>
  );
};

export default Home;
