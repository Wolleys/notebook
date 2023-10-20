import { FC } from "react";
import styles from "./lists.module.css";
import SideBarMenu from "@/components/sideBarMenu";
import ParentContainer from "@/containers/parentContainer";

const Lists: FC = () => {
  return (
    <ParentContainer>
      <div className={styles.container}>
        <h3>Lists Page</h3>
      </div>
      <SideBarMenu />
    </ParentContainer>
  );
};

export default Lists;
