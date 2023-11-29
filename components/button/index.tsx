import { FC } from "react";
import styles from "./button.module.css";
import { ButtonProps } from "./ButtonProps";

const Button: FC<ButtonProps> = ({ children, variant, onClick }) => {
  const btnStyle = variant === "auth" ? styles.authButton : styles.socialButton;

  return (
    <button className={`${styles.button} ${btnStyle}`} onClick={onClick}>
      {variant === "social" ? (
        <span className={styles.span}>{children}</span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
