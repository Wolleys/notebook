import { FC } from "react";
import Link from "next/link";
import TextArea from "../textArea";
import styles from "./comments.module.css";

const Comments: FC = () => {
  const status = true;

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      {status ? (
        <TextArea />
      ) : (
        <Link href="/auth/login" className="seeMore">
          Login to write a comment
        </Link>
      )}
    </div>
  );
};

export default Comments;
