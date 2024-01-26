import { MouseEvent } from "react";
import { IIcon } from "../fontAwesomeIcon/IIcon";

/**
 * Social button interface.
 */
export interface ISocialButton {
  /**
   * Icon interface.
   */
  icon: IIcon;
  /**
   * Label of the button.
   */
  label: string;
  /**
   * Onclick event handler.
   */
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
