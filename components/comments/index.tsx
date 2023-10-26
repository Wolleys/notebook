import { FC } from "react";
import styles from "./comments.module.css";

const Comments: FC = () => {
  const status = true;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
    </div>
  );
};

export default Comments;
