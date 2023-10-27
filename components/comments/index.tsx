"use client";

import { FC } from "react";
import Link from "next/link";
import TextArea from "../textArea";
import CommentCard from "../commentCard";
import styles from "./comments.module.css";
import commentsData from "../../mockup/commetsData";

const Comments: FC = () => {
  const status = true;

  const handlePostComment = (text: string) => {
    //Todo: Add logic to post a new comment, e.g., send data to the server
    console.log("Posting new comment:", text);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comments</h2>
      {status ? (
        <TextArea isReply={false} onPost={handlePostComment} />
      ) : (
        <Link
          href="/auth/login"
          className="seeMore"
          style={{ margin: "-20px 0 20px", display: "block" }}
        >
          Login to write a comment
        </Link>
      )}
      <div className={styles.comments}>
        {commentsData.map((comment) => (
          <CommentCard key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
