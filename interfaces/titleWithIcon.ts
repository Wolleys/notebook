import { IconProps } from "./index";

export interface TitleWithIcon {
  icon: IconProps;
  title: string;
  iconClassName?: string; // Allow custom class name for the icon
}
