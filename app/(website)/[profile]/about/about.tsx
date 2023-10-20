import { FC } from "react";
import styles from "./about.module.css";
import SideBarMenu from "@/components/sideBarMenu";
import ParentContainer from "@/containers/parentContainer";

const About: FC = () => {
  return (
    <ParentContainer>
      <div className={styles.container}>
        <h3>About Page</h3>
      </div>
      <SideBarMenu />
    </ParentContainer>
  );
};

export default About;
