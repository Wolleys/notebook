import { FC } from "react";
import styles from "./page.module.css";
import ThemeSwitch from "@/components/themeSwitch";

const Home: FC = () => {
  return (
    <main className={styles.main}>
      <ThemeSwitch />
    </main>
  );
};

export default Home;
