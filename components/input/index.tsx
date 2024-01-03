import { FC } from "react";
import styles from "./input.module.css";
import { InputProps } from "./InputProps";

const Input: FC<InputProps> = ({ input, onChange, customClass }) => {
  const { type, name, id, value, accept, placeholder } = input;
  const inputClassName = customClass ? customClass : styles.input;

  return (
    <input
      id={id}
      type={type}
      name={name}
      value={value}
      accept={accept}
      autoCorrect="off"
      autoComplete="off"
      onChange={onChange}
      placeholder={placeholder}
      className={inputClassName}
    />
  );
};

export default Input;
