import { FC } from "react";
import PostsList from "@/components/postsList";
import SideBarMenu from "@/components/sideBarMenu";
import MostPopular from "@/components/mostPopular";
import TopCategories from "@/components/topCategories";
import FeaturedWriters from "@/components/featuredWriters";
import ParentContainer from "@/containers/parentContainer";

const Home: FC = () => {
  const sections = [
    <MostPopular key="mostPopular" />,
    <TopCategories key="topCategories" />,
  ];

  return (
    <ParentContainer showFeatured={true}>
      <PostsList />
      <SideBarMenu sidebarSections={sections}>
        <FeaturedWriters />
      </SideBarMenu>
    </ParentContainer>
  );
};

export default Home;
