import Link from "next/link";
import styles from "./authlinks.module.css";

const AuthLinks = () => {
  const links = [
    { href: "/auth/login", text: "Sign in", className: styles.link },
    { href: "/auth/register", text: "Sign up", className: styles.link },
  ];

  return (
    <>
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} className={link.className}>
            {link.text}
          </Link>
        </li>
      ))}
    </>
  );
};

export default AuthLinks;
