import { FC } from "react";
import Post from "@/components/post";
import NavTabs from "@/components/navTabs";
import { feedsTabs } from "@/utils/navItems";
import recentPosts from "@/mockup/recentPosts";
import SideBarMenu from "@/components/sideBarMenu";
import MostPopular from "@/components/mostPopular";
import TopCategories from "@/components/topCategories";
import FeaturedWriters from "@/components/featuredWriters";
import ParentContainer from "@/containers/parentContainer";

const Feed: FC = () => {
  const sections = [
    <MostPopular key="mostPopular" />,
    <TopCategories key="topCategories" />,
  ];

  return (
    <ParentContainer>
      <NavTabs activeTab="/feed" navItems={feedsTabs}>
        <Post posts={recentPosts} />
      </NavTabs>
      <SideBarMenu sidebarSections={sections}>
        <FeaturedWriters />
      </SideBarMenu>
    </ParentContainer>
  );
};

export default Feed;
