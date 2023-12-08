import { FC } from "react";
import styles from "./input.module.css";
import { InputProps } from "./InputProps";

const Input: FC<InputProps> = ({ input, onChange, customClass }) => {
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
