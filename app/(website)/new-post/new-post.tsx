"use client";

import { FC, useState } from "react";
import { postTitle } from "@/inputs";
import Input from "@/components/input";
import Editor from "@/components/editor";
import styles from "./newpost.module.css";

const NewPost: FC = () => {
  const [value, setValue] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Input input={postTitle} customClass={styles.input} />
        <div className={styles.split}>
          <select className={styles.select}>
            <option>Select Cartegory</option>
            <option value="fashion">fashion</option>
            <option value="food">food</option>
            <option value="culture">culture</option>
            <option value="travel">travel</option>
            <option value="coding">coding</option>
          </select>
          <input type="file" />
        </div>
      </div>
      <Editor value={value} onChange={setValue} />
    </div>
  );
};

export default NewPost;
