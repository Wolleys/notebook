import { FC, InputHTMLAttributes } from "react";
import styles from "./input.module.css";
import { InputProps } from "@/interfaces";

interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  input: InputProps;
}

const Input: FC<InputInterface> = ({ input }) => {
  const { type, name, placeholder } = input;
  return (
    <input
      type={type}
      name={name}
      autoCorrect="off"
      autoComplete="off"
      className={styles.input}
      placeholder={placeholder}
    />
  );
};

export default Input;
