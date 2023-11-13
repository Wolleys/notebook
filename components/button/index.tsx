import { FC, ReactNode, ButtonHTMLAttributes, MouseEvent } from "react";
import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "auth" | "social";
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

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
