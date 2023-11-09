import { FC } from "react";
import Link from "next/link";
import styles from "./register.module.css";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";
import { googleIcon, facebookIcon, xIcon, appleIcon } from "@/icons";

const Register: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Sign Up to Notebook</h1>
          <p>Enter your email below to sign up</p>
        </div>
        <div className={styles.formContainer}>
          <div className={styles.nameFields}>
            <input
              type="text"
              name="fname"
              autoCorrect="off"
              autoComplete="off"
              className={styles.input}
              placeholder="John"
            />
            <input
              type="text"
              name="lname"
              autoCorrect="off"
              autoComplete="off"
              className={styles.input}
              placeholder="Doe"
            />
          </div>
          <input
            type="email"
            name="email"
            autoCorrect="off"
            autoComplete="off"
            className={styles.input}
            placeholder="name@example.com"
          />
          <button className={styles.button}>Sign Up with Email</button>
        </div>
        <div className={styles.divider}>
          <div className={styles.line}></div>
          <span className={styles.text}>Or continue with</span>
          <div className={styles.line}></div>
        </div>
        <div className={styles.socialContainer}>
          <button className={styles.button}>
            <span className={styles.span}>
              <FontAwesomeIcon icon={googleIcon} /> Google
            </span>
          </button>
          <button className={styles.button}>
            <span className={styles.span}>
              <FontAwesomeIcon icon={facebookIcon} /> Facebook
            </span>
          </button>
          <button className={styles.button}>
            <span className={styles.span}>
              <FontAwesomeIcon icon={xIcon} /> Twitter
            </span>
          </button>
          <button className={styles.button}>
            <span className={styles.span}>
              <FontAwesomeIcon icon={appleIcon} /> Apple
            </span>
          </button>
        </div>
        <div className={styles.divider}>
          <span className={styles.text}>
            Already been here before? Just
            <Link className={styles.link} href="/auth/login">
              &nbsp;Sign In
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Register;
