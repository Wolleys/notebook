"use client";

import { FC, useState, ChangeEvent } from "react";
import styles from "./textarea.module.css";

const TextArea: FC = () => {
  const [text, setText] = useState<string>("");
  const [postButton, setPostButton] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";

    setPostButton(!!e.target.value.trim());
  };

  const postComment = () => {
    console.log("Post button clicked!");
  };

  return (
    <div className={styles.container}>
      <textarea
        value={text}
        onChange={handleChange}
        className={styles.textarea}
        placeholder="Write a comment..."
      />
      {postButton && (
        <div className={styles.post}>
          <button className={styles.button} onClick={postComment}>
            Post
          </button>
        </div>
      )}
    </div>
  );
};

export default TextArea;
