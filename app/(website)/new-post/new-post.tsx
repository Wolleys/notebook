"use client";

import { FC, useState, ChangeEvent } from "react";
import { imageIcon } from "@/icons";
import { postTitle } from "@/inputs";
import Input from "@/components/input";
import Editor from "@/components/editor";
import Select from "@/components/select";
import styles from "./newpost.module.css";
import ImagePreview from "@/components/imagePreview";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";

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

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Input input={postTitle} customClass={styles.input} />
        <div className={styles.split}>
          <Select options={categories} />
          <label htmlFor="postImage">
            <span className={styles.spanIcon}>
              <FontAwesomeIcon icon={imageIcon} /> Post Image
            </span>
          </label>
          <input
            type="file"
            id="postImage"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
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
