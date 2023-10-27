import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./comment.module.css";
import userPic from "../../public/profile-pic.png";

const Comment: FC = () => {
  return (
    <div className={styles.comment}>
      <div className={styles.userDetails}>
        <div className={styles.userAvatar}>
          <Image width={46} height={46} alt="user" src={userPic} />
        </div>
        <div className={styles.userInfo}>
          <span className={styles.username}>
            <Link href={`/@jane`}>Jane Doe</Link>
          </span>
          <span className={styles.date}>Oct 27, 2023</span>
        </div>
      </div>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ipsa
        cumque enim aut voluptates, facilis eum, officiis adipisci quo magnam
        magni dolor tempore porro officia ducimus beatae. Veritatis, nulla amet?
      </p>
      <div className={styles.dataContainer}>
        <div className={styles.commentData}>
          <span>
            <i className={`fa-regular fa-heart fa-fw ${styles["icons"]}`}></i>
            <span className={styles.commentNumbers}>30</span>
          </span>
          <span>
            <i
              className={`fa-regular fa-comment-dots fa-fw ${styles["icons"]}`}
            ></i>
            <span className={styles.commentNumbers}>5</span>
          </span>
        </div>
        <>
          <span className={styles.reply}>Reply</span>
        </>
      </div>
    </div>
  );
};

export default Comment;
