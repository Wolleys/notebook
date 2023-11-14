"use client";

import { FC, useState } from "react";
import Editor from "@/components/editor";
import styles from "./newpost.module.css";

const NewPost: FC = () => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <Editor value={value} onChange={setValue} />
    </div>
  );
};

export default NewPost;
