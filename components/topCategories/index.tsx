import { FC } from "react";
import Link from "next/link";
import styles from "./topcategories.module.css";

const categories = [
  { id: 1, name: "Devotionals" },
  { id: 2, name: "Bible Study" },
  { id: 3, name: "Prayer" },
  { id: 4, name: "Leadership" },
  { id: 5, name: "Family" },
  { id: 6, name: "Youth" },
  { id: 7, name: "Health" },
  { id: 8, name: "Justice" },
  { id: 9, name: "Inspiration" },
  { id: 10, name: "Relationships" },
];

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
          {categories.map((item) => (
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
