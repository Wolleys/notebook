"use client";

import { FC } from "react";
import NavTabs from "@/components/navTabs";
import { useParams } from "next/navigation";
import { profileTabs } from "@/utils/navItems";
import SideBarMenu from "@/components/sideBarMenu";
import { formatProfileTabs } from "@/utils/formatTabs";
import ParentContainer from "@/containers/parentContainer";
import FeaturedWriters from "@/components/featuredWriters";
import featuredWriters from "../../../mockup/featuredWriters";

const Profile: FC = () => {
  var { profile } = useParams();
  profile = decodeURIComponent(profile.toString());
  const tabs = formatProfileTabs(profile, profileTabs);

  return (
    <ParentContainer>
      <NavTabs activeTab={`/${profile}`} navItems={tabs}>
        <h3>{profile} Profile Page</h3>
      </NavTabs>
      <SideBarMenu>
        <FeaturedWriters featuredWriters={featuredWriters} />
      </SideBarMenu>
    </ParentContainer>
  );
};

export default Profile;
