import { FC } from "react";
import Post from "@/components/post";
import NavTabs from "@/components/navTabs";
import { feedsTabs } from "@/utils/navItems";
import recentPosts from "@/mockup/recentPosts";
import SideBarMenu from "@/components/sideBarMenu";
import MostPopular from "@/components/mostPopular";
import TopCategories from "@/components/topCategories";
import mostPopular from "../../../../mockup/mostPopular";
import FeaturedWriters from "@/components/featuredWriters";
import ParentContainer from "@/containers/parentContainer";
import topCategories from "../../../../mockup/topCategories";
import featuredWriters from "../../../../mockup/featuredWriters";

/**
 * Component which shows the following feed page.
 * @returns The parent container that renders the following feed page component.
 */
const Following: FC = () => {
  const sections = [
    <MostPopular key="mostPopular" mostPopular={mostPopular} />,
    <TopCategories key="topCategories" topCategories={topCategories} />,
  ];

  return (
    <ParentContainer>
      <NavTabs activeTab="/feed/following" tabs={feedsTabs}>
        <Post posts={recentPosts} />
      </NavTabs>
      <SideBarMenu sidebarSections={sections}>
        <FeaturedWriters featuredWriters={featuredWriters} />
      </SideBarMenu>
    </ParentContainer>
  );
};

export default Following;
