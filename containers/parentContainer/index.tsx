import { FC, ReactNode } from "react";
import styles from "./parent.module.css";
import Featured from "@/components/featured";
import featuredPosts from "../../mockup/featuredPosts";

interface PCProps {
  children: ReactNode;
  showFeatured?: boolean;
}

const ParentContainer: FC<PCProps> = ({ children, showFeatured }) => {
  return (
    <div className={styles.container}>
      {showFeatured && <Featured featuredPosts={featuredPosts} />}
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default ParentContainer;
