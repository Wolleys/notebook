import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import TextArea from "../textArea";
import useToggle from "@/hooks/useToggle";
import styles from "./commentcard.module.css";
import userPic from "../../public/profile-pic.png";

interface Comment {
  id: number;
  username: string;
  date: string;
  content: string;
  likes: number;
  comments: number;
}

interface CommentCardProps {
  comment: Comment;
}

const CommentCard: FC<CommentCardProps> = ({ comment }) => {
  const { username, date, content, likes, comments } = comment;
  const { value: isReplying, toggle: toggleReply } = useToggle(false);

  const handleReplyClick = () => toggleReply();

  const handlePostReply = (text: string) => {
    // Todo: Handle the logic for posting the reply (e.g., send data to the server)
    console.log(`Replying with text: ${text}`);
    toggleReply();
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userDetails}>
        <div className={styles.userAvatar}>
          <Image width={46} height={46} alt="user" src={userPic} />
        </div>
        <div className={styles.userInfo}>
          <span className={styles.username}>
            <Link href={`/@${username}`}>{username}</Link>
          </span>
          <span className={styles.date}>{date}</span>
        </div>
      </div>
      <p className={styles.desc}>{content}</p>
      <div className={styles.dataContainer}>
        <div className={styles.commentData}>
          <span>
            <i className={`fa-regular fa-heart fa-fw ${styles["icons"]}`}></i>
            <span className={styles.commentNumbers}>{likes}</span>
          </span>
          <span>
            <i
              className={`fa-regular fa-comment-dots fa-fw ${styles["icons"]}`}
            ></i>
            <span className={styles.commentNumbers}>{comments}</span>
          </span>
        </div>
        <>
          <span className={styles.reply} onClick={handleReplyClick}>
            Reply
          </span>
        </>
      </div>
      {isReplying && (
        <div className={styles.replyTextArea}>
          <TextArea
            isReply={true}
            replyingToUser={username}
            onPost={handlePostReply}
          />
        </div>
      )}
    </div>
  );
};

export default CommentCard;
