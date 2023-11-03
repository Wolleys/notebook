import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./authorcard.module.css";
import { AuthorCardProps } from "@/interfaces";
import authorPic from "../../public/profile-pic.png";

const AuthorCard: FC<AuthorCardProps> = ({ authorData }) => {
  const { name, username, bio, followers } = authorData;
  return (
    <div className={styles.container}>
      <div className={styles.authorDetails}>
        <div className={styles.authorAvatar}>
          <Image width={72} height={72} alt="author" src={authorPic} />
        </div>
        <div className={styles.authorInfo}>
          <h4 className={styles.author}>The Author</h4>
          <p className={styles.authorName}>{name}</p>
          <div className={styles.follow}>
            <button>Follow</button>
          </div>
        </div>
        <button className={styles.button}>Follow</button>
      </div>
      <div className={styles.authorBio}>{bio}</div>
      <div className={styles.containerFooter}>
        <span>
          <Link href={`/@${username}`} className="seeMore">
            More from {name}
          </Link>
          <span className={styles.ball}>•</span>
          <Link href="/" className="seeMore">
            {followers} Followers
          </Link>
        </span>
      </div>
    </div>
  );
};

export default AuthorCard;
