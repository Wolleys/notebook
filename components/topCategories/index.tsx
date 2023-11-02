import { FC } from "react";
import Link from "next/link";
import { plusIcon } from "@/icons";
import styles from "./topcategories.module.css";
import topCategories from "../../mockup/topCategories";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";

const TopCategories: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <FontAwesomeIcon icon={plusIcon} customClass={styles.titleIcon} />
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
