import { FC } from "react";
import Link from "next/link";
// import { Post } from "@/types";
// import GetAllPosts from "@/lib/getAllPosts";
import NavTabs from "@/components/navTabs";
import { feedsTabs } from "@/utils/navItems";
import SideBarMenu from "@/components/sideBarMenu";
import MostPopular from "@/components/mostPopular";
import mostPopular from "../../../mockup/mostPopular";
import TopCategories from "@/components/topCategories";
import topCategories from "../../../mockup/topCategories";
import FeaturedWriters from "@/components/featuredWriters";
import ParentContainer from "@/containers/parentContainer";
import featuredWriters from "../../../mockup/featuredWriters";

const Explore: FC = async () => {
  const sections = [
    <MostPopular key="mostPopular" mostPopular={mostPopular} />,
    <TopCategories key="topCategories" topCategories={topCategories} />,
  ];
  // const postsData: Promise<Post[]> = GetAllPosts();
  // const posts = await postsData;

  return (
    <ParentContainer>
      <NavTabs activeTab="/explore" tabs={feedsTabs}>
        <h4>Explore Posts</h4>

        {/* {posts.map((item) => (
          <p key={item.id}>
            <Link href={`/posts/${item.slug}`}>{item.title}</Link>
          </p>
        ))} */}
        <br />
      </NavTabs>
      <SideBarMenu sidebarSections={sections}>
        <FeaturedWriters featuredWriters={featuredWriters} />
      </SideBarMenu>
    </ParentContainer>
  );
};

export default Explore;
