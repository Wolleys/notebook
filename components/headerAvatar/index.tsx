"use client";

import { FC, useState } from "react";
import Image from "next/image";
import styles from "./headeravatar.module.css";

const HeaderAvatar: FC = () => {
  const [open, setOpen] = useState<Boolean>(false);
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <div className={styles.profile} onClick={handleToggle}>
        <Image src="/profile-pic.png" alt="profile" width={32} height={32} />
      </div>
      {open && <div className={styles.settingsMenu}></div>}
    </>
  );
};

export default HeaderAvatar;
