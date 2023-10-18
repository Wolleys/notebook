import { FC } from "react";
import Post from "@/components/post";
import SideBarMenu from "@/components/sideBarMenu";
import FeedsTab from "../../../../components/feedsTab";
import ParentContainer from "@/containers/ParentContainer";

const Following: FC = () => {
  return (
    <ParentContainer>
      <FeedsTab activeTab="/feed/following">
        <Post />
      </FeedsTab>
      <SideBarMenu />
    </ParentContainer>
  );
};

export default Following;
