import { FC } from "react";
import styles from "./login.module.css";

const Login: FC = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}>
          <h1>Sign In to Notebook</h1>
          <p>Enter your email below to sign in</p>
        </div>
        <div className={styles.formContainer}>
          <input
            type="email"
            name="email"
            autoCorrect="off"
            autoComplete="off"
            className={styles.input}
            placeholder="name@example.com"
          />
          <button className={styles.button}> Sign In with Email</button>
        </div>
      </div>
    </section>
  );
};

export default Login;
