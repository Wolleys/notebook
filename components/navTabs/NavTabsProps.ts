import { ReactNode } from "react";
import { INavTabs } from "./INavTabs";

/**
 * Nav tabs props.
 */
export interface NavTabsProps {
  /**
   * The active tab that's clicked.
   */
  activeTab: string;
  /**
   * Nav tabs interface.
   */
  tabs: INavTabs[];
  /**
   * The children nodes to be added.
   */
  children: ReactNode;
}
