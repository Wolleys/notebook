"use client";

import { FC, useState } from "react";
import Input from "@/components/input";
import Editor from "@/components/editor";
import Select from "@/components/select";
import styles from "./newpost.module.css";
import { imageIcon } from "@/icons/imageIcon";
import FileInput from "@/components/fileInput";
import { postTitle } from "@/inputs/postTitle";
import ImagePreview from "@/components/imagePreview";

const NewPost: FC = () => {
  const [value, setValue] = useState("");
  const [image, setImage] = useState<string>("");
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
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const imagePreviewProps = {
    width: 720,
    height: 200,
    alt: "Preview",
    src: image,
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Input input={postTitle} customClass={styles.input} />
        <div className={styles.split}>
          <Select options={categories} />
          <FileInput
            icon={imageIcon}
            label="Post Image"
            onChange={handleImageChange}
          />
        </div>
        {image && (
          <label htmlFor="imageLabel">
            <ImagePreview imagePreview={imagePreviewProps} />
          </label>
        )}
      </div>
      <Editor value={value} onChange={setValue} />
    </div>
  );
};

export default NewPost;
