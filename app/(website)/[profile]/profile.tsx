"use client";

import { FC } from "react";
import styles from "./profile.module.css";
import { useParams } from "next/navigation";
import SideBarMenu from "@/components/sideBarMenu";
import ParentContainer from "@/containers/parentContainer";

const Profile: FC = () => {
  var { profile } = useParams();
  profile = decodeURIComponent(profile.toString());

  return (
    <ParentContainer>
      <div className={styles.container}>
        <h3>{profile} Profile Page</h3>
      </div>
      <SideBarMenu />
    </ParentContainer>
  );
};

export default Profile;
