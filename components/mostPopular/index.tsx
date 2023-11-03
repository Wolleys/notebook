import { FC } from "react";
import Link from "next/link";
import { chartIcon, eyeIcon } from "@/icons";
import TitleWithIcon from "../titleWithIcon";
import styles from "./mostpopular.module.css";
import { MostPopularProps } from "@/interfaces";
import { hyphenateString } from "@/utils/hyphenateString";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";

const MostPopular: FC<MostPopularProps> = ({ mostPopular }) => {
  return (
    <div className={styles.container}>
      <TitleWithIcon
        icon={chartIcon}
        title="Trending on Notebook"
        iconClassName={styles.titleIcon}
      />

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
