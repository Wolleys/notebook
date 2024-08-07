import { FC } from "react";
import Link from "next/link";
import styles from "./auth.module.css";
import SignUpOptions from "@/components/signupOptions";
import { AuthContainerProps } from "./AuthContainerProps";

/**
 * Component which shows the auth container.
 * @returns The auth container.
 */
const AuthContainer: FC<AuthContainerProps> = ({ props }) => {
  const { title, desc, fields, bottomText, bottomLink, nameFields, onSubmit } =
    props;

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
        <form onSubmit={onSubmit} className={styles.formContainer}>
          <div className={styles.nameFields}>{nameFields}</div>
          {fields}
        </form>
        <div className={styles.divider}>
          <div className={styles.line}></div>
          <span className={styles.text}>Or continue with</span>
          <div className={styles.line}></div>
        </div>
        <SignUpOptions />
        <div className={styles.divider}>
          <span className={styles.text}>
            {bottomText}
            <Link className={styles.link} href={bottomLink.href}>
              &nbsp;{bottomLink.text}
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default AuthContainer;
