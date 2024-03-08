"use client";

import { FC } from "react";
import NavTabs from "@/components/navTabs";
import { useParams } from "next/navigation";
import { profileTabs } from "@/utils/navItems";
import SideBarMenu from "@/components/sideBarMenu";
import ParentContainer from "@/containers/parentContainer";
import FeaturedWriters from "@/components/featuredWriters";
import featuredWriters from "../../../mockup/featuredWriters";
import { profileNavTabs } from "@/components/tabs/profileNavTabs";
import { ProfileNavTabsProps } from "@/components/tabs/ProfileNavTabsProps";

/**
 * Component which shows the profile page.
 * @returns The parent container that renders the profile page component.
 */
const Profile: FC = () => {
  var { profile } = useParams();
  profile = decodeURIComponent(profile.toString());

  const props: ProfileNavTabsProps = { profile, tabs: profileTabs };
  const tabs = profileNavTabs(props);

  return (
    <ParentContainer>
      <NavTabs activeTab={`/${profile}`} tabs={tabs}>
        <h3>{profile} Profile Page</h3>
      </NavTabs>
      <SideBarMenu>
        <FeaturedWriters featuredWriters={featuredWriters} />
      </SideBarMenu>
    </ParentContainer>
  );
};

export default Profile;
