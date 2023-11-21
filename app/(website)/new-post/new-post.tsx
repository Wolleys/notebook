"use client";

import { FC, useState } from "react";
import { postTitle } from "@/inputs";
import Input from "@/components/input";
import Editor from "@/components/editor";
import Select from "@/components/select";
import styles from "./newpost.module.css";

const NewPost: FC = () => {
  const [value, setValue] = useState("");
  const categories = [
    "Devotionals",
    "Bible Study",
    "Inspiration",
    "Prayer",
    "Health",
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Input input={postTitle} customClass={styles.input} />
        <div className={styles.split}>
          <Select options={categories} />
          <input type="file" />
        </div>
      </div>
      <Editor value={value} onChange={setValue} />
    </div>
  );
};

export default NewPost;
