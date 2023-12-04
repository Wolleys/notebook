import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import TextArea from "../textArea";
import useToggle from "@/hooks/useToggle";
import styles from "./commentcard.module.css";
import { heartIcon, commentIcon } from "@/icons";
import { CommentProps } from "./CommentCardProps";
import userPic from "../../public/profile-pic.png";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";

const CommentCard: FC<CommentProps> = ({ comment }) => {
  const { username, date, content, likes, replies } = comment;
  const { value: isReplying, toggle: toggleReply } = useToggle(false);
  const { value: showReplies, toggle: toggleReplies } = useToggle(false);

  const handleIsReplying = () => toggleReply();
  const handleShowReplies = () => toggleReplies();

  const handleReply = (text: string) => {
    // Todo: Handle the logic for posting the reply (e.g., send data to the server)
    console.log(`Replying with text: ${text}`);
    toggleReply();
  };

  const hasReplies = replies && replies.length > 0;

  return (
    <>
      <div
        className={`${styles.comment} ${hasReplies ? styles.hasReplies : ""}`}
      >
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
              <FontAwesomeIcon icon={heartIcon} />
              <span className={styles.commentNumbers}>{likes}</span>
            </span>
            <span onClick={handleShowReplies}>
              <FontAwesomeIcon icon={commentIcon} />
              <span className={styles.commentNumbers}>
                {replies?.length || ""}
              </span>
            </span>
          </div>
          <>
            <span className={styles.reply} onClick={handleIsReplying}>
              {isReplying ? "Cancle" : "Reply"}
            </span>
          </>
        </div>
        {isReplying && (
          <div className={styles.replyTextArea}>
            <TextArea
              isReply={true}
              onPost={handleReply}
              replyingToUser={username}
            />
          </div>
        )}
        {showReplies && replies && replies.length > 0 && (
          <div className={styles.repliesContainer}>
            {replies.map((reply) => (
              <CommentCard key={reply.id} comment={reply} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CommentCard;
