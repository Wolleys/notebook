import { FC } from "react";
import styles from "./fontAwesomeIcon.module.css";
import { FontAwesomeIconProps } from "./FontAwesomeIconProps";

const FontAwesomeIcon: FC<FontAwesomeIconProps> = ({ icon, customClass }) => {
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
