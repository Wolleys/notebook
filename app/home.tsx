import { FC } from "react";
import PostsList from "@/components/postsList";
import SideBarMenu from "@/components/sideBarMenu";
import ParentContainer from "@/containers/parentContainer";

const Home: FC = () => {
  return (
    <ParentContainer showFeatured={true}>
      <PostsList />
      <SideBarMenu />
    </ParentContainer>
  );
};

export default Home;
