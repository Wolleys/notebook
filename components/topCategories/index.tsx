import { FC } from "react";
import Link from "next/link";
import styles from "./topcategories.module.css";
import topCategories from "../../mockup/topCategories";

const TopCategories: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.titleIcon}>
          <i className="fa-solid fa-plus fa-fw"></i>
        </span>
        Top Categories
      </h2>

      <div className={styles.list}>
        <ul>
          {topCategories.slice(0, 10).map((item) => (
            <li key={item.id}>
              <Link href="/">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Link href="/" className="seeMore">
        See more categories
      </Link>
    </div>
  );
};

export default TopCategories;
