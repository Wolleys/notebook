import { FC } from "react";
import styles from "./register.module.css";

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
        </div>
      </div>
    </section>
  );
};

export default Register;
