"use client";

import { FC } from "react";
import Link from "next/link";
import styles from "./feedstab.module.css";
import { usePathname } from "next/navigation";

const navItems = [
  { path: "/feed", label: "For you" },
  { path: "/feed=following", label: "Following" },
  { path: "/explore", label: "Explore" },
];

const FeedsTab: FC = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                className={`${pathname === item.path ? styles.active : ""}`}
                href={item.path}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.content}>
        <h4>For You content</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quae
          molestias consectetur fuga, ut accusamus tenetur totam laborum minima
          ad, numquam aperiam voluptatem molestiae veritatis ipsum fugit porro
          repellendus odio?
        </p>
        <br />
      </div>
    </div>
  );
};

export default FeedsTab;
