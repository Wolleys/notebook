import { FC } from "react";
import SideBarMenu from "@/components/sideBarMenu";
import FeedsTab from "../../../components/feedsTab";
import ParentContainer from "@/containers/ParentContainer";

const Feed: FC = () => {
  return (
    <ParentContainer>
      <FeedsTab />
      <SideBarMenu />
    </ParentContainer>
  );
};

export default Feed;
