"use client";

import { FC } from "react";
import NavTabs from "@/components/navTabs";
import { useParams } from "next/navigation";
import { ProfileTabsProps } from "@/interfaces";
import { profileTabs } from "@/utils/formatTabs";
import { profileNavTabs } from "@/utils/navItems";
import SideBarMenu from "@/components/sideBarMenu";
import ParentContainer from "@/containers/parentContainer";
import FeaturedWriters from "@/components/featuredWriters";
import featuredWriters from "../../../../mockup/featuredWriters";

const Lists: FC = () => {
  var { profile } = useParams();
  profile = decodeURIComponent(profile.toString());

  const props: ProfileTabsProps = {
    profile,
    tabs: profileNavTabs,
  };
  const tabs = profileTabs(props);

  return (
    <ParentContainer>
      <NavTabs activeTab={`/${profile}/lists`} navItems={tabs}>
        <h3>{profile} Lists Page</h3>
      </NavTabs>
      <SideBarMenu>
        <FeaturedWriters featuredWriters={featuredWriters} />
      </SideBarMenu>
    </ParentContainer>
  );
};

export default Lists;
