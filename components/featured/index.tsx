import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./featured.module.css";
import authorPic from "../../public/profile-pic.png";
import featuredPosts from "../../mockup/featuredPosts";
import featuredPostPic from "../../public/imgs/featured1.webp";

const Featured: FC = () => {
  return (
    <div className={styles.container}>
      {featuredPosts.map((item) => (
        <div className={styles.featuredPost} key={item.id}>
          <div className={styles.postImage}>
            <Link href="/">
              <Image
                alt=""
                priority
                width={640}
                height={373}
                quality={100}
                src={featuredPostPic}
                className={styles.image}
              />
            </Link>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.postBody}>
              <p className={styles.featuredPostTitle}>Featured Story</p>
              <h3 className={styles.featuredPostHeader}>
                <Link href="/">{item.title}</Link>
              </h3>
              <p className={styles.featuredPostDesc}>
                {item.desc.substring(0, 179) + "..."}
              </p>
            </div>
            <div className={styles.authorContainer}>
              <div className={styles.authorAvatar}>
                <Image width={56} height={56} alt="author" src={authorPic} />
              </div>
              <div className={styles.authorInfo}>
                <p className={styles.authorName}>
                  <Link href={`/@${item.username}`}>{item.author}</Link>
                </p>
                <p className={styles.modifiedDate}>{item.updatedDate}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Featured;
