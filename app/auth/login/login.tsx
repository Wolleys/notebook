import { FC } from "react";
import Link from "next/link";
import { email } from "@/inputs";
import Input from "@/components/input";
import styles from "./login.module.css";
import Button from "@/components/button";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";
import { googleIcon, facebookIcon, xIcon, appleIcon } from "@/icons";

const Login: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Sign In to Notebook</h1>
          <p>Enter your email below to sign in</p>
        </div>
        <div className={styles.formContainer}>
          <Input input={email} />
          <Button variant="auth">Sign In with Email</Button>
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
            Not been here before? Just
            <Link className={styles.link} href="/auth/register">
              &nbsp;Sign Up
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Login;
