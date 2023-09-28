import { FC } from "react";
import styles from "./page.module.css";
import ThemeSwitch from "@/components/themeSwitch";

const Home: FC = () => {
  return (
    <main className={styles.main}>
      <h1>Notebook</h1>
      <ThemeSwitch />
    </main>
  );
};

export default Home;
