import { FC } from "react";
import Post from "@/components/post";
import SideBarMenu from "@/components/sideBarMenu";
import FeedsTab from "../../../components/feedsTab";
import recentPosts from "../../../mockup/recentPosts";
import ParentContainer from "@/containers/parentContainer";

const Feed: FC = () => {
  return (
    <ParentContainer>
      <FeedsTab activeTab="/feed">
        <Post posts={recentPosts} />
      </FeedsTab>
      <SideBarMenu />
    </ParentContainer>
  );
};

export default Feed;
