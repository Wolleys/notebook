import { FC } from "react";
import styles from "./incons.module.css";
import { IconProps } from "@/interfaces";

interface FAIProps {
  iconProps: IconProps;
  customClass?: string; // Allow custom class name from styles
}

const FontAwesomeIcon: FC<FAIProps> = ({ iconProps, customClass }) => {
  const { className, iconName, iconType } = iconProps;
  // Use custom class name if provided, otherwise, use the default class from styles
  const dynamicClassName = customClass || styles.icons;
  return (
    <i
      className={`${iconType} fa-${iconName} fa-fw ${dynamicClassName} ${className}`}
    />
  );
};

export default FontAwesomeIcon;
