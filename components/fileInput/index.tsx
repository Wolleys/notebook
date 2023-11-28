import { FC, ChangeEvent } from "react";
import { imageIcon } from "@/icons";
import styles from "./fileinput.module.css";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";

interface FileInputProps {
  onChange: (file: File) => void;
}

const FileInput: FC<FileInputProps> = ({ onChange }) => {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      onChange(file);
    }
  };

  return (
    <>
      <label htmlFor="postImage">
        <span className={styles.spanIcon}>
          <FontAwesomeIcon icon={imageIcon} /> Post Image
        </span>
      </label>
      <input
        type="file"
        id="postImage"
        accept="image/*"
        className={styles.input}
        onChange={handleImageChange}
      />
    </>
  );
};

export default FileInput;
