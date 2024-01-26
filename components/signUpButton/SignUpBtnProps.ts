import { ReactNode, MouseEvent } from "react";
import { IIcon } from "../fontAwesomeIcon/IIcon";

/**
 * Signup button props.
 */
export interface SignUpBtnProps {
  /**
   * Icon interface.
   */
  icon: IIcon;
  /**
   * Children elements to render on the page.
   */
  children: ReactNode;
  /**
   * Onclick event handler.
   */
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}
