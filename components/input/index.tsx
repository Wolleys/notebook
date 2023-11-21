import { FC, InputHTMLAttributes, ChangeEvent } from "react";
import styles from "./input.module.css";
import { InputProps } from "@/interfaces";

interface InputInterface extends InputHTMLAttributes<HTMLInputElement> {
  input: InputProps;
  customClass?: string; // Allow custom class name from styles
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputInterface> = ({ input, onChange, customClass }) => {
  const { type, name, placeholder } = input;
  const inputClassName = customClass ? customClass : styles.input;

  return (
    <input
      type={type}
      name={name}
      autoCorrect="off"
      autoComplete="off"
      onChange={onChange}
      className={inputClassName}
      placeholder={placeholder}
    />
  );
};

export default Input;
