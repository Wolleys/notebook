import { FC } from "react";
import SideBarMenu from "@/components/sideBarMenu";
import FeedsTab from "../../../components/feedsTab";
import ParentContainer from "@/containers/ParentContainer";

const Explore: FC = () => {
  return (
    <ParentContainer>
      <FeedsTab activeTab="/explore">
        <h4>Explore content</h4>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel quae
          molestias consectetur fuga, ut accusamus tenetur totam laborum minima
          ad, numquam aperiam voluptatem molestiae veritatis ipsum fugit porro
          repellendus odio?
        </p>
        <br />
      </FeedsTab>
      <SideBarMenu />
    </ParentContainer>
  );
};

export default Explore;
