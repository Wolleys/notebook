import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import writerPic from "../../public/profile-pic.png";
import styles from "./featuredwriters.module.css";

const writers = [
  { id: 1, name: "Evelyn Taylor", church: "Baptist Church" },
  { id: 2, name: "Nova Reid", church: "Methodist Church" },
  { id: 3, name: "Tamar Adler", church: "Presbyterian Church of East Africa" },
  { id: 4, name: "Ali Slagle", church: "Nairobi Pentecostal Church" },
  { id: 5, name: "Nicolina Torres", church: "Jubilee Christian Centre" },
  { id: 6, name: "Kiley Larsen", church: "Redeemed Gospel Church" },
  { id: 7, name: "Maxi Contieri", church: "Deliverance Church" },
  { id: 8, name: "Kamran Ahmad", church: "Friends Church" },
];

const FeaturedWriters = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        <span className={styles.titleIcon}>
          <i className="fa-solid fa-wand-magic-sparkles fa-fw"></i>
        </span>
        Featured Writers
      </h2>

      {writers.map((item) => (
        <div className={styles.writerContainer} key={item.id}>
          <div className={styles.writerAvatar}>
            <Image width={40} height={40} alt="writer" src={writerPic} />
          </div>
          <div className={styles.writerInfo}>
            <h5 className={styles.writerName}>
              <Link href="/">{item.name}</Link>
            </h5>
            <p className={styles.church}>{item.church}</p>
          </div>
          <button className={styles.button}>Follow</button>
        </div>
      ))}
      <Link href="/" className="seeMore">
        See more suggestions
      </Link>
    </div>
  );
};

export default FeaturedWriters;
