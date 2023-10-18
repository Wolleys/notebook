import { FC } from "react";
import styles from "./feed.module.css";
import SideBarMenu from "@/components/sideBarMenu";
import FeedsTab from "../../../components/feedsTab";

const Feed: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <FeedsTab />
        <SideBarMenu />
      </div>
    </div>
  );
};

export default Feed;
