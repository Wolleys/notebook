import { FC } from "react";
import Post from "@/components/post";
import NavTabs from "@/components/navTabs";
import { feedsTabs } from "@/utils/navItems";
import recentPosts from "@/mockup/recentPosts";
import SideBarMenu from "@/components/sideBarMenu";
import ParentContainer from "@/containers/parentContainer";

const Feed: FC = () => {
  return (
    <ParentContainer>
      <NavTabs activeTab="/feed" navItems={feedsTabs}>
        <Post posts={recentPosts} />
      </NavTabs>
      <SideBarMenu />
    </ParentContainer>
  );
};

export default Feed;
