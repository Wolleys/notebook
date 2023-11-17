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
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ script: "sub" }, { script: "super" }],
      [
        { list: "bullet" },
        { list: "ordered" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      [{ align: [] }],
      [{ header: [1, 2, 3, false] }],
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
        placeholder="Write your notes..."
      />
    </div>
  );
};

export default Editor;
