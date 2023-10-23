import { FC } from "react";
import Link from "next/link";
import styles from "./mostpopular.module.css";
import mostPopular from "../../mockup/mostPopular";

const MostPopular: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.titleIcon}>
          <i className="fa-solid fa-chart-line fa-fw"></i>
        </span>
        Trending on Notebook
      </h2>

      {mostPopular.slice(0, 5).map((item) => (
        <div className={styles.textContainer} key={item.id}>
          <h5 className={styles.postTitle}>
            <Link href="/">{item.title}</Link>
          </h5>
          <div className={styles.details}>
            <span className={styles.username}>
              <Link href={`/@${item.username}`}>{item.author}</Link>
            </span>
            <span className={styles.detailIcon}>
              <i className="fa-regular fa-eye fa-fw"></i> {item.views}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostPopular;
