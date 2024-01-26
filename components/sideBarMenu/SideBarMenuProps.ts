import { ReactNode } from "react";

/**
 * Sidebar props.
 */
export interface SideBarMenuProps {
  /**
   * childran are the elements to be rendered on the page.
   */
  children: ReactNode;
  /**
   * Other sections to render on the sidebar.
   */
  sidebarSections?: ReactNode[];
}
