import { FC } from "react";
import styles from "./authorcard.module.css";

const AuthorCard: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.postImage}>AuthorCard</div>
    </div>
  );
};

export default AuthorCard;
