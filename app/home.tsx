import { FC } from "react";
import PostsList from "@/components/postsList";
import mostPopular from "../mockup/mostPopular";
import SideBarMenu from "@/components/sideBarMenu";
import MostPopular from "@/components/mostPopular";
import topCategories from "../mockup/topCategories";
import TopCategories from "@/components/topCategories";
import featuredWriters from "../mockup/featuredWriters";
import FeaturedWriters from "@/components/featuredWriters";
import ParentContainer from "@/containers/parentContainer";

/**
 * Component which shows the home page.
 * @returns The parent container that renders the home page component.
 */
const Home: FC = () => {
  const sections = [
    <MostPopular key="mostPopular" mostPopular={mostPopular} />,
    <TopCategories key="topCategories" topCategories={topCategories} />,
  ];

  return (
    <ParentContainer showFeatured={true}>
      <PostsList />
      <SideBarMenu sidebarSections={sections}>
        <FeaturedWriters featuredWriters={featuredWriters} />
      </SideBarMenu>
    </ParentContainer>
  );
};

export default Home;
