import { FC, ReactNode } from "react";
import styles from "./containers.module.css";
import Featured from "@/components/featured";

interface ParentContainerProps {
  children: ReactNode;
  showFeatured?: boolean;
}

const ParentContainer: FC<ParentContainerProps> = ({
  children,
  showFeatured,
}) => {
  return (
    <div className={styles.container}>
      {showFeatured && <Featured />}
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default ParentContainer;
