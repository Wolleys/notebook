import { FC, ChangeEvent } from "react";
import styles from "./fileinput.module.css";
import { FileInputProps } from "./FileInputProps";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";

const FileInput: FC<FileInputProps> = ({ label, icon, onChange }) => {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      onChange(file);
    }
  };

  return (
    <>
      <label htmlFor="imageLabel">
        <span className={styles.spanIcon}>
          <FontAwesomeIcon icon={icon} /> {label}
        </span>
      </label>
      <input
        type="file"
        id="imageLabel"
        accept="image/*"
        className={styles.input}
        onChange={handleImageChange}
      />
    </>
  );
};

export default FileInput;
