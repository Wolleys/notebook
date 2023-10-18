import { FC } from "react";
import SideBarMenu from "@/components/sideBarMenu";
import FeedsTab from "../../../../components/feedsTab";
import ParentContainer from "@/containers/ParentContainer";

const Following: FC = () => {
  return (
    <ParentContainer>
      <FeedsTab activeTab="/feed/following">
        <h4>Following content</h4>
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

export default Following;
