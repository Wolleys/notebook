import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./slug.module.css";
import Comments from "@/components/comments";
import AuthorCard from "@/components/authorCard";
import authorData from "../../../../mockup/authorData";
import FontAwesomeIcon from "@/components/fontAwesomeIcon";
import postPic from "../../../../public/imgs/featured.webp";
import { heartIcon, commentIcon, bookmarkIcon, shareIcon } from "@/icons";

const categories = { cats: ["Inspiration"] };

const Slug: FC = () => {
  return (
    <div className={styles.container}>
      <article>
        <div className={styles.postDetails}>
          <span className={styles.categories}>
            <ul>
              {categories.cats.map((category, index) => (
                <li key={index}>
                  <Link href="/">{category}</Link>
                </li>
              ))}
            </ul>
          </span>
          <div className={styles.postDate}>
            <span>
              13 October, 2023 <span>•</span> 8 min read
            </span>
          </div>
          <span className={styles.authorName}>
            <Link href={`/@testuser`}>Jane Doe</Link>
          </span>
        </div>
        <h1 className={styles.postTitle}>
          Architectural Engineering Wonders of the modern era for your
          Inspiration
        </h1>
        <div className={styles.socialContainer}>
          <div className={styles.postData}>
            <span>
              <FontAwesomeIcon icon={heartIcon} />
              <span className={styles.postNumbers}>200</span>
            </span>
            <span>
              <FontAwesomeIcon icon={commentIcon} />
              <span className={styles.postNumbers}>350</span>
            </span>
          </div>
          <div className={styles.postData}>
            <span>
              <FontAwesomeIcon icon={bookmarkIcon} />
            </span>
            <span>
              <FontAwesomeIcon icon={shareIcon} />
            </span>
          </div>
        </div>
        <figure className={styles.imageContainer}>
          <Image
            alt="post-image"
            width={780}
            height={454}
            quality={100}
            src={postPic}
            className={styles.image}
          />
        </figure>
        <div className={styles.postDesc}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quae
            molestias consectetur fuga, ut accusamus tenetur totam laborum
            minima ad, numquam aperiam voluptatem molestiae veritatis ipsum
            fugit porro repellendus odio?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quae
            molestias consectetur fuga, ut accusamus tenetur totam laborum
            minima ad, numquam aperiam voluptatem molestiae veritatis ipsum
            fugit porro repellendus odio?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quae
            molestias consectetur fuga, ut accusamus tenetur totam laborum
            minima ad, numquam aperiam voluptatem molestiae veritatis ipsum
            fugit porro repellendus odio?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quae
            molestias consectetur fuga, ut accusamus tenetur totam laborum
            minima ad, numquam aperiam voluptatem molestiae veritatis ipsum
            fugit porro repellendus odio?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quae
            molestias consectetur fuga, ut accusamus tenetur totam laborum
            minima ad, numquam aperiam voluptatem molestiae veritatis ipsum
            fugit porro repellendus odio?
          </p>
          <br />
        </div>
      </article>
      <AuthorCard authorData={authorData} />
      <Comments />
    </div>
  );
};

export default Slug;
