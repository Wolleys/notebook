import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./post.module.css";
import authorPic from "../../public/profile-pic.png";
import postPic from "../../public/imgs/featured.webp";

const desc = `Lorem, ipsum dolor sit amet consectetur adipisicing elit. In sunt,
tempora adipisci totam eaque voluptatibus itaque, pariatur ipsum sed
maxime voluptatem laborum rerum fuga porro assumenda odit earum error
nihil.`;

const Post: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.details}>
          <div className={styles.authorAvatar}>
            <Image width={24} height={24} alt="author" src={authorPic} />
            <span className={styles.authorName}>
              <Link href="/">Júlia Araújo</Link>
            </span>
          </div>
          <div className={styles.postDate}>
            <span>
              Oct 10 <span>•</span> 8 min read
            </span>
          </div>
        </div>
        <h5 className={styles.postHeader}>
          <Link href="/">
            4 Essential Features for Content Marketing Managers
          </Link>
        </h5>
        <p className={styles.postDesc}>{desc.substring(0, 160) + "..."}</p>
      </div>
      <div className={styles.imageContainer}>
        <Link href="/">
          <Image
            alt=""
            fill
            priority
            quality={100}
            src={postPic}
            sizes="100vw"
            className={styles.image}
          />
        </Link>
      </div>
    </div>
  );
};

export default Post;
