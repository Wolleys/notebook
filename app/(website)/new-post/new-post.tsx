"use client";

import { FC, useState } from "react";
import { postTitle } from "@/inputs";
import Input from "@/components/input";
import Editor from "@/components/editor";
import Select from "@/components/select";
import styles from "./newpost.module.css";
import FileInput from "@/components/fileInput";
import ImagePreview from "@/components/imagePreview";

const NewPost: FC = () => {
  const [value, setValue] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const categories = [
    "Devotionals",
    "Bible Study",
    "Inspiration",
    "Prayer",
    "Health",
  ];

  const handleImageChange = (file: File) => {
    const reader = new FileReader();

    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Input input={postTitle} customClass={styles.input} />
        <div className={styles.split}>
          <Select options={categories} />
          <FileInput onChange={handleImageChange} />
        </div>
        {imagePreview && (
          <label htmlFor="postImage">
            <ImagePreview
              width={720}
              height={200}
              alt="Preview"
              src={imagePreview}
            />
          </label>
        )}
      </div>
      <Editor value={value} onChange={setValue} />
    </div>
  );
};

export default NewPost;
