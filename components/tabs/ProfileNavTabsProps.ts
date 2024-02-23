import { INavTabs } from "../navTabs/INavTabs";

/**
 * Profile nav tabs props.
 */
export interface ProfileNavTabsProps {
  /**
   * Profile name.
   */
  profile: string;
  /**
   * Nav tabs interface.
   */
  tabs: INavTabs[];
}
