import { FC, InputHTMLAttributes } from "react";
import styles from "./authinput.module.css";
import { InputProps } from "@/interfaces";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputProps: InputProps;
}

const AuthInput: FC<AuthInputProps> = ({ inputProps }) => {
  const { type, name, placeholder } = inputProps;
  return (
    <input
      type={type}
      name={name}
      autoCorrect="off"
      autoComplete="off"
      className={styles.input}
      placeholder={placeholder || "name@example.com"}
    />
  );
};

export default AuthInput;
