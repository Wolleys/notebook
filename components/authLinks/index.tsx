import Link from "next/link";
import styles from "./authlinks.module.css";

const AuthLinks = () => {
  return (
    <>
      <Link href="/auth/login" className={styles.link}>
        Sign in
      </Link>
      <Link href="/auth/register" className={styles.link}>
        Sign up
      </Link>
    </>
  );
};

export default AuthLinks;
