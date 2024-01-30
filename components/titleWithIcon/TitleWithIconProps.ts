import { IIcon } from "../fontAwesomeIcon/IIcon";

/**
 * Title with icon props.
 */
export interface TitleWithIconProps {
  /**
   * Icon interface.
   */
  icon: IIcon;
  /**
   * Header title.
   */
  title: string;
  /**
   * Allow custom class name for the icon.
   */
  iconClassName?: string;
}
