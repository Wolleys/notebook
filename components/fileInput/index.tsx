import { FC, ChangeEvent } from "react";
import { file } from "@/inputs/file";
import Input from "@/components/input";
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
      <Input
        input={file}
        customClass={styles.input}
        onChange={handleImageChange}
      />
    </>
  );
};

export default FileInput;
