import { FC } from "react";
import Link from "next/link";
import { authlinks } from "./authlinks";

const AuthLinks: FC = () => {
  return (
    <>
      {authlinks.map((link, index) => (
        <li key={index}>
          <Link href={link.path} className={link.className}>
            {link.label}
          </Link>
        </li>
      ))}
    </>
  );
};

export default AuthLinks;
