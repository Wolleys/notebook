import { FC } from "react";
import styles from "./parent.module.css";
import Featured from "@/components/featured";
import featuredPosts from "../../mockup/featuredPosts";
import { ParentContainerProps } from "./ParentContainerProps";

/**
 * Component which shows the parent container.
 * @returns The parent container.
 */
const ParentContainer: FC<ParentContainerProps> = ({
  children,
  showFeatured,
}) => {
  return (
    <div className={styles.container}>
      {showFeatured && <Featured featuredPosts={featuredPosts} />}
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default ParentContainer;
