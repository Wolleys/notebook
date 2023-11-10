import { FC } from "react";
import Link from "next/link";
import Input from "@/components/input";
import Button from "@/components/button";
import styles from "./register.module.css";
import { email, firstName, lastName } from "@/inputs";
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
            <Input input={firstName} />
            <Input input={lastName} />
          </div>
          <Input input={email} />
          <Button variant="auth">Sign Up with Email</Button>
        </div>
        <div className={styles.divider}>
          <div className={styles.line}></div>
          <span className={styles.text}>Or continue with</span>
          <div className={styles.line}></div>
        </div>
        <div className={styles.socialContainer}>
          <Button variant="social">
            <FontAwesomeIcon icon={googleIcon} /> Google
          </Button>
          <Button variant="social">
            <FontAwesomeIcon icon={facebookIcon} /> Facebook
          </Button>
          <Button variant="social">
            <FontAwesomeIcon icon={xIcon} /> Twitter
          </Button>
          <Button variant="social">
            <FontAwesomeIcon icon={appleIcon} /> Apple
          </Button>
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
