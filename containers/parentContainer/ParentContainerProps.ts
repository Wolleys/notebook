import { ReactNode } from "react";

/**
 * Parent container props.
 */
export interface ParentContainerProps {
  /**
   * Chidren elements to be rendered.
   */
  children: ReactNode;
  /**
   * Decide whether to show the featured categories.
   */
  showFeatured?: boolean;
}
