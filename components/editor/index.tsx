import { FC } from "react";
import ReactQuill from "react-quill";
import styles from "./editor.module.css";
import "react-quill/dist/quill.snow.css";

interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

const Editor: FC<EditorProps> = ({ value, onChange }) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <div className={styles.container}>
      <ReactQuill
        value={value}
        theme={"snow"}
        modules={modules}
        onChange={onChange}
        className={styles.editor}
      />
    </div>
  );
};

export default Editor;
