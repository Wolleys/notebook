"use client";

import { FC } from "react";
import Image from "next/image";
import useToggle from "@/hooks/useToggle";
import styles from "./headeravatar.module.css";

const HeaderAvatar: FC = () => {
  const { value, toggle } = useToggle(false);

  return (
    <>
      <div className={styles.profile} onClick={toggle}>
        <Image src="/profile-pic.png" alt="profile" width={32} height={32} />
      </div>
      {value && <div className={styles.settingsMenu}></div>}
    </>
  );
};

export default HeaderAvatar;
