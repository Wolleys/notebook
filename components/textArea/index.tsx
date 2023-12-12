"use client";

import { FC, useState, ChangeEvent } from "react";
import styles from "./textarea.module.css";
import { TextAreaProps } from "./TextAreaProps";

const TextArea: FC<TextAreaProps> = ({ isReply, replyingToUser, onPost }) => {
  const [text, setText] = useState<string>("");
  const [postButton, setPostButton] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";

    setPostButton(!!e.target.value.trim());
  };

  const postComment = () => {
    if (text && postButton) {
      onPost(text);
      setText("");
      setPostButton(false);
    }
  };

  return (
    <div className={`${styles.container} ${isReply ? styles.isReplying : ""}`}>
      <textarea
        value={text}
        onChange={handleChange}
        className={styles.textarea}
        placeholder={
          isReply ? `Replying to ${replyingToUser}` : "Write a comment..."
        }
      />
      {postButton && (
        <div className={styles.post}>
          <button className={styles.button} onClick={postComment}>
            {isReply ? "Reply" : "Post"}
          </button>
        </div>
      )}
    </div>
  );
};

export default TextArea;
