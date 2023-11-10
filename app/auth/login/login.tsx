import { FC } from "react";
import Link from "next/link";
import { email } from "@/inputs";
import Input from "@/components/input";
import styles from "./login.module.css";
import Button from "@/components/button";
import SignUpOptions from "@/components/signupOptions";

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
        <SignUpOptions />
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
