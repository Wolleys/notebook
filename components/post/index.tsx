import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./post.module.css";
import authorPic from "../../public/profile-pic.png";
import postPic from "../../public/imgs/featured.webp";

interface PostProps {
  posts: {
    id: number;
    author: string;
    updatedDate: string;
    title: string;
    desc: string;
    categories: string | string[];
    imageUrl: string;
    username: string;
  }[];
}

const Post: FC<PostProps> = ({ posts }) => {
  return (
    <>
      {posts.map((item) => (
        <div className={styles.container} key={item.id}>
          <div className={styles.textContainer}>
            <div className={styles.details}>
              <div className={styles.authorAvatar}>
                <Image width={24} height={24} alt="author" src={authorPic} />
                <span className={styles.authorName}>
                  <Link href={`/@${item.username}`}>{item.author}</Link>
                </span>
              </div>
              <div className={styles.postDate}>
                <span>
                  {item.updatedDate} <span>•</span> 8 min read
                </span>
              </div>
            </div>
            <h5 className={styles.postHeader}>
              <Link href="/">{item.title}</Link>
            </h5>
            <p className={styles.postDesc}>
              {item.desc.substring(0, 160) + "..."}
            </p>
            <div className={styles.footer}>
              <span className={styles.categories}>
                {Array.isArray(item.categories) ? (
                  <ul>
                    {item.categories.slice(0, 2).map((category, index) => (
                      <li key={index}>
                        <Link href="/">{category}</Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <ul>
                    <li>
                      <Link href="/">{item.categories}</Link>
                    </li>
                  </ul>
                )}
              </span>
              <span className={styles.footerIcons}>
                <i className="fa-regular fa-bookmark fa-fw"></i>
              </span>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <Link href="/">
              <Image
                alt=""
                priority
                quality={100}
                src={postPic}
                sizes="100vw"
                className={styles.image}
              />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
