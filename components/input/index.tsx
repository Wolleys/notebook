import { FC, InputHTMLAttributes, ChangeEvent } from "react";
import styles from "./input.module.css";
import { InputProps } from "@/interfaces";

interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  input: InputProps;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputInterface> = ({ input, onChange }) => {
  const { type, name, placeholder } = input;
  return (
    <input
      type={type}
      name={name}
      autoCorrect="off"
      autoComplete="off"
      onChange={onChange}
      className={styles.input}
      placeholder={placeholder}
    />
  );
};

export default Input;
