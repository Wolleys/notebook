"use client";

import { FC, useRef } from "react";
import Image from "next/image";
import useToggle from "@/hooks/useToggle";
import styles from "./headeravatar.module.css";
import useClickOutside from "@/hooks/useClickOutside";

const HeaderAvatar: FC = () => {
  const settingsMenuRef = useRef(null);
  const { value, toggle } = useToggle(false);

  const closeSettingsMenu = (): void => {
    if (value) {
      toggle();
    }
  };
  useClickOutside(settingsMenuRef, closeSettingsMenu);

  return (
    <span ref={settingsMenuRef}>
      <div className={styles.profile} onClick={toggle}>
        <Image src="/profile-pic.png" alt="profile" width={32} height={32} />
      </div>
      {value && <div className={styles.settingsMenu}></div>}
    </span>
  );
};

export default HeaderAvatar;
