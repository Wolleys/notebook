import { FC } from "react";
import Link from "next/link";
import { chartIcon, eyeIcon } from "@/icons";
import styles from "./mostpopular.module.css";
import mostPopular from "../../mockup/mostPopular";
import { hyphenateString } from "@/utils/hyphenateString";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";

const MostPopular: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <FontAwesomeIcon icon={chartIcon} customClass={styles.titleIcon} />
        Trending on Notebook
      </h2>

      {mostPopular.slice(0, 5).map((item) => (
        <div className={styles.textContainer} key={item.id}>
          <h5 className={styles.postTitle}>
            <Link href={`/@${item.username}/${hyphenateString(item.slug)}`}>
              {item.title}
            </Link>
          </h5>
          <div className={styles.details}>
            <span className={styles.username}>
              <Link href={`/@${item.username}`}>{item.author}</Link>
            </span>
            <span className={styles.detailIcon}>
              <FontAwesomeIcon icon={eyeIcon} customClass={styles.detailIcon} />
              {item.views}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostPopular;
