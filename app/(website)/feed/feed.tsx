import { FC } from "react";
import Post from "@/components/post";
import SideBarMenu from "@/components/sideBarMenu";
import FeedsTab from "../../../components/feedsTab";
import ParentContainer from "@/containers/ParentContainer";

const Feed: FC = () => {
  return (
    <ParentContainer>
      <FeedsTab activeTab="/feed">
        <Post />
      </FeedsTab>
      <SideBarMenu />
    </ParentContainer>
  );
};

export default Feed;
