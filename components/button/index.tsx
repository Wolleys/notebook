import { FC, ReactNode, ButtonHTMLAttributes } from "react";
import styles from "./button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "auth" | "social";
}

const Button: FC<ButtonProps> = ({ children, variant, ...rest }) => {
  const btnStyle = variant === "auth" ? styles.authButton : styles.socialButton;

  return (
    <button className={`${styles.button} ${btnStyle}`} {...rest}>
      {variant === "social" ? (
        <span className={styles.span}>{children}</span>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
