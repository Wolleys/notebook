import { FC } from "react";
import Link from "next/link";
import { plusIcon } from "@/icons/plusIcon";
import TitleWithIcon from "../titleWithIcon";
import styles from "./topcategories.module.css";
import { TopCategoriesProps } from "./TopCategoriesProps";

const TopCategories: FC<TopCategoriesProps> = ({ topCategories }) => {
  return (
    <div className={styles.container}>
      <TitleWithIcon
        icon={plusIcon}
        title="Top Categories"
        iconClassName={styles.titleIcon}
      />

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
