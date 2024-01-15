import { IAuthLinks } from "./IAuthLinks";
import styles from "./authlinks.module.css";

export const authlinks: IAuthLinks[] = [
  { path: "/auth/login", label: "Sign in", className: styles.link },
  { path: "/auth/register", label: "Sign up", className: styles.link },
];
