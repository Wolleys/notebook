import { FC } from "react";
import Post from "../post";
import styles from "./postslist.module.css";

const PostsList: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Recent Posts</h2>
      <div className={styles.posts}>
        <Post />
      </div>
    </div>
  );
};

export default PostsList;
