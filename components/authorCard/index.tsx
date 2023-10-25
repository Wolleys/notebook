import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./authorcard.module.css";
import authorPic from "../../public/profile-pic.png";

const AuthorCard: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.authorDetails}>
        <div className={styles.authorAvatar}>
          <Image width={72} height={72} alt="author" src={authorPic} />
        </div>
        <div className={styles.authorInfo}>
          <h4 className={styles.author}>The Author</h4>
          <p className={styles.authorName}>Joshua Wood</p>
          <div className={styles.follow}>
            <button>Follow</button>
          </div>
        </div>
        <button className={styles.button}>Follow</button>
      </div>
      <div className={styles.authorBio}>
        Joshua is a Microsoft Azure Certified Cloud Professional and a Google
        Certified Associate Cloud Engineer. A Data Analytics at Acme,
        specializing in the use of cloud infrastructure for Machine Learning and
        Deep Learning operation at scale.
      </div>
      <div className={styles.containerFooter}>
        <span>
          <Link href={`/@joshua`} className="seeMore">
            More from Joshua Wood
          </Link>
          <span className={styles.ball}>•</span>
          <Link href="/" className="seeMore">
            413 Followers
          </Link>
        </span>
      </div>
    </div>
  );
};

export default AuthorCard;
