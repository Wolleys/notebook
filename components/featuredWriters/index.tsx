import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { magicIcon } from "@/icons";
import TitleWithIcon from "../titleWithIcon";
import styles from "./featuredwriters.module.css";
import writerPic from "../../public/profile-pic.png";
import featuredWriters from "../../mockup/featuredWriters";

const FeaturedWriters: FC = () => {
  return (
    <section className={styles.container}>
      <TitleWithIcon
        icon={magicIcon}
        title="Featured Writers"
        iconClassName={styles.titleIcon}
      />

      {featuredWriters.slice(0, 5).map((item) => (
        <div className={styles.writerContainer} key={item.id}>
          <div className={styles.writerAvatar}>
            <Image width={40} height={40} alt="writer" src={writerPic} />
          </div>
          <div className={styles.writerInfo}>
            <h5 className={styles.writerName}>
              <Link href={`/@${item.username}`}>{item.name}</Link>
            </h5>
            <p className={styles.church}>{item.church}</p>
          </div>
          <button className={styles.button}>Follow</button>
        </div>
      ))}
      <Link href="/" className="seeMore">
        See more suggestions
      </Link>
    </section>
  );
};

export default FeaturedWriters;
