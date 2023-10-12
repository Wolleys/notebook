import { FC } from "react";
import Link from "next/link";
import styles from "./mostpopular.module.css";

const popular = [
  {
    id: 1,
    category: "Love",
    title: "Marketing Tools for Small Business Consulting Firms",
    author: "Jon Houston",
    views: 150,
  },
  {
    id: 2,
    category: "Faith",
    title: "Love Notes From The Chemo Room",
    author: "John Doe",
    views: 100,
  },
  {
    id: 3,
    category: "Salvation",
    title: "Are you a victim of generational dieting trauma?",
    author: "Jane Doe",
    views: 400,
  },
  {
    id: 4,
    category: "Jesus",
    title: "On Regrets and Growth In Sobriety With Holly Whitaker",
    author: "Nicolina Torres",
    views: 300,
  },
  {
    id: 5,
    category: "Praying",
    title:
      "Walled gardens mean online writing is dead. Long live online writing!",
    author: "Kiley Larsen",
    views: 180,
  },
];

const MostPopular: FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.titleIcon}>
          <i className="fa-solid fa-chart-line fa-fw"></i>
        </span>
        Trending on Notebook
      </h2>

      {popular.map((item) => (
        <div className={styles.textContainer} key={item.id}>
          <h5 className={styles.postTitle}>
            <Link href="/">{item.title}</Link>
          </h5>
          <div className={styles.details}>
            <span className={styles.username}>
              <Link href="/">{item.author}</Link>
            </span>
            <span className={styles.DetailIcon}>
              <i className="fa-regular fa-eye fa-fw"></i> {item.views}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MostPopular;
