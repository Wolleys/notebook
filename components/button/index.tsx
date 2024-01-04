import { FC } from "react";
import styles from "./button.module.css";
import { ButtonProps } from "./ButtonProps";

const Button: FC<ButtonProps> = ({ children, variant, onClick }) => {
  const btnStyle =
    variant === "social"
      ? styles.socialButton
      : variant === "publish"
      ? styles.publishButton
      : variant === "auth"
      ? styles.authButton
      : "";

  return (
    <button className={`${styles.button} ${btnStyle}`} onClick={onClick}>
      {variant === "social" ? (
        <span className={`${styles.span}`}>{children}</span>
      ) : variant === "publish" ? (
        children
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
