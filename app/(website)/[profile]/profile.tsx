"use client";

import { FC } from "react";
import styles from "./profile.module.css";
import { useParams } from "next/navigation";

const Profile: FC = () => {
  var { profile } = useParams();
  profile = decodeURIComponent(profile.toString());

  return (
    <div className={styles.container}>
      <h3>{profile} Profile Page</h3>
    </div>
  );
};

export default Profile;
