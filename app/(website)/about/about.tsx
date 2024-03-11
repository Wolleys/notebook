import { FC } from "react";
import styles from "./about.module.css";

/**
 * Component which shows the about page.
 * @returns The about page component.
 */
const About: FC = () => {
  return (
    <div className={styles.container}>
      <h3>About Page</h3>
    </div>
  );
};

export default About;
