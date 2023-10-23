import { FC } from "react";
import Link from "next/link";
// import { Post } from "@/types";
// import GetAllPosts from "@/lib/getAllPosts";
import NavTabs from "@/components/navTabs";
import { feedsTabs } from "@/utils/navItems";
import SideBarMenu from "@/components/sideBarMenu";
import ParentContainer from "@/containers/parentContainer";

const Explore: FC = async () => {
  // const postsData: Promise<Post[]> = GetAllPosts();
  // const posts = await postsData;

  return (
    <ParentContainer>
      <NavTabs activeTab="/explore" navItems={feedsTabs}>
        <h4>Explore Posts</h4>

        {/* {posts.map((item) => (
          <p key={item.id}>
            <Link href={`/posts/${item.slug}`}>{item.title}</Link>
          </p>
        ))} */}
        <br />
      </NavTabs>
      <SideBarMenu />
    </ParentContainer>
  );
};

export default Explore;
