import { FC } from "react";
import styles from "./faicons.module.css";
import { IconProps } from "@/interfaces";

interface FAIProps {
  icon: IconProps;
  customClass?: string; // Allow custom class name from styles
}

const FontAwesomeIcon: FC<FAIProps> = ({ icon, customClass }) => {
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
