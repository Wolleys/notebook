import { FC } from "react";
import Post from "../post";
import FeedsTab from "../feedsTab";
import styles from "./postslist.module.css";

const PostsList: FC = () => {
  const status = true;

  return (
    <div className={styles.container}>
      {!status ? (
        <>
          <h2 className={styles.title}>Recent Posts</h2>
          <div className={styles.posts}>
            <Post />
          </div>
        </>
      ) : (
        <FeedsTab />
      )}
    </div>
  );
};

export default PostsList;
