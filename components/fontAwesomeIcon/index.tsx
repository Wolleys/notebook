import { FC } from "react";
import styles from "./faicon.module.css";
import { FAIconProps } from "@/interfaces";

const FontAwesomeIcon: FC<FAIconProps> = ({ icon, customClass }) => {
  const { className, iconName, iconType } = icon;
  // Use custom class name if provided, otherwise, use the default class from styles
  const dynamicClassName = customClass || styles.icons;
  return (
    <i
      className={`${iconType} fa-${iconName} fa-fw ${dynamicClassName} ${className}`}
    />
  );
};

export default FontAwesomeIcon;
