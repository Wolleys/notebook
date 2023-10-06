import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./featured.module.css";
import authorPic from "../../public/profile-pic.png";
import featuredPostPic from "../../public/imgs/featured1.webp";

const Featured: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.featuredPost}>
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
              <Link href="/">
                Hostinger Becomes a Golden Partner of the Awwwards Conference
              </Link>
            </h3>
            <p className={styles.featuredPostDesc}>
              Hostinger is joining the 17th edition of the Awwwards Digital
              Thinkers Conference as the main sponsor to foster connections in
              the digital creative community. This prestigious event, known for
              celebrating innovation in web design, will take place in Amsterdam
              from 11 to 13 October.
            </p>
          </div>
          <div className={styles.authorContainer}>
            <div className={styles.authorAvatar}>
              <Image width={56} height={56} alt="author" src={authorPic} />
            </div>
            <div className={styles.authorInfo}>
              <p className={styles.authorName}>
                <Link href="/">Kotryna D</Link>
              </p>
              <p className={styles.modifiedDate}>Sep 29, 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
